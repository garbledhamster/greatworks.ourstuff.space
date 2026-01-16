// -----------------------------
// Data: GBWW (1990) 60 volumes + Individual Works
// -----------------------------
// The BOOKS array now includes both original volumes AND individual works
// within those volumes for hyper-specific recommendations

export const BOOKS = [
  mk(1,  "the-syntopicon-1", "The Syntopicon (Vol. I)", ["Mortimer J. Adler (ed.)"], ["Index to the Great Ideas (A–Love)"], ["reference","ideas","navigation"], ["tool","clarity"], "reference"),
  mk(2,  "the-syntopicon-2", "The Syntopicon (Vol. II)", ["Mortimer J. Adler (ed.)"], ["Index to the Great Ideas (Man–World)"], ["reference","ideas","navigation"], ["tool","clarity"], "reference"),

  // Volume 3: Homer - Now broken down by work
  mk(3,  "homer-iliad", "Homer: The Iliad", ["Homer"], ["The Iliad"], ["war","honor","fate","courage","glory","anger","friendship"], ["epic","high-drama","intense"], "long", {category:"imaginative", volume:3}),
  mk(3,  "homer-odyssey", "Homer: The Odyssey", ["Homer"], ["The Odyssey"], ["home","journey","cunning","fate","perseverance","family","loyalty"], ["epic","adventure","reflective"], "long", {category:"imaginative", volume:3}),
  // Volume 4: Greek Drama - kept as anthology for now
  mk(4,  "greek-drama", "Greek Drama", ["Aeschylus","Sophocles","Euripides","Aristophanes"], ["Selected plays"], ["fate","justice","family","tragic-choice","courage","law"], ["catharsis","intense"], "medium", {category:"imaginative"}),
  
  // Volume 5: Ancient Historians
  mk(5,  "herodotus", "Herodotus: The History", ["Herodotus"], ["The History"], ["war","culture","customs","fate","human-nature","story"], ["curious","engaging","clear-eyed"], "long", {category:"history", volume:5}),
  mk(5,  "thucydides", "Thucydides: The Peloponnesian War", ["Thucydides"], ["History of the Peloponnesian War"], ["power","war","state","politics","realism","strategy"], ["serious","analytical","clear-eyed"], "long", {category:"history", volume:5}),
  
  // Volume 6: Plato - Major dialogues broken down
  mk(6,  "plato-republic", "Plato: The Republic", ["Plato"], ["The Republic"], ["justice","state","soul","education","truth","good"], ["inquiry","systematic"], "long", {category:"philosophy", volume:6}),
  mk(6,  "plato-symposium", "Plato: Symposium", ["Plato"], ["Symposium"], ["love","beauty","desire","soul","wisdom"], ["inquiry","poetic"], "short", {category:"philosophy", volume:6, comfortTag:true}),
  mk(6,  "plato-apology", "Plato: Apology", ["Plato"], ["Apology"], ["virtue","wisdom","truth","death","courage"], ["inspiring","clear"], "short", {category:"philosophy", volume:6, comfortTag:true}),
  mk(6,  "plato-phaedo", "Plato: Phaedo", ["Plato"], ["Phaedo"], ["soul","death","immortality","virtue","philosophy"], ["serious","contemplative"], "medium", {category:"philosophy", volume:6}),
  mk(6,  "plato-phaedrus", "Plato: Phaedrus", ["Plato"], ["Phaedrus"], ["love","rhetoric","soul","beauty","writing"], ["inquiry","poetic"], "medium", {category:"philosophy", volume:6}),
  mk(6,  "plato-meno", "Plato: Meno", ["Plato"], ["Meno"], ["knowledge","virtue","learning","recollection"], ["inquiry","accessible"], "short", {category:"philosophy", volume:6, comfortTag:true}),
  mk(6,  "plato-other-dialogues", "Plato: Other Dialogues", ["Plato"], ["Various dialogues"], ["wisdom","virtue","knowledge","truth","dialectic"], ["inquiry","varied"], "long", {category:"philosophy", volume:6}),
  
  // Volume 7: Aristotle Part I - Logical & Physical works
  mk(7,  "aristotle-categories", "Aristotle: Categories", ["Aristotle"], ["Categories"], ["logic","language","classification","being","substance"], ["technical","precise"], "short", {category:"philosophy", volume:7}),
  mk(7,  "aristotle-physics", "Aristotle: Physics", ["Aristotle"], ["Physics"], ["nature","motion","change","cause","time","infinity"], ["systematic","demanding"], "long", {category:"philosophy", volume:7}),
  mk(7,  "aristotle-logic", "Aristotle: Logic (Organon)", ["Aristotle"], ["Analytics, Topics, etc."], ["logic","reasoning","argument","proof","fallacy"], ["technical","structured"], "long", {category:"philosophy", volume:7}),
  
  // Volume 8: Aristotle Part II - Major works broken down
  mk(8,  "aristotle-metaphysics", "Aristotle: Metaphysics", ["Aristotle"], ["Metaphysics"], ["being","substance","cause","god","form","matter","essence"], ["demanding","systematic","deep"], "long", {category:"philosophy", volume:8}),
  mk(8,  "aristotle-ethics", "Aristotle: Nicomachean Ethics", ["Aristotle"], ["Nicomachean Ethics"], ["virtue","happiness","character","friendship","good-life","mean"], ["practical","structured","grounding"], "long", {category:"philosophy", volume:8, comfortTag:true}),
  mk(8,  "aristotle-politics", "Aristotle: Politics", ["Aristotle"], ["Politics"], ["state","government","citizenship","justice","constitution","law"], ["practical","systematic"], "long", {category:"politics", volume:8}),
  mk(8,  "aristotle-soul", "Aristotle: On the Soul", ["Aristotle"], ["On the Soul"], ["mind","soul","perception","thought","life"], ["systematic","deep"], "medium", {category:"philosophy", volume:8}),
  mk(8,  "aristotle-poetics", "Aristotle: Poetics", ["Aristotle"], ["Poetics"], ["poetry","tragedy","art","imitation","catharsis"], ["analytical","precise"], "short", {category:"philosophy", volume:8}),
  mk(8,  "aristotle-rhetoric", "Aristotle: Rhetoric", ["Aristotle"], ["Rhetoric"], ["persuasion","argument","emotion","character","speech"], ["practical","systematic"], "medium", {category:"philosophy", volume:8}),
  
  mk(9,  "hippocrates-galen", "Hippocrates & Galen", ["Hippocrates","Galen"], ["Selected medical works"], ["medicine","body","mind","nature","cause","health"], ["practical","grounding"], "medium", {category:"science", comfortTag:true}),
  mk(10, "math-greece", "Euclid / Archimedes / Nicomachus", ["Euclid","Archimedes","Nicomachus"], ["Elements","Selected works","Introduction to Arithmetic"], ["mathematics","reasoning","proof","form","quantity"], ["calm","precise"], "long", {category:"science"}),
  
  // Volume 11: Late Antiquity - Major works broken down
  mk(11, "lucretius", "Lucretius: On the Nature of Things", ["Lucretius"], ["De Rerum Natura"], ["nature","atoms","death","fear","materialism","pleasure"], ["poetic","freeing"], "long", {category:"philosophy", volume:11, comfortTag:true}),
  mk(11, "epictetus", "Epictetus: Discourses", ["Epictetus"], ["Discourses","Enchiridion"], ["stoicism","control","acceptance","virtue","freedom"], ["practical","grounding","clarity"], "medium", {category:"philosophy", volume:11, comfortTag:true}),
  mk(11, "marcus-aurelius", "Marcus Aurelius: Meditations", ["Marcus Aurelius"], ["Meditations"], ["stoicism","duty","acceptance","mind","mortality","virtue"], ["low-energy","comfort","clarity","reflective"], "medium", {category:"philosophy", volume:11, comfortTag:true}),
  mk(11, "plotinus", "Plotinus: The Enneads", ["Plotinus"], ["The Six Enneads"], ["soul","beauty","one","emanation","mysticism","contemplation"], ["deep","mystical"], "long", {category:"philosophy", volume:11}),
  
  mk(12, "virgil-aeneid", "Virgil: The Aeneid", ["Virgil"], ["Aeneid"], ["fate","duty","empire","honor","loss","destiny"], ["epic","solemn"], "long", {category:"imaginative", volume:12}),
  mk(12, "virgil-pastoral", "Virgil: Eclogues & Georgics", ["Virgil"], ["Eclogues","Georgics"], ["nature","pastoral","work","simplicity","beauty"], ["peaceful","reflective"], "short", {category:"imaginative", volume:12, comfortTag:true}),
  
  mk(13, "plutarch-lives", "Plutarch", ["Plutarch"], ["Lives"], ["character","virtue","honor","leadership","education"], ["inspiring","reflective"], "long", {category:"history"}),
  mk(14, "tacitus", "Tacitus", ["Tacitus"], ["Annals","Histories"], ["power","tyranny","state","corruption","history"], ["grim","clear-eyed"], "long", {category:"history"}),
  mk(15, "astronomy-revolutions", "Ptolemy / Copernicus / Kepler", ["Ptolemy","Copernicus","Kepler"], ["Almagest","On the Revolutions","Selections"], ["astronomy","science","truth","hypothesis","world"], ["awe","precise"], "long", {category:"science"}),

  // Volume 16-17: Augustine - Major works broken down
  mk(16, "augustine-confessions", "Augustine: Confessions", ["Augustine"], ["Confessions"], ["god","sin","conversion","time","memory","self"], ["introspective","intense","personal"], "long", {category:"philosophy", volume:16}),
  mk(17, "augustine-city-of-god", "Augustine: City of God", ["Augustine"], ["City of God"], ["god","history","state","theology","providence","good-and-evil"], ["systematic","heavy"], "long", {category:"philosophy", volume:17}),
  mk(17, "augustine-christian-doctrine", "Augustine: On Christian Doctrine", ["Augustine"], ["On Christian Doctrine"], ["theology","interpretation","teaching","scripture"], ["didactic","systematic"], "medium", {category:"philosophy", volume:17}),
  
  mk(17, "aquinas-1", "Aquinas (Vol. I)", ["Thomas Aquinas"], ["Summa Theologica"], ["theology","reasoning","virtue","law","god"], ["systematic","serious"], "long", {category:"philosophy"}),
  mk(18, "aquinas-2", "Aquinas (Vol. II)", ["Thomas Aquinas"], ["Summa Theologica (cont.)"], ["theology","ethics","law","virtue","god"], ["systematic","serious"], "long", {category:"philosophy"}),
  
  // Volume 19: Dante - Divine Comedy broken into parts
  mk(19, "dante-inferno", "Dante: Inferno", ["Dante"], ["Inferno"], ["sin","justice","punishment","journey","despair","hell"], ["intense","dark","epic"], "medium", {category:"imaginative", volume:19}),
  mk(19, "dante-purgatorio", "Dante: Purgatorio", ["Dante"], ["Purgatorio"], ["repentance","hope","purification","growth","climb"], ["hopeful","epic"], "medium", {category:"imaginative", volume:19}),
  mk(19, "dante-paradiso", "Dante: Paradiso", ["Dante"], ["Paradiso"], ["love","god","heaven","light","beatitude","joy"], ["mystical","sublime","epic"], "medium", {category:"imaginative", volume:19}),
  
  // Volume 19 also has Chaucer
  mk(19, "chaucer", "Chaucer", ["Chaucer"], ["Troilus and Criseyde","Canterbury Tales"], ["love","society","humor","character","custom","mortality"], ["playful","human","varied"], "long", {category:"imaginative", volume:19}),
  
  mk(20, "calvin", "Calvin", ["John Calvin"], ["Institutes of the Christian Religion"], ["religion","theology","law","duty","god"], ["serious","structured"], "long", {category:"philosophy"}),
  
  // Volume 21: Political philosophy
  mk(21, "machiavelli", "Machiavelli: The Prince", ["Machiavelli"], ["The Prince"], ["power","state","politics","pragmatism","virtu"], ["hard-nosed","clear","sharp"], "short", {category:"politics", volume:21}),
  mk(21, "hobbes", "Hobbes: Leviathan", ["Thomas Hobbes"], ["Leviathan"], ["state","power","social-contract","fear","law","sovereignty"], ["systematic","dark","analytical"], "long", {category:"politics", volume:21}),
  
  mk(22, "rabelais", "Rabelais", ["François Rabelais"], ["Gargantua and Pantagruel"], ["humor","education","custom","freedom","satire"], ["playful","weird"], "long", {category:"imaginative"}),
  
  // Volume 23: Humanist essays
  mk(23, "erasmus", "Erasmus: Praise of Folly", ["Erasmus"], ["Praise of Folly"], ["wisdom","folly","satire","society","religion"], ["witty","light","friendly"], "short", {category:"philosophy", volume:23, comfortTag:true}),
  mk(23, "montaigne", "Montaigne: Essays", ["Montaigne"], ["Essays"], ["self-knowledge","custom","education","wisdom","habit","experience"], ["low-energy","friendly","clarity","reflective"], "long", {category:"philosophy", volume:23, comfortTag:true}),
  
  // Volume 24-25: Shakespeare - Major plays broken down
  mk(24, "shakespeare-hamlet", "Shakespeare: Hamlet", ["William Shakespeare"], ["Hamlet"], ["death","revenge","madness","doubt","conscience","corruption"], ["intense","philosophical","dark"], "medium", {category:"imaginative", volume:24}),
  mk(24, "shakespeare-macbeth", "Shakespeare: Macbeth", ["William Shakespeare"], ["Macbeth"], ["ambition","guilt","power","fate","evil","tyranny"], ["dark","intense","psychological"], "medium", {category:"imaginative", volume:24}),
  mk(24, "shakespeare-king-lear", "Shakespeare: King Lear", ["William Shakespeare"], ["King Lear"], ["family","suffering","justice","madness","loyalty","nature"], ["tragic","profound","intense"], "medium", {category:"imaginative", volume:24}),
  mk(24, "shakespeare-othello", "Shakespeare: Othello", ["William Shakespeare"], ["Othello"], ["jealousy","love","trust","deception","honor","race"], ["intense","tragic"], "medium", {category:"imaginative", volume:24}),
  mk(24, "shakespeare-romeo-juliet", "Shakespeare: Romeo and Juliet", ["William Shakespeare"], ["Romeo and Juliet"], ["love","fate","family","youth","passion","death"], ["romantic","tragic"], "medium", {category:"imaginative", volume:24}),
  mk(24, "shakespeare-julius-caesar", "Shakespeare: Julius Caesar", ["William Shakespeare"], ["Julius Caesar"], ["power","politics","honor","betrayal","rhetoric","ambition"], ["political","dramatic"], "medium", {category:"imaginative", volume:24}),
  mk(24, "shakespeare-comedies", "Shakespeare: Comedies", ["William Shakespeare"], ["Selected comedies"], ["love","mistaken-identity","humor","marriage","wit"], ["light","playful"], "long", {category:"imaginative", volume:24, comfortTag:true}),
  mk(25, "shakespeare-histories", "Shakespeare: Histories", ["William Shakespeare"], ["History plays"], ["power","kingship","honor","war","politics","legitimacy"], ["dramatic","political"], "long", {category:"imaginative", volume:25}),
  mk(25, "shakespeare-tempest", "Shakespeare: The Tempest", ["William Shakespeare"], ["The Tempest"], ["power","forgiveness","magic","freedom","art","reconciliation"], ["reflective","magical","hopeful"], "short", {category:"imaginative", volume:25, comfortTag:true}),
  mk(25, "shakespeare-sonnets", "Shakespeare: Sonnets", ["William Shakespeare"], ["Sonnets"], ["love","time","beauty","desire","mortality","art"], ["lyrical","reflective"], "short", {category:"imaginative", volume:25, comfortTag:true}),
  
  mk(26, "early-science", "Gilbert / Galileo / Harvey", ["William Gilbert","Galileo Galilei","William Harvey"], ["Loadstone","Two New Sciences","Selected works"], ["science","nature","cause","experiment"], ["curious","precise"], "medium", {category:"science"}),
  mk(27, "don-quixote", "Cervantes", ["Miguel de Cervantes"], ["Don Quixote"], ["idealism","reality","humor","self-deception","honor"], ["playful","big"], "long", {category:"imaginative"}),
  
  // Volume 28: Early modern philosophy - broken down
  mk(28, "bacon", "Bacon: Essays & New Atlantis", ["Francis Bacon"], ["Essays","New Atlantis","Advancement of Learning"], ["knowledge","method","science","progress","utility"], ["practical","clear"], "medium", {category:"philosophy", volume:28}),
  mk(28, "descartes", "Descartes: Meditations & Discourse", ["René Descartes"], ["Meditations","Discourse on Method"], ["doubt","mind","certainty","method","god","self"], ["analytical","foundational","clarity"], "medium", {category:"philosophy", volume:28}),
  mk(28, "spinoza", "Spinoza: Ethics", ["Baruch Spinoza"], ["Ethics"], ["god","nature","freedom","emotion","knowledge","substance"], ["systematic","geometric","deep"], "long", {category:"philosophy", volume:28}),
  
  mk(29, "milton", "Milton", ["John Milton"], ["Selected poems","Paradise Lost","etc."], ["good-and-evil","freedom","sin","god","will"], ["epic","intense"], "long", {category:"imaginative"}),
  mk(30, "pascal", "Pascal", ["Blaise Pascal"], ["Provincial Letters","Pensées","Treatises"], ["faith","reasoning","mind","god","doubt"], ["introspective","sharp"], "medium", {category:"philosophy"}),

  mk(31, "moliere-racine", "Molière / Racine", ["Molière","Racine"], ["Selected plays"], ["love","custom","honor","virtue-and-vice"], ["light","dramatic"], "medium", {category:"imaginative"}),
  mk(32, "newton-huygens", "Newton / Huygens", ["Isaac Newton","Christiaan Huygens"], ["Principia","Optics","Treatise on Light"], ["science","nature","cause","mechanics","truth"], ["precise","demanding"], "long", {category:"science"}),
  
  // Volume 33: British Empiricists - broken down
  mk(33, "locke", "Locke: Essay & Government", ["John Locke"], ["Essay Concerning Human Understanding","Two Treatises of Government"], ["knowledge","mind","experience","liberty","government","property"], ["systematic","clarity","foundational"], "long", {category:"philosophy", volume:33}),
  mk(33, "berkeley", "Berkeley: Principles", ["George Berkeley"], ["Principles of Human Knowledge"], ["perception","idealism","mind","existence","god"], ["clarity","provocative"], "medium", {category:"philosophy", volume:33}),
  mk(33, "hume", "Hume: Enquiries", ["David Hume"], ["Enquiry Concerning Human Understanding","Enquiry Concerning Morals"], ["cause","knowledge","skepticism","custom","emotion","reason"], ["clarity","skeptical","sharp"], "long", {category:"philosophy", volume:33}),
  
  mk(34, "swift-voltaire-diderot", "Swift / Voltaire / Diderot", ["Jonathan Swift","Voltaire","Denis Diderot"], ["Gulliver's Travels","Candide","Rameau's Nephew"], ["satire","reason","optimism","custom","society"], ["funny","quick"], "medium", {category:"imaginative", comfortTag:true}),
  
  // Volume 35: Social Contract theorists
  mk(35, "montesquieu", "Montesquieu: Spirit of Laws", ["Montesquieu"], ["Spirit of Laws"], ["law","government","separation-of-powers","climate","culture"], ["analytical","systematic"], "long", {category:"politics", volume:35}),
  mk(35, "rousseau", "Rousseau: Social Contract & Discourses", ["Jean-Jacques Rousseau"], ["Social Contract","Discourse on Inequality"], ["freedom","society","state-of-nature","democracy","general-will"], ["passionate","provoking"], "long", {category:"politics", volume:35}),
  
  mk(36, "wealth-of-nations", "Adam Smith", ["Adam Smith"], ["The Wealth of Nations"], ["wealth","labor","government","law","progress"], ["analytical","dry"], "long", {category:"social-science"}),
  mk(37, "gibbon-1", "Gibbon (Vol. I)", ["Edward Gibbon"], ["Decline and Fall"], ["history","religion","state","war"], ["big","serious"], "long", {category:"history"}),
  mk(38, "gibbon-2", "Gibbon (Vol. II)", ["Edward Gibbon"], ["Decline and Fall (cont.)"], ["history","religion","state","war"], ["big","serious"], "long", {category:"history"}),
  
  // Volume 39: Kant - Major works broken down
  mk(39, "kant-pure-reason", "Kant: Critique of Pure Reason", ["Immanuel Kant"], ["Critique of Pure Reason"], ["knowledge","reason","metaphysics","experience","categories","limits"], ["demanding","foundational","systematic"], "long", {category:"philosophy", volume:39}),
  mk(39, "kant-practical-reason", "Kant: Critique of Practical Reason", ["Immanuel Kant"], ["Critique of Practical Reason","Groundwork"], ["duty","morality","categorical-imperative","freedom","autonomy"], ["demanding","systematic","ethical"], "medium", {category:"philosophy", volume:39}),
  mk(39, "kant-judgment", "Kant: Critique of Judgment", ["Immanuel Kant"], ["Critique of Judgment"], ["beauty","art","teleology","aesthetic","sublime","purpose"], ["demanding","systematic"], "medium", {category:"philosophy", volume:39}),

  mk(40, "american-papers-mill", "American State Papers / Federalist / J.S. Mill", ["Various","James Madison et al.","John Stuart Mill"], ["Founding docs","Federalist Papers","Selected works"], ["liberty","law","democracy","citizen","government"], ["clear","practical"], "long", {category:"politics"}),
  mk(41, "boswell-johnson", "Boswell", ["James Boswell"], ["Life of Samuel Johnson"], ["character","conversation","virtue","education"], ["warm","human"], "long", {category:"biography", comfortTag:true}),
  mk(42, "lavoisier-faraday", "Lavoisier / Faraday", ["Antoine Lavoisier","Michael Faraday"], ["Elements of Chemistry","Electricity"], ["science","cause","nature","experiment"], ["curious","clear"], "medium", {category:"science"}),
  
  // Volume 43: German philosophy
  mk(43, "hegel", "Hegel: Phenomenology & Philosophy of Right", ["G.W.F. Hegel"], ["Phenomenology of Spirit","Philosophy of Right"], ["spirit","history","dialectic","state","recognition","absolute"], ["demanding","deep","systematic"], "long", {category:"philosophy", volume:43}),
  mk(43, "kierkegaard", "Kierkegaard: Fear and Trembling", ["Søren Kierkegaard"], ["Fear and Trembling","Sickness Unto Death"], ["faith","anxiety","self","despair","existence","choice"], ["intense","personal","provoking"], "medium", {category:"philosophy", volume:43}),
  mk(43, "nietzsche", "Nietzsche: Beyond Good and Evil", ["Friedrich Nietzsche"], ["Beyond Good and Evil","Genealogy of Morals"], ["morality","power","truth","nihilism","perspectivism","will"], ["intense","provoking","sharp"], "medium", {category:"philosophy", volume:43}),
  
  mk(44, "tocqueville", "Tocqueville", ["Alexis de Tocqueville"], ["Democracy in America"], ["democracy","citizen","equality","liberty","state"], ["observant","clear"], "long", {category:"politics"}),
  mk(45, "goethe-balzac", "Goethe / Balzac", ["Johann Wolfgang von Goethe","Honoré de Balzac"], ["Faust","Cousin Bette"], ["desire","ambition","love","society","good-and-evil"], ["imaginative","human"], "long", {category:"imaginative"}),
  mk(46, "austen-eliot", "Austen / George Eliot", ["Jane Austen","George Eliot"], ["Emma","Middlemarch"], ["love","custom","society","virtue-and-vice","judgment"], ["comfort","human"], "long", {category:"imaginative", comfortTag:true}),
  mk(47, "little-dorrit", "Dickens", ["Charles Dickens"], ["Little Dorrit"], ["justice","law","wealth","society","character"], ["big","human"], "long", {category:"imaginative"}),
  
  // Volume 48: American classics
  mk(48, "moby-dick", "Melville: Moby-Dick", ["Herman Melville"], ["Moby-Dick"], ["obsession","nature","evil","fate","meaning","whale"], ["epic","symbolic","profound"], "long", {category:"imaginative", volume:48}),
  mk(48, "huckleberry-finn", "Twain: Huckleberry Finn", ["Mark Twain"], ["Huckleberry Finn"], ["freedom","society","morality","friendship","race","conscience"], ["adventure","human","accessible"], "medium", {category:"imaginative", volume:48, comfortTag:true}),
  
  mk(49, "darwin", "Darwin", ["Charles Darwin"], ["Origin of Species","Descent of Man"], ["evolution","nature","man","science"], ["curious","grounding"], "long", {category:"science"}),

  mk(50, "marx-engels", "Marx / Engels", ["Karl Marx","Friedrich Engels"], ["Communist Manifesto","Capital (Vol. I)"], ["labor","wealth","state","revolution","justice"], ["hard","systemic"], "long", {category:"social-science"}),
  mk(51, "war-and-peace", "Tolstoy", ["Leo Tolstoy"], ["War and Peace"], ["war","history","love","fate","honor"], ["epic","immersive"], "long", {category:"imaginative"}),
  
  // Volume 52: Russian literature
  mk(52, "brothers-karamazov", "Dostoevsky: Brothers Karamazov", ["Fyodor Dostoevsky"], ["The Brothers Karamazov"], ["god","sin","free-will","family","suffering","faith"], ["intense","philosophical","moral"], "long", {category:"imaginative", volume:52}),
  mk(52, "ibsen-plays", "Ibsen: Selected Plays", ["Henrik Ibsen"], ["A Doll's House","Hedda Gabler","etc."], ["society","truth","freedom","convention","self-deception"], ["realistic","provoking"], "medium", {category:"imaginative", volume:52}),
  
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
  // Keep original volume if specified in extra, otherwise use the first parameter
  const volumeNumber = extra.volume ?? volume;
  return {
    id: `${volumeNumber}-${slug}`,  // Create unique ID combining volume and slug
    volume: volumeNumber,
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
