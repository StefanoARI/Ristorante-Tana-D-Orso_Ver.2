import { MenuItem, WineItem, GalleryPhoto } from '../types';

export const RESTAURANT_INFO = {
  name: "Ristorante Tana d'Orso",
  tagline: "Cucina che dà forma all'emozione",
  subtagline: "Tradizione e qualità nel suggestivo Borgo di Mustonate dal 2005",
  address: "Via Mottarone 43, 21100 Varese - Italia",
  borgo: "Borgo di Mustonate (Varese)",
  phone: "+39 0332 320392",
  fax: "+39 0332 320011",
  email: "info@ristorantetanadorso.it",
  company: "Antico Borgo Srl",
  vat: "P.IVA 04639530965 - N. REA VA-296918",
  coperti: 150,
  cantinaLabels: "250+",
  logoUrl: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/03/TANA_ORSO_LOGO_2017.png",
  footerLogoUrl: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/03/TANA_ORSO_LOGO_2017_FOOTER.png",
  openingHours: [
    { day: "Lunedì", lunch: "12:15 - 14:00", dinner: "19:15 - 21:30", closed: false },
    { day: "Martedì", lunch: "Chiuso", dinner: "Chiuso", closed: true },
    { day: "Mercoledì", lunch: "Chiuso", dinner: "Chiuso", closed: true },
    { day: "Giovedì", lunch: "12:15 - 14:00", dinner: "19:15 - 21:30", closed: false },
    { day: "Venerdì", lunch: "12:15 - 14:00", dinner: "19:15 - 21:30", closed: false },
    { day: "Sabato", lunch: "12:15 - 14:00", dinner: "19:15 - 21:30", closed: false },
    { day: "Domenica", lunch: "12:15 - 14:00", dinner: "19:15 - 21:30", closed: false },
  ]
};

export const CHEF_QUOTE = {
  text: "La cucina è l'arte di intrattenere e nutrire il proprio ospite. Colori, profumi e immagini accompagnano l'esperienza degustativa creando una serie di sensazioni ed emozioni che mi auguro vi possano accompagnare oltre la vostra permanenza presso la Tana d'Orso.",
  author: "Francesco Testa",
  role: "Chef Patron"
};

