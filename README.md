# Persiapan Lomba Pengetahuan Informatika (CBT Online)

Website belajar dan latihan untuk **Lomba Pengetahuan Informatika** dengan sistem Computer Based Test (100 soal, 90 menit).

| Kategori | Kelas | Materi |
|---|---|---|
| Kategori 1 | 7–8 | Logika & Computational Thinking |
| Kategori 2 | 9 | Fundamental TIK & Etika Siber: Sistem Komputer, Jaringan, Keamanan Data, Sejarah TIK |

## Fitur

- **Materi mendalam**: 6 modul Kategori 1 dan 8 modul Kategori 2 (termasuk *Perangkat Lunak & Representasi Data* serta *Teknologi Terkini*), berisi contoh, tabel, kotak *jebakan soal*, dan tips.
- **Latihan per topik (drilling)**: setiap jawaban langsung dinilai dan diberi pembahasan. Tersedia 10, 20, 50, 100, atau 200 soal sekaligus. Progres tersimpan otomatis.
- **Soal yang pernah salah**: soal bank yang dijawab salah dikumpulkan untuk dilatih ulang, dan hilang dari daftar setelah dijawab benar.
- **Bank soal + generator**: 334 soal tetap berpembahasan (259 untuk Kategori 2 / kelas 9, 75 untuk Kategori 1), ditambah generator soal hitungan acak (biner, pseudocode, stack/queue, sandi, satuan data, waktu unduh, kelas IP, dan lain-lain), sehingga soal latihan tidak pernah habis.
- **Simulasi CBT**: 100 soal / 90 menit seperti lomba (ada juga mode 50 dan 25 soal), dengan timer, navigasi nomor soal, tanda ragu-ragu, kumpul otomatis saat waktu habis, serta hasil per topik dan pembahasan.
- **Riwayat**: nilai simulasi dan penguasaan per topik disimpan di peramban.
- Tanpa server dan tanpa login. Cukup HTML, CSS, dan JavaScript.

## Struktur

```
index.html
css/style.css
js/materi.js      ← isi materi (HTML per modul)
js/soal.js            ← bank soal tetap (opsi pertama = kunci; diacak saat tampil)
js/soal-k2-plus.js    ← tambahan bank soal kelas 9
js/generator.js       ← generator soal acak
js/generator-k2-plus.js ← generator tambahan kelas 9
js/app.js         ← tampilan, latihan, simulasi, riwayat
```

### Menambah soal
Tambahkan baris ke `js/soal.js` pada kategori yang sesuai:

```js
{t:"jaringan", q:"Teks soal …", o:["Jawaban benar","Pengecoh 1","Pengecoh 2","Pengecoh 3"], e:"Pembahasan."},
```
Kode topik ada di objek `TOPIK` di bagian atas file.

## Menjalankan
Buka `index.html` di peramban, atau aktifkan **GitHub Pages** (Settings → Pages → Deploy from a branch → `main` / `root`).
