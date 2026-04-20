// Generate presidents 11-15: Polk, Taylor, Fillmore, Pierce, Buchanan
const fs = require("fs");
const path = require("path");
const dir = path.join("src", "content", "presidents");

function mc(slug) {
  return [
    { citation: "Miller Center: " + slug.replace(/-/g," ") + " - Life and Presidency", url: "https://millercenter.org/president/" + slug, publisher: "Miller Center, University of Virginia", tier: 1, accessedDate: "2026-04-20" },
    { citation: "Miller Center: " + slug.replace(/-/g," ") + " - Key Events", url: "https://millercenter.org/president/" + slug + "/key-events", publisher: "Miller Center, University of Virginia", tier: 1, accessedDate: "2026-04-20" }
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
  id: "james-k-polk", slug: "james-k-polk", n: 11, name: "James K. Polk", party: "Democratic",
  s: "1845", e: "1849", vp: ["George M. Dallas (1845-1849)"],
  born: "1795-11-02", died: "1849-06-15", bp: "Mecklenburg County, North Carolina",
  bio_s: "James K. Polk, the eleventh President, was one of the most consequential single-term presidents in American history. Nicknamed 'Young Hickory' for his political kinship with Andrew Jackson, Polk expanded U.S. territory by more than one million square miles, successfully prosecuted the Mexican-American War, and achieved virtually every major goal he set upon entering office. He embodied the spirit of Manifest Destiny, the belief that American expansion across the continent was both justified and inevitable.",
  bio_e: "James K. Polk was the eleventh president, and he got more done in one term than many presidents do in two! People called him 'Young Hickory' because he was a lot like Andrew Jackson. During his time as president, America grew by over a million square miles \u2014 that includes California, Nevada, Utah, and parts of many other states. He promised to do big things and he delivered.",
  acc: [
    { s: "Expanded U.S. territory by over one million square miles, acquiring present-day California, Nevada, Utah, and parts of Arizona, New Mexico, Colorado, and Wyoming.", e: "He made America MUCH bigger, adding California and huge parts of the West to the country." },
    { s: "Successfully prosecuted the Mexican-American War (1846-1848), securing the Treaty of Guadalupe Hidalgo and establishing much of the nation's present southern and western boundaries.", e: "He won the Mexican-American War, which gave America the land that became California, Arizona, New Mexico, and more." },
    { s: "Achieved all four of his major campaign promises in a single term: tariff reduction, establishment of an independent treasury, acquisition of Oregon, and acquisition of California.", e: "He made four big promises when running for president and kept every single one of them!" }
  ],
  ff: [
    { s: "Polk is often ranked as the most effective single-term president in American history, having accomplished all his stated objectives.", e: "Many historians say Polk was the best one-term president ever because he did everything he said he would do." },
    { s: "He was nicknamed 'Young Hickory' for his political alliance with Andrew Jackson, who was known as 'Old Hickory.'", e: "He was called 'Young Hickory' because he was like a younger version of tough President Andrew Jackson." },
    { s: "He died just three months after leaving office \u2014 the shortest post-presidential life of any president.", e: "Sadly, Polk died only three months after leaving the White House \u2014 the shortest retirement of any president." }
  ]
});