export const MENU_ITEMS: MenuItem[] = [
  // Antipasti
  {
    id: "ant-1",
    name: "Tartar di Fassona con confettura di cipolle rosse e pan brioche",
    category: "antipasti",
    description: "Battuta al coltello di pura carne Fassona piemontese presidio Slow Food, servita con composta artigianale di cipolle rosse di Tropea e pan brioche dorato al burro di malga.",
    price: "€ 22.00",
    ingredients: ["Fassona Piemontese (La Granda)", "Cipolla Rossa", "Pan Brioche", "Olio EVO dei laghi lombardi"],
    isSpecialty: true,
    slowFoodPresidium: true,
    pairing: "Nebbiolo d'Alba DOC o Franciacorta Rosé",
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/04/Foto1.jpg"
  },
  {
    id: "ant-2",
    name: "Prosciutto toscano con lo gnocco fritto",
    category: "antipasti",
    description: "Prosciutto crudo toscano stagionato 24 mesi al pepe nero, accompagnato da caldi cuscini dorati di gnocco fritto della tradizione emiliano-lombarda.",
    price: "€ 18.00",
    ingredients: ["Prosciutto Toscano DOP", "Gnocco fritto", "Sale di Cervia"],
    pairing: "Lambrusco di Sorbara Metodo Ancestrale"
  },
  {
    id: "ant-3",
    name: "Culaccia di Langhirano con lo gnocco fritto",
    category: "antipasti",
    description: "Pregiata culaccia dolce di Langhirano affettata finissima, adagiata su gnocco fritto leggero e fragrante.",
    price: "€ 20.00",
    ingredients: ["Culaccia di Langhirano", "Impasto tradizionale a lievitazione lenta"],
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/04/Foto1.jpg"
  },
  {
    id: "ant-4",
    name: "Tatin di cipolla su sfoglia croccante, crema di porri e mandorle tostate",
    category: "antipasti",
    description: "Rivisitazione salata con cipolle ramate dolcemente caramellate su sfoglia al burro, specchio vellutato di porri dolci e lamelle di mandorle tostate.",
    price: "€ 17.00",
    ingredients: ["Cipolla ramata", "Porro di Cervere", "Mandorle di Noto", "Pasta sfoglia francese"],
    pairing: "Lugana Superiore DOC"
  },
  {
    id: "ant-5",
    name: "Zuppa di polipetti con pomodoro Migliarese e crostini croccanti",
    category: "antipasti",
    description: "Teneri moscardini e polipetti in umido lento con pomodoro Migliarese biologico, timo fresco, peperoncino dolce e fette di pane tostate all'aglio dolce.",
    price: "€ 21.00",
    ingredients: ["Polipetti freschi", "Pomodoro Migliarese", "Crostini di lievito madre", "Timo"],
    pairing: "Vermentino di Sardegna o Pigato Ligure"
  },
  {
    id: "ant-6",
    name: "Soufflé ai formaggi delle valli con crema al Bitto, guanciale croccante e tartufo nero",
    category: "antipasti",
    description: "Morbido e aereo sformatino a base di formaggi vaccini locali, fondo cremoso di Bitto storico della Valtellina, velo di guanciale pepato e scaglie di tartufo nero pregiato.",
    price: "€ 23.00",
    ingredients: ["Formaggi varesini", "Bitto DOP", "Guanciale stagionato", "Tartufo nero uncinato"],
    isSpecialty: true,
    pairing: "Valtellina Superiore Sassella DOCG"
  },
  {
    id: "ant-7",
    name: "Graten di verdure dell'orto con stracchino all'antica",
    category: "antipasti",
    description: "Tortino tiepido di verdure di stagione spadellate con erbe aromatiche e fuso fondente di stracchino all'antica delle valli.",
    price: "€ 16.00",
    ingredients: ["Verdure biologiche", "Stracchino all'antica", "Pangrattato aromatizzato"],
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/11/Graten.jpg"
  },

  // Zuppe
  {
    id: "zup-1",
    name: "Crema di patate e porri con seppioline gratinate",
    category: "zuppe",
    description: "Vellutata setosa di patate bianche comasche e porri dolci stufati a fuoco lento, arricchita da seppioline dell'Adriatico dorate al panure aromatico.",
    price: "€ 18.00",
    ingredients: ["Patate montane", "Porri dolci", "Seppioline fresche", "Erbe fini"],
    pairing: "Gavi del Comune di Gavi DOCG"
  },
  {
    id: "zup-2",
    name: "Crema di zucca con castagne glassate e briciole di amaretto",
    category: "zuppe",
    description: "Un grande classico autunnale lombardo: zucca mantovana arrostita, castagne del varesotto al burro chiarificato e friabili amaretti di Saronno.",
    price: "€ 17.00",
    ingredients: ["Zucca Berrettina Mantovana", "Castagne locali", "Amaretti di Saronno", "Noce moscata"],
    isSpecialty: true,
    pairing: "Riesling Renano dell'Oltrepò Pavese"
  },
  {
    id: "zup-3",
    name: "Crema di riso Venere con stracciatella pugliese e code di gamberi",
    category: "zuppe",
    description: "Infuso vellutato di riso Venere integrale dai profumi tostati, cuore fresco di stracciatella di bufala e gamberi rossi scottati al salto.",
    price: "€ 21.00",
    ingredients: ["Riso Venere", "Stracciatella", "Code di gambero", "Scorza di lime"],
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/09/Crema-di-riso-Venere.jpg"
  },

  // Primi
  {
    id: "pri-1",
    name: "Riso 'Acquerello' alla milanese con midollo arrosto e zafferano",
    category: "primi",
    description: "Il risotto per antonomasia: Riso Carnaroli Acquerello invecchiato 1 anno, pistilli purissimi di zafferano, mantecatura all'onda con burro d'alpeggio e ossobuco con midollo rosolato.",
    price: "€ 24.00",
    ingredients: ["Riso Acquerello Presidio", "Zafferano in pistilli", "Midollo di bue", "Grana Padano Riserva"],
    isSpecialty: true,
    slowFoodPresidium: true,
    pairing: "Pinot Nero dell'Oltrepò Pavese o Franciacorta Saten",
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2015/04/IMG_2701.jpg"
  },
  {
    id: "pri-2",
    name: "Pacchero di Gragnano al ragù salentino e tartufo nero estivo",
    category: "primi",
    description: "Pasta trafilata al bronzo saltata in un intenso ragù cotto lentamente secondo ricetta meridionale, rifinito al tavolo con lamelle di tartufo nero fresco.",
    price: "€ 22.00",
    ingredients: ["Paccheri IGP", "Ragù di carni miste selezionate", "Tartufo nero", "Pecorino stagionato"],
    pairing: "Primitivo di Manduria Riserva"
  },
  {
    id: "pri-3",
    name: "Conchiglioni al ragù di coniglio grigio di Carmagnola ed olive taggiasche",
    category: "primi",
    description: "Delicato battuto di coniglio grigio piemontese marinato alle erbe, sfumato al vino bianco e arricchito dalla dolce sapidità delle olive taggiasche liguri.",
    price: "€ 20.00",
    ingredients: ["Conchiglioni artigianali", "Coniglio di Carmagnola Presidio", "Olive taggiasche", "Maggiorana"],
    slowFoodPresidium: true,
    pairing: "Roero Arneis DOCG"
  },
  {
    id: "pri-4",
    name: "Spaghettoni trafilati al bronzo alle vongole veraci e bottarga di muggine",
    category: "primi",
    description: "Spaghetto spesso risottato nell'acqua naturale di cottura delle vongole dell'Adriatico con aglio dolce, prezzemolo riccio e pioggia di bottarga di Cabras.",
    price: "€ 23.00",
    ingredients: ["Spaghettone di Gragnano", "Vongole veraci", "Bottarga di muggine sarda", "Peperoncino"],
    pairing: "Greco di Tufo DOCG o Vermentino di Gallura"
  },
  {
    id: "pri-5",
    name: "Scialatielli con crema di patate, cozze, bottarga di pane verde e profumo di limone",
    category: "primi",
    description: "Scialatiello fresco campano fatto in casa, emulsione di patate novelle, cozze dolci, pane croccante aromatizzato al prezzemolo e scorza di limone sfusato di Amalfi.",
    price: "€ 21.00",
    ingredients: ["Scialatielli all'uovo", "Cozze fresche", "Crema di patate", "Bottarga di pane al prezzemolo"],
    pairing: "Fiano di Avellino DOCG"
  },
  {
    id: "pri-6",
    name: "Lasagna al ragù d'agnello e fonduta di pecorino dolce",
    category: "primi",
    description: "Sfoglia sottilissima all'uovo tirata a mano, strati dorati al forno con ragù d'agnello brasato e vellutata fonduta di formaggio pecorino.",
    price: "€ 20.00",
    ingredients: ["Pasta fresca all'uovo", "Agnello delle valli", "Pecorino", "Rosmarino"],
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/11/AGNELLO.jpg"
  },

  // Secondi
  {
    id: "sec-1",
    name: "Tagliata di Fassona piemontese con sale dolce e patate al rosmarino",
    category: "secondi",
    description: "Controfiletto di razza bovina piemontese La Granda, scottato ad altissima temperatura per preservare intatte succulenza e tenerezza, servito con fiocchi di sale Maldon.",
    price: "€ 28.00",
    ingredients: ["Fassona Piemontese (La Granda)", "Sale Maldon", "Patate novelle", "Rosmarino fresco"],
    isSpecialty: true,
    slowFoodPresidium: true,
    pairing: "Barolo DOCG di Serralunga d'Alba"
  },
  {
    id: "sec-2",
    name: "Milanese di vitello alta con l'osso cotta nel burro chiarificato",
    category: "secondi",
    description: "La regina della tradizione milanese: costoletta di vitello con osso, impanata con pane grattugiato grosso fatto in casa e dorata lentamente in puro burro chiarificato.",
    price: "€ 32.00",
    ingredients: ["Costoletta di vitello da latte", "Burro chiarificato alpino", "Panatura artigianale", "Limone"],
    isSpecialty: true,
    pairing: "Curtefranca Rosso o Barbera d'Asti Superiore"
  },
  {
    id: "sec-3",
    name: "Guancia di vitello cotta a bassa temperatura al Sauvignon con polenta croccante",
    category: "secondi",
    description: "Cottura a 68°C per oltre 18 ore nel Sauvignon Blanc e aromi dell'orto, glassata nella sua stessa riduzione bruna e servita con fette di polenta bramata grigliata.",
    price: "€ 26.00",
    ingredients: ["Guancia di vitello", "Sauvignon Blanc", "Polenta bramata bergamasca", "Fondo bruno"],
    pairing: "Inferno Valtellina Superiore DOCG"
  },
  {
    id: "sec-4",
    name: "Carrè d'agnello ripieno in crosta di nocciole del Piemonte IGP",
    category: "secondi",
    description: "Costolette tenere di agnello con farcia leggera di carni bianche ed erbe fini, panate in granella tostata di Tonda Gentile delle Langhe e jus profumato al timo.",
    price: "€ 29.00",
    ingredients: ["Agnello nostrano", "Nocciole Piemonte IGP", "Jus di cottura al mirto"],
    pairing: "Gattinara DOCG"
  },
  {
    id: "sec-5",
    name: "Pescatrice porchettata al Wagyu e purea di topinambur",
    category: "secondi",
    description: "Incontro tra terra e mare di eccezionale contrasto: trancio di coda di rospo avvolto in sottilissimo velo di manzo Wagyu aromatizzato alla porchetta con finocchietto selvatico.",
    price: "€ 30.00",
    ingredients: ["Rana pescatrice fresca", "Wagyu", "Finocchietto", "Topinambur"],
    isSpecialty: true,
    pairing: "Chardonnay Riserva Alto Adige"
  },
  {
    id: "sec-6",
    name: "Pescato del giorno all'isolana con datterini, capperi e patate",
    category: "secondi",
    description: "Selezione quotidiana di pesce nobile (branzino selvaggio, orata o rombo chiodato) al forno con pomodorini di Pachino, olive taggiasche e crostoni di patate novelle.",
    price: "€ 28.00",
    ingredients: ["Pesce nobile da pesca sostenibile", "Datterini", "Origano di Pantelleria", "Patate"],
    pairing: "Franciacorta Brut Millesimato"
  },
  {
    id: "sec-7",
    name: "Secreto Iberico alle erbe fini con scarola stufata, pinoli ed uvetta",
    category: "secondi",
    description: "Taglio nobilissimo di maialino iberico Bellota cotto a punto rosa, servito su scarola ripassata all'agro con pinoli di Pisa e uvetta sultanina.",
    price: "€ 27.00",
    ingredients: ["Secreto Iberico Bellota", "Scarola", "Pinoli tostati", "Uvetta"],
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/11/Secreto-iberico.jpg"
  },

  // Extra Menù & Grandi Specialità
  {
    id: "ext-1",
    name: "Foie Gras d'Anatra con pan brioche e confettura di cipolle rosse",
    category: "extra",
    description: "Pâté di Foie Gras della migliore selezione d'Oltralpe, servito con confettura caramellata di cipolle e pan brioche caldo fragrante.",
    price: "€ 26.00",
    ingredients: ["Foie Gras d'Anatra", "Pan brioche", "Confettura di cipolle"],
    isSpecialty: true,
    pairing: "Sauternes Premier Cru o Passito di Pantelleria"
  },
  {
    id: "ext-2",
    name: "Il riso Carnaroli con scaloppa di Foie Gras e glassa al porto",
    category: "extra",
    description: "Icona gourmet della Tana d'Orso: Carnaroli mantecato al Parmigiano 36 mesi con scaloppa di Foie Gras spadellata espressa e filo di riduzione al Porto tawny.",
    price: "€ 29.00",
    ingredients: ["Riso Carnaroli", "Scaloppa di Foie Gras", "Porto Vintage", "Parmigiano 36 mesi"],
    isSpecialty: true,
    pairing: "Barolo Chinato o Champagne Vintage"
  },
  {
    id: "ext-3",
    name: "Scaloppa di Foie Gras al Sauternes con pere candite",
    category: "extra",
    description: "Foie Gras al salto in padella di ferro sfumato al Sauternes, servito su fetta di pera al vapore speziata alla cannella.",
    price: "€ 27.00",
    ingredients: ["Foie Gras", "Sauternes", "Pere Williams", "Cannella"],
    pairing: "Château d'Yquem / Sauternes DOC"
  },
  {
    id: "ext-4",
    name: "Filetto di manzo al Foie Gras con tartufo nero e demi-glace",
    category: "extra",
    description: "Tournedos alla Rossini rivisitato: cuore di filetto piemontese, scaloppa di Foie Gras scottata, scaglie di tartufo nero e demi-glace al Madeira.",
    price: "€ 36.00",
    ingredients: ["Filetto di Fassona", "Foie Gras", "Tartufo nero", "Demi-glace al Madeira"],
    isSpecialty: true,
    pairing: "Amarone della Valpolicella Classico DOCG"
  },
  {
    id: "ext-5",
    name: "Fiorentina di Fassona piemontese alla brace (all'etto)",
    category: "extra",
    description: "Costata con filetto frollata per almeno 45 giorni a temperatura controllata, cotta alla brace e servita su ghisa fumante con contorni di stagione.",
    price: "€ 7.50 / hg",
    ingredients: ["Fassona Piemontese certificata", "Frollatura Dry Aged 45gg"],
    isSpecialty: true,
    pairing: "Brunello di Montalcino DOCG"
  },
  {
    id: "ext-6",
    name: "Selezione di formaggi delle valli con mostarde e miele d'acacia",
    category: "extra",
    description: "Piatto di degustazione con Formaggella del Luinese DOP, Bitto stagionato, Gorgonzola naturale al cucchiaio, Bagòss e caprini freschi con mostarda di Cremona.",
    price: "€ 20.00",
    ingredients: ["Formaggella del Luinese DOP", "Bitto Storico", "Gorgonzola Piccante", "Mostarde"],
    pairing: "Sforzato della Valtellina DOCG"
  },
  {
    id: "ext-7",
    name: "Lumache alla bourguignon con burro all'aglio dolce e prezzemolo",
    category: "extra",
    description: "Lumache biologiche di terra preparate nel loro guscio secondo la ricetta classica con burro montato alla parigina, aglio e scalogno.",
    price: "€ 19.00",
    ingredients: ["Lumache Helix Pomatia", "Burro della Valtellina", "Scalogno", "Prezzemolo fresco"],
    pairing: "Chablis AOC"
  },

  // Dessert
  {
    id: "des-1",
    name: "Torta caprese calda con crema chantilly e gelato alla vaniglia bourbon",
    category: "dessert",
    description: "Torta morbida di cioccolato fondente e farina di mandorle servita tiepida, con quenelle di gelato artigianale e chantilly fresca.",
    price: "€ 10.00",
    ingredients: ["Cioccolato 70%", "Mandorle di Sicilia", "Gelato alla vaniglia Madagascar"],
    isSpecialty: true,
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/05/Caprese.jpg"
  },
  {
    id: "des-2",
    name: "Tiramisù contemporaneo della Tana d'Orso",
    category: "dessert",
    description: "Cremoso al mascarpone lodigiano, biscotto savoiardo bagnato al caffè moka arabica 100% e cialda croccante al cacao amaro Guanaja.",
    price: "€ 10.00",
    ingredients: ["Mascarpone artigianale", "Caffè Arabica", "Uova biologiche", "Cacao Guanaja"],
    pairing: "Moscato d'Asti DOCG"
  },
  {
    id: "des-3",
    name: "Millefoglie caramellata con crema pasticcera al limoncello di Mustonate",
    category: "dessert",
    description: "Sottili sfoglie al burro caramellate al forno intervallate da soffice crema al limone e coulis di lamponi freschi.",
    price: "€ 11.00",
    ingredients: ["Sfoglia caramellata", "Crema al limone", "Frutti di bosco"],
    pairing: "Passito di Pantelleria DOC"
  }
];

