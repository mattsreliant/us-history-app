// Events for 1770s, 1780s, 1790s, 1800s
const fs = require("fs");
const path = require("path");
const dir = path.join("src", "content", "events");
const src = [
  { citation: "Miller Center: U.S. Presidents and Key Events", url: "https://millercenter.org/president", publisher: "Miller Center, University of Virginia", tier: 1, accessedDate: "2026-04-20" },
  { citation: "National Park Service: American History", url: "https://www.nps.gov/subjects/americanhistory/index.htm", publisher: "National Park Service", tier: 1, accessedDate: "2026-04-20" }
];
function w(d){fs.writeFileSync(path.join(dir,d.id+".json"),JSON.stringify({id:d.id,status:"published",title:{scholar:d.ts,explorer:d.te},date:d.date,decade:d.decade,summary:{scholar:d.ss,explorer:d.se},significance:{scholar:d.gs,explorer:d.ge},relatedPresidentIds:d.pres||[],relatedPeopleIds:[],tags:d.tags,sources:src},null,2));}

// ═══ 1770s ═══
w({id:"boston-tea-party",date:"1773-12-16",decade:"1770s",tags:["politics"],pres:[],
ts:"The Boston Tea Party",te:"Tea Party in the Harbor!",
ss:"On December 16, 1773, American colonists disguised as Mohawk Indians boarded three British ships in Boston Harbor and dumped 342 chests of tea into the water to protest British taxation without representation. The act of defiance was a response to the Tea Act, which granted the British East India Company a monopoly on tea sales in the colonies.",
se:"On December 16, 1773, colonists dressed up as Native Americans, snuck onto British ships in Boston Harbor, and threw 342 chests of tea into the water! They were angry because Britain was taxing them without letting them have a say. It was one of the boldest protests in history!",
gs:"The Boston Tea Party escalated tensions between the colonies and Britain, leading directly to the punitive Intolerable Acts of 1774 and ultimately to the American Revolution.",
ge:"This protest made Britain SO mad that they passed really harsh laws to punish the colonists. But instead of giving up, the colonists got even more determined to fight for freedom."});

w({id:"declaration-of-independence",date:"1776-07-04",decade:"1770s",tags:["politics"],pres:["john-adams","thomas-jefferson"],
ts:"Declaration of Independence",te:"America Declares Freedom!",
ss:"On July 4, 1776, the Continental Congress adopted the Declaration of Independence, primarily authored by Thomas Jefferson. The document declared the thirteen American colonies free and independent states, no longer subject to British rule. It articulated the revolutionary principle that 'all men are created equal' and possess 'unalienable Rights' including 'Life, Liberty and the pursuit of Happiness.'",
se:"On July 4, 1776 \u2014 the date we now celebrate as Independence Day \u2014 America officially told Britain: We're free! Thomas Jefferson wrote the Declaration of Independence, which said that all people are created equal and have the right to life, liberty, and the pursuit of happiness. It's one of the most important documents ever written!",
gs:"The Declaration of Independence established the philosophical foundations of American democracy and inspired democratic movements worldwide for centuries. July 4th became America's most celebrated national holiday.",
ge:"This is why we celebrate the Fourth of July! The Declaration of Independence told the whole world what America stands for \u2014 freedom and equality for all."});

w({id:"battle-of-saratoga",date:"1777-10-07",decade:"1770s",tags:["war"],pres:["george-washington"],
ts:"Battle of Saratoga",te:"The Battle That Changed Everything!",
ss:"The Battle of Saratoga (September-October 1777) was the turning point of the American Revolution. The American victory over British General John Burgoyne's forces in upstate New York demonstrated that the Continental Army could defeat a major British force. More critically, the victory convinced France to enter the war as America's ally, providing the military and financial support that would prove decisive.",
se:"The Battle of Saratoga in 1777 was the turning point of the whole Revolutionary War! When the Americans won this big battle in New York, it proved they could beat the British army. Even better, it convinced France to join America's side \u2014 and France's help made all the difference!",
gs:"Saratoga is widely considered the most important battle of the Revolution. French entry into the war transformed a colonial rebellion into a global conflict that Britain could not win.",
ge:"This battle changed the war because France decided to help America. Without France's soldiers, ships, and money, America might not have won its freedom."});

