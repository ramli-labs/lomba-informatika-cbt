// =====================================================================
// MATERI PEMBELAJARAN — Lomba Pengetahuan Informatika (CBT Online)
// Kategori 1 (Kelas 7–8): Logika & Computational Thinking
// Kategori 2 (Kelas 9)  : Fundamental TIK & Etika Siber
// =====================================================================

const MATERI = {
  k1: [
    // ---------------------------------------------------------------
    {
      id: "ct", topik: "ct", ikon: "🧩",
      judul: "Empat Pilar Computational Thinking",
      ringkas: "Dekomposisi, pengenalan pola, abstraksi, dan algoritma beserta cara membedakannya di soal.",
      html: `
<h3>Apa itu Computational Thinking (CT)?</h3>
<p><b>Computational Thinking</b> (berpikir komputasional) adalah cara memecahkan masalah seperti seorang ilmuwan komputer, sehingga solusinya bisa dijalankan oleh manusia maupun komputer. CT <b>bukan</b> berarti "berpikir seperti komputer" dan <b>tidak selalu</b> memakai komputer.</p>

<div class="grid4">
  <div class="pilar"><span>1</span><b>Dekomposisi</b><p>Memecah masalah besar menjadi bagian-bagian kecil yang lebih mudah diselesaikan.</p></div>
  <div class="pilar"><span>2</span><b>Pengenalan Pola</b><p>Menemukan kesamaan, keteraturan, atau tren di antara bagian masalah.</p></div>
  <div class="pilar"><span>3</span><b>Abstraksi</b><p>Mengambil informasi penting dan membuang detail yang tidak diperlukan.</p></div>
  <div class="pilar"><span>4</span><b>Algoritma</b><p>Menyusun langkah-langkah penyelesaian yang runtut, jelas, dan berhingga.</p></div>
</div>

<h3>1. Dekomposisi</h3>
<p>Ciri soalnya: ada kata <i>memecah, membagi tugas, sub-masalah, bagian-bagian</i>.</p>
<ul>
  <li>Panitia pentas seni dibagi menjadi seksi acara, konsumsi, dekorasi, dan dokumentasi.</li>
  <li>Membuat gim dipecah menjadi: karakter, peta, skor, dan suara.</li>
  <li>Menulis makalah dipecah menjadi pendahuluan, isi, dan penutup.</li>
</ul>

<h3>2. Pengenalan Pola</h3>
<p>Ciri soalnya: <i>kesamaan, berulang, keteraturan, tren, memprediksi</i>.</p>
<ul>
  <li>Menyadari kantin selalu ramai pada istirahat pertama hari Senin.</li>
  <li>Melihat bahwa deret 2, 5, 8, 11 selalu bertambah 3.</li>
  <li>Mengenali bahwa semua email penipuan meminta kata sandi.</li>
</ul>

<h3>3. Abstraksi</h3>
<p>Ciri soalnya: <i>mengabaikan detail, model, peta, menyederhanakan, informasi penting saja</i>.</p>
<ul>
  <li>Peta jalur KRL/MRT hanya menampilkan stasiun dan urutannya, bukan bentuk jalan dan gedung yang sebenarnya.</li>
  <li>Ikon "toilet" hanya menampilkan siluet orang, tanpa wajah atau warna baju.</li>
  <li>Untuk menghitung ongkos kirim, yang penting hanya berat dan jarak, bukan warna paket.</li>
</ul>
<p><b>Generalisasi</b> sering dianggap bagian dari abstraksi: membuat aturan umum dari pola, misalnya rumus luas persegi panjang <code>p × l</code> berlaku untuk semua ukuran.</p>

<h3>4. Algoritma</h3>
<p>Ciri soalnya: <i>langkah-langkah, urutan, instruksi, prosedur, resep</i>.</p>
<p>Ciri algoritma yang baik:</p>
<ol>
  <li><b>Finite</b>: pasti berhenti setelah sejumlah langkah.</li>
  <li><b>Definite</b>: setiap langkah jelas dan tidak ambigu.</li>
  <li><b>Input</b>: memiliki nol atau lebih masukan.</li>
  <li><b>Output</b>: menghasilkan minimal satu keluaran.</li>
  <li><b>Efektif</b>: setiap langkah bisa dikerjakan.</li>
</ol>
<p>Algoritma <b>tidak harus</b> ditulis dalam bahasa pemrograman atau bahasa Inggris. Algoritma bisa ditulis sebagai kalimat biasa, pseudocode, atau flowchart.</p>

<h3>Evaluasi dan Debugging</h3>
<p>Setelah algoritma dibuat, solusinya <b>dievaluasi</b> (apakah benar dan efisien?). Kegiatan mencari dan memperbaiki kesalahan disebut <b>debugging</b>.</p>

<div class="jebakan"><b>⚠️ Jebakan soal</b>
<ul>
  <li>"Membuang detail" adalah <b>abstraksi</b>, bukan dekomposisi. Dekomposisi tidak membuang apa pun, hanya membagi.</li>
  <li>"Menemukan kesamaan" adalah <b>pengenalan pola</b>, sedangkan "membuat aturan umum dari kesamaan itu" adalah generalisasi/abstraksi.</li>
  <li>Resep masakan dan petunjuk arah termasuk contoh <b>algoritma</b>.</li>
</ul></div>
`
    },
    // ---------------------------------------------------------------
    {
      id: "logika", topik: "logika", ikon: "🧠",
      judul: "Logika Proposisi & Penalaran",
      ringkas: "Pernyataan, negasi, tabel kebenaran, implikasi, kontraposisi, penarikan kesimpulan, dan teka-teki logika.",
      html: `
<h3>Proposisi (Pernyataan)</h3>
<p><b>Proposisi</b> adalah kalimat yang bernilai <b>benar (B)</b> atau <b>salah (S)</b>, tetapi tidak keduanya.</p>
<ul>
  <li>"Jakarta adalah ibu kota Jawa Barat." → proposisi (bernilai salah).</li>
  <li>"7 adalah bilangan prima." → proposisi (benar).</li>
  <li>"Tolong tutup pintunya!" → <b>bukan</b> proposisi (kalimat perintah).</li>
  <li>"Apakah kamu sudah makan?" → <b>bukan</b> proposisi (kalimat tanya).</li>
  <li>"x + 2 = 5" → <b>kalimat terbuka</b>, belum bisa dinilai sebelum x diketahui.</li>
</ul>

<h3>Operator Logika dan Tabel Kebenaran</h3>
<table>
<tr><th>p</th><th>q</th><th>¬p</th><th>p ∧ q<br><small>(dan)</small></th><th>p ∨ q<br><small>(atau)</small></th><th>p → q<br><small>(jika…maka)</small></th><th>p ↔ q<br><small>(jika dan hanya jika)</small></th></tr>
<tr><td>B</td><td>B</td><td>S</td><td>B</td><td>B</td><td>B</td><td>B</td></tr>
<tr><td>B</td><td>S</td><td>S</td><td>S</td><td>B</td><td class="hl">S</td><td>S</td></tr>
<tr><td>S</td><td>B</td><td>B</td><td>S</td><td>B</td><td>B</td><td>S</td></tr>
<tr><td>S</td><td>S</td><td>B</td><td>S</td><td>S</td><td>B</td><td>B</td></tr>
</table>
<p>Cara cepat mengingat:</p>
<ul>
  <li><b>∧ (dan)</b>: benar hanya jika <b>keduanya benar</b>.</li>
  <li><b>∨ (atau)</b>: salah hanya jika <b>keduanya salah</b>.</li>
  <li><b>→ (implikasi)</b>: salah <b>hanya</b> jika <b>B → S</b> ("janji yang diingkari").</li>
  <li><b>↔ (biimplikasi)</b>: benar jika nilai keduanya <b>sama</b>.</li>
  <li>Banyak baris tabel kebenaran untuk <i>n</i> variabel = <b>2ⁿ</b> (2 variabel → 4 baris, 3 variabel → 8 baris).</li>
</ul>

<h3>Negasi (Ingkaran)</h3>
<table>
<tr><th>Pernyataan</th><th>Negasinya</th></tr>
<tr><td>p ∧ q</td><td>¬p ∨ ¬q</td></tr>
<tr><td>p ∨ q</td><td>¬p ∧ ¬q</td></tr>
<tr><td>p → q</td><td>p ∧ ¬q</td></tr>
<tr><td>Semua A adalah B</td><td>Ada (beberapa) A yang bukan B</td></tr>
<tr><td>Ada A yang B</td><td>Semua A bukan B (tidak ada A yang B)</td></tr>
</table>
<p>Contoh: negasi "Semua siswa membawa laptop" adalah <b>"Ada siswa yang tidak membawa laptop"</b>, <u>bukan</u> "Semua siswa tidak membawa laptop".</p>

<h3>Konvers, Invers, Kontraposisi</h3>
<p>Dari implikasi <b>p → q</b> ("Jika hujan, maka jalan basah"):</p>
<table>
<tr><th>Nama</th><th>Bentuk</th><th>Contoh</th><th>Setara dengan p→q?</th></tr>
<tr><td>Konvers</td><td>q → p</td><td>Jika jalan basah, maka hujan.</td><td>Tidak</td></tr>
<tr><td>Invers</td><td>¬p → ¬q</td><td>Jika tidak hujan, maka jalan tidak basah.</td><td>Tidak</td></tr>
<tr><td>Kontraposisi</td><td>¬q → ¬p</td><td>Jika jalan tidak basah, maka tidak hujan.</td><td><b>Ya ✔</b></td></tr>
</table>

<h3>Penarikan Kesimpulan</h3>
<div class="grid3">
<div class="kotak"><b>Modus Ponens</b><pre>p → q
p
∴ q</pre><small>Jika belajar, maka lulus. Ani belajar. ∴ Ani lulus.</small></div>
<div class="kotak"><b>Modus Tollens</b><pre>p → q
¬q
∴ ¬p</pre><small>Jika belajar, maka lulus. Ani tidak lulus. ∴ Ani tidak belajar.</small></div>
<div class="kotak"><b>Silogisme</b><pre>p → q
q → r
∴ p → r</pre><small>Jika rajin, maka pintar. Jika pintar, maka juara. ∴ Jika rajin, maka juara.</small></div>
</div>
<div class="jebakan"><b>⚠️ Kesalahan penalaran yang sering dijebakkan</b>
<ul>
  <li><b>Menegaskan konsekuen</b>: p → q, q benar, lalu menyimpulkan p. <b>Tidak sah!</b> (Jalan basah belum tentu karena hujan, bisa karena disiram.)</li>
  <li><b>Menyangkal anteseden</b>: p → q, ¬p, lalu menyimpulkan ¬q. <b>Tidak sah!</b></li>
</ul></div>

<h3>Teka-teki Logika yang Sering Muncul</h3>
<h4>a. Kesatria dan Penipu</h4>
<p>Kesatria selalu jujur, penipu selalu bohong. <b>Strategi:</b> misalkan tokoh A kesatria, lalu cek apakah terjadi kontradiksi. Jika ya, A pasti penipu.</p>
<p><i>Contoh:</i> A berkata "Kami berdua penipu." Jika A kesatria, ucapannya benar, berarti A penipu, sehingga kontradiksi. Jadi A <b>penipu</b>, ucapannya salah, berarti tidak keduanya penipu, sehingga B <b>kesatria</b>.</p>
<h4>b. Urutan dan Posisi</h4>
<p>Gambarkan garis bilangan atau tabel. Tulis setiap informasi sebagai tanda &gt; atau &lt;, lalu gabungkan.</p>
<p><i>Contoh:</i> Ani &gt; Budi, Budi &gt; Citra, Dodi &lt; Citra → <b>Ani &gt; Budi &gt; Citra &gt; Dodi</b>.</p>
<h4>c. Tabel Eliminasi</h4>
<p>Untuk soal "siapa memiliki apa", buat tabel tokoh × pilihan. Beri tanda ✗ untuk yang mustahil dan ✓ untuk yang pasti. Jika dalam satu baris tinggal satu kotak kosong, itulah jawabannya.</p>

<div class="tips"><b>💡 Tips cepat</b> Ubah kalimat sehari-hari menjadi simbol (p, q) dulu, baru kerjakan. Kata "tetapi", "meskipun", dan "sedangkan" dalam logika bernilai sama dengan <b>∧ (dan)</b>.</div>
`
    },
    // ---------------------------------------------------------------
    {
      id: "algo", topik: "algo", ikon: "🔁",
      judul: "Algoritma, Flowchart & Pseudocode",
      ringkas: "Simbol flowchart, struktur runtunan–percabangan–perulangan, dan teknik tabel jejak (tracing).",
      html: `
<h3>Tiga Struktur Dasar Algoritma</h3>
<table>
<tr><th>Struktur</th><th>Arti</th><th>Contoh pseudocode</th></tr>
<tr><td><b>Runtunan (sekuensial)</b></td><td>Langkah dikerjakan berurutan dari atas ke bawah.</td><td><code>a ← 5<br>b ← a + 2</code></td></tr>
<tr><td><b>Percabangan (seleksi)</b></td><td>Memilih langkah berdasarkan kondisi.</td><td><code>IF nilai ≥ 75 THEN<br>&nbsp;&nbsp;cetak "Tuntas"<br>ELSE<br>&nbsp;&nbsp;cetak "Remedial"</code></td></tr>
<tr><td><b>Perulangan (iterasi)</b></td><td>Mengulang langkah selama/sebanyak kondisi tertentu.</td><td><code>FOR i ← 1 TO 5<br>&nbsp;&nbsp;cetak i</code></td></tr>
</table>

<h3>Simbol Flowchart</h3>
<table>
<tr><th>Simbol</th><th>Nama</th><th>Fungsi</th></tr>
<tr><td><span class="sym oval">Mulai</span></td><td>Terminator (oval)</td><td>Awal dan akhir algoritma</td></tr>
<tr><td><span class="sym para">Input</span></td><td>Jajaran genjang</td><td>Input / output data</td></tr>
<tr><td><span class="sym rect">Proses</span></td><td>Persegi panjang</td><td>Proses / perhitungan / penugasan</td></tr>
<tr><td><span class="sym diam">?</span></td><td>Belah ketupat</td><td>Keputusan / percabangan (Ya/Tidak)</td></tr>
<tr><td><span class="sym arrow">→</span></td><td>Garis alir</td><td>Arah urutan langkah</td></tr>
<tr><td><span class="sym circ">A</span></td><td>Lingkaran kecil</td><td>Konektor pada halaman yang sama</td></tr>
<tr><td><span class="sym hex">i=1..n</span></td><td>Segi enam</td><td>Persiapan / inisialisasi (perulangan)</td></tr>
</table>

<h3>Notasi Pseudocode yang Dipakai di Soal</h3>
<ul>
  <li><code>x ← 5</code> artinya "x diisi 5" (penugasan). Kadang ditulis <code>x = 5</code>.</li>
  <li><code>a MOD b</code> = sisa bagi. <code>17 MOD 5 = 2</code>.</li>
  <li><code>a DIV b</code> = hasil bagi bulat. <code>17 DIV 5 = 3</code>.</li>
  <li><code>FOR i ← 1 TO 10 STEP 3</code> → i bernilai 1, 4, 7, 10 (4 kali).</li>
  <li><code>WHILE kondisi DO</code>: kondisi dicek <b>sebelum</b> mengerjakan isi loop.</li>
  <li><code>REPEAT … UNTIL kondisi</code>: isi loop dikerjakan <b>minimal satu kali</b>, berhenti saat kondisi benar.</li>
</ul>

<h3>Teknik Wajib: Tabel Jejak (Trace Table)</h3>
<p>Untuk soal "berapa nilai akhir x?", buat tabel berisi setiap variabel, lalu isi baris demi baris. Jangan menebak di kepala.</p>
<pre class="code">x ← 5
y ← 3
x ← x + y
y ← x − y
x ← x − y
cetak x, y</pre>
<table>
<tr><th>Langkah</th><th>x</th><th>y</th></tr>
<tr><td>x ← 5</td><td>5</td><td>–</td></tr>
<tr><td>y ← 3</td><td>5</td><td>3</td></tr>
<tr><td>x ← x + y</td><td>8</td><td>3</td></tr>
<tr><td>y ← x − y</td><td>8</td><td>5</td></tr>
<tr><td>x ← x − y</td><td>3</td><td>5</td></tr>
</table>
<p>Hasil: <b>x = 3, y = 5</b>. Algoritma ini <b>menukar</b> dua nilai tanpa variabel bantu.</p>

<h3>Menghitung Banyak Perulangan</h3>
<ul>
  <li><code>FOR i ← a TO b</code> → berulang <b>b − a + 1</b> kali.</li>
  <li>Perulangan bersarang (nested): <code>FOR i 1..3</code> berisi <code>FOR j 1..4</code> → <b>3 × 4 = 12</b> kali.</li>
  <li><code>i ← 1; WHILE i &lt; 20: i ← i × 2</code> → i = 1, 2, 4, 8, 16, 32 → berhenti di 32 setelah 5 kali.</li>
</ul>

<h3>Rekursi (Pengayaan)</h3>
<p>Fungsi yang memanggil dirinya sendiri. Harus punya <b>kasus dasar</b> agar berhenti.</p>
<pre class="code">FUNGSI f(n)
  IF n ≤ 1 THEN RETURN 1
  ELSE RETURN n × f(n − 1)
f(4) = 4 × 3 × 2 × 1 = 24</pre>

<h3>Jenis Kesalahan (Error)</h3>
<ul>
  <li><b>Syntax error</b>: salah penulisan aturan bahasa, sehingga program tidak bisa dijalankan.</li>
  <li><b>Logic error</b>: program berjalan tetapi hasilnya salah (misalnya rumus rata-rata lupa dibagi).</li>
  <li><b>Runtime error</b>: kesalahan saat program berjalan (misalnya pembagian dengan nol).</li>
</ul>

<div class="jebakan"><b>⚠️ Jebakan soal</b>
<ul>
  <li>Mencari nilai maksimum: variabel <code>maks</code> sebaiknya diisi <b>elemen pertama</b>, bukan 0. Jika semua data negatif, hasil 0 menjadi salah.</li>
  <li>Perhatikan <code>&lt;</code> dan <code>≤</code>. Bedanya sering satu kali perulangan.</li>
  <li>Perhatikan apakah <i>cetak</i> berada di dalam atau di luar loop.</li>
</ul></div>
`
    },
    // ---------------------------------------------------------------
    {
      id: "bilangan", topik: "bilangan", ikon: "🔢",
      judul: "Sistem Bilangan & Gerbang Logika",
      ringkas: "Biner, oktal, heksadesimal, konversi cepat, penjumlahan biner, dan gerbang AND/OR/NOT/XOR/NAND/NOR.",
      html: `
<h3>Mengapa Biner?</h3>
<p>Komputer bekerja dengan sinyal listrik dua keadaan: <b>ada (1)</b> dan <b>tidak ada (0)</b>. Satu digit biner disebut <b>bit</b>, dan <b>8 bit = 1 byte</b>.</p>

<table>
<tr><th>Sistem</th><th>Basis</th><th>Digit</th></tr>
<tr><td>Biner</td><td>2</td><td>0, 1</td></tr>
<tr><td>Oktal</td><td>8</td><td>0–7</td></tr>
<tr><td>Desimal</td><td>10</td><td>0–9</td></tr>
<tr><td>Heksadesimal</td><td>16</td><td>0–9, A(10), B(11), C(12), D(13), E(14), F(15)</td></tr>
</table>

<h3>Biner → Desimal: Gunakan Nilai Tempat</h3>
<table class="nilai-tempat">
<tr><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th></tr>
<tr><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td></tr>
</table>
<p>00011011₂ = 16 + 8 + 2 + 1 = <b>27</b>. Jumlahkan nilai tempat yang digitnya 1.</p>

<h3>Desimal → Biner: Cara Cepat Pengurangan</h3>
<p>Contoh 45: ambil nilai tempat terbesar yang ≤ 45, yaitu 32 (sisa 13), lalu 8 (sisa 5), lalu 4 (sisa 1), lalu 1 (sisa 0).</p>
<p>Posisi 32, 8, 4, 1 bernilai 1 → <b>101101₂</b>.</p>
<p>Cara lain: bagi 2 berulang dan baca sisanya dari bawah ke atas.</p>

<h3>Fakta Penting</h3>
<ul>
  <li><i>n</i> bit dapat menyatakan <b>2ⁿ</b> nilai berbeda: 0 sampai 2ⁿ − 1.</li>
  <li>4 bit → 16 nilai (0–15), 8 bit → 256 nilai (0–255).</li>
  <li>Bilangan biner yang berakhiran 0 pasti <b>genap</b>.</li>
  <li>Menambah angka 0 di kanan bilangan biner = <b>dikali 2</b> (101₂ = 5, 1010₂ = 10).</li>
  <li>1 digit heksadesimal = 4 bit. Contoh: 2F₁₆ = 0010 1111₂ = 32 + 15 = <b>47</b>.</li>
  <li>1 digit oktal = 3 bit. Contoh: 17₈ = 1×8 + 7 = <b>15</b>.</li>
</ul>

<h3>Penjumlahan Biner</h3>
<p>Aturan: 0+0=0, 0+1=1, 1+1=10 (tulis 0, simpan 1), 1+1+1=11 (tulis 1, simpan 1).</p>
<pre class="code">  1011   (11)
+ 0110   ( 6)
------
 10001   (17)</pre>

<h3>Gerbang Logika</h3>
<table>
<tr><th>A</th><th>B</th><th>AND</th><th>OR</th><th>XOR</th><th>NAND</th><th>NOR</th><th>XNOR</th></tr>
<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>
</table>
<ul>
  <li><b>NOT</b>: membalik (0→1, 1→0).</li>
  <li><b>AND</b>: 1 jika semua input 1. Analogi: dua saklar dipasang seri.</li>
  <li><b>OR</b>: 1 jika minimal satu input 1. Analogi: dua saklar dipasang paralel.</li>
  <li><b>XOR</b>: 1 jika input <b>berbeda</b>.</li>
  <li><b>NAND / NOR</b>: kebalikan dari AND / OR.</li>
</ul>
<div class="tips"><b>💡 Mengerjakan rangkaian gerbang</b> Kerjakan dari yang di dalam kurung lebih dulu, lalu urutan NOT → AND → OR. Tulis hasil antara di samping setiap gerbang.</div>
`
    },
    // ---------------------------------------------------------------
    {
      id: "struktur", topik: "struktur", ikon: "🗂️",
      judul: "Struktur Data, Pengurutan & Pencarian",
      ringkas: "Array, stack (LIFO), queue (FIFO), bubble/selection sort, pencarian linear dan biner.",
      html: `
<h3>Array (Larik)</h3>
<p>Kumpulan data sejenis yang diakses dengan <b>indeks</b>. Pada banyak bahasa pemrograman, indeks dimulai dari <b>0</b>.</p>
<pre class="code">A = [7, 2, 9, 4]
A[0] = 7   A[1] = 2   A[2] = 9   A[3] = 4</pre>
<p>Baca soal dengan teliti: jika soal menyebut "indeks dimulai dari 1", maka A[1] = 7.</p>

<h3>Stack (Tumpukan): LIFO</h3>
<p><b>Last In, First Out</b>: yang terakhir masuk, pertama keluar. Contoh: tumpukan piring, tombol <i>Undo</i>, riwayat tombol <i>Back</i> di peramban.</p>
<pre class="code">PUSH 5 → [5]
PUSH 8 → [5, 8]
PUSH 3 → [5, 8, 3]
POP    → [5, 8]     (3 keluar)
TOP = 8</pre>

<h3>Queue (Antrean): FIFO</h3>
<p><b>First In, First Out</b>: yang pertama masuk, pertama keluar. Contoh: antrean kantin, antrean cetak printer.</p>
<pre class="code">ENQUEUE 5 → [5]
ENQUEUE 8 → [5, 8]
ENQUEUE 3 → [5, 8, 3]
DEQUEUE   → [8, 3]   (5 keluar)
DEPAN = 8</pre>

<h3>Pengurutan (Sorting)</h3>
<h4>Bubble Sort</h4>
<p>Bandingkan dua elemen <b>bersebelahan</b>, tukar jika urutannya salah. Setelah satu putaran (pass), elemen terbesar "menggelembung" ke ujung kanan.</p>
<pre class="code">[5, 3, 8, 1]
banding 5,3 → tukar → [3, 5, 8, 1]
banding 5,8 → tetap → [3, 5, 8, 1]
banding 8,1 → tukar → [3, 5, 1, 8]   ← hasil pass 1</pre>
<h4>Selection Sort</h4>
<p>Cari elemen <b>terkecil</b>, lalu tukar ke posisi paling depan. Ulangi untuk sisa data.</p>
<pre class="code">[5, 3, 8, 1] → terkecil 1, tukar dengan 5 → [1, 3, 8, 5]</pre>
<h4>Insertion Sort</h4>
<p>Seperti menyusun kartu di tangan: ambil satu elemen, lalu sisipkan ke posisi yang tepat di bagian yang sudah urut.</p>

<h3>Pencarian (Searching)</h3>
<table>
<tr><th></th><th>Linear Search</th><th>Binary Search</th></tr>
<tr><td>Cara</td><td>Cek satu per satu dari awal</td><td>Cek tengah, buang separuh data</td></tr>
<tr><td>Syarat</td><td>Tidak ada</td><td><b>Data harus terurut</b></td></tr>
<tr><td>Langkah terburuk (n data)</td><td>n</td><td>≈ log₂ n (1.000 data → ±10 langkah)</td></tr>
</table>
<p><i>Contoh binary search</i> mencari 23 di [3, 8, 12, 17, 23, 31, 40]: tengah = 17 → 23 &gt; 17, ambil kanan [23, 31, 40] → tengah = 31 → 23 &lt; 31, ambil kiri [23] → ketemu. Total <b>3 kali</b> membandingkan.</p>

<h3>Graf (Pengayaan)</h3>
<p>Graf terdiri atas <b>simpul (node)</b> dan <b>sisi (edge)</b>. Contohnya peta kota, jaringan pertemanan, atau rute bus. Sisi dapat berbobot (jarak/biaya). Soal favorit: <b>jalur terpendek</b>, yaitu mencoba semua rute masuk akal dan membandingkan totalnya.</p>
<p><b>Pohon (tree)</b> adalah graf tanpa siklus. Contohnya struktur folder di komputer dan silsilah keluarga.</p>
`
    },
    // ---------------------------------------------------------------
    {
      id: "bebras", topik: "bebras", ikon: "🦫",
      judul: "Strategi Soal Cerita (Gaya Bebras)",
      ringkas: "Jalur terpendek, greedy, knapsack, robot di grid, sandi, dan manajemen waktu CBT.",
      html: `
<p>Soal CT di lomba biasanya berbentuk <b>cerita</b> (gaya Tantangan Bebras). Kuncinya: pahami aturan, buat abstraksi (gambar/tabel), lalu coba secara sistematis.</p>

<h3>Langkah Umum Mengerjakan Soal Cerita</h3>
<ol>
  <li><b>Baca aturan</b> dua kali. Garis bawahi angka dan kata kunci (minimal, maksimal, paling sedikit).</li>
  <li><b>Gambar</b>: graf, tabel, atau grid di kertas coretan.</li>
  <li><b>Coba kasus kecil</b> untuk menemukan pola.</li>
  <li><b>Eliminasi</b> pilihan jawaban yang jelas melanggar aturan.</li>
  <li><b>Cek ulang</b> jawaban terhadap semua aturan.</li>
</ol>

<h3>Tipe 1: Jalur Terpendek</h3>
<p>Jalan A–B = 4, A–C = 2, C–B = 1, B–D = 5, C–D = 8. Rute terpendek A ke D?</p>
<ul>
  <li>A–B–D = 4 + 5 = 9</li>
  <li>A–C–D = 2 + 8 = 10</li>
  <li>A–C–B–D = 2 + 1 + 5 = <b>8</b> ✔</li>
</ul>
<p>Pelajaran: rute dengan sisi terbanyak bisa saja paling pendek.</p>

<h3>Tipe 2: Greedy (Rakus)</h3>
<p>Selalu ambil pilihan terbaik saat itu. Contoh: kembalian Rp63.000 dengan pecahan 50, 20, 10, 5, 2, 1 ribu → 50 + 10 + 2 + 1 = <b>4 lembar</b>.</p>
<div class="jebakan"><b>⚠️</b> Greedy <b>tidak selalu</b> optimal. Dengan koin 1, 3, 4 untuk nilai 6: greedy memberi 4+1+1 (3 koin), padahal 3+3 hanya 2 koin.</div>

<h3>Tipe 3: Ransel (Knapsack)</h3>
<p>Ransel maksimal 10 kg. Barang (berat, nilai): A(5, 10), B(4, 40), C(6, 30), D(3, 50). Pilih kombinasi bernilai terbesar.</p>
<p>B + D = 7 kg, nilai <b>90</b> ✔. Kombinasi lain: C + D = 80, B + C = 70, A + D = 60. Menambah A ke B + D membuat berat 12 kg, melebihi batas.</p>

<h3>Tipe 4: Robot di Grid</h3>
<p>Tentukan arah hadap dulu. Belok <b>kanan</b> searah jarum jam: Utara → Timur → Selatan → Barat. Belok <b>kiri</b> sebaliknya.</p>
<p>Robot di (0,0) menghadap utara: Maju 2 → (0,2); Kanan (hadap timur); Maju 3 → (3,2); Kanan (hadap selatan); Maju 1 → <b>(3,1)</b>.</p>

<h3>Tipe 5: Sandi dan Pola Karakter</h3>
<p>Sandi geser (Caesar): setiap huruf digeser <i>k</i> posisi. Geser +1: KUCING → <b>LVDJOH</b>. Setelah Z kembali ke A.</p>
<p>Hafalkan urutan alfabet bernomor: A1 B2 C3 D4 E5 F6 G7 H8 I9 J10 K11 L12 M13 N14 O15 P16 Q17 R18 S19 T20 U21 V22 W23 X24 Y25 Z26.</p>

<h3>Tipe 6: Penyeberangan dan Pertukaran</h3>
<ul>
  <li>Menukar isi dua gelas dengan bantuan satu gelas kosong: minimal <b>3 kali</b> tuang (pola yang sama dengan algoritma tukar variabel).</li>
  <li>Petani menyeberangkan serigala, kambing, dan sayur: minimal <b>7 kali</b> menyeberang.</li>
</ul>

<h3>Manajemen Waktu CBT</h3>
<div class="tips"><b>⏱️ 100 soal dalam 90 menit = ±54 detik per soal.</b>
<ul>
  <li><b>Putaran 1 (±50 menit):</b> kerjakan semua soal yang bisa dijawab di bawah 40 detik. Tandai (🚩) soal yang panjang.</li>
  <li><b>Putaran 2 (±30 menit):</b> kembali ke soal bertanda.</li>
  <li><b>10 menit terakhir:</b> pastikan <b>tidak ada soal kosong</b>. Menebak lebih baik daripada mengosongkan (jika tidak ada pengurangan nilai).</li>
</ul></div>
`
    }
  ],

  k2: [
    // ---------------------------------------------------------------
    {
      id: "siskom", topik: "siskom", ikon: "🖥️",
      judul: "Sistem Komputer",
      ringkas: "Hardware–software–brainware, CPU, memori, penyimpanan, sistem operasi, dan siklus fetch–decode–execute.",
      html: `
<h3>Tiga Elemen Sistem Komputer</h3>
<div class="grid3">
<div class="kotak"><b>Hardware</b><br>Perangkat keras yang bisa disentuh: CPU, RAM, keyboard, monitor.</div>
<div class="kotak"><b>Software</b><br>Perangkat lunak (program): sistem operasi, aplikasi, driver.</div>
<div class="kotak"><b>Brainware</b><br>Manusia yang menggunakan/mengelola: operator, programmer, analis sistem, teknisi.</div>
</div>

<h3>Model Input – Proses – Output – Penyimpanan</h3>
<table>
<tr><th>Bagian</th><th>Contoh</th></tr>
<tr><td>Perangkat <b>input</b></td><td>Keyboard, mouse, scanner, mikrofon, webcam, sensor, barcode reader</td></tr>
<tr><td>Perangkat <b>proses</b></td><td>CPU (prosesor), GPU</td></tr>
<tr><td>Perangkat <b>output</b></td><td>Monitor, printer, speaker, proyektor</td></tr>
<tr><td>Perangkat <b>input + output</b></td><td>Layar sentuh (touchscreen), headset bermikrofon, modem</td></tr>
<tr><td><b>Penyimpanan</b></td><td>HDD, SSD, flashdisk, kartu memori, cloud</td></tr>
</table>

<h3>CPU (Central Processing Unit)</h3>
<ul>
  <li><b>ALU</b> (Arithmetic Logic Unit): melakukan operasi <b>aritmetika</b> (+, −, ×, ÷) dan <b>logika</b> (AND, OR, perbandingan).</li>
  <li><b>CU</b> (Control Unit): <b>mengendalikan</b> dan mengatur aliran data serta instruksi.</li>
  <li><b>Register</b>: memori super cepat berukuran sangat kecil di dalam CPU.</li>
  <li><b>Cache</b>: memori cepat di dekat CPU yang menyimpan data yang sering dipakai.</li>
  <li>Kecepatan CPU diukur dalam <b>Hertz</b> (GHz = miliar siklus per detik). CPU modern memiliki banyak <b>core</b>.</li>
</ul>
<p><b>Siklus mesin (instruction cycle):</b> <b>Fetch</b> (ambil instruksi dari memori) → <b>Decode</b> (terjemahkan) → <b>Execute</b> (jalankan) → (simpan hasil).</p>
<p><b>Arsitektur von Neumann:</b> program dan data disimpan di <b>memori yang sama</b>. Komponennya CPU, memori, I/O, dan bus. Hampir semua komputer modern memakai konsep ini.</p>

<h3>Memori dan Penyimpanan</h3>
<table>
<tr><th>Jenis</th><th>Sifat</th><th>Keterangan</th></tr>
<tr><td><b>RAM</b></td><td>Volatile (isi hilang saat listrik mati)</td><td>Memori kerja, menyimpan program yang sedang berjalan</td></tr>
<tr><td><b>ROM</b></td><td>Non-volatile</td><td>Berisi firmware (BIOS/UEFI) untuk proses booting</td></tr>
<tr><td><b>HDD</b></td><td>Non-volatile, piringan magnetik berputar</td><td>Murah per GB, lebih lambat, rentan guncangan</td></tr>
<tr><td><b>SSD</b></td><td>Non-volatile, chip flash</td><td>Tanpa komponen bergerak, jauh lebih cepat, hemat daya</td></tr>
</table>
<p><b>Hierarki kecepatan</b> (tercepat → terlambat): Register → Cache → RAM → SSD → HDD. Semakin cepat, biasanya semakin mahal dan kapasitasnya semakin kecil.</p>

<h3>Satuan Data</h3>
<table>
<tr><th>Satuan</th><th>Nilai</th></tr>
<tr><td>1 Byte</td><td>8 bit</td></tr>
<tr><td>1 KB (Kilobyte)</td><td>1.024 Byte</td></tr>
<tr><td>1 MB (Megabyte)</td><td>1.024 KB</td></tr>
<tr><td>1 GB (Gigabyte)</td><td>1.024 MB</td></tr>
<tr><td>1 TB (Terabyte)</td><td>1.024 GB</td></tr>
</table>
<p><small>Catatan: produsen media penyimpanan sering memakai 1.000. Di soal sekolah, umumnya dipakai 1.024. Ikuti petunjuk soal.</small></p>

<h3>Komponen di Dalam Casing</h3>
<ul>
  <li><b>Motherboard</b>: papan utama tempat semua komponen terhubung.</li>
  <li><b>PSU</b> (Power Supply Unit): mengubah listrik AC menjadi DC untuk komponen.</li>
  <li><b>GPU / VGA card</b>: memproses grafis dan tampilan.</li>
  <li><b>NIC / LAN card</b>: menghubungkan komputer ke jaringan.</li>
  <li><b>Heatsink dan kipas</b>: mendinginkan prosesor.</li>
</ul>

<h3>Perangkat Lunak</h3>
<table>
<tr><th>Jenis</th><th>Contoh</th></tr>
<tr><td><b>Sistem operasi</b></td><td>Windows, Linux, macOS, Android, iOS, ChromeOS</td></tr>
<tr><td><b>Utilitas</b></td><td>Antivirus, disk cleanup, kompresi file</td></tr>
<tr><td><b>Driver</b></td><td>Penghubung OS dengan hardware (driver printer)</td></tr>
<tr><td><b>Aplikasi</b></td><td>Pengolah kata, peramban (browser), editor foto, gim</td></tr>
<tr><td><b>Bahasa pemrograman</b></td><td>Python, C, Java, Scratch</td></tr>
</table>
<p><b>Fungsi sistem operasi:</b> mengelola sumber daya (CPU, memori, file, perangkat I/O), menyediakan antarmuka pengguna (GUI/CLI), mengatur keamanan dan akun pengguna, serta menjalankan aplikasi.</p>
<p><b>Booting</b>: proses menyalakan komputer sampai OS siap. Urutannya: listrik masuk → BIOS/UEFI menjalankan <b>POST</b> (Power-On Self Test) untuk memeriksa hardware → <i>bootloader</i> memuat OS ke RAM.</p>
<ul>
  <li><b>Cold boot</b>: menyalakan komputer dari keadaan mati total.</li>
  <li><b>Warm boot</b>: menyalakan ulang (restart) komputer yang sedang menyala.</li>
</ul>
<p><b>Antarmuka pengguna:</b> <b>GUI</b> (Graphical User Interface: ikon, jendela, mouse), <b>CLI</b> (Command Line Interface: mengetik perintah, misalnya Command Prompt atau Terminal), dan antarmuka sentuh/suara.</p>
<p><b>Multitasking</b>: OS membagi waktu CPU sehingga beberapa program tampak berjalan bersamaan. Jika RAM penuh, OS memakai sebagian penyimpanan sebagai <b>virtual memory</b>, sehingga komputer terasa lambat.</p>

<h3>Klasifikasi Komputer</h3>
<table>
<tr><th>Dasar</th><th>Jenis</th></tr>
<tr><td>Data yang diolah</td><td><b>Analog</b> (data kontinu, misalnya termometer air raksa), <b>Digital</b> (data diskret 0/1), <b>Hybrid</b> (gabungan; misalnya alat medis EKG)</td></tr>
<tr><td>Ukuran/kemampuan</td><td><b>Superkomputer</b> (prakiraan cuaca, riset), <b>Mainframe</b> (bank, maskapai), <b>Server/minikomputer</b>, <b>Mikrokomputer</b> (PC, laptop, tablet), <b>Embedded system</b> (komputer tertanam di mesin cuci, ATM, mobil)</td></tr>
<tr><td>Tujuan</td><td><b>Special purpose</b> (khusus satu tugas, misalnya mesin ATM) dan <b>General purpose</b> (serbaguna, misalnya laptop)</td></tr>
</table>

<h3>Port dan Konektor</h3>
<table>
<tr><th>Port</th><th>Fungsi</th></tr>
<tr><td><b>USB</b> (Universal Serial Bus)</td><td>Port serbaguna: flashdisk, mouse, keyboard, printer. <b>USB Type-C</b> berbentuk oval dan bisa dicolok bolak-balik.</td></tr>
<tr><td><b>HDMI</b></td><td>Mengirim <b>video dan audio digital</b> sekaligus ke monitor/TV/proyektor</td></tr>
<tr><td><b>VGA</b> (D-Sub 15 pin)</td><td>Mengirim <b>video analog</b> (tanpa audio); umum pada proyektor lama</td></tr>
<tr><td><b>DisplayPort</b></td><td>Video dan audio digital, umum pada monitor PC</td></tr>
<tr><td><b>RJ-45</b></td><td>Konektor kabel jaringan (LAN/UTP)</td></tr>
<tr><td><b>RJ-11</b></td><td>Konektor kabel telepon</td></tr>
<tr><td><b>Audio jack 3,5 mm</b></td><td>Headset, speaker, mikrofon</td></tr>
</table>

<h3>Perangkat Output: Monitor dan Printer</h3>
<ul>
  <li><b>Resolusi</b> layar = banyak piksel lebar × tinggi. Full HD = <b>1920 × 1080</b>, HD = 1280 × 720, 4K UHD = 3840 × 2160.</li>
  <li><b>Refresh rate</b> (Hz): berapa kali layar diperbarui per detik. 60 Hz biasa, 120–144 Hz lebih halus untuk gim.</li>
  <li>Teknologi layar: CRT (tabung, lama), LCD, LED (LCD dengan lampu latar LED), <b>OLED</b> (setiap piksel memancarkan cahaya sendiri, hitam pekat).</li>
  <li><b>Printer inkjet</b>: menyemprot <b>tinta cair</b>; bagus untuk foto berwarna.</li>
  <li><b>Printer laser</b>: memakai <b>toner</b> (bubuk) dan sinar laser; cepat untuk dokumen banyak.</li>
  <li><b>Printer dot matrix</b>: printer <b>impact</b> (menekan pita); bisa mencetak rangkap/karbon, misalnya nota.</li>
  <li><b>Printer 3D</b>: membuat benda tiga dimensi lapis demi lapis.</li>
  <li>Kualitas cetak/scan diukur dalam <b>dpi</b> (dots per inch).</li>
</ul>

<h3>Membaca Spesifikasi Laptop</h3>
<pre class="code">Prosesor : Intel Core i5, 4 core, 2,4 GHz
RAM      : 8 GB DDR4
Storage  : SSD 512 GB
Layar    : 14 inci, Full HD (1920×1080)
OS       : Windows 11</pre>
<ul>
  <li><b>Core</b> dan <b>GHz</b> menunjukkan kemampuan CPU.</li>
  <li><b>RAM</b> menentukan banyaknya program yang lancar dibuka bersamaan.</li>
  <li><b>SSD 512 GB</b> adalah kapasitas penyimpanan file permanen.</li>
  <li><b>14 inci</b> adalah ukuran <b>diagonal</b> layar.</li>
</ul>
<div class="jebakan"><b>⚠️ Jebakan soal</b> RAM dan penyimpanan (SSD/HDD) sama-sama diukur dalam GB, tetapi fungsinya berbeda. RAM = memori kerja sementara; SSD = tempat menyimpan file secara permanen.</div>
`
    },
    // ---------------------------------------------------------------
    {
      id: "jaringan", topik: "jaringan", ikon: "🌐",
      judul: "Jaringan Komputer & Internet",
      ringkas: "Jenis jaringan, topologi, perangkat, alamat IP, protokol (DNS, DHCP, HTTP/HTTPS), dan model OSI/TCP-IP.",
      html: `
<h3>Jenis Jaringan Berdasarkan Jangkauan</h3>
<table>
<tr><th>Jenis</th><th>Jangkauan</th><th>Contoh</th></tr>
<tr><td><b>PAN</b> (Personal Area Network)</td><td>±10 m, perangkat pribadi</td><td>HP ke earbuds via Bluetooth</td></tr>
<tr><td><b>LAN</b> (Local Area Network)</td><td>Satu gedung/area</td><td>Lab komputer sekolah</td></tr>
<tr><td><b>MAN</b> (Metropolitan Area Network)</td><td>Satu kota</td><td>Jaringan antarcabang bank dalam satu kota</td></tr>
<tr><td><b>WAN</b> (Wide Area Network)</td><td>Antarkota, negara, benua</td><td><b>Internet</b> (WAN terbesar)</td></tr>
</table>

<h3>Topologi Jaringan</h3>
<table>
<tr><th>Topologi</th><th>Bentuk</th><th>Kelebihan</th><th>Kekurangan</th></tr>
<tr><td><b>Bus</b></td><td>Satu kabel utama (backbone)</td><td>Murah, kabel sedikit</td><td>Backbone putus, seluruh jaringan mati; rawan tabrakan data</td></tr>
<tr><td><b>Star</b></td><td>Semua ke satu pusat (switch/hub)</td><td>Satu kabel klien putus tidak mengganggu yang lain; mudah dikelola</td><td>Pusat rusak, semua terputus; kabel banyak</td></tr>
<tr><td><b>Ring</b></td><td>Melingkar</td><td>Aliran data teratur</td><td>Satu titik putus dapat mengganggu cincin</td></tr>
<tr><td><b>Mesh</b></td><td>Setiap node terhubung ke banyak node</td><td>Paling andal, banyak jalur cadangan</td><td>Paling mahal dan rumit</td></tr>
<tr><td><b>Tree</b></td><td>Gabungan star bertingkat</td><td>Mudah dikembangkan</td><td>Bergantung pada node induk</td></tr>
</table>

<h3>Perangkat Jaringan</h3>
<ul>
  <li><b>Hub</b>: meneruskan data ke <i>semua</i> port (kurang efisien).</li>
  <li><b>Switch</b>: meneruskan data hanya ke port tujuan berdasarkan <b>alamat MAC</b>.</li>
  <li><b>Router</b>: menghubungkan <b>jaringan yang berbeda</b> dan menentukan rute berdasarkan <b>alamat IP</b>.</li>
  <li><b>Access Point</b>: memancarkan jaringan nirkabel (Wi-Fi).</li>
  <li><b>Modem</b>: mengubah sinyal digital ↔ analog/optik (MOdulator–DEModulator) untuk koneksi ke ISP.</li>
  <li><b>NIC</b>: kartu jaringan pada komputer, memiliki alamat MAC unik (48 bit).</li>
</ul>
<p><b>Media transmisi:</b> kabel UTP (konektor RJ-45), kabel koaksial, <b>fiber optik</b> (memakai pulsa <b>cahaya</b>, tercepat dan tahan interferensi), serta nirkabel (Wi-Fi, Bluetooth, seluler, satelit).</p>

<h3>Alamat IP</h3>
<ul>
  <li><b>IPv4</b>: <b>32 bit</b>, ditulis 4 oktet desimal (0–255), contoh 192.168.1.10. Totalnya ±4,3 miliar alamat.</li>
  <li><b>IPv6</b>: <b>128 bit</b>, ditulis heksadesimal, contoh 2001:db8::1. Dibuat karena alamat IPv4 hampir habis.</li>
</ul>
<table>
<tr><th>Kelas IPv4</th><th>Oktet pertama</th><th>Subnet mask default</th></tr>
<tr><td>A</td><td>1 – 126</td><td>255.0.0.0</td></tr>
<tr><td>B</td><td>128 – 191</td><td>255.255.0.0</td></tr>
<tr><td>C</td><td>192 – 223</td><td>255.255.255.0</td></tr>
</table>
<p><small>127.x.x.x dipakai untuk <i>loopback</i> (127.0.0.1 = localhost).</small></p>
<p><b>IP privat</b> (hanya untuk jaringan lokal, tidak dapat diakses langsung dari internet): <b>10.0.0.0 – 10.255.255.255</b>, <b>172.16.0.0 – 172.31.255.255</b>, dan <b>192.168.0.0 – 192.168.255.255</b>.</p>

<h3>Protokol Penting</h3>
<table>
<tr><th>Protokol</th><th>Fungsi</th><th>Port</th></tr>
<tr><td><b>HTTP</b></td><td>Mengakses halaman web (tidak terenkripsi)</td><td>80</td></tr>
<tr><td><b>HTTPS</b></td><td>HTTP + enkripsi TLS (ikon gembok)</td><td>443</td></tr>
<tr><td><b>DNS</b></td><td>Menerjemahkan <b>nama domain → alamat IP</b> ("buku telepon internet")</td><td>53</td></tr>
<tr><td><b>DHCP</b></td><td>Memberikan alamat IP <b>secara otomatis</b> kepada perangkat</td><td>67/68</td></tr>
<tr><td><b>FTP</b></td><td>Transfer file</td><td>21</td></tr>
<tr><td><b>SMTP</b></td><td>Mengirim email</td><td>25</td></tr>
<tr><td><b>POP3 / IMAP</b></td><td>Mengambil/membaca email</td><td>110 / 143</td></tr>
<tr><td><b>SSH</b></td><td>Akses jarak jauh yang aman</td><td>22</td></tr>
</table>

<h3>Model OSI (7 Lapisan) dan TCP/IP</h3>
<table>
<tr><th>No</th><th>Lapisan OSI</th><th>Contoh</th><th>TCP/IP</th></tr>
<tr><td>7</td><td>Application</td><td>HTTP, DNS, SMTP</td><td rowspan="3">Application</td></tr>
<tr><td>6</td><td>Presentation</td><td>Enkripsi, format data (JPEG)</td></tr>
<tr><td>5</td><td>Session</td><td>Mengatur sesi koneksi</td></tr>
<tr><td>4</td><td>Transport</td><td>TCP, UDP</td><td>Transport</td></tr>
<tr><td>3</td><td>Network</td><td>IP, router</td><td>Internet</td></tr>
<tr><td>2</td><td>Data Link</td><td>MAC, switch</td><td rowspan="2">Network Access</td></tr>
<tr><td>1</td><td>Physical</td><td>Kabel, sinyal, hub</td></tr>
</table>
<p>Jembatan keledai (dari lapisan 1 ke 7): <b>"Please Do Not Throw Sausage Pizza Away"</b>.</p>
<p><b>TCP</b> andal: data dicek dan dikirim ulang bila hilang (web, email). <b>UDP</b> cepat tanpa jaminan sampai (streaming, gim daring, panggilan video).</p>

<h3>Istilah Lain</h3>
<ul>
  <li><b>Bandwidth</b>: kapasitas maksimum data per detik (Mbps). <b>Latency/ping</b>: waktu tunda (ms).</li>
  <li><b>ISP</b>: penyedia jasa internet.</li>
  <li><b>Client–server</b>: ada komputer khusus penyedia layanan. <b>Peer-to-peer</b>: setiap komputer setara.</li>
  <li><b>URL</b> <code>https://www.contoh.sch.id/info</code>: protokol <code>https</code>, domain <code>contoh.sch.id</code>, path <code>/info</code>. Domain <b>.sch.id</b> untuk sekolah, <b>.go.id</b> untuk pemerintah, <b>.ac.id</b> untuk perguruan tinggi.</li>
  <li><b>Cloud computing</b>: memakai sumber daya komputasi lewat internet (Google Drive, Gmail).</li>
  <li><b>IoT</b>: perangkat sehari-hari yang terhubung ke internet (lampu pintar, CCTV daring).</li>
</ul>

<h3>Bagaimana Data Berjalan di Internet?</h3>
<p>Data dipecah menjadi potongan kecil bernama <b>paket</b> (<i>packet switching</i>). Setiap paket berisi alamat IP asal dan tujuan. Paket bisa melewati rute berbeda, lalu disusun ulang di tujuan. Jika ada paket hilang, TCP memintanya dikirim ulang.</p>
<p>Contoh urutan saat membuka <code>www.contoh.sch.id</code>:</p>
<ol>
  <li>Perangkat mendapat alamat IP dari router melalui <b>DHCP</b>.</li>
  <li>Peramban bertanya ke <b>DNS</b>: berapa alamat IP domain itu?</li>
  <li>Peramban mengirim permintaan <b>HTTP/HTTPS</b> ke alamat IP server.</li>
  <li>Data halaman dikirim balik dalam bentuk paket-paket, lalu ditampilkan.</li>
</ol>

<h3>Teknologi Nirkabel</h3>
<table>
<tr><th>Teknologi</th><th>Keterangan</th></tr>
<tr><td><b>Wi-Fi 2,4 GHz</b></td><td>Jangkauan lebih jauh dan lebih tembus dinding, tetapi lebih lambat dan rawan gangguan</td></tr>
<tr><td><b>Wi-Fi 5 GHz</b></td><td>Lebih cepat, tetapi jangkauannya lebih pendek</td></tr>
<tr><td><b>Bluetooth</b></td><td>Jarak dekat (±10 m), hemat daya; earbuds, speaker</td></tr>
<tr><td><b>NFC</b></td><td>Jarak sangat dekat (beberapa cm); tap kartu e-money, pembayaran</td></tr>
<tr><td><b>Inframerah</b></td><td>Harus segaris lurus (line of sight); remote TV</td></tr>
<tr><td><b>Hotspot/tethering</b></td><td>Ponsel membagikan koneksi datanya ke perangkat lain</td></tr>
</table>

<h3>Generasi Jaringan Seluler</h3>
<table>
<tr><th>Generasi</th><th>Ciri utama</th></tr>
<tr><td><b>1G</b></td><td>Analog, hanya panggilan suara</td></tr>
<tr><td><b>2G</b> (GSM)</td><td>Digital, mulai ada <b>SMS</b></td></tr>
<tr><td><b>3G</b></td><td>Internet seluler dan panggilan video</td></tr>
<tr><td><b>4G</b> (LTE)</td><td>Internet pita lebar: streaming HD, video call lancar</td></tr>
<tr><td><b>5G</b></td><td>Sangat cepat, <b>latensi sangat rendah</b>, mendukung banyak perangkat IoT</td></tr>
</table>

<h3>Perintah Jaringan (Command Prompt / Terminal)</h3>
<table>
<tr><th>Perintah</th><th>Fungsi</th></tr>
<tr><td><code>ping</code></td><td>Mengecek apakah perangkat tujuan bisa dijangkau dan berapa waktu responsnya</td></tr>
<tr><td><code>ipconfig</code> (Windows) / <code>ip a</code> (Linux)</td><td>Melihat alamat IP, subnet mask, dan gateway perangkat sendiri</td></tr>
<tr><td><code>tracert</code> / <code>traceroute</code></td><td>Melihat rute (router yang dilewati) menuju tujuan</td></tr>
<tr><td><code>nslookup</code></td><td>Menanyakan alamat IP suatu domain ke DNS</td></tr>
</table>
<p><b>Default gateway</b> adalah alamat router yang menjadi "pintu keluar" dari jaringan lokal menuju jaringan lain/internet.</p>
`
    },
    // ---------------------------------------------------------------
    {
      id: "keamanan", topik: "keamanan", ikon: "🛡️",
      judul: "Keamanan Data",
      ringkas: "Segitiga CIA, jenis malware, rekayasa sosial, kata sandi dan MFA, enkripsi, serta backup 3-2-1.",
      html: `
<h3>Segitiga CIA</h3>
<div class="grid3">
<div class="kotak"><b>Confidentiality</b> (Kerahasiaan)<br>Hanya pihak berhak yang dapat membaca data.<br><small>Dilanggar jika: password bocor, data siswa tersebar.</small></div>
<div class="kotak"><b>Integrity</b> (Keutuhan)<br>Data tidak diubah tanpa izin.<br><small>Dilanggar jika: nilai rapor diubah peretas.</small></div>
<div class="kotak"><b>Availability</b> (Ketersediaan)<br>Data/layanan dapat diakses saat dibutuhkan.<br><small>Dilanggar jika: server diserang DDoS hingga lumpuh.</small></div>
</div>

<h3>Jenis Malware (Perangkat Lunak Jahat)</h3>
<table>
<tr><th>Jenis</th><th>Ciri khas</th></tr>
<tr><td><b>Virus</b></td><td>Menempel pada file/program inang; aktif saat file dijalankan</td></tr>
<tr><td><b>Worm</b></td><td>Menyebar <b>sendiri</b> melalui jaringan tanpa perlu inang</td></tr>
<tr><td><b>Trojan</b></td><td><b>Menyamar</b> sebagai program berguna (misalnya gim bajakan atau "cheat")</td></tr>
<tr><td><b>Ransomware</b></td><td><b>Mengenkripsi</b> file korban lalu meminta <b>tebusan</b></td></tr>
<tr><td><b>Spyware</b></td><td>Memata-matai aktivitas diam-diam</td></tr>
<tr><td><b>Keylogger</b></td><td>Merekam setiap ketikan keyboard (mencuri password)</td></tr>
<tr><td><b>Adware</b></td><td>Menampilkan iklan berlebihan</td></tr>
<tr><td><b>Botnet</b></td><td>Jaringan komputer terinfeksi yang dikendalikan dari jauh (sering untuk DDoS)</td></tr>
</table>

<h3>Serangan Rekayasa Sosial (Social Engineering)</h3>
<p>Menyerang <b>manusia</b>, bukan mesin, dengan memanipulasi rasa percaya, takut, atau terburu-buru.</p>
<ul>
  <li><b>Phishing</b>: pesan/email/situs palsu yang memancing korban memberikan data (password, OTP).</li>
  <li><b>Smishing / vishing</b>: phishing lewat SMS/WhatsApp atau telepon.</li>
  <li><b>Pretexting</b>: berpura-pura menjadi pihak tepercaya (misalnya "petugas bank" atau "admin sekolah").</li>
  <li><b>Baiting</b>: umpan seperti flashdisk "gratis" berisi malware.</li>
  <li><b>Shoulder surfing</b>: mengintip layar atau ketikan PIN.</li>
</ul>
<p>Tanda phishing: <b>mendesak</b> ("akun diblokir dalam 1 jam!"), alamat pengirim/URL <b>mirip tapi beda</b> (g00gle.com), meminta <b>OTP/password</b>, hadiah yang terlalu bagus untuk jadi kenyataan, dan tautan yang dipendekkan.</p>

<h3>Serangan Teknis Lain</h3>
<ul>
  <li><b>DDoS</b>: membanjiri server dengan lalu lintas palsu, sehingga mengganggu <b>Availability</b>.</li>
  <li><b>Brute force</b>: mencoba semua kemungkinan password.</li>
  <li><b>Man-in-the-Middle</b>: menyadap komunikasi, misalnya di Wi-Fi publik tanpa enkripsi.</li>
  <li><b>SQL Injection</b>: menyisipkan perintah basis data lewat kolom isian situs web.</li>
</ul>

<h3>Autentikasi dan Kata Sandi</h3>
<ul>
  <li>Password kuat: <b>panjang (≥12 karakter)</b>, kombinasi huruf besar-kecil, angka, dan simbol, tidak memakai data pribadi, serta <b>berbeda</b> untuk setiap akun.</li>
  <li><b>Passphrase</b> lebih mudah diingat: <i>Kucing!Makan3Bakso_Pagi</i>.</li>
  <li><b>MFA / 2FA</b>: memakai dua faktor atau lebih dari jenis berbeda:
    <ul><li>sesuatu yang <b>diketahui</b> (password, PIN)</li>
    <li>sesuatu yang <b>dimiliki</b> (HP penerima OTP, kunci keamanan)</li>
    <li>sesuatu yang <b>melekat</b> pada diri (sidik jari, wajah)</li></ul></li>
  <li><b>Jangan pernah</b> membagikan OTP kepada siapa pun, termasuk yang mengaku petugas.</li>
  <li>Gunakan <b>password manager</b> untuk menyimpan banyak password kuat.</li>
</ul>

<h3>Kriptografi (Enkripsi)</h3>
<p><b>Enkripsi</b> mengubah <i>plaintext</i> (teks asli) menjadi <i>ciphertext</i> (teks sandi) yang tidak terbaca tanpa <b>kunci</b>. <b>Dekripsi</b> adalah kebalikannya.</p>
<ul>
  <li><b>Simetris</b>: kunci untuk enkripsi dan dekripsi <b>sama</b> (contoh AES).</li>
  <li><b>Asimetris</b>: sepasang kunci, yaitu <b>kunci publik</b> untuk mengenkripsi dan <b>kunci privat</b> untuk mendekripsi (contoh RSA, dipakai pada HTTPS).</li>
  <li><b>Caesar cipher</b>: setiap huruf digeser <i>k</i> posisi. Geser 3: ABC → DEF, ZOO → CRR.</li>
  <li><b>Hashing</b>: mengubah data menjadi kode unik satu arah (dipakai untuk menyimpan password dan mengecek integritas file).</li>
</ul>

<h3>Mengapa Password Panjang Lebih Aman? (Hitungan)</h3>
<p>Banyak kemungkinan kombinasi = <b>(banyak jenis karakter)<sup>panjang</sup></b>.</p>
<ul>
  <li>PIN 4 digit: 10⁴ = <b>10.000</b> kemungkinan.</li>
  <li>PIN 6 digit: 10⁶ = <b>1.000.000</b> kemungkinan.</li>
  <li>3 huruf kecil: 26³ = <b>17.576</b> kemungkinan.</li>
  <li>Menambah panjang jauh lebih efektif daripada sekadar mengganti huruf menjadi angka.</li>
</ul>

<h3>Istilah Keamanan Lain</h3>
<ul>
  <li><b>White hat hacker</b>: peretas etis yang menguji keamanan dengan izin. <b>Black hat</b>: peretas jahat. <b>Grey hat</b>: di antara keduanya (tanpa izin, tetapi tidak merusak).</li>
  <li><b>Enkripsi end-to-end</b>: pesan hanya dapat dibaca pengirim dan penerima; server penyedia layanan tidak dapat membacanya.</li>
  <li><b>CAPTCHA</b>: tes untuk membedakan manusia dan bot (misalnya memilih gambar lampu lalu lintas).</li>
  <li><b>Cookies</b>: file kecil dari situs web yang disimpan peramban untuk mengingat login atau preferensi.</li>
  <li><b>Patch</b>: pembaruan kecil untuk menambal celah. <b>Zero-day</b>: celah yang belum diketahui/ditambal pembuat software.</li>
  <li><b>Sandboxing</b>: menjalankan program di lingkungan terisolasi agar tidak merusak sistem.</li>
  <li><b>Data breach</b>: kebocoran data dari sebuah layanan; segera ganti password akun terkait.</li>
</ul>

<h3>Perlindungan</h3>
<ul>
  <li><b>Firewall</b>: menyaring lalu lintas jaringan masuk/keluar berdasarkan aturan.</li>
  <li><b>Antivirus</b>: mendeteksi dan menghapus malware.</li>
  <li><b>Update/patch</b> rutin: menambal celah keamanan.</li>
  <li><b>HTTPS</b> (ikon gembok): koneksi terenkripsi, tetapi <u>tidak menjamin</u> situsnya jujur. Situs phishing pun bisa memakai HTTPS.</li>
  <li><b>VPN</b>: membuat terowongan terenkripsi, berguna di Wi-Fi publik.</li>
  <li><b>Backup 3-2-1</b>: <b>3</b> salinan data, di <b>2</b> jenis media berbeda, <b>1</b> salinan di lokasi lain (offsite/cloud).</li>
  <li>Kunci layar dan <i>log out</i> dari komputer umum.</li>
</ul>
`
    },
    // ---------------------------------------------------------------
    {
      id: "sejarah", topik: "sejarah", ikon: "📜",
      judul: "Sejarah TIK",
      ringkas: "Dari abakus sampai AI: tokoh, penemuan, generasi komputer, sejarah internet, dan TIK di Indonesia.",
      html: `
<h3>Alat Hitung Sebelum Komputer Elektronik</h3>
<div class="timeline">
<div><b>± 3000 SM</b> <b>Abakus</b>, alat hitung tertua (sempoa).</div>
<div><b>1617</b> <b>Napier's Bones</b>, alat bantu perkalian karya John Napier.</div>
<div><b>1642</b> <b>Pascaline</b>, kalkulator mekanik penjumlahan karya <b>Blaise Pascal</b>.</div>
<div><b>1673</b> <b>Stepped Reckoner</b> karya <b>Gottfried Leibniz</b>, bisa mengalikan dan membagi. Leibniz juga mengembangkan sistem bilangan biner.</div>
<div><b>1804</b> <b>Mesin tenun Jacquard</b> memakai <b>kartu berlubang</b> untuk mengatur pola. Ini cikal bakal ide "program".</div>
<div><b>1822 & 1837</b> <b>Charles Babbage</b> merancang <i>Difference Engine</i> dan <i>Analytical Engine</i>. Ia dijuluki <b>Bapak Komputer</b>.</div>
<div><b>1843</b> <b>Ada Lovelace</b> menulis algoritma untuk Analytical Engine dan dikenal sebagai <b>programmer pertama</b>.</div>
<div><b>1890</b> <b>Herman Hollerith</b> membuat mesin tabulasi kartu berlubang untuk <b>sensus AS</b>. Perusahaannya kelak menjadi bagian dari <b>IBM</b>.</div>
<div><b>1936</b> <b>Alan Turing</b> memperkenalkan konsep <b>Mesin Turing</b>, dasar teori komputasi. Saat Perang Dunia II ia membantu memecahkan sandi <b>Enigma</b>.</div>
</div>

<h3>Lima Generasi Komputer</h3>
<table>
<tr><th>Generasi</th><th>Teknologi utama</th><th>Ciri dan contoh</th></tr>
<tr><td><b>I</b> (±1940–1956)</td><td><b>Tabung vakum</b></td><td>Sangat besar, panas, boros listrik. Contoh: <b>ENIAC</b> (1946, Mauchly & Eckert), UNIVAC I.</td></tr>
<tr><td><b>II</b> (±1956–1963)</td><td><b>Transistor</b></td><td>Lebih kecil dan hemat. Transistor ditemukan tahun <b>1947</b> di Bell Labs (Bardeen, Brattain, Shockley). Mulai ada bahasa tingkat tinggi (FORTRAN, COBOL).</td></tr>
<tr><td><b>III</b> (±1964–1971)</td><td><b>IC (Integrated Circuit)</b></td><td>Banyak transistor dalam satu chip (IC oleh Jack Kilby, 1958). Mulai ada sistem operasi, keyboard, dan monitor. Contoh: IBM System/360.</td></tr>
<tr><td><b>IV</b> (±1971–sekarang)</td><td><b>Mikroprosesor</b> (VLSI)</td><td><b>Intel 4004</b> (1971) adalah mikroprosesor komersial pertama. Lahir komputer pribadi: Apple I (1976), IBM PC (1981), laptop, ponsel pintar.</td></tr>
<tr><td><b>V</b> (sekarang–masa depan)</td><td><b>Kecerdasan Artifisial</b></td><td>Pemrosesan bahasa alami, pembelajaran mesin, robotika, komputasi kuantum.</td></tr>
</table>

<h3>Sejarah Internet dan Web</h3>
<div class="timeline">
<div><b>1969</b> <b>ARPANET</b> (Departemen Pertahanan AS) menghubungkan komputer universitas. Ini cikal bakal internet.</div>
<div><b>1971</b> <b>Ray Tomlinson</b> mengirim email jaringan pertama dan memakai simbol <b>@</b>.</div>
<div><b>1974</b> Vint Cerf & Bob Kahn merancang <b>TCP/IP</b>. Keduanya dijuluki "Bapak Internet".</div>
<div><b>1983</b> ARPANET resmi beralih ke <b>TCP/IP</b> (1 Januari 1983). DNS diperkenalkan tahun yang sama.</div>
<div><b>1989–1991</b> <b>Tim Berners-Lee</b> di <b>CERN</b> menciptakan <b>World Wide Web</b> (HTML, HTTP, URL). Situs web pertama aktif 1991.</div>
<div><b>1993</b> Peramban grafis <b>Mosaic</b> membuat web populer.</div>
<div><b>1998</b> <b>Google</b> didirikan.</div>
<div><b>2004–2007</b> Era media sosial (Facebook 2004, YouTube 2005) dan ponsel pintar layar sentuh (iPhone 2007).</div>
<div><b>2010-an–kini</b> Komputasi awan, IoT, jaringan 4G/5G, dan kecerdasan artifisial generatif.</div>
</div>

<h3>TIK di Indonesia</h3>
<ul>
  <li><b>1976</b>: Indonesia meluncurkan satelit komunikasi <b>Palapa A1</b>. Indonesia menjadi negara berkembang pertama yang memiliki sistem komunikasi satelit domestik.</li>
  <li><b>1994</b>: <b>IndoNet</b> menjadi ISP komersial pertama di Indonesia.</li>
  <li>Tokoh: <b>Onno W. Purbo</b> dikenal sebagai salah satu pelopor internet di Indonesia.</li>
</ul>

<h3>Tokoh Penting (Ringkas)</h3>
<table>
<tr><th>Tokoh</th><th>Kontribusi</th></tr>
<tr><td>Charles Babbage</td><td>Analytical Engine, "Bapak Komputer"</td></tr>
<tr><td>Ada Lovelace</td><td>Programmer pertama</td></tr>
<tr><td>George Boole</td><td>Aljabar Boolean (dasar gerbang logika)</td></tr>
<tr><td>Alan Turing</td><td>Mesin Turing, Uji Turing, Bapak Ilmu Komputer teoretis</td></tr>
<tr><td>John von Neumann</td><td>Arsitektur komputer program tersimpan</td></tr>
<tr><td>Grace Hopper</td><td>Kompiler pertama, COBOL, mempopulerkan istilah "bug"</td></tr>
<tr><td>Tim Berners-Lee</td><td>World Wide Web</td></tr>
<tr><td>Vint Cerf & Bob Kahn</td><td>TCP/IP</td></tr>
<tr><td>Linus Torvalds</td><td>Kernel Linux (1991)</td></tr>
<tr><td>Konrad Zuse</td><td>Z3 (1941), komputer terprogram pertama yang berfungsi</td></tr>
<tr><td>Douglas Engelbart</td><td>Penemu <b>mouse</b> (didemonstrasikan 1968)</td></tr>
<tr><td>Bill Gates & Paul Allen</td><td>Mendirikan <b>Microsoft</b> (1975)</td></tr>
<tr><td>Steve Jobs & Steve Wozniak</td><td>Mendirikan <b>Apple</b> (1976)</td></tr>
<tr><td>Larry Page & Sergey Brin</td><td>Mendirikan <b>Google</b> (1998)</td></tr>
<tr><td>Mark Zuckerberg</td><td>Mendirikan <b>Facebook</b> (2004)</td></tr>
</table>

<h3>Tonggak Penting Lain</h3>
<div class="timeline">
<div><b>1854</b> George Boole menerbitkan dasar <b>aljabar Boolean</b>.</div>
<div><b>1941</b> <b>Z3</b> karya Konrad Zuse di Jerman.</div>
<div><b>1943–1944</b> <b>Colossus</b> di Inggris dipakai untuk memecahkan sandi Jerman.</div>
<div><b>1945</b> John von Neumann menulis rancangan komputer program tersimpan (EDVAC).</div>
<div><b>1947</b> Grace Hopper dan timnya menemukan ngengat di komputer Mark II, yang dicatat sebagai "bug" pertama.</div>
<div><b>1951</b> <b>UNIVAC I</b>, salah satu komputer komersial pertama di AS.</div>
<div><b>1981</b> <b>IBM PC</b> memopulerkan komputer pribadi di kantor.</div>
<div><b>1984</b> <b>Apple Macintosh</b> memopulerkan GUI dan mouse.</div>
<div><b>1985</b> <b>Windows 1.0</b> dirilis Microsoft.</div>
<div><b>1991</b> <b>Linux</b> dirilis Linus Torvalds; situs web pertama aktif.</div>
<div><b>2001</b> <b>Wikipedia</b> diluncurkan.</div>
<div><b>2008</b> Ponsel Android pertama dirilis.</div>
</div>
<div class="tips"><b>💡 Tips menghafal generasi komputer</b> "<b>Ta-Tra-I-Mi-A</b>": <b>Ta</b>bung vakum → <b>Tra</b>nsistor → <b>I</b>C → <b>Mi</b>kroprosesor → <b>A</b>I.</div>
`
    },
    // ---------------------------------------------------------------
    {
      id: "etika", topik: "etika", ikon: "⚖️",
      judul: "Etika Siber & Hukum Digital",
      ringkas: "Netiket, jejak digital, hoaks, perundungan siber, hak cipta dan lisensi, UU ITE, serta UU PDP.",
      html: `
<h3>Empat Pilar Literasi Digital</h3>
<div class="grid4">
  <div class="pilar"><span>1</span><b>Cakap Digital</b><p>Mampu menggunakan perangkat dan aplikasi.</p></div>
  <div class="pilar"><span>2</span><b>Etika Digital</b><p>Berperilaku sopan dan bertanggung jawab di dunia maya.</p></div>
  <div class="pilar"><span>3</span><b>Budaya Digital</b><p>Membawa nilai Pancasila dan kebinekaan ke ruang digital.</p></div>
  <div class="pilar"><span>4</span><b>Aman Digital</b><p>Melindungi data pribadi dan diri dari ancaman.</p></div>
</div>

<h3>Netiket (Etika Berinternet)</h3>
<ul>
  <li>Ingat bahwa di balik layar ada <b>manusia</b>.</li>
  <li>Menulis SEMUA HURUF KAPITAL dianggap <b>berteriak</b>.</li>
  <li>Gunakan bahasa santun, hormati privasi, jangan menyebar informasi yang belum diverifikasi.</li>
  <li>Hormati waktu orang: tidak mengirim pesan berlebihan (spam) atau pada jam istirahat untuk urusan tidak mendesak.</li>
  <li>Cantumkan sumber saat membagikan karya orang lain.</li>
</ul>

<h3>Jejak Digital</h3>
<p>Semua aktivitas daring (unggahan, komentar, pencarian, lokasi) meninggalkan jejak yang <b>sulit dihapus permanen</b>, karena bisa sudah disimpan, di-<i>screenshot</i>, atau diarsipkan pihak lain.</p>
<ul>
  <li><b>Jejak aktif</b>: sengaja dibuat (posting, komentar).</li>
  <li><b>Jejak pasif</b>: terekam tanpa disadari (riwayat lokasi, cookies).</li>
</ul>
<p>Hindari <b>oversharing</b> (terlalu banyak berbagi), misalnya lokasi <i>real-time</i>, alamat rumah, foto tiket atau boarding pass, dan jadwal rumah kosong.</p>

<h3>Hoaks dan Cek Fakta</h3>
<p>Langkah memeriksa informasi:</p>
<ol>
  <li>Waspadai judul provokatif atau bombastis.</li>
  <li>Cek <b>sumber dan alamat situs</b> (resmi atau abal-abal?).</li>
  <li>Periksa <b>tanggal</b> (berita lama yang diangkat ulang?).</li>
  <li><b>Bandingkan</b> dengan media lain yang kredibel.</li>
  <li>Cek keaslian foto (<i>reverse image search</i>).</li>
  <li>Gunakan situs cek fakta, misalnya laman klarifikasi hoaks pemerintah atau cekfakta.com.</li>
</ol>
<p>Istilah: <b>misinformasi</b> (informasi salah, tersebar tanpa niat jahat), <b>disinformasi</b> (sengaja dibuat untuk menipu), <b>malinformasi</b> (informasi benar yang disebar untuk merugikan, misalnya data pribadi).</p>

<h3>Perundungan Siber (Cyberbullying)</h3>
<p>Bentuknya antara lain mengejek, mengancam, menyebar aib, mengucilkan dari grup, atau membuat akun palsu atas nama orang lain.</p>
<p>Yang sebaiknya dilakukan korban atau saksi:</p>
<ul>
  <li><b>Jangan membalas</b> dengan perundungan.</li>
  <li><b>Simpan bukti</b> (tangkapan layar).</li>
  <li><b>Blokir dan laporkan</b> akun pelaku ke platform.</li>
  <li><b>Ceritakan</b> kepada orang dewasa tepercaya (orang tua, guru BK, wali kelas).</li>
  <li>Sebagai saksi: dukung korban dan jangan ikut menyebarkan.</li>
</ul>
<p><b>Doxing</b>: menyebarkan data pribadi orang lain (alamat, nomor HP) tanpa izin untuk menyerang atau mempermalukan.</p>

<h3>Hak Kekayaan Intelektual dan Lisensi</h3>
<ul>
  <li><b>Plagiarisme</b>: mengaku karya orang lain sebagai karya sendiri.</li>
  <li><b>Pembajakan</b>: menggandakan/menyebarkan software, film, atau musik tanpa izin pemilik hak cipta.</li>
</ul>
<table>
<tr><th>Jenis lisensi</th><th>Arti</th></tr>
<tr><td><b>Proprietary</b> (berbayar)</td><td>Harus membeli lisensi; kode sumber tertutup</td></tr>
<tr><td><b>Freeware</b></td><td>Gratis dipakai, tetapi kode sumber <b>tertutup</b></td></tr>
<tr><td><b>Shareware / trial</b></td><td>Boleh dicoba gratis dalam waktu/fitur terbatas</td></tr>
<tr><td><b>Open source</b></td><td>Kode sumber <b>terbuka</b>, boleh dipelajari, diubah, dan dibagikan sesuai lisensi (contoh Linux, LibreOffice)</td></tr>
<tr><td><b>Public domain</b></td><td>Bebas digunakan siapa saja tanpa izin</td></tr>
</table>
<p><b>Creative Commons (CC)</b>: lisensi untuk karya kreatif. <b>BY</b> = wajib mencantumkan nama pencipta; <b>NC</b> = non-komersial; <b>ND</b> = tidak boleh diubah; <b>SA</b> = karya turunan harus memakai lisensi yang sama.</p>

<h3>Regulasi di Indonesia</h3>
<table>
<tr><th>Undang-undang</th><th>Isi pokok</th></tr>
<tr><td><b>UU ITE</b>: UU No. 11 Tahun 2008, diubah dengan UU No. 19 Tahun 2016 dan UU No. 1 Tahun 2024</td><td>Informasi dan Transaksi Elektronik: penghinaan/pencemaran nama baik, penyebaran berita bohong, akses ilegal ke sistem orang lain, konten yang dilarang</td></tr>
<tr><td><b>UU PDP</b>: UU No. 27 Tahun 2022</td><td>Pelindungan Data Pribadi: hak pemilik data, kewajiban pengelola data, larangan memperoleh atau menyebarkan data pribadi orang lain secara melawan hukum</td></tr>
<tr><td><b>UU Hak Cipta</b>: UU No. 28 Tahun 2014</td><td>Perlindungan karya cipta, termasuk program komputer</td></tr>
</table>
<p><b>Contoh data pribadi:</b> nama lengkap bersama NIK, alamat rumah, nomor HP, tanggal lahir, foto wajah, data kesehatan, dan data biometrik.</p>
<p><b>Contoh pelanggaran:</b> masuk ke akun teman tanpa izin (meski tahu password-nya), menyebar foto orang tanpa izin, membuat akun palsu, dan menyebar hoaks.</p>

<h3>Masa Berlaku Hak Cipta</h3>
<p>Menurut UU No. 28 Tahun 2014, hak cipta atas karya seperti buku, lagu, dan lukisan umumnya berlaku <b>seumur hidup pencipta ditambah 70 tahun</b> setelah ia meninggal. Hak cipta <b>program komputer</b> berlaku <b>50 tahun</b> sejak pertama kali dipublikasikan.</p>
<p>Mengutip sebagian karya untuk pendidikan atau ulasan diperbolehkan, asalkan <b>sumbernya disebutkan</b> dan tidak merugikan kepentingan wajar pencipta.</p>

<h3>Ujaran Kebencian dan Konten Negatif</h3>
<ul>
  <li><b>Ujaran kebencian</b>: konten yang menghasut kebencian berdasarkan <b>SARA</b> (suku, agama, ras, dan antargolongan). Dilarang dalam UU ITE.</li>
  <li><b>Trolling</b>: sengaja memancing emosi atau keributan di kolom komentar.</li>
  <li><b>Flaming</b>: adu argumen kasar dan penuh amarah secara daring.</li>
  <li><b>Clickbait</b>: judul menipu agar orang mengeklik.</li>
  <li>Sikap yang tepat: jangan ikut menyebarkan, laporkan ke platform, dan jaga komentar tetap santun.</li>
</ul>

<h3>Penipuan Daring dan Keamanan Diri</h3>
<ul>
  <li>Modus umum: hadiah/undian palsu, "salah transfer", akun palsu yang meminjam uang, lowongan kerja palsu, dan file <b>.apk</b> berkedok undangan atau resi paket.</li>
  <li><b>Akun palsu (fake account/catfishing)</b>: orang yang menyamar menjadi orang lain. Jangan membagikan foto pribadi, alamat, atau data keluarga kepada kenalan daring.</li>
  <li>Jangan pernah menemui orang yang hanya dikenal lewat internet tanpa sepengetahuan dan pendampingan orang tua.</li>
  <li>Jika merasa terancam atau dipaksa, hentikan percakapan, simpan bukti, dan ceritakan kepada orang tua atau guru.</li>
</ul>

<h3>Etika Menggunakan Kecerdasan Artifisial (AI)</h3>
<ul>
  <li>Hasil AI bisa salah ("halusinasi"), sehingga harus <b>diperiksa ulang</b> dengan sumber tepercaya.</li>
  <li>Bersikap jujur: ikuti aturan guru dan <b>nyatakan</b> jika memakai AI dalam tugas.</li>
  <li>Jangan memasukkan data pribadi atau rahasia ke layanan AI.</li>
  <li><b>Deepfake</b>: video/audio/foto palsu buatan AI yang meniru wajah atau suara seseorang. Membuat dan menyebarkannya untuk menipu atau mempermalukan orang lain adalah pelanggaran etika dan hukum.</li>
  <li>AI bisa <b>bias</b> jika data latihnya tidak seimbang.</li>
</ul>

<h3>Kesejahteraan Digital (Digital Well-being)</h3>
<ul>
  <li>Batasi <i>screen time</i>, terutama menjelang tidur.</li>
  <li>Aturan <b>20-20-20</b>: setiap 20 menit, lihat benda sejauh ±20 kaki (6 meter) selama 20 detik.</li>
  <li>Posisi duduk ergonomis: layar sejajar mata, punggung tegak.</li>
  <li>Waspadai <b>FOMO</b> (fear of missing out) dan kecanduan gim/media sosial.</li>
</ul>
`
    },
    // ---------------------------------------------------------------
    {
      id: "software", topik: "software", ikon: "💾",
      judul: "Perangkat Lunak, File & Representasi Data",
      ringkas: "File dan ekstensi, kompresi, ASCII/Unicode, piksel dan warna RGB, suara digital, spreadsheet, serta shortcut keyboard.",
      html: `
<h3>File, Folder, dan Path</h3>
<ul>
  <li><b>File</b>: kumpulan data yang disimpan dengan nama tertentu. <b>Folder/direktori</b>: wadah untuk mengelompokkan file.</li>
  <li><b>Path</b> (alamat lokasi file). Windows: <code>C:\\Users\\Ani\\Dokumen\\tugas.docx</code>. Linux/macOS: <code>/home/ani/Dokumen/tugas.docx</code>.</li>
  <li><b>Ekstensi</b> adalah akhiran nama file setelah titik yang menunjukkan jenis file.</li>
</ul>
<table>
<tr><th>Ekstensi</th><th>Jenis file</th></tr>
<tr><td>.docx / .odt</td><td>Dokumen pengolah kata (Word / LibreOffice Writer)</td></tr>
<tr><td>.xlsx / .csv</td><td>Lembar kerja (spreadsheet) / data tabel berpemisah koma</td></tr>
<tr><td>.pptx</td><td>Presentasi</td></tr>
<tr><td>.pdf</td><td>Dokumen siap cetak yang tampilannya sama di semua perangkat</td></tr>
<tr><td>.txt</td><td>Teks polos tanpa format</td></tr>
<tr><td>.jpg/.jpeg, .png, .gif, .svg</td><td>Gambar (.gif bisa animasi; .svg gambar vektor)</td></tr>
<tr><td>.mp3, .wav</td><td>Audio</td></tr>
<tr><td>.mp4, .mkv, .avi</td><td>Video</td></tr>
<tr><td>.zip, .rar, .7z</td><td>Arsip terkompresi</td></tr>
<tr><td>.exe / .apk</td><td>Program yang dapat dijalankan (Windows / Android). <b>Waspadai</b> jika dikirim orang tak dikenal.</td></tr>
<tr><td>.html, .css, .js, .py</td><td>Kode halaman web dan program</td></tr>
</table>

<h3>Kompresi Data</h3>
<table>
<tr><th>Jenis</th><th>Cara kerja</th><th>Contoh</th></tr>
<tr><td><b>Lossless</b></td><td>Ukuran mengecil <b>tanpa</b> kehilangan data; dapat dikembalikan persis seperti aslinya</td><td>ZIP, PNG, FLAC</td></tr>
<tr><td><b>Lossy</b></td><td>Membuang sebagian data yang kurang terasa oleh mata/telinga; ukuran jauh lebih kecil, kualitas sedikit turun</td><td>JPEG, MP3, MP4</td></tr>
</table>
<p>Dokumen teks dan program harus dikompresi <b>lossless</b>, karena kehilangan satu karakter saja bisa merusak isinya.</p>

<h3>Representasi Teks</h3>
<ul>
  <li><b>ASCII</b>: setiap karakter diberi kode angka. ASCII standar memakai <b>7 bit</b> sehingga ada <b>128</b> karakter.</li>
  <li>Kode penting: <b>'A' = 65</b>, 'B' = 66, … 'Z' = 90; <b>'a' = 97</b>; <b>'0' = 48</b>; spasi = 32.</li>
  <li>Selisih huruf besar dan kecil yang sama adalah <b>32</b> ('a' − 'A' = 97 − 65).</li>
  <li><b>Unicode</b> (misalnya UTF-8) mencakup ratusan ribu karakter: huruf dari berbagai bahasa, aksara daerah, simbol, dan <b>emoji</b>.</li>
</ul>

<h3>Representasi Gambar</h3>
<ul>
  <li><b>Gambar bitmap/raster</b> tersusun dari titik-titik kecil bernama <b>piksel</b>. Jika diperbesar berlebihan, tampak pecah (pixelated). Contoh: JPG, PNG.</li>
  <li><b>Gambar vektor</b> tersusun dari rumus garis dan bentuk, sehingga <b>tetap tajam saat diperbesar</b>. Cocok untuk logo. Contoh: SVG.</li>
  <li><b>Kedalaman warna</b> (bit per piksel): 1 bit = 2 warna (hitam-putih), 8 bit = 256 warna, 24 bit = ±16,7 juta warna.</li>
  <li><b>RGB</b>: warna layar disusun dari Merah, Hijau, Biru, masing-masing 0–255 (8 bit). (255, 0, 0) = merah; (0, 0, 0) = hitam; (255, 255, 255) = putih. Kode heksa: <code>#FF0000</code> = merah.</li>
  <li><b>CMYK</b> (Cyan, Magenta, Yellow, Key/hitam) dipakai untuk <b>pencetakan</b>.</li>
  <li>Ukuran gambar tanpa kompresi = lebar × tinggi × bit per piksel ÷ 8 (byte).</li>
</ul>

<h3>Representasi Suara dan Video</h3>
<ul>
  <li>Suara analog diubah menjadi digital dengan <b>sampling</b> (pengambilan contoh gelombang berkala).</li>
  <li><b>Sampling rate</b> (Hz): banyak sampel per detik. CD audio memakai 44.100 Hz. Semakin tinggi, kualitas makin baik dan file makin besar.</li>
  <li><b>Bit depth</b>: ketelitian tiap sampel (misalnya 16 bit).</li>
  <li>Video adalah rangkaian gambar (<b>frame</b>). Kecepatannya diukur dalam <b>fps</b> (frame per second), misalnya 30 fps.</li>
  <li>Alat pengubah analog → digital disebut <b>ADC</b>; digital → analog disebut <b>DAC</b>.</li>
</ul>

<h3>Aplikasi Perkantoran</h3>
<p><b>Spreadsheet</b> (Microsoft Excel, Google Sheets, LibreOffice Calc):</p>
<ul>
  <li><b>Kolom</b> diberi nama huruf (A, B, C …), <b>baris</b> diberi nomor (1, 2, 3 …). Pertemuannya disebut <b>sel</b>, misalnya B3.</li>
  <li>Rumus selalu diawali tanda <b>=</b>.</li>
  <li><b>Range</b> A1:A5 berarti sel A1 sampai A5 (5 sel). B2:C4 berarti 2 kolom × 3 baris = 6 sel.</li>
  <li>Fungsi: <code>SUM</code> (jumlah), <code>AVERAGE</code> (rata-rata), <code>MAX</code>, <code>MIN</code>, <code>COUNT</code> (banyak sel berisi angka), <code>IF</code> (logika). Contoh: <code>=IF(B2>=75;"Tuntas";"Remedial")</code>.</li>
  <li><b>Alamat absolut</b> <code>$A$1</code> tidak berubah saat rumus disalin; <b>alamat relatif</b> <code>A1</code> ikut bergeser.</li>
</ul>
<p><b>Pengolah kata</b>: mengatur huruf, paragraf, tabel, margin, header-footer, dan <i>mail merge</i> (membuat banyak surat sekaligus dari satu data). <b>Presentasi</b>: slide, transisi (perpindahan antarslide), dan animasi (gerakan objek dalam slide).</p>

<h3>Shortcut Keyboard Penting</h3>
<table>
<tr><th>Tombol</th><th>Fungsi</th><th>Tombol</th><th>Fungsi</th></tr>
<tr><td>Ctrl + C</td><td>Salin</td><td>Ctrl + X</td><td>Potong</td></tr>
<tr><td>Ctrl + V</td><td>Tempel</td><td>Ctrl + Z</td><td>Batalkan (undo)</td></tr>
<tr><td>Ctrl + Y</td><td>Ulangi (redo)</td><td>Ctrl + S</td><td>Simpan</td></tr>
<tr><td>Ctrl + A</td><td>Pilih semua</td><td>Ctrl + F</td><td>Cari</td></tr>
<tr><td>Ctrl + P</td><td>Cetak</td><td>Ctrl + B / I / U</td><td>Tebal / miring / garis bawah</td></tr>
<tr><td>Alt + Tab</td><td>Berpindah jendela</td><td>Alt + F4</td><td>Menutup jendela aktif</td></tr>
<tr><td>Windows + L</td><td>Mengunci layar</td><td>Windows + D</td><td>Menampilkan desktop</td></tr>
<tr><td>Ctrl + Shift + Esc</td><td>Membuka Task Manager</td><td>F2</td><td>Mengganti nama file</td></tr>
<tr><td>F5</td><td>Memuat ulang (refresh)</td><td>Windows + E</td><td>Membuka File Explorer</td></tr>
</table>

<h3>Sistem File</h3>
<ul>
  <li><b>FAT32</b>: sangat kompatibel, tetapi ukuran satu file <b>maksimal 4 GB</b>.</li>
  <li><b>exFAT</b>: untuk flashdisk/kartu memori, mendukung file besar.</li>
  <li><b>NTFS</b>: sistem file utama Windows.</li>
  <li><b>ext4</b>: Linux. <b>APFS</b>: macOS.</li>
  <li><b>Format</b> media akan <b>menghapus</b> seluruh isinya.</li>
</ul>
`
    },
    // ---------------------------------------------------------------
    {
      id: "terkini", topik: "terkini", ikon: "🚀",
      judul: "Teknologi Terkini: Cloud, IoT, AI & Big Data",
      ringkas: "Komputasi awan (SaaS/PaaS/IaaS), Internet of Things, kecerdasan artifisial dan machine learning, big data, AR/VR, dan layanan digital.",
      html: `
<h3>Komputasi Awan (Cloud Computing)</h3>
<p>Memakai sumber daya komputasi (penyimpanan, server, aplikasi) <b>melalui internet</b> tanpa harus memiliki perangkatnya sendiri. Biasanya dibayar sesuai pemakaian.</p>
<table>
<tr><th>Model layanan</th><th>Yang disediakan</th><th>Contoh</th></tr>
<tr><td><b>SaaS</b> (Software as a Service)</td><td>Aplikasi siap pakai lewat peramban</td><td>Gmail, Google Docs, Canva, Zoom</td></tr>
<tr><td><b>PaaS</b> (Platform as a Service)</td><td>Platform untuk membuat dan menjalankan aplikasi</td><td>Google App Engine, Heroku</td></tr>
<tr><td><b>IaaS</b> (Infrastructure as a Service)</td><td>Infrastruktur: server virtual, penyimpanan, jaringan</td><td>Amazon EC2, Google Compute Engine</td></tr>
</table>
<p>Model penerapan: <b>public cloud</b> (dipakai banyak pelanggan), <b>private cloud</b> (khusus satu organisasi), <b>hybrid cloud</b> (gabungan).</p>
<p>Kelebihan: dapat diakses dari mana saja, mudah berkolaborasi, tidak perlu membeli server. Kekurangan: butuh internet dan bergantung pada keamanan penyedia.</p>

<h3>Internet of Things (IoT)</h3>
<p>Benda sehari-hari yang dilengkapi <b>sensor</b>, <b>pemroses</b> (mikrokontroler), dan <b>koneksi internet</b> sehingga dapat mengirim data dan dikendalikan dari jauh.</p>
<ul>
  <li><b>Sensor</b> = alat input yang mengukur lingkungan (suhu, cahaya, gerak, kelembapan tanah).</li>
  <li><b>Aktuator</b> = alat output yang melakukan aksi (motor, pompa air, lampu, buzzer).</li>
  <li>Contoh: lampu pintar, penyiram tanaman otomatis, smartwatch, CCTV daring, tempat sampah pintar.</li>
  <li>Papan mikrokontroler populer untuk belajar: Arduino, ESP32, micro:bit.</li>
  <li>Risiko: perangkat IoT dengan password bawaan (default) mudah diretas.</li>
</ul>

<h3>Kecerdasan Artifisial (AI)</h3>
<p><b>AI</b> adalah kemampuan mesin meniru kecerdasan manusia: mengenali gambar, memahami bahasa, dan membuat keputusan.</p>
<ul>
  <li><b>Machine Learning (ML)</b>: mesin <b>belajar dari data</b>, bukan diprogram aturan satu per satu.
    <ul>
      <li><b>Supervised learning</b>: belajar dari data berlabel (foto sudah diberi label "kucing"/"anjing").</li>
      <li><b>Unsupervised learning</b>: mencari kelompok/pola sendiri dari data tanpa label (misalnya mengelompokkan pelanggan).</li>
      <li><b>Reinforcement learning</b>: belajar dari <b>hadiah dan hukuman</b> hasil coba-coba (misalnya AI bermain gim).</li>
    </ul></li>
  <li>Data dibagi menjadi <b>data latih</b> (untuk belajar) dan <b>data uji</b> (untuk mengukur ketepatan).</li>
  <li><b>Deep learning</b>: ML memakai jaringan saraf tiruan berlapis-lapis.</li>
  <li><b>Computer vision</b>: AI memahami gambar/video (pengenalan wajah, deteksi sampah).</li>
  <li><b>NLP</b> (Natural Language Processing): AI memahami bahasa manusia (penerjemah, chatbot, asisten suara).</li>
  <li><b>AI generatif</b>: membuat konten baru (teks, gambar, musik) dari perintah (<i>prompt</i>).</li>
  <li>Keterbatasan: bisa salah (halusinasi), bias jika datanya tidak seimbang, dan butuh banyak data serta energi.</li>
</ul>

<h3>Big Data dan Analisis Data</h3>
<p><b>Big data</b> adalah kumpulan data yang sangat besar dan kompleks. Cirinya dikenal sebagai <b>3V</b>:</p>
<ul>
  <li><b>Volume</b>: jumlahnya sangat besar.</li>
  <li><b>Velocity</b>: dihasilkan dan harus diproses dengan sangat cepat.</li>
  <li><b>Variety</b>: beragam bentuk (teks, gambar, video, data sensor).</li>
</ul>
<p>Sering ditambah <b>Veracity</b> (keakuratan) dan <b>Value</b> (nilai guna).</p>
<p>Jenis data: <b>terstruktur</b> (tabel, spreadsheet, basis data), <b>tidak terstruktur</b> (foto, video, unggahan media sosial), dan <b>semi-terstruktur</b> (JSON, XML).</p>
<p>Tahapan analisis data: kumpulkan → bersihkan (hapus duplikat/data salah) → olah dan analisis → <b>visualisasi</b> (grafik) → simpulkan.</p>
<p>Basis data menyimpan data dalam tabel. Setiap baris disebut <b>record</b>, setiap kolom disebut <b>field</b>. <b>Primary key</b> adalah field yang nilainya unik untuk setiap record (misalnya NIS).</p>

<h3>Teknologi Lain</h3>
<ul>
  <li><b>VR</b> (Virtual Reality): pengguna masuk ke dunia <b>sepenuhnya virtual</b> memakai headset.</li>
  <li><b>AR</b> (Augmented Reality): objek virtual <b>ditambahkan ke dunia nyata</b> melalui kamera (filter wajah, gim berburu monster di peta nyata).</li>
  <li><b>Blockchain</b>: catatan transaksi tersebar di banyak komputer yang sulit diubah. Dasar mata uang kripto.</li>
  <li><b>Edge computing</b>: data diolah di dekat sumbernya (di perangkat), bukan dikirim semua ke cloud, sehingga lebih cepat.</li>
  <li><b>Komputasi kuantum</b>: memakai <b>qubit</b> yang dapat bernilai 0 dan 1 sekaligus (superposisi).</li>
  <li><b>Robotika dan otomasi</b>: robot industri, drone, kendaraan otonom.</li>
</ul>

<h3>Layanan Digital di Sekitar Kita</h3>
<ul>
  <li><b>E-commerce</b>: jual beli daring (marketplace).</li>
  <li><b>Fintech</b>: layanan keuangan berbasis teknologi (dompet digital). <b>QRIS</b> (Quick Response Code Indonesian Standard) adalah standar kode QR pembayaran nasional dari Bank Indonesia.</li>
  <li><b>E-government</b>: layanan pemerintahan daring (pembuatan dokumen, pajak, perizinan).</li>
  <li><b>E-learning/LMS</b>: pembelajaran daring (Google Classroom, Moodle).</li>
</ul>
`
    },
    // ---------------------------------------------------------------
    {
      id: "hitung", topik: "hitung", ikon: "🧮",
      judul: "Hitungan Cepat TIK",
      ringkas: "Konversi satuan data, waktu unduh, kapasitas penyimpanan, dan kelas IP, yang sering muncul sebagai soal hitungan.",
      html: `
<h3>1. Konversi Satuan Data</h3>
<p>Naik satu tingkat (B → KB → MB → GB → TB): <b>bagi 1.024</b>. Turun satu tingkat: <b>kali 1.024</b>.</p>
<ul>
  <li>2 GB = 2 × 1.024 = <b>2.048 MB</b></li>
  <li>3 MB = 3 × 1.024 = <b>3.072 KB</b></li>
  <li>4 Byte = 4 × 8 = <b>32 bit</b></li>
</ul>

<h3>2. Bit vs Byte pada Kecepatan Internet</h3>
<p>Kecepatan internet biasanya dalam <b>Mbps</b> (mega<b>bit</b> per detik), sedangkan ukuran file dalam <b>MB</b> (mega<b>byte</b>). Karena 1 Byte = 8 bit:</p>
<div class="tips"><b>Waktu unduh (detik) = Ukuran file (MB) × 8 ÷ Kecepatan (Mbps)</b></div>
<p>Contoh: file 50 MB, internet 20 Mbps → 50 × 8 ÷ 20 = <b>20 detik</b>.</p>
<p>Cara lain: 20 Mbps = 20 ÷ 8 = 2,5 MB/detik, sehingga 50 ÷ 2,5 = 20 detik.</p>

<h3>3. Kapasitas Penyimpanan</h3>
<p>Berapa foto 4 MB yang muat di flashdisk 8 GB?</p>
<p>8 GB = 8 × 1.024 = 8.192 MB → 8.192 ÷ 4 = <b>2.048 foto</b>.</p>

<h3>4. Ukuran Gambar Bitmap</h3>
<p>Ukuran (bit) = lebar × tinggi × kedalaman warna (bit per piksel).</p>
<p>Gambar 100 × 100 piksel, 8 bit per piksel → 80.000 bit = 10.000 Byte ≈ 9,77 KB.</p>
<p>Jumlah warna dengan <i>n</i> bit = 2ⁿ (8 bit → 256 warna, 24 bit → ±16,7 juta warna).</p>

<h3>5. Kelas IP dari Oktet Pertama</h3>
<p>1–126 → A, 128–191 → B, 192–223 → C. Contoh: 172.16.5.4 → oktet pertama 172 → <b>kelas B</b> (dan termasuk IP privat).</p>

<h3>6. Sandi Caesar</h3>
<p>Tulis alfabet, lalu geser. Geser 3: A→D, B→E, …, X→A, Y→B, Z→C. Kata <b>SIBER</b> → <b>VLEHU</b>.</p>

<h3>7. Konversi Biner ↔ Desimal</h3>
<p>Pakai nilai tempat 128, 64, 32, 16, 8, 4, 2, 1. Contoh: 1011₂ = 8 + 2 + 1 = <b>11</b>; 45 = 32 + 8 + 4 + 1 = <b>101101₂</b>. Oktet IP 192 = <b>11000000₂</b>.</p>

<h3>8. Kode ASCII</h3>
<p>Ingat tiga patokan: <b>'A' = 65</b>, <b>'a' = 97</b>, <b>'0' = 48</b>. Huruf ke-<i>n</i> (A = 1) memiliki kode 64 + <i>n</i>. Contoh 'E' (huruf ke-5) = 69, 'e' = 69 + 32 = 101.</p>

<h3>9. Kombinasi Password</h3>
<p>Kombinasi = (jenis karakter)<sup>panjang</sup>. PIN 4 digit = 10⁴ = 10.000. Huruf kecil 2 karakter = 26² = 676.</p>

<h3>10. Range Spreadsheet</h3>
<p>Banyak sel pada range = (banyak kolom) × (banyak baris). B2:D5 → kolom B, C, D (3) × baris 2–5 (4) = <b>12 sel</b>.</p>
`
    }
  ]
};