export const WINE_COLLECTION: WineItem[] = [
  {
    id: "wine-1",
    name: "Bellavista Vittorio Moretti Franciacorta Riserva",
    region: "Lombardia, Franciacorta",
    type: "bollicine",
    vintage: "2016",
    bottlePrice: "€ 145.00",
    glassPrice: "€ 22.00",
    notes: "Grande struttura, perlage finissimo, sentori di frutta secca candita e crosta di pane tostata."
  },
  {
    id: "wine-2",
    name: "Ca' del Bosco Cuvée Annamaria Clementi",
    region: "Lombardia, Franciacorta",
    type: "bollicine",
    vintage: "2015",
    bottlePrice: "€ 170.00",
    notes: "Eleganza regale, mineralità scolpita, note di nocciola e vaniglia con freschezza interminabile."
  },
  {
    id: "wine-3",
    name: "Gaja Barbaresco DOCG",
    region: "Piemonte, Langhe",
    type: "rosso",
    vintage: "2019",
    bottlePrice: "€ 240.00",
    notes: "Icona mondiale del Nebbiolo. Tannini vellutati, violetta, grafite, sottobosco e spezie orientali."
  },
  {
    id: "wine-4",
    name: "Barolo Cannubi - Damilano",
    region: "Piemonte, Barolo",
    type: "rosso",
    vintage: "2018",
    bottlePrice: "€ 110.00",
    glassPrice: "€ 18.00",
    notes: "Profumo etereo di ciliegia marasca, cuoio nobile, tabacco dolce e finale persistente."
  },
  {
    id: "wine-5",
    name: "Sassella Stella Retica - Ar.Pe.Pe.",
    region: "Lombardia, Valtellina Superiore",
    type: "rosso",
    vintage: "2017",
    bottlePrice: "€ 78.00",
    glassPrice: "€ 14.00",
    notes: "Chiavennasca (Nebbiolo delle Alpi) in purezza, balsamico, roccioso, di rara finezza ed eleganza alpina."
  },
  {
    id: "wine-6",
    name: "Chablis Premier Cru Montée de Tonnerre - Domaine Billaud-Simon",
    region: "Francia, Borgogna",
    type: "bianco",
    vintage: "2021",
    bottlePrice: "€ 95.00",
    glassPrice: "€ 16.00",
    notes: "Puro Chardonnay su terreno kimmeridgiano, tagliente acidità agrumata, iodio e pietra focaia."
  },
  {
    id: "wine-7",
    name: "Château d'Yquem Sauternes 1er Cru Supérieur",
    region: "Francia, Bordeaux",
    type: "dolce",
    vintage: "2017",
    bottlePrice: "€ 380.00",
    glassPrice: "€ 35.00",
    notes: "Il re dei vini da meditazione. Albicocca secca, zafferano, miele di zagara e freschezza immortale."
  }
];

