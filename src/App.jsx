import React, { useState } from "react";
import { Linkedin, MessageCircle, ArrowUpRight, ArrowRight, Globe } from "lucide-react";
import heroBg from "./assets/hero-bg.png";
import logo from "./assets/logo.png";

const TOKENS = {
  paper: "#FAF9F6",
  ink: "#181A1E",
  muted: "#6B6E76",
  line: "#E4E2DB",
  accent: "#96733C",
  accentSoft: "#F1E9DA",
  card: "#FFFFFF",
};

const PROJECTS = [
  { n: "01", name: "Alianzas Rossana Ulloque", href: "https://alianzas.rossanaulloque.com", sector: "Consultoria", tech: "WordPress, Elementor" },
  { n: "02", name: "Cincom", href: "https://cincom.com.co", sector: "Corporativo", tech: "WordPress" },
  { n: "03", name: "Pact Consulting", href: "https://pactconsulting.com.co", sector: "Consultoria", tech: "WordPress" },
  { n: "04", name: "Abogado Osman Perdomo", href: "https://abogadoosmanperdomo.com", sector: "Juridico", tech: "WordPress" },
  { n: "05", name: "Atlantic Building Source", href: "https://atlanticbuildingsource.com", sector: "Construccion", tech: "WordPress" },
  { n: "06", name: "Master Fibras MG", href: "https://masterfibrasmg.com.co", sector: "Industrial", tech: "WordPress" },
  { n: "07", name: "Wizzyfi", href: "https://wizzyfi.com", sector: "Tecnologia", tech: "WordPress" },
  { n: "08", name: "Casa Regale Design", href: "https://casaregaledesign.com", sector: "Diseno", tech: "WordPress" },
  { n: "09", name: "Par Interior", href: "https://parinterior.com", sector: "Arquitectura", tech: "WordPress" },
  { n: "10", name: "Omix", href: "https://omix.com.co", sector: "Corporativo", tech: "WordPress" },
  { n: "11", name: "Gwifa", href: "https://gwifa.com", sector: "Corporativo", tech: "WordPress" },
  { n: "12", name: "Schalter Ingenieria", href: "https://schalteringenieria.com", sector: "Ingenieria", tech: "WordPress" },
  { n: "13", name: "Guakaira Forestal", href: "https://guakairaforestal.com", sector: "Ambiental", tech: "WordPress" },
  { n: "14", name: "Cargo Beer Burger", href: "https://cargobeerburger.com", sector: "Gastronomia", tech: "WordPress, WooCommerce" },
  { n: "15", name: "La Cuarta Pared Gastrobar", href: "https://lacuartaparedgastrobar.com", sector: "Gastronomia", tech: "WordPress" },
  { n: "16", name: "Menu Digital - La Cuarta Pared", href: "https://menu.lacuartaparedgastrobar.com", sector: "Menu digital", tech: "WordPress" },
];

const SECTOR_ES_EN = {
  "Consultoria": "Consulting",
  "Corporativo": "Corporate",
  "Juridico": "Legal",
  "Construccion": "Construction",
  "Industrial": "Industrial",
  "Tecnologia": "Technology",
  "Diseno": "Design",
  "Arquitectura": "Architecture",
  "Ingenieria": "Engineering",
  "Ambiental": "Environmental",
  "Gastronomia": "Food & Beverage",
  "Menu digital": "Digital menu",
};

const STACK = [
  "WordPress", "Elementor", "WooCommerce", "HTML5", "CSS3", "JavaScript",
  "PHP", "MySQL", "SEO tecnico", "Diseno responsive", "Google Analytics",
  "Search Console", "cPanel", "Hosting y dominios", "SSL", "React", "Git",
  "Figma", "Node.js", "Vite", "Tailwind CSS", "Lucide Icons", "Google Fonts",
];

const WHATSAPP = "https://wa.me/573243899965?text=Hola%20Leidy%2C%20vi%20tu%20portafolio%20y%20quiero%20conversar%20sobre%20un%20proyecto%20web.";
const LINKEDIN = "https://www.linkedin.com/in/leidy-ferrer-1ab8821b4";

