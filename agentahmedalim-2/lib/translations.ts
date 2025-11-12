type Translation = {
    agentName: string;
    heroTitle: string;
    heroSubtitle: string;
    contactButton: string;
    aboutTitle: string;
    aboutParagraph1: string;
    aboutParagraph2: string;
    value1Title: string;
    value1Description: string;
    value2Title: string;
    value2Description: string;
    value3Title: string;
    value3Description: string;
    servicesTitle: string;
    servicesSubtitle: string;
    serviceResidential: string;
    serviceCommercial: string;
    serviceAgricultural: string;
    marketingTitle: string;
    marketingDescription: string;
    contactTitle: string;
    contactSubtitle: string;
    whatsappButton: string;
    copyright: string;
};

type Translations = {
    [key: string]: Translation;
};

export const translations: Translations = {
    ar: {
        agentName: "الوسيط العقاري أحمد بن علي عسيري",
        heroTitle: "شريكك الموثوق لفرصتك العقارية القادمة",
        heroSubtitle: "أساعدك في الوصول إلى أفضل الأراضي السكنية، التجارية، والزراعية بخبرة ميدانية واحترافية عالية.",
        contactButton: "تواصل معنا الآن",
        aboutTitle: "خبرة يمكنك الوثوق بها",
        aboutParagraph1: "بفضل خبرتي الميدانية الواسعة في السوق العقاري السعودي، أقدم لكم خدمات وساطة عقارية احترافية وموثوقة. أتمتع بشبكة تعاون قوية مع وسطاء مرخصين في مختلف مدن المملكة، مما يمكننا من توفير أفضل الفرص العقارية التي تلبي تطلعاتكم.",
        aboutParagraph2: "مهمتي هي تقديم تجربة وساطة متميزة، نضمن من خلالها تحقيق أهدافكم الاستثمارية والسكنية بكل سهولة ويسر، مع الالتزام التام بأعلى معايير الشفافية والمصداقية.",
        value1Title: "الشفافية والمصداقية",
        value1Description: "نلتزم بتقديم معلومات واضحة ودقيقة في جميع مراحل البيع والشراء لضمان حقوق عملائنا.",
        value2Title: "الاحترافية في التعامل",
        value2Description: "خبرة واسعة في إدارة الصفقات العقارية وتقديم استشارات متخصصة لتحقيق أفضل النتائج.",
        value3Title: "نتائج مضمونة",
        value3Description: "نسعى لتحقيق أهدافك العقارية من خلال شبكة علاقات واسعة وتسويق فعال ومدروس.",
        servicesTitle: "خدماتنا العقارية المتخصصة",
        servicesSubtitle: "نتخصص في وساطة بيع وشراء وتسويق جميع أنواع الأراضي لنلبي كافة احتياجاتكم الاستثمارية والسكنية.",
        serviceResidential: "أراضي سكنية",
        serviceCommercial: "أراضي تجارية",
        serviceAgricultural: "أراضي زراعية",
        marketingTitle: "تسويق احترافي ووصول واسع",
        marketingDescription: "نقوم بتسويق وبيع الأراضي عبر حساباتنا الرسمية على أبرز المنصات العقارية في المملكة، مما يضمن وصول عروضكم لأكبر شريحة من العملاء المحتملين وتحقيق أفضل الصفقات.",
        contactTitle: "هل أنت مستعد لبدء رحلتك العقارية؟",
        contactSubtitle: "تواصل معي اليوم للحصول على استشارة مجانية ومناقشة احتياجاتك العقارية. أنا هنا لمساعدتك.",
        whatsappButton: "واتساب",
        copyright: "جميع الحقوق محفوظة.",
    },
    en: {
        agentName: "Real Estate Agent Ahmed bin Ali Asiri",
        heroTitle: "Your Trusted Partner for Your Next Real Estate Opportunity",
        heroSubtitle: "I help you access the best residential, commercial, and agricultural lands with extensive field experience and high professionalism.",
        contactButton: "Contact Us Now",
        aboutTitle: "Experience You Can Trust",
        aboutParagraph1: "With my extensive field experience in the Saudi real estate market, I offer professional and reliable brokerage services. I have a strong network of collaboration with licensed brokers in various cities of the Kingdom, enabling us to provide the best real estate opportunities that meet your aspirations.",
        aboutParagraph2: "My mission is to provide an outstanding brokerage experience, ensuring you achieve your investment and residential goals with ease and convenience, while fully committing to the highest standards of transparency and credibility.",
        value1Title: "Transparency & Credibility",
        value1Description: "We are committed to providing clear and accurate information at all stages of buying and selling to protect our clients' rights.",
        value2Title: "Professionalism",
        value2Description: "Extensive experience in managing real estate deals and providing specialized consultations to achieve the best results.",
        value3Title: "Guaranteed Results",
        value3Description: "We strive to achieve your real estate goals through a wide network of contacts and effective, well-planned marketing.",
        servicesTitle: "Our Specialized Real Estate Services",
        servicesSubtitle: "We specialize in brokering the sale, purchase, and marketing of all types of land to meet all your investment and residential needs.",
        serviceResidential: "Residential Lands",
        serviceCommercial: "Commercial Lands",
        serviceAgricultural: "Agricultural Lands",
        marketingTitle: "Professional Marketing & Wide Reach",
        marketingDescription: "We market and sell lands through our official accounts on the most prominent real estate platforms in the Kingdom, ensuring your listings reach the largest segment of potential clients and achieve the best deals.",
        contactTitle: "Ready to Start Your Real Estate Journey?",
        contactSubtitle: "Contact me today for a free consultation to discuss your real estate needs. I am here to help you.",
        whatsappButton: "WhatsApp",
        copyright: "All rights reserved.",
    }
};
