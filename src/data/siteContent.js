import studentImage from "../assets/img/student.jpg";
import docsImage from "../assets/img/docs.jpg";
import scholarshipImage from "../assets/img/scholar1.jpg";
import trustImage from "../assets/img/trust.jpg";
import successImage from "../assets/img/success.jpg";
import logoImage from "../assets/img/studylinkhub-logo.png";
import emailIcon from "../assets/img/icons/envlop.svg";
import phoneIcon from "../assets/img/icons/call.svg";
import studentIcon from "../assets/img/icons/user.svg";
import programIcon from "../assets/img/icons/computer.svg";
import calendarIcon from "../assets/img/icons/calendar.svg";
import worldIcon from "../assets/img/icons/world.svg";
import searchIcon from "../assets/img/icons/search.svg";
import bookIcon from "../assets/img/icons/book.svg";
import heartIcon from "../assets/img/icons/love.svg";
import contactShapeOne from "../assets/img/home_5/contact_shape_1.svg";
import contactShapeTwo from "../assets/img/home_5/contact_shape_2.svg";

export const languages = {
  en: {
    code: "en",
    label: "English",
    pathPrefix: "",
    htmlLang: "en",
  },
  fr: {
    code: "fr",
    label: "Français",
    pathPrefix: "/fr",
    htmlLang: "fr",
  },
};

