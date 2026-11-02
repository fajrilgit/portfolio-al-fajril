/* =====================================================================
   main.js - LOGIKA HALAMAN (butuh data.js dimuat lebih dulu)
   1. Helper
   2. Render: foto, CV, skill, proyek, kontak & sosial
   3. Sertifikat & lightbox
   4. Galeri desain (carousel)
   5. Efek ketik
   6. Routing (beranda / detail proyek) & reveal
   7. Menu aktif saat scroll
   ===================================================================== */

/* ---------- 1. Helper ---------- */

var $ = function (s) {
  return document.querySelector(s);
};

function toast(m) {
  var t = $("#toast");
  t.textContent = m;
  t.classList.add("show");
  clearTimeout(toast.h);
  toast.h = setTimeout(function () {
    t.classList.remove("show");
  }, 3200);
}

$("#yr").textContent = new Date().getFullYear();


/* ---------- 2. Render: foto, CV, skill, proyek, kontak & sosial ---------- */

/* Foto profil */
if (CFG.photo) {
  $("#photo").innerHTML = "";
  var im = new Image();
  im.src = CFG.photo;
  im.alt = "Al Fajril";
  $("#photo").appendChild(im);
}

/* Tombol Download CV */
$("#cv").onclick = function (e) {
  if (CFG.cv) {
    this.href = CFG.cv;
    this.target = "_blank";
    this.rel = "noopener";
  } else {
    e.preventDefault();
    toast("Tautan CV belum diisi. Isi CFG.cv di kode.");
  }
};

/* Kartu skill */
$("#sk").innerHTML = SK.map(function (s) {
  var level = s[2] >= 65 ? "Menengah" : s[2] >= 50 ? "Berkembang" : "Dasar";
  return '<div class="sc" style="--k:' + s[3] + '">' +
    '<div class="ico">' + s[1] + '</div>' +
    '<div><h3>' + s[0] + '</h3><em>' + level + '</em></div>' +
    '</div>';
}).join("");

/* Kartu proyek */
$("#pg").innerHTML = PJ.map(function (p, i) {
  return '<article class="card pj">' +
    '<div class="th" aria-hidden="true"><div class="mk"><b></b><span><i></i><i></i><i></i></span></div></div>' +
    '<div class="b">' +
    '<h3>' + p.n + '</h3>' +
    '<p>' + p.d + '</p>' +
    '<div class="tags">' + p.t.map(function (x) { return '<span>' + x + '</span>'; }).join("") + '</div>' +
    '<div class="row">' +
    '<a class="btn p" href="#project-' + p.id + '">View Details</a>' +
    '<a class="btn gh" data-i="' + i + '" href="#">GitHub</a>' +
    '</div>' +
    '</div>' +
    '</article>';
}).join("");

document.querySelectorAll(".gh").forEach(function (a) {
  var p = PJ[a.dataset.i];
  a.onclick = function (e) {
    if (p.gh) {
      a.href = p.gh;
      a.target = "_blank";
      a.rel = "noopener";
    } else {
      e.preventDefault();
      toast("Link GitHub proyek belum diisi.");
    }
  };
});

/* Daftar kontak & ikon sosial */

$("#lk").innerHTML =
  '<a href="#" data-m="1">Email<span>' +
  CFG.email +
  '</span></a>' +

  (CFG.whatsapp
    ? '<a href="https://wa.me/' + CFG.whatsapp +
      '" target="_blank" rel="noopener">WhatsApp<span>' +
      CFG.whatsapp +
      '</span></a>'
    : '') +

  Object.keys(CFG.links)
    .filter(function (k) {
      return CFG.links[k];
    })
    .map(function (k) {
      return '<a href="' + CFG.links[k] +
        '" target="_blank" rel="noopener">' +
        k + '<span>Buka profil</span></a>';
    }).join("");

$("#soc").innerHTML = Object.keys(CFG.links)
  .filter(function (k) {
    return CFG.links[k];
  })
  .map(function (k) {
    return '<a href="' + CFG.links[k] +
      '" target="_blank" rel="noopener" aria-label="' +
      k + '">' + k.slice(0, 2) + '</a>';
  }).join("");

document.addEventListener("click", function (e) {
  var a = e.target.closest("[data-m]");
  if (!a) return;

  e.preventDefault();

  CFG.email
    ? location.href = "mailto:" + CFG.email
    : toast("Email belum diisi.");
});

