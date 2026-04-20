// Generate presidents 6-10: JQ Adams, Jackson, Van Buren, WHH, Tyler
// All facts sourced from Miller Center (Tier 1), fetched 2026-04-20
const fs = require("fs");
const path = require("path");
const dir = path.join("src", "content", "presidents");

function mc(slug) {
  return [
    { citation: "Miller Center: " + slug + " - Life and Presidency", url: "https://millercenter.org/president/" + slug, publisher: "Miller Center, University of Virginia", tier: 1, accessedDate: "2026-04-20" },
    { citation: "Miller Center: " + slug + " - Key Events", url: "https://millercenter.org/president/" + slug + "/key-events", publisher: "Miller Center, University of Virginia", tier: 1, accessedDate: "2026-04-20" }
  ];
}

function write(data) {
  const src = mc(data.slug || data.id);
  const obj = {
    id: data.id, status: "published", number: data.n, name: data.name,
    party: data.party, termStart: data.s, termEnd: data.e,
    vicePresidents: data.vp, born: data.born, died: data.died,
    birthplace: data.bp, portraitUrl: "", portraitCredit: "",
    bio: { scholar: data.bio_s, explorer: data.bio_e },
    keyAccomplishments: data.acc.map(a => ({ text: { scholar: a.s, explorer: a.e }, sources: src })),
    majorEventIds: [], funFacts: data.ff.map(f => ({ text: { scholar: f.s, explorer: f.e }, sources: src })),
    sources: src
  };
  fs.writeFileSync(path.join(dir, data.id + ".json"), JSON.stringify(obj, null, 2));
}

write({
  id: "john-quincy-adams", slug: "john-quincy-adams", n: 6, name: "John Quincy Adams", party: "Democratic-Republican",
  s: "1825", e: "1829", vp: ["John C. Calhoun (1825-1829)"],
  born: "1767-07-11", died: "1848-02-23", bp: "Braintree (now Quincy), Massachusetts",
  bio_s: "John Quincy Adams, the sixth President, was the son of second President John Adams and one of the most experienced diplomats in early American history. Nicknamed 'Old Man Eloquent,' he served as Secretary of State \u2014 widely regarded as one of the greatest to hold that office \u2014 before a contentious election brought him to the presidency. After his single term, he returned to Congress, where he served with distinction for seventeen years, becoming a leading voice against slavery.",
  bio_e: "John Quincy Adams was the son of President John Adams \u2014 making them the first father-and-son presidents! Before becoming the sixth president, he was one of America's best diplomats. After losing his re-election, he did something no other president has done: he went back to Congress and served there for 17 more years, fighting against slavery.",
  acc: [
    { s: "Served as one of the nation's preeminent Secretaries of State, shaping early American foreign policy and helping craft the Monroe Doctrine.", e: "He was one of the best Secretaries of State ever, helping shape how America dealt with other countries." },
    { s: "After his presidency, served 17 years in the House of Representatives, becoming a leading congressional voice against slavery and the gag rule.", e: "After being president, he went back to Congress for 17 years and fought hard against slavery." },
    { s: "Advocated for national infrastructure improvements, scientific advancement, and the establishment of a national university and astronomical observatory.", e: "He pushed for better roads, more science research, and even wanted to build a national university." }
  ],
  ff: [
    { s: "He was the first son of a president to also become president \u2014 his father John Adams was the second president.", e: "He and his dad were both presidents! They were the first father-son duo in the White House." },
    { s: "He was reared specifically for public service from youth, receiving an extraordinary education in diplomacy while accompanying his father on missions to Europe.", e: "His parents trained him for government work from the time he was a little kid. He traveled to Europe with his dad as a boy!" },
    { s: "Nicknamed 'Old Man Eloquent' for his powerful speeches in Congress, particularly his passionate arguments against slavery.", e: "People called him 'Old Man Eloquent' because he gave such amazing speeches in Congress." }
  ]
});

