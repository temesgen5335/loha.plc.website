export const locales = ["en", "am", "om"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  am: "አማርኛ",
  om: "Afaan Oromoo",
};

const en = {
  meta: {
    title:
      "LOHA Advertising PLC — Printing, Advertising, Water Delivery & Building Blocks",
    description:
      "LOHA Advertising PLC offers professional printing and advertising services (t-shirts, banners, LED signs), clean well water delivery by truck, and quality building blocks for construction.",
  },
  nav: {
    services: "Services",
    contact: "Contact",
    cta: "Get Pricing",
  },
  hero: {
    badge: "Printing · Advertising · Water Delivery · Building Blocks",
    h1a: "Your brand. Your build.",
    h1b: "One trusted partner.",
    p: "LOHA Advertising PLC delivers professional printing and signage, clean well water by truck, and quality building blocks — helping businesses and builders get more done with one reliable supplier.",
    ctaPrimary: "Get Pricing",
    ctaSecondary: "Explore Services",
  },
  services: {
    eyebrow: "What we do",
    h2: "Three lines of business, one standard of quality",
    request: "Request this service →",
    pillars: [
      {
        title: "Printing & Advertising",
        desc: "Full-service branding and promotional printing — from a single t-shirt to a complete company identity package.",
        points: [
          "T-shirts, cups, caps & banners",
          "Stickers, cards, posters & flyers",
          "Certificates, albums & magazines",
          "Office tags, labels & LED signs",
        ],
      },
      {
        title: "Water Delivery by Truck",
        desc: "Clean water drawn from our own well and delivered to your site, business or home by truck — reliably and on schedule.",
        points: [
          "Well-sourced water",
          "Truck delivery to your location",
          "Construction sites & businesses",
          "Flexible scheduling",
        ],
      },
      {
        title: "Building Blocks",
        desc: "Quality building blocks produced for construction projects of every scale, from residential homes to commercial builds.",
        points: [
          "Consistent quality production",
          "Bulk orders for contractors",
          "Competitive pricing",
          "Delivery available",
        ],
      },
    ],
  },
  printing: {
    eyebrow: "Printing & signage",
    h2: "Everything your brand needs to be seen",
    p: "From promotional merchandise to bright LED storefront signs, we handle design, production and finishing under one roof.",
    items: [
      { name: "T-Shirt Printing", desc: "Custom designs, logos and event shirts in any quantity." },
      { name: "Cups & Mugs", desc: "Branded mugs for offices, promotions and gifts." },
      { name: "Caps & Hats", desc: "Embroidered and printed caps for teams and campaigns." },
      { name: "Banners", desc: "Indoor and outdoor banners in all sizes, vivid and durable." },
      { name: "Certificates", desc: "Professional certificates for training, awards and events." },
      { name: "Albums", desc: "Photo albums and presentation books, printed and bound." },
      { name: "Stickers", desc: "Custom stickers and decals for branding, packaging and promotions." },
      { name: "Invitation Cards", desc: "Elegant cards for weddings, graduations and special occasions." },
      { name: "Posters & Flyers", desc: "Eye-catching posters and flyers for events and promotions." },
      { name: "Magazines", desc: "Graduation magazines, yearbooks and publications, designed and printed." },
      { name: "Office Tags & Labels", desc: "Name tags, door signs, asset labels and stickers." },
      { name: "LED Signs", desc: "Bright LED signage for offices, companies and shops." },
    ],
  },
  why: {
    eyebrow: "Why LOHA",
    h2: "A partner that shows up — for your brand and your site",
    p: "Whether you are launching a business, running a campaign or building a home, LOHA brings the same commitment: quality materials, honest pricing and on-time delivery.",
    call: "Call Us Now",
    features: [
      { t: "One-stop supplier", d: "Printing, signage, water and blocks from a single, accountable partner." },
      { t: "Quality first", d: "Durable prints, bright signage and consistent block production." },
      { t: "On-time delivery", d: "Truck delivery for water and blocks, scheduled around your project." },
      { t: "Fair pricing", d: "Competitive rates for individuals, businesses and bulk contractor orders." },
    ],
  },
  contact: {
    eyebrow: "Contact us",
    h2: "Let's get your project moving",
    p: "Call, message us on WhatsApp, or send a quote request — we respond quickly with pricing and timelines.",
    telephone: "Telephone",
    mobile: "Mobile",
    email: "Email",
    whatsapp: "WhatsApp",
  },
  form: {
    heading: "Request for Service",
    sub: "Tell us what you need and we'll get back to you.",
    name: "Your name",
    namePh: "Full name",
    phone: "Phone number",
    phonePh: "+251 9…",
    need: "What do you need?",
    message: "Tell us about your project",
    messagePh: "Quantity, sizes, deadline, delivery location…",
    submit: "Send Service Request",
    note: "Opens your email app addressed to loha.advertsing9247@gmail.com — or call us directly.",
    services: [
      "Printing (t-shirts, cups, caps, banners…)",
      "Cards, Posters, Flyers & Magazines",
      "LED Signs",
      "Office Tags & Labels",
      "Water Delivery by Truck",
      "Building Blocks",
      "Other",
    ],
  },
  footer: {
    rights: "LOHA Advertising PLC. All rights reserved.",
    tagline: "Printing · Advertising · Water Delivery · Building Blocks",
  },
};

