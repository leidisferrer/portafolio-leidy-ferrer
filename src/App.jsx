import React, { useState } from "react";
import { Linkedin, MessageCircle, ArrowUpRight, ArrowRight } from "lucide-react";
import logo from "./assets/logo.png";
import heroBg from "./assets/hero-bg.png";
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
  { n: "01", name: "Alianzas Rossana Ulloque", url: "alianzas.rossanaulloque.com", href: "https://alianzas.rossanaulloque.com", sector: "Consultoría", tech: "WordPress, Elementor" },
  { n: "02", name: "Cincom", url: "cincom.com.co", href: "https://cincom.com.co", sector: "Corporativo", tech: "WordPress" },
  { n: "03", name: "Pact Consulting", url: "pactconsulting.com.co", href: "https://pactconsulting.com.co", sector: "Consultoría", tech: "WordPress" },
  { n: "04", name: "Abogado Osman Perdomo", url: "abogadoosmanperdomo.com", href: "https://abogadoosmanperdomo.com", sector: "Jurídico", tech: "WordPress" },
  { n: "05", name: "Atlantic Building Source", url: "atlanticbuildingsource.com", href: "https://atlanticbuildingsource.com", sector: "Construcción", tech: "WordPress" },
  { n: "06", name: "Master Fibras MG", url: "masterfibrasmg.com.co", href: "https://masterfibrasmg.com.co", sector: "Industrial", tech: "WordPress" },
  { n: "07", name: "Wizzyfi", url: "wizzyfi.com", href: "https://wizzyfi.com", sector: "Tecnología", tech: "WordPress" },
  { n: "08", name: "Casa Regalé Design", url: "casaregaledesign.com", href: "https://casaregaledesign.com", sector: "Diseño", tech: "WordPress" },
  { n: "09", name: "Par Interior", url: "parinterior.com", href: "https://parinterior.com", sector: "Arquitectura", tech: "WordPress" },
  { n: "10", name: "Omix", url: "omix.com.co", href: "https://omix.com.co", sector: "Corporativo", tech: "WordPress" },
  { n: "11", name: "Gwifa", url: "gwifa.com", href: "https://gwifa.com", sector: "Corporativo", tech: "WordPress" },
  { n: "12", name: "Schalter Ingeniería", url: "schalteringenieria.com", href: "https://schalteringenieria.com", sector: "Ingeniería", tech: "WordPress" },
  { n: "13", name: "Guakaira Forestal", url: "guakairaforestal.com", href: "https://guakairaforestal.com", sector: "Ambiental", tech: "WordPress" },
  { n: "14", name: "Cargo Beer Burger", url: "cargobeerburger.com", href: "https://cargobeerburger.com", sector: "Gastronomía", tech: "WordPress, WooCommerce" },
  { n: "15", name: "La Cuarta Pared Gastrobar", url: "lacuartaparedgastrobar.com", href: "https://lacuartaparedgastrobar.com", sector: "Gastronomía", tech: "WordPress" },
  { n: "16", name: "Menú Digital · La Cuarta Pared", url: "menu.lacuartaparedgastrobar.com", href: "https://menu.lacuartaparedgastrobar.com", sector: "Menú digital", tech: "WordPress" },
];

const STACK = [
  "WordPress", "Elementor", "WooCommerce", "HTML5", "CSS3", "JavaScript",
  "PHP", "MySQL", "SEO técnico", "Diseño responsive", "Google Analytics",
  "Search Console", "cPanel", "Hosting y dominios", "SSL", "React", "Git", 
  "Figma", "node.js",  "Vite", "Tailwind CSS", "Lucide Icons", "Google Fonts", 
];

const SERVICES = [
  { t: "Sitios web corporativos", d: "Diseño, desarrollo y puesta en marcha de sitios institucionales en WordPress." },
  { t: "Tiendas virtuales", d: "Implementación de comercio electrónico con WooCommerce, pasarelas y catálogo." },
  { t: "Optimización SEO", d: "Estructura, metadatos y contenido orientados a posicionamiento en buscadores." },
  { t: "Rendimiento y velocidad", d: "Optimización de carga, imágenes y caché para una navegación fluida." },
  { t: "Mantenimiento WordPress", d: "Actualizaciones, corrección de errores y mantenimiento preventivo." },
  { t: "Migración y hosting", d: "Traslado de sitios, configuración de dominios, hosting y certificados SSL." },
];

