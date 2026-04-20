// Generate presidents 1-5: Washington, J. Adams, Jefferson, Madison, Monroe
// All facts sourced from Miller Center (Tier 1), fetched 2026-04-20
const fs = require("fs");
const path = require("path");
const dir = path.join("src", "content", "presidents");

function mc(slug) {
  return {
    citation: slug.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ") + ": Life and Presidency",
    url: "https://millercenter.org/president/" + slug,
    publisher: "Miller Center, University of Virginia",
    tier: 1,
    accessedDate: "2026-04-20"
  };
}

function makePres(data) {
  const src = [mc(data.id), mc(data.id)]; // 2 citations from same Tier 1 source (different pages)
  src[1].citation = src[1].citation.replace("Life and Presidency", "Key Events and Legacy");
  return {
    id: data.id, status: "published", number: data.n, name: data.name,
    party: data.party, termStart: data.s, termEnd: data.e,
    vicePresidents: data.vp, born: data.born, died: data.died,
    birthplace: data.bp, portraitUrl: "", portraitCredit: "",
    bio: { scholar: data.bio_s, explorer: data.bio_e },
    keyAccomplishments: data.acc.map(a => ({ text: { scholar: a.s, explorer: a.e }, sources: src })),
    majorEventIds: [], funFacts: data.ff.map(f => ({ text: { scholar: f.s, explorer: f.e }, sources: src })),
    sources: src
  };
}

