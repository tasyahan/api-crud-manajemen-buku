const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bookstore");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "koneksi gagal"));

db.once("open", () => {
  console.log("koneksi database berhasil");
});