export const siteContent = {
  en: {
    meta: {
      title: "Study Link Hub | Study Abroad Support",
      description:
        "Study Link Hub helps students prepare applications, choose destinations, and study abroad with clear guidance from Tunisia.",
    },
    nav: {
      home: "Home",
      about: "About",
      scholarships: "Fields",
      services: "Services",
      destinations: "Destinations",
      process: "Process",
      faq: "F.A.Q",
      articles: "Blogs",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Knowledge is Power",
      title: "Study abroad with a clear application plan.",
      text:
        "Choose the right destination, prepare your documents, apply with confidence, and follow every next step with trusted guidance from Tunisia.",
      primaryCta: "Apply Now",
      secondaryCta: "Explore Destinations",
      stats: [
        ["7+", "study destinations"],
        ["1:1", "student guidance"],
        ["Accredited", "education support"],
      ],
    },
    proof: [
      "Choose a destination",
      "Prepare documents",
      "Follow deadlines",
      "Get clear next steps",
    ],
    sections: {
      personasTitle: "Choose the path that fits you",
      checkerTitle: "Check your study plan in 60 seconds",
      servicesTitle: "What you get with Study Link Hub",
      servicesText:
        "A practical plan for students and families who want fewer doubts, clearer documents, and realistic study options.",
      valuesTitle: "Our core values",
      valuesText:
        "We guide students with transparent advice, practical support, and respect for every academic path.",
      industriesEyebrow: "Browse industries",
      industriesTitle: "Explore our fields of study",
      industriesText:
        "Study Link Hub specializes in connecting students with scholarship opportunities across diverse industries.",
      industriesCta: "About Us",
      destinationsTitle: "Study destinations",
      promiseTitle: "A calm process for a big decision",
      promiseText:
        "The goal is not to rush students into a country. It is to match profile, budget, deadlines, and future plans before the application starts.",
      processTitle: "How the process works",
      resourcesTitle: "Document checklist hub",
      consultantsTitle: "Meet your guidance team",
      partnersTitle: "Destination network",
      faqTitle: "Questions students ask",
      articlesTitle: "Latest blogs",
      testimonialsTitle: "Students and families trust the process",
      contactTitle: "Send your request",
      newsletterTitle: "Get study abroad updates",
      ctaTitle: "Not sure where to start?",
      ctaText:
        "Send your profile and we will tell you the next realistic step for your study abroad project.",
    },
    services: [
      {
        title: "Destination matching",
        text: "Compare countries, programs, budgets, language needs, and admission conditions before choosing.",
      },
      {
        title: "Document checklist",
        text: "Know exactly which files to prepare so your application does not get blocked by missing requirements.",
      },
      {
        title: "Application follow-up",
        text: "Keep every next step visible, from submission and deadlines to student preparation after admission.",
      },
    ],
    personas: [
      {
        title: "For Students",
        text: "Explore campus life, courses, scholarships, independence, and realistic country choices.",
        points: ["Programs that fit your profile", "Student life and budget clarity", "A simple application roadmap"],
      },
      {
        title: "For Parents",
        text: "Understand safety, return on investment, university credibility, visa steps, and follow-up.",
        points: ["Transparent process and costs", "Document and visa guidance", "Clear communication at each step"],
      },
    ],
    successMetrics: [
      ["1:1", "profile evaluation"],
      ["7+", "destination options"],
      ["4-step", "application roadmap"],
      ["Fast", "next-step reply"],
    ],
    values: [
      {
        title: "Empowerment",
        text: "Helping students make informed decisions about their education and future.",
      },
      {
        title: "Excellence & Integrity",
        text: "Providing honest, reliable advice and expert guidance for every student.",
      },
      {
        title: "Inclusivity",
        text: "Supporting students from all backgrounds to access global education opportunities.",
      },
      {
        title: "Collaboration",
        text: "Working closely with students and partners to support successful outcomes.",
      },
    ],
    industries: [
      {
        title: "Engineering",
        icon: "engineering",
        text: "Mechanical, Electrical, Civil, and Software Engineering",
      },
      {
        title: "Business and Economics",
        icon: "business",
        text: "International Business, Finance, Marketing, and Management",
      },
      {
        title: "Medicine and Healthcare",
        icon: "health",
        text: "Medicine, Dentistry, Public Health, and Pharmaceutical Sciences",
      },
      {
        title: "Computer Science & IT",
        icon: "technology",
        text: "Data Science, AI, Cybersecurity, and Software Development",
      },
      {
        title: "Environmental Science & Sustainability",
        icon: "environment",
        text: "Renewable Energy, Environmental Engineering",
      },
      {
        title: "Social Sciences & International Relations",
        icon: "global",
        text: "Political Science, Sociology, Global Studies",
      },
      {
        title: "Arts & Humanities",
        icon: "arts",
        text: "Literature, History, Philosophy, and Cultural Studies",
      },
      {
        title: "Science & Technology",
        icon: "science",
        text: "Physics, Chemistry, Biology, and Biotechnology",
      },
      {
        title: "Languages & Linguistics",
        icon: "languages",
        text: "Chinese, German, and Translation Studies",
      },
    ],
    destinations: [
      {
        name: "China",
        flag: "🇨🇳",
        flagCode: "china",
        bestFor: "Scholarships + affordable study",
        text: "Affordable programs, strong universities, scholarship options, and a major global economy.",
      },
      {
        name: "Germany",
        flag: "🇩🇪",
        flagCode: "germany",
        bestFor: "Engineering + career paths",
        text: "Academic excellence, engineering and research strength, and career opportunities.",
      },
      {
        name: "Russia",
        flag: "🇷🇺",
        flagCode: "russia",
        bestFor: "Medicine + sciences",
        text: "Recognized programs in medicine, engineering, and sciences with competitive costs.",
      },
      {
        name: "Greece",
        flag: "🇬🇷",
        flagCode: "greece",
        bestFor: "European programs",
        text: "European study options with Mediterranean lifestyle, international programs, and accessible pathways.",
      },
      {
        name: "Romania",
        flag: "🇷🇴",
        flagCode: "romania",
        bestFor: "Medicine + EU access",
        text: "Popular European programs in medicine, engineering, business, and sciences with competitive fees.",
      },
      {
        name: "Morocco",
        flag: "🇲🇦",
        flagCode: "morocco",
        bestFor: "Nearby French pathways",
        text: "A nearby study option with French-speaking pathways, familiar regional culture, and growing universities.",
      },
      {
        name: "United Arab Emirates",
        flag: "🇦🇪",
        flagCode: "uae",
        bestFor: "Modern campuses",
        text: "Modern campuses, business networks, and international programs close to the region.",
      },
      {
        name: "Other destinations",
        flag: "🌍",
        flagCode: "world",
        bestFor: "Profile-based options",
        text: "We also help students compare additional countries based on profile, language, budget, and timing.",
      },
    ],
    process: [
      {
        title: "Profile evaluation",
        text: "We review your education level, budget, language profile, and target countries.",
      },
      {
        title: "University selection",
        text: "We shortlist realistic universities and programs based on your profile and deadlines.",
      },
      {
        title: "Application & SOP review",
        text: "We help organize documents, application steps, and motivation/SOP requirements.",
      },
      {
        title: "Visa & pre-departure briefing",
        text: "We explain the next steps after admission so you know what to prepare before travel.",
      },
    ],
    resources: [
      {
        title: "SOP writing tips",
        text: "A simple guide for writing a stronger motivation statement.",
      },
      {
        title: "Visa document checklist",
        text: "A practical list to help students prepare common visa files.",
      },
      {
        title: "Study budget planner",
        text: "Compare tuition, living costs, and backup expenses before choosing.",
      },
    ],
    consultants: [
      {
        name: "Study Link Hub Advisor",
        role: "China, Germany & Europe guidance",
        metric: "Profile-first counseling",
      },
      {
        name: "Admissions Support",
        role: "Documents, SOP & application review",
        metric: "Deadline-focused follow-up",
      },
      {
        name: "Student Preparation",
        role: "Visa steps & pre-departure briefing",
        metric: "Clear family communication",
      },
    ],
    partners: [
      "China",
      "Germany",
      "Russia",
      "Greece",
      "Romania",
      "Morocco",
      "United Arab Emirates",
    ],
    faq: [
      {
        q: "Can I apply if I am not sure which country to choose?",
        a: "Yes. The first step can be orientation only, so you understand which options match your profile.",
      },
      {
        q: "Do you replace the university decision?",
        a: "No. We guide and prepare the application, but final admission decisions belong to universities.",
      },
      {
        q: "Can parents contact you too?",
        a: "Yes. Families can send a request and ask for a clear explanation of the process.",
      },
    ],
    testimonials: [
      {
        name: "Amira B.",
        role: "Student applicant",
        quote: "I was confused between destinations. Study Link Hub helped me compare cost, documents, and deadlines before applying.",
      },
      {
        name: "Yassine M.",
        role: "Parent",
        quote: "The process became easier for our family because each document and next step was explained in simple language.",
      },
      {
        name: "Nour K.",
        role: "International student",
        quote: "The advice was realistic and based on my profile, budget, and deadlines, not just a generic country list.",
      },
    ],
    contact: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      destination: "Preferred destination",
      message: "Tell us about your study plan",
      submit: "Send request",
      success: "Your request was sent. We will contact you soon.",
      missingConfig:
        "Formspree is not configured yet. Add the contact and newsletter Formspree endpoints to send real emails.",
    },
    contactInfo: [
      {
        label: "Email",
        value: "contact@study-link-hub.com",
        href: "mailto:contact@study-link-hub.com",
      },
      {
        label: "Phone",
        value: "+216 70 877 053\n+216 26 253 080",
        href: "tel:+21670877053",
      },
      {
        label: "Address",
        value: "Immeuble Lys Bloc A, Rue de la Bourse, Lac 2, Tunis, Tunisia",
        href: "https://www.google.com/maps/search/Lac+2+Tunis+Tunisia",
      },
    ],
    newsletter: {
      email: "Email address",
      submit: "Subscribe",
      text: "Get short updates about destinations, documents, deadlines, and student tips.",
      success: "You are subscribed.",
    },
    footer: {
      text: "Study Link Hub helps students and families make clearer study abroad decisions from Tunisia.",
      copyright: "All rights reserved.",
    },
  },
  fr: {
    meta: {
      title: "Study Link Hub | Accompagnement études à l'étranger",
      description:
        "Study Link Hub accompagne les étudiants dans le choix de destination, la préparation des dossiers et les démarches pour étudier à l'étranger.",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      scholarships: "Domaines",
      services: "Services",
      destinations: "Destinations",
      process: "Étapes",
      faq: "F.A.Q",
      articles: "Blogs",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Knowledge is Power",
      title: "Étudiez à l'étranger avec un plan clair.",
      text:
        "Choisissez la bonne destination, préparez vos documents, candidatez avec confiance et suivez chaque étape avec un accompagnement fiable depuis la Tunisie.",
      primaryCta: "Postuler maintenant",
      secondaryCta: "Explorer les destinations",
      stats: [
        ["7+", "destinations"],
        ["1:1", "accompagnement"],
        ["Accrédité", "support étudiant"],
      ],
    },
    proof: [
      "Choisir une destination",
      "Préparer les documents",
      "Suivre les délais",
      "Comprendre la suite",
    ],
    sections: {
      personasTitle: "Choisissez le parcours qui vous correspond",
      checkerTitle: "Vérifiez votre projet en 60 secondes",
      servicesTitle: "Ce que vous obtenez avec Study Link Hub",
      servicesText:
        "Un plan pratique pour les étudiants et familles qui veulent moins de doutes, des documents clairs et des options réalistes.",
      valuesTitle: "Nos valeurs",
      valuesText:
        "Nous accompagnons les étudiants avec transparence, soutien pratique et respect de chaque parcours.",
      industriesEyebrow: "Domaines",
      industriesTitle: "Explorez nos domaines d'études",
      industriesText:
        "Study Link Hub aide les étudiants à trouver des opportunités de bourses dans plusieurs domaines.",
      industriesCta: "À propos",
      destinationsTitle: "Destinations d'études",
      promiseTitle: "Un processus clair pour une grande décision",
      promiseText:
        "L'objectif n'est pas de pousser l'étudiant vers un pays. Il faut d'abord aligner profil, budget, délais et projet futur.",
      processTitle: "Comment ça se passe",
      resourcesTitle: "Hub checklists documents",
      consultantsTitle: "Votre équipe d'accompagnement",
      partnersTitle: "Réseau de destinations",
      faqTitle: "Questions fréquentes",
      articlesTitle: "Blogs récents",
      testimonialsTitle: "Les étudiants et familles font confiance au processus",
      contactTitle: "Envoyer une demande",
      newsletterTitle: "Recevoir les actualités",
      ctaTitle: "Vous ne savez pas par où commencer ?",
      ctaText:
        "Envoyez votre profil et nous vous indiquerons la prochaine étape réaliste pour votre projet d'études.",
    },
    services: [
      {
        title: "Choix de destination",
        text: "Comparez pays, programmes, budgets, langue et conditions d'admission avant de choisir.",
      },
      {
        title: "Checklist documents",
        text: "Sachez exactement quels fichiers préparer pour éviter les blocages et les documents manquants.",
      },
      {
        title: "Suivi de candidature",
        text: "Gardez chaque étape visible, du dépôt et des délais jusqu'à la préparation après admission.",
      },
    ],
    personas: [
      {
        title: "Pour les étudiants",
        text: "Explorez la vie étudiante, les cours, les bourses, l'indépendance et les choix de pays réalistes.",
        points: ["Programmes adaptés au profil", "Budget et vie étudiante plus clairs", "Feuille de route simple"],
      },
      {
        title: "Pour les parents",
        text: "Comprenez la sécurité, le retour sur investissement, la crédibilité des universités, le visa et le suivi.",
        points: ["Processus et coûts transparents", "Documents et visa expliqués", "Communication claire à chaque étape"],
      },
    ],
    successMetrics: [
      ["1:1", "évaluation du profil"],
      ["7+", "options de destination"],
      ["4 étapes", "feuille de route"],
      ["Rapide", "prochaine étape"],
    ],
    values: [
      {
        title: "Empowerment",
        text: "Aider les étudiants à prendre des décisions éclairées pour leurs études et leur avenir.",
      },
      {
        title: "Excellence et intégrité",
        text: "Offrir des conseils honnêtes, fiables et un accompagnement expert.",
      },
      {
        title: "Inclusivité",
        text: "Soutenir les étudiants de tous les profils dans l'accès aux opportunités internationales.",
      },
      {
        title: "Collaboration",
        text: "Travailler avec les étudiants et partenaires pour favoriser la réussite.",
      },
    ],
    industries: [
      {
        title: "Ingénierie",
        icon: "engineering",
        text: "Génie mécanique, électrique, civil et logiciel",
      },
      {
        title: "Business et économie",
        icon: "business",
        text: "Commerce international, finance, marketing et management",
      },
      {
        title: "Médecine et santé",
        icon: "health",
        text: "Médecine, dentisterie, santé publique et sciences pharmaceutiques",
      },
      {
        title: "Informatique et IT",
        icon: "technology",
        text: "Data science, IA, cybersécurité et développement logiciel",
      },
      {
        title: "Environnement et durabilité",
        icon: "environment",
        text: "Énergies renouvelables et ingénierie environnementale",
      },
      {
        title: "Sciences sociales et relations internationales",
        icon: "global",
        text: "Science politique, sociologie et études globales",
      },
      {
        title: "Arts et humanités",
        icon: "arts",
        text: "Littérature, histoire, philosophie et études culturelles",
      },
      {
        title: "Sciences et technologie",
        icon: "science",
        text: "Physique, chimie, biologie et biotechnologie",
      },
      {
        title: "Langues et linguistique",
        icon: "languages",
        text: "Chinois, allemand et traduction",
      },
    ],
    destinations: [
      {
        name: "Chine",
        flagCode: "china",
        bestFor: "Bourses + études accessibles",
        text: "Programmes accessibles, universités reconnues, bourses possibles et économie internationale.",
      },
      {
        name: "Allemagne",
        flagCode: "germany",
        bestFor: "Ingénierie + carrière",
        text: "Excellence académique, ingénierie, recherche et opportunités professionnelles.",
      },
      {
        name: "Russie",
        flagCode: "russia",
        bestFor: "Médecine + sciences",
        text: "Formations reconnues en médecine, ingénierie et sciences avec des coûts compétitifs.",
      },
      {
        name: "Grèce",
        flagCode: "greece",
        bestFor: "Programmes européens",
        text: "Options d'études en Europe, cadre méditerranéen, programmes internationaux et parcours accessibles.",
      },
      {
        name: "Roumanie",
        flagCode: "romania",
        bestFor: "Médecine + accès UE",
        text: "Programmes européens populaires en médecine, ingénierie, business et sciences avec des frais compétitifs.",
      },
      {
        name: "Maroc",
        flagCode: "morocco",
        bestFor: "Parcours proches francophones",
        text: "Une destination proche avec des parcours francophones, une culture régionale familière et des universités en développement.",
      },
      {
        name: "Émirats arabes unis",
        flagCode: "uae",
        bestFor: "Campus modernes",
        text: "Campus modernes, réseaux business et programmes internationaux proches de la région.",
      },
      {
        name: "Autres destinations",
        flagCode: "world",
        bestFor: "Options selon profil",
        text: "Nous aidons aussi à comparer d'autres pays selon le profil, la langue, le budget et les délais.",
      },
    ],
    process: [
      {
        title: "Évaluation du profil",
        text: "Nous analysons votre niveau d'études, budget, langue et destinations cibles.",
      },
      {
        title: "Sélection universitaire",
        text: "Nous ciblons des universités et programmes réalistes selon votre profil et les délais.",
      },
      {
        title: "Candidature et SOP",
        text: "Nous aidons à organiser les documents, les étapes de candidature et les lettres de motivation.",
      },
      {
        title: "Visa et départ",
        text: "Nous expliquons les prochaines étapes après admission pour préparer le départ.",
      },
    ],
    resources: [
      {
        title: "Conseils SOP",
        text: "Un guide simple pour écrire une meilleure lettre de motivation.",
      },
      {
        title: "Checklist visa",
        text: "Une liste pratique pour préparer les documents de visa fréquents.",
      },
      {
        title: "Planificateur budget",
        text: "Comparez frais d'études, coût de vie et dépenses de secours.",
      },
    ],
    consultants: [
      {
        name: "Conseiller Study Link Hub",
        role: "Accompagnement Chine, Allemagne et Europe",
        metric: "Conseil basé sur le profil",
      },
      {
        name: "Support admissions",
        role: "Documents, SOP et candidature",
        metric: "Suivi orienté délais",
      },
      {
        name: "Préparation étudiant",
        role: "Visa et briefing avant départ",
        metric: "Communication claire avec la famille",
      },
    ],
    partners: [
      "Chine",
      "Allemagne",
      "Russie",
      "Grèce",
      "Roumanie",
      "Maroc",
      "Émirats arabes unis",
    ],
    faq: [
      {
        q: "Puis-je demander de l'aide si je ne sais pas quel pays choisir ?",
        a: "Oui. La première étape peut être seulement l'orientation afin de comprendre les options adaptées.",
      },
      {
        q: "Est-ce que vous décidez à la place de l'université ?",
        a: "Non. Nous préparons et suivons le dossier, mais la décision finale appartient aux universités.",
      },
      {
        q: "Les parents peuvent-ils vous contacter ?",
        a: "Oui. Les familles peuvent envoyer une demande pour comprendre clairement le processus.",
      },
    ],
    testimonials: [
      {
        name: "Amira B.",
        role: "Étudiante candidate",
        quote: "J'hésitais entre plusieurs destinations. Study Link Hub m'a aidée à comparer budget, documents et délais.",
      },
      {
        name: "Yassine M.",
        role: "Parent",
        quote: "Le processus est devenu plus simple pour notre famille car chaque document et chaque étape étaient expliqués clairement.",
      },
      {
        name: "Nour K.",
        role: "Étudiante internationale",
        quote: "Les conseils étaient réalistes selon mon profil, mon budget et les délais, pas une simple liste de pays.",
      },
    ],
    contact: {
      name: "Nom complet",
      email: "Email",
      phone: "Téléphone",
      destination: "Destination souhaitée",
      message: "Parlez-nous de votre projet",
      submit: "Envoyer la demande",
      success: "Votre demande a été envoyée. Nous vous contacterons bientôt.",
      missingConfig:
        "Formspree n'est pas encore configuré. Ajoutez les endpoints Formspree contact et newsletter pour envoyer de vrais emails.",
    },
    contactInfo: [
      {
        label: "Email",
        value: "contact@study-link-hub.com",
        href: "mailto:contact@study-link-hub.com",
      },
      {
        label: "Téléphone",
        value: "+216 70 877 053\n+216 26 253 080",
        href: "tel:+21670877053",
      },
      {
        label: "Adresse",
        value: "Immeuble Lys Bloc A, Rue de la Bourse, Lac 2, Tunis, Tunisie",
        href: "https://www.google.com/maps/search/Lac+2+Tunis+Tunisia",
      },
    ],
    newsletter: {
      email: "Adresse email",
      submit: "S'inscrire",
      text: "Recevez des informations courtes sur les destinations, documents, délais et conseils étudiants.",
      success: "Votre inscription est enregistrée.",
    },
    footer: {
      text: "Study Link Hub aide les étudiants et familles à prendre des décisions plus claires pour étudier à l'étranger depuis la Tunisie.",
      copyright: "Tous droits réservés.",
    },
  },
};