export const SHOWCASE_CHAPTERS = [
  {
    id: "chapter-cucina",
    number: "01",
    title: "La Cucina d'Autore & I Presidi Slow Food",
    subtitle: "RICERCA, TERRITORIO & SAPORI D'ECCELLENZA",
    category: "FILOSOFIA GASTRONOMICA",
    location: "Borgo di Mustonate, Varese",
    description: "Guidata dallo Chef Patron Francesco Testa, la proposta unisce la nobiltà delle materie prime lombarde e piemontesi alla tecnica contemporanea. Il Riso Carnaroli Acquerello e le carni di razza Fassona certificate La Granda sono custodi di biodiversità e gusto autentico.",
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2015/04/IMG_2701.jpg",
    highlight: "Presidi Slow Food & Carni Selezionate La Granda",
    tags: ["Riso Acquerello", "Fassona Piemontese", "Foie Gras", "Pesce Nobile"]
  },
  {
    id: "chapter-sale",
    number: "02",
    title: "Gli Ambienti & Il Borgo Storico",
    subtitle: "ATMOSFERE CALDE, ARCHITETTURE SECOLARI E NATURA",
    category: "SPAZI & OSPITALITÀ",
    location: "Due piani nobili e giardino panoramico",
    description: "Sviluppato su due livelli nel suggestivo borgo rurale settecentesco di Mustonate a pochi minuti dal Lago di Varese. Il piano superiore offre la sala principale con travi a vista e una saletta raccolta romantica; il piano inferiore si apre direttamente sulla corte e sul parco secolare.",
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/03/DSC_5708_09_10_11_12_tonemapped_R.jpg",
    highlight: "Camino in pietra, travi a vista e corte fiorita",
    tags: ["Sala Camino", "Saletta Privé", "Corte Esterna", "Giardino Panoramico"]
  },
  {
    id: "chapter-matrimoni",
    number: "03",
    title: "Matrimoni & Ricevimenti Esclusivi",
    subtitle: "UN SOLO RICEVIMENTO AL GIORNO PER LA MASSIMA PRIVACY",
    category: "EVENTI D'ECCEZIONE",
    location: "Sala ricevimenti & Corte all'aperto",
    description: "La nostra promessa fondamentale agli sposi è l'esclusività totale: accogliamo un solo matrimonio al giorno per garantire tranquillità, dedizione assoluta dello staff e l'uso completo degli spazi interni ed esterni della tenuta.",
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/03/IMG_2128.jpg",
    highlight: "Unico matrimonio al giorno, cucina espressa",
    tags: ["Un Solo Ricevimento / Giorno", "Corte Panoramica", "Wedding Planner In-House"]
  },
  {
    id: "chapter-cantina",
    number: "04",
    title: "La Cantina dei 250 Cru",
    subtitle: "DALLA FRANCIACORTA ALLE LANGHE, FINO AI GRANDI FRANCESI",
    category: "ENOTECA & SOMMELLERIE",
    location: "Custodita a temperatura e umidità controllate",
    description: "Una selezione curata con dedizione da oltre vent'anni: duecentocinquanta etichette che attraversano le massime espressioni vitivinicole della penisola e d'Oltralpe. Degustazioni personalizzate guidate per accompagnare ogni portata del menù.",
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/02/FullSizeRender_exp.jpg",
    highlight: "Oltre 250 etichette selezionate",
    tags: ["Grandi Formati", "Cru di Borgogna", "Barolo & Barbaresco", "Franciacorta Riserva"]
  }
];

