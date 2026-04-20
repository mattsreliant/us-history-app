// Fetch presidential portrait URLs from Wikipedia API and update JSON files
const fs = require("fs");
const path = require("path");
const https = require("https");
const dir = path.join("src", "content", "presidents");

// Map president JSON IDs to Wikipedia article titles
const wikiTitles = {
  "george-washington": "George_Washington",
  "john-adams": "John_Adams",
  "thomas-jefferson": "Thomas_Jefferson",
  "james-madison": "James_Madison",
  "james-monroe": "James_Monroe",
  "john-quincy-adams": "John_Quincy_Adams",
  "andrew-jackson": "Andrew_Jackson",
  "martin-van-buren": "Martin_Van_Buren",
  "william-henry-harrison": "William_Henry_Harrison",
  "john-tyler": "John_Tyler",
  "james-k-polk": "James_K._Polk",
  "zachary-taylor": "Zachary_Taylor",
  "millard-fillmore": "Millard_Fillmore",
  "franklin-pierce": "Franklin_Pierce",
  "james-buchanan": "James_Buchanan",
  "abraham-lincoln": "Abraham_Lincoln",
  "andrew-johnson": "Andrew_Johnson",
  "ulysses-s-grant": "Ulysses_S._Grant",
  "rutherford-b-hayes": "Rutherford_B._Hayes",
  "james-a-garfield": "James_A._Garfield",
  "chester-a-arthur": "Chester_A._Arthur",
  "grover-cleveland-22": "Grover_Cleveland",
  "benjamin-harrison": "Benjamin_Harrison",
  "grover-cleveland-24": "Grover_Cleveland",
  "william-mckinley": "William_McKinley",
  "theodore-roosevelt": "Theodore_Roosevelt",
  "william-howard-taft": "William_Howard_Taft",
  "woodrow-wilson": "Woodrow_Wilson",
  "warren-g-harding": "Warren_G._Harding",
  "calvin-coolidge": "Calvin_Coolidge",
  "herbert-hoover": "Herbert_Hoover",
  "franklin-d-roosevelt": "Franklin_D._Roosevelt",
  "harry-s-truman": "Harry_S._Truman",
  "dwight-d-eisenhower": "Dwight_D._Eisenhower",
  "john-f-kennedy": "John_F._Kennedy",
  "lyndon-b-johnson": "Lyndon_B._Johnson",
  "richard-nixon": "Richard_Nixon",
  "gerald-ford": "Gerald_Ford",
  "jimmy-carter": "Jimmy_Carter",
  "ronald-reagan": "Ronald_Reagan",
  "george-h-w-bush": "George_H._W._Bush",
  "bill-clinton": "Bill_Clinton",
  "george-w-bush": "George_W._Bush",
  "barack-obama": "Barack_Obama",
  "donald-trump": "Donald_Trump",
  "joe-biden": "Joe_Biden",
  "donald-trump-47": "Donald_Trump",
};

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "USHistoryApp/1.0" } }, (res) => {
      let data = "";
      res.on("data", (chunk) => data += chunk);
      res.on("end", () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on("error", reject);
  });
}

async function main() {
  // Batch requests - Wikipedia API supports multiple titles per request
  const entries = Object.entries(wikiTitles);
  // Deduplicate wiki titles for the API call
  const uniqueTitles = [...new Set(Object.values(wikiTitles))];

  // Fetch in batches of 10
  const titleToUrl = {};
  for (let i = 0; i < uniqueTitles.length; i += 10) {
    const batch = uniqueTitles.slice(i, i + 10);
    const titles = batch.join("|");
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=pageimages&format=json&pithumbsize=400`;

    const data = await fetchJSON(url);
    if (data.query && data.query.pages) {
      for (const page of Object.values(data.query.pages)) {
        if (page.thumbnail) {
          titleToUrl[page.title.replace(/ /g, "_")] = page.thumbnail.source;
        }
      }
    }
    // Small delay to be polite to Wikipedia API
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`Fetched ${Object.keys(titleToUrl).length} portrait URLs from Wikipedia API`);

  // Update each president JSON
  let updated = 0;
  for (const [id, wikiTitle] of entries) {
    const file = path.join(dir, id + ".json");
    if (!fs.existsSync(file)) continue;

    const pres = JSON.parse(fs.readFileSync(file, "utf-8"));
    const imgUrl = titleToUrl[wikiTitle];

    if (imgUrl) {
      pres.portraitUrl = imgUrl;
      pres.portraitCredit = `Portrait via Wikimedia Commons. Public domain.`;
      fs.writeFileSync(file, JSON.stringify(pres, null, 2));
      updated++;
      console.log(`  ${id}: ${imgUrl.substring(0, 80)}...`);
    } else {
      console.log(`  ${id}: NO IMAGE FOUND for ${wikiTitle}`);
    }
  }

  console.log(`\n${updated} president files updated with portrait URLs`);
}

main().catch(console.error);
