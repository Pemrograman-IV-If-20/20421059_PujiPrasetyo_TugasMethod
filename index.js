const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.get('/dataMahasiswa/:npm/:nama', function (req, res) {
    res.json({
        nama : req.params.nama,
        NMP  : req.params.npm,
    })
  })

  app.get('/data-Mahasiswa-query', function (req, res) {
    res.json({
        nama : req.query.nama,
        NMP  : req.query.npm,
        alamat: req.query.alamat,
    })
  })

  app.post('/data-mahasiswa/:nama', function (req, res) {
    res.send({
        nama : req.params.nama,
        NPM  : req.query.NPM,
        alamat: req.body.alamat,
        semester : req.body.semester,
        prodi : req.body.prodi,
        matkul : req.body.matkul,
        umur  : req.body.umur,
        hobi  : req.body.hobi,
        warna : req.body.warna,
        tinggi : req.body.tinggi,
    })
  })

  app.post('/data-mhs-tugas/:npm', function (req, res) { //harus /data-mhs/:npm/:nama untuk menggunakan param
    res.send({
        // localhost:3000/data-mhs-tugas/20421059?nama=pras
        // di postman key alamat, tanggal_lahir vauenya bebas.
        npm : req.params.npm,
        nama: req.query.nama,
        prodi: req.body.prodi,
        alamat: req.body.alamat,
        tanggal_lahir: req.body.tanggal_lahir,
        golongan_darah:  req.body.golongan_darah,
        suku: req.body.suku,
        agama: req.body.agama,
        tinggi: req.body.tinggi,
        berat: req.body.berat
    })
  })

app.listen(PORT)
console.log('server siap di port', PORT);
