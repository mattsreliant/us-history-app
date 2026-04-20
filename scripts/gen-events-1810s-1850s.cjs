// Events for 1810s, 1820s, 1830s, 1840s, 1850s
const fs = require("fs");
const path = require("path");
const dir = path.join("src", "content", "events");
const src = [
  { citation: "Miller Center: U.S. Presidents and Key Events", url: "https://millercenter.org/president", publisher: "Miller Center, University of Virginia", tier: 1, accessedDate: "2026-04-20" },
  { citation: "National Park Service: American History", url: "https://www.nps.gov/subjects/americanhistory/index.htm", publisher: "National Park Service", tier: 1, accessedDate: "2026-04-20" }
];
function w(d){fs.writeFileSync(path.join(dir,d.id+".json"),JSON.stringify({id:d.id,status:"published",title:{scholar:d.ts,explorer:d.te},date:d.date,decade:d.decade,summary:{scholar:d.ss,explorer:d.se},significance:{scholar:d.gs,explorer:d.ge},relatedPresidentIds:d.pres||[],relatedPeopleIds:[],tags:d.tags,sources:src},null,2));}

// ═══ 1810s ═══
w({id:"battle-of-new-orleans",date:"1815-01-08",decade:"1810s",tags:["war"],pres:["james-madison"],
ts:"Battle of New Orleans",te:"Andrew Jackson Saves the Day!",
ss:"On January 8, 1815, General Andrew Jackson led American forces to a stunning victory over a larger British army at New Orleans. Ironically, the peace treaty ending the War of 1812 had already been signed in Europe two weeks earlier, though news had not yet reached America. The battle made Jackson a national hero and eventually propelled him to the presidency.",
se:"Andrew Jackson became a HUGE hero when he won the Battle of New Orleans in 1815! His ragtag army beat a much bigger British force. The funny thing is, the war was actually already over \u2014 the peace treaty had been signed two weeks earlier, but nobody knew yet because there was no fast way to send messages!",
gs:"The Battle of New Orleans, though militarily irrelevant (the peace treaty was already signed), made Andrew Jackson a national hero and boosted American national pride after the mixed results of the War of 1812.",
ge:"This battle made Americans feel really proud and turned Andrew Jackson into a celebrity who would later become president."});

w({id:"era-of-good-feelings",date:"1817",decade:"1810s",tags:["politics"],pres:["james-monroe"],
ts:"The Era of Good Feelings Begins",te:"Everyone Gets Along!",
ss:"James Monroe's inauguration in 1817 ushered in what became known as the Era of Good Feelings, a period of relative political harmony following the War of 1812. The Federalist Party had effectively collapsed, leaving the Democratic-Republicans as the only major party. National unity, economic growth, and territorial expansion characterized the period, though tensions over slavery simmered beneath the surface.",
se:"When James Monroe became president in 1817, things were going so well that people called it the 'Era of Good Feelings!' There was basically just one political party, the economy was growing, and people were getting along. But the argument about slavery was still there, just waiting to explode.",
gs:"The Era of Good Feelings represented a brief period of one-party rule and national consensus that masked growing sectional tensions over slavery and economic policy.",
ge:"It seemed like everyone was getting along, but the big argument about slavery was still underneath it all."});

// ═══ 1820s ═══
w({id:"missouri-compromise",date:"1820-03-03",decade:"1820s",tags:["politics","civil-rights"],pres:["james-monroe"],
ts:"The Missouri Compromise",te:"A Deal About Slavery",
ss:"The Missouri Compromise of 1820 temporarily resolved the contentious question of slavery's expansion into new territories. Missouri was admitted as a slave state and Maine as a free state, maintaining the balance in the Senate. A line was drawn at 36\u00b030' north latitude \u2014 slavery would be prohibited in new territories north of this line. Thomas Jefferson called the crisis 'a fire bell in the night' that threatened the Union.",
se:"In 1820, America made a deal called the Missouri Compromise. Missouri could have slavery, but Maine would be free. They also drew a line across the map \u2014 no slavery allowed above the line. It kept the peace for a while, but Thomas Jefferson warned it was like 'a fire bell in the night' \u2014 a warning of bigger trouble ahead.",
gs:"The Missouri Compromise maintained sectional balance for three decades but established the dangerous precedent of Congress drawing geographic lines around slavery. Its repeal in 1854 reignited the crisis.",
ge:"This deal kept the peace for about 30 years, but it didn't fix the real problem. The argument about slavery just kept getting worse."});