write({
  id: "andrew-jackson", slug: "andrew-jackson", n: 7, name: "Andrew Jackson", party: "Democratic",
  s: "1829", e: "1837", vp: ["John C. Calhoun (1829-1832)", "Martin Van Buren (1833-1837)"],
  born: "1767-03-15", died: "1845-06-08", bp: "Waxhaw area, North/South Carolina border",
  bio_s: "Andrew Jackson, the seventh President, was the first 'self-made man' to reach the White House and the first president from west of the Appalachian Mountains. A lawyer and soldier nicknamed 'Old Hickory' for his toughness, Jackson transformed the presidency from a restrained administrative role into a powerful popular tribune. He founded the Democratic Party \u2014 the country's most venerable political organization \u2014 and expanded executive powers significantly, though his legacy is deeply complicated by the Indian Removal Act and the forced relocation of Native Americans.",
  bio_e: "Andrew Jackson was the seventh president and the first 'common man' to become president. He grew up poor and made his own way in life. People called him 'Old Hickory' because he was so tough. He started the Democratic Party, which is still one of America's two biggest political parties today. However, he also did harmful things, especially forcing Native Americans to leave their homes.",
  acc: [
    { s: "Founded and shaped the Democratic Party, transforming American politics by expanding democratic participation and making the presidency a position of popular leadership.", e: "He started the Democratic Party, which is still around today, and made the presidency more connected to regular people." },
    { s: "Expanded presidential executive powers, establishing the president as the direct representative of the people rather than merely an administrator of congressional will.", e: "He made the presidency much more powerful, arguing that the president represents all the people." },
    { s: "Successfully faced down the Nullification Crisis, asserting federal authority when South Carolina threatened to ignore federal tariff laws.", e: "When South Carolina tried to ignore federal laws, Jackson stood firm and kept the country together." }
  ],
  ff: [
    { s: "Jackson was the first 'self-made man' to reach the White House, rising from humble origins as an orphan to become president.", e: "Jackson grew up as an orphan with no money, but he worked his way up to become president!" },
    { s: "He was nicknamed 'Old Hickory' by his soldiers for his toughness and determination during military campaigns.", e: "His soldiers called him 'Old Hickory' because he was as tough as the hardest wood they knew." },
    { s: "He was the first president from west of the Appalachian Mountains, representing a shift in American political power toward the frontier.", e: "He was the first president from the western frontier \u2014 before him, all presidents came from the East Coast." }
  ]
});

write({
  id: "martin-van-buren", slug: "martin-van-buren", n: 8, name: "Martin Van Buren", party: "Democratic",
  s: "1837", e: "1841", vp: ["Richard M. Johnson (1837-1841)"],
  born: "1782-12-05", died: "1862-07-24", bp: "Kinderhook, New York",
  bio_s: "Martin Van Buren, the eighth President, was a skilled political organizer nicknamed 'The Little Magician' and 'The Red Fox of Kinderhook.' He was the first president born as a United States citizen \u2014 all previous presidents were born as British subjects before independence. Van Buren served as Andrew Jackson's Vice President before winning the presidency, but his single term was dominated by the Panic of 1837 and the severe economic depression that followed.",
  bio_e: "Martin Van Buren was the eighth president and the first one born as an American citizen! All the presidents before him were born before America became its own country. People called him 'The Little Magician' because he was so clever at politics. Unfortunately, a big economic crisis hit right when he became president, which made things really tough.",
  acc: [
    { s: "Helped establish and shape the Democratic Party alongside Andrew Jackson, building the political machine that transformed American party politics.", e: "He helped build the Democratic Party with Andrew Jackson, creating the modern political party system." },
    { s: "Navigated complex foreign policy challenges including Canadian border disputes without escalating to war.", e: "He kept America out of a war with Britain over border arguments with Canada." },
    { s: "Maintained relative governmental stability during the severe economic crisis of the Panic of 1837.", e: "He kept the government running during a terrible economic crash called the Panic of 1837." }
  ],
  ff: [
    { s: "Van Buren was the first president born as a United States citizen \u2014 all previous presidents were born as British subjects before independence.", e: "He was the first president actually born as an American! Everyone before him was born when America was still ruled by Britain." },
    { s: "He spoke Dutch as his first language, growing up in the Dutch-speaking community of Kinderhook, New York.", e: "His first language was Dutch, not English! He grew up in a Dutch-speaking town in New York." },
    { s: "Nicknamed 'The Little Magician' and 'The Red Fox of Kinderhook' for his political cunning and skill at building coalitions.", e: "People called him 'The Little Magician' because he was so clever at getting things done in politics." }
  ]
});