write({
  id: "zachary-taylor", slug: "zachary-taylor", n: 12, name: "Zachary Taylor", party: "Whig",
  s: "1849", e: "1850", vp: ["Millard Fillmore (1849-1850)"],
  born: "1784-11-24", died: "1850-07-09", bp: "Near Barboursville, Virginia",
  bio_s: "Zachary Taylor, the twelfth President, was a career military officer nicknamed 'Old Rough and Ready' who became a national hero during the Mexican-American War. Taylor had no prior political experience before his election and had never even voted before running for president. He pledged to make 'honesty, capacity, and fidelity indispensable prerequisites to the bestowal of office.' He served only sixteen months before his sudden death in office on July 9, 1850.",
  bio_e: "Zachary Taylor was a famous army general nicknamed 'Old Rough and Ready' because he was tough and didn't care about fancy uniforms. He became so popular from winning battles in the Mexican-American War that people elected him president \u2014 even though he had never been in politics before and had never even voted! Sadly, he died after just 16 months in office.",
  acc: [
    { s: "Achieved military victories in the Mexican-American War that made him the most popular figure in America and propelled him to the presidency.", e: "He was such a great general in the Mexican-American War that the whole country loved him." },
    { s: "Pledged to govern with honesty and integrity, making character the primary qualification for government appointments.", e: "He promised that only honest, hard-working people would get government jobs." },
    { s: "Attempted to navigate the explosive debates over slavery in the newly acquired western territories, favoring admitting California as a free state.", e: "He tried to solve the big argument about slavery in the new western lands America had just gained." }
  ],
  ff: [
    { s: "Taylor was a career soldier with no prior political experience who had never voted before running for president.", e: "He had NEVER voted in an election before \u2014 and then he ran for president and won!" },
    { s: "Nicknamed 'Old Rough and Ready' for his informal dress and no-nonsense approach to military command.", e: "He was called 'Old Rough and Ready' because he didn't care about looking fancy \u2014 he just wanted to get things done." },
    { s: "He served only sixteen months as president before his sudden death, making his one of the shortest presidencies in history.", e: "He was president for only 16 months before he suddenly got sick and died." }
  ]
});

write({
  id: "millard-fillmore", slug: "millard-fillmore", n: 13, name: "Millard Fillmore", party: "Whig",
  s: "1850", e: "1853", vp: ["None"],
  born: "1800-01-07", died: "1874-03-08", bp: "Summerhill, New York",
  bio_s: "Millard Fillmore, the thirteenth President, assumed office upon the death of Zachary Taylor and is best known for championing the Compromise of 1850, a series of legislative measures intended to ease sectional tensions over slavery. Nicknamed 'The American Louis Philippe,' Fillmore rose from desperate poverty to the presidency, receiving only six months of formal grade school education before teaching himself law. He also supported opening trade relations with Japan.",
  bio_e: "Millard Fillmore became the thirteenth president when President Taylor died. He grew up very poor and only went to school for six months \u2014 but he taught himself to read law books and became a lawyer! As president, he tried to keep peace between the North and South by supporting a big deal called the Compromise of 1850. He also helped open trade with Japan for the first time.",
  acc: [
    { s: "Championed the Compromise of 1850, a major legislative effort to address sectional tensions over slavery and delay civil war.", e: "He supported the Compromise of 1850, which tried to keep the peace between states that wanted slavery and states that didn't." },
    { s: "Supported opening trade relations with Japan, sending Commodore Matthew Perry's expedition that would open Japan to Western commerce.", e: "He sent ships to Japan to open trade between Japan and America for the first time ever." },
    { s: "Rose from desperate poverty with only six months of formal education to the presidency, embodying American social mobility.", e: "He went from being very poor with almost no schooling to becoming president of the United States!" }
  ],
  ff: [
    { s: "Fillmore received only six months of formal grade school education before teaching himself law and gaining admission to the bar in 1822.", e: "He only went to school for six months! He taught himself everything else, including how to be a lawyer." },
    { s: "He rose from desperate poverty to the presidency, one of the most remarkable stories of social mobility among American presidents.", e: "He grew up so poor that his family could barely afford anything, but he worked his way up to become president." },
    { s: "He was nicknamed 'The American Louis Philippe' after the French king known as the 'Citizen King.'", e: "His nickname was 'The American Louis Philippe,' named after a French king." }
  ]
});

