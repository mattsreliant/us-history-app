// Generate all 24 remaining decades (1860s and 1960s already published)
// Sources: Miller Center presidential profiles (Tier 1), already fetched 2026-04-20
const fs = require("fs");
const path = require("path");
const dir = path.join("src", "content", "decades");

const mc = {
  citation: "Miller Center: U.S. Presidents - Life and Key Events",
  url: "https://millercenter.org/president",
  publisher: "Miller Center, University of Virginia",
  tier: 1,
  accessedDate: "2026-04-20"
};
const nps = {
  citation: "National Park Service: American History",
  url: "https://www.nps.gov/subjects/americanhistory/index.htm",
  publisher: "National Park Service",
  tier: 1,
  accessedDate: "2026-04-20"
};
const src = [mc, nps];

function w(d) {
  // Skip if already published (1860s, 1960s)
  const existing = path.join(dir, d.id + ".json");
  if (fs.existsSync(existing)) {
    const current = JSON.parse(fs.readFileSync(existing, "utf-8"));
    if (current.status === "published") {
      console.log("  skipping " + d.id + " (already published)");
      return;
    }
  }
  const obj = {
    id: d.id, status: "published", label: d.label, era: d.era,
    headline: { scholar: d.hl_s, explorer: d.hl_e },
    summary: { scholar: d.sum_s, explorer: d.sum_e },
    eventIds: [], keyFigureIds: d.figures || [],
    imageUrl: "", imageCredit: "",
    sources: src
  };
  fs.writeFileSync(existing, JSON.stringify(obj, null, 2));
}