/* Formulir kontak (membuka aplikasi email) */
$("#f").onsubmit = function (e) {
  e.preventDefault();
  if (!CFG.email) return toast("Email tujuan belum diisi. Isi CFG.email di kode.");
  var d = new FormData(this);
  location.href = "mailto:" + CFG.email +
    "?subject=" + encodeURIComponent(d.get("s")) +
    "&body=" + encodeURIComponent(d.get("m") + "\n\n" + d.get("n") + " (" + d.get("e") + ")");
  toast("Membuka aplikasi email Anda...");
};


/* ---------- 3. Sertifikat & lightbox ---------- */

function renderCerts(filter) {
  var html = CERT.map(function (c, i) {
    if (filter && c.k !== filter) return "";
    var thumb = c.src
      ? '<img src="' + c.src + '" alt="' + c.t + '" loading="lazy">'
      : '<div class="ph"><div><b>' + c.k + '</b>Tambahkan gambar di sini</div></div>';
    var verify = c.url
      ? '<a class="btn" target="_blank" rel="noopener" href="' + c.url + '">Verifikasi</a>'
      : '';
    return '<article class="card cr">' +
      '<div class="cth">' + thumb + '</div>' +
      '<div class="cb">' +
      '<span class="bd">' + c.k + '</span>' +
      '<h4>' + c.t + '</h4>' +
      '<p>' + c.by + ' · ' + c.d + '</p>' +
      '<div class="row"><button class="btn" data-ci="' + i + '">Lihat sertifikat</button>' + verify + '</div>' +
      '</div>' +
      '</article>';
  }).join("");
  $("#cg").innerHTML = html || '<p class="note">Belum ada item di kategori ini.</p>';
}
renderCerts("");

$("#cf").onclick = function (e) {
  var b = e.target.closest("button");
  if (!b) return;
  document.querySelectorAll("#cf button").forEach(function (x) {
    x.classList.toggle("on", x === b);
  });
  renderCerts(b.dataset.f);
};

$("#cg").onclick = function (e) {
  var b = e.target.closest("[data-ci]");
  if (!b) return;
  var c = CERT[+b.dataset.ci];
  if (c.src) {
    $("#lbi").src = c.src;
    $("#lbi").alt = c.t;
    $("#lb").hidden = false;
    $("#lbx").focus();
  } else {
    toast("Gambar sertifikat belum ditambahkan.");
  }
};

function closeLightbox() {
  $("#lb").hidden = true;
}
$("#lbx").onclick = closeLightbox;
$("#lb").onclick = function (e) {
  if (e.target.id === "lb") closeLightbox();
};
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeLightbox();
});


/* ---------- 4. Galeri desain (carousel) ---------- */

var gi = 0,            // indeks slide aktif
    gn = DS.length,    // jumlah slide
    gm = 0,            // penanda sedang digeser
    gx0 = 0,           // posisi X awal geser
    trk = $("#trk");

trk.innerHTML = DS.map(function (d, i) {
  var inner = d.src
    ? '<img src="' + d.src + '" alt="' + d.t + ' (' + d.tool + ')" loading="lazy" draggable="false">'
    : '<div class="ph"><div><b>' + d.t + '</b>Placeholder: ganti dengan desain ' + d.tool + ' Anda</div></div>';
  return '<figure class="sl" data-i="' + i + '">' + inner + '</figure>';
}).join("");

$("#dots").innerHTML = DS.map(function (_, i) {
  return '<button aria-label="Desain ' + (i + 1) + '" data-i="' + i + '"></button>';
}).join("");

/* Atur posisi, skala, dan opacity tiap slide relatif terhadap slide aktif */
function renderGallery() {
  var h = Math.floor(gn / 2);
  trk.querySelectorAll(".sl").forEach(function (el, i) {
    var o = ((i - gi + gn + h) % gn) - h,
        a = Math.abs(o),
        s = a ? (a == 1 ? .78 : .6) : 1,
        st = el.style;
    el.dataset.o = o;
    st.setProperty("--o", o);
    st.setProperty("--s", s);
    st.setProperty("--p", a ? (a == 1 ? .55 : 0) : 1);
    st.setProperty("--z", 10 - a);
    st.pointerEvents = a > 1 ? "none" : "auto";
    el.classList.toggle("on", !o);
    el.setAttribute("aria-hidden", a > 1 ? "true" : "false");
  });
  $("#gt").textContent = DS[gi].t;
  $("#gk").textContent = DS[gi].tool + " · " + (gi + 1) + " / " + gn;
  document.querySelectorAll("#dots button").forEach(function (b, i) {
    b.classList.toggle("on", i == gi);
  });
}

function go(n) {
  gi = (n + gn) % gn;
  renderGallery();
}

