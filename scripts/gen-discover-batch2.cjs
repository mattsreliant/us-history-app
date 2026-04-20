// More Discover entries: inventions + people batch 2
const fs = require("fs");
const path = require("path");
const dir = path.join("src", "content", "discover");
const src = [
  { citation: "Miller Center: U.S. Presidents and American History", url: "https://millercenter.org/president", publisher: "Miller Center, University of Virginia", tier: 1, accessedDate: "2026-04-20" },
  { citation: "National Park Service: American History", url: "https://www.nps.gov/subjects/americanhistory/index.htm", publisher: "National Park Service", tier: 1, accessedDate: "2026-04-20" }
];
function w(d){fs.writeFileSync(path.join(dir,d.id+".json"),JSON.stringify({id:d.id,status:"published",type:d.type,name:d.name,year:d.year,role:d.role,category:d.cat,summary:{scholar:d.sum_s,explorer:d.sum_e},funFacts:(d.ff||[]).map(f=>({text:{scholar:f.s,explorer:f.e},sources:src})),imageUrl:"",imageCredit:"",sources:src},null,2));}

// INVENTIONS
w({id:"steamboat",type:"invention",name:"Steamboat",year:"1807",role:"Water transportation",cat:"invention",
sum_s:"Robert Fulton's steamboat Clermont made its first successful voyage up the Hudson River in 1807, traveling from New York City to Albany in 32 hours. Steam-powered boats revolutionized river transportation, making it possible to travel upstream efficiently for the first time and opening the interior of the continent to commerce.",
sum_e:"In 1807, Robert Fulton built a steamboat called the Clermont that could travel UPSTREAM on rivers! Before this, boats could only float downstream easily. The Clermont went from New York City to Albany in 32 hours. Steamboats opened up the whole country to trade and travel.",
ff:[{s:"The Clermont traveled from New York City to Albany in about 32 hours, a journey that took sailing ships four days.",e:"The Clermont made a trip that used to take four days by sailboat in just 32 hours!"}]});

w({id:"transcontinental-railroad",type:"invention",name:"Transcontinental Railroad",year:"1869",role:"Coast-to-coast rail transport",cat:"invention",
sum_s:"The First Transcontinental Railroad was completed on May 10, 1869 when the Central Pacific and Union Pacific railroads met at Promontory Summit, Utah. A golden spike was driven to mark the occasion. The railroad reduced cross-country travel from months to about a week and transformed the American economy by connecting eastern markets with western resources.",
sum_e:"On May 10, 1869, workers from two railroad companies met in Utah and connected the first railroad that went all the way across America! They hammered in a golden spike to celebrate. Before this, crossing the country took months by wagon. Now you could do it in a week by train!",
ff:[{s:"A golden spike was ceremonially driven at Promontory Summit, Utah to mark the railroad's completion. The news was transmitted instantly by telegraph across the nation.",e:"They used a golden spike to connect the two railroads! The news was sent by telegraph and the whole country celebrated at the same time."}]});

w({id:"television",type:"invention",name:"Television",year:"1927",role:"Visual broadcasting",cat:"invention",
sum_s:"Philo Farnsworth demonstrated the first fully electronic television system in 1927 at age 21. Television transformed American culture, politics, and daily life. By the 1950s, TV had become the dominant medium of American entertainment and information, reshaping everything from family routines to political campaigns.",
sum_e:"A 21-year-old inventor named Philo Farnsworth created the first all-electronic TV in 1927! By the 1950s, almost every family in America had one. TV changed EVERYTHING \u2014 how people had fun, learned about the news, and even how they picked their presidents!",
ff:[{s:"Farnsworth was just 21 years old when he demonstrated his electronic television system. He had conceived the basic design at age 14 while plowing a potato field in Idaho.",e:"Farnsworth was only 21 when he showed off his invention, and he first came up with the idea at age 14 while working on a potato farm!"}]});

w({id:"nuclear-energy",type:"invention",name:"Nuclear Energy",year:"1942",role:"Power generation",cat:"science",
sum_s:"On December 2, 1942, physicist Enrico Fermi achieved the first controlled nuclear chain reaction at the University of Chicago, demonstrating that nuclear energy could be harnessed. This breakthrough led to both the development of atomic weapons during the Manhattan Project and, later, nuclear power plants that generate about 20% of America's electricity today.",
sum_e:"On December 2, 1942, a scientist named Enrico Fermi created the first controlled nuclear reaction under the bleachers of a football stadium in Chicago! This discovery led to the atomic bomb (used to end World War II) and later to nuclear power plants that make electricity without burning coal or gas.",
ff:[{s:"Fermi's historic experiment took place in a squash court beneath the stands of the University of Chicago's Stagg Field football stadium.",e:"The experiment happened under the bleachers of a football stadium! Nobody watching a game there would have known that history was being made underneath them."}]});