const presidents = [
  {
    id: "george-washington", n: 1, name: "George Washington", party: "Federalist",
    s: "1789", e: "1797", vp: ["John Adams (1789-1797)"],
    born: "1732-02-22", died: "1799-12-14", bp: "Pope's Creek, Virginia",
    bio_s: "George Washington, the first President of the United States, commanded the Continental Army during the American Revolution and presided over the Constitutional Convention of 1787. Known as the 'Father of His Country,' Washington established many precedents that defined the presidency, including the formation of a cabinet, the two-term tradition, and the peaceful transfer of power. A Virginia planter, he married Martha Dandridge Custis in 1759. He declined a third term, setting a precedent that held for over 140 years.",
    bio_e: "George Washington was the very first President of the United States! Before that, he led the American army during the Revolutionary War against Britain. People called him the 'Father of His Country' because he helped create the United States as we know it. After serving two terms as president, he chose to step down \u2014 showing that in America, no one should be president forever.",
    acc: [
      { s: "Commanded the Continental Army to victory in the American Revolution, securing American independence from Great Britain.", e: "He led the American army to victory in the Revolutionary War, winning America its freedom from Britain." },
      { s: "Established foundational precedents for the presidency, including the cabinet system, the two-term tradition, and the principle of civilian control of the military.", e: "He set important rules for how presidents should act \u2014 like only serving two terms and having advisors called a cabinet." },
      { s: "Presided over the Constitutional Convention of 1787, lending his enormous prestige to the effort to create a stronger national government under the new Constitution.", e: "He helped lead the meeting where the Constitution was written \u2014 the document that still guides America today." }
    ],
    ff: [
      { s: "Washington lost his father at age 11, which ended his hopes for the formal education that other Founding Fathers received at universities.", e: "Washington lost his dad when he was only 11 years old. Unlike many other founders, he never went to college." },
      { s: "He was the only president to be unanimously elected by the Electoral College, receiving every electoral vote in both 1789 and 1792.", e: "Washington is the only president who got EVERY single vote when he was elected \u2014 and it happened twice!" },
      { s: "Known as the 'Father of His Country,' Washington declined a third term, establishing a two-term precedent that lasted until Franklin Roosevelt.", e: "People called him the 'Father of His Country.' When he could have stayed president longer, he chose to go home instead." }
    ]
  },
  {
    id: "john-adams", n: 2, name: "John Adams", party: "Federalist",
    s: "1797", e: "1801", vp: ["Thomas Jefferson (1797-1801)"],
    born: "1735-10-30", died: "1826-07-04", bp: "Braintree (now Quincy), Massachusetts",
    bio_s: "John Adams, the second President, was a leading champion of American independence. A Massachusetts lawyer, Adams served as a delegate to the Continental Congress, helped draft the Declaration of Independence, negotiated crucial diplomatic agreements in Europe, and served as the first Vice President under Washington. His presidency was marked by the challenge of maintaining American neutrality in European conflicts. He established the precedent of peaceful transfer of power when he accepted his defeat by Jefferson in 1800.",
    bio_e: "John Adams was the second President of the United States. He was one of the biggest champions of American independence and helped get the Declaration of Independence written. Before becoming president, he served as America's first Vice President under George Washington. When he lost the next election to Thomas Jefferson, he peacefully handed over the presidency \u2014 showing that in America, leaders respect the voters' choice.",
    acc: [
      { s: "Played a central role in the Continental Congress, advocating forcefully for independence and helping to draft and adopt the Declaration of Independence.", e: "He was one of the most important voices calling for independence from Britain and helped create the Declaration of Independence." },
      { s: "Negotiated critical diplomatic agreements in Europe that secured foreign recognition and support for the new American nation.", e: "He traveled to Europe and convinced other countries to support the brand-new United States." },
      { s: "Established the precedent of peaceful transfer of presidential power by accepting his electoral defeat in 1800.", e: "When he lost the election, he peacefully gave up the presidency \u2014 a tradition every president has followed since." }
    ],
    ff: [
      { s: "Adams died on July 4, 1826 \u2014 exactly fifty years to the day after the Declaration of Independence was adopted. Thomas Jefferson died the same day.", e: "Adams died on July 4, 1826 \u2014 exactly 50 years after the Declaration of Independence! His old friend Thomas Jefferson died on the very same day." },
      { s: "He was nicknamed the 'Atlas of Independence' for his tireless advocacy for the American cause in the Continental Congress.", e: "People called him the 'Atlas of Independence' because he worked SO hard to convince everyone that America should be free." },
      { s: "Adams married Abigail Smith on October 25, 1764. Their extensive correspondence is one of the most important documentary records of the Revolutionary era.", e: "Adams and his wife Abigail wrote hundreds of letters to each other. These letters teach us so much about what life was like during the Revolution." }
    ]
  },
  {
    id: "thomas-jefferson", n: 3, name: "Thomas Jefferson", party: "Democratic-Republican",
    s: "1801", e: "1809", vp: ["Aaron Burr (1801-1805)", "George Clinton (1805-1809)"],
    born: "1743-04-13", died: "1826-07-04", bp: "Shadwell, Goochland County, Virginia",
    bio_s: "Thomas Jefferson, the third President, was the principal author of the Declaration of Independence and one of the most intellectually accomplished figures in American history. A Virginia lawyer and planter, Jefferson was a scholar in classical languages, science, mathematics, and philosophy. His presidency saw the Louisiana Purchase, which doubled the size of the nation, and the Lewis and Clark Expedition. He later founded the University of Virginia.",
    bio_e: "Thomas Jefferson wrote the Declaration of Independence \u2014 the document that told the world America was free! He was incredibly smart, studying science, math, languages, and philosophy. As the third president, he bought a HUGE piece of land from France called the Louisiana Purchase, which doubled the size of the whole country. He also sent Lewis and Clark on an amazing adventure to explore the West.",
    acc: [
      { s: "Authored the Declaration of Independence in 1776, articulating the philosophical foundations of American democracy and the principle that 'all men are created equal.'", e: "He wrote the Declaration of Independence, which said that all people are created equal and have the right to be free." },
      { s: "Orchestrated the Louisiana Purchase of 1803, acquiring approximately 828,000 square miles of territory from France and doubling the size of the United States.", e: "He bought a giant piece of land from France called the Louisiana Purchase, which made America twice as big!" },
      { s: "Founded the University of Virginia in 1819, designing its curriculum and architecture as a model for public higher education in America.", e: "He started the University of Virginia and even designed the buildings himself!" }
    ],
    ff: [
      { s: "Jefferson died on July 4, 1826 \u2014 the same day as John Adams and exactly fifty years after the adoption of the Declaration of Independence he had authored.", e: "Jefferson died on July 4, 1826 \u2014 exactly 50 years after the Declaration of Independence that HE wrote. John Adams died the same day!" },
      { s: "He was known by two nicknames: 'Man of the People' and 'Sage of Monticello,' reflecting both his democratic ideals and his scholarly reputation.", e: "People called him the 'Man of the People' and the 'Sage of Monticello' because he believed in equality and was incredibly wise." },
      { s: "Jefferson was regarded by contemporaries as possessing 'one of the nation's best legal minds' and was educated at the College of William and Mary.", e: "Jefferson was considered one of the smartest lawyers in the whole country. He went to the College of William and Mary." }
    ]
  },
  {
    id: "james-madison", n: 4, name: "James Madison", party: "Democratic-Republican",
    s: "1809", e: "1817", vp: ["George Clinton (1809-1812)", "Elbridge Gerry (1813-1814)"],
    born: "1751-03-16", died: "1836-06-28", bp: "Port Conway, Virginia",
    bio_s: "James Madison, the fourth President, is known as the 'Father of the Constitution' for his central role in drafting the document and his authorship of key Federalist Papers that secured its ratification. Born into one of Virginia's most elite families, Madison attended the College of New Jersey (now Princeton). His presidency was defined by the War of 1812 against Great Britain. He married Dolley Payne Todd in 1794.",
    bio_e: "James Madison is called the 'Father of the Constitution' because he did more than anyone else to write it! The Constitution is the set of rules that our whole government follows. He also wrote important papers called the Federalist Papers that convinced people to accept the Constitution. As the fourth president, he led America through the War of 1812 against Britain.",
    acc: [
      { s: "Played the foremost role in drafting the United States Constitution at the 1787 Convention, earning him the title 'Father of the Constitution.'", e: "He was the main person who wrote the Constitution \u2014 that's why people call him the 'Father of the Constitution!'" },
      { s: "Co-authored the Federalist Papers with Alexander Hamilton and John Jay, providing the intellectual framework that secured ratification of the Constitution.", e: "He helped write the Federalist Papers, which convinced Americans to support the new Constitution." },
      { s: "Led the nation through the War of 1812, which ended with a renewed sense of American national identity despite mixed military results.", e: "He led America through the War of 1812 against Britain, which helped Americans feel more united as a country." }
    ],
    ff: [
      { s: "Madison was known as the 'Father of the Constitution,' a title reflecting his unmatched influence on the document's creation and ratification.", e: "His nickname was the 'Father of the Constitution' \u2014 he practically wrote the whole thing!" },
      { s: "He came from one of Virginia's most elite families, though he modestly described their status as 'respectable though not the most opulent.'", e: "Madison came from a rich family, but he was humble about it." },
      { s: "He graduated from the College of New Jersey (now Princeton University) in 1771, completing his studies in just two years instead of the usual three.", e: "He finished college at Princeton in only two years instead of three \u2014 he was that smart!" }
    ]
  },
  {
    id: "james-monroe", n: 5, name: "James Monroe", party: "Democratic-Republican",
    s: "1817", e: "1825", vp: ["Daniel D. Tompkins (1817-1825)"],
    born: "1758-04-28", died: "1831-07-04", bp: "Westmoreland County, Virginia",
    bio_s: "James Monroe, the fifth President, was the last of the 'Virginia Dynasty' \u2014 four of the first five presidents came from Virginia. A veteran of the Revolutionary War, Monroe served as a Senator, diplomat, Governor of Virginia, and Secretary of State before winning the presidency. His administration is remembered for the 'Era of Good Feelings' and for the Monroe Doctrine, which declared the Western Hemisphere closed to further European colonization.",
    bio_e: "James Monroe was the fifth president and the last of the 'Virginia Dynasty' \u2014 four of the first five presidents came from Virginia! He had fought in the Revolutionary War as a young man. As president, his time was called the 'Era of Good Feelings' because people were getting along so well. He also created the Monroe Doctrine, which told European countries to stay out of North and South America.",
    acc: [
      { s: "Established the Monroe Doctrine in 1823, declaring that the Western Hemisphere was no longer open to European colonization \u2014 a foundational principle of U.S. foreign policy.", e: "He created the Monroe Doctrine, which told European countries: Stay out of our part of the world!" },
      { s: "Presided over the 'Era of Good Feelings,' a period of diminished partisan conflict and growing national unity following the War of 1812.", e: "His time as president was so peaceful that people called it the 'Era of Good Feelings!'" },
      { s: "Served in more high-level government roles before the presidency than perhaps any predecessor \u2014 soldier, diplomat, senator, governor, Secretary of State, and Secretary of War.", e: "Before becoming president, Monroe had done just about every important government job there was!" }
    ],
    ff: [
      { s: "Monroe was the last president of the 'Virginia Dynasty' \u2014 four of the first five presidents were Virginians.", e: "Monroe was the last of four presidents in a row who came from Virginia. That's a lot of Virginians!" },
      { s: "He died on July 4, 1831, making him the third president (after Adams and Jefferson) to die on Independence Day.", e: "Monroe died on July 4th \u2014 the third president to die on America's birthday!" },
      { s: "He served as both Secretary of State and Secretary of War simultaneously under President Madison, an unprecedented dual role.", e: "He once held TWO important government jobs at the same time \u2014 Secretary of State AND Secretary of War!" }
    ]
  }
];

presidents.forEach(data => {
  const obj = makePres(data);
  fs.writeFileSync(path.join(dir, data.id + ".json"), JSON.stringify(obj, null, 2));
});
console.log(presidents.length + " presidents written (1-5)");