$("#gp").onclick = function () { go(gi - 1); };
$("#gx").onclick = function () { go(gi + 1); };

$("#dots").onclick = function (e) {
  var b = e.target.closest("button");
  if (b) go(+b.dataset.i);
};

trk.onclick = function (e) {
  var s = e.target.closest(".sl");
  if (s && !gm && +s.dataset.o) go(gi + +s.dataset.o);
};

var sg = $("#stg");
sg.addEventListener("pointerdown", function (e) {
  gx0 = e.clientX;
  gm = 0;
});
sg.addEventListener("pointerup", function (e) {
  var d = e.clientX - gx0;
  if (Math.abs(d) > 45) {
    gm = 1;
    go(gi + (d < 0 ? 1 : -1));
  }
});
sg.addEventListener("keydown", function (e) {
  if (e.key == "ArrowLeft") go(gi - 1);
  if (e.key == "ArrowRight") go(gi + 1);
});

renderGallery();


/* ---------- 5. Efek ketik ---------- */

var W = [
      "membangun website dengan PHP & CodeIgniter",
      "merancang database MySQL",
      "bereksperimen dengan IoT & ESP32"
    ],
    wi = 0,     // kata aktif
    ci = 0,     // jumlah huruf tampil
    del = 0,    // 1 = sedang menghapus
    ty = $("#ty");

(function tick() {
  var w = W[wi];
  ty.textContent = "Saya suka " + w.slice(0, ci);
  if (!del && ci < w.length) {
    ci++;
  } else if (!del) {
    del = 1;
    return setTimeout(tick, 1600);
  } else if (ci > 0) {
    ci--;
  } else {
    del = 0;
    wi = (wi + 1) % W.length;
  }
  setTimeout(tick, del ? 25 : 55);
})();


/* ---------- 6. Routing (beranda / detail proyek) & reveal ---------- */

function route() {
  var h = location.hash.slice(1),
      p = PJ.filter(function (x) { return "project-" + x.id === h; })[0];

  $("#main").hidden = !!p;
  $("#detail").hidden = !p;

  if (p) {
    document.title = p.n + " – Al Fajril";
    $("#dc").innerHTML =
      '<h1 style="font-size:clamp(28px,5vw,44px)">' + p.n + '</h1>' +
      '<p>' + p.d + '</p>' +
      '<div class="tags" style="margin-top:14px">' + p.t.map(function (x) { return '<span>' + x + '</span>'; }).join("") + '</div>' +
      '<h2>Problem</h2><p>' + p.pr + '</p>' +
      '<h2>Objective</h2><p>' + p.ob + '</p>' +
      '<h2>Solution</h2><p>' + p.so + '</p>' +
      '<h2>Technology stack</h2><p>' + p.t.join(", ") + '</p>' +
      '<h2>Development process</h2><ul>' + p.pc.map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul>' +
      '<h2>Project outcome</h2><p>' + p.oc + '</p>';
    scrollTo(0, 0);
  } else {
    document.title = "Al Fajril – Junior Web Developer | Teknik Informatika UMPAR";
    var el = h && document.getElementById(h);
    if (el) {
      setTimeout(function () { el.scrollIntoView(); }, 30);
    } else {
      scrollTo(0, 0);
    }
    reveal();
  }
}
addEventListener("hashchange", route);

/* Animasi muncul saat section masuk layar */
function reveal() {
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (x) {
      if (x.isIntersecting) {
        x.target.classList.add("in");
        x.target.querySelectorAll(".meter i").forEach(function (i) {
          i.style.width = i.dataset.w + "%";
        });
        io.unobserve(x.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll(".rv").forEach(function (r) {
    io.observe(r);
  });
}


/* ---------- 7. Menu aktif saat scroll ---------- */

var secs = ["about", "skills", "projects", "designs", "education", "experience", "contact"],
    lastc = "";

addEventListener("scroll", function () {
  if ($("#main").hidden) return;

  var cur = "home";
  secs.forEach(function (s) {
    if (document.getElementById(s).getBoundingClientRect().top < (innerWidth <= 900 ? 130 : 100)) cur = s;
  });
  if (cur === lastc) return;
  lastc = cur;

  var m = $("#menu");
  document.querySelectorAll("#menu a").forEach(function (a) {
    var on = a.hash === "#" + cur;
    a.classList.toggle("on", on);
    if (on && m.scrollWidth > m.clientWidth) {
      m.scrollTo({ left: a.offsetLeft - (m.clientWidth - a.offsetWidth) / 2, behavior: "smooth" });
    }
  });
}, { passive: true });


/* ---------- Mulai ---------- */
route();