w({id:"valley-forge",date:"1777-12-19",decade:"1770s",tags:["war"],pres:["george-washington"],
ts:"Winter at Valley Forge",te:"The Toughest Winter Ever",
ss:"From December 1777 to June 1778, George Washington's Continental Army endured a brutal winter encampment at Valley Forge, Pennsylvania. An estimated 2,000 soldiers died from disease, cold, and starvation. Despite the suffering, the army emerged as a more disciplined fighting force, having been trained by Prussian military expert Baron von Steuben. Valley Forge became a symbol of American perseverance.",
se:"During the winter of 1777-1778, Washington's soldiers camped at Valley Forge, Pennsylvania, and it was TERRIBLE. They were freezing, starving, and sick. About 2,000 soldiers died. But the ones who survived came out tougher and better trained than ever. Valley Forge showed that Americans would never give up, no matter how hard things got.",
gs:"Valley Forge transformed the Continental Army from a ragtag militia into a professional fighting force capable of standing against British regulars. The experience became central to American national mythology.",
ge:"Even though it was awful, Valley Forge made the American army stronger. The soldiers who survived were ready to win the war."});

// ═══ 1780s ═══
w({id:"battle-of-yorktown",date:"1781-10-19",decade:"1780s",tags:["war"],pres:["george-washington"],
ts:"Battle of Yorktown",te:"America Wins the War!",
ss:"The Siege of Yorktown (September-October 1781) was the last major battle of the American Revolution. American and French forces under George Washington and the Comte de Rochambeau trapped British General Cornwallis's army on the Yorktown peninsula in Virginia. With the French navy blocking escape by sea, Cornwallis surrendered on October 19, 1781, effectively ending the war.",
se:"The Battle of Yorktown in 1781 was where America WON the Revolutionary War! George Washington's army and French soldiers surrounded the British army in Virginia. The French navy blocked the British from escaping by sea. The British general had no choice but to surrender. America was finally free!",
gs:"Yorktown ended major combat operations in the Revolution. British Parliament voted to end the war shortly after, leading to the Treaty of Paris in 1783.",
ge:"After this battle, Britain knew it couldn't win. They agreed to stop fighting and recognize America as a free country."});

w({id:"treaty-of-paris-1783",date:"1783-09-03",decade:"1780s",tags:["politics"],pres:[],
ts:"Treaty of Paris (1783)",te:"Britain Says: You're Free!",
ss:"The Treaty of Paris, signed on September 3, 1783, officially ended the American Revolutionary War and recognized the independence of the United States. Under the treaty, Britain acknowledged American sovereignty over territory stretching from the Atlantic coast to the Mississippi River, from Canada to Florida. John Adams, Benjamin Franklin, and John Jay negotiated the treaty for the United States.",
se:"On September 3, 1783, Britain signed a peace treaty that said America was officially a free and independent country! The treaty also said America's land stretched all the way from the Atlantic Ocean to the Mississippi River. John Adams, Benjamin Franklin, and John Jay represented America at the negotiations.",
gs:"The Treaty of Paris established the United States as a sovereign nation and defined its initial borders, setting the stage for westward expansion.",
ge:"This treaty made it official \u2014 America was its own country! And it got a LOT of land, all the way to the Mississippi River."});

w({id:"constitutional-convention",date:"1787-05-25",decade:"1780s",tags:["politics"],pres:["george-washington","james-madison"],
ts:"The Constitutional Convention",te:"Writing America's Rulebook!",
ss:"The Constitutional Convention met in Philadelphia from May to September 1787, producing the United States Constitution. Presided over by George Washington and largely shaped by James Madison, the convention brought together 55 delegates who debated and designed a new framework of government to replace the weak Articles of Confederation. The resulting Constitution established the federal system of government \u2014 with its separation of powers, checks and balances, and Bill of Rights \u2014 that has governed America ever since.",
se:"In 1787, America's smartest leaders gathered in Philadelphia to write the Constitution \u2014 the set of rules that the whole country STILL follows today! George Washington led the meeting, and James Madison did so much of the writing that people call him the 'Father of the Constitution.' They created three branches of government to make sure no one person had too much power.",
gs:"The Constitution created the oldest written national framework of government still in active use. Its principles of federalism, separation of powers, and individual rights have influenced democracies worldwide.",
ge:"The Constitution is still the law of the land after more than 230 years! It's the oldest written set of government rules still being used anywhere in the world."});

// ═══ 1790s ═══
w({id:"bill-of-rights",date:"1791-12-15",decade:"1790s",tags:["politics","civil-rights"],pres:["george-washington"],
ts:"The Bill of Rights Ratified",te:"Your Rights, Written Down!",
ss:"The Bill of Rights \u2014 the first ten amendments to the Constitution \u2014 was ratified on December 15, 1791. Championed by James Madison, these amendments guaranteed fundamental freedoms including freedom of speech, religion, and the press; the right to bear arms; protection against unreasonable searches; and the right to a fair trial. The Bill of Rights addressed Anti-Federalist concerns that the original Constitution lacked explicit protections for individual liberties.",
se:"The Bill of Rights became law on December 15, 1791. These are the first ten additions to the Constitution, and they protect your most important freedoms! Freedom of speech, freedom of religion, the right to a fair trial \u2014 these rights belong to every American. James Madison wrote them because people were worried the Constitution didn't do enough to protect individual rights.",
gs:"The Bill of Rights established a tradition of constitutional protection for individual liberties that has expanded through subsequent amendments and judicial interpretation over more than two centuries.",
ge:"The Bill of Rights is what protects your freedoms every single day. Without it, the government could tell you what to say, what to believe, and where to go."});

