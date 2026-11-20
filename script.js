/* =========================================
   Data Program Studi Diploma 4 (S.Tr.Kom)
   dengan Preview Interaktif Materi & Karier
   ========================================= */
const JURUSAN_DATA = {
  designer: {
    code: 'TRMG',
    icon: '🎨',
    title: 'Teknologi Rekayasa Multimedia Grafis (TRMG)',
    tagline: 'Menciptakan pengalaman pengguna yang estetis, interaktif, dan konten visual bernilai bisnis.',
    accentRgb: '16, 185, 129',
    kurikulum: [
      {
        id: 'smt-1-2',
        label: 'Semester 01-02',
        shortLabel: 'Smt 01–02',
        items: [
          {
            id: 'trmg-m1',
            name: 'User Interface & User Experience (UI/UX) Design',
            analogi: 'Merancang denah rumah agar nyaman dilewati (UX) sekaligus memilih warna cat & furnitur yang estetik (UI).',
            dipelajari: 'Riset pengguna, wireframe, design system di Figma, dan prototyping interaktif.',
            output: 'Bisa merancang desain aplikasi HP dan website yang enak dilihat dan gampang dipakai.',
          },
          {
            id: 'trmg-m2',
            name: 'Visual Graphic Design',
            analogi: 'Juru bicara visual yang mengubah pesan bisnis jadi poster atau logo yang langsung menarik perhatian dalam 3 detik.',
            dipelajari: 'Teori warna, tipografi, komposisi layout, dan identitas visual brand.',
            output: 'Mampu membuat desain poster, feed media sosial, logo, dan materi promosi profesional.',
          },
          {
            id: 'trmg-m3',
            name: 'Framer Website',
            analogi: 'Merakit website interaktif kelas agensi dunia secara visual tanpa harus pusing nulis ribuan baris kode.',
            dipelajari: 'Desain & publikasi website modern dengan animasi halus langsung di Framer.',
            output: 'Bisa membangun website portofolio atau company profile estetik yang langsung bisa diakses online.',
          },
        ],
      },
      {
        id: 'smt-3-4',
        label: 'Semester 03-04',
        shortLabel: 'Smt 03–04',
        items: [
          {
            id: 'trmg-m4',
            name: 'Motion Graphic',
            analogi: 'Menghidupkan poster dan ilustrasi diam agar bisa bergerak lincah seperti di iklan TV atau video YouTube modern.',
            dipelajari: 'Prinsip animasi 2D, tipografi bergerak, dan video explainer.',
            output: 'Bisa membuat video promosi animasi, intro/outro video, dan animasi UI.',
          },
          {
            id: 'trmg-m5',
            name: 'Photography',
            analogi: 'Melukis menggunakan cahaya lewat lensa kamera agar produk atau momen terlihat mahal dan bercerita.',
            dipelajari: 'Teknik segitiga eksposur, komposisi, pencahayaan (lighting), dan foto produk/potret.',
            output: 'Mampu menghasilkan foto komersial berkualitas tinggi untuk brand dan media.',
          },
          {
            id: 'trmg-m6',
            name: 'Videography',
            analogi: 'Menjadi sutradara dan juru kamera yang merekam adegan dengan sudut pengambilan gambar yang sinematik.',
            dipelajari: 'Teknik pergerakan kamera, framing, pencahayaan video, dan perekaman audio.',
            output: 'Bisa memproduksi rekaman video profil perusahaan, iklan, hingga film pendek.',
          },
          {
            id: 'trmg-m7',
            name: 'Photo Editing',
            analogi: 'Memberikan "sentuhan akhir" agar foto mentah terlihat tajam, warnanya hidup, dan bebas gangguan visual.',
            dipelajari: 'Retouching, color grading, manipulasi foto, dan perbaikan pencahayaan.',
            output: 'Foto produk dan konten visual siap tayang dengan standar majalah/iklan.',
          },
          {
            id: 'trmg-m8',
            name: 'Video Editing',
            analogi: 'Merangkai potongan adegan mentah menjadi satu cerita video yang seru, rapi, dan bikin penonton betah sampai akhir.',
            dipelajari: 'Cutting ritme, transisi, sound design, color grading, dan efek visual.',
            output: 'Bisa mengedit konten Reels/TikTok, video YouTube, iklan komersial, hingga film pendek.',
          },
          {
            id: 'trmg-m9',
            name: '3D Animation',
            analogi: 'Memahat patung digital di komputer lalu menghidupkannya menjadi karakter atau produk 3D yang bisa diputar dari segala arah.',
            dipelajari: '3D modeling, texturing, lighting, dan animasi objek/karakter 3D.',
            output: 'Bisa membuat aset 3D untuk website/aplikasi, iklan produk 3D, dan animasi pendek.',
          },
        ],
      },
      {
        id: 'smt-5-6',
        label: 'Semester 05-06',
        shortLabel: 'Smt 05–06',
        items: [
          {
            id: 'trmg-m10',
            name: 'Adobe Photoshop',
            analogi: 'Studio foto dan bengkel manipulasi gambar terlengkap di dunia dalam satu aplikasi.',
            dipelajari: 'Seleksi objek presisi, digital imaging, manipulasi foto iklan, dan desain poster kompleks.',
            output: 'Menguasai software standar industri untuk olah gambar dan desain grafis.',
          },
          {
            id: 'trmg-m11',
            name: 'Adobe Illustrator',
            analogi: 'Meja gambar digital khusus garis presisi—gambarnya nggak bakal pecah meski diperbesar seukuran baliho jalan raya.',
            dipelajari: 'Desain vektor, pembuatan logo profesional, ikon UI, dan ilustrasi karakter.',
            output: 'Mampu memproduksi logo brand, ilustrasi, dan aset vektor siap cetak maupun digital.',
          },
          {
            id: 'trmg-m12',
            name: 'HTML/CSS/JS Basic',
            analogi: 'Memahami bahasa dasar tukang bangunan (programmer) agar desain buatanmu gampang diwujudkan jadi website asli.',
            dipelajari: 'Dasar struktur kode web (HTML), styling (CSS), dan interaksi ringan (JS).',
            output: 'Jadi desainer yang "melek kode" sehingga lebih dicari perusahaan teknologi.',
          },
          {
            id: 'trmg-m13',
            name: 'Webflow',
            analogi: 'Alat pembuat website visual kelas profesional yang menghasilkan kode bersih tanpa harus ngoding manual dari nol.',
            dipelajari: 'Membangun website kompleks, CMS (blog/katalog), dan interaksi web custom di Webflow.',
            output: 'Bisa membuka jasa pembuatan website profesional atau bekerja sebagai Webflow Developer.',
          },
          {
            id: 'trmg-m14',
            name: 'Final Project (Animasi / Short Movie / UI/UX / Branding)',
            analogi: 'Pameran karya puncak sebelum lulus—bukti nyata keahlianmu yang siap dipamerkan ke klien atau HRD perusahaan.',
            dipelajari: 'Eksekusi proyek kreatif skala penuh dari riset, konsep, produksi, hingga presentasi akhir.',
            output: 'Portofolio unggulan berstandar industri yang langsung menjual saat melamar kerja.',
          },
        ],
      },
      {
        id: 'smt-7-8',
        label: 'Semester 07-08',
        shortLabel: 'Smt 07–08',
        items: [
          {
            id: 'trmg-m15',
            name: 'Magang atau PKL',
            analogi: 'Terjun langsung merasakan atmosfer kerja di agensi kreatif, rumah produksi, atau perusahaan startup.',
            dipelajari: 'Mengerjakan proyek desain/multimedia asli untuk klien nyata.',
            output: 'Pengalaman industri, jaringan profesional, dan peluang langsung direkrut.',
          },
        ],
      },
    ],
    prospek: [
      {
        id: 'trmg-k1',
        name: 'UI/UX Designer',
        ngapainAja: 'Merancang tampilan dan alur penggunaan aplikasi HP atau website agar orang nggak bingung saat memakainya.',
        contohTugas: 'Riset kebutuhan user, bikin wireframe & desain layar di Figma, lalu tes ke pengguna sebelum dikoding programmer.',
      },
      {
        id: 'trmg-k2',
        name: 'Product Designer',
        ngapainAja: 'Gabungan desainer UI/UX dan pemikir bisnis—memastikan produk digital nggak cuma cantik, tapi juga memecahkan masalah dan menghasilkan uang.',
        contohTugas: 'Merancang fitur baru aplikasi bersama tim produk, bikin design system, dan meningkatkan kenyamanan pengguna.',
      },
      {
        id: 'trmg-k3',
        name: 'Graphic & Brand Designer',
        ngapainAja: 'Menciptakan wajah dan identitas visual sebuah merek agar mudah diingat dan terlihat profesional di mata pelanggan.',
        contohTugas: 'Bikin logo, panduan warna brand, kemasan produk, poster iklan, dan desain media sosial.',
      },
      {
        id: 'trmg-k4',
        name: 'Motion Graphic & 3D Artist',
        ngapainAja: 'Membuat konten visual bergerak (animasi 2D/3D) untuk iklan digital, video penjelasan produk, atau aset visual website.',
        contohTugas: 'Bikin animasi logo, iklan produk 3D yang melayang-layang, dan video explainer animasi.',
      },
      {
        id: 'trmg-k5',
        name: 'Framer / Webflow Developer',
        ngapainAja: 'Mengubah desain website menjadi website asli yang hidup, interaktif, dan online menggunakan platform No-Code modern.',
        contohTugas: 'Bangun website company profile, landing page produk, atau portofolio klien dengan animasi halus di Framer/Webflow.',
      },
      {
        id: 'trmg-k6',
        name: 'Videographer & Editor',
        ngapainAja: 'Merekam dan mengolah video menjadi tontonan yang menarik, sinematik, dan efektif untuk promosi maupun hiburan.',
        contohTugas: 'Syuting video profil/iklan, atur pencahayaan, color grading, tambah musik/efek suara, dan edit video siap tayang.',
      },
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
          {
            id: 'trpl-m1',
            name: 'Dasar Pemrograman (HTML, CSS, JavaScript)',
            analogi: 'Membangun rumah: HTML itu temboknya, CSS itu catnya, JavaScript itu saklar lampu & pintu otomatisnya.',
            dipelajari: 'Struktur halaman web, styling dasar, dan logika pemrograman web.',
            output: 'Bisa membuat halaman website interaktif pertama dari nol.',
          },
          {
            id: 'trpl-m2',
            name: 'Git & Version Control (GitHub/GitLab)',
            analogi: 'Fitur "Save Game" berlapis—kalau kode error bisa mundur ke titik aman, dan kerja tim nggak saling timpa.',
            dipelajari: 'Commit, branch, merge, pull request, dan kolaborasi kode tim.',
            output: 'Terbiasa kerja dengan standar alur kerja programmer profesional.',
          },
          {
            id: 'trpl-m3',
            name: 'Database MySQL Dasar',
            analogi: 'Lemari arsip digital super rapi yang bisa mencari ribuan data dalam sepersekian detik.',
            dipelajari: 'Desain tabel, relasi data, dan perintah SQL untuk simpan/cari data.',
            output: 'Bisa merancang penyimpanan data untuk aplikasi kasir, sekolah, atau toko online.',
          },
          {
            id: 'trpl-m4',
            name: 'PHP Dasar & Laravel Basic',
            analogi: 'Mesin penggerak di balik layar (dapur) yang mengolah pesanan pengguna dari halaman website.',
            dipelajari: 'Logika backend PHP, konsep MVC, routing, dan fitur CRUD di Laravel.',
            output: 'Bisa membuat sistem web dinamis seperti sistem absensi atau blog.',
          },
          {
            id: 'trpl-m5',
            name: 'Next.js Basic (React + SSR/SSG)',
            analogi: 'Etalase toko modern yang tampilannya super cepat dibuka dan ramah mesin pencari Google.',
            dipelajari: 'Komponen React, routing halaman Next.js, dan rendering cepat (SSR/SSG).',
            output: 'Bisa membangun tampilan web modern sekelas startup teknologi.',
          },
          {
            id: 'trpl-m6',
            name: 'UI/UX & Tailwind CSS',
            analogi: 'Menata tata letak ruangan agar nyaman dipakai sekaligus menghiasnya dengan cepat pakai blok desain siap pakai.',
            dipelajari: 'Prinsip kenyamanan tampilan web dan styling cepat responsif dengan Tailwind CSS.',
            output: 'Website terlihat estetik, modern, dan rapi di layar HP maupun laptop.',
          },
          {
            id: 'trpl-m7',
            name: 'Laravel Eloquent Relationship & API',
            analogi: 'Menghubungkan berbagai laci arsip (misal data Pembeli terhubung otomatis ke data Pesanan).',
            dipelajari: 'Relasi database kompleks di Laravel dan menyiapkan data dalam format JSON.',
            output: 'Mampu mengolah data aplikasi berskala menengah hingga besar dengan rapi.',
          },
          {
            id: 'trpl-m8',
            name: 'REST API dengan Laravel',
            analogi: 'Pelayan restoran yang mengantar data dari dapur (server) ke berbagai meja (web & aplikasi HP).',
            dipelajari: 'Pembuatan endpoint API standar industri (GET, POST, PUT, DELETE).',
            output: 'Satu backend Laravel bisa dipakai bareng oleh website dan aplikasi Android/iOS.',
          },
          {
            id: 'trpl-m9',
            name: 'Next.js + API Integration',
            analogi: 'Menyambungkan layar menu digital ke dapur agar daftar menu dan harga selalu update otomatis.',
            dipelajari: 'Fetch data dari API, loading state, dan manajemen error di Next.js.',
            output: 'Tampilan frontend Next.js bisa menampilkan dan mengirim data asli ke server.',
          },
          {
            id: 'trpl-m10',
            name: 'Authentication & Authorization (JWT/OAuth)',
            analogi: 'Kartu akses gedung—memastikan siapa kamu (Login) dan ruangan mana saja yang boleh kamu masuki (Admin vs User).',
            dipelajari: 'Sistem login aman, token JWT, dan login pakai akun Google (OAuth).',
            output: 'Aplikasi punya sistem keamanan akun yang kuat dan nggak gampang dibobol.',
          },
          {
            id: 'trpl-m11',
            name: 'Deployment (VPS/Shared Hosting/Netlify/Vercel)',
            analogi: 'Memindahkan toko yang sudah jadi dari garasi rumah ke ruko pinggir jalan raya agar bisa dikunjungi semua orang.',
            dipelajari: 'Setting domain, server VPS, dan upload web ke Vercel/Netlify.',
            output: 'Website buatanmu resmi online dan bisa diakses lewat link asli.',
          },
        ],
      },
      {
        id: 'smt-3-4',
        label: 'Semester 03-04',
        shortLabel: 'Smt 03–04',
        items: [
          {
            id: 'trpl-m12',
            name: 'Laravel + Next.js Fullstack Integration',
            analogi: 'Menggabungkan dapur canggih dan ruang makan mewah menjadi satu restoran siap beroperasi penuh.',
            dipelajari: 'Arsitektur proyek fullstack utuh dari database hingga antarmuka pengguna.',
            output: 'Bisa membangun aplikasi web utuh sendirian dari nol sampai jadi.',
          },
          {
            id: 'trpl-m13',
            name: 'Realtime App (Laravel WebSocket / Pusher)',
            analogi: 'Seperti chat WhatsApp—pesan dan notifikasi langsung muncul detik itu juga tanpa perlu refresh halaman.',
            dipelajari: 'Event broadcasting, WebSocket, dan notifikasi/chat langsung.',
            output: 'Bisa bikin fitur live chat, notifikasi pesanan masuk, atau tracking kurir realtime.',
          },
          {
            id: 'trpl-m14',
            name: 'Payment Gateway (Midtrans/Xendit)',
            analogi: 'Kasir otomatis 24 jam yang langsung mengecek pembayaran QRIS, Transfer Bank, atau E-Wallet tanpa cek mutasi manual.',
            dipelajari: 'Integrasi pembayaran online, webhook status bayar, dan keamanan transaksi.',
            output: 'Bisa membuat toko online atau sistem booking yang bisa menerima pembayaran nyata.',
          },
          {
            id: 'trpl-m15',
            name: 'Advanced Security & Optimization',
            analogi: 'Memasang kunci ganda sekaligus men-tune up mesin mobil biar kencang tapi tetap irit bensin.',
            dipelajari: 'Cegah serangan SQL Injection/XSS, caching database, dan optimasi kecepatan loading.',
            output: 'Aplikasi tetap ngebut dan aman meski dipakai ribuan orang bersamaan.',
          },
          {
            id: 'trpl-m16',
            name: 'Testing & CI/CD',
            analogi: 'Jalur uji kelayakan mobil otomatis di pabrik sebelum dikirim ke pembeli.',
            dipelajari: 'Automated testing untuk deteksi bug dini dan auto-deploy saat kode di-update.',
            output: 'Aplikasi minim error dan proses update fitur baru berjalan otomatis.',
          },
          {
            id: 'trpl-m17',
            name: 'Dart Fundamental',
            analogi: 'Belajar kosakata dan tata bahasa baru sebelum mulai menulis buku aplikasi mobile.',
            dipelajari: 'Sintaks bahasa Dart, OOP (Object-Oriented Programming), dan async programming.',
            output: 'Siap membangun logika aplikasi mobile menggunakan Flutter.',
          },
          {
            id: 'trpl-m18',
            name: 'Flutter Basic (Widget, State, Layout)',
            analogi: 'Menyusun balok LEGO untuk membentuk tombol, menu, dan halaman aplikasi HP.',
            dipelajari: 'Widget dasar Flutter, tata letak responsif layar HP, dan navigasi dasar.',
            output: 'Bisa membuat tampilan aplikasi Android & iOS dari satu kode yang sama.',
          },
          {
            id: 'trpl-m19',
            name: 'API Integration (REST API Mobile)',
            analogi: 'Menghubungkan aplikasi HP ke internet agar bisa menampilkan berita, produk, atau profil pengguna secara langsung.',
            dipelajari: 'HTTP request di Flutter, parsing JSON, dan penanganan koneksi internet.',
            output: 'Aplikasi mobile bisa berkomunikasi langsung dengan server backend.',
          },
          {
            id: 'trpl-m20',
            name: 'State Management (Provider / Riverpod)',
            analogi: 'Papan pengumuman pusat di dalam aplikasi—kalau barang di keranjang belanja ditambah, angka di pojok atas ikut berubah otomatis.',
            dipelajari: 'Mengelola aliran data antar halaman aplikasi agar rapi dan nggak lemot.',
            output: 'Aplikasi mobile terasa mulus dan responsif saat dipakai.',
          },
          {
            id: 'trpl-m21',
            name: 'Local Database (SQFlite / Hive)',
            analogi: 'Buku catatan saku di dalam HP—data tetap tersimpan dan bisa dibuka meski sedang nggak ada sinyal internet.',
            dipelajari: 'Penyimpanan data offline di memori HP menggunakan SQFlite dan Hive.',
            output: 'Aplikasi tetap bisa dipakai dalam mode offline (seperti aplikasi catatan atau kasir).',
          },
        ],
      },
      {
        id: 'smt-5-6',
        label: 'Semester 05-06',
        shortLabel: 'Smt 05–06',
        items: [
          {
            id: 'trpl-m22',
            name: 'Flutter Navigation & Modularization',
            analogi: 'Membagi proyek bangunan besar ke beberapa ruangan terpisah agar gampang dirawat dan dikembangkan tim.',
            dipelajari: 'Routing kompleks (GoRouter) dan memecah kode menjadi modul-modul rapi.',
            output: 'Kode aplikasi skala besar tetap mudah dibaca dan dikerjakan bareng tim.',
          },
          {
            id: 'trpl-m23',
            name: 'Advanced State Management (BLoC)',
            analogi: 'Sistem manajemen lalu lintas standar perusahaan besar yang memisahkan total antara tampilan dan logika bisnis.',
            dipelajari: 'Pola arsitektur BLoC (Business Logic Component) untuk aplikasi mobile skala enterprise.',
            output: 'Siap bekerja di tim mobile developer perusahaan startup/korporat besar.',
          },
          {
            id: 'trpl-m24',
            name: 'Payment Gateway Integration (Mobile)',
            analogi: 'Memasukkan mesin kasir QRIS/E-Wallet langsung ke dalam aplikasi HP buatanmu.',
            dipelajari: 'Alur checkout dan pembayaran digital langsung di dalam aplikasi Flutter.',
            output: 'Aplikasi mobile siap menghasilkan transaksi finansial secara otomatis.',
          },
          {
            id: 'trpl-m25',
            name: 'Firebase (Auth, Push Notification, Analytics)',
            analogi: 'Mesin serba guna buatan Google untuk login instan, kirim notifikasi ke layar HP, dan melacak jumlah pengguna.',
            dipelajari: 'Integrasi Firebase Auth, notifikasi pop-up HP, dan analitik perilaku user.',
            output: 'Aplikasi punya fitur notifikasi promo/chat layaknya aplikasi e-commerce besar.',
          },
          {
            id: 'trpl-m26',
            name: 'API Laravel + Flutter Integration',
            analogi: 'Mengawinkan kekuatan backend web (Laravel) dengan aplikasi mobile (Flutter) jadi satu ekosistem utuh.',
            dipelajari: 'Sinkronisasi data penuh antara panel admin web dan aplikasi HP pengguna.',
            output: 'Bisa bikin sistem ojek online, absensi GPS, atau toko online lengkap (Web Admin + App User).',
          },
          {
            id: 'trpl-m27',
            name: 'Clean Architecture (Domain, Data, Presentation)',
            analogi: 'Menata dapur, gudang, dan ruang tamu dengan sekat jelas—kalau mau ganti dekorasi, gudang nggak ikut berantakan.',
            dipelajari: 'Standar struktur kode profesional agar aplikasi awet dan mudah di-upgrade bertahun-tahun.',
            output: 'Kode aplikasi berstandar Senior Mobile Developer.',
          },
          {
            id: 'trpl-m28',
            name: 'Flutter Testing (Unit, Widget, Integration)',
            analogi: 'Robot penguji yang otomatis menekan semua tombol di aplikasi untuk memastikan nggak ada yang macet/crash.',
            dipelajari: 'Pengujian otomatis logika, tampilan widget, dan alur pengguna penuh.',
            output: 'Aplikasi dirilis dengan kualitas tinggi dan bebas bug fatal.',
          },
          {
            id: 'trpl-m29',
            name: 'Advanced Firebase (Realtime DB, Firestore, Cloud Messaging)',
            analogi: 'Database awan super cepat yang otomatis menyinkronkan data ke semua HP pengguna dalam hitungan milidetik.',
            dipelajari: 'Database NoSQL Firestore, sinkronisasi realtime, dan pengiriman notifikasi tertarget.',
            output: 'Bisa membangun aplikasi chat realtime, tracking lokasi, atau game ringan multiplayer.',
          },
          {
            id: 'trpl-m30',
            name: 'Play Store Deployment',
            analogi: 'Memajang produk buatanmu secara resmi di etalase mall terbesar dunia (Google Play Store).',
            dipelajari: 'Build file rilis (AAB), signing key, kebijakan Google Play, dan optimasi halaman toko.',
            output: 'Punya aplikasi resmi yang bisa di-download siapa saja di Google Play Store.',
          },
          {
            id: 'trpl-m31',
            name: 'CI/CD Mobile (Codemagic / GitHub Actions)',
            analogi: 'Pabrik otomatis yang langsung membungkus dan mengirim update aplikasi ke Play Store begitu kamu selesai ngoding.',
            dipelajari: 'Pipeline otomatis build & release aplikasi mobile.',
            output: 'Proses update aplikasi jadi super cepat tanpa perlu build manual di laptop.',
          },
        ],
      },
      {
        id: 'smt-7-8',
        label: 'Semester 07-08',
        shortLabel: 'Smt 07–08',
        items: [
          {
            id: 'trpl-m32',
            name: 'Magang atau PKL',
            analogi: 'Terjun langsung ke perusahaan teknologi/software house sebelum lulus kuliah.',
            dipelajari: 'Ikut mengerjakan proyek aplikasi nyata bareng tim developer profesional.',
            output: 'Portofolio proyek industri, pengalaman kerja nyata, dan peluang langsung dikontrak kerja.',
          },
        ],
      },
    ],
    prospek: [
      {
        id: 'trpl-k1',
        name: 'Fullstack Web Developer',
        ngapainAja: 'Programmer serba bisa yang mengerjakan tampilan depan website (Frontend) sekaligus mesin/database di belakangnya (Backend).',
        contohTugas: 'Membangun website toko online, sistem kasir, atau portal perusahaan dari nol sampai online.',
      },
      {
        id: 'trpl-k2',
        name: 'Mobile App Developer (Flutter)',
        ngapainAja: 'Membuat aplikasi HP untuk Android dan iPhone yang biasa kita download di Play Store / App Store.',
        contohTugas: 'Ngoding tampilan aplikasi, sambungin ke server, bikin fitur notifikasi, dan rilis ke Play Store.',
      },
      {
        id: 'trpl-k3',
        name: 'Backend Developer',
        ngapainAja: 'Arsitek di balik layar yang mengurus logika bisnis, keamanan login, transaksi pembayaran, dan kecepatan database.',
        contohTugas: 'Bikin API pakai Laravel, integrasi Midtrans/Xendit, dan memastikan data ribuan user tersimpan aman.',
      },
      {
        id: 'trpl-k4',
        name: 'Frontend Developer',
        ngapainAja: 'Menerjemahkan desain UI/UX menjadi halaman website asli yang interaktif, cantik, dan cepat dibuka.',
        contohTugas: 'Ngoding tampilan pakai Next.js & Tailwind CSS, bikin animasi web, dan sambungin ke data API.',
      },
      {
        id: 'trpl-k5',
        name: 'Software Engineer',
        ngapainAja: 'Merancang solusi sistem perangkat lunak skala besar dengan arsitektur kode yang rapi, teruji, dan tahan banting.',
        contohTugas: 'Merancang arsitektur sistem, menulis automated testing, dan mengoptimalkan performa aplikasi.',
      },
      {
        id: 'trpl-k6',
        name: 'DevOps Junior',
        ngapainAja: 'Mengurus proses perilisan aplikasi agar otomatis, lancar, dan selalu online di server cloud.',
        contohTugas: 'Setting CI/CD (GitHub Actions/Codemagic), kelola server VPS/Vercel, dan pantau error aplikasi.',
      },
    ],
    catatan:
      'Cocok untuk kamu yang suka ngoding, membangun sistem web/mobile dari nol, dan memecahkan masalah lewat logika.',
  },

  engineer: {
    code: 'TRKJ',
    icon: '🛠️',
    title: 'Teknologi Rekayasa Komputer Jaringan (TRKJ)',
    tagline: 'Membangun, mengamankan, dan mengotomatisasi infrastruktur jaringan modern berskala enterprise dan cloud.',
    accentRgb: '255, 77, 90',
    kurikulum: [
      {
        id: 'smt-1-2',
        label: 'Semester 01-02',
        shortLabel: 'Smt 01–02',
        items: [
          {
            id: 'trkj-m1',
            name: 'Networking Fundamental',
            analogi: 'Belajar rambu lalu lintas dan aturan jalan raya sebelum menyetir di jalan tol.',
            dipelajari: 'Cara perangkat saling terhubung, IP Address & Subnetting, crimping kabel LAN, dan dasar Wi-Fi.',
            output: 'Bisa merakit jaringan lokal (LAN) kantor/rumah dari nol dan paham penyebab internet putus.',
          },
          {
            id: 'trkj-m2',
            name: 'MTCNA',
            analogi: 'Jadi manajer gerbang tol yang mengatur siapa boleh lewat dan seberapa cepat lajunya.',
            dipelajari: 'Dasar router MikroTik, manajemen bandwidth (biar Wi-Fi nggak lemot), hotspot voucher, dan firewall dasar.',
            output: 'Bisa bikin sistem Wi-Fi hotspot seperti di kafe/kosan & siap ujian sertifikasi internasional MikroTik.',
          },
          {
            id: 'trkj-m3',
            name: 'MTCRE',
            analogi: 'Seperti Google Maps yang otomatis cari jalur alternatif kalau jalan utama macet atau putus.',
            dipelajari: 'Static & Dynamic Routing (OSPF), VPN antar cabang kantor, dan failover (pindah jalur internet otomatis).',
            output: 'Bisa menghubungkan jaringan antar gedung/kota agar tetap online 24 jam tanpa putus.',
          },
          {
            id: 'trkj-m4',
            name: 'MTCINE',
            analogi: 'Mengatur jalur penerbangan internasional antar negara dan antar provider internet besar (ISP).',
            dipelajari: 'BGP Routing skala besar, MPLS, dan manajemen trafik jaringan tingkat operator/ISP.',
            output: 'Siap menangani jaringan tulang punggung (backbone) di perusahaan ISP atau Data Center.',
          },
        ],
      },
      {
        id: 'smt-3-4',
        label: 'Semester 03-04',
        shortLabel: 'Smt 03–04',
        items: [
          {
            id: 'trkj-m5',
            name: 'CCNA (Semester 3)',
            analogi: 'Belajar menerbangkan pesawat komersial standar internasional yang dipakai perusahaan besar.',
            dipelajari: 'Konfigurasi Switch & Router Cisco, VLAN, routing enterprise, dan keamanan jaringan dasar Cisco.',
            output: 'Menguasai perangkat jaringan standar bank, BUMN, dan perusahaan multinasional.',
          },
          {
            id: 'trkj-m6',
            name: 'CCNP (Semester 4)',
            analogi: 'Naik level jadi kapten pilot senior yang sanggup menangani rute rumit dan kondisi darurat di udara.',
            dipelajari: 'Arsitektur jaringan enterprise tingkat lanjut, troubleshooting kompleks, high availability, dan otomatisasi Cisco.',
            output: 'Siap menduduki posisi Senior Network Engineer di perusahaan skala besar.',
          },
        ],
      },
      {
        id: 'smt-5-6',
        label: 'Semester 05-06',
        shortLabel: 'Smt 05–06',
        items: [
          {
            id: 'trkj-m7',
            name: 'Linux & Automation',
            analogi: 'Punya asisten robot yang otomatis mengecek dan memperbaiki ratusan server tanpa diklik manual satu-satu.',
            dipelajari: 'Perintah terminal Linux (Ubuntu/Debian), manajemen server, dan otomatisasi jaringan (Ansible/Python).',
            output: 'Mampu mengelola banyak server sekaligus dengan cepat dan minim human error.',
          },
          {
            id: 'trkj-m8',
            name: 'Cloud Computing',
            analogi: 'Menyewa gedung kantor virtual di awan—nggak perlu beli server fisik mahal, tinggal klik langsung jadi.',
            dipelajari: 'Virtualisasi server, deployment layanan cloud (AWS/GCP/Proxmox), dan manajemen storage online.',
            output: 'Bisa membangun infrastruktur server modern berbasis cloud yang hemat biaya dan fleksibel.',
          },
          {
            id: 'trkj-m9',
            name: 'Firewall (PaloAlto, Fortinet, Cisco ASA)',
            analogi: 'Pasukan keamanan elit + mesin X-Ray bandara yang menyaring semua ancaman sebelum masuk sistem.',
            dipelajari: 'Blokir serangan hacker/DDoS, filter web berbahaya, IPS/IDS, dan keamanan VPN perusahaan.',
            output: 'Mampu mengamankan data sensitif dan jaringan perusahaan dari serangan siber.',
          },
        ],
      },
      {
        id: 'smt-7-8',
        label: 'Semester 07-08',
        shortLabel: 'Smt 07–08',
        items: [
          {
            id: 'trkj-m10',
            name: 'Magang atau PKL',
            analogi: 'Terjun langsung ke dunia kerja nyata sebelum wisuda.',
            dipelajari: 'Praktik langsung di perusahaan IT, ISP, atau instansi mitra.',
            output: 'Punya pengalaman kerja asli, relasi industri, dan peluang langsung direkrut.',
          },
        ],
      },
    ],
    prospek: [
      {
        id: 'trkj-k1',
        name: 'Network Engineer',
        ngapainAja: 'Merancang, memasang, dan merawat jalur internet serta jaringan komputer di kantor atau gedung agar selalu ngebut dan stabil.',
        contohTugas: 'Setting router/switch Cisco & MikroTik, narik jalur jaringan cabang baru, dan memperbaiki internet kantor yang mati.',
      },
      {
        id: 'trkj-k2',
        name: 'Cloud Infrastructure Engineer',
        ngapainAja: 'Mengelola "server di awan" tempat website dan aplikasi perusahaan berjalan agar nggak pernah down meski diakses jutaan orang.',
        contohTugas: 'Bikin server virtual di AWS/GCP, atur backup data otomatis, dan menghemat biaya server perusahaan.',
      },
      {
        id: 'trkj-k3',
        name: 'Linux SysAdmin',
        ngapainAja: 'Menjadi "penjaga mesin" server berbasis Linux yang menjadi otak dari website, email, dan database perusahaan.',
        contohTugas: 'Install aplikasi di server lewat terminal, update keamanan server, dan memantau performa CPU/RAM server.',
      },
      {
        id: 'trkj-k4',
        name: 'Network Security Engineer',
        ngapainAja: 'Menjadi "bodyguard digital" yang melindungi jaringan perusahaan dari pencurian data, virus, dan serangan hacker.',
        contohTugas: 'Setting firewall PaloAlto/Fortinet, menutup celah keamanan, dan memantau lalu lintas data yang mencurigakan.',
      },
      {
        id: 'trkj-k5',
        name: 'NOC Specialist (Network Operations Center)',
        ngapainAja: 'Menjadi "menara kontrol" yang memantau kesehatan jaringan 24 jam lewat layar monitor besar (biasanya di ISP atau Data Center).',
        contohTugas: 'Mendeteksi kabel fiber optik putus atau server down, lalu langsung mengeksekusi perbaikan cepat.',
      },
      {
        id: 'trkj-k6',
        name: 'DevOps Junior',
        ngapainAja: 'Menjembatani tim programmer dan tim server agar proses rilis aplikasi berjalan otomatis tanpa ribet.',
        contohTugas: 'Bikin skrip otomatisasi server, kelola Docker/kontainer, dan memastikan aplikasi lancar saat di-update.',
      },
    ],
    catatan:
      'Cocok untuk kamu yang suka ngoprek jaringan, server Linux, cloud computing, dan keamanan siber.',
  },
};