const T = {
  es: {
    nav: { perfil: "Perfil", experiencia: "Experiencia", proyectos: "Proyectos", servicios: "Servicios", contacto: "Contacto" },
    contactar: "Contactar",
    hero: {
      eyebrow: "PORTAFOLIO PROFESIONAL - DOSSIER N.1",
      subtitle: "Ingeniera de Sistemas, Webmaster y desarrolladora WordPress. Diseno, construyo y mantengo sitios web corporativos y de comercio electronico enfocados en rendimiento, SEO y experiencia de usuario.",
      whatsapp: "Escribir por WhatsApp",
      linkedin: "Ver LinkedIn",
    },
    perfil: {
      eyebrow: "Perfil",
      headline: "Mas de 15 proyectos web publicados para empresas de consultoria, ingenieria, derecho, construccion, diseno y gastronomia.",
      p1: "Me especializo en crear soluciones digitales sobre WordPress enfocadas en rendimiento, experiencia de usuario y posicionamiento en buscadores, acompanando cada proyecto desde el diseno hasta el mantenimiento.",
      p2: "Mi objetivo es que cada sitio no solo se vea bien, sino que cargue rapido, se posicione y convierta visitas en resultados reales para el negocio.",
    },
    experiencia: {
      eyebrow: "Experiencia",
      role: "Webmaster",
      company: "Agencia de Marketing",
      desc: "Responsable del desarrollo, mantenimiento y optimizacion de sitios web corporativos.",
      items: [
        "Desarrollo de sitios en WordPress",
        "Tiendas virtuales con WooCommerce",
        "Optimizacion SEO",
        "Mantenimiento preventivo y correccion de errores",
        "Optimizacion de velocidad",
        "Administracion de hosting y dominios",
        "Formularios e integraciones de marketing",
        "Adaptacion responsive",
      ],
      stackTitle: "Stack tecnico",
    },
    proyectos: {
      eyebrow: "Indice de proyectos",
      headline: "+16 sitios web desarrollados y en produccion.",
      todos: "Todos",
    },
    servicios: {
      eyebrow: "Servicios",
      items: [
        { t: "Sitios web corporativos", d: "Diseno, desarrollo y puesta en marcha de sitios institucionales en WordPress." },
        { t: "Tiendas virtuales", d: "Implementacion de comercio electronico con WooCommerce, pasarelas y catalogo." },
        { t: "Optimizacion SEO", d: "Estructura, metadatos y contenido orientados a posicionamiento en buscadores." },
        { t: "Rendimiento y velocidad", d: "Optimizacion de carga, imagenes y cache para una navegacion fluida." },
        { t: "Mantenimiento WordPress", d: "Actualizaciones, correccion de errores y mantenimiento preventivo." },
        { t: "Migracion y hosting", d: "Traslado de sitios, configuracion de dominios, hosting y certificados SSL." },
      ],
    },
    contacto: {
      eyebrow: "Contacto",
      headline: "Tienes un proyecto web en mente? Conversemos sobre como darle vida.",
      whatsapp: "WhatsApp - +57 324 389 9965",
      linkedin: "LinkedIn",
      footer1: "2026 Leidy Ferrer - Ingeniera de Sistemas",
      footer2: "Barranquilla, Colombia",
    },
  },
  en: {
    nav: { perfil: "Profile", experiencia: "Experience", proyectos: "Projects", servicios: "Services", contacto: "Contact" },
    contactar: "Contact",
    hero: {
      eyebrow: "PROFESSIONAL PORTFOLIO - DOSSIER NO. 1",
      subtitle: "Systems Engineer, Webmaster, and WordPress developer. I design, build, and maintain corporate and e-commerce websites focused on performance, SEO, and user experience.",
      whatsapp: "Message on WhatsApp",
      linkedin: "View LinkedIn",
    },
    perfil: {
      eyebrow: "Profile",
      headline: "15+ published websites for companies in consulting, engineering, law, construction, design, and food service.",
      p1: "I specialize in building WordPress-based digital solutions focused on performance, user experience, and search engine positioning, supporting each project from design through maintenance.",
      p2: "My goal is for every site to not only look great, but to load fast, rank well, and turn visits into real results for the business.",
    },
    experiencia: {
      eyebrow: "Experience",
      role: "Webmaster",
      company: "Marketing Agency",
      desc: "Responsible for the development, maintenance, and optimization of corporate websites.",
      items: [
        "WordPress website development",
        "Online stores with WooCommerce",
        "SEO optimization",
        "Preventive maintenance and bug fixing",
        "Speed optimization",
        "Hosting and domain administration",
        "Forms and marketing integrations",
        "Responsive adaptation",
      ],
      stackTitle: "Tech stack",
    },
    proyectos: {
      eyebrow: "Project index",
      headline: "16 websites built and in production.",
      todos: "All",
    },
    servicios: {
      eyebrow: "Services",
      items: [
        { t: "Corporate websites", d: "Design, development, and launch of institutional sites on WordPress." },
        { t: "Online stores", d: "E-commerce implementation with WooCommerce, payment gateways, and catalog." },
        { t: "SEO optimization", d: "Structure, metadata, and content oriented toward search engine ranking." },
        { t: "Performance & speed", d: "Load, image, and cache optimization for smooth browsing." },
        { t: "WordPress maintenance", d: "Updates, bug fixes, and preventive maintenance." },
        { t: "Migration & hosting", d: "Site migration, domain setup, hosting, and SSL certificates." },
      ],
    },
    contacto: {
      eyebrow: "Contact",
      headline: "Have a web project in mind? Let's talk about how to bring it to life.",
      whatsapp: "WhatsApp - +57 324 389 9965",
      linkedin: "LinkedIn",
      footer1: "2026 Leidy Ferrer - Systems Engineer",
      footer2: "Barranquilla, Colombia",
    },
  },
};

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Eyebrow({ n, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.06em", color: TOKENS.accent }}>{n}</span>
      <span style={{ height: 1, width: 28, background: TOKENS.line }} />
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: TOKENS.muted }}>{children}</span>
    </div>
  );
}

