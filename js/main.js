/* ============================================================
   MADAD WALLAH FOUNDATION — Interactive Scripts & UI Enhancements
   Clean, modern, bug-free, and accessible.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. Animated Stat Counters ---------- */
  function initCounters() {
    var statsEl = document.querySelector(".stats");
    if (!statsEl) return;

    var animated = false;
    function startCounting() {
      if (animated) return;
      animated = true;

      statsEl.querySelectorAll(".stat .num").forEach(function (el) {
        var target = parseInt(el.getAttribute("data-count"), 10) || 0;
        var suffix = el.getAttribute("data-suffix") || "";
        var dur = 1600;
        var start = null;

        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          // Cubic ease-out
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toLocaleString("en-IN") + suffix;
          if (p < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = target.toLocaleString("en-IN") + suffix;
          }
        }
        requestAnimationFrame(step);
      });
    }

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });
      observer.observe(statsEl);
    } else {
      startCounting();
    }
  }

  /* ---------- 2. Scroll Reveal Animations ---------- */
  function initScrollReveal() {
    // Respect reduced motion preference
    var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      return;
    }

    var targets = document.querySelectorAll(
      ".card, .news-item, .gallery-item, .leader-card, .activity-card, .obj-card, .doc-table, .bank-table, .qr-card"
    );

    if (!targets.length) return;

    targets.forEach(function (el) {
      el.classList.add("reveal-item");
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    targets.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---------- 3. Gallery Lightbox with Prev/Next Navigation ---------- */
  function initLightbox() {
    var lightbox = document.querySelector(".lightbox");
    var galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
    if (!lightbox || !galleryItems.length) return;

    var lbImg = lightbox.querySelector("img");
    var lbCap = lightbox.querySelector(".lb-cap");
    var currentIndex = 0;

    // Inject Navigation buttons if not present
    if (!lightbox.querySelector(".lb-prev")) {
      var prevBtn = document.createElement("button");
      prevBtn.className = "lb-nav lb-prev";
      prevBtn.setAttribute("aria-label", "Previous image");
      prevBtn.innerHTML = "&#10094;";
      lightbox.appendChild(prevBtn);

      var nextBtn = document.createElement("button");
      nextBtn.className = "lb-nav lb-next";
      nextBtn.setAttribute("aria-label", "Next image");
      nextBtn.innerHTML = "&#10095;";
      lightbox.appendChild(nextBtn);

      var counter = document.createElement("div");
      counter.className = "lb-counter";
      lightbox.appendChild(counter);
    }

    var prevButton = lightbox.querySelector(".lb-prev");
    var nextButton = lightbox.querySelector(".lb-next");
    var counterEl = lightbox.querySelector(".lb-counter");

    function showImage(index) {
      if (index < 0) index = galleryItems.length - 1;
      if (index >= galleryItems.length) index = 0;
      currentIndex = index;

      var btn = galleryItems[currentIndex];
      var img = btn.querySelector("img");
      var cap = btn.getAttribute("data-caption") || img.alt || "";

      if (lbImg) {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
      }
      if (lbCap) {
        lbCap.textContent = cap;
      }
      if (counterEl) {
        counterEl.textContent = (currentIndex + 1) + " / " + galleryItems.length;
      }
    }

    function openLb(index) {
      showImage(index);
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
      lightbox.focus();
    }

    function closeLb() {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
    }

    galleryItems.forEach(function (btn, idx) {
      btn.addEventListener("click", function () {
        openLb(idx);
      });
    });

    if (prevButton) {
      prevButton.addEventListener("click", function (e) {
        e.stopPropagation();
        showImage(currentIndex - 1);
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", function (e) {
        e.stopPropagation();
        showImage(currentIndex + 1);
      });
    }

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || e.target.classList.contains("lb-close")) {
        closeLb();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") showImage(currentIndex - 1);
      if (e.key === "ArrowRight") showImage(currentIndex + 1);
    });
  }

  /* ---------- 4. Copy to Clipboard (Donate Page & Contacts) ---------- */
  function initCopyButtons() {
    document.querySelectorAll(".copy-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var text = (btn.getAttribute("data-copy") || "").trim();

        if (!text) {
          var original = btn.textContent;
          btn.textContent = "Pending ⏳";
          btn.classList.add("copy-disabled");
          setTimeout(function () {
            btn.textContent = original;
            btn.classList.remove("copy-disabled");
          }, 1800);
          return;
        }

        function notifySuccess() {
          var original = btn.textContent;
          btn.textContent = "Copied ✓";
          btn.classList.add("copy-success");
          setTimeout(function () {
            btn.textContent = original;
            btn.classList.remove("copy-success");
          }, 1800);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(notifySuccess).catch(function () {
            fallbackCopy(text, notifySuccess);
          });
        } else {
          fallbackCopy(text, notifySuccess);
        }
      });
    });

    function fallbackCopy(text, cb) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand("copy");
        cb();
      } catch (e) {
        console.warn("Clipboard copy failed", e);
      }
      document.body.removeChild(ta);
    }
  }

  /* ---------- 5. Donation Amount Selector (Donate Page) ---------- */
  function initDonationChips() {
    var chips = document.querySelectorAll(".amount-chips button");
    var customAmt = document.getElementById("custom-amount");
    if (!chips.length && !customAmt) return;

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("sel"); });
        chip.classList.add("sel");
        if (customAmt) {
          customAmt.value = chip.getAttribute("data-amount");
        }
      });
    });

    if (customAmt) {
      customAmt.addEventListener("input", function () {
        var val = customAmt.value.trim();
        var matched = false;
        chips.forEach(function (chip) {
          if (chip.getAttribute("data-amount") === val) {
            chip.classList.add("sel");
            matched = true;
          } else {
            chip.classList.remove("sel");
          }
        });
        if (!matched && val !== "") {
          chips.forEach(function (c) { c.classList.remove("sel"); });
        }
      });
    }
  }

  /* ---------- 6. Form Validation & Local Submission (Join Us Form) ---------- */
  function initVolunteerForm() {
    var form = document.getElementById("volunteer-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Remove any prior error highlights
      form.querySelectorAll(".form-error").forEach(function (el) { el.remove(); });
      form.querySelectorAll(".has-error").forEach(function (el) { el.classList.remove("has-error"); });

      var isValid = true;
      var firstInvalidInput = null;
      var data = {};

      function markError(field, message) {
        isValid = false;
        field.classList.add("has-error");
        var err = document.createElement("span");
        err.className = "form-error";
        err.textContent = message;
        field.parentNode.appendChild(err);
        if (!firstInvalidInput) firstInvalidInput = field;
      }

      // Validate required inputs
      var nameInput = form.querySelector("[name='full_name']");
      if (nameInput && !nameInput.value.trim()) {
        markError(nameInput, "Please enter your full name.");
      }

      var mobileInput = form.querySelector("[name='mobile']");
      if (mobileInput) {
        var phoneClean = mobileInput.value.replace(/[\s+-]/g, "");
        if (!phoneClean || phoneClean.length < 10) {
          markError(mobileInput, "Please enter a valid 10-digit mobile number.");
        }
      }

      var emailInput = form.querySelector("[name='email']");
      if (emailInput) {
        var emailVal = emailInput.value.trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailVal || !emailRegex.test(emailVal)) {
          markError(emailInput, "Please enter a valid email address.");
        }
      }

      var dobInput = form.querySelector("[name='birthdate_celebration_date']");
      if (dobInput && !dobInput.value) {
        markError(dobInput, "Please choose your birthdate.");
      }

      var bloodInput = form.querySelector("[name='blood_group']");
      if (bloodInput && !bloodInput.value) {
        markError(bloodInput, "Please select your blood group.");
      }

      var idMarkInput = form.querySelector("[name='identification_mark']");
      if (idMarkInput && !idMarkInput.value.trim()) {
        markError(idMarkInput, "Please provide an identification mark or write 'None'.");
      }

      var fatherInput = form.querySelector("[name='father_name']");
      if (fatherInput && !fatherInput.value.trim()) {
        markError(fatherInput, "Please enter father's name.");
      }

      var stateInput = form.querySelector("[name='state']");
      if (stateInput && !stateInput.value.trim()) {
        markError(stateInput, "Please enter your state.");
      }

      var districtInput = form.querySelector("[name='district']");
      if (districtInput && !districtInput.value.trim()) {
        markError(districtInput, "Please enter your district.");
      }

      var roleInput = form.querySelector("[name='role']");
      if (roleInput && !roleInput.value) {
        markError(roleInput, "Please select a role.");
      }

      var successMsg = document.getElementById("vol-success");

      if (!isValid) {
        if (successMsg) successMsg.classList.remove("show");
        if (firstInvalidInput) {
          firstInvalidInput.focus();
          firstInvalidInput.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }

      // Collect data
      form.querySelectorAll("[name]").forEach(function (f) {
        if (f.type === "checkbox") {
          data[f.name] = data[f.name] || [];
          if (f.checked) data[f.name].push(f.value);
        } else {
          data[f.name] = f.value.trim();
        }
      });

      // Save to localStorage for demo/offline resilience
      try {
        var store = JSON.parse(localStorage.getItem("mwf_volunteers") || "[]");
        data.submitted_at = new Date().toISOString();
        store.push(data);
        localStorage.setItem("mwf_volunteers", JSON.stringify(store));
      } catch (err) {
        // Continue gracefully if storage blocked
      }

      // Show confirmation
      if (successMsg) {
        successMsg.classList.add("show");
        successMsg.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      form.reset();
    });
  }

  /* ---------- 7. Contact Us Page Interactive Message Form ---------- */
  function initContactForm() {
    var form = document.getElementById("contact-message-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = (form.querySelector("[name='contact_name']") || {}).value || "";
      var email = (form.querySelector("[name='contact_email']") || {}).value || "";
      var phone = (form.querySelector("[name='contact_phone']") || {}).value || "";
      var message = (form.querySelector("[name='contact_message']") || {}).value || "";
      var successEl = document.getElementById("contact-success");

      if (!name.trim() || !email.trim() || !message.trim()) {
        alert("Please fill in your name, email and message.");
        return;
      }

      if (successEl) {
        successEl.classList.add("show");
        successEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      form.reset();
    });
  }

  /* ---------- Initialization on DOM Ready ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initCounters();
    initScrollReveal();
    initLightbox();
    initCopyButtons();
    initDonationChips();
    initVolunteerForm();
    initContactForm();
  });
})();
