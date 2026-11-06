// =====================================================================
// GENERATOR SOAL ACAK: menghasilkan soal hitungan baru setiap kali,
// sehingga latihan drilling tidak pernah habis.
// Setiap generator mengembalikan { t, q, o:[benar, salah1, salah2, salah3], e }
// =====================================================================

const R = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const pilih = arr => arr[Math.floor(Math.random() * arr.length)];
const fmt = n => n.toLocaleString("id-ID");

// Membuat 3 pengecoh angka yang unik dan berbeda dari jawaban
function pengecohAngka(benar, kandidat, min = 0) {
  const set = new Set([benar]);
  const hasil = [];
  for (const k of kandidat) {
    if (hasil.length === 3) break;
    if (k >= min && !set.has(k) && Number.isFinite(k)) { set.add(k); hasil.push(k); }
  }
  let d = 1;
  while (hasil.length < 3) {
    for (const k of [benar + d, benar - d]) {
      if (hasil.length < 3 && k >= min && !set.has(k)) { set.add(k); hasil.push(k); }
    }
    d++;
  }
  return hasil;
}
function pengecohTeks(benar, kandidat) {
  const set = new Set([benar]); const h = [];
  for (const k of kandidat) { if (h.length < 3 && !set.has(k)) { set.add(k); h.push(k); } }
  return h;
}

