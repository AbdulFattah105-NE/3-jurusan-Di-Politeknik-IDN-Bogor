/* =========================================
   Data Program Studi Diploma 4 (S.Tr.Kom)
   ========================================= */
const JURUSAN_DATA = {
  designer: {
    code: 'TRMG',
    icon: '🎨',
    title: 'Teknologi Rekayasa Multimedia Grafis (TRMG)',
    tagline: 'Menciptakan pengalaman pengguna yang estetis, interaktif, dan konten visual bernilai bisnis.',
    accentRgb: '244, 114, 182',
    kurikulum: [
      {
        id: 'smt-1-2',
        label: 'Semester 01-02',
        shortLabel: 'Smt 01–02',
        items: ['UI/UX Design', 'Visual Graphic Design', 'Framer Website'],
      },
      {
        id: 'smt-3-4',
        label: 'Semester 03-04',
        shortLabel: 'Smt 03–04',
        items: [
          'Motion Graphic',
          'Photography',
          'Videography',
          'Photo & Video Editing',
          '3D Animation',
        ],
      },
      {
        id: 'smt-5-6',
        label: 'Semester 05-06',
        shortLabel: 'Smt 05–06',
        items: [
          'Adobe Photoshop',
          'Adobe Illustrator',
          'HTML/CSS/JS Basic',
          'Webflow',
          'Final Project (Animasi / Short Movie / UI/UX / Branding)',
        ],
      },
      {
        id: 'smt-7-8',
        label: 'Semester 07-08',
        shortLabel: 'Smt 07–08',
        items: ['Magang atau PKL'],
      },
    ],
    prospek: [
      'UI/UX Designer',
      'Product Designer',
      'Graphic & Brand Designer',
      'Motion Graphic & 3D Artist',
      'Framer/Webflow Developer',
      'Videographer & Editor',
    ],
    catatan:
      'Cocok untuk kamu yang suka memadukan kreativitas visual, empati pengguna, animasi 3D, dan tren produk digital.',
  },
  programmer: {
    code: 'TRPL',
    icon: '💻',
    title: 'Teknologi Rekayasa Perangkat Lunak (TRPL)',
    tagline: 'Merancang dan mengembangkan aplikasi web fullstack serta aplikasi mobile modern siap industri.',
    accentRgb: '0, 229, 255',
    kurikulum: [
      {
        id: 'smt-1-2',
        label: 'Semester 01-02',
        shortLabel: 'Smt 01–02',
        items: [
          'HTML/CSS/JS',
          'Git',
          'MySQL',
          'PHP & Laravel Basic',
          'Next.js Basic',
          'Tailwind CSS',
          'REST API Laravel',
          'JWT/OAuth',
          'Deployment (VPS/Vercel)',
        ],
      },
      {
        id: 'smt-3-4',
        label: 'Semester 03-04',
        shortLabel: 'Smt 03–04',
        items: [
          'Fullstack Laravel + Next.js',
          'Realtime App (WebSocket/Pusher)',
          'Payment Gateway (Midtrans/Xendit)',
          'Testing & CI/CD',
          'Dart & Flutter Basic',
          'Provider/Riverpod',
          'SQFlite/Hive',
        ],
      },
      {
        id: 'smt-5-6',
        label: 'Semester 05-06',
        shortLabel: 'Smt 05–06',
        items: [
          'Flutter Modularization & BLoC',
          'Firebase & Firestore',
          'Clean Architecture',
          'Flutter Testing',
          'Play Store Deployment',
          'CI/CD Mobile (Codemagic/GitHub Actions)',
        ],
      },
      {
        id: 'smt-7-8',
        label: 'Semester 07-08',
        shortLabel: 'Smt 07–08',
        items: ['Magang atau PKL'],
      },
    ],
    prospek: [
      'Fullstack Web Developer',
      'Mobile App Developer (Flutter)',
      'Backend Developer',
      'Frontend Developer',
      'Software Engineer',
      'DevOps Junior',
    ],
    catatan:
      'Cocok untuk kamu yang suka ngoding, membangun sistem web/mobile dari nol, dan memecahkan masalah lewat logika.',
  },
  engineer: {
    code: 'TRKJ',
    icon: '🛠️',
    title: 'Teknologi Rekayasa Komputer Jaringan (TRKJ)',
    tagline: 'Membangun, mengamankan, dan mengotomatisasi infrastruktur jaringan modern berskala enterprise dan cloud.',
    accentRgb: '16, 185, 129',
    kurikulum: [
      {
        id: 'smt-1-2',
        label: 'Semester 01-02',
        shortLabel: 'Smt 01–02',
        items: ['Networking Fundamental', 'MTCNA', 'MTCRE', 'MTCINE'],
      },
      {
        id: 'smt-3-4',
        label: 'Semester 03-04',
        shortLabel: 'Smt 03–04',
        items: ['CCNA CCNP'],
      },
      {
        id: 'smt-5-6',
        label: 'Semester 05-06',
        shortLabel: 'Smt 05–06',
        items: [
          'Linux & Automation',
          'Cloud Computing',
          'Firewall (PaloAlto, Fortinet, Cisco ASA)',
        ],
      },
      {
        id: 'smt-7-8',
        label: 'Semester 07-08',
        shortLabel: 'Smt 07–08',
        items: ['Magang atau PKL'],
      },
    ],
    prospek: [
      'Network Engineer',
      'Cloud Infrastructure Engineer',
      'Linux SysAdmin',
      'Network Security Engineer',
      'NOC Specialist',
      'DevOps Junior',
    ],
    catatan:
      'Cocok untuk kamu yang suka ngoprek jaringan, server Linux, cloud computing, dan keamanan siber.',
  },
};

