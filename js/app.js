const barang = [
  {
    nama: "Kursi Kayu",
    lokasi: "Sekitar Kampus",
    gambar: "https://via.placeholder.com/200"
  },
  {
    nama: "Rak Buku",
    lokasi: "RT 03",
    gambar: "https://via.placeholder.com/200"
  }
];

const list = document.getElementById("barangList");

barang.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${item.gambar}">
    <h3>${item.nama}</h3>
    <p>${item.lokasi}</p>
    <a href="detail.html" class="btn">Detail</a>
  `;
  list.appendChild(card);
});