const GEN = {
  // ================= KATEGORI 1 =================
  k1: [
    // Biner → desimal
    { t: "bilangan", f() {
      const n = R(9, 250), b = n.toString(2);
      const balik = parseInt(b.split("").reverse().join(""), 2);
      const w = pengecohAngka(n, [n + 1, n - 1, balik, n + 2, n ^ 2]);
      const rinci = b.split("").map((d, i) => d === "1" ? 2 ** (b.length - 1 - i) : null).filter(x => x !== null).join(" + ");
      return { q: `Bilangan biner ${b}₂ jika diubah ke desimal adalah …`, o: [n, ...w].map(String), e: `Jumlahkan nilai tempat yang digitnya 1: ${rinci} = ${n}.` };
    }},
    // Desimal → biner
    { t: "bilangan", f() {
      const n = R(10, 120), b = n.toString(2);
      const flip = i => b.substring(0, i) + (b[i] === "1" ? "0" : "1") + b.substring(i + 1);
      const w = pengecohTeks(b, [flip(b.length - 1), flip(1), (n + 2).toString(2), (n - 1).toString(2), flip(2)]);
      return { q: `Bilangan desimal ${n} dalam bentuk biner adalah …`, o: [b, ...w], e: `${n} = ${b.split("").map((d, i) => d === "1" ? 2 ** (b.length - 1 - i) : null).filter(x => x !== null).join(" + ")} → ${b}₂.` };
    }},
    // Heksadesimal → desimal
    { t: "bilangan", f() {
      const n = R(17, 250), h = n.toString(16).toUpperCase();
      const w = pengecohAngka(n, [parseInt(h, 10) || n + 10, n + 16, n - 16, n + 1]);
      return { q: `Bilangan heksadesimal ${h}₁₆ dalam desimal adalah …`, o: [n, ...w].map(String), e: `${h[0]} × 16 + ${h[1]} (${parseInt(h[1], 16)}) = ${parseInt(h[0], 16) * 16} + ${parseInt(h[1], 16)} = ${n}.` };
    }},
    // Penjumlahan biner
    { t: "bilangan", f() {
      const a = R(5, 31), b = R(3, 31), s = a + b;
      const w = pengecohTeks(s.toString(2), [(s + 1).toString(2), (s - 2).toString(2), (a | b).toString(2), (s + 4).toString(2), (s - 1).toString(2)]);
      return { q: `Hasil penjumlahan biner ${a.toString(2)}₂ + ${b.toString(2)}₂ adalah …`, o: [s.toString(2) + "₂", ...w.map(x => x + "₂")], e: `${a.toString(2)}₂ = ${a}, ${b.toString(2)}₂ = ${b}. ${a} + ${b} = ${s} = ${s.toString(2)}₂.` };
    }},
    // Gerbang logika
    { t: "bilangan", f() {
      const A = R(0, 1), B = R(0, 1), C = R(0, 1);
      const ekspr = [
        ["(A AND B) OR C", (A & B) | C],
        ["NOT (A OR B)", 1 - (A | B)],
        ["(A XOR B) AND C", (A ^ B) & C],
        ["NOT A AND (B OR C)", (1 - A) & (B | C)],
        ["(A NAND B) XOR C", (1 - (A & B)) ^ C],
        ["(A OR B) AND NOT C", (A | B) & (1 - C)],
        ["A XOR B XOR C", A ^ B ^ C],
        ["(A NOR B) OR (B AND C)", (1 - (A | B)) | (B & C)]
      ];
      const [s, v] = pilih(ekspr);
      return { q: `Jika A = ${A}, B = ${B}, dan C = ${C}, maka output dari ekspresi logika ${s} adalah …`, o: [String(v), String(1 - v), "2", "Tidak dapat ditentukan"], e: `Ganti A, B, C dengan nilainya, kerjakan dalam kurung dulu, lalu NOT → AND → OR/XOR. Hasilnya ${v}.` };
    }},
    // Deret / pola
    { t: "ct", f() {
      const tipe = R(0, 4); let d, nx, ket;
      if (tipe === 0) { const a = R(1, 20), b = R(2, 9); d = [0, 1, 2, 3, 4].map(i => a + i * b); nx = a + 5 * b; ket = `Setiap suku bertambah ${b}.`; }
      else if (tipe === 1) { const a = R(1, 5), r = pilih([2, 3]); d = [0, 1, 2, 3, 4].map(i => a * r ** i); nx = a * r ** 5; ket = `Setiap suku dikali ${r}.`; }
      else if (tipe === 2) { const a = R(1, 10); d = [a]; let s = R(1, 3); for (let i = 0; i < 4; i++) { d.push(d[d.length - 1] + s); s++; } nx = d[4] + s; ket = `Selisihnya bertambah 1 setiap langkah (${d.slice(1).map((x, i) => x - d[i]).join(", ")}, ${s}).`; }
      else if (tipe === 3) { const a = R(1, 4), b = R(1, 5); d = [a, b]; while (d.length < 6) d.push(d[d.length - 1] + d[d.length - 2]); nx = d[5]; d = d.slice(0, 5); ket = "Setiap suku adalah jumlah dua suku sebelumnya (pola Fibonacci)."; }
      else { const a = R(1, 9), b = R(20, 40), p = R(2, 5), q = R(2, 5); d = [a, b, a + p, b - q, a + 2 * p]; nx = b - 2 * q; ket = `Dua deret berselang-seling: ${a}, ${a + p}, ${a + 2 * p} (+${p}) dan ${b}, ${b - q}, … (−${q}).`; }
      const w = pengecohAngka(nx, [nx + 1, nx - 1, nx + 2, nx * 2, nx - 3]);
      return { q: `Tentukan suku berikutnya dari pola: ${d.join(", ")}, …`, o: [nx, ...w].map(String), e: `${ket} Suku berikutnya = ${nx}. (Pilar CT: pengenalan pola.)` };
    }},
    // Tracing loop
    { t: "algo", f() {
      const tipe = R(0, 4);
      if (tipe === 0) { const a = R(0, 10), n = R(4, 8), ans = a + n * (n + 1) / 2;
        return { q: `Perhatikan pseudocode:\ns ← ${a}\nFOR i ← 1 TO ${n}\n   s ← s + i\nENDFOR\ncetak s\nOutput-nya adalah …`, o: [ans, ...pengecohAngka(ans, [ans - n, ans + n + 1, a + n, ans - 1])].map(String), e: `s = ${a} + (1 + 2 + … + ${n}) = ${a} + ${n * (n + 1) / 2} = ${ans}.` }; }
      if (tipe === 1) { const n = R(3, 7), ans = 2 ** n;
        return { q: `Perhatikan pseudocode:\nx ← 1\nFOR i ← 1 TO ${n}\n   x ← x × 2\nENDFOR\ncetak x\nOutput-nya adalah …`, o: [ans, ...pengecohAngka(ans, [2 * n, ans / 2, ans * 2, n * n])].map(String), e: `x dikali 2 sebanyak ${n} kali: 2^${n} = ${ans}.` }; }
      if (tipe === 2) { const k = R(2, 5), a = R(10, 30), ans = Math.ceil(a / k);
        return { q: `Perhatikan pseudocode:\nc ← 0\ni ← ${a}\nWHILE i > 0 DO\n   i ← i − ${k}\n   c ← c + 1\nENDWHILE\ncetak c\nOutput-nya adalah …`, o: [ans, ...pengecohAngka(ans, [Math.floor(a / k), ans + 1, a - k, ans - 1])].map(String), e: `i berkurang ${k} setiap putaran sampai ≤ 0. Banyak putaran = ⌈${a}/${k}⌉ = ${ans}.` }; }
      if (tipe === 3) { const n = R(6, 12); let s = 0; for (let i = 1; i <= n; i++) if (i % 2 === 0) s += i;
        let sGanjil = 0; for (let i = 1; i <= n; i++) if (i % 2 === 1) sGanjil += i;
        return { q: `Perhatikan pseudocode:\ns ← 0\nFOR i ← 1 TO ${n}\n   IF i MOD 2 = 0 THEN s ← s + i\nENDFOR\ncetak s\nOutput-nya adalah …`, o: [s, ...pengecohAngka(s, [sGanjil, n * (n + 1) / 2, s + n, s - 2])].map(String), e: `Hanya bilangan genap yang dijumlahkan: ${Array.from({ length: n }, (_, i) => i + 1).filter(i => i % 2 === 0).join(" + ")} = ${s}.` }; }
      const a = R(2, 9), b = R(2, 9), c = R(1, 5);
      const x1 = a + b, y1 = x1 * c, x2 = y1 - a;
      return { q: `Perhatikan pseudocode:\na ← ${a}\nb ← ${b}\nx ← a + b\ny ← x × ${c}\nx ← y − a\ncetak x\nOutput-nya adalah …`, o: [x2, ...pengecohAngka(x2, [x1, y1, x1 * c + a, x2 + b])].map(String), e: `x = ${a}+${b} = ${x1}; y = ${x1}×${c} = ${y1}; x = ${y1}−${a} = ${x2}.` };
    }},
    // MOD dan DIV
    { t: "algo", f() {
      const a = R(20, 99), b = R(3, 9), m = a % b, dv = Math.floor(a / b);
      if (Math.random() < 0.5)
        return { q: `Nilai dari ${a} MOD ${b} adalah …`, o: [m, ...pengecohAngka(m, [dv, b - m, m + 1, (m + 2) % b])].map(String), e: `${a} = ${b} × ${dv} + ${m}. MOD adalah sisa bagi, yaitu ${m}.` };
      return { q: `Nilai dari ${a} DIV ${b} adalah …`, o: [dv, ...pengecohAngka(dv, [m, dv + 1, dv - 1, a - b])].map(String), e: `${a} ÷ ${b} = ${dv} sisa ${m}. DIV adalah hasil bagi bulat, yaitu ${dv}.` };
    }},
    // Stack
    { t: "struktur", f() {
      const st = [], ops = []; const n = R(5, 8);
      for (let i = 0; i < n; i++) {
        if (st.length > 1 && Math.random() < 0.35) { st.pop(); ops.push("POP"); }
        else { const v = R(1, 30); st.push(v); ops.push(`PUSH ${v}`); }
      }
      if (st.length === 0) { st.push(7); ops.push("PUSH 7"); }
      const top = st[st.length - 1];
      const semua = ops.filter(o => o.startsWith("PUSH")).map(o => +o.split(" ")[1]);
      const w = pengecohAngka(top, [st[0], semua[semua.length - 1], semua[0], ...semua], 1);
      return { q: `Sebuah stack awalnya kosong, lalu dikenai operasi berurutan:\n${ops.join(", ")}.\nElemen yang berada di puncak (TOP) stack adalah …`, o: [top, ...w].map(String), e: `Stack bersifat LIFO. Isi akhir dari bawah ke atas: [${st.join(", ")}]. Puncaknya ${top}.` };
    }},
    // Queue
    { t: "struktur", f() {
      const qu = [], ops = []; const n = R(5, 8);
      for (let i = 0; i < n; i++) {
        if (qu.length > 1 && Math.random() < 0.35) { qu.shift(); ops.push("DEQUEUE"); }
        else { const v = R(1, 30); qu.push(v); ops.push(`ENQUEUE ${v}`); }
      }
      if (qu.length === 0) { qu.push(9); ops.push("ENQUEUE 9"); }
      const fr = qu[0];
      const semua = ops.filter(o => o.startsWith("ENQ")).map(o => +o.split(" ")[1]);
      const w = pengecohAngka(fr, [qu[qu.length - 1], semua[0], semua[semua.length - 1], ...semua], 1);
      return { q: `Sebuah queue awalnya kosong, lalu dikenai operasi berurutan:\n${ops.join(", ")}.\nElemen yang berada di posisi paling DEPAN queue adalah …`, o: [fr, ...w].map(String), e: `Queue bersifat FIFO. Isi akhir dari depan ke belakang: [${qu.join(", ")}]. Paling depan ${fr}.` };
    }},
    // Bubble sort 1 pass
    { t: "struktur", f() {
      let arr; do { arr = Array.from({ length: 5 }, () => R(1, 20)); } while (new Set(arr).size < 5);
      const a = arr.slice();
      for (let i = 0; i < a.length - 1; i++) if (a[i] > a[i + 1]) [a[i], a[i + 1]] = [a[i + 1], a[i]];
      const urut = arr.slice().sort((x, y) => x - y);
      const satuTukar = arr.slice(); if (satuTukar[0] > satuTukar[1]) [satuTukar[0], satuTukar[1]] = [satuTukar[1], satuTukar[0]]; else [satuTukar[3], satuTukar[4]] = [satuTukar[4], satuTukar[3]];
      const sel = arr.slice(); const mi = sel.indexOf(Math.min(...sel)); [sel[0], sel[mi]] = [sel[mi], sel[0]];
      const s = x => `[${x.join(", ")}]`;
      const w = pengecohTeks(s(a), [s(urut), s(sel), s(satuTukar), s(arr.slice().reverse()), s([...a.slice(1), a[0]]),
        ...Array.from({ length: 12 }, () => s(arr.slice().sort(() => Math.random() - 0.5)))]);
      return { q: `Data ${s(arr)} diurutkan menaik dengan bubble sort. Hasil setelah putaran (pass) PERTAMA adalah …`, o: [s(a), ...w], e: `Bandingkan pasangan bersebelahan dari kiri ke kanan dan tukar jika kiri > kanan. Elemen terbesar (${Math.max(...arr)}) bergeser ke ujung kanan: ${s(a)}.` };
    }},
    // Implikasi / operator logika
    { t: "logika", f() {
      const p = Math.random() < 0.5, q = Math.random() < 0.5;
      const ops = [["p → q", !p || q], ["p ∧ q", p && q], ["p ∨ q", p || q], ["p ↔ q", p === q], ["¬p → q", p || q], ["p ∧ ¬q", p && !q], ["¬(p ∨ q)", !(p || q)]];
      const [s, v] = pilih(ops);
      const BS = x => x ? "Benar" : "Salah";
      return { q: `Jika p bernilai ${BS(p)} dan q bernilai ${BS(q)}, maka nilai kebenaran ${s} adalah …`, o: [BS(v), BS(!v), "Tidak dapat ditentukan", "Benar dan salah sekaligus"], e: `Substitusi p = ${BS(p)[0]}, q = ${BS(q)[0]} ke ${s} menghasilkan ${BS(v)}. Ingat: → salah hanya jika B→S; ∧ benar hanya jika B-B; ∨ salah hanya jika S-S; ↔ benar jika nilainya sama.` };
    }},
    // Sandi geser (Bebras)
    { t: "bebras", f() {
      const kata = pilih(["BERANG", "SEKOLAH", "LOGIKA", "ROBOT", "KODE", "DATA", "PIXEL", "JARING", "MERAH", "BUKU", "TAMAN", "PELANGI"]);
      const k = R(1, 4);
      const geser = (w, s) => w.split("").map(c => String.fromCharCode((c.charCodeAt(0) - 65 + s + 26) % 26 + 65)).join("");
      const ans = geser(kata, k);
      const w = pengecohTeks(ans, [geser(kata, -k), geser(kata, k + 1), ans.split("").reverse().join(""), geser(kata, k - 1)]);
      return { q: `Dalam sebuah sandi, setiap huruf digeser ${k} posisi ke depan dalam alfabet (setelah Z kembali ke A). Kata ${kata} menjadi …`, o: [ans, ...w], e: `Geser setiap huruf +${k}: ${kata.split("").map(c => c + "→" + geser(c, k)).join(", ")}.` };
    }},
    // Robot grid
    { t: "bebras", f() {
      const arah = ["Utara", "Timur", "Selatan", "Barat"], dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
      let x = 0, y = 0, h = 0; const cmd = [];
      for (let i = 0; i < 5; i++) {
        if (i % 2 === 0) { const m = R(1, 4); x += dx[h] * m; y += dy[h] * m; cmd.push(`Maju ${m}`); }
        else { if (Math.random() < 0.5) { h = (h + 1) % 4; cmd.push("Kanan"); } else { h = (h + 3) % 4; cmd.push("Kiri"); } }
      }
      const ans = `(${x}, ${y})`;
      const w = pengecohTeks(ans, [`(${y}, ${x})`, `(${-x}, ${y})`, `(${x}, ${-y})`, `(${x + 1}, ${y})`, `(${x}, ${y + 1})`]);
      return { q: `Robot berada di titik (0, 0) menghadap ${arah[0].toUpperCase()}. Sumbu x positif ke Timur dan sumbu y positif ke Utara. Perintah: ${cmd.join(", ")}. "Kanan"/"Kiri" berarti berputar 90° di tempat. Posisi akhir robot adalah …`, o: [ans, ...w], e: `Lacak arah hadap setiap perputaran (Kanan searah jarum jam: U→T→S→B). Posisi akhir ${ans}, menghadap ${arah[h]}.` };
    }}
  ],

  // ================= KATEGORI 2 =================
  k2: [
    // Konversi satuan
    { t: "hitung", f() {
      const tipe = R(0, 3);
      if (tipe === 0) { const g = R(2, 16), ans = g * 1024; return { q: `${g} GB sama dengan … MB (1 GB = 1.024 MB).`, o: [ans, ...pengecohAngka(ans, [g * 1000, g * 100, g * 8, ans / 2])].map(fmt), e: `${g} × 1.024 = ${fmt(ans)} MB.` }; }
      if (tipe === 1) { const m = R(2, 12), ans = m * 1024; return { q: `File berukuran ${m} MB sama dengan … KB (1 MB = 1.024 KB).`, o: [ans, ...pengecohAngka(ans, [m * 1000, m * 8, m * 1024 * 8, m * 100])].map(fmt), e: `${m} × 1.024 = ${fmt(ans)} KB.` }; }
      if (tipe === 2) { const b = R(3, 64), ans = b * 8; return { q: `${b} Byte sama dengan … bit.`, o: [ans, ...pengecohAngka(ans, [b, b * 4, b * 16, b / 8])].map(fmt), e: `1 Byte = 8 bit, sehingga ${b} × 8 = ${ans} bit.` }; }
      const k = R(2, 8), ans = k * 1024; return { q: `${fmt(ans)} MB sama dengan … GB.`, o: [k, ...pengecohAngka(k, [k * 10, k / 2, k + 1, ans / 1000])].map(fmt), e: `${fmt(ans)} ÷ 1.024 = ${k} GB.` };
    }},
    // Waktu unduh
    { t: "hitung", f() {
      let s, v, t;
      do { s = pilih([5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 80, 100, 120, 150, 200]); v = pilih([4, 5, 8, 10, 16, 20, 25, 40, 50, 100]); t = s * 8 / v; } while (!Number.isInteger(t) || t < 2 || t > 300);
      const w = pengecohAngka(t, [s / v, t * 8, Math.round(s / v * 10) || t + 3, t / 2], 1);
      return { q: `Sebuah file berukuran ${s} MB diunduh dengan kecepatan internet stabil ${v} Mbps. Waktu yang dibutuhkan adalah … detik. (Anggap 1 Byte = 8 bit.)`, o: [t, ...w.map(x => Math.round(x * 100) / 100)].map(x => fmt(x)), e: `Ubah MB ke megabit: ${s} × 8 = ${s * 8} Mb. Waktu = ${s * 8} ÷ ${v} = ${t} detik. Jebakannya: Mbps itu megabit, bukan megabyte.` };
    }},
    // Kapasitas
    { t: "hitung", f() {
      const g = pilih([1, 2, 4, 8, 16, 32]), f = pilih([2, 4, 8, 16, 32]); const ans = g * 1024 / f;
      return { q: `Sebuah flashdisk berkapasitas ${g} GB kosong. Banyak foto berukuran ${f} MB yang dapat disimpan paling banyak adalah … (1 GB = 1.024 MB)`, o: [ans, ...pengecohAngka(ans, [g * 1000 / f, ans * 2, ans / 2, g * f])].map(x => fmt(Math.round(x))), e: `${g} GB = ${fmt(g * 1024)} MB. ${fmt(g * 1024)} ÷ ${f} = ${fmt(ans)} foto.` };
    }},
    // Warna dari bit per piksel
    { t: "hitung", f() {
      const b = pilih([1, 2, 4, 8, 16]), ans = 2 ** b;
      return { q: `Gambar digital dengan kedalaman warna ${b} bit per piksel dapat menampilkan paling banyak … warna.`, o: [ans, ...pengecohAngka(ans, [b * 2, ans - 1, ans * 2, b * 8], 1)].map(fmt), e: `Banyak warna = 2^${b} = ${fmt(ans)}.` };
    }},
    // Kelas IP
    { t: "jaringan", f() {
      const kls = pilih(["A", "B", "C"]);
      const o1 = kls === "A" ? R(1, 126) : kls === "B" ? R(128, 191) : R(192, 223);
      const ip = `${o1}.${R(0, 255)}.${R(0, 255)}.${R(1, 254)}`;
      const mask = { A: "255.0.0.0", B: "255.255.0.0", C: "255.255.255.0" }[kls];
      if (Math.random() < 0.6)
        return { q: `Alamat IPv4 ${ip} termasuk kelas …`, o: [kls, ...["A", "B", "C", "D"].filter(x => x !== kls)].slice(0, 4), e: `Lihat oktet pertama (${o1}). A: 1–126, B: 128–191, C: 192–223. Jadi kelas ${kls}.` };
      return { q: `Subnet mask default untuk alamat IP ${ip} adalah …`, o: [mask, ...["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"].filter(x => x !== mask)].slice(0, 4), e: `Oktet pertama ${o1} → kelas ${kls}, sehingga mask default ${mask}.` };
    }},
    // IP privat
    { t: "jaringan", f() {
      const priv = pilih([`10.${R(0, 255)}.${R(0, 255)}.${R(1, 254)}`, `172.${R(16, 31)}.${R(0, 255)}.${R(1, 254)}`, `192.168.${R(0, 255)}.${R(1, 254)}`]);
      const pub = [`8.8.${R(0, 8)}.${R(1, 8)}`, `172.${R(32, 60)}.${R(0, 255)}.${R(1, 254)}`, `${R(36, 120)}.${R(0, 255)}.${R(0, 255)}.${R(1, 254)}`, `192.${R(169, 200)}.${R(0, 255)}.${R(1, 254)}`, `11.${R(0, 255)}.${R(0, 255)}.${R(1, 254)}`];
      const w = pengecohTeks(priv, pub.sort(() => Math.random() - 0.5));
      return { q: `Manakah alamat IP berikut yang termasuk IP PRIVAT?`, o: [priv, ...w], e: `Rentang IP privat: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255. ${priv} berada di rentang tersebut. Perhatikan jebakan 172.32.x.x dan 192.169.x.x yang bukan privat.` };
    }},
    // Caesar cipher
    { t: "keamanan", f() {
      const kata = pilih(["SIBER", "AMAN", "DATA", "KUNCI", "SANDI", "VIRUS", "LOGIN", "TOKEN", "AKSES", "PRIVASI", "JARINGAN"]);
      const k = R(1, 5);
      const g = (w, s) => w.split("").map(c => String.fromCharCode((c.charCodeAt(0) - 65 + s + 26) % 26 + 65)).join("");
      if (Math.random() < 0.6) {
        const ans = g(kata, k);
        return { q: `Kata ${kata} dienkripsi dengan Caesar cipher geser +${k}. Ciphertext-nya adalah …`, o: [ans, ...pengecohTeks(ans, [g(kata, -k), g(kata, k + 1), g(kata, k - 1) === kata ? g(kata, k + 2) : g(kata, k - 1), ans.split("").reverse().join("")])], e: `Setiap huruf digeser +${k}: ${kata.split("").map(c => c + "→" + g(c, k)).join(", ")}.` };
      }
      const ct = g(kata, k);
      return { q: `Ciphertext ${ct} dibuat dengan Caesar cipher geser +${k}. Plaintext (teks aslinya) adalah …`, o: [kata, ...pengecohTeks(kata, [g(ct, k), g(kata, 1) === ct ? g(kata, 2) : g(kata, 1), g(ct, -k - 1), kata.split("").reverse().join("")])], e: `Dekripsi berarti menggeser mundur ${k}: ${ct.split("").map(c => c + "→" + g(c, -k)).join(", ")}.` };
    }},
    // Port protokol
    { t: "jaringan", f() {
      const data = [["HTTP", "80"], ["HTTPS", "443"], ["FTP", "21"], ["SSH", "22"], ["SMTP", "25"], ["DNS", "53"]];
      const [p, port] = pilih(data);
      const w = pengecohTeks(port, data.map(d => d[1]).sort(() => Math.random() - 0.5));
      return { q: `Port default yang digunakan oleh protokol ${p} adalah …`, o: [port, ...w], e: `HTTP 80, HTTPS 443, FTP 21, SSH 22, SMTP 25, DNS 53. ${p} memakai port ${port}.` };
    }},
    // Lapisan OSI
    { t: "jaringan", f() {
      const L = ["Physical", "Data Link", "Network", "Transport", "Session", "Presentation", "Application"];
      const i = R(0, 6);
      if (Math.random() < 0.5)
        return { q: `Dalam model OSI, lapisan ke-${i + 1} (dihitung dari bawah) adalah …`, o: [L[i], ...pengecohTeks(L[i], [L[6 - i], L[(i + 1) % 7], L[(i + 6) % 7], L[(i + 2) % 7]])], e: `Urutan dari bawah: 1 Physical, 2 Data Link, 3 Network, 4 Transport, 5 Session, 6 Presentation, 7 Application ("Please Do Not Throw Sausage Pizza Away").` };
      const ok = String(i + 1);
      return { q: `Lapisan ${L[i]} pada model OSI berada di urutan ke- … (dihitung dari bawah)`, o: [ok, ...pengecohTeks(ok, [String(7 - i), String(((i + 1) % 7) + 1), String(((i + 5) % 7) + 1), String(((i + 3) % 7) + 1)])], e: `1 Physical, 2 Data Link, 3 Network, 4 Transport, 5 Session, 6 Presentation, 7 Application.` };
    }}
  ]
};

// Membuat satu soal dari generator acak
function buatSoalGen(kat, topik) {
  const daftar = GEN[kat].filter(g => !topik || g.t === topik);
  if (!daftar.length) return null;
  const g = pilih(daftar);
  const s = g.f();
  return { t: g.t, q: s.q, o: s.o.map(String), e: s.e, gen: true };
}