export const articleImages = {
  student: studentImage,
  docs: docsImage,
  scholarship: scholarshipImage,
  trust: trustImage,
  success: successImage,
  logo: logoImage,
  icons: {
    email: emailIcon,
    phone: phoneIcon,
    student: studentIcon,
    program: programIcon,
    calendar: calendarIcon,
    world: worldIcon,
    search: searchIcon,
    book: bookIcon,
    heart: heartIcon,
  },
  shapes: {
    contactOne: contactShapeOne,
    contactTwo: contactShapeTwo,
  },
};

export const articles = {
  en: [
    {
      slug: "choose-study-destination",
      title: "How to choose the right study abroad destination",
      excerpt:
        "A practical way to compare country, program, budget, admission conditions, and future opportunities.",
      image: studentImage,
      category: "Orientation",
      date: "2026-07-06",
      content: [
        "Choosing a study destination should start with your academic profile, your budget, and the kind of career you want after graduation.",
        "Do not compare countries only by popularity. Compare tuition, living costs, language, admission documents, visa timing, and post-study options.",
        "A good destination is one where your program, budget, and long-term goals can work together.",
      ],
    },
    {
      slug: "documents-for-study-abroad",
      title: "Documents students should prepare before applying",
      excerpt:
        "The basic documents most students should organize early to avoid delays during application season.",
      image: docsImage,
      category: "Documents",
      date: "2026-07-06",
      content: [
        "Most applications need academic transcripts, diploma copies, passport, photos, language proof when required, and sometimes a motivation letter.",
        "Some universities ask for translated or certified documents, so students should not wait until the last week.",
        "A simple checklist can prevent many avoidable delays.",
      ],
    },
    {
      slug: "scholarship-application-tips",
      title: "Scholarship application tips for international students",
      excerpt:
        "How to approach scholarships with realistic expectations and stronger preparation.",
      image: scholarshipImage,
      category: "Scholarships",
      date: "2026-07-06",
      content: [
        "Scholarships are competitive, so students should prepare early and understand each program's criteria.",
        "Strong academic records help, but clear motivation, complete documents, and deadlines matter too.",
        "Apply to more than one realistic option and keep a backup plan.",
      ],
    },
  ],
  fr: [
    {
      slug: "choisir-destination-etudes",
      title: "Comment choisir la bonne destination d'études",
      excerpt:
        "Une méthode simple pour comparer pays, programme, budget, conditions d'admission et opportunités.",
      image: studentImage,
      category: "Orientation",
      date: "2026-07-06",
      content: [
        "Le choix d'une destination doit commencer par votre profil académique, votre budget et vos objectifs après les études.",
        "Ne comparez pas les pays uniquement par popularité. Regardez les frais, le coût de vie, la langue, les documents, le visa et les options après diplôme.",
        "Une bonne destination est celle où le programme, le budget et le projet professionnel peuvent fonctionner ensemble.",
      ],
    },
    {
      slug: "documents-etudes-etranger",
      title: "Documents à préparer avant une candidature",
      excerpt:
        "Les documents de base à organiser tôt pour éviter les retards pendant la période de candidature.",
      image: docsImage,
      category: "Documents",
      date: "2026-07-06",
      content: [
        "La plupart des candidatures demandent relevés de notes, diplômes, passeport, photos, preuve de langue si nécessaire et parfois une lettre de motivation.",
        "Certaines universités demandent des traductions ou certifications. Il vaut mieux préparer cela tôt.",
        "Une checklist claire évite beaucoup de retards.",
      ],
    },
    {
      slug: "conseils-bourses-etudiants",
      title: "Conseils pour demander une bourse d'études",
      excerpt:
        "Comment aborder les bourses avec des attentes réalistes et une meilleure préparation.",
      image: scholarshipImage,
      category: "Bourses",
      date: "2026-07-06",
      content: [
        "Les bourses sont compétitives. Il faut préparer le dossier tôt et comprendre les critères de chaque programme.",
        "Les résultats académiques comptent, mais la motivation, les documents complets et les délais sont aussi importants.",
        "Ciblez plusieurs options réalistes et gardez un plan alternatif.",
      ],
    },
  ],
};