w({id:"personal-computer",type:"invention",name:"Personal Computer",year:"1975",role:"Computing",cat:"invention",
sum_s:"The personal computer revolution began in the mid-1970s with the Altair 8800 (1975) and exploded with the Apple II (1977) and IBM PC (1981). Steve Jobs and Steve Wozniak founded Apple Computer in a garage, while Bill Gates and Paul Allen created Microsoft. PCs transformed business, education, and daily life, putting computing power that once filled entire rooms onto every desk.",
sum_e:"In the 1970s, computers went from filling whole rooms to sitting on your desk! Steve Jobs and Steve Wozniak started Apple in a garage, and Bill Gates started Microsoft. These personal computers changed everything \u2014 how people work, learn, play games, and even how they talk to each other.",
ff:[{s:"Apple Computer was founded in Steve Jobs's parents' garage in Los Altos, California in 1976. The company would become the most valuable in the world.",e:"Apple started in a GARAGE! Steve Jobs and his friend Steve Wozniak built their first computers there. Now Apple is worth trillions of dollars."}]});

// PEOPLE
w({id:"sacagawea",type:"person",name:"Sacagawea",year:"c.1788-1812",role:"Explorer, Interpreter",cat:"exploration",
sum_s:"Sacagawea, a Lemhi Shoshone woman, served as interpreter and guide for the Lewis and Clark Expedition (1804-1806). Captured as a child and sold to French-Canadian fur trader Toussaint Charbonneau, she joined the expedition while pregnant and gave birth along the journey. Her knowledge of terrain, plants, and Native American languages proved invaluable. She carried her infant son on her back for thousands of miles.",
sum_e:"Sacagawea was a young Native American woman who helped Lewis and Clark explore the West! She translated languages, found food, and showed them the way through mountains and rivers. She did all of this while carrying her baby on her back! She was incredibly brave and tough.",
ff:[{s:"Sacagawea carried her infant son, Jean Baptiste, on her back throughout most of the 8,000-mile Lewis and Clark Expedition.",e:"She carried her baby son on her back for almost the entire 8,000-mile journey! That's like walking across the country and back."}]});

w({id:"mark-twain",type:"person",name:"Mark Twain",year:"1835-1910",role:"Author, Humorist",cat:"arts",
sum_s:"Mark Twain (born Samuel Clemens) is widely regarded as the father of American literature. His novels The Adventures of Tom Sawyer (1876) and Adventures of Huckleberry Finn (1884) captured the American experience with humor, social criticism, and an authentic vernacular voice. Ernest Hemingway later said 'All modern American literature comes from one book by Mark Twain called Huckleberry Finn.'",
sum_e:"Mark Twain was one of the funniest and most important writers in American history! His real name was Samuel Clemens. He wrote The Adventures of Tom Sawyer and Huckleberry Finn \u2014 stories about boys having adventures along the Mississippi River. His books are still read and loved today.",
ff:[{s:"Twain's pen name 'Mark Twain' came from a riverboat term meaning two fathoms (12 feet) of water \u2014 the minimum depth safe for a steamboat.",e:"His pen name 'Mark Twain' came from a riverboat term meaning the water is deep enough for the boat. He used to work on riverboats!"}]});

w({id:"amelia-earhart",type:"person",name:"Amelia Earhart",year:"1897-1937",role:"Aviator",cat:"exploration",
sum_s:"Amelia Earhart was the first woman to fly solo across the Atlantic Ocean, completing the flight on May 20-21, 1932. She set numerous aviation records and became an international celebrity who championed women's equality and advancement in aviation. In 1937, she disappeared over the Pacific Ocean while attempting to fly around the world. Her fate remains one of history's great unsolved mysteries.",
sum_e:"Amelia Earhart was the first woman to fly solo across the Atlantic Ocean! She was a famous pilot who proved that women could do anything men could do. In 1937, she tried to fly all the way around the world, but her plane disappeared over the Pacific Ocean. Nobody has ever figured out what happened to her.",
ff:[{s:"Earhart disappeared on July 2, 1937 while attempting to circumnavigate the globe. Despite extensive searches, neither she nor her plane were ever found.",e:"She vanished while trying to fly around the world, and despite huge search efforts, no one has ever found her or her plane. It's one of history's biggest mysteries!"}]});