let activeJurusan = null;
let activeSemesterFilter = 'all';

/* =========================================
   Detail Panel Rendering & Interactions
   ========================================= */
function renderCurriculumGroups(kurikulum, filterId) {
  const filtered =
    filterId === 'all'
      ? kurikulum
      : kurikulum.filter((group) => group.id === filterId);

  return filtered
    .map((group) => {
      const itemsHtml = group.items
        .map(
          (item) => `
          <li>
            <span class="check-icon" aria-hidden="true">✓</span>
            <span>${item}</span>
          </li>`
        )
        .join('');

      const itemLabel = group.items.length === 1 ? '1 fokus' : `${group.items.length} materi`;

      return `
        <div class="semester-group">
          <div class="semester-group-header">
            <span class="semester-badge">${group.label}</span>
            <span class="semester-count">${itemLabel}</span>
          </div>
          <ul class="detail-list">
            ${itemsHtml}
          </ul>
        </div>
      `;
    })
    .join('');
}

function showDetail(jurusan) {
  const detailBox = document.getElementById('detail');
  const data = JURUSAN_DATA[jurusan];
  if (!detailBox || !data) return;

  // Toggle close if clicking the already active card
  if (activeJurusan === jurusan && !detailBox.classList.contains('hidden')) {
    closeDetail();
    return;
  }

  activeJurusan = jurusan;
  activeSemesterFilter = 'all';
  updateActiveCardState(jurusan);

  detailBox.style.setProperty('--detail-accent-rgb', data.accentRgb);

  const semesterTabsHtml = [
    `<button type="button" class="semester-tab active" data-semester="all">Semua</button>`,
    ...data.kurikulum.map(
      (g) =>
        `<button type="button" class="semester-tab" data-semester="${g.id}">${g.shortLabel}</button>`
    ),
  ].join('');

  const prospekChips = data.prospek
    .map((role) => `<span class="career-chip">${role}</span>`)
    .join('');

  detailBox.innerHTML = `
    <div class="detail-header">
      <div class="detail-title-group">
        <div class="detail-icon-badge" aria-hidden="true">${data.icon}</div>
        <div>
          <span class="detail-prodi-pill">Diploma 4 (S.Tr.Kom) &bull; ${data.code}</span>
          <h3>${data.title}</h3>
          <p class="detail-tagline">${data.tagline}</p>
        </div>
      </div>
      <button type="button" class="detail-close" id="detail-close-btn" aria-label="Tutup detail">&times;</button>
    </div>

    <div class="detail-grid">
      <div class="detail-col">
        <h4>Materi Kurikulum</h4>
        <div class="semester-tabs" role="tablist" aria-label="Filter Semester">
          ${semesterTabsHtml}
        </div>
        <div class="curriculum-scroll" id="curriculum-list">
          ${renderCurriculumGroups(data.kurikulum, activeSemesterFilter)}
        </div>
      </div>

      <div class="detail-col detail-col-right">
        <div>
          <h4>Prospek Karier</h4>
          <div class="career-chips">
            ${prospekChips}
          </div>
        </div>
        <div class="detail-note">
          <span class="detail-note-label">Cocok Untuk</span>
          ${data.catatan}
        </div>
      </div>
    </div>
  `;

  // Replay reveal animation cleanly when switching majors
  detailBox.classList.remove('hidden');
  detailBox.style.animation = 'none';
  void detailBox.offsetWidth;
  detailBox.style.animation = '';

  const closeBtn = document.getElementById('detail-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeDetail);
  }

  // Bind semester filter tabs
  const tabs = detailBox.querySelectorAll('.semester-tab');
  const curriculumContainer = document.getElementById('curriculum-list');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selected = tab.dataset.semester;
      activeSemesterFilter = selected;

      tabs.forEach((t) => t.classList.toggle('active', t === tab));
      if (curriculumContainer) {
        curriculumContainer.innerHTML = renderCurriculumGroups(data.kurikulum, selected);
        curriculumContainer.scrollTop = 0;
      }
    });
  });

  detailBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeDetail() {
  const detailBox = document.getElementById('detail');
  if (!detailBox) return;

  detailBox.classList.add('hidden');
  activeJurusan = null;
  updateActiveCardState(null);
}

function updateActiveCardState(selectedJurusan) {
  document.querySelectorAll('.card[data-jurusan]').forEach((card) => {
    const isSelected = card.dataset.jurusan === selectedJurusan;
    card.classList.toggle('active', isSelected);
    card.setAttribute('aria-expanded', String(isSelected));
  });
}

/* =========================================
   Card Interactive 3D Tilt & Spotlight
   ========================================= */
function initCardInteractions() {
  const cards = document.querySelectorAll('.card[data-jurusan]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  cards.forEach((card) => {
    const jurusan = card.dataset.jurusan;

    card.addEventListener('click', () => showDetail(jurusan));

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showDetail(jurusan);
      }
    });

    if (!prefersReducedMotion) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((y / rect.height) - 0.5) * -10;
        card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeJurusan) {
      closeDetail();
    }
  });
}

/* =========================================
   Ambient Cyber Particles Canvas
   ========================================= */
function initParticles() {
  const canvas = document.getElementById('bg-particles');
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particleCount = Math.min(48, Math.floor((width * height) / 28000));
  const colors = ['rgba(0, 229, 255, 0.55)', 'rgba(96, 165, 250, 0.45)', 'rgba(192, 132, 252, 0.4)'];

  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.42,
    vy: (Math.random() - 0.5) * 0.42,
    r: Math.random() * 2 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Subtle connecting lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 229, 255, ${(1 - dist / 130) * 0.14})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* =========================================
   Bootstrap
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
  initCardInteractions();
  initParticles();
});