export const DISCIPLINES = [
  {
    id: "antipasti",
    name: "Gli Antipasti",
    title: "L'apertura: fragranze di lago, terra e valli",
    description: "Dalla battuta di Fassona al coltello con confettura di cipolle rosse al Prosciutto Toscano con lo gnocco fritto bollente, fino al soufflé ai formaggi d'alpeggio con crema al Bitto e tartufo nero.",
    keyPoints: ["Fassona piemontese presidio Slow Food", "Gnocco fritto artigianale leggerissimo", "Bitto storico valtellinese e tartufo"],
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/04/Foto1.jpg",
    linkText: "Vedi gli Antipasti"
  },
  {
    id: "primi",
    name: "I Primi Piatti",
    title: "Il Risotto alla Milanese e le paste trafilate al bronzo",
    description: "Il leggendario Riso Acquerello invecchiato con zafferano puro e midollo di bue, i conchiglioni al coniglio grigio di Carmagnola e i paccheri di Gragnano mantecati al tartufo fresco.",
    keyPoints: ["Riso Acquerello invecchiato 1 anno", "Zafferano in pistilli e midollo rosolato", "Paste tirate a mano al bronzo"],
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/09/Crema-di-riso-Venere.jpg",
    linkText: "Vedi i Primi Piatti"
  },
  {
    id: "secondi",
    name: "I Secondi di Carne & Pesce",
    title: "La tradizione lombarda e i grandi tagli cotti al punto rosa",
    description: "La classica cotoletta Milanese con osso fritta nel burro chiarificato, la guancia di vitello brasata 18 ore al Sauvignon e la pescatrice porchettata al Wagyu d'autore.",
    keyPoints: ["Costoletta alla milanese autentica", "Cotture a bassa temperatura c.b.t.", "Pescato nobile fresco del giorno"],
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/11/Secreto-iberico.jpg",
    linkText: "Vedi i Secondi"
  },
  {
    id: "extra",
    name: "Specialità Foie Gras",
    title: "L'alta scuola francese incontra la maestria italiana",
    description: "Il celebre riso Carnaroli con scaloppa di Foie Gras al Porto, il filetto alla Rossini e la scaloppa sfumata al Sauternes con pere caramellate.",
    keyPoints: ["Migliore selezione di fegato grasso", "Accostamenti con passiti e grandi cru", "Tournedos alla Rossini con tartufo"],
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2015/04/IMG_2701.jpg",
    linkText: "Scopri le Specialità Extra"
  },
  {
    id: "cantina",
    name: "La Carta dei Vini",
    title: "Duecentocinquanta etichette tra storia e passione",
    description: "Una sinfonia di bollicine Franciacorta e Champagne, i grandi rossi di Nebbiolo delle Langhe e della Valtellina, bianchi minerali e passiti millesimati.",
    keyPoints: ["Oltre 250 referenze in cantina", "Conservazione climatica ottimale", "Abbinamenti al calice personalizzati"],
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/02/FullSizeRender_exp.jpg",
    linkText: "Consulta la Carta Vini"
  },
  {
    id: "matrimoni",
    name: "Matrimoni nel Borgo",
    title: "Unico matrimonio al giorno in un'oasi di pace",
    description: "Borgo di Mustonate offre una scenografia da sogno: corte fiorita per l'aperitivo, sala nobile climatizzata per il banchetto e parco privato per shooting fotografici.",
    keyPoints: ["Esclusività di un solo evento al giorno", "Capienza fino a 150 ospiti", "Cucina espressa e flessibilità oraria"],
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/03/IMG_2128.jpg",
    linkText: "Dettagli Matrimoni"
  },
  {
    id: "eventi",
    name: "Meeting & Raduni",
    title: "Sala polivalente multimediale e ampi parcheggi",
    description: "Ideale per convegni, cene di gala aziendali, riunioni post-congressuali e raduni automobilistici grazie a due ampi parcheggi riservati adiacenti alla struttura.",
    keyPoints: ["Impianto audio-video multimediale", "Configurazione conferenza o conviviale", "Due ampi parcheggi adiacenti"],
    image: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/03/IMG_1317_R.jpg",
    linkText: "Richiedi per la tua Azienda"
  }
];