export type Dictionary = typeof en;

const am: Dictionary = {
  meta: {
    title: "ሎሃ አድቨርታይዚንግ ኃ.የተ.የግ.ማ — ህትመት፣ ማስታወቂያ፣ የውሃ አቅርቦትና የግንባታ ብሎኬት",
    description:
      "ሎሃ አድቨርታይዚንግ ኃ.የተ.የግ.ማ ሙያዊ የህትመትና የማስታወቂያ አገልግሎት (ቲሸርት፣ ባነር፣ LED ምልክቶች)፣ ንጹህ የጉድጓድ ውሃ በመኪና እንዲሁም ጥራት ያለው የግንባታ ብሎኬት ያቀርባል።",
  },
  nav: {
    services: "አገልግሎቶች",
    contact: "አግኙን",
    cta: "ዋጋ ይጠይቁ",
  },
  hero: {
    badge: "ህትመት · ማስታወቂያ · የውሃ አቅርቦት · የግንባታ ብሎኬት",
    h1a: "የእርስዎ ብራንድ። የእርስዎ ግንባታ።",
    h1b: "አንድ ታማኝ አጋር።",
    p: "ሎሃ አድቨርታይዚንግ ኃ.የተ.የግ.ማ ሙያዊ የህትመትና የምልክት አገልግሎት፣ ከጉድጓድ የሚቀዳ ንጹህ ውሃ በመኪና እንዲሁም ጥራት ያለው የግንባታ ብሎኬት ያቀርባል — ንግድዎና ግንባታዎ በአንድ ታማኝ አቅራቢ የበለጠ እንዲሳካ።",
    ctaPrimary: "ዋጋ ይጠይቁ",
    ctaSecondary: "አገልግሎቶችን ይመልከቱ",
  },
  services: {
    eyebrow: "ምን እንሰራለን",
    h2: "ሶስት የስራ ዘርፎች፣ አንድ የጥራት ደረጃ",
    request: "ይህን አገልግሎት ይጠይቁ →",
    pillars: [
      {
        title: "ህትመትና ማስታወቂያ",
        desc: "ከአንድ ቲሸርት ጀምሮ እስከ ሙሉ የኩባንያ መለያ ጥቅል — ሁሉን አቀፍ የብራንዲንግና የማስተዋወቂያ ህትመት።",
        points: [
          "ቲሸርት፣ ኩባያ፣ ኮፍያና ባነር",
          "ስቲከር፣ ካርድ፣ ፖስተርና ፍላየር",
          "ሰርተፍኬት፣ አልበምና መጽሔት",
          "የቢሮ መለያዎች፣ ሌብሎችና LED ምልክቶች",
        ],
      },
      {
        title: "የውሃ አቅርቦት በመኪና",
        desc: "ከራሳችን ጉድጓድ የሚቀዳ ንጹህ ውሃ ወደ ግንባታ ቦታዎ፣ ድርጅትዎ ወይም ቤትዎ በመኪና በታማኝነትና በጊዜው ይደርሳል።",
        points: [
          "ከጉድጓድ የሚቀዳ ውሃ",
          "እስከ ቦታዎ ድረስ በመኪና",
          "ለግንባታ ቦታዎችና ድርጅቶች",
          "ተለዋዋጭ የመላኪያ መርሃ ግብር",
        ],
      },
      {
        title: "የግንባታ ብሎኬት",
        desc: "ከመኖሪያ ቤት እስከ ትልቅ የንግድ ግንባታ ለማንኛውም ፕሮጀክት ጥራት ያለው ብሎኬት እናመርታለን።",
        points: [
          "ወጥ የሆነ የምርት ጥራት",
          "ለስራ ተቋራጮች የጅምላ ትዕዛዝ",
          "ተወዳዳሪ ዋጋ",
          "የመላኪያ አገልግሎት አለ",
        ],
      },
    ],
  },
  printing: {
    eyebrow: "ህትመትና ምልክቶች",
    h2: "ብራንድዎ እንዲታይ የሚያስፈልገው ሁሉ",
    p: "ከማስተዋወቂያ እቃዎች እስከ ደማቅ LED ምልክቶች — ዲዛይን፣ ህትመትና አጨራረስ በአንድ ጣራ ስር እናከናውናለን።",
    items: [
      { name: "ቲሸርት ህትመት", desc: "በፍላጎትዎ የተነደፉ ዲዛይኖች፣ አርማዎችና የዝግጅት ቲሸርቶች በማንኛውም ብዛት።" },
      { name: "ኩባያና ማግ", desc: "ለቢሮ፣ ለማስተዋወቂያና ለስጦታ የታተሙ ኩባያዎች።" },
      { name: "ኮፍያ", desc: "ለቡድኖችና ለዘመቻዎች የታተሙና የተጠለፉ ኮፍያዎች።" },
      { name: "ባነር", desc: "ለውስጥና ለውጭ በማንኛውም መጠን ደማቅና ዘላቂ ባነሮች።" },
      { name: "ሰርተፍኬት", desc: "ለስልጠና፣ ለሽልማትና ለዝግጅቶች ሙያዊ ሰርተፍኬቶች።" },
      { name: "አልበም", desc: "የታተሙና የተጠረዙ የፎቶ አልበሞችና የማቅረቢያ መጽሐፍት።" },
      { name: "ስቲከር", desc: "ለብራንዲንግ፣ ለማሸጊያና ለማስተዋወቂያ በፍላጎትዎ የተዘጋጁ ስቲከሮች።" },
      { name: "የግብዣ ካርድ", desc: "ለሰርግ፣ ለምረቃና ለልዩ ዝግጅቶች የሚያምሩ ካርዶች።" },
      { name: "ፖስተርና ፍላየር", desc: "ለዝግጅቶችና ለማስተዋወቂያ ትኩረት የሚስቡ ፖስተሮችና ፍላየሮች።" },
      { name: "መጽሔት", desc: "የምረቃ መጽሔቶች፣ የዓመት መጽሐፍትና ህትመቶች — ተነድፈው ይታተማሉ።" },
      { name: "የቢሮ መለያና ሌብል", desc: "የስም መለያ፣ የበር ምልክት፣ የንብረት ሌብልና ስቲከር።" },
      { name: "LED ምልክቶች", desc: "ለቢሮ፣ ለኩባንያና ለሱቅ ደማቅ LED ምልክቶች።" },
    ],
  },
  why: {
    eyebrow: "ለምን ሎሃ",
    h2: "ለብራንድዎም ለግንባታዎም የማይለይዎ አጋር",
    p: "ንግድ ሲጀምሩ፣ ዘመቻ ሲያካሂዱ ወይም ቤት ሲገነቡ — ሎሃ ተመሳሳይ ቁርጠኝነት ይዞ ይመጣል፦ ጥራት ያለው ቁሳቁስ፣ ተገቢ ዋጋና በጊዜው ማድረስ።",
    call: "አሁን ይደውሉ",
    features: [
      { t: "ሁሉም በአንድ ቦታ", d: "ህትመት፣ ምልክት፣ ውሃና ብሎኬት ከአንድ ተጠያቂ አጋር።" },
      { t: "ጥራት ቅድሚያ", d: "ዘላቂ ህትመቶች፣ ደማቅ ምልክቶችና ወጥ የብሎኬት ምርት።" },
      { t: "በጊዜው ማድረስ", d: "የውሃና የብሎኬት መላኪያ በፕሮጀክትዎ መርሃ ግብር መሰረት።" },
      { t: "ተገቢ ዋጋ", d: "ለግለሰቦች፣ ለድርጅቶችና ለጅምላ ትዕዛዞች ተወዳዳሪ ዋጋ።" },
    ],
  },
  contact: {
    eyebrow: "አግኙን",
    h2: "ፕሮጀክትዎን እናስጀምር",
    p: "ይደውሉ፣ በዋትስአፕ መልዕክት ይላኩ ወይም የዋጋ ጥያቄ ይላኩ — በፍጥነት ከዋጋና ከጊዜ ሰሌዳ ጋር እንመልሳለን።",
    telephone: "ስልክ",
    mobile: "ሞባይል",
    email: "ኢሜይል",
    whatsapp: "ዋትስአፕ",
  },
  form: {
    heading: "የአገልግሎት ጥያቄ",
    sub: "ምን እንደሚፈልጉ ይንገሩን፣ እንመልስልዎታለን።",
    name: "ስምዎ",
    namePh: "ሙሉ ስም",
    phone: "ስልክ ቁጥር",
    phonePh: "+251 9…",
    need: "ምን ይፈልጋሉ?",
    message: "ስለ ፕሮጀክትዎ ይንገሩን",
    messagePh: "ብዛት፣ መጠን፣ የመጨረሻ ቀን፣ የመላኪያ ቦታ…",
    submit: "ጥያቄዎን ይላኩ",
    note: "ኢሜይል መተግበሪያዎ ወደ loha.advertsing9247@gmail.com ተዘጋጅቶ ይከፈታል — ወይም በቀጥታ ይደውሉልን።",
    services: [
      "ህትመት (ቲሸርት፣ ኩባያ፣ ኮፍያ፣ ባነር…)",
      "ካርድ፣ ፖስተር፣ ፍላየርና መጽሔት",
      "LED ምልክቶች",
      "የቢሮ መለያና ሌብል",
      "የውሃ አቅርቦት በመኪና",
      "የግንባታ ብሎኬት",
      "ሌላ",
    ],
  },
  footer: {
    rights: "ሎሃ አድቨርታይዚንግ ኃ.የተ.የግ.ማ። መብቱ በህግ የተጠበቀ ነው።",
    tagline: "ህትመት · ማስታወቂያ · የውሃ አቅርቦት · የግንባታ ብሎኬት",
  },
};

