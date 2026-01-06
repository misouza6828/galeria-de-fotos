const photos = [
  { name: "Praia", src: "imagens/foto1.jpg" },
  { name: "Montanha", src: "imagens/foto2.jpg" },
  { name: "Cidade", src: "imagens/foto3.jpg" },
  { name: "Floresta", src: "imagens/foto4.jpg" },
  { name: "Deserto", src: "imagens/foto5.jpg" },
  { name: "Lago", src: "imagens/foto6.avif" },
  { name: "Cachoeira", src: "imagens/foto7.jpg"},
  { name: "Pôr do Sol", src: "imagens/foto8.jpg" },
  { name: "Neve", src: "imagens/foto9.jpg" },
  { name: "Campo", src: "imagens/foto10.jpg" }
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

function renderPhotos(filteredPhotos) {
  gallery.innerHTML = "";

  if (filteredPhotos.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");

  filteredPhotos.forEach(photo => {
    const div = document.createElement("div");
    div.className = "photo";

    div.innerHTML = `
      <img src="${photo.src}" alt="${photo.name}">
      <p>${photo.name}</p>
    `;

    gallery.appendChild(div);
  });
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = photos.filter(photo =>
    photo.name.toLowerCase().includes(value)
  );
  renderPhotos(filtered);
});

renderPhotos(photos);