function LangSwitch({ lang, setLang, dark }) {
  const base = {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    padding: "5px 9px",
    cursor: "pointer",
    letterSpacing: "0.05em",
    transition: "color 0.15s ease, background 0.15s ease",
    border: "none",
    background: "transparent",
  };
  const borderStyle = dark ? "1px solid rgba(250,249,246,0.35)" : "1px solid " + TOKENS.line;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, border: borderStyle, padding: 2 }}>
      <Globe size={13} color={dark ? "#D6D5D0" : TOKENS.muted} style={{ marginLeft: 5, marginRight: 2 }} />
      {["es", "en"].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          style={{
            ...base,
            color: lang === code ? (dark ? TOKENS.ink : TOKENS.paper) : (dark ? "#D6D5D0" : TOKENS.muted),
            background: lang === code ? (dark ? TOKENS.paper : TOKENS.ink) : "transparent",
          }}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [openSector, setOpenSector] = useState("Todos");
  const [lang, setLang] = useState("es");
  const t = T[lang];

  const translateSector = (sector) => (lang === "en" ? (SECTOR_ES_EN[sector] || sector) : sector);

  const sectorsCanonical = ["Todos", ...Array.from(new Set(PROJECTS.map((p) => p.sector)))];
  const visible = openSector === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.sector === openSector);

  return (
    <div style={{ background: TOKENS.paper, color: TOKENS.ink, fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,340;9..144,400;9..144,480;9..144,560&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        .lf-serif { font-family: 'Fraunces', serif; }
        .lf-row { transition: background 0.15s ease, padding-left 0.15s ease; }
        .lf-row:hover { background: ${TOKENS.accentSoft}; }
        .lf-navlink { transition: color 0.15s ease; cursor: pointer; }
        .lf-navlink:hover { color: ${TOKENS.ink} !important; }
        .lf-chip { transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease; cursor: pointer; }
        .lf-chip:hover { border-color: ${TOKENS.accent} !important; }
        .lf-btn-primary { transition: opacity 0.15s ease; }
        .lf-btn-primary:hover { opacity: 0.86; }
        .lf-btn-ghost { transition: border-color 0.15s ease, color 0.15s ease; }
        .lf-btn-ghost:hover { border-color: ${TOKENS.ink} !important; }
        .lf-btn-ghost-dark:hover { border-color: #FAF9F6 !important; background: rgba(250,249,246,0.08) !important; }
        @media (max-width: 720px) {
          .lf-nav-links { display: none !important; }
          .lf-hero-name { font-size: 44px !important; }
          .lf-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <header style={{ position: "sticky", top: 0, zIndex: 20, background: `${TOKENS.paper}F2`, backdropFilter: "blur(6px)", borderBottom: `1px solid ${TOKENS.line}` }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "18px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src={logo} alt="Leidy Ferrer" style={{ height: 30, width: "auto", display: "block" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, letterSpacing: "0.08em" }}>LEIDY FERRER</span>
          </span>
          <nav className="lf-nav-links" style={{ display: "flex", gap: 32 }}>
            {Object.entries(t.nav).map(([id, label]) => (
              <span key={id} className="lf-navlink" onClick={() => scrollTo(id)} style={{ fontSize: 13, color: TOKENS.muted }}>
                {label}
              </span>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <LangSwitch lang={lang} setLang={setLang} dark={false} />
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lf-btn-primary" style={{ background: TOKENS.ink, color: TOKENS.paper, fontSize: 13, padding: "9px 18px", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
              {t.contactar}
            </a>
          </div>
        </div>
      </header>

      <section
        style={{
          position: "relative",
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          padding: "120px 28px 96px",
          borderBottom: `1px solid ${TOKENS.line}`,
          backgroundImage: `linear-gradient(100deg, rgba(12,13,16,0.92) 0%, rgba(12,13,16,0.78) 42%, rgba(12,13,16,0.42) 100%), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.14em", color: "#D8B67B", marginBottom: 22 }}>
            {t.hero.eyebrow}
          </p>
          <h1 className="lf-serif lf-hero-name" style={{ fontSize: 68, fontWeight: 480, lineHeight: 1.04, margin: "0 0 20px", color: "#FAF9F6" }}>
            Leidy Ferrer
          </h1>
          <p style={{ fontSize: 18, color: "#D6D5D0", maxWidth: 560, lineHeight: 1.6, margin: "0 0 40px" }}>
            {t.hero.subtitle}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lf-btn-primary" style={{ background: TOKENS.paper, color: TOKENS.ink, fontSize: 14, padding: "13px 22px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <MessageCircle size={16} /> {t.hero.whatsapp}
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="lf-btn-ghost-dark" style={{ border: "1px solid rgba(250,249,246,0.4)", color: "#FAF9F6", fontSize: 14, padding: "13px 22px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <Linkedin size={16} /> {t.hero.linkedin}
            </a>
          </div>
        </div>
      </section>

      <main style={{ maxWidth: 1080, margin: "0 auto", padding: "0 28px" }}>

        <section id="perfil" style={{ padding: "72px 0", borderBottom: `1px solid ${TOKENS.line}` }}>
          <Eyebrow n="02">{t.perfil.eyebrow}</Eyebrow>
          <div className="lf-grid-2" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56 }}>
            <p className="lf-serif" style={{ fontSize: 26, lineHeight: 1.45, margin: 0, fontWeight: 400 }}>
              {t.perfil.headline}
            </p>
            <div>
              <p style={{ fontSize: 15, color: TOKENS.muted, lineHeight: 1.75, margin: "0 0 18px" }}>
                {t.perfil.p1}
              </p>
              <p style={{ fontSize: 15, color: TOKENS.muted, lineHeight: 1.75, margin: 0 }}>
                {t.perfil.p2}
              </p>
            </div>
          </div>
        </section>

        <section id="experiencia" style={{ padding: "72px 0", borderBottom: `1px solid ${TOKENS.line}` }}>
          <Eyebrow n="03">{t.experiencia.eyebrow}</Eyebrow>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 22 }}>
            <h3 className="lf-serif" style={{ fontSize: 26, margin: 0, fontWeight: 480 }}>{t.experiencia.role}</h3>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: TOKENS.muted }}>{t.experiencia.company}</span>
          </div>
          <p style={{ fontSize: 15, color: TOKENS.muted, marginBottom: 24, maxWidth: 640, lineHeight: 1.7 }}>
            {t.experiencia.desc}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px 32px" }}>
            {t.experiencia.items.map((item) => (
              <div key={item} style={{ fontSize: 14, color: TOKENS.ink, display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: TOKENS.accent, marginTop: 2 }}>-</span>{item}
              </div>
            ))}
          </div>

          <h4 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: TOKENS.muted, margin: "48px 0 18px" }}>{t.experiencia.stackTitle}</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
            {STACK.map((s) => (
              <span key={s} style={{ fontSize: 13, border: `1px solid ${TOKENS.line}`, padding: "7px 14px", color: TOKENS.muted, fontFamily: "'IBM Plex Mono', monospace" }}>{s}</span>
            ))}
          </div>
        </section>

        <section id="proyectos" style={{ padding: "72px 0", borderBottom: `1px solid ${TOKENS.line}` }}>
          <Eyebrow n="04">{t.proyectos.eyebrow}</Eyebrow>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
            <p className="lf-serif" style={{ fontSize: 26, margin: 0, fontWeight: 480, maxWidth: 480 }}>{t.proyectos.headline}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {sectorsCanonical.map((s) => (
                <span
                  key={s}
                  className="lf-chip"
                  onClick={() => setOpenSector(s)}
                  style={{
                    fontSize: 12,
                    fontFamily: "'IBM Plex Mono', monospace",
                    padding: "6px 12px",
                    border: `1px solid ${openSector === s ? TOKENS.accent : TOKENS.line}`,
                    color: openSector === s ? TOKENS.accent : TOKENS.muted,
                  }}
                >
                  {s === "Todos" ? t.proyectos.todos : translateSector(s)}
                </span>
              ))}
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${TOKENS.line}` }}>
            {visible.map((p) => (
              <a
                key={p.n}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="lf-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1.6fr 1fr 1.4fr 24px",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 8px",
                  borderBottom: `1px solid ${TOKENS.line}`,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: TOKENS.accent }}>{p.n}</span>
                <span style={{ fontSize: 15, fontWeight: 500 }}>{p.name}</span>
                <span style={{ fontSize: 13, color: TOKENS.muted, fontFamily: "'IBM Plex Mono', monospace" }}>{translateSector(p.sector)}</span>
                <span style={{ fontSize: 13, color: TOKENS.muted }}>{p.tech}</span>
                <ArrowUpRight size={16} color={TOKENS.muted} />
              </a>
            ))}
          </div>
        </section>

        <section id="servicios" style={{ padding: "72px 0", borderBottom: `1px solid ${TOKENS.line}` }}>
          <Eyebrow n="05">{t.servicios.eyebrow}</Eyebrow>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "36px 40px" }}>
            {t.servicios.items.map((s, i) => (
              <div key={s.t}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: TOKENS.accent }}>{String(i + 1).padStart(2, "0")}</span>
                <h4 className="lf-serif" style={{ fontSize: 19, fontWeight: 480, margin: "10px 0 8px" }}>{s.t}</h4>
                <p style={{ fontSize: 14, color: TOKENS.muted, lineHeight: 1.65, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" style={{ padding: "80px 0 96px" }}>
          <Eyebrow n="06">{t.contacto.eyebrow}</Eyebrow>
          <div className="lf-grid-2" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "start" }}>
            <p className="lf-serif" style={{ fontSize: 32, lineHeight: 1.35, margin: 0, fontWeight: 480, maxWidth: 520 }}>
              {t.contacto.headline}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lf-btn-primary" style={{ background: TOKENS.ink, color: TOKENS.paper, fontSize: 14, padding: "16px 22px", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}><MessageCircle size={16} /> {t.contacto.whatsapp}</span>
                <ArrowRight size={16} />
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="lf-btn-ghost" style={{ border: `1px solid ${TOKENS.line}`, color: TOKENS.ink, fontSize: 14, padding: "16px 22px", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}><Linkedin size={16} /> {t.contacto.linkedin}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div style={{ marginTop: 88, paddingTop: 24, borderTop: `1px solid ${TOKENS.line}`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: TOKENS.muted }}>{t.contacto.footer1}</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: TOKENS.muted }}>{t.contacto.footer2}</span>
          </div>
        </section>
      </main>
    </div>
  );
}