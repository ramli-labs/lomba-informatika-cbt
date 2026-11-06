// =====================================================================
// GENERATOR TAMBAHAN KATEGORI 2 (KELAS 9)
// Membutuhkan R, pilih, fmt, pengecohAngka, pengecohTeks dari generator.js
// =====================================================================

// Generator berbasis tabel fakta: tanya → jawab, pengecoh diambil dari jawaban lain
function genTabel(t, data, tanya, bahas, ekstra = []) {
  return { t, f() {
    const [k, v] = pilih(data);
    const lain = [...new Set(data.map(d => d[1]).filter(x => x !== v))].sort(() => Math.random() - 0.5).concat(ekstra);
    return { q: tanya(k), o: [v, ...lain.slice(0, 3)], e: bahas(k, v) };
  }};
}

GEN.k2.push(
  // ---------- Hitungan: biner ----------
  { t: "hitung", f() {
    const n = R(5, 255), b = n.toString(2);
    const rinci = b.split("").map((d, i) => d === "1" ? 2 ** (b.length - 1 - i) : null).filter(x => x !== null).join(" + ");
    if (Math.random() < 0.5)
      return { q: `Bilangan biner ${b}₂ jika diubah ke desimal adalah …`, o: [n, ...pengecohAngka(n, [n + 1, n - 1, parseInt(b.split("").reverse().join(""), 2), n + 2])].map(String), e: `${rinci} = ${n}.` };
    const flip = i => b.substring(0, i) + (b[i] === "1" ? "0" : "1") + b.substring(i + 1);
    return { q: `Bilangan desimal ${n} dalam bentuk biner adalah …`, o: [b, ...pengecohTeks(b, [flip(b.length - 1), flip(1), (n + 2).toString(2), (n - 1).toString(2), flip(0) || "1" + b])], e: `${n} = ${rinci} → ${b}₂.` };
  }},
  // ---------- Hitungan: ukuran gambar ----------
  { t: "hitung", f() {
    let w, h, d, kb;
    do { w = pilih([64, 100, 128, 200, 256, 320, 400, 512, 640, 800, 1024]); h = pilih([64, 100, 128, 200, 240, 256, 320, 480, 512, 600, 768]); d = pilih([1, 8, 16, 24]); kb = w * h * d / 8 / 1024; } while (!Number.isInteger(kb) || kb < 1);
    const byte = w * h * d / 8;
    return { q: `Gambar bitmap berukuran ${w} × ${h} piksel dengan kedalaman warna ${d} bit per piksel (tanpa kompresi) berukuran … KB. (1 KB = 1.024 Byte)`, o: [kb, ...pengecohAngka(kb, [kb * 8, w * h * d / 1024, kb / 2, kb * 2])].map(x => fmt(Math.round(x * 100) / 100)), e: `${w} × ${h} × ${d} bit = ${fmt(w * h * d)} bit = ${fmt(byte)} Byte (÷ 8) = ${fmt(kb)} KB (÷ 1.024).` };
  }},
  // ---------- Keamanan: kombinasi password ----------
  { t: "keamanan", f() {
    const jenis = pilih([["angka (0–9)", 10], ["huruf kecil (a–z)", 26], ["huruf kapital dan kecil (A–Z, a–z)", 52]]);
    const p = jenis[1] === 10 ? R(3, 6) : jenis[1] === 26 ? R(2, 3) : 2;
    const ans = jenis[1] ** p;
    return { q: `Sebuah kata sandi terdiri atas tepat ${p} karakter, masing-masing berupa ${jenis[0]}. Banyaknya kemungkinan kombinasi adalah …`, o: [ans, ...pengecohAngka(ans, [jenis[1] * p, p ** jenis[1] > 1e9 ? ans * 10 : p ** jenis[1], jenis[1] ** (p - 1), jenis[1] ** (p + 1)], 1)].map(fmt), e: `Setiap posisi punya ${jenis[1]} pilihan, ada ${p} posisi: ${jenis[1]}^${p} = ${fmt(ans)}.` };
  }},
  // ---------- Software: ASCII ----------
  { t: "software", f() {
    const besar = Math.random() < 0.5, i = R(1, 25);
    const ch = String.fromCharCode((besar ? 65 : 97) + i), kode = ch.charCodeAt(0);
    return { q: `Dalam ASCII, '${besar ? "A" : "a"}' = ${besar ? 65 : 97}. Kode ASCII untuk huruf '${ch}' adalah …`, o: [kode, ...pengecohAngka(kode, [besar ? kode + 32 : kode - 32, kode + 1, kode - 1, i + 1])].map(String), e: `'${ch}' berjarak ${i} huruf dari '${besar ? "A" : "a"}': ${besar ? 65 : 97} + ${i} = ${kode}.` };
  }},
  // ---------- Software: rumus spreadsheet ----------
  { t: "software", f() {
    const v = Array.from({ length: 5 }, () => R(50, 100));
    const sel = v.map((x, i) => `A${i + 1} = ${x}`).join(", ");
    const tipe = R(0, 4);
    if (tipe === 0) { const s = v.reduce((a, b) => a + b, 0); return { q: `Diketahui ${sel}. Hasil rumus =SUM(A1:A5) adalah …`, o: [s, ...pengecohAngka(s, [s - v[4], s / 5, Math.max(...v) * 5, s + 10])].map(x => String(Math.round(x))), e: `SUM menjumlahkan: ${v.join(" + ")} = ${s}.` }; }
    if (tipe === 1) { const s = v.reduce((a, b) => a + b, 0), r = s / 5; const rs = Number.isInteger(r) ? String(r) : r.toFixed(1).replace(".", ",");
      return { q: `Diketahui ${sel}. Hasil rumus =AVERAGE(A1:A5) adalah …`, o: [rs, ...pengecohTeks(rs, [String(s), String(Math.max(...v)), String(Math.min(...v)), String(Math.round(r) + 2), String(Math.round(r) - 3)])], e: `Rata-rata = (${v.join(" + ")}) ÷ 5 = ${s} ÷ 5 = ${rs}.` }; }
    if (tipe === 2) { const m = Math.max(...v), mi = Math.min(...v); const isMax = Math.random() < 0.5; const a = isMax ? m : mi;
      return { q: `Diketahui ${sel}. Hasil rumus =${isMax ? "MAX" : "MIN"}(A1:A5) adalah …`, o: [a, ...pengecohAngka(a, [isMax ? mi : m, v[0], v[4], v[2]])].map(String), e: `${isMax ? "MAX mengambil nilai terbesar" : "MIN mengambil nilai terkecil"}: ${a}.` }; }
    if (tipe === 3) { const x = R(55, 95), batas = pilih([70, 75, 80]); const hasil = x >= batas ? "Tuntas" : "Remedial";
      return { q: `Sel B2 berisi ${x}. Hasil rumus =IF(B2>=${batas};"Tuntas";"Remedial") adalah …`, o: [hasil, hasil === "Tuntas" ? "Remedial" : "Tuntas", "#ERROR", "B2"], e: `${x} ≥ ${batas} bernilai ${x >= batas ? "benar" : "salah"}, sehingga hasilnya "${hasil}".` }; }
    const k1 = R(0, 3), k2 = R(k1 + 1, 5), b1 = R(1, 5), b2 = R(b1 + 1, 12), K = "ABCDEF";
    const n = (k2 - k1 + 1) * (b2 - b1 + 1);
    return { q: `Banyak sel pada range ${K[k1]}${b1}:${K[k2]}${b2} adalah …`, o: [n, ...pengecohAngka(n, [(k2 - k1) * (b2 - b1), (k2 - k1 + 1) + (b2 - b1 + 1), (k2 - k1 + 1) * (b2 - b1), (k2 - k1) * (b2 - b1 + 1)], 1)].map(String), e: `Kolom ${K[k1]}–${K[k2]} = ${k2 - k1 + 1} kolom; baris ${b1}–${b2} = ${b2 - b1 + 1} baris; ${k2 - k1 + 1} × ${b2 - b1 + 1} = ${n} sel.` };
  }},
  // ---------- Software: ekstensi file ----------
  genTabel("software", [
    [".docx", "Dokumen pengolah kata"], [".xlsx", "Lembar kerja (spreadsheet)"], [".pptx", "Presentasi"], [".pdf", "Dokumen portabel siap cetak"],
    [".mp3", "Audio"], [".mp4", "Video"], [".zip", "Arsip terkompresi"], [".exe", "Program yang dapat dijalankan di Windows"],
    [".apk", "Paket aplikasi Android"], [".png", "Gambar"], [".html", "Halaman web"], [".py", "Kode program Python"], [".csv", "Data tabel berpemisah koma"]
  ], k => `File dengan ekstensi ${k} umumnya merupakan …`, (k, v) => `${k} = ${v}.`),
  // ---------- Software: shortcut keyboard ----------
  genTabel("software", [
    ["Ctrl + C", "Menyalin"], ["Ctrl + X", "Memotong"], ["Ctrl + V", "Menempel"], ["Ctrl + Z", "Membatalkan tindakan terakhir"],
    ["Ctrl + S", "Menyimpan"], ["Ctrl + A", "Memilih semua"], ["Ctrl + F", "Mencari teks"], ["Ctrl + P", "Mencetak"],
    ["Alt + Tab", "Berpindah antarjendela"], ["Alt + F4", "Menutup jendela aktif"], ["Windows + L", "Mengunci layar"],
    ["Windows + D", "Menampilkan desktop"], ["Ctrl + Shift + Esc", "Membuka Task Manager"], ["F2", "Mengganti nama file"]
  ], k => `Fungsi kombinasi tombol ${k} pada Windows adalah …`, (k, v) => `${k}: ${v.toLowerCase()}.`),
  // ---------- Sistem komputer: perangkat ----------
  genTabel("siskom", [
    ["ALU", "Melakukan operasi aritmetika dan logika"], ["Control Unit", "Mengendalikan aliran instruksi dan data"],
    ["RAM", "Menyimpan sementara program yang sedang berjalan"], ["ROM", "Menyimpan firmware untuk booting"],
    ["PSU", "Mengubah listrik AC menjadi DC untuk komponen"], ["GPU", "Memproses grafis dan tampilan"],
    ["Motherboard", "Papan utama penghubung semua komponen"], ["NIC", "Menghubungkan komputer ke jaringan"],
    ["Heatsink", "Membuang panas dari prosesor"], ["Cache", "Memori cepat untuk data yang sering dipakai CPU"]
  ], k => `Fungsi utama komponen ${k} adalah …`, (k, v) => `${k}: ${v.toLowerCase()}.`),
  // ---------- Sistem komputer: jenis perangkat I/O ----------
  genTabel("siskom", [
    ["Keyboard", "Perangkat input"], ["Scanner", "Perangkat input"], ["Mikrofon", "Perangkat input"], ["Webcam", "Perangkat input"],
    ["Printer", "Perangkat output"], ["Monitor", "Perangkat output"], ["Speaker", "Perangkat output"], ["Proyektor", "Perangkat output"],
    ["Layar sentuh", "Perangkat input dan output"], ["Headset bermikrofon", "Perangkat input dan output"],
    ["SSD", "Media penyimpanan"], ["Flashdisk", "Media penyimpanan"], ["Prosesor", "Perangkat pemroses"]
  ], k => `${k} termasuk …`, (k, v) => `${k} adalah ${v.toLowerCase()}.`),
  // ---------- Jaringan: perangkat ----------
  genTabel("jaringan", [
    ["Router", "Menghubungkan jaringan berbeda berdasarkan alamat IP"], ["Switch", "Meneruskan data ke port tujuan berdasarkan MAC address"],
    ["Hub", "Meneruskan data ke semua port"], ["Access point", "Memancarkan jaringan Wi-Fi"], ["Modem", "Mengubah sinyal digital ↔ analog/optik ke ISP"],
    ["Repeater", "Memperkuat sinyal agar jangkauan lebih jauh"], ["Firewall", "Menyaring lalu lintas jaringan berdasarkan aturan"]
  ], k => `Fungsi perangkat ${k} dalam jaringan adalah …`, (k, v) => `${k}: ${v.toLowerCase()}.`),
  // ---------- Jaringan: protokol ----------
  genTabel("jaringan", [
    ["DNS", "Menerjemahkan nama domain menjadi alamat IP"], ["DHCP", "Memberikan alamat IP secara otomatis"],
    ["HTTPS", "Mengakses halaman web secara terenkripsi"], ["FTP", "Mentransfer file"], ["SMTP", "Mengirim email"],
    ["IMAP", "Membaca email yang tersimpan di server"], ["SSH", "Mengakses komputer jarak jauh secara aman"]
  ], k => `Fungsi protokol ${k} adalah …`, (k, v) => `${k}: ${v.toLowerCase()}.`),
  // ---------- Keamanan: malware ----------
  genTabel("keamanan", [
    ["menyamar sebagai program berguna, padahal membuka akses bagi penyerang", "Trojan"],
    ["menyebar sendiri melalui jaringan tanpa memerlukan file inang", "Worm"],
    ["mengenkripsi file korban lalu meminta tebusan", "Ransomware"],
    ["menempel pada file lain dan aktif saat file itu dijalankan", "Virus"],
    ["memata-matai aktivitas pengguna secara diam-diam", "Spyware"],
    ["merekam setiap ketikan keyboard", "Keylogger"],
    ["menampilkan iklan berlebihan", "Adware"]
  ], k => `Malware yang ${k} disebut …`, (k, v) => `${v}: ${k}.`),
  // ---------- Keamanan: prinsip CIA ----------
  genTabel("keamanan", [
    ["Data nilai siswa bocor dan tersebar di media sosial", "Confidentiality (kerahasiaan)"],
    ["Password akun guru diketahui orang lain", "Confidentiality (kerahasiaan)"],
    ["Nilai rapor di server diubah oleh peretas", "Integrity (keutuhan)"],
    ["Isi file tugas berubah karena dirusak malware", "Integrity (keutuhan)"],
    ["Situs PPDB tidak bisa diakses karena serangan DDoS", "Availability (ketersediaan)"],
    ["Server ujian mati karena dibanjiri lalu lintas palsu", "Availability (ketersediaan)"],
  ], k => `Kejadian: "${k}". Prinsip keamanan informasi yang terutama dilanggar adalah …`, (k, v) => `Kejadian ini terutama melanggar ${v}.`, ["Authentication (autentikasi)"]),
  // ---------- Sejarah: tokoh ----------
  genTabel("sejarah", [
    ["Bapak Komputer, perancang Analytical Engine", "Charles Babbage"], ["programmer pertama di dunia", "Ada Lovelace"],
    ["pencetus Mesin Turing dan pemecah sandi Enigma", "Alan Turing"], ["pencipta World Wide Web", "Tim Berners-Lee"],
    ["pengirim email jaringan pertama yang memakai simbol @", "Ray Tomlinson"], ["pencipta kalkulator mekanik Pascaline", "Blaise Pascal"],
    ["pembuat mesin tabulasi kartu berlubang untuk sensus 1890", "Herman Hollerith"], ["pengembang aljabar Boolean", "George Boole"],
    ["penemu mouse komputer", "Douglas Engelbart"], ["pencipta kernel Linux", "Linus Torvalds"],
    ["perancang arsitektur komputer program tersimpan", "John von Neumann"], ["pelopor kompiler dan bahasa COBOL", "Grace Hopper"],
    ["pembuat komputer Z3", "Konrad Zuse"]
  ], k => `Tokoh yang dikenal sebagai ${k} adalah …`, (k, v) => `${v} dikenal sebagai ${k}.`),
  // ---------- Sejarah: generasi komputer ----------
  genTabel("sejarah", [
    ["I", "Tabung vakum"], ["II", "Transistor"], ["III", "IC (Integrated Circuit)"], ["IV", "Mikroprosesor"], ["V", "Kecerdasan artifisial"]
  ], k => `Teknologi utama yang mencirikan komputer generasi ${k} adalah …`, (k, v) => `Generasi ${k}: ${v}. Hafalkan "Ta-Tra-I-Mi-A".`),
  // ---------- Sejarah: tahun ----------
  genTabel("sejarah", [
    ["ARPANET mulai beroperasi", "1969"], ["ENIAC diperkenalkan", "1946"], ["Intel 4004 dirilis", "1971"],
    ["Transistor ditemukan di Bell Labs", "1947"], ["Google didirikan", "1998"], ["Satelit Palapa A1 diluncurkan", "1976"],
    ["ARPANET resmi beralih ke TCP/IP", "1983"], ["Pascaline diciptakan", "1642"], ["Kernel Linux pertama dirilis", "1991"], ["IBM PC dirilis", "1981"]
  ], k => `Peristiwa "${k}" terjadi pada tahun …`, (k, v) => `${k}: tahun ${v}.`),
  // ---------- Etika: regulasi ----------
  genTabel("etika", [
    ["Informasi dan Transaksi Elektronik (UU ITE)", "UU No. 11 Tahun 2008"], ["Pelindungan Data Pribadi", "UU No. 27 Tahun 2022"],
    ["Hak Cipta", "UU No. 28 Tahun 2014"], ["perubahan pertama UU ITE", "UU No. 19 Tahun 2016"], ["perubahan kedua UU ITE", "UU No. 1 Tahun 2024"]
  ], k => `Undang-undang yang mengatur tentang ${k} adalah …`, (k, v) => `${k}: ${v}.`),
  // ---------- Etika: lisensi ----------
  genTabel("etika", [
    ["gratis digunakan, tetapi kode sumbernya tertutup", "Freeware"], ["kode sumbernya terbuka dan boleh dimodifikasi sesuai lisensi", "Open source"],
    ["boleh dicoba gratis dengan batas waktu atau fitur", "Shareware"], ["harus dibeli lisensinya dan kode sumbernya tertutup", "Proprietary"],
    ["bebas digunakan siapa saja tanpa izin karena tidak dilindungi hak cipta", "Public domain"]
  ], k => `Perangkat lunak/karya yang ${k} termasuk jenis lisensi …`, (k, v) => `${v}: ${k}.`),
  // ---------- Teknologi terkini ----------
  genTabel("terkini", [
    ["Gmail", "SaaS"], ["Google Docs", "SaaS"], ["Canva versi web", "SaaS"], ["Amazon EC2 (sewa server virtual)", "IaaS"],
    ["Google Compute Engine", "IaaS"], ["Google App Engine", "PaaS"], ["Heroku", "PaaS"]
  ], k => `${k} termasuk model layanan cloud …`, (k, v) => `${k} adalah contoh ${v}. SaaS = aplikasi siap pakai; PaaS = platform pengembangan; IaaS = infrastruktur.`, ["On-premise (server milik sendiri)"]),
  genTabel("terkini", [
    ["sensor suhu", "Input (sensor)"], ["sensor gerak PIR", "Input (sensor)"], ["sensor kelembapan tanah", "Input (sensor)"],
    ["motor servo", "Output (aktuator)"], ["pompa air", "Output (aktuator)"], ["buzzer", "Output (aktuator)"], ["lampu LED", "Output (aktuator)"],
    ["mikrokontroler ESP32", "Pemroses"]
  ], k => `Dalam sistem IoT, ${k} berperan sebagai …`, (k, v) => `${k}: ${v.toLowerCase()}.`, ["Media penyimpanan"])
);
