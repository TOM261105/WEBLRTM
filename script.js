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
    navPackages: "Paquetes",
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
    heroCardItem6: "Automatización de procesos",

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

    service5Title: "Automatización de procesos",
    service5Text: "Creamos flujos automáticos para que tu negocio ahorre tiempo, responda más rápido y mantenga organizada la información de tus clientes.",

    seeMore: "Ver más",

    packagesTitle: "Paquetes aproximados",
    packagesIntro: "Cada proyecto se adapta a las necesidades del negocio. Estos paquetes sirven como referencia inicial para darte una idea del alcance y la inversión.",

    packageBtn: "Cotizar paquete",

    package1Label: "Básico",
    package1Title: "Presencia Digital",
    package1Price: "Desde $8,000 MXN",
    package1Monthly: "Mantenimiento desde $800 MXN / mes",
    package1Description: "Ideal para emprendedores, marcas personales o negocios que quieren empezar a verse profesionales en internet.",
    package1Item1: "Landing page profesional",
    package1Item2: "Diseño responsive",
    package1Item3: "Formulario de contacto",
    package1Item4: "Botón de WhatsApp",

    package2Label: "Profesional",
    package2Title: "Página Profesional",
    package2Price: "Desde $14,000 MXN",
    package2Monthly: "Mantenimiento desde $1,200 MXN / mes",
    package2Description: "Ideal para negocios que necesitan una página completa para presentar su marca, servicios y generar confianza.",
    package2Item1: "Sitio web completo",
    package2Item2: "Inicio, servicios, acerca de y contacto",
    package2Item3: "Diseño personalizado",
    package2Item4: "Enlaces a redes y formulario",

    package3Label: "Más recomendado",
    package3Title: "Página + Automatización",
    package3Price: "Desde $18,000 MXN",
    package3Monthly: "Soporte desde $1,800 MXN / mes",
    package3Description: "Ideal para negocios que quieren ahorrar tiempo, responder más rápido y organizar mejor sus solicitudes.",
    package3Item1: "Página web profesional",
    package3Item2: "Formulario automatizado",
    package3Item3: "Correo automático al cliente",
    package3Item4: "Registro de datos y notificación interna",

    package4Label: "E-commerce",
    package4Title: "Página + Tienda / Catálogo",
    package4Price: "Desde $35,000 MXN",
    package4Monthly: "Soporte desde $2,500 MXN / mes",
    package4Description: "Ideal para marcas que venden productos y quieren mostrarlos de forma clara, profesional y ordenada.",
    package4Item1: "Página web completa",
    package4Item2: "Catálogo o tienda en línea",
    package4Item3: "Categorías de productos",
    package4Item4: "Fichas de producto y botones de compra",

    package5Label: "Integral",
    package5Title: "Sistema Digital Integral",
    package5Price: "Desde $60,000 MXN",
    package5Monthly: "Soporte integral desde $5,000 MXN / mes",
    package5Description: "Ideal para negocios que quieren una solución completa para vender, captar clientes y automatizar procesos.",
    package5Item1: "Página web completa",
    package5Item2: "Tienda o catálogo",
    package5Item3: "Automatización de formularios o pedidos",
    package5Item4: "Base de datos, seguimiento y reportes básicos",

    packagesNote: "*Los precios mostrados son aproximados. El precio final se determina después de realizar una cotización personalizada con WEB-LTR, de acuerdo con el alcance, número de secciones, productos, idiomas, integraciones, automatizaciones, plataformas externas y nivel de personalización solicitado.",

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

    footerDescription: "Desarrollo web profesional para marcas, emprendedores y negocios que quieren crecer en internet.",
    footerDirectoryTitle: "Directorio",
    footerContactTitle: "Contacto",
    footerText: "© 2026 WEB-LTR. Todos los derechos reservados."
  },

  en: {
    navServices: "Services",
    navPackages: "Packages",
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
    heroCardItem6: "Process automation",

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

    service5Title: "Process automation",
    service5Text: "We create automated workflows so your business saves time, responds faster, and keeps customer information organized.",

    seeMore: "See more",

    packagesTitle: "Estimated packages",
    packagesIntro: "Each project is adapted to the needs of the business. These packages serve as an initial reference to give you an idea of the scope and investment.",

    packageBtn: "Request a quote",

    package1Label: "Basic",
    package1Title: "Digital Presence",
    package1Price: "Starting at $8,000 MXN",
    package1Monthly: "Maintenance from $800 MXN / month",
    package1Description: "Ideal for entrepreneurs, personal brands, or businesses that want to start looking professional online.",
    package1Item1: "Professional landing page",
    package1Item2: "Responsive design",
    package1Item3: "Contact form",
    package1Item4: "WhatsApp button",

    package2Label: "Professional",
    package2Title: "Professional Website",
    package2Price: "Starting at $14,000 MXN",
    package2Monthly: "Maintenance from $1,200 MXN / month",
    package2Description: "Ideal for businesses that need a complete website to present their brand, services, and build trust.",
    package2Item1: "Complete website",
    package2Item2: "Home, services, about, and contact",
    package2Item3: "Custom design",
    package2Item4: "Social links and form",

    package3Label: "Most recommended",
    package3Title: "Website + Automation",
    package3Price: "Starting at $18,000 MXN",
    package3Monthly: "Support from $1,800 MXN / month",
    package3Description: "Ideal for businesses that want to save time, respond faster, and better organize their requests.",
    package3Item1: "Professional website",
    package3Item2: "Automated form",
    package3Item3: "Automatic email to the client",
    package3Item4: "Data registration and internal notification",

    package4Label: "E-commerce",
    package4Title: "Website + Store / Catalog",
    package4Price: "Starting at $35,000 MXN",
    package4Monthly: "Support from $2,500 MXN / month",
    package4Description: "Ideal for brands that sell products and want to display them clearly, professionally, and in an organized way.",
    package4Item1: "Complete website",
    package4Item2: "Catalog or online store",
    package4Item3: "Product categories",
    package4Item4: "Product pages and purchase buttons",

    package5Label: "Full solution",
    package5Title: "Full Digital System",
    package5Price: "Starting at $60,000 MXN",
    package5Monthly: "Full support from $5,000 MXN / month",
    package5Description: "Ideal for businesses that want a complete solution to sell, attract customers, and automate processes.",
    package5Item1: "Complete website",
    package5Item2: "Store or catalog",
    package5Item3: "Form or order automation",
    package5Item4: "Database, follow-up, and basic reports",

    packagesNote: "*The prices shown are approximate. The final price is determined after a personalized quote with WEB-LTR, according to the scope, number of sections, products, languages, integrations, automations, external platforms, and level of customization requested.",

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

    footerDescription: "Professional web development for brands, entrepreneurs, and businesses that want to grow online.",
    footerDirectoryTitle: "Directory",
    footerContactTitle: "Contact",
    footerText: "© 2026 WEB-LTR. All rights reserved."
  }
};