const decades = [
{id:"1770s",label:"The 1770s",era:"revolutionary",figures:["george-washington","john-adams","thomas-jefferson"],
hl_s:"Revolution: The Birth of a Nation",hl_e:"America Is Born!",
sum_s:"The 1770s saw the American colonies break from Great Britain and declare independence. The decade began with growing colonial resistance to British taxation and ended with the Revolutionary War well underway. The Declaration of Independence, authored by Thomas Jefferson and adopted on July 4, 1776, articulated the philosophical foundations of American democracy. George Washington commanded the Continental Army through difficult early years of the war, including the pivotal crossing of the Delaware River in December 1776.",
sum_e:"The 1770s were when America was born! The colonists were tired of being told what to do by Britain, so they fought for their freedom. Thomas Jefferson wrote the Declaration of Independence, which said all people are created equal. George Washington led the army, and even though things were really hard, the Americans kept fighting for their freedom."},

{id:"1780s",label:"The 1780s",era:"revolutionary",figures:["george-washington"],
hl_s:"Victory and a New Constitution",hl_e:"America Wins and Writes Its Rules!",
sum_s:"The 1780s brought American victory in the Revolutionary War and the creation of the United States Constitution. The war ended with the Treaty of Paris in 1783, recognizing American independence. The young nation struggled under the weak Articles of Confederation until the Constitutional Convention of 1787, presided over by George Washington, produced the Constitution that still governs America today. James Madison played the foremost role in drafting the document, earning him the title 'Father of the Constitution.'",
sum_e:"The 1780s were amazing! America won the Revolutionary War and Britain finally said 'OK, you're free!' But the new country needed rules, so in 1787 the smartest leaders got together and wrote the Constitution \u2014 the set of rules America still uses today. James Madison did most of the writing!"},

{id:"1790s",label:"The 1790s",era:"early-republic",figures:["george-washington","john-adams"],
hl_s:"The New Republic Takes Shape",hl_e:"America's First Steps!",
sum_s:"The 1790s were the first full decade of the new American republic. George Washington served as the first president (1789-1797), establishing crucial precedents including the cabinet system, the two-term tradition, and the peaceful transfer of power. John Adams succeeded him as the second president, navigating challenges of maintaining neutrality in European conflicts. The decade saw the birth of America's first political parties \u2014 Hamilton's Federalists and Jefferson's Democratic-Republicans.",
sum_e:"The 1790s were America's first steps as a new country! George Washington became the very first president, and he set up a lot of rules about how presidents should act. When John Adams became the second president, it was the first time one leader peacefully handed power to another. America was figuring out how to be a country!"},

{id:"1800s",label:"The 1800s",era:"early-republic",figures:["thomas-jefferson","james-madison"],
hl_s:"Expansion and the Louisiana Purchase",hl_e:"America Gets Way Bigger!",
sum_s:"The 1800s were defined by Thomas Jefferson's presidency and the dramatic expansion of the United States. Jefferson's election in 1800 marked the first peaceful transfer of power between opposing political parties. In 1803, the Louisiana Purchase from France doubled the nation's size, adding approximately 828,000 square miles of territory. Jefferson sent Lewis and Clark to explore the vast new western lands. The decade ended with growing tensions over trade and maritime rights that would lead to the War of 1812.",
sum_e:"The 1800s were when America got MUCH bigger! President Jefferson bought a huge piece of land from France called the Louisiana Purchase, which doubled the size of the whole country. He sent explorers Lewis and Clark on an incredible adventure to see what was out there. It was a time of big dreams and big changes."},

{id:"1810s",label:"The 1810s",era:"early-republic",figures:["james-madison","james-monroe"],
hl_s:"The War of 1812 and National Identity",hl_e:"America Fights for Respect!",
sum_s:"The 1810s were dominated by the War of 1812, fought against Great Britain during James Madison's presidency. The war, caused by British interference with American shipping and the impressment of American sailors, ended with the Treaty of Ghent in 1814 and a renewed sense of national identity. The decade also saw the beginning of James Monroe's presidency and the start of the 'Era of Good Feelings,' a period of reduced partisan conflict.",
sum_e:"In the 1810s, America fought another war against Britain called the War of 1812. Britain had been messing with American ships and kidnapping American sailors! The war was tough, but when it ended, Americans felt more united and proud than ever. President Monroe's time was called the 'Era of Good Feelings' because people were getting along so well."},

{id:"1820s",label:"The 1820s",era:"antebellum",figures:["james-monroe","john-quincy-adams"],
hl_s:"The Monroe Doctrine and Westward Growth",hl_e:"America Says: Stay Out!",
sum_s:"The 1820s saw the establishment of the Monroe Doctrine in 1823, which declared the Western Hemisphere closed to further European colonization \u2014 a principle that guided American foreign policy for nearly two centuries. The Missouri Compromise of 1820 temporarily resolved the question of slavery's expansion, admitting Missouri as a slave state and Maine as a free state. John Quincy Adams, one of the nation's most experienced diplomats, became president in 1825 in a contested election.",
sum_e:"In the 1820s, President Monroe told European countries to stay out of North and South America with the Monroe Doctrine. America was also arguing about slavery \u2014 should new states allow it or not? They worked out a deal called the Missouri Compromise, but the argument wasn't really over. John Quincy Adams became president \u2014 his dad had been president too!"},

{id:"1830s",label:"The 1830s",era:"antebellum",figures:["andrew-jackson","martin-van-buren"],
hl_s:"Jacksonian Democracy and Indian Removal",hl_e:"Big Changes and Hard Times",
sum_s:"The 1830s were shaped by Andrew Jackson's transformative presidency. Jackson expanded democratic participation, founded the Democratic Party, and dramatically increased executive power. However, his Indian Removal Act of 1830 led to the forced relocation of Native Americans, including the devastating Trail of Tears. The decade also saw the Nullification Crisis, in which South Carolina threatened to ignore federal law, and the Panic of 1837, a severe economic depression that hit during Martin Van Buren's presidency.",
sum_e:"The 1830s were a time of big changes. President Jackson made the presidency more powerful and helped more regular people have a voice in government. But he also did something terrible \u2014 he forced Native Americans to leave their homes and walk hundreds of miles in what became known as the Trail of Tears. Many people died on that journey."},

{id:"1840s",label:"The 1840s",era:"antebellum",figures:["william-henry-harrison","john-tyler","james-k-polk"],
hl_s:"Manifest Destiny and Westward Expansion",hl_e:"America Reaches the Pacific!",
sum_s:"The 1840s were the decade of Manifest Destiny \u2014 the belief that American expansion across the continent was both justified and inevitable. President Polk expanded U.S. territory by over one million square miles through the Mexican-American War (1846-1848) and the Oregon Treaty with Britain. Texas was annexed in 1845. The decade also saw the first presidential death in office when William Henry Harrison died after just 32 days, establishing the precedent of vice presidential succession.",
sum_e:"The 1840s were when America stretched all the way to the Pacific Ocean! People believed it was America's destiny to fill up the whole continent. President Polk won the Mexican-American War and got California, Nevada, Utah, and lots more land. Texas joined the country too. It was also the decade when a president died in office for the first time \u2014 William Henry Harrison lasted only 32 days!"},

{id:"1850s",label:"The 1850s",era:"antebellum",figures:["millard-fillmore","franklin-pierce","james-buchanan"],
hl_s:"The Gathering Storm: Slavery and Secession",hl_e:"A Country About to Break Apart",
sum_s:"The 1850s were the last decade before the Civil War, marked by escalating tensions over slavery that made compromise increasingly impossible. The Compromise of 1850 temporarily eased sectional conflict, while the Kansas-Nebraska Act of 1854 reignited it, leading to violent clashes in 'Bleeding Kansas.' The Supreme Court's Dred Scott decision (1857) further inflamed the debate. By the decade's end, the election of Abraham Lincoln in 1860 would prompt southern states to begin seceding from the Union.",
sum_e:"The 1850s were a scary time in America. The argument about slavery was getting worse and worse. People tried to make deals to keep the peace, but nothing worked for long. There was even fighting in Kansas over whether it would allow slavery. By the end of the decade, the country was about to break apart."},

{id:"1870s",label:"The 1870s",era:"reconstruction",figures:["ulysses-s-grant","rutherford-b-hayes"],
hl_s:"Reconstruction and Its Unraveling",hl_e:"Rebuilding After the War",
sum_s:"The 1870s encompassed the final years of Reconstruction, the period following the Civil War when the federal government attempted to rebuild the South and protect the rights of formerly enslaved people. The 14th and 15th Amendments guaranteed citizenship and voting rights regardless of race. President Grant vigorously fought the Ku Klux Klan with federal power. However, the disputed election of 1876 led to the Compromise of 1877 and the withdrawal of federal troops from the South, effectively ending Reconstruction and leaving African Americans vulnerable to decades of Jim Crow laws.",
sum_e:"The 1870s were about trying to put the country back together after the Civil War. The government passed laws saying Black Americans were citizens and had the right to vote. President Grant sent soldiers to stop groups like the KKK. But by the end of the decade, the government stopped protecting Black people in the South, and things got much worse for them."},

{id:"1880s",label:"The 1880s",era:"gilded-age",figures:["james-a-garfield","chester-a-arthur","grover-cleveland-22"],
hl_s:"The Gilded Age: Industry and Inequality",hl_e:"Factories, Railroads, and Big Changes!",
sum_s:"The 1880s were the heart of the Gilded Age, a period of rapid industrialization, massive immigration, and growing economic inequality. American industry expanded enormously, railroads connected the continent, and millions of immigrants arrived from Europe. President Garfield was assassinated in 1881, leading to Chester Arthur's surprising embrace of civil service reform and the Pendleton Act of 1883. The decade saw the rise of powerful industrial monopolies and the beginning of organized labor movements.",
sum_e:"The 1880s were a time of huge factories, long railroads, and millions of people coming to America from other countries. It was called the Gilded Age because things looked shiny on the outside, but there were big problems underneath. President Garfield was killed, and the new president Arthur surprised everyone by fighting corruption."},

{id:"1890s",label:"The 1890s",era:"gilded-age",figures:["grover-cleveland-24","william-mckinley"],
hl_s:"Empire and Economic Crisis",hl_e:"America Goes Global!",
sum_s:"The 1890s were marked by the severe Panic of 1893, one of the worst economic depressions in American history, and the Spanish-American War of 1898, which transformed the United States into a world power. Under President McKinley, America acquired Puerto Rico, Guam, and the Philippines, dramatically expanding its territorial influence beyond the continental United States. The decade also saw the closing of the western frontier, as declared by the 1890 Census, and the rise of the Populist movement.",
sum_e:"The 1890s started rough with a terrible economic crash, but by the end of the decade, America had become a world power! The Spanish-American War was short and America won, gaining new territories like Puerto Rico and the Philippines. The Wild West was officially over \u2014 the frontier was settled!"},

{id:"1900s",label:"The 1900s",era:"progressive",figures:["theodore-roosevelt","william-howard-taft"],
hl_s:"The Progressive Era and Theodore Roosevelt",hl_e:"Trust-Busting and National Parks!",
sum_s:"The first decade of the twentieth century was dominated by Theodore Roosevelt, who became 'the first modern president' by dramatically expanding executive power. Roosevelt broke up powerful monopolies (earning the nickname 'Trust-Buster'), established national parks and forests to preserve millions of acres of public land, and used mass media to appeal directly to voters. The Progressive movement gained momentum, seeking to address the social problems created by rapid industrialization. McKinley's assassination in 1901 brought Roosevelt to power at age 42, the youngest president in history.",
sum_e:"The 1900s were Teddy Roosevelt's time to shine! He broke up giant companies that were being unfair, protected beautiful American lands as national parks, and changed what it meant to be president. He became president at just 42 years old after President McKinley was killed. It was a time when people were trying to fix problems caused by big factories and unfair bosses."},

{id:"1910s",label:"The 1910s",era:"progressive",figures:["woodrow-wilson"],
hl_s:"World War I and Progressive Reform",hl_e:"The Great War Changes Everything!",
sum_s:"The 1910s were defined by World War I (1914-1918) and Woodrow Wilson's progressive domestic reforms. Wilson enacted sweeping legislation including the Federal Reserve Act, which established the modern central banking system, and the Federal Trade Commission. When war engulfed Europe, Wilson initially kept America neutral but ultimately led the nation into the conflict in 1917. The war's end in 1918 left Wilson championing the League of Nations, though the Senate rejected American membership. The decade also saw the passage of the 19th Amendment, granting women the right to vote.",
sum_e:"The 1910s were when the biggest war the world had ever seen happened \u2014 World War I! President Wilson tried to keep America out of it, but eventually joined to help end the fighting. He also created the Federal Reserve (which manages America's money) and women finally got the right to vote! Wilson dreamed of a League of Nations where countries could talk instead of fight."},

{id:"1920s",label:"The 1920s",era:"interwar",figures:["warren-g-harding","calvin-coolidge"],
hl_s:"The Roaring Twenties: Jazz, Prosperity, and Change",hl_e:"The Roaring Twenties!",
sum_s:"The 1920s \u2014 the 'Roaring Twenties' \u2014 were a period of dramatic cultural change and economic prosperity. Jazz music, flappers, the Harlem Renaissance, and the rise of mass consumer culture transformed American society. President Coolidge championed fiscal conservatism during this boom, famously declaring that 'the business of America is business.' The decade saw Prohibition (the ban on alcohol), the expansion of radio and motion pictures, and rapid technological innovation. However, the era's speculative excesses set the stage for the catastrophic stock market crash of October 1929.",
sum_e:"The 1920s were called the Roaring Twenties because everything was so exciting! Jazz music was everywhere, people danced the Charleston, and new inventions like radios and movies changed how people had fun. The economy was booming and everyone felt rich. But all that spending and partying couldn't last forever \u2014 a huge crash was coming at the end of the decade."},

{id:"1930s",label:"The 1930s",era:"interwar",figures:["herbert-hoover","franklin-d-roosevelt"],
hl_s:"The Great Depression and the New Deal",hl_e:"Hard Times and Helping Hands",
sum_s:"The 1930s were dominated by the Great Depression, the worst economic crisis in American history. Following the stock market crash of October 1929, unemployment soared to 25%, banks failed across the country, and millions lost their homes and savings. President Hoover's response was seen as inadequate, and Franklin Roosevelt won the 1932 election in a landslide. FDR's New Deal \u2014 a series of experimental economic and social programs \u2014 provided relief, created jobs through programs like the CCC and WPA, established Social Security, and fundamentally reshaped the role of the federal government.",
sum_e:"The 1930s were really hard. The Great Depression meant millions of people lost their jobs and couldn't feed their families. President Roosevelt stepped in with the New Deal \u2014 programs that gave people jobs building roads, bridges, and parks. He also created Social Security to help older people. It was a time when the government started doing a lot more to help regular people."},

{id:"1940s",label:"The 1940s",era:"wwii",figures:["franklin-d-roosevelt","harry-s-truman"],
hl_s:"World War II and the Dawn of the Atomic Age",hl_e:"The Biggest War in History!",
sum_s:"The 1940s were defined by World War II (1941-1945), the most destructive conflict in human history. After Japan's attack on Pearl Harbor on December 7, 1941, America mobilized its entire economy and society for war. FDR led the Allied coalition until his death in April 1945. President Truman authorized the use of atomic bombs on Hiroshima and Nagasaki, ending the war but inaugurating the nuclear age. The postwar period saw the beginning of the Cold War with the Soviet Union, the Marshall Plan to rebuild Europe, and the Truman Doctrine that would define American foreign policy for decades.",
sum_e:"The 1940s were when the biggest war in all of history happened \u2014 World War II! After Japan attacked Pearl Harbor, America joined the fight against the Nazis and Japan. Millions of Americans served in the military. President Truman made the incredible decision to use atomic bombs to end the war. After the war, America helped rebuild Europe and started a long competition with the Soviet Union called the Cold War."},

{id:"1950s",label:"The 1950s",era:"postwar",figures:["dwight-d-eisenhower"],
hl_s:"The Cold War and Suburban America",hl_e:"Highways, TV, and the Space Race!",
sum_s:"The 1950s were a decade of prosperity, conformity, and Cold War anxiety. President Eisenhower, the World War II hero, presided over a booming economy and the growth of suburban America. He built the Interstate Highway System, one of the largest public works projects in history. The Cold War intensified with the Korean War (1950-1953), the nuclear arms race, and the launch of the Soviet satellite Sputnik in 1957, which sparked the Space Race. The decade also saw the beginning of the modern civil rights movement with the Supreme Court's Brown v. Board of Education decision (1954) and the Montgomery Bus Boycott (1955-1956).",
sum_e:"The 1950s were a time when America was doing really well! Families moved to new houses in the suburbs, everyone got TVs, and President Eisenhower built huge highways connecting the whole country. But there was also a scary competition with the Soviet Union called the Cold War. And brave people like Rosa Parks started standing up against unfair treatment of Black Americans."},

{id:"1970s",label:"The 1970s",era:"modern",figures:["richard-nixon","gerald-ford","jimmy-carter"],
hl_s:"Watergate, Vietnam, and Social Change",hl_e:"A Tough Decade for America",
sum_s:"The 1970s were a turbulent decade marked by the end of the Vietnam War, the Watergate scandal, and economic challenges. Nixon opened diplomatic relations with China and pursued d\u00e9tente with the Soviet Union, but his presidency ended in disgrace when the Watergate scandal forced his resignation in 1974 \u2014 the only presidential resignation in history. Gerald Ford pardoned Nixon, and Jimmy Carter sought to restore trust in government. The decade saw the oil crisis, stagflation, the Iranian hostage crisis, and significant social changes including the environmental and women's rights movements.",
sum_e:"The 1970s were a rough time for America. The Vietnam War finally ended, but not happily. President Nixon had to quit because of the Watergate scandal \u2014 he had tried to cover up a break-in. Gas prices went way up because of problems in the Middle East. But there were good things too \u2014 people started caring more about the environment and equal rights for women."},

{id:"1980s",label:"The 1980s",era:"modern",figures:["ronald-reagan","george-h-w-bush"],
hl_s:"The Reagan Revolution and the End of the Cold War",hl_e:"The Cold War Ends!",
sum_s:"The 1980s were defined by Ronald Reagan's conservative revolution and the approaching end of the Cold War. Reagan pursued tax cuts, deregulation, and a massive military buildup that put pressure on the Soviet Union. The decade saw the rise of personal computers, MTV, and a booming economy after the severe recession of 1981-1982. The Berlin Wall fell on November 9, 1989, symbolizing the end of Communist control in Eastern Europe. George H. W. Bush managed this historic transition, overseeing the peaceful end of the Cold War and German reunification.",
sum_e:"The 1980s were when the Cold War finally ended! President Reagan built up the military and challenged the Soviet Union. In 1989, the Berlin Wall came down and people in Eastern Europe were free! The 1980s were also when personal computers started appearing, MTV played music videos, and the economy boomed after a rocky start."},

{id:"1990s",label:"The 1990s",era:"modern",figures:["george-h-w-bush","bill-clinton"],
hl_s:"The Post-Cold War Era and the Internet Age",hl_e:"The Internet Changes Everything!",
sum_s:"The 1990s saw America emerge as the world's sole superpower following the collapse of the Soviet Union. President Clinton presided over the longest peacetime economic expansion in American history, transforming the federal deficit into a surplus. The decade witnessed the birth of the commercial internet, the dot-com boom, and rapid technological innovation that would reshape every aspect of American life. The U.S. military intervened in Bosnia and Kosovo to halt ethnic cleansing. The decade ended with anxieties about the Y2K computer bug and the contested 2000 presidential election.",
sum_e:"The 1990s were awesome! America was the most powerful country in the world, the economy was great, and this amazing new thing called the internet was changing everything. President Clinton turned government debt into extra money. People were buying their first cell phones and sending their first emails. It felt like anything was possible!"},

{id:"2000s",label:"The 2000s",era:"contemporary",figures:["george-w-bush","barack-obama"],
hl_s:"9/11, War on Terror, and the Great Recession",hl_e:"A Decade of Big Challenges",
sum_s:"The 2000s were shaped by the September 11, 2001 terrorist attacks and their aftermath. The attacks led to the War on Terror, including military operations in Afghanistan (2001) and Iraq (2003). President George W. Bush launched PEPFAR, saving millions of lives in Africa. The decade ended with the Great Recession of 2008-2009, the worst economic crisis since the Great Depression, and the historic election of Barack Obama as the first African American president. Obama signed the Affordable Care Act and ordered the operation that killed Osama bin Laden.",
sum_e:"The 2000s started with the terrible 9/11 attacks, when terrorists crashed planes into buildings in New York and Washington. America went to war in Afghanistan and Iraq. Then a huge economic crash happened in 2008. But there was also an amazing moment \u2014 Barack Obama became the first Black president of the United States!"},

{id:"2010s",label:"The 2010s",era:"contemporary",figures:["barack-obama","donald-trump"],
hl_s:"A Nation Divided: Politics and Cultural Change",hl_e:"A Changing America",
sum_s:"The 2010s were marked by deepening political polarization, rapid technological change, and significant cultural shifts. President Obama's second term saw the legalization of same-sex marriage nationwide (2015) and continued economic recovery. Donald Trump's surprise election in 2016 represented a populist backlash and reshaped the Republican Party. The decade saw the rise of social media as a dominant force in politics and culture, the Black Lives Matter movement, and growing concerns about climate change. Trump was impeached by the House in 2019 but acquitted by the Senate.",
sum_e:"The 2010s were a time of big arguments and big changes in America. Social media became super important, and people used it to share ideas and sometimes to argue. Barack Obama was still president at the start, and then Donald Trump won a surprising election in 2016. People disagreed about a LOT of things, but America was also becoming more diverse and connected than ever."},

{id:"2020s",label:"The 2020s",era:"contemporary",figures:["donald-trump","joe-biden","donald-trump-47"],
hl_s:"Pandemic, Division, and Transformation",hl_e:"A Wild Decade So Far!",
sum_s:"The 2020s began with the COVID-19 pandemic, which killed over one million Americans and transformed daily life, work, and education. The 2020 election saw Joe Biden defeat Donald Trump, with Kamala Harris making history as the first woman, first Black person, and first South Asian person to serve as Vice President. Trump returned to win the presidency in 2024, becoming only the second person to serve non-consecutive terms. The decade has been marked by debates over democracy, technology, and America's role in the world.",
sum_e:"The 2020s have been wild! A huge pandemic called COVID-19 changed everything \u2014 schools went online, people wore masks, and life was really different. Joe Biden became president, and his vice president Kamala Harris made history as the first woman and first Black and South Asian person in that job. Then Donald Trump came back and won again in 2024!"}
];

let written = 0;
decades.forEach(d => {
  w(d);
  written++;
});
console.log(written + " decades processed");