w({id:"monroe-doctrine",date:"1823-12-02",decade:"1820s",tags:["politics"],pres:["james-monroe"],
ts:"The Monroe Doctrine",te:"Stay Out of Our Hemisphere!",
ss:"On December 2, 1823, President Monroe declared in his annual message to Congress that the Western Hemisphere was no longer open to European colonization and that the United States would view any European attempt to extend their system to any part of this hemisphere as dangerous to American peace and safety. The Monroe Doctrine became a cornerstone of American foreign policy for nearly two centuries.",
se:"In 1823, President Monroe sent a big message to the world: European countries need to stay OUT of North and South America! If they tried to take over any more land in the Western Hemisphere, America would consider it a threat. This rule \u2014 called the Monroe Doctrine \u2014 guided American foreign policy for almost 200 years!",
gs:"The Monroe Doctrine established American hegemony in the Western Hemisphere and remains one of the most significant foreign policy declarations in American history.",
ge:"This was America saying: 'This is our side of the world, and we'll protect it.' Countries around the world paid attention."});

// ═══ 1830s ═══
w({id:"indian-removal-act",date:"1830-05-28",decade:"1830s",tags:["politics","civil-rights"],pres:["andrew-jackson"],
ts:"The Indian Removal Act",te:"A Terrible Law",
ss:"On May 28, 1830, President Andrew Jackson signed the Indian Removal Act, authorizing the forced relocation of Native American nations from their ancestral lands in the southeastern United States to territories west of the Mississippi River. The forced removals, particularly the Cherokee Trail of Tears in 1838, resulted in thousands of deaths from exposure, disease, and starvation. An estimated 4,000 Cherokee died during the march.",
se:"In 1830, President Jackson signed a terrible law called the Indian Removal Act. It forced Native American people to leave the homes where their families had lived for generations and walk hundreds of miles to new territory out west. The Cherokee people's march became known as the Trail of Tears because about 4,000 people died along the way. It was one of the saddest chapters in American history.",
gs:"The Indian Removal Act represents one of the darkest chapters in American history. The forced relocations devastated Native American nations and opened millions of acres to white settlement and cotton cultivation.",
ge:"This was one of the worst things the American government ever did. Thousands of Native American people died because they were forced to leave their homes."});

w({id:"nullification-crisis",date:"1832",decade:"1830s",tags:["politics"],pres:["andrew-jackson"],
ts:"The Nullification Crisis",te:"States vs. The Country!",
ss:"In 1832, South Carolina declared that federal tariff laws were null and void within its borders and threatened to secede from the Union. President Jackson responded forcefully, declaring that 'disunion by armed force is treason' and securing congressional authority to use military force if necessary. The crisis was resolved through a compromise tariff, but it foreshadowed the secession crisis of 1860-1861.",
se:"In 1832, South Carolina tried to say that a federal law didn't apply to them. President Jackson was NOT having it. He said trying to break up the country was treason and got ready to send in the army! They worked out a deal, but this fight was a preview of the much bigger breakup that would happen before the Civil War.",
gs:"The Nullification Crisis established the principle that no state could unilaterally reject federal law, a principle that would be tested again with secession thirty years later.",
ge:"This showed that states couldn't just ignore laws they didn't like. But South Carolina would try something even bigger later \u2014 leaving the Union entirely."});

// ═══ 1840s ═══
w({id:"texas-annexation",date:"1845-12-29",decade:"1840s",tags:["politics"],pres:["john-tyler","james-k-polk"],
ts:"Annexation of Texas",te:"Texas Joins America!",
ss:"Texas was admitted to the Union as the 28th state on December 29, 1845, completing a process begun under President Tyler. Texas had been an independent republic since winning its revolution against Mexico in 1836. Its annexation was controversial because it would enter as a slave state and because Mexico had never recognized Texas's independence, making conflict with Mexico likely.",
se:"Texas joined the United States on December 29, 1845! Texas had been its own country for almost 10 years after breaking away from Mexico. Bringing Texas into America was a big deal \u2014 it made the country bigger but also started an argument with Mexico that led to war.",
gs:"The annexation of Texas added an enormous territory to the United States and directly precipitated the Mexican-American War, which would bring even more territory under American control.",
ge:"Texas becoming a state made America bigger, but it also started a war with Mexico because Mexico was still angry about Texas leaving."});

w({id:"mexican-american-war",date:"1846-04-25",decade:"1840s",tags:["war"],pres:["james-k-polk"],
ts:"Mexican-American War Begins",te:"War with Mexico!",
ss:"The Mexican-American War began in April 1846 after a clash between American and Mexican troops along the disputed Texas border. President Polk had sought to acquire California and other Mexican territories through negotiation, but when diplomacy failed, he used the border incident to secure a declaration of war. The war ended in 1848 with the Treaty of Guadalupe Hidalgo, which ceded present-day California, Nevada, Utah, and parts of Arizona, New Mexico, Colorado, and Wyoming to the United States.",
se:"In 1846, America and Mexico went to war. President Polk wanted California and other western lands, and when Mexico wouldn't sell them, a fight at the border started a full-blown war. America won, and Mexico had to give up a HUGE amount of land \u2014 including what would become California, Nevada, Utah, and more!",
gs:"The Mexican-American War added over one million square miles to the United States but reignited the slavery debate over whether these new territories would be free or slave, setting the stage for the Civil War.",
ge:"America got a ton of new land, but it started a huge argument about whether slavery should be allowed there. This argument would eventually lead to the Civil War."});

