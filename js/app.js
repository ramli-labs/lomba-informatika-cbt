// =====================================================================
// APLIKASI: routing, materi, latihan, simulasi CBT, riwayat
// =====================================================================
(() => {
"use strict";

const $ = (s, el = document) => el.querySelector(s);
const view = $("#view");
const HURUF = ["A", "B", "C", "D"];
const INFO_KAT = {
  k1: { nama: "Kategori 1", kelas: "Kelas 7–8", judul: "Logika & Computational Thinking" },
  k2: { nama: "Kategori 2", kelas: "Kelas 9", judul: "Fundamental TIK & Etika Siber" }
};

// ---------- penyimpanan aman ----------
const store = {
  get(k, d) { try { const v = localStorage.getItem("lpi-" + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem("lpi-" + k, JSON.stringify(v)); } catch {} },
  del(k) { try { localStorage.removeItem("lpi-" + k); } catch {} }
};

let kat = store.get("kat", "k2");
if (!INFO_KAT[kat]) kat = "k2";

// ---------- util ----------
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const acak = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const namaTopik = t => TOPIK[kat][t] || t;

function teksSoal(q) {
  const baris = String(q).split("\n");
  if (baris.length >= 3) {
    return esc(baris[0]) + `<span class="pc">${esc(baris.slice(1, -1).join("\n"))}</span>` + esc(baris[baris.length - 1]);
  }
  return esc(q);
}

// Menyiapkan soal: acak urutan opsi, catat indeks kunci
function siapkan(s) {
  const idx = acak([0, 1, 2, 3].slice(0, s.o.length));
  return { t: s.t, q: s.q, opsi: idx.map(i => String(s.o[i])), kunci: idx.indexOf(0), e: s.e };
}

// Mengambil n soal: dari bank (topik tertentu/semua) + generator
function ambilSoal(n, topik, porsiGen) {
  const bank = acak(BANK[kat].filter(s => !topik || s.t === topik));
  const adaGen = GEN[kat].some(g => !topik || g.t === topik);
  let nGen = adaGen ? Math.max(n - bank.length, Math.round(n * porsiGen)) : 0;
  let nBank = Math.min(bank.length, n - nGen);
  if (!adaGen) nBank = Math.min(bank.length, n);
  const hasil = bank.slice(0, nBank);
  const sudah = new Set(hasil.map(s => s.q));
  let coba = 0;
  while (hasil.length < n && adaGen && coba < n * 40) {
    coba++;
    const s = buatSoalGen(kat, topik);
    if (s && !sudah.has(s.q) && new Set(s.o).size === s.o.length) { sudah.add(s.q); hasil.push(s); }
  }
  return acak(hasil).map(siapkan);
}

// ---------- catatan soal yang pernah salah (khusus soal bank) ----------
const salahSet = () => new Set(store.get("salah-" + kat, []));
function catatJawaban(s, benar) {
  if (!BANK[kat].some(b => b.q === s.q)) return; // soal acak tidak dicatat
  const set = salahSet();
  if (benar) set.delete(s.q); else set.add(s.q);
  store.set("salah-" + kat, [...set]);
}
function soalPernahSalah() {
  const set = salahSet();
  return acak(BANK[kat].filter(b => set.has(b.q))).map(siapkan);
}

// ---------- modal konfirmasi ----------
function konfirmasi(html, ok = "Ya", batal = "Batal") {
  return new Promise(res => {
    const m = $("#modal");
    $("#modal-isi").innerHTML = html;
    $("#modal-ok").textContent = ok;
    $("#modal-batal").textContent = batal;
    $("#modal-batal").hidden = !batal;
    m.hidden = false;
    const tutup = v => { m.hidden = true; $("#modal-ok").onclick = $("#modal-batal").onclick = null; res(v); };
    $("#modal-ok").onclick = () => tutup(true);
    $("#modal-batal").onclick = () => tutup(false);
  });
}

// ---------- kategori ----------
function setKat(k) {
  if (simAktif && simAktif.kat !== k) { berhentiTimer(); simAktif = null; }
  kat = k; store.set("kat", k);
  document.querySelectorAll(".kat-switch button").forEach(b => b.classList.toggle("on", b.dataset.kat === k));
  latihan = null;
  route();
}
document.querySelectorAll(".kat-switch button").forEach(b => b.onclick = () => setKat(b.dataset.kat));

// ---------- router ----------
function route() {
  document.querySelectorAll(".kat-switch button").forEach(b => b.classList.toggle("on", b.dataset.kat === kat));
  const h = (location.hash || "#beranda").slice(1);
  const utama = h.split("-")[0];
  document.querySelectorAll(".nav a").forEach(a => a.classList.toggle("on", a.dataset.nav === utama));
  if (utama !== "simulasi") berhentiTimer();
  if (h.startsWith("materi-")) return halMateriIsi(h.slice(7));
  ({ beranda: halBeranda, materi: halMateri, latihan: halLatihan, simulasi: halSimulasi, riwayat: halRiwayat }[utama] || halBeranda)();
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);

// =====================================================================
// BERANDA
// =====================================================================
function halBeranda() {
  const info = INFO_KAT[kat];
  const riw = store.get("riwayat", []).filter(r => r.kat === kat);
  const terbaik = riw.length ? Math.max(...riw.map(r => r.nilai)) : null;
  const dibaca = store.get("dibaca", {});
  const nMateri = MATERI[kat].length, nBaca = MATERI[kat].filter(m => dibaca[m.id]).length;
  const subtopik = kat === "k1"
    ? "Dekomposisi, pengenalan pola, abstraksi, algoritma, logika proposisi, sistem bilangan, struktur data, dan soal cerita gaya Bebras."
    : "Sistem komputer, jaringan, keamanan data, sejarah TIK, etika siber, perangkat lunak & representasi data, teknologi terkini (cloud, IoT, AI), dan hitungan cepat.";
  view.innerHTML = `
  <section class="hero">
    <div class="card">
      <span class="chip">${info.nama} · ${info.kelas}</span>
      <h1 style="margin-top:10px">Lomba Pengetahuan <span class="grad">Informatika</span></h1>
      <h2 style="color:var(--cyan);font-size:1.15rem">${info.judul}</h2>
      <p>${subtopik}</p>
      <div class="stat">
        <div><b>${nMateri}</b><span>modul materi</span></div>
        <div><b>${BANK[kat].length}</b><span>soal bank + pembahasan</span></div>
        <div><b>∞</b><span>soal acak (generator)</span></div>
        <div><b>${terbaik === null ? "–" : terbaik}</b><span>nilai simulasi terbaik</span></div>
      </div>
      <div class="row" style="margin-top:16px">
        <a class="btn" href="#materi">📚 Mulai belajar</a>
        <a class="btn ghost" href="#latihan">🎯 Latihan per topik</a>
        <a class="btn ghost" href="#simulasi">⏱️ Simulasi CBT</a>
      </div>
    </div>
    <div class="card">
      <h3>📋 Format Lomba</h3>
      <table class="tbl">
        <tr><td>Pelaksanaan</td><td><b>Online, Computer Based Test</b></td></tr>
        <tr><td>Jumlah soal</td><td><b>100 soal</b></td></tr>
        <tr><td>Waktu</td><td><b>10.00 – 11.30 (90 menit)</b></td></tr>
        <tr><td>Rata-rata waktu</td><td><b>±54 detik per soal</b></td></tr>
      </table>
      <h3 style="margin-top:16px">Progres belajar</h3>
      <div class="bar"><i style="width:${nMateri ? nBaca / nMateri * 100 : 0}%"></i></div>
      <small>${nBaca} dari ${nMateri} modul sudah dibaca</small>
    </div>
  </section>

  <h2>Alur belajar yang disarankan</h2>
  <div class="grid g3">
    <div class="card"><span class="chip">Langkah 1</span><h3 style="margin-top:8px">Baca materi</h3><p style="color:var(--mut)">Pelajari setiap modul. Perhatikan kotak <b>⚠️ Jebakan soal</b> dan <b>💡 Tips</b>.</p></div>
    <div class="card"><span class="chip">Langkah 2</span><h3 style="margin-top:8px">Drilling per topik</h3><p style="color:var(--mut)">Kerjakan latihan per topik dengan pembahasan langsung. Soal hitungan dibuat acak, sehingga tidak pernah habis.</p></div>
    <div class="card"><span class="chip">Langkah 3</span><h3 style="margin-top:8px">Simulasi penuh</h3><p style="color:var(--mut)">Coba 100 soal dalam 90 menit seperti lomba sebenarnya. Lihat topik terlemah di Riwayat, lalu ulangi langkah 2.</p></div>
  </div>`;
}

// =====================================================================
// MATERI
// =====================================================================
function halMateri() {
  const dibaca = store.get("dibaca", {});
  view.innerHTML = `
  <h1>📚 Materi ${INFO_KAT[kat].nama}</h1>
  <p style="color:var(--mut)">${INFO_KAT[kat].judul} · ${INFO_KAT[kat].kelas}. Pilih modul untuk mulai belajar.</p>
  <div class="grid g2">
    ${MATERI[kat].map((m, i) => `
      <a class="card mcard" href="#materi-${m.id}">
        <span class="progress-dot">${dibaca[m.id] ? "✅" : ""}</span>
        <div class="ik">${m.ikon}</div>
        <h3 style="margin:.3em 0 0">${i + 1}. ${esc(m.judul)}</h3>
        <p>${esc(m.ringkas)}</p>
      </a>`).join("")}
  </div>`;
}

function halMateriIsi(id) {
  const daftar = MATERI[kat];
  let i = daftar.findIndex(m => m.id === id);
  if (i < 0) {
    const lain = kat === "k1" ? "k2" : "k1";
    if (MATERI[lain].some(m => m.id === id)) { kat = lain; store.set("kat", kat); return route(); }
    location.hash = "#materi"; return;
  }
  const m = daftar[i];
  const dibaca = store.get("dibaca", {}); dibaca[m.id] = true; store.set("dibaca", dibaca);
  const prev = daftar[i - 1], next = daftar[i + 1];
  view.innerHTML = `
  <div class="materi">
    <a href="#materi" class="btn ghost sm">← Daftar materi</a>
    <h1 style="margin-top:14px">${m.ikon} ${esc(m.judul)}</h1>
    <p style="color:var(--mut)">${esc(m.ringkas)}</p>
    <div class="card">${m.html}</div>
    <div class="card" style="margin-top:16px;text-align:center">
      <b>Sudah paham?</b> Uji pemahamanmu sekarang.<br>
      <button class="btn" style="margin-top:10px" id="btn-uji">🎯 Latihan topik "${esc(namaTopik(m.topik))}"</button>
    </div>
    <div class="materi-nav">
      ${prev ? `<a class="btn ghost" href="#materi-${prev.id}">← ${esc(prev.judul)}</a>` : "<span></span>"}
      ${next ? `<a class="btn ghost" href="#materi-${next.id}">${esc(next.judul)} →</a>` : ""}
    </div>
  </div>`;
  $("#btn-uji").onclick = () => { pilihanLatihan.topik = m.topik; location.hash = "#latihan"; };
}

// =====================================================================
// LATIHAN PER TOPIK (drilling dengan pembahasan langsung)
// =====================================================================
let latihan = null;
const pilihanLatihan = { topik: "", n: 20 };
const simpanLat = () => { if (latihan) store.set("lat-" + latihan.kat, latihan); };
const hapusLat = () => store.del("lat-" + kat);

function halLatihan() {
  if (latihan && latihan.kat === kat) return tampilLatihan();
  const tersimpan = store.get("lat-" + kat, null);
  const adaSimpan = tersimpan && tersimpan.kat === kat && tersimpan.i < tersimpan.soal.length;
  const nSalah = salahSet().size;
  const topik = TOPIK[kat];
  if (pilihanLatihan.topik && !topik[pilihanLatihan.topik]) pilihanLatihan.topik = "";
  const jml = t => BANK[kat].filter(s => !t || s.t === t).length;
  const punyaGen = t => GEN[kat].some(g => !t || g.t === t);
  view.innerHTML = `
  <h1>🎯 Latihan per Topik</h1>
  ${adaSimpan ? `<div class="card row" style="margin-bottom:14px;border-color:var(--gold)">
    <span>⏸️ <b>Latihan tersimpan</b><br><small>${esc(tersimpan.mode === "salah" ? "Soal yang pernah salah" : tersimpan.topik ? namaTopik(tersimpan.topik) : "Campuran")} · soal ${tersimpan.i + 1} dari ${tersimpan.soal.length}</small></span>
    <span class="sp"></span>
    <button class="btn ghost sm" id="hapus-simpan">Hapus</button>
    <button class="btn" id="lanjut-simpan">Lanjutkan →</button></div>` : ""}
  <p style="color:var(--mut)">Setiap jawaban langsung dinilai dan diberi pembahasan. Topik bertanda <span class="chip">∞ acak</span> memiliki soal hitungan yang dibuat ulang setiap kali.</p>
  <div class="grid g2" style="margin-bottom:16px">
    <button class="tpk ${pilihanLatihan.topik === "" ? "on" : ""}" data-t="">🔀 <span><b>Campuran semua topik</b><small>${jml("")} soal bank + soal acak</small></span></button>
    ${Object.entries(topik).map(([k, v]) => `
      <button class="tpk ${pilihanLatihan.topik === k ? "on" : ""}" data-t="${k}">
        ${(MATERI[kat].find(m => m.topik === k) || {}).ikon || "📝"}
        <span><b>${esc(v)}</b><small>${jml(k) ? jml(k) + " soal bank" : "khusus soal hitungan"} ${punyaGen(k) ? '· <span class="chip">∞ acak</span>' : ""}</small></span>
      </button>`).join("")}
  </div>
  <div class="card row">
    <b>Jumlah soal:</b>
    <div class="seg" id="seg-n">${[10, 20, 50, 100, 200].map(n => `<button data-n="${n}" class="${pilihanLatihan.n === n ? "on" : ""}">${n}</button>`).join("")}</div>
    <span class="sp"></span>
    <button class="btn" id="mulai-lat">Mulai latihan →</button>
  </div>
  <div class="card row" style="margin-top:12px">
    <span>🔁 <b>Soal yang pernah salah</b><br><small>${nSalah ? `${nSalah} soal bank yang pernah dijawab salah. Soal hilang dari daftar ini setelah dijawab benar.` : "Belum ada. Soal bank yang kamu jawab salah akan terkumpul di sini."}</small></span>
    <span class="sp"></span>
    <button class="btn ghost" id="mulai-salah" ${nSalah ? "" : "disabled"}>Latih ulang (${nSalah})</button>
  </div>
  <p style="margin-top:10px"><small>💡 Latihan panjang (50–200 soal) tersimpan otomatis. Kamu bisa menutup halaman dan melanjutkannya nanti.</small></p>`;
  view.querySelectorAll(".tpk").forEach(b => b.onclick = () => { pilihanLatihan.topik = b.dataset.t; halLatihan(); });
  view.querySelectorAll("#seg-n button").forEach(b => b.onclick = () => { pilihanLatihan.n = +b.dataset.n; halLatihan(); });
  $("#mulai-lat").onclick = () => {
    const soal = ambilSoal(pilihanLatihan.n, pilihanLatihan.topik, pilihanLatihan.n >= 100 ? 0.2 : 0.4);
    if (!soal.length) return;
    latihan = { kat, topik: pilihanLatihan.topik, soal, i: 0, jawab: soal.map(() => null) };
    simpanLat(); tampilLatihan();
  };
  if (adaSimpan) {
    $("#lanjut-simpan").onclick = () => { latihan = tersimpan; tampilLatihan(); };
    $("#hapus-simpan").onclick = async () => { if (await konfirmasi("<h3>Hapus latihan tersimpan?</h3>", "Hapus")) { hapusLat(); halLatihan(); } };
  }
  $("#mulai-salah").onclick = () => {
    const soal = soalPernahSalah(); if (!soal.length) return;
    latihan = { kat, topik: "", mode: "salah", soal, i: 0, jawab: soal.map(() => null) };
    simpanLat(); tampilLatihan();
  };
}

function tampilLatihan() {
  const L = latihan;
  if (L.i >= L.soal.length) return hasilLatihan();
  const s = L.soal[L.i], j = L.jawab[L.i];
  const benarSejauh = L.jawab.filter((x, k) => x !== null && x === L.soal[k].kunci).length;
  view.innerHTML = `
  <div class="soal-box">
    <div class="row" style="margin-bottom:10px">
      <button class="btn ghost sm" id="keluar">← Keluar (progres tersimpan)</button>
      <span class="sp"></span>
      <span class="chip">✅ ${benarSejauh} benar</span>
    </div>
    <div class="bar" style="margin-bottom:14px"><i style="width:${L.i / L.soal.length * 100}%"></i></div>
    <div class="card">
      <div class="q-head"><span class="chip">Soal ${L.i + 1} / ${L.soal.length}</span>${L.mode === "salah" ? '<span class="chip">🔁 Pernah salah</span>' : ""}<span class="chip">${esc(namaTopik(s.t))}</span></div>
      <p class="q-teks">${teksSoal(s.q)}</p>
      <div class="opsi">${s.opsi.map((o, k) => {
        let c = "";
        if (j !== null) { if (k === s.kunci) c = "benar"; else if (k === j) c = "salah"; }
        return `<button data-k="${k}" class="${c}" ${j !== null ? "disabled" : ""}><span class="hf">${HURUF[k]}</span><span>${esc(o)}</span></button>`;
      }).join("")}</div>
      ${j !== null ? `
      <div class="bahas ${j === s.kunci ? "ok" : "no"}">
        ${j === s.kunci ? '<b class="ok">✔ Benar!</b>' : `<b class="no">✘ Kurang tepat.</b> Jawaban benar: <b>${HURUF[s.kunci]}. ${esc(s.opsi[s.kunci])}</b>`}
        <div style="margin-top:6px"><b>Pembahasan:</b> ${esc(s.e)}</div>
      </div>
      <div class="row" style="margin-top:14px"><span class="sp"></span><button class="btn" id="lanjut">${L.i + 1 < L.soal.length ? "Soal berikutnya →" : "Lihat hasil"}</button></div>` : `<p style="margin:12px 0 0"><small>Tekan <span class="kbd">A</span>–<span class="kbd">D</span> atau klik jawaban.</small></p>`}
    </div>
  </div>`;
  $("#keluar").onclick = () => { simpanLat(); latihan = null; halLatihan(); };
  view.querySelectorAll(".opsi button").forEach(b => b.onclick = () => jawabLatihan(+b.dataset.k));
  const l = $("#lanjut"); if (l) { l.onclick = () => { L.i++; simpanLat(); tampilLatihan(); window.scrollTo(0, 0); }; l.focus(); }
}
function jawabLatihan(k) {
  if (latihan.jawab[latihan.i] !== null) return;
  latihan.jawab[latihan.i] = k;
  const s = latihan.soal[latihan.i]; catatJawaban(s, k === s.kunci);
  simpanLat(); tampilLatihan();
}

function hasilLatihan() {
  const L = latihan;
  const benar = L.jawab.filter((x, k) => x === L.soal[k].kunci).length;
  const nilai = Math.round(benar / L.soal.length * 100);
  const salah = L.soal.map((s, k) => ({ s, j: L.jawab[k] })).filter(x => x.j !== x.s.kunci);
  hapusLat();
  const rl = store.get("latihan-log", []);
  rl.push({ kat, topik: L.topik, n: L.soal.length, benar, tgl: Date.now() }); store.set("latihan-log", rl.slice(-200));
  view.innerHTML = `
  <div class="soal-box">
    <div class="card" style="text-align:center">
      <div class="skor ${nilai >= 75 ? "" : ""}" style="color:${nilai >= 75 ? "var(--ok)" : nilai >= 50 ? "var(--gold)" : "var(--bad)"}">${nilai}</div>
      <p>${benar} benar dari ${L.soal.length} soal · ${esc(L.mode === "salah" ? "Soal yang pernah salah" : L.topik ? namaTopik(L.topik) : "Campuran")}</p>
      <p style="color:var(--mut)">${nilai >= 85 ? "Luar biasa! Coba simulasi penuh." : nilai >= 70 ? "Bagus! Pelajari pembahasan soal yang salah, lalu ulangi." : "Baca ulang materinya, lalu ulangi latihan ini."}</p>
      <div class="row" style="justify-content:center">
        <button class="btn" id="ulang">🔁 Ulangi (soal baru)</button>
        <button class="btn ghost" id="ganti">Ganti topik</button>
      </div>
    </div>
    ${salah.length ? `<h2 style="margin-top:20px">Soal yang perlu dipelajari lagi (${salah.length})</h2>` + salah.map(({ s, j }) => kartuReview(s, j)).join("") : ""}
  </div>`;
  $("#ulang").onclick = () => {
    const soal = L.mode === "salah" ? soalPernahSalah() : ambilSoal(L.soal.length, L.topik, L.soal.length >= 100 ? 0.2 : 0.4);
    if (!soal.length) { latihan = null; return halLatihan(); }
    latihan = { kat, topik: L.topik, mode: L.mode, soal, i: 0, jawab: soal.map(() => null) }; simpanLat(); tampilLatihan();
  };
  $("#ganti").onclick = () => { latihan = null; halLatihan(); };
}

function kartuReview(s, j, no) {
  const st = j === null || j === undefined ? "kosong" : j === s.kunci ? "ok" : "no";
  return `<div class="review-item ${st}">
    <div class="q-head">${no ? `<span class="chip">No. ${no}</span>` : ""}<span class="chip">${esc(namaTopik(s.t))}</span>
      <span class="chip">${st === "ok" ? "✔ Benar" : st === "no" ? "✘ Salah" : "— Tidak dijawab"}</span></div>
    <p class="q-teks" style="margin-bottom:6px">${teksSoal(s.q)}</p>
    <div class="ja">${st === "no" ? `Jawabanmu: <b style="color:var(--bad)">${HURUF[j]}. ${esc(s.opsi[j])}</b><br>` : ""}
      Kunci: <b style="color:var(--ok)">${HURUF[s.kunci]}. ${esc(s.opsi[s.kunci])}</b></div>
    <div class="bahas" style="margin-top:8px"><b>Pembahasan:</b> ${esc(s.e)}</div>
  </div>`;
}

// =====================================================================
// SIMULASI CBT
// =====================================================================
let simAktif = null, timerId = null, pilihanSim = 100;
const MODE_SIM = { 100: 90, 50: 45, 25: 23 };

function simpanSim() { if (simAktif) store.set("sim-" + simAktif.kat, simAktif); }
function berhentiTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

function halSimulasi() {
  if (!simAktif) { const s = store.get("sim-" + kat, null); if (s && s.kat === kat && !s.selesai) simAktif = s; }
  if (simAktif && simAktif.kat === kat && !simAktif.selesai) return tampilSim();
  view.innerHTML = `
  <h1>⏱️ Simulasi CBT</h1>
  <div class="grid g2">
    <div class="card">
      <h3>Aturan simulasi</h3>
      <ul>
        <li>Soal diacak dari seluruh topik <b>${INFO_KAT[kat].nama}</b> (${INFO_KAT[kat].judul}).</li>
        <li>Waktu berjalan mundur. Jika habis, jawaban <b>otomatis dikumpulkan</b>.</li>
        <li>Boleh berpindah soal dan menandai soal ragu-ragu (🚩).</li>
        <li>Nilai = (jumlah benar ÷ jumlah soal) × 100. Tidak ada pengurangan nilai untuk jawaban salah.</li>
        <li>Pembahasan lengkap muncul setelah dikumpulkan.</li>
        <li>Pintasan: <span class="kbd">A–D</span> pilih jawaban, <span class="kbd">←</span> <span class="kbd">→</span> pindah soal, <span class="kbd">F</span> tandai.</li>
      </ul>
    </div>
    <div class="card">
      <h3>Pilih mode</h3>
      <div class="grid" style="gap:8px">
        ${Object.entries(MODE_SIM).sort((a, b) => b[0] - a[0]).map(([n, m]) => `
          <button class="tpk ${pilihanSim === +n ? "on" : ""}" data-n="${n}">${+n === 100 ? "🏆" : +n === 50 ? "⚡" : "☕"}
            <span><b>${n} soal · ${m} menit</b><small>${+n === 100 ? "Sama persis dengan lomba" : +n === 50 ? "Setengah simulasi" : "Pemanasan singkat"}</small></span></button>`).join("")}
      </div>
      <button class="btn" style="margin-top:14px;width:100%;justify-content:center" id="mulai-sim">Mulai simulasi →</button>
    </div>
  </div>`;
  view.querySelectorAll(".tpk").forEach(b => b.onclick = () => { pilihanSim = +b.dataset.n; halSimulasi(); });
  $("#mulai-sim").onclick = async () => {
    if (!(await konfirmasi(`<h3>Mulai simulasi?</h3><p>${pilihanSim} soal dalam ${MODE_SIM[pilihanSim]} menit. Waktu langsung berjalan.</p>`, "Mulai"))) return;
    const soal = ambilSoal(pilihanSim, "", kat === "k1" ? 0.3 : 0.15);
    simAktif = { kat, soal, jawab: soal.map(() => null), flag: soal.map(() => false), i: 0, mulai: Date.now(), akhir: Date.now() + MODE_SIM[pilihanSim] * 60000, menit: MODE_SIM[pilihanSim], selesai: false };
    simpanSim(); tampilSim();
  };
}

function tampilSim() {
  const S = simAktif, s = S.soal[S.i], j = S.jawab[S.i];
  const terjawab = S.jawab.filter(x => x !== null).length;
  view.innerHTML = `
  <div class="cbt">
    <div class="card">
      <div class="q-head">
        <span class="chip">Soal ${S.i + 1} / ${S.soal.length}</span>
        <span class="sp"></span>
        <button class="btn ghost sm flagbtn ${S.flag[S.i] ? "on" : ""}" id="flag">🚩 ${S.flag[S.i] ? "Ditandai" : "Tandai ragu"}</button>
      </div>
      <p class="q-teks">${teksSoal(s.q)}</p>
      <div class="opsi">${s.opsi.map((o, k) => `<button data-k="${k}" class="${j === k ? "pilih" : ""}"><span class="hf">${HURUF[k]}</span><span>${esc(o)}</span></button>`).join("")}</div>
      <div class="row" style="margin-top:16px">
        <button class="btn ghost" id="prev" ${S.i === 0 ? "disabled" : ""}>← Sebelumnya</button>
        ${j !== null ? `<button class="btn ghost sm" id="hapus">Hapus jawaban</button>` : ""}
        <span class="sp"></span>
        ${S.i + 1 < S.soal.length ? `<button class="btn" id="next">Berikutnya →</button>` : `<button class="btn" id="kumpul2">Selesai & kumpulkan</button>`}
      </div>
    </div>
    <aside class="card cbt-side">
      <div style="text-align:center"><small>Sisa waktu</small></div>
      <div class="timer" id="timer">--:--</div>
      <div class="bar" style="margin:8px 0 4px"><i style="width:${terjawab / S.soal.length * 100}%"></i></div>
      <small>${terjawab} dari ${S.soal.length} terjawab</small>
      <div class="navgrid">${S.soal.map((_, k) => `<button data-k="${k}" class="${S.flag[k] ? "flag" : S.jawab[k] !== null ? "isi" : ""} ${k === S.i ? "now" : ""}">${k + 1}</button>`).join("")}</div>
      <div class="legend"><span><i style="background:#2e7dff"></i>Dijawab</span><span><i style="background:var(--flag)"></i>Ragu</span><span><i style="background:var(--bg);border:1px solid var(--line)"></i>Kosong</span></div>
      <button class="btn" style="width:100%;justify-content:center;margin-top:12px" id="kumpul">Kumpulkan jawaban</button>
    </aside>
  </div>`;
  view.querySelectorAll(".opsi button").forEach(b => b.onclick = () => { S.jawab[S.i] = +b.dataset.k; simpanSim(); tampilSim(); });
  view.querySelectorAll(".navgrid button").forEach(b => b.onclick = () => keSoal(+b.dataset.k));
  $("#flag").onclick = () => { S.flag[S.i] = !S.flag[S.i]; simpanSim(); tampilSim(); };
  $("#prev").onclick = () => keSoal(S.i - 1);
  const nx = $("#next"); if (nx) nx.onclick = () => keSoal(S.i + 1);
  const hp = $("#hapus"); if (hp) hp.onclick = () => { S.jawab[S.i] = null; simpanSim(); tampilSim(); };
  $("#kumpul").onclick = mintaKumpul;
  const k2 = $("#kumpul2"); if (k2) k2.onclick = mintaKumpul;
  mulaiTimer();
}
function keSoal(k) { if (!simAktif || k < 0 || k >= simAktif.soal.length) return; simAktif.i = k; simpanSim(); tampilSim(); if (innerWidth > 900) window.scrollTo(0, 0); }

function mulaiTimer() {
  berhentiTimer();
  const tick = () => {
    if (!simAktif) return berhentiTimer();
    const sisa = Math.max(0, simAktif.akhir - Date.now());
    const el = $("#timer");
    if (el) {
      const m = Math.floor(sisa / 60000), d = Math.floor(sisa % 60000 / 1000);
      el.textContent = `${String(m).padStart(2, "0")}:${String(d).padStart(2, "0")}`;
      el.classList.toggle("warn", sisa < 5 * 60000);
    }
    if (sisa <= 0) { berhentiTimer(); kumpulkan(true); }
  };
  tick(); timerId = setInterval(tick, 1000);
}

async function mintaKumpul() {
  const S = simAktif;
  const kosong = S.jawab.filter(x => x === null).length, ragu = S.flag.filter(Boolean).length;
  const ok = await konfirmasi(`<h3>Kumpulkan jawaban?</h3>
    <p>${kosong ? `<b style="color:var(--bad)">${kosong} soal belum dijawab.</b><br>` : "Semua soal sudah dijawab. 👍<br>"}
    ${ragu ? `<b style="color:var(--flag)">${ragu} soal masih ditandai ragu.</b><br>` : ""}
    Setelah dikumpulkan, jawaban tidak bisa diubah.</p>`, "Kumpulkan");
  if (ok) kumpulkan(false);
}

function kumpulkan(waktuHabis) {
  const S = simAktif; if (!S || S.selesai) return;
  berhentiTimer();
  S.selesai = true; S.selesaiPada = Math.min(Date.now(), S.akhir);
  S.soal.forEach((s, k) => { if (S.jawab[k] !== null) catatJawaban(s, S.jawab[k] === s.kunci); });
  const benar = S.jawab.filter((x, k) => x === S.soal[k].kunci).length;
  const perTopik = {};
  S.soal.forEach((s, k) => { const p = perTopik[s.t] || (perTopik[s.t] = { n: 0, b: 0 }); p.n++; if (S.jawab[k] === s.kunci) p.b++; });
  const nilai = Math.round(benar / S.soal.length * 1000) / 10;
  const riw = store.get("riwayat", []);
  riw.push({ kat: S.kat, tgl: Date.now(), n: S.soal.length, benar, nilai, durasi: Math.round((S.selesaiPada - S.mulai) / 1000), perTopik });
  store.set("riwayat", riw.slice(-100));
  store.del("sim-" + S.kat);
  S.hasil = { benar, nilai, perTopik, waktuHabis };
  hasilSim("semua");
}

function hasilSim(filter) {
  const S = simAktif, H = S.hasil;
  const salah = S.jawab.filter((x, k) => x !== null && x !== S.soal[k].kunci).length;
  const kosong = S.jawab.filter(x => x === null).length;
  const dur = Math.round((S.selesaiPada - S.mulai) / 1000);
  const warna = p => p >= 75 ? "var(--ok)" : p >= 50 ? "var(--gold)" : "var(--bad)";
  const daftar = S.soal.map((s, k) => ({ s, j: S.jawab[k], no: k + 1 })).filter(x =>
    filter === "semua" ? true : filter === "salah" ? x.j !== null && x.j !== x.s.kunci : filter === "kosong" ? x.j === null : x.j === x.s.kunci);
  const lemah = Object.entries(H.perTopik).sort((a, b) => a[1].b / a[1].n - b[1].b / b[1].n)[0];
  view.innerHTML = `
  <h1>📊 Hasil Simulasi</h1>
  ${H.waktuHabis ? `<div class="jebakan" style="margin-bottom:14px">⏰ Waktu habis, sehingga jawaban dikumpulkan otomatis.</div>` : ""}
  <div class="grid g2">
    <div class="card" style="text-align:center">
      <small>Nilai</small>
      <div class="skor" style="color:${warna(H.nilai)}">${H.nilai}</div>
      <div class="row" style="justify-content:center;margin-top:10px">
        <span class="chip">✔ ${H.benar} benar</span><span class="chip">✘ ${salah} salah</span><span class="chip">— ${kosong} kosong</span>
        <span class="chip">⏱ ${Math.floor(dur / 60)} menit ${dur % 60} detik</span>
      </div>
      ${lemah ? `<p style="margin-top:14px">Topik yang paling perlu ditingkatkan: <b style="color:var(--gold)">${esc(namaTopik(lemah[0]))}</b></p>
      <button class="btn" id="lat-lemah">🎯 Latihan topik ini</button>` : ""}
    </div>
    <div class="card">
      <h3>Hasil per topik</h3>
      <table class="tbl">${Object.entries(H.perTopik).map(([t, p]) => { const pc = Math.round(p.b / p.n * 100); return `
        <tr><td>${esc(namaTopik(t))}</td><td>${p.b}/${p.n}</td>
        <td style="width:40%"><div class="mini-bar"><i style="width:${pc}%;background:${warna(pc)}"></i></div></td><td>${pc}%</td></tr>`; }).join("")}
      </table>
    </div>
  </div>
  <h2 style="margin-top:22px">Pembahasan</h2>
  <div class="seg" style="margin-bottom:12px">
    ${[["semua", "Semua"], ["salah", "Salah"], ["kosong", "Tidak dijawab"], ["benar", "Benar"]].map(([k, v]) => `<button data-f="${k}" class="${filter === k ? "on" : ""}">${v}</button>`).join("")}
  </div>
  ${daftar.length ? daftar.map(x => kartuReview(x.s, x.j, x.no)).join("") : `<div class="empty">Tidak ada soal pada kelompok ini.</div>`}
  <div class="row" style="margin-top:16px"><button class="btn" id="sim-baru">🔁 Simulasi baru</button><a class="btn ghost" href="#riwayat">📈 Lihat riwayat</a></div>`;
  view.querySelectorAll(".seg button").forEach(b => b.onclick = () => hasilSim(b.dataset.f));
  $("#sim-baru").onclick = () => { simAktif = null; halSimulasi(); };
  const ll = $("#lat-lemah"); if (ll) ll.onclick = () => { pilihanLatihan.topik = lemah[0]; latihan = null; simAktif = null; location.hash = "#latihan"; };
}

// Pintasan keyboard
document.addEventListener("keydown", e => {
  if (!$("#modal").hidden || e.ctrlKey || e.metaKey || e.altKey) return;
  const h = location.hash.slice(1) || "beranda";
  const key = e.key.toUpperCase();
  const idx = "ABCD".indexOf(key) >= 0 ? "ABCD".indexOf(key) : "1234".indexOf(key);
  if (h === "simulasi" && simAktif && !simAktif.selesai) {
    if (idx >= 0 && idx < simAktif.soal[simAktif.i].opsi.length) { simAktif.jawab[simAktif.i] = idx; simpanSim(); tampilSim(); }
    else if (e.key === "ArrowRight") keSoal(simAktif.i + 1);
    else if (e.key === "ArrowLeft") keSoal(simAktif.i - 1);
    else if (key === "F") { simAktif.flag[simAktif.i] = !simAktif.flag[simAktif.i]; simpanSim(); tampilSim(); }
  } else if (h === "latihan" && latihan && latihan.i < latihan.soal.length) {
    if (latihan.jawab[latihan.i] === null && idx >= 0 && idx < latihan.soal[latihan.i].opsi.length) jawabLatihan(idx);
  }
});

// =====================================================================
// RIWAYAT
// =====================================================================
function halRiwayat() {
  const riw = store.get("riwayat", []).filter(r => r.kat === kat).reverse();
  const log = store.get("latihan-log", []).filter(r => r.kat === kat);
  const agg = {};
  riw.forEach(r => Object.entries(r.perTopik || {}).forEach(([t, p]) => { const a = agg[t] || (agg[t] = { n: 0, b: 0 }); a.n += p.n; a.b += p.b; }));
  log.forEach(r => { if (!r.topik) return; const a = agg[r.topik] || (agg[r.topik] = { n: 0, b: 0 }); a.n += r.n; a.b += r.benar; });
  const warna = p => p >= 75 ? "var(--ok)" : p >= 50 ? "var(--gold)" : "var(--bad)";
  const tgl = t => new Date(t).toLocaleString("id-ID", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  view.innerHTML = `
  <h1>📈 Riwayat ${INFO_KAT[kat].nama}</h1>
  <p style="color:var(--mut)">Riwayat tersimpan di peramban perangkat ini saja.</p>
  <div class="grid g2">
    <div class="card">
      <h3>Penguasaan per topik</h3>
      ${Object.keys(agg).length ? `<table class="tbl">${Object.keys(TOPIK[kat]).filter(t => agg[t]).map(t => { const p = agg[t], pc = Math.round(p.b / p.n * 100); return `
        <tr><td>${esc(namaTopik(t))}</td><td style="width:40%"><div class="mini-bar"><i style="width:${pc}%;background:${warna(pc)}"></i></div></td><td>${pc}%</td><td><small>${p.b}/${p.n}</small></td></tr>`; }).join("")}</table>`
      : `<div class="empty">Belum ada data. Kerjakan latihan atau simulasi dulu.</div>`}
    </div>
    <div class="card">
      <h3>Simulasi CBT</h3>
      ${riw.length ? `<table class="tbl"><tr><th>Waktu</th><th>Soal</th><th>Benar</th><th>Nilai</th></tr>
        ${riw.slice(0, 15).map(r => `<tr><td>${tgl(r.tgl)}</td><td>${r.n}</td><td>${r.benar}</td><td><b style="color:${warna(r.nilai)}">${r.nilai}</b></td></tr>`).join("")}</table>`
      : `<div class="empty">Belum ada simulasi.</div>`}
    </div>
  </div>
  <div class="row" style="margin-top:16px"><span class="sp"></span><button class="btn ghost sm" id="reset">🗑️ Hapus riwayat kategori ini</button></div>`;
  $("#reset").onclick = async () => {
    if (!(await konfirmasi("<h3>Hapus riwayat?</h3><p>Semua riwayat simulasi dan latihan untuk kategori ini akan dihapus.</p>", "Hapus"))) return;
    store.set("riwayat", store.get("riwayat", []).filter(r => r.kat !== kat));
    store.set("latihan-log", store.get("latihan-log", []).filter(r => r.kat !== kat));
    halRiwayat();
  };
}

route();
})();