const serviceDetails = {
  es: {
    landing: {
      icon: "fa-solid fa-bullseye",
      title: "Landing Pages",
      body: `
        <p>Una landing page es una página enfocada en un objetivo específico: vender, captar clientes, promocionar un servicio o presentar una campaña.</p>
        <p>Es ideal para negocios que quieren dirigir a sus clientes a una sola acción clara, como pedir una cotización, mandar WhatsApp, registrarse o conocer un producto.</p>
        <ul>
          <li>Diseño visual profesional y adaptado a celular.</li>
          <li>Secciones enfocadas en conversión.</li>
          <li>Botones de contacto, WhatsApp o formulario.</li>
          <li>Información clara sobre el servicio o producto.</li>
          <li>Optimización básica para que cargue rápido y se vea bien.</li>
        </ul>
      `
    },

    business: {
      icon: "fa-solid fa-display",
      title: "Páginas para negocios",
      body: `
        <p>Este servicio está pensado para marcas, empresas o emprendedores que necesitan una página web completa para presentar quiénes son, qué hacen y cómo pueden ser contactados.</p>
        <p>Funciona como una carta de presentación profesional disponible las 24 horas.</p>
        <ul>
          <li>Inicio, acerca de, servicios, portafolio y contacto.</li>
          <li>Diseño alineado a la identidad visual de la marca.</li>
          <li>Información ordenada para generar confianza.</li>
          <li>Integración con WhatsApp, correo, redes sociales o formularios.</li>
          <li>Versión responsive para celular, tablet y computadora.</li>
        </ul>
      `
    },

    store: {
      icon: "fa-solid fa-cart-shopping",
      title: "Tiendas en línea",
      body: `
        <p>Desarrollamos tiendas digitales para negocios que quieren mostrar y vender productos de forma clara, profesional y accesible.</p>
        <p>Dependiendo del proyecto, se puede crear un catálogo visual, una tienda conectada a una plataforma de pagos o una tienda administrable para el cliente.</p>
        <ul>
          <li>Catálogo de productos organizado por categorías.</li>
          <li>Páginas individuales de producto.</li>
          <li>Botones de compra, cotización o WhatsApp.</li>
          <li>Diseño responsive para que el cliente pueda comprar desde celular.</li>
          <li>Estructura pensada para facilitar la navegación y la venta.</li>
        </ul>
      `
    },

    redesign: {
      icon: "fa-solid fa-wand-magic-sparkles",
      title: "Rediseño web",
      body: `
        <p>El rediseño web sirve para negocios que ya tienen una página, pero sienten que se ve antigua, desordenada, poco profesional o no funciona bien en celular.</p>
        <p>Mejoramos la estructura, el diseño visual, la experiencia del usuario y la presentación general de la marca.</p>
        <ul>
          <li>Actualización visual de la página.</li>
          <li>Mejora de distribución, textos y secciones.</li>
          <li>Adaptación a dispositivos móviles.</li>
          <li>Corrección de detalles que afectan la navegación.</li>
          <li>Mayor claridad para que el cliente entienda y contacte más rápido.</li>
        </ul>
      `
    },

    automation: {
      icon: "fa-solid fa-gears",
      title: "Automatización de procesos",
      body: `
        <p>La automatización permite que ciertas tareas digitales se realicen de forma automática, ayudando a que el negocio ahorre tiempo, responda más rápido y reduzca errores.</p>
        <p>Puede conectar formularios, correos, bases de datos, WhatsApp, reportes, herramientas de ventas, chatbots y procesos internos.</p>

        <div class="service-levels">
          <div class="service-level">
            <h3>Nivel 1: Automatización básica</h3>
            <p>Automatizaciones simples como enviar un correo cuando alguien llena un formulario, guardar datos en Google Sheets o abrir WhatsApp con un mensaje prellenado.</p>
          </div>

          <div class="service-level">
            <h3>Nivel 2: Automatización intermedia</h3>
            <p>Conecta varias herramientas al mismo tiempo. Por ejemplo: formulario web → base de datos → correo automático al cliente → notificación interna al negocio.</p>
          </div>

          <div class="service-level">
            <h3>Nivel 3: Automatización avanzada</h3>
            <p>El sistema responde de manera diferente según la información del cliente. Por ejemplo, si pide una tienda en línea recibe cierta información, y si pide una landing page recibe otra.</p>
          </div>

          <div class="service-level">
            <h3>Nivel 4: Automatización con inteligencia artificial</h3>
            <p>Integra IA para responder dudas, clasificar mensajes, resumir solicitudes, ordenar prospectos o apoyar la atención inicial al cliente.</p>
          </div>

          <div class="service-level">
            <h3>Nivel 5: Automatización integral del negocio</h3>
            <p>Crea un flujo completo conectado: página web → formulario → chatbot → base de datos → correo → WhatsApp → reporte → seguimiento comercial.</p>
          </div>
        </div>
      `
    }
  },

  en: {
    landing: {
      icon: "fa-solid fa-bullseye",
      title: "Landing Pages",
      body: `
        <p>A landing page is a website focused on one specific goal: selling, generating leads, promoting a service, or presenting a campaign.</p>
        <p>It is ideal for businesses that want to guide visitors toward one clear action, such as requesting a quote, sending a WhatsApp message, registering, or learning about a product.</p>
        <ul>
          <li>Professional visual design adapted to mobile devices.</li>
          <li>Sections focused on conversion.</li>
          <li>Contact, WhatsApp, or form buttons.</li>
          <li>Clear information about the service or product.</li>
          <li>Basic optimization for fast loading and good presentation.</li>
        </ul>
      `
    },

    business: {
      icon: "fa-solid fa-display",
      title: "Business websites",
      body: `
        <p>This service is designed for brands, companies, or entrepreneurs that need a complete website to present who they are, what they do, and how they can be contacted.</p>
        <p>It works as a professional online presentation available 24/7.</p>
        <ul>
          <li>Home, about, services, portfolio, and contact sections.</li>
          <li>Design aligned with the brand identity.</li>
          <li>Organized information to build trust.</li>
          <li>Integration with WhatsApp, email, social media, or forms.</li>
          <li>Responsive version for mobile, tablet, and desktop.</li>
        </ul>
      `
    },

    store: {
      icon: "fa-solid fa-cart-shopping",
      title: "Online stores",
      body: `
        <p>We develop digital stores for businesses that want to show and sell products in a clear, professional, and accessible way.</p>
        <p>Depending on the project, we can create a visual catalog, a store connected to a payment platform, or a manageable store for the client.</p>
        <ul>
          <li>Product catalog organized by categories.</li>
          <li>Individual product pages.</li>
          <li>Purchase, quote, or WhatsApp buttons.</li>
          <li>Responsive design so customers can shop from mobile devices.</li>
          <li>Structure designed to make navigation and sales easier.</li>
        </ul>
      `
    },

    redesign: {
      icon: "fa-solid fa-wand-magic-sparkles",
      title: "Website redesign",
      body: `
        <p>Website redesign is for businesses that already have a website but feel it looks outdated, disorganized, unprofessional, or does not work well on mobile.</p>
        <p>We improve the structure, visual design, user experience, and overall brand presentation.</p>
        <ul>
          <li>Visual update of the website.</li>
          <li>Improved layout, content, and sections.</li>
          <li>Mobile device adaptation.</li>
          <li>Fixes for details that affect navigation.</li>
          <li>More clarity so customers understand and contact faster.</li>
        </ul>
      `
    },

    automation: {
      icon: "fa-solid fa-gears",
      title: "Process automation",
      body: `
        <p>Automation allows certain digital tasks to happen automatically, helping the business save time, respond faster, and reduce errors.</p>
        <p>It can connect forms, emails, databases, WhatsApp, reports, sales tools, chatbots, and internal processes.</p>

        <div class="service-levels">
          <div class="service-level">
            <h3>Level 1: Basic automation</h3>
            <p>Simple automations such as sending an email when someone fills out a form, saving data to Google Sheets, or opening WhatsApp with a pre-filled message.</p>
          </div>

          <div class="service-level">
            <h3>Level 2: Intermediate automation</h3>
            <p>Connects several tools at the same time. For example: web form → database → automatic email to the client → internal notification to the business.</p>
          </div>

          <div class="service-level">
            <h3>Level 3: Advanced automation</h3>
            <p>The system responds differently depending on the customer's information. For example, if they request an online store they receive one type of information, and if they request a landing page they receive another.</p>
          </div>

          <div class="service-level">
            <h3>Level 4: AI-powered automation</h3>
            <p>Integrates AI to answer questions, classify messages, summarize requests, organize leads, or support initial customer service.</p>
          </div>

          <div class="service-level">
            <h3>Level 5: Full business automation</h3>
            <p>Creates a complete connected flow: website → form → chatbot → database → email → WhatsApp → report → sales follow-up.</p>
          </div>
        </div>
      `
    }
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

function openServiceModal(serviceKey) {
  const lang = getCurrentLanguage();
  const service = serviceDetails[lang][serviceKey];

  if (!service) return;

  document.getElementById("serviceModalIcon").innerHTML = `<i class="${service.icon}"></i>`;
  document.getElementById("serviceModalTitle").textContent = service.title;
  document.getElementById("serviceModalBody").innerHTML = service.body;

  document.getElementById("serviceModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeServiceModal() {
  document.getElementById("serviceModal").classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = getCurrentLanguage();
  changeLanguage(savedLanguage);

  const modal = document.getElementById("serviceModal");

  if (modal) {
    modal.addEventListener("click", event => {
      if (event.target === modal) {
        closeServiceModal();
      }
    });
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeServiceModal();
    }
  });
});
