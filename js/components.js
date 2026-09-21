/**
 * MADAD WALLAH FOUNDATION — Reusable Web Components & Layout
 * Eliminates duplicate headers, footers, topbars, and navigation across all pages.
 * Fully accessible, responsive, and SEO-friendly.
 */
(function () {
  "use strict";

  // Foundation Master Data
  const SITE_DATA = {
    name: "MADAD WALLAH FOUNDATION",
    tagline: "A Helping Hand for Every Need",
    sub: "Section 8 Non-Profit · Est. 2026",
    cin: "U88900BR2026NPL087297",
    darpan: "BR/2026/1184067",
    reg12a: "12A-AAVCM3586HE20261",
    reg80g: "80G-AAVCM3586HF20261",
    licence: "190175",
    pan: "AAVCM3586H",
    tan: "PTNM16408A",
    phone: "7004460314",
    phoneDisplay: "+91 7004460314",
    email: "madadwallahfoundation@gmail.com",
    address: "Ward No 19, Dagwar Toli, Near Cinema Chowk Rosera, Samastipur – 848210, Bihar, India",
    socials: {
      linkedin: "https://www.linkedin.com/in/madad-wallah-foundation-58b4a3435/",
      instagram: "https://www.instagram.com/madadwallah",
      facebook: "https://www.facebook.com/friendsofom",
      youtube: "https://www.youtube.com"
    }
  };

  // SVGs for Social Media Icons
  const ICONS = {
    linkedin: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.66-.74 1.66-1.66 0-.91-.74-1.65-1.66-1.65-.92 0-1.66.74-1.66 1.65 0 .92.74 1.66 1.66 1.66m1.4 9.74v-8.37H5.06v8.37h2.8z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
    email: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`
  };

  // Helper to determine active page
  function getCurrentPage() {
    const p = window.location.pathname.replace(/\/$/, "");
    const file = p.split("/").pop() || "index.html";
    if (file === "" || file === "index" || file === "index.html") return "index.html";
    if (!file.endsWith(".html")) return file + ".html";
    return file;
  }

  // Navigation Links
  const NAV_ITEMS = [
    { href: "index.html", text: "Home" },
    { href: "about.html", text: "About Us" },
    { href: "objectives.html", text: "Our Objectives" },
    { href: "activities.html", text: "Activities" },
    { href: "gallery.html", text: "Gallery" },
    { href: "join.html", text: "Join Us" },
    { href: "contact.html", text: "Contact Us" }
  ];

  /* -------------------------------------------------------------
     1. <site-topbar> Component
     ------------------------------------------------------------- */
  class SiteTopbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="topbar" role="region" aria-label="Official Registration & Contact Bar">
          <div class="container">
            <div class="reg-info">
              <span class="reg-item" title="Corporate Identification Number"><span class="reg-badge">CIN</span> ${SITE_DATA.cin}</span>
              <span class="reg-item" title="NITI Aayog NGO DARPAN ID"><span class="reg-badge">DARPAN</span> ${SITE_DATA.darpan}</span>
              <span class="reg-item" title="Income Tax 12A & 80G Tax Exemption"><span class="reg-badge">80G</span> Approved</span>
            </div>
            <div class="topbar-right">
              <a href="tel:+91${SITE_DATA.phone}" class="topbar-link" title="Call Official Helpline">
                ${ICONS.phone} <span>${SITE_DATA.phoneDisplay}</span>
              </a>
              <a href="mailto:${SITE_DATA.email}" class="topbar-link" title="Send Official Email">
                ${ICONS.email} <span>${SITE_DATA.email}</span>
              </a>
              <div class="socials" aria-label="Official Social Media Links">
                <a href="${SITE_DATA.socials.linkedin}" class="social-btn social-linkedin" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" title="LinkedIn">
                  ${ICONS.linkedin}
                </a>
                <a href="${SITE_DATA.socials.instagram}" class="social-btn social-instagram" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" title="Instagram">
                  ${ICONS.instagram}
                </a>
                <a href="${SITE_DATA.socials.facebook}" class="social-btn social-facebook" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" title="Facebook">
                  ${ICONS.facebook}
                </a>
                <a href="${SITE_DATA.socials.youtube}" class="social-btn social-youtube" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube Channel" title="YouTube">
                  ${ICONS.youtube}
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }

  /* -------------------------------------------------------------
     2. <site-header> Component
     ------------------------------------------------------------- */
  class SiteHeader extends HTMLElement {
    connectedCallback() {
      const activeFile = getCurrentPage();
      const navLinksHtml = NAV_ITEMS.map(item => {
        const isActive = item.href === activeFile;
        return `<li><a href="${item.href}" class="${isActive ? 'active' : ''}" ${isActive ? 'aria-current="page"' : ''}>${item.text}</a></li>`;
      }).join("");

      const isDonateActive = activeFile === "donate.html";

      this.innerHTML = `
        <header class="site-header" id="site-header">
          <div class="container">
            <a class="brand" href="index.html" title="Madad Wallah Foundation — Home">
              <img src="images/logo.png" alt="Madad Wallah Foundation Logo" width="52" height="52" loading="eager">
              <span class="brand-text">
                <span class="brand-name">${SITE_DATA.name}</span>
                <span class="brand-sub">${SITE_DATA.sub}</span>
              </span>
            </a>

            <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="main-nav">
              <span class="nav-toggle-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            <nav class="main-nav" id="main-nav" aria-label="Primary navigation">
              <div class="mobile-nav-header">
                <div class="mobile-brand">
                  <img src="images/logo.png" alt="Logo" width="38" height="38">
                  <div>
                    <strong style="display:block;font-size:14px;color:var(--green-900);line-height:1.2;">MADAD WALLAH</strong>
                    <span style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;">Navigation Menu</span>
                  </div>
                </div>
                <button class="mobile-nav-close" id="mobile-nav-close" aria-label="Close navigation menu">&times;</button>
              </div>
              <ul>
                ${navLinksHtml}
                <li class="nav-item-donate">
                  <a href="donate.html" class="nav-donate ${isDonateActive ? 'active' : ''}" ${isDonateActive ? 'aria-current="page"' : ''}>
                    <span class="heart-pulse">♥</span> Donate Now
                  </a>
                </li>
              </ul>
              <div class="mobile-nav-footer">
                <div class="mobile-nav-contact">
                  <a href="tel:+91${SITE_DATA.phone}">📞 ${SITE_DATA.phoneDisplay}</a>
                  <a href="mailto:${SITE_DATA.email}">✉️ Email Us</a>
                </div>
                <div class="socials mobile-nav-socials">
                  <a href="${SITE_DATA.socials.linkedin}" class="social-btn social-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    ${ICONS.linkedin}
                  </a>
                  <a href="${SITE_DATA.socials.instagram}" class="social-btn social-instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    ${ICONS.instagram}
                  </a>
                  <a href="${SITE_DATA.socials.facebook}" class="social-btn social-facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    ${ICONS.facebook}
                  </a>
                  <a href="${SITE_DATA.socials.youtube}" class="social-btn social-youtube" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    ${ICONS.youtube}
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div class="nav-backdrop" id="nav-backdrop" aria-hidden="true"></div>
        </header>
      `;

      // Attach mobile navigation drawer events
      const toggle = this.querySelector("#nav-toggle");
      const nav = this.querySelector("#main-nav");
      const backdrop = this.querySelector("#nav-backdrop");
      const closeBtn = this.querySelector("#mobile-nav-close");

      if (toggle && nav) {
        function openMenu() {
          nav.classList.add("open");
          toggle.classList.add("open");
          toggle.setAttribute("aria-expanded", "true");
          if (backdrop) backdrop.classList.add("show");
          document.body.classList.add("menu-locked");
        }

        function closeMenu() {
          nav.classList.remove("open");
          toggle.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
          if (backdrop) backdrop.classList.remove("show");
          document.body.classList.remove("menu-locked");
        }

        toggle.addEventListener("click", function (e) {
          e.stopPropagation();
          const isOpen = nav.classList.contains("open");
          if (isOpen) {
            closeMenu();
          } else {
            openMenu();
          }
        });

        if (backdrop) {
          backdrop.addEventListener("click", closeMenu);
        }

        if (closeBtn) {
          closeBtn.addEventListener("click", closeMenu);
        }

        // Close when clicking nav links
        nav.querySelectorAll("a").forEach(a => {
          a.addEventListener("click", closeMenu);
        });

        // Close on ESC
        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape" && nav.classList.contains("open")) {
            closeMenu();
          }
        });

        // Close on screen resize to desktop
        window.addEventListener("resize", function () {
          if (window.innerWidth > 860 && nav.classList.contains("open")) {
            closeMenu();
          }
        }, { passive: true });
      }
    }
  }

  /* -------------------------------------------------------------
     3. <site-footer> Component
     ------------------------------------------------------------- */
  class SiteFooter extends HTMLElement {
    connectedCallback() {
      const year = new Date().getFullYear();

      this.innerHTML = `
        <footer class="site-footer" id="site-footer">
          <div class="container">
            <div class="footer-grid">
              <div class="footer-brand">
                <div class="footer-logo-row">
                  <img src="images/logo.png" alt="Madad Wallah Foundation Logo" width="56" height="56" loading="lazy">
                  <div>
                    <h3 class="footer-brand-title">${SITE_DATA.name}</h3>
                    <span class="footer-brand-tagline">हर हाथ में मदद का साथ</span>
                  </div>
                </div>
                <p class="footer-desc">
                  Registered Section 8 non-profit company incorporated under the Companies Act, 2013. Dedicated to education, health, women empowerment, environmental protection, and disaster relief across Bihar and India.
                </p>
                <div class="footer-statutory-badges">
                  <span>CIN: ${SITE_DATA.cin}</span>
                  <span>DARPAN: ${SITE_DATA.darpan}</span>
                  <span>80G Approved: ${SITE_DATA.reg80g}</span>
                </div>
              </div>

              <div>
                <h4 class="footer-heading">Quick Links</h4>
                <ul class="footer-links">
                  <li><a href="index.html">Home Overview</a></li>
                  <li><a href="about.html">About Us & Leadership</a></li>
                  <li><a href="objectives.html">6 MoA Objectives</a></li>
                  <li><a href="activities.html">On-Ground Activities</a></li>
                  <li><a href="gallery.html">Photo & Video Gallery</a></li>
                  <li><a href="transparency.html">Statutory Documents</a></li>
                </ul>
              </div>

              <div>
                <h4 class="footer-heading">Get Involved</h4>
                <ul class="footer-links">
                  <li><a href="join.html">Join as Volunteer</a></li>
                  <li><a href="join.html">Become a Member</a></li>
                  <li><a href="donate.html">Donate & Support</a></li>
                  <li><a href="contact.html">Partner With Us</a></li>
                  <li><a href="donate.html#tax-benefit">80G Tax Deductions</a></li>
                  <li><a href="refund-policy.html">Donation Refund Policy</a></li>
                </ul>
              </div>

              <div>
                <h4 class="footer-heading">Registered Office & Connect</h4>
                <address class="footer-address">
                  <p class="address-line">
                    📍 ${SITE_DATA.address}
                  </p>
                  <p class="contact-line">
                    📞 <a href="tel:+91${SITE_DATA.phone}"><strong>${SITE_DATA.phoneDisplay}</strong></a>
                  </p>
                  <p class="contact-line">
                    ✉️ <a href="mailto:${SITE_DATA.email}">${SITE_DATA.email}</a>
                  </p>
                </address>

                <div class="footer-social-box">
                  <span class="footer-social-label">Follow & Connect:</span>
                  <div class="socials footer-socials">
                    <a href="${SITE_DATA.socials.linkedin}" class="social-btn social-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" title="LinkedIn">
                      ${ICONS.linkedin}
                    </a>
                    <a href="${SITE_DATA.socials.instagram}" class="social-btn social-instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" title="Instagram">
                      ${ICONS.instagram}
                    </a>
                    <a href="${SITE_DATA.socials.facebook}" class="social-btn social-facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook Page" title="Facebook">
                      ${ICONS.facebook}
                    </a>
                    <a href="${SITE_DATA.socials.youtube}" class="social-btn social-youtube" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel" title="YouTube">
                      ${ICONS.youtube}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="footer-bottom">
              <div class="footer-copyright">
                © <span data-year>${year}</span> <strong>${SITE_DATA.name}</strong>. All rights reserved. (Licence No. ${SITE_DATA.licence})
              </div>
              <div class="footer-legal">
                <a href="privacy-policy.html">Privacy Policy</a>
                <a href="terms.html">Terms &amp; Conditions</a>
                <a href="refund-policy.html">Refund &amp; Cancellation</a>
                <a href="transparency.html">Transparency</a>
              </div>
            </div>
          </div>
        </footer>

        <button class="back-top" id="back-to-top" aria-label="Back to top" title="Scroll to top">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      `;

      // Back to top click handler
      const backTopBtn = this.querySelector("#back-to-top");
      if (backTopBtn) {
        window.addEventListener("scroll", function () {
          backTopBtn.classList.toggle("show", window.scrollY > 400);
        }, { passive: true });

        backTopBtn.addEventListener("click", function () {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    }
  }

  // Register Custom Elements once
  if (!customElements.get("site-topbar")) {
    customElements.define("site-topbar", SiteTopbar);
  }
  if (!customElements.get("site-header")) {
    customElements.define("site-header", SiteHeader);
  }
  if (!customElements.get("site-footer")) {
    customElements.define("site-footer", SiteFooter);
  }

  // Expose global SITE_DATA if any page script needs it
  window.MWF_DATA = SITE_DATA;
  window.MWF_ICONS = ICONS;
})();