export const TESTIMONIALS = [
  {
    id: "rev-1",
    author: "David",
    subtitle: "Critico & Ospite Internazionale",
    text: "Che dire. Più che altro inchinarsi davanti all'eccellenza del Ristorante La Tana d'Orso e all'ospitalità graditissima dello Chef Francesco Testa e della sua consorte Veronica. Impeccabili le prelibate pietanze ben armonizzate da raffinati vini che testimoniano una spiccata peculiarità della cantina chiamata ad assolvere degnamente la domanda volta ad incastonare i piatti con il nettare di Bacco. Il tutto si ammalia di una cornice immersa nel verde della natura e del silenzio per il godimento indisturbato del palato.",
    rating: 5,
    tag: "Inchino all'eccellenza"
  },
  {
    id: "rev-2",
    author: "Federica",
    subtitle: "Scrittrice & Ospite",
    text: "La grande ospitalità di Veronica e Francesco ha accompagnato i miei ospiti e me stessa in un mondo incantato: esperienza gustativa eccellente immersa in un luogo fuori dal tempo.",
    rating: 5,
    tag: "Un mondo incantato"
  },
  {
    id: "rev-3",
    author: "Matteo & Elena",
    subtitle: "Matrimonio Settembre 2026",
    text: "Aver scelto la Tana d'Orso per il nostro matrimonio è stata la decisione migliore. Sapere di essere gli unici sposi per l'intera giornata ha fatto sentire noi e le nostre famiglie coccolati in un'atmosfera magica.",
    rating: 5,
    tag: "Matrimonio Indimenticabile"
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Sala Camino e Travi d'Epoca",
    category: "sale",
    imageUrl: "https://www.ristorantetanadorso.it/wp-content/uploads/2015/04/DSC_5699_700_701_702_703_tonemapped_R_BANNER.jpg",
    caption: "L'atmosfera serale della sala nobile con travi in legno e camino"
  },
  {
    id: "gal-2",
    title: "La Cucina d'Autore",
    category: "cucina",
    imageUrl: "https://www.ristorantetanadorso.it/wp-content/uploads/2015/04/IMG_2701.jpg",
    caption: "Le creazioni dello Chef Francesco Testa tra tradizione e innovazione"
  },
  {
    id: "gal-3",
    title: "Secreto Iberico alle Erbe",
    category: "cucina",
    imageUrl: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/11/Secreto-iberico.jpg",
    caption: "Cotto al punto rosa con scarola stufata, pinoli ed uvetta"
  },
  {
    id: "gal-4",
    title: "Corte e Ricevimenti nel Borgo",
    category: "eventi",
    imageUrl: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/03/IMG_2128.jpg",
    caption: "Banchetto nuziale all'aperto nella corte del Borgo di Mustonate"
  },
  {
    id: "gal-5",
    title: "La Sala Storica con Travi a Vista",
    category: "sale",
    imageUrl: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/03/DSC_5708_09_10_11_12_tonemapped_R.jpg",
    caption: "Scorcio della sala superiore con illuminazione calda"
  },
  {
    id: "gal-6",
    title: "Dettaglio Mise en Place",
    category: "sale",
    imageUrl: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/03/IMG_4617_R.jpg",
    caption: "Cura minuziosa in ogni calice e cristallo"
  },
  {
    id: "gal-7",
    title: "Culaccia e Gnocco Fritto",
    category: "cucina",
    imageUrl: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/04/Foto1.jpg",
    caption: "Antipasto della tradizione con salumi emiliano-lombardi"
  },
  {
    id: "gal-8",
    title: "Saletta Privée Raccolta",
    category: "sale",
    imageUrl: "https://www.ristorantetanadorso.it/wp-content/gallery/galleria_ristorante/DSC_5774_5_6_7_8_Painterly-3_R.jpg",
    caption: "Atmosfera riservata a lume di candela per cene romantiche"
  },
  {
    id: "gal-9",
    title: "Sala Convegni e Meeting",
    category: "eventi",
    imageUrl: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/03/IMG_1317_R.jpg",
    caption: "Capienza fino a 150 persone per eventi aziendali e conferenze"
  },
  {
    id: "gal-10",
    title: "Torta Caprese con Chantilly",
    category: "cucina",
    imageUrl: "https://www.ristorantetanadorso.it/wp-content/uploads/2017/05/Caprese.jpg",
    caption: "Dessert tiepido al cioccolato e mandorle con gelato"
  },
  {
    id: "gal-11",
    title: "La Selezione Vini della Tana",
    category: "sale",
    imageUrl: "https://www.ristorantetanadorso.it/wp-content/gallery/galleria_ristorante/FullSizeRender-4_1080.jpg",
    caption: "Oltre 250 etichette custodite nella nostra cantina climatizzata"
  },
  {
    id: "gal-12",
    title: "Borgo di Mustonate al Crepuscolo",
    category: "borgo",
    imageUrl: "https://www.ristorantetanadorso.it/wp-content/gallery/galleria_ristorante/DSC_5699_700_701_702_703_tonemapped_R.jpg",
    caption: "La quiete della campagna varesina attorno alla tenuta"
  }
];
