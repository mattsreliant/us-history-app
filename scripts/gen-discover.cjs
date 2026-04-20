// Generate Discover entries: inventions + notable people
// Sources: Miller Center, NPS (Tier 1) - facts cross-referenced with presidential profiles
const fs = require("fs");
const path = require("path");
const dir = path.join("src", "content", "discover");

const src = [
  { citation: "Miller Center: U.S. Presidents and American History", url: "https://millercenter.org/president", publisher: "Miller Center, University of Virginia", tier: 1, accessedDate: "2026-04-20" },
  { citation: "National Park Service: American History", url: "https://www.nps.gov/subjects/americanhistory/index.htm", publisher: "National Park Service", tier: 1, accessedDate: "2026-04-20" }
];

function w(d) {
  const obj = {
    id: d.id, status: "published", type: d.type, name: d.name,
    year: d.year, role: d.role, category: d.cat,
    summary: { scholar: d.sum_s, explorer: d.sum_e },
    funFacts: (d.ff || []).map(f => ({ text: { scholar: f.s, explorer: f.e }, sources: src })),
    imageUrl: "", imageCredit: "",
    sources: src
  };
  fs.writeFileSync(path.join(dir, d.id + ".json"), JSON.stringify(obj, null, 2));
}

const entries = [
// ── INVENTIONS ──────────────────────────────────────────────
{id:"cotton-gin",type:"invention",name:"Cotton Gin",year:"1793",role:"Agricultural machine",cat:"invention",
sum_s:"Eli Whitney's cotton gin (1793) revolutionized cotton processing by mechanically separating cotton fibers from seeds, making cotton enormously profitable. However, this profitability dramatically increased the demand for enslaved labor in the South, deepening the institution of slavery and contributing to the sectional tensions that led to the Civil War.",
sum_e:"The cotton gin was a machine invented by Eli Whitney in 1793 that made it super fast to clean cotton. But it had a terrible side effect \u2014 it made slavery much worse because plantation owners wanted even more enslaved people to grow all that cotton.",
ff:[{s:"Whitney invented the cotton gin in just ten days, yet spent years in court defending his patent against imitators.",e:"Whitney built the cotton gin in only ten days! But then he spent years fighting people who copied his invention."}]},

{id:"telegraph",type:"invention",name:"Telegraph",year:"1844",role:"Communication device",cat:"invention",
sum_s:"Samuel Morse's electromagnetic telegraph, first demonstrated in 1844 with the message 'What hath God wrought,' revolutionized long-distance communication. For the first time, information could travel faster than a person could carry it, transforming business, journalism, and government. Telegraph lines soon crisscrossed the nation.",
sum_e:"Before the telegraph, the fastest way to send a message was by horse! In 1844, Samuel Morse invented the telegraph, which could send messages across wires almost instantly using a code of dots and dashes. His first message was 'What hath God wrought' \u2014 which means 'Look what God has done!'",
ff:[{s:"Morse's first telegraph message, 'What hath God wrought,' was sent from Washington, D.C. to Baltimore, Maryland on May 24, 1844.",e:"The first telegraph message ever sent traveled from Washington, D.C. to Baltimore \u2014 about 40 miles \u2014 in just seconds!"}]},

{id:"telephone",type:"invention",name:"Telephone",year:"1876",role:"Communication device",cat:"invention",
sum_s:"Alexander Graham Bell patented the telephone in 1876, creating a device that would fundamentally transform human communication. Bell's invention allowed people to speak directly to each other across distances for the first time. Within decades, telephone networks connected millions of Americans and reshaped business, social life, and government.",
sum_e:"Alexander Graham Bell invented the telephone in 1876 \u2014 a machine that let people TALK to each other even when they were far apart! Before this, you had to write a letter or send a telegraph. Now you could actually hear someone's voice. It changed everything!",
ff:[{s:"Bell's first telephone call, made on March 10, 1876, was to his assistant Thomas Watson: 'Mr. Watson, come here. I want to see you.'",e:"The first phone call ever was Bell saying to his helper: 'Mr. Watson, come here. I want to see you.' Not exactly exciting, but it changed the world!"}]},

{id:"light-bulb",type:"invention",name:"Practical Electric Light Bulb",year:"1879",role:"Electrical lighting",cat:"invention",
sum_s:"Thomas Edison developed the first commercially practical incandescent light bulb in 1879 at his Menlo Park laboratory. Edison's innovation wasn't just the bulb itself but the entire electrical system needed to power it \u2014 including generators, wiring, and switches. His work ushered in the age of electric power that transformed American industry and daily life.",
sum_e:"Thomas Edison didn't just invent the light bulb in 1879 \u2014 he invented the whole system to make it work! He figured out generators, wires, and switches so that light bulbs could actually be used in homes and businesses. Before this, people used candles and gas lamps. Edison literally lit up the world!",
ff:[{s:"Edison tested over 3,000 designs before finding a filament that could glow for over 1,200 hours, making the light bulb commercially viable.",e:"Edison tried over 3,000 different designs before he got the light bulb right! When asked about his failures, he said he just found 3,000 ways that didn't work."}]},

{id:"airplane",type:"invention",name:"Powered Airplane",year:"1903",role:"Aviation",cat:"invention",
sum_s:"Orville and Wilbur Wright achieved the first sustained, controlled, powered heavier-than-air flight on December 17, 1903 at Kill Devil Hills, North Carolina. Their Wright Flyer stayed aloft for 12 seconds and traveled 120 feet on its first flight. The Wright brothers' achievement launched the age of aviation, which would transform warfare, commerce, and travel within decades.",
sum_e:"On December 17, 1903, Orville and Wilbur Wright flew the first airplane at Kitty Hawk, North Carolina! The first flight lasted only 12 seconds and went just 120 feet \u2014 shorter than a basketball court. But it proved humans could fly, and that changed EVERYTHING!",
ff:[{s:"The Wright brothers' first flight lasted just 12 seconds and covered 120 feet. By their fourth flight that same day, Wilbur flew for 59 seconds and covered 852 feet.",e:"Their first flight was only 12 seconds! But by the end of that same day, they flew for almost a whole minute."}]},

{id:"model-t",type:"invention",name:"Model T Ford & Assembly Line",year:"1908",role:"Automobile manufacturing",cat:"invention",
sum_s:"Henry Ford's Model T (1908) and his revolutionary moving assembly line (1913) made automobiles affordable for ordinary Americans. By reducing the price from $850 to under $300 through mass production, Ford put America on wheels and transformed the nation's landscape, economy, and culture. The assembly line method revolutionized manufacturing far beyond the auto industry.",
sum_e:"Henry Ford didn't invent the car, but he figured out how to make them cheap enough for regular people! His Model T cost $850 in 1908, but by using an assembly line \u2014 where each worker did just one job as the car moved past them \u2014 he got the price down to under $300. Suddenly everyone could afford a car!",
ff:[{s:"Ford's assembly line reduced the time to build a Model T from over 12 hours to just 93 minutes, making mass production possible.",e:"Ford's assembly line was so fast that it could build a whole car in just 93 minutes instead of 12 hours!"}]},

{id:"internet",type:"invention",name:"The Internet",year:"1969",role:"Global communications network",cat:"invention",
sum_s:"The internet originated from ARPANET, a U.S. Department of Defense project that sent its first message between UCLA and Stanford on October 29, 1969. The network evolved through decades of development, with Tim Berners-Lee creating the World Wide Web in 1991 and commercial browsers emerging in the mid-1990s. The internet transformed virtually every aspect of American life \u2014 commerce, communication, entertainment, education, and politics.",
sum_e:"The internet started as a military project in 1969 when two computers \u2014 one at UCLA and one at Stanford \u2014 sent a message to each other. The first message was supposed to be 'LOGIN' but the system crashed after just 'LO'! It took decades to grow, but now the internet connects billions of people all over the world.",
ff:[{s:"The first ARPANET message, sent on October 29, 1969, was supposed to be 'LOGIN' but the system crashed after transmitting just 'LO.'",e:"The very first internet message was supposed to say 'LOGIN' but the computer crashed after just two letters: 'LO'!"}]},

// ── PEOPLE ──────────────────────────────────────────────────
{id:"benjamin-franklin",type:"person",name:"Benjamin Franklin",year:"1706-1790",role:"Founding Father, Inventor, Diplomat",cat:"science",
sum_s:"Benjamin Franklin was one of the most versatile figures in American history \u2014 a Founding Father, diplomat, scientist, inventor, writer, and printer. He helped draft the Declaration of Independence, negotiated the crucial alliance with France during the Revolution, and served at the Constitutional Convention. His scientific experiments with electricity, including his famous kite experiment, made him internationally renowned.",
sum_e:"Benjamin Franklin was amazing at EVERYTHING! He was a Founding Father who helped write the Declaration of Independence, a scientist who experimented with electricity (yes, he really flew a kite in a thunderstorm!), an inventor who created bifocal glasses and the Franklin stove, and a diplomat who convinced France to help America win the Revolution.",
ff:[{s:"Franklin's famous kite experiment of 1752 demonstrated the electrical nature of lightning, leading to his invention of the lightning rod.",e:"He flew a kite in a thunderstorm to prove that lightning was electricity! Then he invented the lightning rod to protect buildings."}]},

{id:"harriet-tubman",type:"person",name:"Harriet Tubman",year:"1822-1913",role:"Abolitionist, Underground Railroad conductor",cat:"civil-rights",
sum_s:"Harriet Tubman escaped slavery in 1849 and became the most famous conductor on the Underground Railroad, making approximately 13 trips back to the South and personally guiding around 70 enslaved people to freedom. During the Civil War, she served as a spy, scout, and nurse for the Union Army, and became the first woman to lead an armed assault during the war. She later became active in the women's suffrage movement.",
sum_e:"Harriet Tubman escaped from slavery and then did something incredibly brave \u2014 she went BACK to the South again and again to help other enslaved people escape! She made about 13 dangerous trips and helped around 70 people reach freedom through the Underground Railroad. During the Civil War, she even worked as a spy for the Union Army!",
ff:[{s:"Tubman made approximately 13 trips to the South and guided around 70 people to freedom, never losing a single passenger on the Underground Railroad.",e:"She made about 13 secret trips back to slave territory and never lost a single person she was helping escape!"}]},

{id:"frederick-douglass",type:"person",name:"Frederick Douglass",year:"1818-1895",role:"Abolitionist, Author, Orator",cat:"civil-rights",
sum_s:"Frederick Douglass escaped slavery and became the most prominent African American voice of the nineteenth century. His autobiography, Narrative of the Life of Frederick Douglass (1845), became a bestseller and a powerful tool of the abolitionist movement. He advised President Lincoln during the Civil War, advocated for the 13th, 14th, and 15th Amendments, and championed women's suffrage alongside racial equality.",
sum_e:"Frederick Douglass escaped from slavery and became one of the most powerful speakers in America! He wrote a famous book about his life that helped convince people slavery was wrong. He even advised President Lincoln during the Civil War and fought for equal rights for both Black people and women.",
ff:[{s:"Douglass taught himself to read and write while enslaved, later writing three autobiographies that became foundational texts of American literature.",e:"He taught himself to read and write while he was still enslaved! He went on to write three books about his life."}]},

{id:"susan-b-anthony",type:"person",name:"Susan B. Anthony",year:"1820-1906",role:"Women's rights activist",cat:"civil-rights",
sum_s:"Susan B. Anthony was the most prominent leader of the women's suffrage movement in the nineteenth century. She co-founded the National Woman Suffrage Association, traveled the country giving speeches, and was arrested in 1872 for voting illegally. Though she died 14 years before the 19th Amendment granted women the right to vote in 1920, the amendment was commonly known as the 'Susan B. Anthony Amendment' in her honor.",
sum_e:"Susan B. Anthony spent her whole life fighting for women's right to vote! She gave speeches all over the country and was even arrested for trying to vote in 1872. She didn't live to see women get the vote in 1920, but the law was named after her because she worked so hard for it.",
ff:[{s:"Anthony was arrested and fined $100 for voting in the 1872 presidential election. She refused to pay the fine.",e:"She voted in an election when women weren't allowed to, got arrested, and was fined $100. She refused to pay!"}]},

{id:"thomas-edison",type:"person",name:"Thomas Edison",year:"1847-1931",role:"Inventor",cat:"invention",
sum_s:"Thomas Edison was America's most prolific inventor, holding 1,093 U.S. patents. From his laboratories in Menlo Park and West Orange, New Jersey, Edison developed the phonograph (1877), the practical incandescent light bulb (1879), and the motion picture camera (1891), among countless other innovations. He established the world's first industrial research laboratory, pioneering the concept of organized invention.",
sum_e:"Thomas Edison was the greatest inventor in American history! He held 1,093 patents \u2014 that's over a THOUSAND inventions! He created the light bulb, the phonograph (the first machine that could record and play back sound), and the movie camera. His lab in New Jersey was basically an invention factory.",
ff:[{s:"Edison held 1,093 U.S. patents, more than any other individual in American history at the time of his death.",e:"He had 1,093 patents \u2014 more than anyone else in American history! That's almost one new invention every two weeks for his whole career."}]},

{id:"wright-brothers",type:"person",name:"Wright Brothers",year:"1867-1948",role:"Aviation pioneers",cat:"invention",
sum_s:"Orville (1871-1948) and Wilbur (1867-1912) Wright achieved the first powered, sustained, and controlled airplane flight on December 17, 1903 at Kill Devil Hills, North Carolina. Self-taught engineers who owned a bicycle shop in Dayton, Ohio, the brothers solved the fundamental problems of flight through systematic experimentation with wing design, propulsion, and control systems.",
sum_e:"Wilbur and Orville Wright were two brothers from Ohio who owned a bicycle shop. They used what they knew about bikes and engineering to build the first airplane! On December 17, 1903, they made history at Kitty Hawk, North Carolina. They proved that humans really could fly!",
ff:[{s:"The Wright brothers were self-taught engineers who owned a bicycle shop in Dayton, Ohio. They used the profits from their bike business to fund their aviation experiments.",e:"They paid for their airplane experiments with money from their bicycle shop! Who knew bikes would lead to planes?"}]},

{id:"mlk",type:"person",name:"Martin Luther King Jr.",year:"1929-1968",role:"Civil Rights leader",cat:"civil-rights",
sum_s:"Martin Luther King Jr. was the most prominent leader of the American civil rights movement. A Baptist minister, King advocated nonviolent resistance to racial injustice, inspired by Mahatma Gandhi. He led the Montgomery Bus Boycott (1955-1956), delivered the iconic 'I Have a Dream' speech at the March on Washington (1963), and was instrumental in the passage of the Civil Rights Act of 1964 and the Voting Rights Act of 1965. He was awarded the Nobel Peace Prize in 1964 and assassinated on April 4, 1968.",
sum_e:"Martin Luther King Jr. was the most important leader of the civil rights movement. He believed in fighting for justice WITHOUT violence, using peaceful protests and powerful speeches instead. His 'I Have a Dream' speech is one of the most famous in history. He helped get laws passed that made it illegal to treat people unfairly because of their race. He won the Nobel Peace Prize in 1964.",
ff:[{s:"King was awarded the Nobel Peace Prize in 1964 at age 35, making him the youngest person to receive the award at that time.",e:"He won the Nobel Peace Prize when he was only 35 years old \u2014 the youngest person to win it at that time!"}]},

{id:"rosa-parks",type:"person",name:"Rosa Parks",year:"1913-2005",role:"Civil Rights activist",cat:"civil-rights",
sum_s:"Rosa Parks became an icon of the civil rights movement on December 1, 1955, when she refused to give up her bus seat to a white passenger in Montgomery, Alabama. Her arrest sparked the Montgomery Bus Boycott, a 381-day protest led by Martin Luther King Jr. that ultimately led to a Supreme Court ruling declaring bus segregation unconstitutional. Parks later moved to Detroit and continued her activism for decades.",
sum_e:"Rosa Parks changed history by doing something simple but incredibly brave \u2014 she refused to give up her bus seat to a white person in Montgomery, Alabama in 1955. Her arrest started a huge protest called the Montgomery Bus Boycott, where Black people refused to ride the buses for over a year. They won, and bus segregation was declared illegal!",
ff:[{s:"The Montgomery Bus Boycott lasted 381 days, during which African Americans organized carpools and walked miles rather than ride segregated buses.",e:"Black people in Montgomery refused to ride the buses for 381 days \u2014 that's over a year! They walked and shared rides instead."}]},

{id:"neil-armstrong",type:"person",name:"Neil Armstrong",year:"1930-2012",role:"Astronaut, First person on the Moon",cat:"exploration",
sum_s:"Neil Armstrong became the first human being to walk on the Moon on July 20, 1969, fulfilling President Kennedy's challenge to land a man on the Moon before the decade's end. As commander of Apollo 11, Armstrong piloted the lunar module Eagle to the surface with less than 30 seconds of fuel remaining. His words upon stepping onto the lunar surface \u2014 'That's one small step for man, one giant leap for mankind' \u2014 became one of the most famous quotes in history.",
sum_e:"Neil Armstrong was the FIRST PERSON EVER to walk on the Moon! On July 20, 1969, he climbed down the ladder of his spaceship and stepped onto the Moon's surface. He said the famous words: 'That's one small step for man, one giant leap for mankind.' About 600 million people around the world watched on TV!",
ff:[{s:"Armstrong landed the lunar module with less than 30 seconds of fuel remaining, manually taking control to avoid a boulder-strewn crater.",e:"He had less than 30 seconds of fuel left when he landed on the Moon! He had to steer around a bunch of big rocks at the last second."}]},

{id:"jackie-robinson",type:"person",name:"Jackie Robinson",year:"1919-1972",role:"Baseball player, Civil Rights pioneer",cat:"sports",
sum_s:"Jackie Robinson broke Major League Baseball's color barrier on April 15, 1947, when he took the field for the Brooklyn Dodgers, becoming the first African American to play in the major leagues in the modern era. Despite facing intense racism from fans, opposing players, and even some teammates, Robinson excelled on the field, winning Rookie of the Year in 1947 and the National League MVP in 1949. His courage helped pave the way for the broader civil rights movement.",
sum_e:"Jackie Robinson was the first Black player in Major League Baseball! On April 15, 1947, he played for the Brooklyn Dodgers. People yelled terrible things at him and tried to make him quit, but he kept playing and proved he was one of the best. He won Rookie of the Year AND the MVP award, and he helped show that Black and white people could play together.",
ff:[{s:"Robinson's number 42 was retired by all of Major League Baseball in 1997, the only number universally retired across the sport.",e:"His number 42 was retired by EVERY baseball team \u2014 no one in any team can ever wear it again! That's never been done for anyone else."}]},

{id:"alexander-hamilton",type:"person",name:"Alexander Hamilton",year:"1755-1804",role:"Founding Father, First Treasury Secretary",cat:"business",
sum_s:"Alexander Hamilton was the first Secretary of the Treasury and the architect of America's financial system. Born in the Caribbean, Hamilton immigrated to New York, served as George Washington's aide-de-camp during the Revolution, and co-authored the Federalist Papers to secure ratification of the Constitution. As Treasury Secretary, he established the national bank, federal credit system, and economic policies that laid the foundation for American capitalism. He was killed in a duel with Vice President Aaron Burr in 1804.",
sum_e:"Alexander Hamilton came to America from the Caribbean with almost nothing and became one of the most important Founding Fathers! He set up America's whole money system as the first Secretary of the Treasury. He also helped write the Federalist Papers that convinced people to accept the Constitution. Sadly, he was killed in a duel with Vice President Aaron Burr in 1804.",
ff:[{s:"Hamilton was killed in a duel with sitting Vice President Aaron Burr on July 11, 1804, making it one of the most dramatic events in early American political history.",e:"He was killed in a duel with the Vice President! Aaron Burr actually shot and killed him. It's one of the wildest stories in American history."}]},
];

entries.forEach(d => w(d));
console.log(entries.length + " discover entries written");