w({id:"whiskey-rebellion",date:"1794",decade:"1790s",tags:["politics","economy"],pres:["george-washington"],
ts:"The Whiskey Rebellion",te:"Farmers Fight a Tax!",
ss:"In 1794, farmers in western Pennsylvania violently resisted a federal excise tax on whiskey, threatening federal tax collectors and challenging the authority of the new national government. President Washington responded by personally leading approximately 13,000 militia troops to suppress the rebellion \u2014 the first and only time a sitting president led troops in the field. The rebellion's swift suppression demonstrated that the federal government could enforce its laws.",
se:"In 1794, farmers in Pennsylvania were SO mad about a tax on whiskey that they started a rebellion! President Washington himself led 13,000 soldiers to stop them \u2014 the only time a president has ever personally led troops while in office. The message was clear: the new government's laws had to be followed.",
gs:"The Whiskey Rebellion was the first major test of federal authority under the new Constitution. Washington's decisive response established that the federal government had the power to enforce its laws, even by military force if necessary.",
ge:"This was the first big test of whether the new government could actually make people follow its rules. Washington proved it could."});

// ═══ 1800s ═══
w({id:"louisiana-purchase",date:"1803",decade:"1800s",tags:["politics","exploration"],pres:["thomas-jefferson"],
ts:"The Louisiana Purchase",te:"America Doubles in Size!",
ss:"In 1803, President Thomas Jefferson purchased approximately 828,000 square miles of territory from France for $15 million (about 4 cents per acre), doubling the size of the United States. The Louisiana Purchase extended American territory from the Mississippi River to the Rocky Mountains, encompassing all or part of 15 future states. The purchase was one of the largest land deals in history and set the stage for American westward expansion.",
se:"In 1803, President Jefferson made the deal of a lifetime! He bought 828,000 square miles of land from France for just $15 million \u2014 that's about 4 cents an acre! The Louisiana Purchase doubled the size of America and included land that would become 15 states. It was like buying half a continent for the price of a candy bar per acre!",
gs:"The Louisiana Purchase removed a major foreign power from America's western border, secured control of the Mississippi River and the port of New Orleans, and set the stage for continental expansion.",
ge:"This deal doubled America's size for just pennies per acre. It was one of the best deals in all of history!"});

w({id:"lewis-and-clark",date:"1804-05-14",decade:"1800s",tags:["exploration"],pres:["thomas-jefferson"],
ts:"Lewis and Clark Expedition Begins",te:"The Greatest Adventure in American History!",
ss:"On May 14, 1804, Meriwether Lewis and William Clark departed from Camp Dubois, Illinois on an epic journey to explore the western territory acquired through the Louisiana Purchase. Commissioned by President Jefferson, the Corps of Discovery traveled over 8,000 miles to the Pacific Ocean and back, documenting hundreds of plant and animal species, mapping the territory, and establishing contact with numerous Native American nations. They returned in September 1806.",
se:"On May 14, 1804, Lewis and Clark set off on the greatest adventure in American history! President Jefferson sent them to explore the huge new territory America had just bought. They traveled over 8,000 miles, all the way to the Pacific Ocean and back! They discovered amazing animals, drew maps, and met many Native American peoples along the way.",
gs:"The Lewis and Clark Expedition provided the first detailed knowledge of the western territory, strengthened American claims to the Pacific Northwest, and inspired generations of westward migration.",
ge:"Lewis and Clark showed Americans what was out there in the West. Their journey inspired thousands of people to move westward and explore."});

w({id:"war-of-1812-begins",date:"1812-06-18",decade:"1800s",tags:["war","politics"],pres:["james-madison"],
ts:"War of 1812 Declared",te:"America Fights Britain Again!",
ss:"On June 18, 1812, President Madison signed a declaration of war against Great Britain, beginning the War of 1812. The conflict was caused by British interference with American shipping, the impressment of American sailors into the Royal Navy, and British support for Native American resistance to American expansion. The war would last until early 1815.",
se:"In 1812, America went to war with Britain AGAIN! Britain had been stopping American ships, kidnapping American sailors, and helping Native Americans fight against American settlers. President Madison decided enough was enough and declared war.",
gs:"The War of 1812 confirmed American independence and sovereignty, ended British support for Native American resistance east of the Mississippi, and fostered a new sense of national identity.",
ge:"This war proved that America was here to stay. After it ended, Americans felt more united and proud than ever before."});

console.log("12 events written (1770s-1800s)");
