// -----------------------------
// Data: GBWW (1990) 60 volumes
// -----------------------------

export const BOOKS = [
  mk(1,  "the-syntopicon-1", "The Syntopicon (Vol. I)", ["Mortimer J. Adler (ed.)"], ["Index to the Great Ideas (A–Love)"], ["reference","ideas","navigation"], ["tool","clarity"], "reference"),
  mk(2,  "the-syntopicon-2", "The Syntopicon (Vol. II)", ["Mortimer J. Adler (ed.)"], ["Index to the Great Ideas (Man–World)"], ["reference","ideas","navigation"], ["tool","clarity"], "reference"),

  mk(3,  "homer", "Homer", ["Homer"], ["The Iliad","The Odyssey"], ["war","honor","fate","courage","home","friendship"], ["epic","high-drama"], "long", {category:"imaginative"}),
  mk(4,  "greek-drama", "Greek Drama", ["Aeschylus","Sophocles","Euripides","Aristophanes"], ["Selected plays"], ["fate","justice","family","tragic-choice","courage","law"], ["catharsis","intense"], "medium", {category:"imaginative"}),
  mk(5,  "history-greece", "Herodotus & Thucydides", ["Herodotus","Thucydides"], ["Persian Wars","Peloponnesian War"], ["power","war","state","honor","history","human-nature"], ["serious","clear-eyed"], "long", {category:"history"}),
  mk(6,  "plato", "Plato", ["Plato"], ["Dialogues","The Seventh Letter"], ["justice","truth","soul","virtue","education","love","government"], ["inquiry","clarity"], "long", {category:"philosophy"}),
  mk(7,  "aristotle-1", "Aristotle (Vol. I)", ["Aristotle"], ["Selected works"], ["logic","ethics","politics","nature","reasoning","virtue"], ["structured","focused"], "long", {category:"philosophy"}),
  mk(8,  "aristotle-2", "Aristotle (Vol. II)", ["Aristotle"], ["Selected works (cont.)"], ["metaphysics","poetry","science","reasoning","nature"], ["structured","focused"], "long", {category:"philosophy"}),
  mk(9,  "hippocrates-galen", "Hippocrates & Galen", ["Hippocrates","Galen"], ["Selected works"], ["medicine","body","mind","nature","cause"], ["practical","grounding"], "medium", {category:"science", comfortTag:true}),
  mk(10, "math-greece", "Euclid / Archimedes / Nicomachus", ["Euclid","Archimedes","Nicomachus"], ["Elements","Selected works","Introduction to Arithmetic"], ["mathematics","reasoning","proof","form","quantity"], ["calm","precise"], "long", {category:"science"}),
  mk(11, "late-antiquity", "Lucretius / Epictetus / Marcus Aurelius / Plotinus", ["Lucretius","Epictetus","Marcus Aurelius","Plotinus"], ["The Way Things Are","Discourses","Meditations","Enneads"], ["mind","desire","happiness","virtue","life-and-death","soul"], ["low-energy","comfort","clarity"], "medium", {category:"philosophy", comfortTag:true}),
  mk(12, "virgil", "Virgil", ["Virgil"], ["Eclogues","Georgics","Aeneid"], ["fate","duty","honor","home","love"], ["epic","reflective"], "long", {category:"imaginative"}),
  mk(13, "plutarch-lives", "Plutarch", ["Plutarch"], ["Lives"], ["character","virtue","honor","leadership","education"], ["inspiring","reflective"], "long", {category:"history"}),
  mk(14, "tacitus", "Tacitus", ["Tacitus"], ["Annals","Histories"], ["power","tyranny","state","corruption","history"], ["grim","clear-eyed"], "long", {category:"history"}),
  mk(15, "astronomy-revolutions", "Ptolemy / Copernicus / Kepler", ["Ptolemy","Copernicus","Kepler"], ["Almagest","On the Revolutions","Selections"], ["astronomy","science","truth","hypothesis","world"], ["awe","precise"], "long", {category:"science"}),

  mk(16, "augustine", "Augustine", ["Augustine"], ["Confessions","City of God","On Christian Doctrine"], ["god","soul","sin","time","truth","love"], ["introspective","heavy"], "long", {category:"philosophy"}),
  mk(17, "aquinas-1", "Aquinas (Vol. I)", ["Thomas Aquinas"], ["Summa Theologica"], ["theology","reasoning","virtue","law","god"], ["systematic","serious"], "long", {category:"philosophy"}),
  mk(18, "aquinas-2", "Aquinas (Vol. II)", ["Thomas Aquinas"], ["Summa Theologica (cont.)"], ["theology","ethics","law","virtue","god"], ["systematic","serious"], "long", {category:"philosophy"}),
  mk(19, "dante-chaucer", "Dante / Chaucer", ["Dante","Chaucer"], ["Divine Comedy","Troilus and Criseyde","Canterbury Tales"], ["love","sin","virtue","journey","death","humor"], ["imaginative","varied"], "long", {category:"imaginative"}),
  mk(20, "calvin", "Calvin", ["John Calvin"], ["Institutes of the Christian Religion"], ["religion","theology","law","duty","god"], ["serious","structured"], "long", {category:"philosophy"}),
  mk(21, "machiavelli-hobbes", "Machiavelli / Hobbes", ["Machiavelli","Thomas Hobbes"], ["The Prince","Leviathan"], ["power","state","fear","law","tyranny","government"], ["hard-nosed","clear"], "long", {category:"politics"}),
  mk(22, "rabelais", "Rabelais", ["François Rabelais"], ["Gargantua and Pantagruel"], ["humor","education","custom","freedom","satire"], ["playful","weird"], "long", {category:"imaginative"}),
  mk(23, "erasmus-montaigne", "Erasmus / Montaigne", ["Erasmus","Montaigne"], ["Praise of Folly","Essays"], ["self-knowledge","custom","education","wisdom","habit"], ["low-energy","friendly","clarity"], "medium", {category:"philosophy", comfortTag:true}),
  mk(24, "shakespeare-1", "Shakespeare (Vol. I)", ["William Shakespeare"], ["Plays"], ["love","power","jealousy","honor","fate","ambition"], ["imaginative","high-drama"], "long", {category:"imaginative"}),
  mk(25, "shakespeare-2", "Shakespeare (Vol. II)", ["William Shakespeare"], ["Plays (cont.)","Sonnets"], ["love","time","beauty","desire","fate"], ["imaginative","reflective"], "long", {category:"imaginative"}),
  mk(26, "early-science", "Gilbert / Galileo / Harvey", ["William Gilbert","Galileo Galilei","William Harvey"], ["Loadstone","Two New Sciences","Selected works"], ["science","nature","cause","experiment"], ["curious","precise"], "medium", {category:"science"}),
  mk(27, "don-quixote", "Cervantes", ["Miguel de Cervantes"], ["Don Quixote"], ["idealism","reality","humor","self-deception","honor"], ["playful","big"], "long", {category:"imaginative"}),
  mk(28, "bacon-descartes-spinoza", "Bacon / Descartes / Spinoza", ["Francis Bacon","René Descartes","Baruch Spinoza"], ["Selected works"], ["reasoning","knowledge","method","mind","truth","god"], ["clarity","sharp"], "long", {category:"philosophy"}),
  mk(29, "milton", "Milton", ["John Milton"], ["Selected poems","Paradise Lost","etc."], ["good-and-evil","freedom","sin","god","will"], ["epic","intense"], "long", {category:"imaginative"}),
  mk(30, "pascal", "Pascal", ["Blaise Pascal"], ["Provincial Letters","Pensées","Treatises"], ["faith","reasoning","mind","god","doubt"], ["introspective","sharp"], "medium", {category:"philosophy"}),

  mk(31, "moliere-racine", "Molière / Racine", ["Molière","Racine"], ["Selected plays"], ["love","custom","honor","virtue-and-vice"], ["light","dramatic"], "medium", {category:"imaginative"}),
  mk(32, "newton-huygens", "Newton / Huygens", ["Isaac Newton","Christiaan Huygens"], ["Principia","Optics","Treatise on Light"], ["science","nature","cause","mechanics","truth"], ["precise","demanding"], "long", {category:"science"}),
  mk(33, "locke-berkeley-hume", "Locke / Berkeley / Hume", ["John Locke","George Berkeley","David Hume"], ["Selected works"], ["knowledge","mind","liberty","government","cause"], ["clarity","skeptical"], "long", {category:"philosophy"}),
  mk(34, "swift-voltaire-diderot", "Swift / Voltaire / Diderot", ["Jonathan Swift","Voltaire","Denis Diderot"], ["Gulliver's Travels","Candide","Rameau's Nephew"], ["satire","reason","optimism","custom","society"], ["funny","quick"], "medium", {category:"imaginative", comfortTag:true}),
  mk(35, "montesquieu-rousseau", "Montesquieu / Rousseau", ["Montesquieu","Jean-Jacques Rousseau"], ["Spirit of Laws","Discourses","Social Contract"], ["law","government","democracy","citizen","freedom"], ["political","provoking"], "long", {category:"politics"}),
  mk(36, "wealth-of-nations", "Adam Smith", ["Adam Smith"], ["The Wealth of Nations"], ["wealth","labor","government","law","progress"], ["analytical","dry"], "long", {category:"social-science"}),
  mk(37, "gibbon-1", "Gibbon (Vol. I)", ["Edward Gibbon"], ["Decline and Fall"], ["history","religion","state","war"], ["big","serious"], "long", {category:"history"}),
  mk(38, "gibbon-2", "Gibbon (Vol. II)", ["Edward Gibbon"], ["Decline and Fall (cont.)"], ["history","religion","state","war"], ["big","serious"], "long", {category:"history"}),
  mk(39, "kant", "Kant", ["Immanuel Kant"], ["Major works"], ["duty","reasoning","ethics","knowledge","freedom"], ["demanding","sharp"], "long", {category:"philosophy"}),

  mk(40, "american-papers-mill", "American State Papers / Federalist / J.S. Mill", ["Various","James Madison et al.","John Stuart Mill"], ["Founding docs","Federalist Papers","Selected works"], ["liberty","law","democracy","citizen","government"], ["clear","practical"], "long", {category:"politics"}),
  mk(41, "boswell-johnson", "Boswell", ["James Boswell"], ["Life of Samuel Johnson"], ["character","conversation","virtue","education"], ["warm","human"], "long", {category:"biography", comfortTag:true}),
  mk(42, "lavoisier-faraday", "Lavoisier / Faraday", ["Antoine Lavoisier","Michael Faraday"], ["Elements of Chemistry","Electricity"], ["science","cause","nature","experiment"], ["curious","clear"], "medium", {category:"science"}),
  mk(43, "hegel-kierkegaard-nietzsche", "Hegel / Kierkegaard / Nietzsche", ["G.W.F. Hegel","Søren Kierkegaard","Friedrich Nietzsche"], ["Selected works"], ["self","truth","religion","morality","freedom"], ["intense","provoking"], "long", {category:"philosophy"}),
  mk(44, "tocqueville", "Tocqueville", ["Alexis de Tocqueville"], ["Democracy in America"], ["democracy","citizen","equality","liberty","state"], ["observant","clear"], "long", {category:"politics"}),
  mk(45, "goethe-balzac", "Goethe / Balzac", ["Johann Wolfgang von Goethe","Honoré de Balzac"], ["Faust","Cousin Bette"], ["desire","ambition","love","society","good-and-evil"], ["imaginative","human"], "long", {category:"imaginative"}),
  mk(46, "austen-eliot", "Austen / George Eliot", ["Jane Austen","George Eliot"], ["Emma","Middlemarch"], ["love","custom","society","virtue-and-vice","judgment"], ["comfort","human"], "long", {category:"imaginative", comfortTag:true}),
  mk(47, "little-dorrit", "Dickens", ["Charles Dickens"], ["Little Dorrit"], ["justice","law","wealth","society","character"], ["big","human"], "long", {category:"imaginative"}),
  mk(48, "moby-huck", "Melville / Twain", ["Herman Melville","Mark Twain"], ["Moby-Dick","Huckleberry Finn"], ["truth","freedom","society","evil","adventure"], ["imaginative","varied"], "long", {category:"imaginative"}),
  mk(49, "darwin", "Darwin", ["Charles Darwin"], ["Origin of Species","Descent of Man"], ["evolution","nature","man","science"], ["curious","grounding"], "long", {category:"science"}),

  mk(50, "marx-engels", "Marx / Engels", ["Karl Marx","Friedrich Engels"], ["Communist Manifesto","Capital (Vol. I)"], ["labor","wealth","state","revolution","justice"], ["hard","systemic"], "long", {category:"social-science"}),
  mk(51, "war-and-peace", "Tolstoy", ["Leo Tolstoy"], ["War and Peace"], ["war","history","love","fate","honor"], ["epic","immersive"], "long", {category:"imaginative"}),
  mk(52, "karamazov-ibsen", "Dostoevsky / Ibsen", ["Fyodor Dostoevsky","Henrik Ibsen"], ["Brothers Karamazov","Selected plays"], ["god","sin","free-will","family","truth"], ["intense","moral"], "long", {category:"imaginative"}),
  mk(53, "william-james", "William James", ["William James"], ["Principles of Psychology"], ["mind","habit","emotion","experience"], ["analytical","curious"], "long", {category:"social-science"}),
  mk(54, "freud", "Freud", ["Sigmund Freud"], ["Major works"], ["mind","desire","dreams","emotion","self"], ["probing","mixed"], "long", {category:"social-science"}),

  mk(55, "20c-phil-religion", "20th Century Philosophy & Religion", ["Various"], ["Selections"], ["mind","truth","religion","reasoning","language"], ["modern","varied"], "long", {category:"philosophy"}),
  mk(56, "20c-natural-science", "20th Century Natural Science", ["Various"], ["Selections"], ["science","physics","nature","truth","hypothesis"], ["modern","precise"], "long", {category:"science"}),
  mk(57, "20c-social-1", "20th Century Social Science I", ["Various"], ["Selections"], ["wealth","labor","state","economics","progress"], ["modern","systemic"], "medium", {category:"social-science"}),
  mk(58, "20c-social-2", "20th Century Social Science II", ["Various"], ["Selections"], ["culture","religion","society","history"], ["modern","wide"], "medium", {category:"social-science"}),
  mk(59, "20c-lit-1", "20th Century Imaginative Literature I", ["Various"], ["Selections"], ["self","society","love","truth","meaning"], ["modern","varied"], "long", {category:"imaginative"}),
  mk(60, "20c-lit-2", "20th Century Imaginative Literature II", ["Various"], ["Selections"], ["self","society","love","truth","meaning"], ["modern","varied"], "long", {category:"imaginative"})
];

function mk(volume, slug, title, authors, works, themes, moods, length, extra = {}) {
  const category = extra.category ?? "general";
  const comfortTag = !!extra.comfortTag;
  return {
    id: volume,
    volume,
    slug,
    title,
    authors: Array.isArray(authors) ? authors : [],
    works: Array.isArray(works) ? works : [],
    themes: uniq(Array.isArray(themes) ? themes : []),
    moods: uniq(Array.isArray(moods) ? moods : []),
    length,             // short | medium | long | reference
    category,           // philosophy | imaginative | science | etc
    comfortTag
  };
}

function uniq(arr) { return [...new Set(arr.map(String))]; }