write({
  id: "franklin-pierce", slug: "franklin-pierce", n: 14, name: "Franklin Pierce", party: "Democratic",
  s: "1853", e: "1857", vp: ["William R. King (1853)"],
  born: "1804-11-23", died: "1869-10-08", bp: "Hillsborough (now Hillsboro), New Hampshire",
  bio_s: "Franklin Pierce, the fourteenth President, served during one of the most turbulent periods in antebellum America. A Democrat from New Hampshire, Pierce was a former congressman and senator who served as a military officer in the Mexican-American War. His presidency was marked by the passage of the Kansas-Nebraska Act, which reignited the slavery debate and accelerated the sectional crisis that would lead to the Civil War. Personal tragedy also shadowed his presidency \u2014 his youngest son Benjamin died in a train accident just months before his inauguration.",
  bio_e: "Franklin Pierce was the fourteenth president, and he served during a really difficult time in American history. The big argument about slavery was getting worse and worse. A law passed during his time called the Kansas-Nebraska Act made things even more heated. Pierce also faced terrible personal sadness \u2014 his young son died in a train accident right before he became president.",
  acc: [
    { s: "Oversaw passage of the Kansas-Nebraska Act, which, while intended to organize western territories, ultimately accelerated sectional tensions leading to the Civil War.", e: "He helped pass the Kansas-Nebraska Act, a law about the new western lands that made the North and South argue even more about slavery." },
    { s: "Pursued diplomatic efforts in Central America regarding transit routes and trade.", e: "He worked on deals with countries in Central America about trade and travel routes." },
    { s: "Served both as a politician and military officer, bringing diverse experience to the presidency.", e: "He had been both a congressman and a soldier before becoming president." }
  ],
  ff: [
    { s: "Pierce's youngest son Benjamin died in a train accident just two months before his inauguration, casting a pall over his entire presidency.", e: "Pierce's son died in a terrible train accident right before he became president. It made him very sad during his whole time in office." },
    { s: "He was nicknamed 'Young Hickory of the Granite Hills,' combining the Jackson association with his New Hampshire origins (the Granite State).", e: "His nickname was 'Young Hickory of the Granite Hills' \u2014 'Granite Hills' because he was from New Hampshire, the Granite State." },
    { s: "He graduated from Bowdoin College in 1824, where his classmates included future novelist Nathaniel Hawthorne, who became a lifelong friend.", e: "He went to college with the famous writer Nathaniel Hawthorne, and they stayed friends for life!" }
  ]
});

write({
  id: "james-buchanan", slug: "james-buchanan", n: 15, name: "James Buchanan", party: "Democratic",
  s: "1857", e: "1861", vp: ["John C. Breckinridge (1857-1861)"],
  born: "1791-04-23", died: "1868-06-01", bp: "Cove Gap, Pennsylvania",
  bio_s: "James Buchanan, the fifteenth President, is widely regarded as one of the least effective presidents for his failure to prevent the Union's dissolution during the slavery crisis. A Pennsylvania Democrat, Buchanan was an experienced diplomat and lawyer nicknamed 'Old Buck.' He advocated for preserving the Constitution but proved unable to manage the escalating sectional tensions that would erupt into civil war under his successor, Abraham Lincoln. He remains the only president who never married.",
  bio_e: "James Buchanan was the fifteenth president, and he had a really tough time. The country was tearing apart over slavery, and he couldn't figure out how to fix it. Seven states left the Union before he even left office! He is the only president who never got married. Most historians consider his presidency one of the least successful because he couldn't prevent the Civil War from starting.",
  acc: [
    { s: "Brought extensive diplomatic experience to the presidency, having served as Minister to Britain and Secretary of State.", e: "He had lots of experience dealing with other countries before becoming president." },
    { s: "Advocated for preserving the Constitution during the deepening sectional crisis, though his efforts proved insufficient.", e: "He tried to save the country from breaking apart, but unfortunately he couldn't stop it." },
    { s: "Graduated from Dickinson College in 1809 and built a successful legal career before entering politics.", e: "He went to Dickinson College and became a successful lawyer before going into politics." }
  ],
  ff: [
    { s: "Buchanan is the only president in American history who never married, making him the nation's sole bachelor president.", e: "He is the ONLY president who never got married \u2014 ever!" },
    { s: "He was nicknamed 'Old Buck' and brought more diplomatic experience to the presidency than perhaps any predecessor.", e: "People called him 'Old Buck,' and he had spent years working as a diplomat in other countries." },
    { s: "Seven states seceded from the Union during his final months in office, yet he maintained that he lacked constitutional authority to prevent it.", e: "Seven states left the country while he was still president, but he said there was nothing he could legally do to stop them." }
  ]
});

console.log("5 presidents written (11-15)");