w({id:"walt-disney",type:"person",name:"Walt Disney",year:"1901-1966",role:"Animator, Entrepreneur",cat:"arts",
sum_s:"Walt Disney revolutionized American entertainment through animation, theme parks, and family entertainment. He created Mickey Mouse in 1928, produced the first full-length animated feature film (Snow White and the Seven Dwarfs, 1937), and opened Disneyland in 1955. Disney won 22 Academy Awards \u2014 more than any other individual in history \u2014 and built an entertainment empire that continues to shape global popular culture.",
sum_e:"Walt Disney created Mickey Mouse, built Disneyland, and made the first full-length cartoon movie ever \u2014 Snow White! He won 22 Oscars, more than anyone in history. His movies, characters, and theme parks have brought joy to billions of people around the world for almost 100 years.",
ff:[{s:"Disney won 22 Academy Awards during his career, more than any other individual in history. He was also nominated 59 times.",e:"He won 22 Oscars \u2014 more than any single person EVER! He was nominated 59 times."}]});

w({id:"cesar-chavez",type:"person",name:"Cesar Chavez",year:"1927-1993",role:"Labor leader, Civil Rights activist",cat:"civil-rights",
sum_s:"Cesar Chavez co-founded the National Farm Workers Association (later the United Farm Workers) and led a five-year grape boycott (1965-1970) that brought national attention to the plight of migrant farmworkers. A practitioner of nonviolent resistance inspired by Gandhi and Martin Luther King Jr., Chavez fought for fair wages, safe working conditions, and basic dignity for some of America's most exploited workers.",
sum_e:"Cesar Chavez fought for the rights of farmworkers \u2014 the people who pick the fruits and vegetables we eat. Many farmworkers were treated terribly and paid almost nothing. Chavez organized boycotts and marches to demand fair treatment. He used peaceful protest, just like Martin Luther King Jr., and helped millions of workers get better pay and safer conditions.",
ff:[{s:"Chavez led a nationwide grape boycott from 1965 to 1970 that eventually involved 17 million Americans refusing to buy grapes, forcing growers to negotiate.",e:"He convinced 17 million Americans to stop buying grapes until the farmworkers got better treatment! It took five years, but it worked."}]});

w({id:"eleanor-roosevelt",type:"person",name:"Eleanor Roosevelt",year:"1884-1962",role:"First Lady, Human Rights advocate",cat:"civil-rights",
sum_s:"Eleanor Roosevelt transformed the role of First Lady from ceremonial hostess to active political figure during her husband FDR's presidency (1933-1945). She held press conferences, wrote a newspaper column, and advocated for civil rights, women's rights, and the poor. After FDR's death, she served as the first U.S. delegate to the United Nations and chaired the committee that drafted the Universal Declaration of Human Rights (1948).",
sum_e:"Eleanor Roosevelt wasn't just a First Lady \u2014 she was a champion for human rights! While her husband FDR was president, she traveled the country standing up for poor people, Black Americans, and women. After FDR died, she helped write the Universal Declaration of Human Rights at the United Nations, which says what rights ALL people in the world deserve.",
ff:[{s:"Roosevelt chaired the UN committee that drafted the Universal Declaration of Human Rights, adopted in 1948 and considered one of the most important human rights documents in history.",e:"She led the team that wrote the Universal Declaration of Human Rights \u2014 a document that says every person in the world deserves basic rights and freedoms."}]});

w({id:"george-washington-carver",type:"person",name:"George Washington Carver",year:"c.1864-1943",role:"Scientist, Inventor",cat:"science",
sum_s:"George Washington Carver was a pioneering agricultural scientist who developed hundreds of products from peanuts, sweet potatoes, and soybeans. Born into slavery, Carver became the most prominent Black scientist of the early 20th century. At the Tuskegee Institute in Alabama, he taught poor Southern farmers how to improve their soil and diversify their crops, transforming Southern agriculture.",
sum_e:"George Washington Carver was born into slavery but became one of America's greatest scientists! He figured out over 300 things you could make from peanuts \u2014 including dyes, plastics, and even gasoline! He taught poor farmers in the South how to grow better crops and take care of their soil.",
ff:[{s:"Carver developed over 300 products from peanuts and 118 from sweet potatoes, helping to diversify Southern agriculture away from cotton monoculture.",e:"He invented over 300 products from peanuts! That's a LOT of things you can make from one little nut."}]});

console.log("12 discover entries written (batch 2)");