const om: Dictionary = {
  meta: {
    title:
      "LOHA Advertising PLC — Maxxansa, Beeksisa, Dhiyeessii Bishaanii fi Blokeetii Ijaarsaa",
    description:
      "LOHA Advertising PLC tajaajila maxxansaa fi beeksisaa ogummaa qabu (tishartii, baanarii, mallattoo LED), bishaan qulqulluu boollaa konkolaataan, fi blokeetii ijaarsaa qulqullina qabu ni dhiyeessa.",
  },
  nav: {
    services: "Tajaajiloota",
    contact: "Nu qunnamaa",
    cta: "Gatii gaafadhaa",
  },
  hero: {
    badge: "Maxxansa · Beeksisa · Dhiyeessii Bishaanii · Blokeetii Ijaarsaa",
    h1a: "Braandii kee. Ijaarsa kee.",
    h1b: "Michuu amanamaa tokko.",
    p: "LOHA Advertising PLC tajaajila maxxansaa fi mallattoo ogummaa qabu, bishaan qulqulluu boolla keenyaa konkolaataan, fi blokeetii ijaarsaa qulqullina qabu ni dhiyeessa — daldalaa fi ijaarsi kee dhiyeessaa amanamaa tokkoon akka milkaa'u.",
    ctaPrimary: "Gatii gaafadhaa",
    ctaSecondary: "Tajaajiloota ilaalaa",
  },
  services: {
    eyebrow: "Maal hojjenna",
    h2: "Damee hojii sadii, sadarkaa qulqullinaa tokko",
    request: "Tajaajila kana gaafadhaa →",
    pillars: [
      {
        title: "Maxxansaa fi Beeksisa",
        desc: "Tishartii tokko irraa hanga paakeejii eenyummaa dhaabbataa guutuutti — tajaajila braandii fi maxxansa beeksisaa guutuu.",
        points: [
          "Tishartii, kubbaayyaa, koofiyyaa fi baanarii",
          "Istiikarii, kaardii, poostaraa fi flaayerii",
          "Sartifikeetii, albamii fi barruulee",
          "Mallattoo waajjiraa, leebalii fi mallattoo LED",
        ],
      },
      {
        title: "Dhiyeessii Bishaanii Konkolaataan",
        desc: "Bishaan qulqulluu boolla keenya irraa waraabame gara iddoo ijaarsaa, dhaabbata ykn mana keetti konkolaataan amanamummaan fi yeroon ni dhiyaata.",
        points: [
          "Bishaan boolla irraa waraabame",
          "Konkolaataan hanga iddoo keetti",
          "Iddoowwan ijaarsaa fi dhaabbilee",
          "Sagantaa dhiyeessii mijataa",
        ],
      },
      {
        title: "Blokeetii Ijaarsaa",
        desc: "Mana jireenyaa irraa hanga ijaarsa daldalaa gurguddaatti pirojektii kamiifuu blokeetii qulqullina qabu ni oomishna.",
        points: [
          "Qulqullina oomishaa wal fakkaataa",
          "Ajaja jumlaa kontiraaktarootaaf",
          "Gatii dorgomaa",
          "Tajaajilli geejjibaa ni jira",
        ],
      },
    ],
  },
  printing: {
    eyebrow: "Maxxansaa fi mallattoo",
    h2: "Waan braandiin kee mul'achuuf barbaadu hunda",
    p: "Meeshaalee beeksisaa irraa hanga mallattoo LED ifaa suuqiitti — dizaayinii, oomishaa fi xumura bakka tokkotti ni raawwanna.",
    items: [
      { name: "Maxxansa Tishartii", desc: "Dizaayinii, asxaa fi tishartii sagantaa — baay'ina kamiinuu." },
      { name: "Kubbaayyaa fi Maagii", desc: "Kubbaayyaa braandii waajjiraaf, beeksisaaf fi kennaaf." },
      { name: "Koofiyyaa", desc: "Koofiyyaa maxxanfamee fi hodhame gareewwanii fi duulaaf." },
      { name: "Baanarii", desc: "Baanarii keessaa fi alaa hamma kamiinuu — ifaa fi cimaa." },
      { name: "Sartifikeetii", desc: "Sartifikeetii ogummaa leenjiif, badhaasaaf fi sagantaaleef." },
      { name: "Albamii", desc: "Albamii suuraa fi kitaabota dhiyeessii — maxxanfamee fi hidhame." },
      { name: "Istiikarii", desc: "Istiikarii braandiif, paakeejiif fi beeksisaaf qophaa'e." },
      { name: "Kaardii Affeerraa", desc: "Kaardii bareedaa cidhaaf, eebbaaf fi sagantaa addaaf." },
      { name: "Poostaraa fi Flaayerii", desc: "Poostaraa fi flaayerii ija hawwatu sagantaaf fi beeksisaaf." },
      { name: "Barruulee", desc: "Barruulee eebbaa, kitaabota waggaa fi maxxansaalee — dizaayinii fi maxxansa." },
      { name: "Mallattoo fi Leebalii Waajjiraa", desc: "Mallattoo maqaa, mallattoo balbalaa, leebalii qabeenyaa fi istiikarii." },
      { name: "Mallattoo LED", desc: "Mallattoo LED ifaa waajjiraaf, dhaabbataaf fi suuqiif." },
    ],
  },
  why: {
    eyebrow: "Maaliif LOHA",
    h2: "Michuu braandii keetiif fi ijaarsa keetiif si bira dhaabbatu",
    p: "Daldala yoo jalqabde, duula yoo geggeessite ykn mana yoo ijaarte — LOHA kutannoo wal fakkaataa qaba: meeshaa qulqullina qabu, gatii haqaa fi yeroon dhiyeessuu.",
    call: "Amma bilbilaa",
    features: [
      { t: "Dhiyeessaa waan hundaa", d: "Maxxansa, mallattoo, bishaanii fi blokeetii michuu itti gaafatamaa tokko irraa." },
      { t: "Qulqullinni dursa", d: "Maxxansa cimaa, mallattoo ifaa fi oomisha blokeetii wal fakkaataa." },
      { t: "Yeroon dhiyeessuu", d: "Geejjibni bishaanii fi blokeetii sagantaa pirojektii keetiin." },
      { t: "Gatii haqaa", d: "Gatii dorgomaa namoota dhuunfaaf, dhaabbileef fi ajaja jumlaaf." },
    ],
  },
  contact: {
    eyebrow: "Nu qunnamaa",
    h2: "Pirojektii kee haa kaasnu",
    p: "Bilbilaa, WhatsApp-iin ergaa nuu ergaa ykn gaaffii gatii ergaa — gatii fi sagantaa waliin dafnee deebisna.",
    telephone: "Bilbila",
    mobile: "Moobaayilii",
    email: "Imeelii",
    whatsapp: "WhatsApp",
  },
  form: {
    heading: "Gaaffii tajaajilaa",
    sub: "Waan barbaaddu nutti himi, deebii siif kennina.",
    name: "Maqaa kee",
    namePh: "Maqaa guutuu",
    phone: "Lakkoofsa bilbilaa",
    phonePh: "+251 9…",
    need: "Maal barbaadda?",
    message: "Waa'ee pirojektii keetii nutti himi",
    messagePh: "Baay'ina, hamma, guyyaa xumuraa, iddoo geejjibaa…",
    submit: "Gaaffii Ergi",
    note: "Appiin imeelii kee gara loha.advertsing9247@gmail.com qophaa'ee banama — ykn kallattiin nuu bilbilaa.",
    services: [
      "Maxxansa (tishartii, kubbaayyaa, koofiyyaa, baanarii…)",
      "Kaardii, Poostaraa, Flaayerii fi Barruulee",
      "Mallattoo LED",
      "Mallattoo fi Leebalii Waajjiraa",
      "Dhiyeessii Bishaanii Konkolaataan",
      "Blokeetii Ijaarsaa",
      "Kan biraa",
    ],
  },
  footer: {
    rights: "LOHA Advertising PLC. Mirgi hundi seeraan eegamaadha.",
    tagline: "Maxxansa · Beeksisa · Dhiyeessii Bishaanii · Blokeetii Ijaarsaa",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, am, om };