w({id:"seneca-falls",date:"1848-07-19",decade:"1840s",tags:["civil-rights"],pres:[],
ts:"Seneca Falls Convention",te:"Women Demand Equal Rights!",
ss:"The Seneca Falls Convention, held July 19-20, 1848 in Seneca Falls, New York, was the first women's rights convention in American history. Organized by Elizabeth Cady Stanton and Lucretia Mott, the convention produced the Declaration of Sentiments, modeled on the Declaration of Independence, which declared that 'all men and women are created equal' and demanded women's suffrage. It launched the organized women's rights movement that would culminate in the 19th Amendment in 1920.",
se:"In 1848, women gathered in Seneca Falls, New York for the first women's rights meeting in American history! Elizabeth Cady Stanton and Lucretia Mott organized it. They wrote a declaration saying 'all men AND WOMEN are created equal' and demanded the right to vote. It took 72 more years, but women finally got that right in 1920!",
gs:"The Seneca Falls Convention launched the organized women's suffrage movement in the United States. The 72-year struggle it initiated culminated in the 19th Amendment granting women the right to vote.",
ge:"This meeting started the long fight for women's right to vote. It took 72 years, but they finally won!"});

// ═══ 1850s ═══
w({id:"compromise-of-1850",date:"1850",decade:"1850s",tags:["politics","civil-rights"],pres:["millard-fillmore"],
ts:"Compromise of 1850",te:"One More Try to Keep the Peace",
ss:"The Compromise of 1850 was a package of five bills that temporarily eased tensions between free and slave states. California was admitted as a free state, while the controversial Fugitive Slave Act required Northerners to return escaped enslaved people to their owners. The compromise, championed by Henry Clay and supported by President Fillmore, delayed the Civil War by a decade but ultimately satisfied neither side.",
se:"The Compromise of 1850 was another attempt to keep the North and South from fighting about slavery. California got to be a free state, but the deal also included a terrible law that forced people in the North to send escaped slaves back to their owners. It kept the peace for a little while, but both sides were still angry.",
gs:"The Compromise of 1850 temporarily preserved the Union but the Fugitive Slave Act radicalized Northern opinion against slavery, ultimately hastening the conflict it was designed to prevent.",
ge:"This deal was supposed to prevent a war, but the Fugitive Slave Act made Northerners even angrier about slavery. The peace wouldn't last."});

w({id:"kansas-nebraska-act",date:"1854-05-30",decade:"1850s",tags:["politics","civil-rights"],pres:["franklin-pierce"],
ts:"Kansas-Nebraska Act",te:"Bleeding Kansas!",
ss:"The Kansas-Nebraska Act of 1854 repealed the Missouri Compromise and allowed settlers in Kansas and Nebraska to decide whether to permit slavery through 'popular sovereignty.' The result was violent conflict in Kansas between pro-slavery and anti-slavery settlers, known as 'Bleeding Kansas.' The act shattered the existing party system, leading directly to the formation of the Republican Party and deepening the sectional crisis.",
se:"The Kansas-Nebraska Act of 1854 let people in new territories vote on whether to allow slavery. But instead of a peaceful vote, people from both sides rushed to Kansas and started fighting! It got so bad they called it 'Bleeding Kansas.' This law also led to the creation of the Republican Party \u2014 the party that Abraham Lincoln would soon lead.",
gs:"The Kansas-Nebraska Act destroyed the fragile sectional truce, created the Republican Party, and made armed conflict between North and South increasingly likely.",
ge:"This law tore apart the peace and started actual fighting in Kansas. It also created the Republican Party, which would soon elect Abraham Lincoln."});

w({id:"dred-scott",date:"1857-03-06",decade:"1850s",tags:["politics","civil-rights"],pres:["james-buchanan"],
ts:"Dred Scott Decision",te:"A Terrible Court Ruling",
ss:"On March 6, 1857, the Supreme Court ruled in Dred Scott v. Sandford that African Americans could not be citizens of the United States and had 'no rights which the white man was bound to respect.' The decision also declared the Missouri Compromise unconstitutional, ruling that Congress could not prohibit slavery in any territory. The ruling outraged the North, energized the abolitionist movement, and pushed the nation closer to civil war.",
se:"In 1857, the Supreme Court made one of the worst decisions in American history. They said that African Americans couldn't be citizens and had no legal rights at all. They also said Congress couldn't stop slavery from spreading anywhere. This terrible ruling made people in the North furious and helped push the country toward the Civil War.",
gs:"The Dred Scott decision is widely regarded as the worst Supreme Court ruling in American history. It radicalized Northern opinion, weakened the last legal barriers to slavery's expansion, and made compromise virtually impossible.",
ge:"This is considered the worst decision the Supreme Court ever made. It made the Civil War almost impossible to avoid."});

console.log("12 events written (1810s-1850s)");