const NAV = [
  { id: "perfil", label: "Perfil" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "servicios", label: "Servicios" },
  { id: "contacto", label: "Contacto" },
];

const WHATSAPP = "https://wa.me/573243899965?text=Hola%20Leidy%2C%20vi%20tu%20portafolio%20y%20quiero%20conversar%20sobre%20un%20proyecto%20web.";
const LINKEDIN = "https://www.linkedin.com/in/leidy-ferrer-1ab8821b4";

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

export default function Portfolio() {
  const [openSector, setOpenSector] = useState("Todos");
  const sectors = ["Todos", ...Array.from(new Set(PROJECTS.map((p) => p.sector)))];
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
        .lf-btn-ghost-dark:hover { 
        border-color: #FAF9F6 !important; 
        background: rgba(250,249,246,0.08) !important; }
        @media (max-width: 720px) {
          .lf-nav-links { display: none !important; }
          .lf-hero-name { font-size: 44px !important; }
          .lf-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: `${TOKENS.paper}F2`, backdropFilter: "blur(6px)", borderBottom: `1px solid ${TOKENS.line}` }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "18px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <img src={logo} alt="Leidy Ferrer" style={{ height: 60, width: 60, display: "flex" }} />
           <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, letterSpacing: "0.08em" }}>LEIDY FERRER</span>
             </span>
          <nav className="lf-nav-links" style={{ display: "flex", gap: 32 }}>
            {NAV.map((item) => (
              <span key={item.id} className="lf-navlink" onClick={() => scrollTo(item.id)} style={{ fontSize: 13, color: TOKENS.muted }}>
                {item.label}
              </span>
            ))}
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lf-btn-primary" style={{ background: TOKENS.ink, color: TOKENS.paper, fontSize: 13, padding: "9px 18px", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
            Contactar
          </a>
        </div>
      </header>
          
         {/* HERO — full-bleed, rompe el contenedor centrado */}
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
            PORTAFOLIO PROFESIONAL — DOSSIER N.º 01
          </p>
          <h1 className="lf-serif lf-hero-name" style={{ fontSize: 68, fontWeight: 480, lineHeight: 1.04, margin: "0 0 20px", color: "#FAF9F6" }}>
            Leidy Ferrer
          </h1>
          <p style={{ fontSize: 18, color: "#D6D5D0", maxWidth: 560, lineHeight: 1.6, margin: "0 0 40px" }}>
            Ingeniera de Sistemas, Webmaster y desarrolladora WordPress. Diseño, construyo y mantengo sitios web corporativos y de comercio electrónico enfocados en rendimiento, SEO y experiencia de usuario.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lf-btn-primary" style={{ background: TOKENS.paper, color: TOKENS.ink, fontSize: 14, padding: "13px 22px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <MessageCircle size={16} /> Escribir por WhatsApp
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="lf-btn-ghost-dark" style={{ border: "1px solid rgba(250,249,246,0.4)", color: "#FAF9F6", fontSize: 14, padding: "13px 22px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <Linkedin size={16} /> Ver LinkedIn
            </a>
          </div>
        </div>
      </section>

      <main style={{ maxWidth: 1080, margin: "0 auto", padding: "0 28px" }}>

        {/* PERFIL */}
        <section id="perfil" style={{ padding: "72px 0", borderBottom: `1px solid ${TOKENS.line}` }}>
          <Eyebrow n="02">Perfil</Eyebrow>
          <div className="lf-grid-2" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56 }}>
            <p className="lf-serif" style={{ fontSize: 26, lineHeight: 1.45, margin: 0, fontWeight: 400 }}>
              Más de 15 proyectos web publicados para empresas de consultoría, ingeniería, derecho, construcción, diseño y gastronomía.
            </p>
            <div>
              <p style={{ fontSize: 15, color: TOKENS.muted, lineHeight: 1.75, margin: "0 0 18px" }}>
                Me especializo en crear soluciones digitales sobre WordPress enfocadas en rendimiento, experiencia de usuario y posicionamiento en buscadores, acompañando cada proyecto desde el diseño hasta el mantenimiento.
              </p>
              <p style={{ fontSize: 15, color: TOKENS.muted, lineHeight: 1.75, margin: 0 }}>
                Mi objetivo es que cada sitio no solo se vea bien, sino que cargue rápido, se posicione y convierta visitas en resultados reales para el negocio.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" style={{ padding: "72px 0", borderBottom: `1px solid ${TOKENS.line}` }}>
          <Eyebrow n="03">Experiencia</Eyebrow>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 22 }}>
            <h3 className="lf-serif" style={{ fontSize: 26, margin: 0, fontWeight: 480 }}>Webmaster</h3>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: TOKENS.muted }}>Agencia de Marketing</span>
          </div>
          <p style={{ fontSize: 15, color: TOKENS.muted, marginBottom: 24, maxWidth: 640, lineHeight: 1.7 }}>
            Responsable del desarrollo, mantenimiento y optimización de sitios web corporativos.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px 32px" }}>
            {[
              "Desarrollo de sitios en WordPress",
              "Tiendas virtuales con WooCommerce",
              "Optimización SEO",
              "Mantenimiento preventivo y corrección de errores",
              "Optimización de velocidad",
              "Administración de hosting y dominios",
              "Formularios e integraciones de marketing",
              "Adaptación responsive",
            ].map((item) => (
              <div key={item} style={{ fontSize: 14, color: TOKENS.ink, display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: TOKENS.accent, marginTop: 2 }}>—</span>{item}
              </div>
            ))}
          </div>

          <h4 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: TOKENS.muted, margin: "48px 0 18px" }}>Stack técnico</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
            {STACK.map((s) => (
              <span key={s} style={{ fontSize: 13, border: `1px solid ${TOKENS.line}`, padding: "7px 14px", color: TOKENS.muted, fontFamily: "'IBM Plex Mono', monospace" }}>{s}</span>
            ))}
          </div>
        </section>

        {/* PROYECTOS — índice */}
        <section id="proyectos" style={{ padding: "72px 0", borderBottom: `1px solid ${TOKENS.line}` }}>
          <Eyebrow n="04">Índice de proyectos</Eyebrow>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
            <p className="lf-serif" style={{ fontSize: 26, margin: 0, fontWeight: 480, maxWidth: 480 }}>16 sitios web desarrollados y en producción.</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {sectors.map((s) => (
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
                  {s}
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
                <span style={{ fontSize: 13, color: TOKENS.muted, fontFamily: "'IBM Plex Mono', monospace" }}>{p.sector}</span>
                <span style={{ fontSize: 13, color: TOKENS.muted }}>{p.tech}</span>
                <ArrowUpRight size={16} color={TOKENS.muted} />
              </a>
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" style={{ padding: "72px 0", borderBottom: `1px solid ${TOKENS.line}` }}>
          <Eyebrow n="05">Servicios</Eyebrow>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "36px 40px" }}>
            {SERVICES.map((s, i) => (
              <div key={s.t}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: TOKENS.accent }}>{String(i + 1).padStart(2, "0")}</span>
                <h4 className="lf-serif" style={{ fontSize: 19, fontWeight: 480, margin: "10px 0 8px" }}>{s.t}</h4>
                <p style={{ fontSize: 14, color: TOKENS.muted, lineHeight: 1.65, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" style={{ padding: "80px 0 96px" }}>
          <Eyebrow n="06">Contacto</Eyebrow>
          <div className="lf-grid-2" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "start" }}>
            <p className="lf-serif" style={{ fontSize: 32, lineHeight: 1.35, margin: 0, fontWeight: 480, maxWidth: 520 }}>
              ¿Tienes un proyecto web en mente? Conversemos sobre cómo darle vida.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lf-btn-primary" style={{ background: TOKENS.ink, color: TOKENS.paper, fontSize: 14, padding: "16px 22px", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}><MessageCircle size={16} /> WhatsApp · +57 324 389 9965</span>
                <ArrowRight size={16} />
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="lf-btn-ghost" style={{ border: `1px solid ${TOKENS.line}`, color: TOKENS.ink, fontSize: 14, padding: "16px 22px", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}><Linkedin size={16} /> LinkedIn</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div style={{ marginTop: 88, paddingTop: 24, borderTop: `1px solid ${TOKENS.line}`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: TOKENS.muted }}>© 2026 Leidy Ferrer — Ingeniera de Sistemas</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: TOKENS.muted }}>Barranquilla, Colombia</span>
          </div>
        </section>
      </main>
    </div>
  );
}
