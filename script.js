function togglePortfolio() {
  const panel = document.getElementById("portfolioPanel");
  panel.classList.toggle("active");
}

function abrirWhatsApp() {
  window.open(
    "https://wa.me/5215564847232?text=Hola%20quiero%20información%20para%20mi%20página",
    "_blank"
  );
}

const translations = {
  es: {
    navServices: "Servicios",
    navProcess: "Proceso",
    navBenefits: "Beneficios",
    navWork: "Nuestro trabajo",
    navContact: "Contacto",

    tagline: "Desarrollo web profesional",
    heroTitle: "Creamos páginas web modernas para marcas que quieren crecer",
    heroText: "En WEB-LTR diseñamos y desarrollamos sitios web funcionales, atractivos y adaptados a celular para emprendedores, marcas y negocios que quieren verse profesionales en internet.",

    quoteBtn: "Solicitar cotización",
    workBtn: "Ver proyectos",

    miniStat1: "Responsive",
    miniStat2: "Proyectos web",
    miniStat3: "Sitios bilingües",

    heroCardTitle: "Tu página puede incluir:",
    heroCardItem1: "Diseño moderno y responsive",
    heroCardItem2: "Landing page de ventas",
    heroCardItem3: "Catálogo o tienda en línea",
    heroCardItem4: "Botón de WhatsApp",
    heroCardItem5: "Optimización básica SEO",

    servicesTitle: "Nuestros servicios",
    servicesIntro: "Soluciones web pensadas para mostrar tu marca de forma profesional y ayudarte a vender más.",

    service1Title: "Landing Pages",
    service1Text: "Páginas enfocadas en convertir visitas en clientes, ideales para campañas, servicios y lanzamientos.",

    service2Title: "Páginas para negocios",
    service2Text: "Sitios web informativos para presentar tu marca, tus servicios, testimonios y datos de contacto.",

    service3Title: "Tiendas en línea",
    service3Text: "Diseño de e-commerce para vender productos de forma clara, profesional y accesible desde cualquier dispositivo.",

    service4Title: "Rediseño web",
    service4Text: "Mejoramos páginas existentes para que se vean más actuales, funcionen mejor y transmitan mayor confianza.",

    stat1: "Proyectos desarrollados",
    stat2: "Diseño responsive",
    stat3: "Presencia online",
    stat4: "Páginas bilingües",

    processTitle: "¿Cómo trabajamos?",

    process1Title: "Escuchamos tu idea",
    process1Text: "Conocemos tu negocio, tus objetivos y el estilo que buscas.",

    process2Title: "Diseñamos tu propuesta",
    process2Text: "Planeamos una página clara, atractiva y enfocada en resultados.",

    process3Title: "Desarrollamos tu sitio",
    process3Text: "Construimos una web funcional, adaptable y lista para publicar.",

    process4Title: "Lanzamos tu página",
    process4Text: "Te ayudamos a publicar tu sitio para que tu negocio tenga presencia online.",

    benefitsTitleStart: "¿Por qué elegir",

    benefit1Title: "Diseño profesional",
    benefit1Text: "Tu marca se verá moderna, confiable y bien presentada.",

    benefit2Title: "Adaptado a celular",
    benefit2Text: "Tu página funcionará correctamente en móvil, tablet y computadora.",

    benefit3Title: "Enfoque en ventas",
    benefit3Text: "Cada sección está pensada para ayudar a captar clientes.",

    benefit4Title: "Atención personalizada",
    benefit4Text: "Desarrollamos cada proyecto según las necesidades de tu negocio.",

    portfolioTitle: "Conoce nuestro trabajo",
    portfolioIntro: "Explora algunas páginas web desarrolladas por WEB-LTR.",
    portfolioBtn: "Ver proyectos",

    contactTitle: "Hablemos de tu proyecto",
    contactIntro: "Cuéntanos qué tipo de página necesitas y te ayudamos a llevar tu idea a internet.",

    namePlaceholder: "Tu nombre",
    emailPlaceholder: "Tu correo electrónico",
    businessPlaceholder: "Tu negocio o marca",
    messagePlaceholder: "Cuéntanos qué tipo de página web necesitas",

    sendBtn: "Enviar solicitud",

    footerText: "© 2026 WEB-LTR. Todos los derechos reservados."
  },

  en: {
    navServices: "Services",
    navProcess: "Process",
    navBenefits: "Benefits",
    navWork: "Our work",
    navContact: "Contact",

    tagline: "Professional web development",
    heroTitle: "We create modern websites for brands that want to grow",
    heroText: "At WEB-LTR, we design and develop functional, attractive, and mobile-friendly websites for entrepreneurs, brands, and businesses that want to look professional online.",

    quoteBtn: "Request a quote",
    workBtn: "View projects",

    miniStat1: "Responsive",
    miniStat2: "Web projects",
    miniStat3: "Bilingual sites",

    heroCardTitle: "Your website can include:",
    heroCardItem1: "Modern and responsive design",
    heroCardItem2: "Sales landing page",
    heroCardItem3: "Catalog or online store",
    heroCardItem4: "WhatsApp button",
    heroCardItem5: "Basic SEO optimization",

    servicesTitle: "Our services",
    servicesIntro: "Web solutions designed to present your brand professionally and help you sell more.",

    service1Title: "Landing Pages",
    service1Text: "Pages focused on turning visitors into customers, ideal for campaigns, services, and launches.",

    service2Title: "Business websites",
    service2Text: "Informational websites to present your brand, services, testimonials, and contact details.",

    service3Title: "Online stores",
    service3Text: "E-commerce design to sell products clearly, professionally, and accessibly from any device.",

    service4Title: "Website redesign",
    service4Text: "We improve existing websites so they look more current, work better, and build more trust.",

    stat1: "Projects developed",
    stat2: "Responsive design",
    stat3: "Online presence",
    stat4: "Bilingual websites",

    processTitle: "How do we work?",

    process1Title: "We listen to your idea",
    process1Text: "We get to know your business, your goals, and the style you are looking for.",

    process2Title: "We design your proposal",
    process2Text: "We plan a clear, attractive website focused on results.",

    process3Title: "We develop your site",
    process3Text: "We build a functional, adaptable website ready to publish.",

    process4Title: "We launch your website",
    process4Text: "We help you publish your site so your business has an online presence.",

    benefitsTitleStart: "Why choose",

    benefit1Title: "Professional design",
    benefit1Text: "Your brand will look modern, trustworthy, and well presented.",

    benefit2Title: "Mobile-friendly",
    benefit2Text: "Your website will work correctly on mobile, tablet, and desktop.",

    benefit3Title: "Sales-focused",
    benefit3Text: "Each section is designed to help attract customers.",

    benefit4Title: "Personalized attention",
    benefit4Text: "We develop each project according to your business needs.",

    portfolioTitle: "Explore our work",
    portfolioIntro: "Explore some websites developed by WEB-LTR.",
    portfolioBtn: "View projects",

    contactTitle: "Let’s talk about your project",
    contactIntro: "Tell us what type of website you need and we will help you bring your idea online.",

    namePlaceholder: "Your name",
    emailPlaceholder: "Your email address",
    businessPlaceholder: "Your business or brand",
    messagePlaceholder: "Tell us what type of website you need",

    sendBtn: "Send request",

    footerText: "© 2026 WEB-LTR. All rights reserved."
  }
};

function getCurrentLanguage() {
  return localStorage.getItem("language") || "es";
}

function changeLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-translate]").forEach(element => {
    const key = element.getAttribute("data-translate");

    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-placeholder]").forEach(element => {
    const key = element.getAttribute("data-placeholder");

    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = getCurrentLanguage();
  changeLanguage(savedLanguage);
});