let activeJurusan = null;
let activeSemesterFilter = 'all';
let activePreview = null; // { type: 'materi' | 'karier', id: string }

/* =========================================
   Helper Lookups
   ========================================= */
function findMateriById(data, itemId) {
  for (const group of data.kurikulum) {
    const found = group.items.find((item) => item.id === itemId);
    if (found) return { item: found, semesterLabel: group.label };
  }
  return null;
}

function findKarierById(data, karierId) {
  return data.prospek.find((k) => k.id === karierId) || null;
}

/* =========================================
   Render Functions
   ========================================= */
function renderCurriculumGroups(kurikulum, filterId) {
  const filtered =
    filterId === 'all'
      ? kurikulum
      : kurikulum.filter((group) => group.id === filterId);

  return filtered
    .map((group) => {
      const itemsHtml = group.items
        .map((item) => {
          const isActive = activePreview && activePreview.type === 'materi' && activePreview.id === item.id;
          return `
            <li>
              <button
                type="button"
                class="materi-pill${isActive ? ' active' : ''}"
                data-materi-id="${item.id}"
                aria-pressed="${String(isActive)}"
              >
                <span class="check-icon" aria-hidden="true">✓</span>
                <span>${item.name}</span>
              </button>
            </li>`;
        })
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

function renderPreviewSlot(data) {
  const slot = document.getElementById('preview-slot');
  if (!slot) return;

  if (!activePreview) {
    slot.innerHTML = `
      <div class="preview-empty">
        <span aria-hidden="true">✨</span>
        <span>Klik salah satu badge <strong>Materi Kurikulum</strong> atau <strong>Prospek Karier</strong> di atas untuk melihat penjelasan santai &amp; contoh nyatanya.</span>
      </div>
    `;
    return;
  }

  if (activePreview.type === 'materi') {
    const result = findMateriById(data, activePreview.id);
    if (!result) return;
    const { item, semesterLabel } = result;

    slot.innerHTML = `
      <div class="preview-card" role="region" aria-label="Preview Materi ${item.name}">
        <div class="preview-header">
          <div>
            <span class="preview-meta">Materi Kurikulum &bull; ${semesterLabel}</span>
            <h5 class="preview-title">${item.name}</h5>
          </div>
          <button type="button" class="preview-close" id="preview-close-btn" aria-label="Tutup preview">&times;</button>
        </div>
        <div class="preview-grid cols-3">
          <div class="preview-item">
            <div class="preview-item-label">💡 Analogi Simpel</div>
            <p>${item.analogi}</p>
          </div>
          <div class="preview-item">
            <div class="preview-item-label">📚 Yang Dipelajari</div>
            <p>${item.dipelajari}</p>
          </div>
          <div class="preview-item">
            <div class="preview-item-label">🎯 Output / Bisa Bikin Apa?</div>
            <p>${item.output}</p>
          </div>
        </div>
      </div>
    `;
  } else if (activePreview.type === 'karier') {
    const karier = findKarierById(data, activePreview.id);
    if (!karier) return;

    slot.innerHTML = `
      <div class="preview-card" role="region" aria-label="Preview Karier ${karier.name}">
        <div class="preview-header">
          <div>
            <span class="preview-meta">Prospek Karier &bull; ${data.code}</span>
            <h5 class="preview-title">${karier.name}</h5>
          </div>
          <button type="button" class="preview-close" id="preview-close-btn" aria-label="Tutup preview">&times;</button>
        </div>
        <div class="preview-grid cols-2">
          <div class="preview-item">
            <div class="preview-item-label">💼 Ngapain Aja Kerjanya?</div>
            <p>${karier.ngapainAja}</p>
          </div>
          <div class="preview-item">
            <div class="preview-item-label">🛠️ Contoh Tugas Nyata</div>
            <p>${karier.contohTugas}</p>
          </div>
        </div>
      </div>
    `;
  }

  const previewCloseBtn = document.getElementById('preview-close-btn');
  if (previewCloseBtn) {
    previewCloseBtn.addEventListener('click', () => {
      clearActivePreview(data);
    });
  }

  slot.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function syncBadgeActiveStates() {
  const detailBox = document.getElementById('detail');
  if (!detailBox) return;

  detailBox.querySelectorAll('.materi-pill').forEach((btn) => {
    const isActive =
      activePreview &&
      activePreview.type === 'materi' &&
      btn.dataset.materiId === activePreview.id;
    btn.classList.toggle('active', Boolean(isActive));
    btn.setAttribute('aria-pressed', String(Boolean(isActive)));
  });

  detailBox.querySelectorAll('.career-chip').forEach((btn) => {
    const isActive =
      activePreview &&
      activePreview.type === 'karier' &&
      btn.dataset.karierId === activePreview.id;
    btn.classList.toggle('active', Boolean(isActive));
    btn.setAttribute('aria-pressed', String(Boolean(isActive)));
  });
}

function selectPreview(data, type, id) {
  if (activePreview && activePreview.type === type && activePreview.id === id) {
    clearActivePreview(data);
    return;
  }

  activePreview = { type, id };
  syncBadgeActiveStates();
  renderPreviewSlot(data);
}

function clearActivePreview(data) {
  activePreview = null;
  syncBadgeActiveStates();
  renderPreviewSlot(data);
}

function bindCurriculumClicks(data) {
  const curriculumContainer = document.getElementById('curriculum-list');
  if (!curriculumContainer) return;

  curriculumContainer.querySelectorAll('.materi-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectPreview(data, 'materi', btn.dataset.materiId);
    });
  });
}

/* =========================================
   Detail Panel Rendering & Interactions
   ========================================= */
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
  activePreview = null;
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
    .map(
      (role) => `
      <button
        type="button"
        class="career-chip"
        data-karier-id="${role.id}"
        aria-pressed="false"
      >
        <span>${role.name}</span>
      </button>`
    )
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
        <div class="detail-col-heading">
          <h4>Materi Kurikulum</h4>
          <span class="click-hint">Klik materi untuk preview</span>
        </div>
        <div class="semester-tabs" role="tablist" aria-label="Filter Semester">
          ${semesterTabsHtml}
        </div>
        <div class="curriculum-scroll" id="curriculum-list">
          ${renderCurriculumGroups(data.kurikulum, activeSemesterFilter)}
        </div>
      </div>

      <div class="detail-col detail-col-right">
        <div>
          <div class="detail-col-heading">
            <h4>Prospek Karier</h4>
            <span class="click-hint">Klik karier untuk info</span>
          </div>
          <div class="career-chips" id="career-list">
            ${prospekChips}
          </div>
        </div>
        <div class="detail-note">
          <span class="detail-note-label">Cocok Untuk</span>
          ${data.catatan}
        </div>
      </div>
    </div>

    <div class="preview-slot" id="preview-slot" aria-live="polite"></div>
  `;

  // Replay reveal animation cleanly when switching majors
  detailBox.classList.remove('hidden');
  detailBox.style.animation = 'none';
  void detailBox.offsetWidth;
  detailBox.style.animation = '';

  renderPreviewSlot(data);
  bindCurriculumClicks(data);

  const closeBtn = document.getElementById('detail-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeDetail);
  }

  // Bind career chip clicks
  const careerList = document.getElementById('career-list');
  if (careerList) {
    careerList.querySelectorAll('.career-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectPreview(data, 'karier', btn.dataset.karierId);
      });
    });
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
        bindCurriculumClicks(data);
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
  activePreview = null;
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
    if (e.key === 'Escape') {
      if (activePreview && activeJurusan) {
        clearActivePreview(JURUSAN_DATA[activeJurusan]);
      } else if (activeJurusan) {
        closeDetail();
      }
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