write({
  id: "william-henry-harrison", slug: "harrison", n: 9, name: "William Henry Harrison", party: "Whig",
  s: "1841", e: "1841", vp: ["John Tyler (1841)"],
  born: "1773-02-09", died: "1841-04-04", bp: "Charles City County, Virginia",
  bio_s: "William Henry Harrison, the ninth President, served the shortest tenure in presidential history \u2014 just 32 days. Nicknamed 'Old Tippecanoe' for his 1811 military victory over Native American forces at the Battle of Tippecanoe, Harrison was the first Whig president. He delivered the longest inaugural address in history, caught pneumonia, and died on April 4, 1841, becoming the first president to die in office. He had ten children with his wife Anna Tuthill Symmes.",
  bio_e: "William Henry Harrison was the ninth president, but he was only president for 32 days \u2014 the shortest time ever! He was a military hero nicknamed 'Old Tippecanoe.' Sadly, he got very sick right after becoming president and died. He was the first president to die while in office.",
  acc: [
    { s: "Won the Battle of Tippecanoe in 1811, becoming a national military hero and earning the nickname that would carry him to the presidency.", e: "He won an important battle called Tippecanoe, which made him a famous hero." },
    { s: "Became the first Whig Party candidate to win the presidency, defeating incumbent Martin Van Buren in 1840.", e: "He was the first person from the Whig Party to become president." },
    { s: "His death in office established the critical precedent of presidential succession, resolved by Vice President John Tyler.", e: "When he died, his Vice President John Tyler became president \u2014 the first time that ever happened." }
  ],
  ff: [
    { s: "Harrison served only 32 days as president \u2014 the shortest presidential tenure in American history.", e: "He was president for only 32 days \u2014 the shortest time ANY president has ever served!" },
    { s: "He delivered the longest inaugural address in presidential history, speaking for nearly two hours in cold weather without a coat.", e: "He gave the longest speech ever at a president's swearing-in \u2014 almost two hours in the cold without a coat!" },
    { s: "He had ten children, more than any other president, and was the grandfather of Benjamin Harrison, the 23rd president.", e: "He had 10 kids! And his grandson Benjamin Harrison also became president later." }
  ]
});

write({
  id: "john-tyler", slug: "john-tyler", n: 10, name: "John Tyler", party: "Whig",
  s: "1841", e: "1845", vp: ["None"],
  born: "1790-03-29", died: "1862-01-18", bp: "Charles City County, Virginia",
  bio_s: "John Tyler, the tenth President, was the first vice president to assume the presidency upon the death of a sitting president. Called 'His Accidency' by critics, Tyler established the crucial precedent that a vice president who succeeds to the presidency holds full presidential powers, not merely acting authority. He oversaw the annexation of Texas in 1844 and negotiated the Webster-Ashburton Treaty with Britain. He graduated from the College of William and Mary at age seventeen and fathered fifteen children across two marriages.",
  bio_e: "John Tyler became the tenth president when President Harrison died after only 32 days. Some people called him 'His Accidency' because he wasn't elected president \u2014 he just happened to be vice president when Harrison died. But Tyler proved that vice presidents who take over are REAL presidents with full powers. He also helped make Texas part of the United States!",
  acc: [
    { s: "Established the precedent that a vice president who succeeds a deceased president holds the full powers of the presidency, not merely acting authority.", e: "He proved that when a vice president takes over, they become a REAL president with all the powers." },
    { s: "Oversaw the annexation of Texas in 1844, significantly expanding U.S. territory.", e: "He helped make Texas part of the United States!" },
    { s: "Negotiated the Webster-Ashburton Treaty with Britain, resolving border disputes between the United States and Canada.", e: "He worked out a deal with Britain to settle arguments about the border between the U.S. and Canada." }
  ],
  ff: [
    { s: "Tyler fathered fifteen children across two marriages \u2014 more than any other president in American history.", e: "Tyler had 15 kids \u2014 more than any other president ever!" },
    { s: "He was called 'His Accidency' by political opponents who questioned whether a successor president held legitimate authority.", e: "Some people called him 'His Accidency' because they didn't think he should really be president." },
    { s: "He graduated from the College of William and Mary at age seventeen, one of the youngest presidential graduates in history.", e: "He graduated from college when he was only 17 years old!" }
  ]
});

console.log("5 presidents written (6-10)");
