// -----------------------------
// Data: GBWW (1990) 60 volumes + Individual Works
// -----------------------------
// The BOOKS array now includes both original volumes AND individual works
// within those volumes for hyper-specific recommendations

export const BOOKS = [
  mk(1,  "the-syntopicon-1", "The Syntopicon (Vol. I)", ["Mortimer J. Adler (ed.)"], ["Index to the Great Ideas (A–Love)"], ["reference","ideas","navigation"], ["tool","clarity"], "reference", {wikipediaUrl:"https://en.wikipedia.org/wiki/The_Syntopicon"}),
  mk(2,  "the-syntopicon-2", "The Syntopicon (Vol. II)", ["Mortimer J. Adler (ed.)"], ["Index to the Great Ideas (Man–World)"], ["reference","ideas","navigation"], ["tool","clarity"], "reference", {wikipediaUrl:"https://en.wikipedia.org/wiki/The_Syntopicon"}),

  // Volume 3: Homer - Now broken down by work
  mk(3,  "homer-iliad", "Homer: The Iliad", ["Homer"], ["The Iliad"], ["war","honor","fate","courage","glory","anger","friendship"], ["epic","high-drama","intense"], "long", {category:"imaginative", volume:3, wikipediaUrl:"https://en.wikipedia.org/wiki/Iliad"}),
  mk(3,  "homer-odyssey", "Homer: The Odyssey", ["Homer"], ["The Odyssey"], ["home","journey","cunning","fate","perseverance","family","loyalty"], ["epic","adventure","reflective"], "long", {category:"imaginative", volume:3, wikipediaUrl:"https://en.wikipedia.org/wiki/Odyssey"}),
  // Volume 4: Greek Drama - broken down by playwright and major works
  // Aeschylus
  mk(4,  "aeschylus-oresteia", "Aeschylus: The Oresteia", ["Aeschylus"], ["Agamemnon","Libation Bearers","Eumenides"], ["justice","fate","revenge","family","law","curse"], ["intense","catharsis","epic"], "long", {category:"imaginative", volume:4, wikipediaUrl:"https://en.wikipedia.org/wiki/Oresteia"}),
  mk(4,  "aeschylus-prometheus", "Aeschylus: Prometheus Bound", ["Aeschylus"], ["Prometheus Bound"], ["rebellion","suffering","power","knowledge","tyranny","defiance"], ["intense","defiant"], "short", {category:"imaginative", volume:4, wikipediaUrl:"https://en.wikipedia.org/wiki/Prometheus_Bound"}),
  mk(4,  "aeschylus-other", "Aeschylus: Other Plays", ["Aeschylus"], ["Suppliant Maidens","Persians","Seven Against Thebes"], ["war","fate","refuge","conflict"], ["intense","epic"], "medium", {category:"imaginative", volume:4, wikipediaUrl:"https://en.wikipedia.org/wiki/Aeschylus"}),

  // Sophocles
  mk(4,  "sophocles-oedipus-thebes", "Sophocles: Theban Plays", ["Sophocles"], ["Oedipus the King","Oedipus at Colonus","Antigone"], ["fate","truth","family","law","justice","suffering","pride"], ["intense","catharsis","profound"], "long", {category:"imaginative", volume:4, wikipediaUrl:"https://en.wikipedia.org/wiki/Theban_plays"}),
  mk(4,  "sophocles-ajax", "Sophocles: Ajax", ["Sophocles"], ["Ajax"], ["honor","madness","pride","death","shame"], ["tragic","intense"], "short", {category:"imaginative", volume:4, wikipediaUrl:"https://en.wikipedia.org/wiki/Ajax_(play)"}),
  mk(4,  "sophocles-electra", "Sophocles: Electra", ["Sophocles"], ["Electra"], ["revenge","justice","family","grief","duty"], ["intense","dark"], "short", {category:"imaginative", volume:4, wikipediaUrl:"https://en.wikipedia.org/wiki/Electra_(Sophocles_play)"}),
  mk(4,  "sophocles-philoctetes", "Sophocles: Philoctetes", ["Sophocles"], ["Philoctetes"], ["suffering","betrayal","isolation","duty","honor"], ["reflective","painful"], "short", {category:"imaginative", volume:4, wikipediaUrl:"https://en.wikipedia.org/wiki/Philoctetes_(play)"}),

  // Euripides - Major plays
  mk(4,  "euripides-medea", "Euripides: Medea", ["Euripides"], ["Medea"], ["revenge","passion","betrayal","family","rage","justice"], ["intense","dark","psychological"], "short", {category:"imaginative", volume:4, wikipediaUrl:"https://en.wikipedia.org/wiki/Medea_(play)"}),
  mk(4,  "euripides-bacchae", "Euripides: The Bacchae", ["Euripides"], ["Bacchae"], ["religion","madness","power","nature","dionysian","ecstasy"], ["intense","mystical","disturbing"], "short", {category:"imaginative", volume:4, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Bacchae"}),
  mk(4,  "euripides-hippolytus", "Euripides: Hippolytus", ["Euripides"], ["Hippolytus"], ["desire","purity","passion","fate","gods","destruction"], ["intense","tragic"], "short", {category:"imaginative", volume:4, wikipediaUrl:"https://en.wikipedia.org/wiki/Hippolytus_(play)"}),
  mk(4,  "euripides-trojan-women", "Euripides: Trojan Women", ["Euripides"], ["Trojan Women"], ["war","suffering","grief","loss","women","cruelty"], ["tragic","sorrowful","intense"], "short", {category:"imaginative", volume:4, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Trojan_Women"}),
  mk(4,  "euripides-alcestis", "Euripides: Alcestis", ["Euripides"], ["Alcestis"], ["death","sacrifice","love","marriage","loyalty"], ["moving","mixed"], "short", {category:"imaginative", volume:4, wikipediaUrl:"https://en.wikipedia.org/wiki/Alcestis_(play)"}),
  mk(4,  "euripides-other", "Euripides: Other Plays", ["Euripides"], ["Electra","Hecuba","Heracles","Ion","Iphigenia in Aulis","Iphigenia in Tauris","Orestes","Phoenician Women","Suppliant Women","Andromache","Helen","Heracleidae","Rhesus","Cyclops"], ["fate","war","family","suffering","gods","women"], ["varied","intense","human"], "long", {category:"imaginative", volume:4, wikipediaUrl:"https://en.wikipedia.org/wiki/Euripides"}),

  // Aristophanes
  mk(4,  "aristophanes-lysistrata", "Aristophanes: Lysistrata", ["Aristophanes"], ["Lysistrata"], ["war","peace","sex","politics","women","satire"], ["funny","bawdy","clever"], "short", {category:"imaginative", volume:4, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Lysistrata"}),
  mk(4,  "aristophanes-clouds", "Aristophanes: The Clouds", ["Aristophanes"], ["Clouds"], ["philosophy","education","satire","socrates","wisdom","folly"], ["funny","satirical"], "short", {category:"imaginative", volume:4, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Clouds"}),
  mk(4,  "aristophanes-birds", "Aristophanes: The Birds", ["Aristophanes"], ["Birds"], ["utopia","fantasy","politics","escapism","satire"], ["funny","imaginative","light"], "short", {category:"imaginative", volume:4, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Birds_(play)"}),
  mk(4,  "aristophanes-frogs", "Aristophanes: The Frogs", ["Aristophanes"], ["Frogs"], ["art","poetry","death","judgment","comedy"], ["funny","literary"], "short", {category:"imaginative", volume:4, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Frogs"}),
  mk(4,  "aristophanes-other", "Aristophanes: Other Comedies", ["Aristophanes"], ["Acharnians","Knights","Wasps","Peace","Poet and the Women"], ["politics","war","satire","society","humor"], ["funny","satirical","varied"], "medium", {category:"imaginative", volume:4, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Aristophanes"}),
  
  // Volume 5: Ancient Historians
  mk(5,  "herodotus", "Herodotus: The History", ["Herodotus"], ["The History"], ["war","culture","customs","fate","human-nature","story"], ["curious","engaging","clear-eyed"], "long", {category:"history", volume:5, wikipediaUrl:"https://en.wikipedia.org/wiki/Histories_(Herodotus)"}),
  mk(5,  "thucydides", "Thucydides: The Peloponnesian War", ["Thucydides"], ["History of the Peloponnesian War"], ["power","war","state","politics","realism","strategy"], ["serious","analytical","clear-eyed"], "long", {category:"history", volume:5, wikipediaUrl:"https://en.wikipedia.org/wiki/History_of_the_Peloponnesian_War"}),

  // Volume 6: Plato - Major dialogues broken down
  mk(6,  "plato-republic", "Plato: The Republic", ["Plato"], ["The Republic"], ["justice","state","soul","education","truth","good"], ["inquiry","systematic"], "long", {category:"philosophy", volume:6, wikipediaUrl:"https://en.wikipedia.org/wiki/Republic_(Plato)"}),
  mk(6,  "plato-symposium", "Plato: Symposium", ["Plato"], ["Symposium"], ["love","beauty","desire","soul","wisdom"], ["inquiry","poetic"], "short", {category:"philosophy", volume:6, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Symposium_(Plato)"}),
  mk(6,  "plato-apology", "Plato: Apology", ["Plato"], ["Apology"], ["virtue","wisdom","truth","death","courage"], ["inspiring","clear"], "short", {category:"philosophy", volume:6, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Apology_(Plato)"}),
  mk(6,  "plato-phaedo", "Plato: Phaedo", ["Plato"], ["Phaedo"], ["soul","death","immortality","virtue","philosophy"], ["serious","contemplative"], "medium", {category:"philosophy", volume:6, wikipediaUrl:"https://en.wikipedia.org/wiki/Phaedo"}),
  mk(6,  "plato-phaedrus", "Plato: Phaedrus", ["Plato"], ["Phaedrus"], ["love","rhetoric","soul","beauty","writing"], ["inquiry","poetic"], "medium", {category:"philosophy", volume:6, wikipediaUrl:"https://en.wikipedia.org/wiki/Phaedrus_(dialogue)"}),
  mk(6,  "plato-meno", "Plato: Meno", ["Plato"], ["Meno"], ["knowledge","virtue","learning","recollection"], ["inquiry","accessible"], "short", {category:"philosophy", volume:6, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Meno"}),
  mk(6,  "plato-gorgias", "Plato: Gorgias", ["Plato"], ["Gorgias"], ["rhetoric","justice","power","persuasion","good","sophistry"], ["inquiry","intense","serious"], "long", {category:"philosophy", volume:6, wikipediaUrl:"https://en.wikipedia.org/wiki/Gorgias_(dialogue)"}),
  mk(6,  "plato-crito", "Plato: Crito", ["Plato"], ["Crito"], ["law","duty","justice","obedience","conscience"], ["inquiry","clear","practical"], "short", {category:"philosophy", volume:6, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Crito"}),
  mk(6,  "plato-euthyphro", "Plato: Euthyphro", ["Plato"], ["Euthyphro"], ["piety","definition","religion","gods","virtue"], ["inquiry","accessible"], "short", {category:"philosophy", volume:6, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Euthyphro"}),
  mk(6,  "plato-timaeus", "Plato: Timaeus", ["Plato"], ["Timaeus","Critias"], ["cosmology","nature","creation","world","form","matter"], ["systematic","mystical","deep"], "medium", {category:"philosophy", volume:6, wikipediaUrl:"https://en.wikipedia.org/wiki/Timaeus_(dialogue)"}),
  mk(6,  "plato-theaetetus", "Plato: Theaetetus", ["Plato"], ["Theaetetus"], ["knowledge","perception","truth","definition","wisdom"], ["inquiry","technical"], "medium", {category:"philosophy", volume:6, wikipediaUrl:"https://en.wikipedia.org/wiki/Theaetetus_(dialogue)"}),
  mk(6,  "plato-protagoras", "Plato: Protagoras", ["Plato"], ["Protagoras"], ["virtue","teaching","sophistry","good","wisdom"], ["inquiry","engaging","accessible"], "medium", {category:"philosophy", volume:6, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Protagoras_(dialogue)"}),
  mk(6,  "plato-ion", "Plato: Ion", ["Plato"], ["Ion"], ["poetry","art","inspiration","knowledge","skill"], ["inquiry","light"], "short", {category:"philosophy", volume:6, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Ion_(dialogue)"}),
  mk(6,  "plato-other-dialogues", "Plato: Other Dialogues", ["Plato"], ["Cratylus","Laches","Lysis","Charmides","Euthydemus","Parmenides","Sophist","Statesman","Philebus","Laws"], ["wisdom","virtue","knowledge","truth","dialectic","language","courage","friendship"], ["inquiry","varied","technical"], "long", {category:"philosophy", volume:6, wikipediaUrl:"https://en.wikipedia.org/wiki/Plato"}),
  
  // Volume 7: Aristotle Part I - Logical & Physical works
  mk(7,  "aristotle-categories", "Aristotle: Categories", ["Aristotle"], ["Categories"], ["logic","language","classification","being","substance"], ["technical","precise"], "short", {category:"philosophy", volume:7, wikipediaUrl:"https://en.wikipedia.org/wiki/Categories_(Aristotle)"}),
  mk(7,  "aristotle-physics", "Aristotle: Physics", ["Aristotle"], ["Physics"], ["nature","motion","change","cause","time","infinity"], ["systematic","demanding"], "long", {category:"philosophy", volume:7, wikipediaUrl:"https://en.wikipedia.org/wiki/Physics_(Aristotle)"}),
  mk(7,  "aristotle-logic", "Aristotle: Logic (Organon)", ["Aristotle"], ["Analytics, Topics, etc."], ["logic","reasoning","argument","proof","fallacy"], ["technical","structured"], "long", {category:"philosophy", volume:7, wikipediaUrl:"https://en.wikipedia.org/wiki/Organon"}),

  // Volume 8: Aristotle Part II - Major works broken down
  mk(8,  "aristotle-metaphysics", "Aristotle: Metaphysics", ["Aristotle"], ["Metaphysics"], ["being","substance","cause","god","form","matter","essence"], ["demanding","systematic","deep"], "long", {category:"philosophy", volume:8, wikipediaUrl:"https://en.wikipedia.org/wiki/Metaphysics_(Aristotle)"}),
  mk(8,  "aristotle-ethics", "Aristotle: Nicomachean Ethics", ["Aristotle"], ["Nicomachean Ethics"], ["virtue","happiness","character","friendship","good-life","mean"], ["practical","structured","grounding"], "long", {category:"philosophy", volume:8, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Nicomachean_Ethics"}),
  mk(8,  "aristotle-politics", "Aristotle: Politics", ["Aristotle"], ["Politics"], ["state","government","citizenship","justice","constitution","law"], ["practical","systematic"], "long", {category:"politics", volume:8, wikipediaUrl:"https://en.wikipedia.org/wiki/Politics_(Aristotle)"}),
  mk(8,  "aristotle-soul", "Aristotle: On the Soul", ["Aristotle"], ["On the Soul"], ["mind","soul","perception","thought","life"], ["systematic","deep"], "medium", {category:"philosophy", volume:8, wikipediaUrl:"https://en.wikipedia.org/wiki/On_the_Soul"}),
  mk(8,  "aristotle-poetics", "Aristotle: Poetics", ["Aristotle"], ["Poetics"], ["poetry","tragedy","art","imitation","catharsis"], ["analytical","precise"], "short", {category:"philosophy", volume:8, wikipediaUrl:"https://en.wikipedia.org/wiki/Poetics_(Aristotle)"}),
  mk(8,  "aristotle-rhetoric", "Aristotle: Rhetoric", ["Aristotle"], ["Rhetoric"], ["persuasion","argument","emotion","character","speech"], ["practical","systematic"], "medium", {category:"philosophy", volume:8, wikipediaUrl:"https://en.wikipedia.org/wiki/Rhetoric_(Aristotle)"}),
  
  // Volume 9: Ancient Medicine - broken down by author
  mk(9,  "hippocrates", "Hippocrates: Medical Works", ["Hippocrates"], ["The Oath","On Ancient Medicine","Airs Waters Places","Prognostic","The Sacred Disease"], ["medicine","body","nature","health","ethics","cause"], ["practical","grounding","clear"], "medium", {category:"science", volume:9, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Hippocrates"}),
  mk(9,  "galen", "Galen: On the Natural Faculties", ["Galen"], ["On the Natural Faculties"], ["medicine","body","nature","function","cause"], ["systematic","practical"], "short", {category:"science", volume:9, wikipediaUrl:"https://en.wikipedia.org/wiki/Galen"}),
  // Volume 10: Greek Mathematics - broken down by author
  mk(10, "euclid-elements", "Euclid: Elements", ["Euclid"], ["Elements"], ["mathematics","geometry","proof","reasoning","form","logic"], ["calm","precise","foundational"], "long", {category:"science", volume:10, wikipediaUrl:"https://en.wikipedia.org/wiki/Euclid%27s_Elements"}),
  mk(10, "archimedes-works", "Archimedes: Works", ["Archimedes"], ["On the Sphere and Cylinder","Measurement of a Circle","On Spirals","On Floating Bodies","The Sand Reckoner","The Method"], ["mathematics","physics","mechanics","proof","discovery"], ["precise","elegant","brilliant"], "long", {category:"science", volume:10, wikipediaUrl:"https://en.wikipedia.org/wiki/Archimedes"}),
  mk(10, "nicomachus-arithmetic", "Nicomachus: Introduction to Arithmetic", ["Nicomachus"], ["Introduction to Arithmetic"], ["mathematics","number","quantity","theory"], ["accessible","foundational"], "short", {category:"science", volume:10, wikipediaUrl:"https://en.wikipedia.org/wiki/Nicomachus_of_Gerasa"}),

  // Volume 11: Late Antiquity - Major works broken down
  mk(11, "lucretius", "Lucretius: On the Nature of Things", ["Lucretius"], ["De Rerum Natura"], ["nature","atoms","death","fear","materialism","pleasure"], ["poetic","freeing"], "long", {category:"philosophy", volume:11, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/De_rerum_natura"}),
  mk(11, "epictetus", "Epictetus: Discourses", ["Epictetus"], ["Discourses","Enchiridion"], ["stoicism","control","acceptance","virtue","freedom"], ["practical","grounding","clarity"], "medium", {category:"philosophy", volume:11, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Epictetus"}),
  mk(11, "marcus-aurelius", "Marcus Aurelius: Meditations", ["Marcus Aurelius"], ["Meditations"], ["stoicism","duty","acceptance","mind","mortality","virtue"], ["low-energy","comfort","clarity","reflective"], "medium", {category:"philosophy", volume:11, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Meditations_(Marcus_Aurelius)"}),
  mk(11, "plotinus", "Plotinus: The Enneads", ["Plotinus"], ["The Six Enneads"], ["soul","beauty","one","emanation","mysticism","contemplation"], ["deep","mystical"], "long", {category:"philosophy", volume:11, wikipediaUrl:"https://en.wikipedia.org/wiki/Plotinus"}),

  mk(12, "virgil-aeneid", "Virgil: The Aeneid", ["Virgil"], ["Aeneid"], ["fate","duty","empire","honor","loss","destiny"], ["epic","solemn"], "long", {category:"imaginative", volume:12, wikipediaUrl:"https://en.wikipedia.org/wiki/Aeneid"}),
  mk(12, "virgil-pastoral", "Virgil: Eclogues & Georgics", ["Virgil"], ["Eclogues","Georgics"], ["nature","pastoral","work","simplicity","beauty"], ["peaceful","reflective"], "short", {category:"imaginative", volume:12, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Virgil"}),

  mk(13, "plutarch-lives", "Plutarch", ["Plutarch"], ["Lives"], ["character","virtue","honor","leadership","education"], ["inspiring","reflective"], "long", {category:"history", wikipediaUrl:"https://en.wikipedia.org/wiki/Plutarch"}),
  mk(14, "tacitus", "Tacitus", ["Tacitus"], ["Annals","Histories"], ["power","tyranny","state","corruption","history"], ["grim","clear-eyed"], "long", {category:"history", wikipediaUrl:"https://en.wikipedia.org/wiki/Tacitus"}),

  // Volume 15: Astronomy Revolution - broken down by author
  mk(15, "ptolemy-almagest", "Ptolemy: The Almagest", ["Ptolemy"], ["The Almagest"], ["astronomy","mathematics","cosmos","observation","geocentric"], ["precise","systematic","foundational"], "long", {category:"science", volume:15, wikipediaUrl:"https://en.wikipedia.org/wiki/Almagest"}),
  mk(15, "copernicus-revolutions", "Copernicus: On the Revolutions", ["Copernicus"], ["On the Revolutions of the Heavenly Spheres"], ["astronomy","heliocentric","revolution","cosmos","science"], ["groundbreaking","precise","bold"], "long", {category:"science", volume:15, wikipediaUrl:"https://en.wikipedia.org/wiki/De_revolutionibus_orbium_coelestium"}),
  mk(15, "kepler-astronomy", "Kepler: Harmonies & Epitome", ["Kepler"], ["Epitome of Copernican Astronomy","The Harmonies of the World"], ["astronomy","harmony","laws","mathematics","cosmos"], ["precise","mystical","mathematical"], "medium", {category:"science", volume:15, wikipediaUrl:"https://en.wikipedia.org/wiki/Johannes_Kepler"}),

  // Volume 16-17: Augustine - Major works broken down
  mk(16, "augustine-confessions", "Augustine: Confessions", ["Augustine"], ["Confessions"], ["god","sin","conversion","time","memory","self"], ["introspective","intense","personal"], "long", {category:"philosophy", volume:16, wikipediaUrl:"https://en.wikipedia.org/wiki/Confessions_(Augustine)"}),
  mk(17, "augustine-city-of-god", "Augustine: City of God", ["Augustine"], ["City of God"], ["god","history","state","theology","providence","good-and-evil"], ["systematic","heavy"], "long", {category:"philosophy", volume:17, wikipediaUrl:"https://en.wikipedia.org/wiki/The_City_of_God"}),
  mk(17, "augustine-christian-doctrine", "Augustine: On Christian Doctrine", ["Augustine"], ["On Christian Doctrine"], ["theology","interpretation","teaching","scripture"], ["didactic","systematic"], "medium", {category:"philosophy", volume:17, wikipediaUrl:"https://en.wikipedia.org/wiki/On_Christian_Doctrine"}),

  mk(17, "aquinas-1", "Aquinas (Vol. I)", ["Thomas Aquinas"], ["Summa Theologica"], ["theology","reasoning","virtue","law","god"], ["systematic","serious"], "long", {category:"philosophy", wikipediaUrl:"https://en.wikipedia.org/wiki/Summa_Theologiae"}),
  mk(18, "aquinas-2", "Aquinas (Vol. II)", ["Thomas Aquinas"], ["Summa Theologica (cont.)"], ["theology","ethics","law","virtue","god"], ["systematic","serious"], "long", {category:"philosophy", wikipediaUrl:"https://en.wikipedia.org/wiki/Summa_Theologiae"}),

  // Volume 19: Dante - Divine Comedy broken into parts
  mk(19, "dante-inferno", "Dante: Inferno", ["Dante"], ["Inferno"], ["sin","justice","punishment","journey","despair","hell"], ["intense","dark","epic"], "medium", {category:"imaginative", volume:19, wikipediaUrl:"https://en.wikipedia.org/wiki/Inferno_(Dante)"}),
  mk(19, "dante-purgatorio", "Dante: Purgatorio", ["Dante"], ["Purgatorio"], ["repentance","hope","purification","growth","climb"], ["hopeful","epic"], "medium", {category:"imaginative", volume:19, wikipediaUrl:"https://en.wikipedia.org/wiki/Purgatorio"}),
  mk(19, "dante-paradiso", "Dante: Paradiso", ["Dante"], ["Paradiso"], ["love","god","heaven","light","beatitude","joy"], ["mystical","sublime","epic"], "medium", {category:"imaginative", volume:19, wikipediaUrl:"https://en.wikipedia.org/wiki/Paradiso"}),

  // Volume 19 also has Chaucer
  mk(19, "chaucer", "Chaucer", ["Chaucer"], ["Troilus and Criseyde","Canterbury Tales"], ["love","society","humor","character","custom","mortality"], ["playful","human","varied"], "long", {category:"imaginative", volume:19, wikipediaUrl:"https://en.wikipedia.org/wiki/Geoffrey_Chaucer"}),

  mk(20, "calvin", "Calvin", ["John Calvin"], ["Institutes of the Christian Religion"], ["religion","theology","law","duty","god"], ["serious","structured"], "long", {category:"philosophy", wikipediaUrl:"https://en.wikipedia.org/wiki/Institutes_of_the_Christian_Religion"}),
  
  // Volume 21: Political philosophy
  mk(21, "machiavelli", "Machiavelli: The Prince", ["Machiavelli"], ["The Prince"], ["power","state","politics","pragmatism","virtu"], ["hard-nosed","clear","sharp"], "short", {category:"politics", volume:21, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Prince"}),
  mk(21, "hobbes", "Hobbes: Leviathan", ["Thomas Hobbes"], ["Leviathan"], ["state","power","social-contract","fear","law","sovereignty"], ["systematic","dark","analytical"], "long", {category:"politics", volume:21, wikipediaUrl:"https://en.wikipedia.org/wiki/Leviathan_(book)"}),

  mk(22, "rabelais", "Rabelais", ["François Rabelais"], ["Gargantua and Pantagruel"], ["humor","education","custom","freedom","satire"], ["playful","weird"], "long", {category:"imaginative", wikipediaUrl:"https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel"}),

  // Volume 23: Humanist essays
  mk(23, "erasmus", "Erasmus: Praise of Folly", ["Erasmus"], ["Praise of Folly"], ["wisdom","folly","satire","society","religion"], ["witty","light","friendly"], "short", {category:"philosophy", volume:23, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Praise_of_Folly"}),
  mk(23, "montaigne", "Montaigne: Essays", ["Montaigne"], ["Essays"], ["self-knowledge","custom","education","wisdom","habit","experience"], ["low-energy","friendly","clarity","reflective"], "long", {category:"philosophy", volume:23, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Essays_(Montaigne)"}),

  // Volume 24-25: Shakespeare - Major plays broken down
  mk(24, "shakespeare-hamlet", "Shakespeare: Hamlet", ["William Shakespeare"], ["Hamlet"], ["death","revenge","madness","doubt","conscience","corruption"], ["intense","philosophical","dark"], "medium", {category:"imaginative", volume:24, wikipediaUrl:"https://en.wikipedia.org/wiki/Hamlet"}),
  mk(24, "shakespeare-macbeth", "Shakespeare: Macbeth", ["William Shakespeare"], ["Macbeth"], ["ambition","guilt","power","fate","evil","tyranny"], ["dark","intense","psychological"], "medium", {category:"imaginative", volume:24, wikipediaUrl:"https://en.wikipedia.org/wiki/Macbeth"}),
  mk(24, "shakespeare-king-lear", "Shakespeare: King Lear", ["William Shakespeare"], ["King Lear"], ["family","suffering","justice","madness","loyalty","nature"], ["tragic","profound","intense"], "medium", {category:"imaginative", volume:24, wikipediaUrl:"https://en.wikipedia.org/wiki/King_Lear"}),
  mk(24, "shakespeare-othello", "Shakespeare: Othello", ["William Shakespeare"], ["Othello"], ["jealousy","love","trust","deception","honor","race"], ["intense","tragic"], "medium", {category:"imaginative", volume:24, wikipediaUrl:"https://en.wikipedia.org/wiki/Othello"}),
  mk(24, "shakespeare-romeo-juliet", "Shakespeare: Romeo and Juliet", ["William Shakespeare"], ["Romeo and Juliet"], ["love","fate","family","youth","passion","death"], ["romantic","tragic"], "medium", {category:"imaginative", volume:24, wikipediaUrl:"https://en.wikipedia.org/wiki/Romeo_and_Juliet"}),
  mk(24, "shakespeare-julius-caesar", "Shakespeare: Julius Caesar", ["William Shakespeare"], ["Julius Caesar"], ["power","politics","honor","betrayal","rhetoric","ambition"], ["political","dramatic"], "medium", {category:"imaginative", volume:24, wikipediaUrl:"https://en.wikipedia.org/wiki/Julius_Caesar_(play)"}),
  mk(24, "shakespeare-comedies", "Shakespeare: Comedies", ["William Shakespeare"], ["Selected comedies"], ["love","mistaken-identity","humor","marriage","wit"], ["light","playful"], "long", {category:"imaginative", volume:24, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/William_Shakespeare"}),
  mk(25, "shakespeare-histories", "Shakespeare: Histories", ["William Shakespeare"], ["History plays"], ["power","kingship","honor","war","politics","legitimacy"], ["dramatic","political"], "long", {category:"imaginative", volume:25, wikipediaUrl:"https://en.wikipedia.org/wiki/William_Shakespeare"}),
  mk(25, "shakespeare-tempest", "Shakespeare: The Tempest", ["William Shakespeare"], ["The Tempest"], ["power","forgiveness","magic","freedom","art","reconciliation"], ["reflective","magical","hopeful"], "short", {category:"imaginative", volume:25, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Tempest"}),
  mk(25, "shakespeare-sonnets", "Shakespeare: Sonnets", ["William Shakespeare"], ["Sonnets"], ["love","time","beauty","desire","mortality","art"], ["lyrical","reflective"], "short", {category:"imaginative", volume:25, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Shakespeare_Sonnets"}),
  
  // Volume 26: Early Modern Science - broken down by author
  mk(26, "gilbert-magnetism", "Gilbert: On the Loadstone", ["William Gilbert"], ["On the Loadstone and Magnetic Bodies"], ["magnetism","experiment","nature","earth","science"], ["curious","precise","foundational"], "medium", {category:"science", volume:26, wikipediaUrl:"https://en.wikipedia.org/wiki/William_Gilbert"}),
  mk(26, "galileo-two-sciences", "Galileo: Two New Sciences", ["Galileo Galilei"], ["Dialogues Concerning Two New Sciences"], ["mechanics","motion","science","method","reasoning"], ["precise","groundbreaking","clear"], "long", {category:"science", volume:26, wikipediaUrl:"https://en.wikipedia.org/wiki/Galileo_Galilei"}),
  mk(26, "harvey-circulation", "Harvey: On the Motion of the Heart", ["William Harvey"], ["On the Motion of the Heart and Blood"], ["medicine","body","circulation","experiment","discovery"], ["precise","foundational"], "short", {category:"science", volume:26, wikipediaUrl:"https://en.wikipedia.org/wiki/William_Harvey"}),
  mk(27, "don-quixote", "Cervantes", ["Miguel de Cervantes"], ["Don Quixote"], ["idealism","reality","humor","self-deception","honor"], ["playful","big"], "long", {category:"imaginative", wikipediaUrl:"https://en.wikipedia.org/wiki/Don_Quixote"}),

  // Volume 28: Early modern philosophy - broken down
  mk(28, "bacon", "Bacon: Essays & New Atlantis", ["Francis Bacon"], ["Essays","New Atlantis","Advancement of Learning"], ["knowledge","method","science","progress","utility"], ["practical","clear"], "medium", {category:"philosophy", volume:28, wikipediaUrl:"https://en.wikipedia.org/wiki/Francis_Bacon"}),
  mk(28, "descartes", "Descartes: Meditations & Discourse", ["René Descartes"], ["Meditations","Discourse on Method"], ["doubt","mind","certainty","method","god","self"], ["analytical","foundational","clarity"], "medium", {category:"philosophy", volume:28, wikipediaUrl:"https://en.wikipedia.org/wiki/Meditations_on_First_Philosophy"}),
  mk(28, "spinoza", "Spinoza: Ethics", ["Baruch Spinoza"], ["Ethics"], ["god","nature","freedom","emotion","knowledge","substance"], ["systematic","geometric","deep"], "long", {category:"philosophy", volume:28, wikipediaUrl:"https://en.wikipedia.org/wiki/Ethics_(Spinoza)"}),

  // Volume 29: Milton - broken down by major works
  mk(29, "milton-paradise-lost", "Milton: Paradise Lost", ["John Milton"], ["Paradise Lost"], ["good-and-evil","freedom","sin","fall","god","satan","will","rebellion"], ["epic","intense","sublime"], "long", {category:"imaginative", volume:29, wikipediaUrl:"https://en.wikipedia.org/wiki/Paradise_Lost"}),
  mk(29, "milton-samson", "Milton: Samson Agonistes", ["John Milton"], ["Samson Agonistes"], ["suffering","strength","faith","revenge","redemption","blindness"], ["tragic","intense","defiant"], "medium", {category:"imaginative", volume:29, wikipediaUrl:"https://en.wikipedia.org/wiki/Samson_Agonistes"}),
  mk(29, "milton-poems", "Milton: Poetry & Prose", ["John Milton"], ["Lycidas","Comus","L'Allegro","Il Penseroso","Areopagitica","other poems"], ["beauty","virtue","freedom","censorship","contemplation","pastoral"], ["lyrical","varied"], "medium", {category:"imaginative", volume:29, wikipediaUrl:"https://en.wikipedia.org/wiki/John_Milton"}),

  mk(30, "pascal", "Pascal", ["Blaise Pascal"], ["Provincial Letters","Pensées","Treatises"], ["faith","reasoning","mind","god","doubt"], ["introspective","sharp"], "medium", {category:"philosophy", wikipediaUrl:"https://en.wikipedia.org/wiki/Blaise_Pascal"}),

  // Volume 31: Molière & Racine - broken down by playwright
  mk(31, "moliere-tartuffe", "Molière: Tartuffe", ["Molière"], ["Tartuffe"], ["hypocrisy","religion","deception","virtue-and-vice","family"], ["satirical","witty","sharp"], "short", {category:"imaginative", volume:31, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Tartuffe"}),
  mk(31, "moliere-misanthrope", "Molière: The Misanthrope", ["Molière"], ["The Misanthrope"], ["honesty","society","love","truth","human-nature"], ["witty","satirical","human"], "short", {category:"imaginative", volume:31, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Misanthrope"}),
  mk(31, "moliere-miser", "Molière: The Miser", ["Molière"], ["The Miser"], ["greed","money","family","love","obsession"], ["funny","satirical"], "short", {category:"imaginative", volume:31, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Miser_(play)"}),
  mk(31, "moliere-other", "Molière: Other Plays", ["Molière"], ["The School for Wives","Don Juan","The Would-Be Gentleman","The Imaginary Invalid"], ["society","pretension","class","marriage","satire"], ["witty","light","playful"], "medium", {category:"imaginative", volume:31, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Moli%C3%A8re"}),
  mk(31, "racine-phedre", "Racine: Phèdre", ["Racine"], ["Phèdre"], ["passion","guilt","desire","fate","forbidden-love","tragedy"], ["intense","tragic","psychological"], "short", {category:"imaginative", volume:31, wikipediaUrl:"https://en.wikipedia.org/wiki/Ph%C3%A8dre"}),
  mk(31, "racine-berenice", "Racine: Bérénice", ["Racine"], ["Bérénice"], ["love","duty","renunciation","state","sacrifice"], ["tragic","noble","restrained"], "short", {category:"imaginative", volume:31, wikipediaUrl:"https://en.wikipedia.org/wiki/B%C3%A9r%C3%A9nice"}),

  // Volume 32: Classical Mechanics - broken down by author
  mk(32, "newton-principia", "Newton: Principia & Optics", ["Isaac Newton"], ["Mathematical Principles of Natural Philosophy","Optics"], ["mechanics","gravity","motion","laws","light","mathematics","science"], ["precise","demanding","foundational","monumental"], "long", {category:"science", volume:32, wikipediaUrl:"https://en.wikipedia.org/wiki/Principia_Mathematica"}),
  mk(32, "huygens-light", "Huygens: Treatise on Light", ["Christiaan Huygens"], ["Treatise on Light"], ["optics","light","waves","science","nature"], ["precise","clear"], "short", {category:"science", volume:32, wikipediaUrl:"https://en.wikipedia.org/wiki/Christiaan_Huygens"}),
  
  // Volume 33: British Empiricists - broken down
  mk(33, "locke", "Locke: Essay & Government", ["John Locke"], ["Essay Concerning Human Understanding","Two Treatises of Government"], ["knowledge","mind","experience","liberty","government","property"], ["systematic","clarity","foundational"], "long", {category:"philosophy", volume:33, wikipediaUrl:"https://en.wikipedia.org/wiki/John_Locke"}),
  mk(33, "berkeley", "Berkeley: Principles", ["George Berkeley"], ["Principles of Human Knowledge"], ["perception","idealism","mind","existence","god"], ["clarity","provocative"], "medium", {category:"philosophy", volume:33, wikipediaUrl:"https://en.wikipedia.org/wiki/George_Berkeley"}),
  mk(33, "hume", "Hume: Enquiries", ["David Hume"], ["Enquiry Concerning Human Understanding","Enquiry Concerning Morals"], ["cause","knowledge","skepticism","custom","emotion","reason"], ["clarity","skeptical","sharp"], "long", {category:"philosophy", volume:33, wikipediaUrl:"https://en.wikipedia.org/wiki/David_Hume"}),

  // Volume 34: Enlightenment Satire - broken down by author
  mk(34, "swift-gullivers-travels", "Swift: Gulliver's Travels", ["Jonathan Swift"], ["Gulliver's Travels"], ["satire","reason","human-nature","society","pride","folly"], ["witty","biting","clever"], "medium", {category:"imaginative", volume:34, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Gulliver%27s_Travels"}),
  mk(34, "voltaire-candide", "Voltaire: Candide", ["Voltaire"], ["Candide"], ["optimism","suffering","satire","philosophy","evil","fate"], ["witty","sharp","accessible"], "short", {category:"imaginative", volume:34, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Candide"}),
  mk(34, "diderot-rameaus-nephew", "Diderot: Rameau's Nephew", ["Denis Diderot"], ["Rameau's Nephew"], ["morality","genius","society","paradox","art","self"], ["witty","philosophical","provocative"], "short", {category:"imaginative", volume:34, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Rameau%27s_Nephew"}),

  // Volume 35: Social Contract theorists
  mk(35, "montesquieu", "Montesquieu: Spirit of Laws", ["Montesquieu"], ["Spirit of Laws"], ["law","government","separation-of-powers","climate","culture"], ["analytical","systematic"], "long", {category:"politics", volume:35, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Spirit_of_the_Laws"}),
  mk(35, "rousseau", "Rousseau: Social Contract & Discourses", ["Jean-Jacques Rousseau"], ["Social Contract","Discourse on Inequality"], ["freedom","society","state-of-nature","democracy","general-will"], ["passionate","provoking"], "long", {category:"politics", volume:35, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Social_Contract"}),

  mk(36, "wealth-of-nations", "Adam Smith", ["Adam Smith"], ["The Wealth of Nations"], ["wealth","labor","government","law","progress"], ["analytical","dry"], "long", {category:"social-science", wikipediaUrl:"https://en.wikipedia.org/wiki/The_Wealth_of_Nations"}),
  mk(37, "gibbon-1", "Gibbon (Vol. I)", ["Edward Gibbon"], ["Decline and Fall"], ["history","religion","state","war"], ["big","serious"], "long", {category:"history", wikipediaUrl:"https://en.wikipedia.org/wiki/The_History_of_the_Decline_and_Fall_of_the_Roman_Empire"}),
  mk(38, "gibbon-2", "Gibbon (Vol. II)", ["Edward Gibbon"], ["Decline and Fall (cont.)"], ["history","religion","state","war"], ["big","serious"], "long", {category:"history", wikipediaUrl:"https://en.wikipedia.org/wiki/The_History_of_the_Decline_and_Fall_of_the_Roman_Empire"}),

  // Volume 39: Kant - Major works broken down
  mk(39, "kant-pure-reason", "Kant: Critique of Pure Reason", ["Immanuel Kant"], ["Critique of Pure Reason"], ["knowledge","reason","metaphysics","experience","categories","limits"], ["demanding","foundational","systematic"], "long", {category:"philosophy", volume:39, wikipediaUrl:"https://en.wikipedia.org/wiki/Critique_of_Pure_Reason"}),
  mk(39, "kant-practical-reason", "Kant: Critique of Practical Reason", ["Immanuel Kant"], ["Critique of Practical Reason","Groundwork"], ["duty","morality","categorical-imperative","freedom","autonomy"], ["demanding","systematic","ethical"], "medium", {category:"philosophy", volume:39, wikipediaUrl:"https://en.wikipedia.org/wiki/Critique_of_Practical_Reason"}),
  mk(39, "kant-judgment", "Kant: Critique of Judgment", ["Immanuel Kant"], ["Critique of Judgment"], ["beauty","art","teleology","aesthetic","sublime","purpose"], ["demanding","systematic"], "medium", {category:"philosophy", volume:39, wikipediaUrl:"https://en.wikipedia.org/wiki/Critique_of_Judgment"}),

  // Volume 40: Political Philosophy & Documents - broken down
  mk(40, "american-founding-docs", "American Founding Documents", ["Various"], ["Declaration of Independence","Articles of Confederation","Constitution"], ["liberty","government","rights","democracy","law"], ["foundational","clear","inspiring"], "short", {category:"politics", volume:40, wikipediaUrl:"https://en.wikipedia.org/wiki/United_States_Declaration_of_Independence"}),
  mk(40, "federalist-papers", "The Federalist Papers", ["James Madison","Alexander Hamilton","John Jay"], ["The Federalist Papers"], ["government","constitution","federalism","republic","liberty","law"], ["analytical","practical","clear"], "long", {category:"politics", volume:40, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Federalist_Papers"}),
  mk(40, "mill-liberty", "J.S. Mill: On Liberty & Others", ["John Stuart Mill"], ["On Liberty","Representative Government","Utilitarianism"], ["liberty","freedom","democracy","utility","individual","harm"], ["clear","practical","liberal"], "long", {category:"politics", volume:40, wikipediaUrl:"https://en.wikipedia.org/wiki/On_Liberty"}),

  mk(41, "boswell-johnson", "Boswell", ["James Boswell"], ["Life of Samuel Johnson"], ["character","conversation","virtue","education"], ["warm","human"], "long", {category:"biography", comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/James_Boswell"}),

  // Volume 42: Chemistry & Electricity - broken down by author
  mk(42, "lavoisier-chemistry", "Lavoisier: Elements of Chemistry", ["Antoine Lavoisier"], ["Elements of Chemistry"], ["chemistry","science","elements","experiment","method"], ["foundational","clear","revolutionary"], "medium", {category:"science", volume:42, wikipediaUrl:"https://en.wikipedia.org/wiki/Antoine_Lavoisier"}),
  mk(42, "faraday-electricity", "Faraday: Experimental Researches in Electricity", ["Michael Faraday"], ["Experimental Researches in Electricity"], ["electricity","magnetism","science","experiment","discovery"], ["curious","precise","accessible"], "medium", {category:"science", volume:42, wikipediaUrl:"https://en.wikipedia.org/wiki/Michael_Faraday"}),

  // Volume 43: German philosophy
  mk(43, "hegel", "Hegel: Phenomenology & Philosophy of Right", ["G.W.F. Hegel"], ["Phenomenology of Spirit","Philosophy of Right"], ["spirit","history","dialectic","state","recognition","absolute"], ["demanding","deep","systematic"], "long", {category:"philosophy", volume:43, wikipediaUrl:"https://en.wikipedia.org/wiki/Phenomenology_of_Spirit"}),
  mk(43, "kierkegaard", "Kierkegaard: Fear and Trembling", ["Søren Kierkegaard"], ["Fear and Trembling","Sickness Unto Death"], ["faith","anxiety","self","despair","existence","choice"], ["intense","personal","provoking"], "medium", {category:"philosophy", volume:43, wikipediaUrl:"https://en.wikipedia.org/wiki/Søren_Kierkegaard"}),
  mk(43, "nietzsche", "Nietzsche: Beyond Good and Evil", ["Friedrich Nietzsche"], ["Beyond Good and Evil","Genealogy of Morals"], ["morality","power","truth","nihilism","perspectivism","will"], ["intense","provoking","sharp"], "medium", {category:"philosophy", volume:43, wikipediaUrl:"https://en.wikipedia.org/wiki/Beyond_Good_and_Evil"}),

  mk(44, "tocqueville", "Tocqueville", ["Alexis de Tocqueville"], ["Democracy in America"], ["democracy","citizen","equality","liberty","state"], ["observant","clear"], "long", {category:"politics", wikipediaUrl:"https://en.wikipedia.org/wiki/Democracy_in_America"}),

  // Volume 45: 19th Century Literature - broken down by author
  mk(45, "goethe-faust", "Goethe: Faust", ["Johann Wolfgang von Goethe"], ["Faust Part I","Faust Part II"], ["desire","knowledge","good-and-evil","striving","redemption","love","ambition"], ["epic","philosophical","sublime"], "long", {category:"imaginative", volume:45, wikipediaUrl:"https://en.wikipedia.org/wiki/Faust"}),
  mk(45, "balzac-cousin-bette", "Balzac: Cousin Bette", ["Honoré de Balzac"], ["Cousin Bette"], ["revenge","society","passion","family","ambition","money"], ["realistic","human","intense"], "long", {category:"imaginative", volume:45, wikipediaUrl:"https://en.wikipedia.org/wiki/Honor%C3%A9_de_Balzac"}),
  // Volume 46: 19th Century Novels - broken down by author
  mk(46, "austen-emma", "Austen: Emma", ["Jane Austen"], ["Emma"], ["love","society","judgment","custom","matchmaking","self-knowledge"], ["witty","comfort","human","warm"], "long", {category:"imaginative", volume:46, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Emma_(novel)"}),
  mk(46, "eliot-middlemarch", "George Eliot: Middlemarch", ["George Eliot"], ["Middlemarch"], ["ambition","marriage","society","idealism","disillusionment","character"], ["wise","human","profound","comfort"], "long", {category:"imaginative", volume:46, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/Middlemarch"}),
  mk(47, "little-dorrit", "Dickens", ["Charles Dickens"], ["Little Dorrit"], ["justice","law","wealth","society","character"], ["big","human"], "long", {category:"imaginative", wikipediaUrl:"https://en.wikipedia.org/wiki/Charles_Dickens"}),

  // Volume 48: American classics
  mk(48, "moby-dick", "Melville: Moby-Dick", ["Herman Melville"], ["Moby-Dick"], ["obsession","nature","evil","fate","meaning","whale"], ["epic","symbolic","profound"], "long", {category:"imaginative", volume:48, wikipediaUrl:"https://en.wikipedia.org/wiki/Moby_Dick"}),
  mk(48, "huckleberry-finn", "Twain: Huckleberry Finn", ["Mark Twain"], ["Huckleberry Finn"], ["freedom","society","morality","friendship","race","conscience"], ["adventure","human","accessible"], "medium", {category:"imaginative", volume:48, comfortTag:true, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Adventures_of_Huckleberry_Finn"}),

  mk(49, "darwin", "Darwin", ["Charles Darwin"], ["Origin of Species","Descent of Man"], ["evolution","nature","man","science"], ["curious","grounding"], "long", {category:"science", wikipediaUrl:"https://en.wikipedia.org/wiki/Charles_Darwin"}),

  // Volume 50: Marxist Economics - broken down by work/author
  mk(50, "marx-capital", "Marx: Capital", ["Karl Marx"], ["Capital Vol. I"], ["labor","wealth","capitalism","exploitation","value","class"], ["demanding","systemic","analytical"], "long", {category:"social-science", volume:50, wikipediaUrl:"https://en.wikipedia.org/wiki/Das_Kapital"}),
  mk(50, "marx-engels-manifesto", "Marx & Engels: Communist Manifesto", ["Karl Marx","Friedrich Engels"], ["Communist Manifesto"], ["revolution","class","capitalism","labor","state","history"], ["fiery","clear","provocative"], "short", {category:"social-science", volume:50, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Communist_Manifesto"}),
  mk(51, "war-and-peace", "Tolstoy", ["Leo Tolstoy"], ["War and Peace"], ["war","history","love","fate","honor"], ["epic","immersive"], "long", {category:"imaginative", wikipediaUrl:"https://en.wikipedia.org/wiki/War_and_Peace"}),

  // Volume 52: Russian literature
  mk(52, "brothers-karamazov", "Dostoevsky: Brothers Karamazov", ["Fyodor Dostoevsky"], ["The Brothers Karamazov"], ["god","sin","free-will","family","suffering","faith"], ["intense","philosophical","moral"], "long", {category:"imaginative", volume:52, wikipediaUrl:"https://en.wikipedia.org/wiki/The_Brothers_Karamazov"}),
  mk(52, "ibsen-plays", "Ibsen: Selected Plays", ["Henrik Ibsen"], ["A Doll's House","Hedda Gabler","etc."], ["society","truth","freedom","convention","self-deception"], ["realistic","provoking"], "medium", {category:"imaginative", volume:52, wikipediaUrl:"https://en.wikipedia.org/wiki/Henrik_Ibsen"}),

  mk(53, "william-james", "William James", ["William James"], ["Principles of Psychology"], ["mind","habit","emotion","experience"], ["analytical","curious"], "long", {category:"social-science", wikipediaUrl:"https://en.wikipedia.org/wiki/William_James"}),
  mk(54, "freud", "Freud", ["Sigmund Freud"], ["Major works"], ["mind","desire","dreams","emotion","self"], ["probing","mixed"], "long", {category:"social-science", wikipediaUrl:"https://en.wikipedia.org/wiki/Sigmund_Freud"}),

  mk(55, "20c-phil-religion", "20th Century Philosophy & Religion", ["Various"], ["Selections"], ["mind","truth","religion","reasoning","language"], ["modern","varied"], "long", {category:"philosophy", wikipediaUrl:"https://en.wikipedia.org/wiki/20th_century_philosophy"}),
  mk(56, "20c-natural-science", "20th Century Natural Science", ["Various"], ["Selections"], ["science","physics","nature","truth","hypothesis"], ["modern","precise"], "long", {category:"science", wikipediaUrl:"https://en.wikipedia.org/wiki/History_of_science"}),
  mk(57, "20c-social-1", "20th Century Social Science I", ["Various"], ["Selections"], ["wealth","labor","state","economics","progress"], ["modern","systemic"], "medium", {category:"social-science", wikipediaUrl:"https://en.wikipedia.org/wiki/Social_science"}),
  mk(58, "20c-social-2", "20th Century Social Science II", ["Various"], ["Selections"], ["culture","religion","society","history"], ["modern","wide"], "medium", {category:"social-science", wikipediaUrl:"https://en.wikipedia.org/wiki/Social_science"}),
  mk(59, "20c-lit-1", "20th Century Imaginative Literature I", ["Various"], ["Selections"], ["self","society","love","truth","meaning"], ["modern","varied"], "long", {category:"imaginative", wikipediaUrl:"https://en.wikipedia.org/wiki/20th-century_literature"}),
  mk(60, "20c-lit-2", "20th Century Imaginative Literature II", ["Various"], ["Selections"], ["self","society","love","truth","meaning"], ["modern","varied"], "long", {category:"imaginative", wikipediaUrl:"https://en.wikipedia.org/wiki/20th-century_literature"})
];

function mk(volume, slug, title, authors, works, themes, moods, length, extra = {}) {
  const category = extra.category ?? "general";
  const comfortTag = !!extra.comfortTag;
  const wikipediaUrl = extra.wikipediaUrl ?? null;
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
    comfortTag,
    wikipediaUrl        // link to Wikipedia entry
  };
}

function uniq(arr) { return [...new Set(arr.map(String))]; }
