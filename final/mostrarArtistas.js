// mostrarArtistas.js
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector('.fotos-artistas .row');

  artistasPop.forEach(artista => {
    const card = document.createElement('div');
    card.className = 'col-lg-4 card-wrapper';
    card.innerHTML = `
      <div class="card border-0">
        <div class="foto">
          <div class="position-relative rounded-circle overflow-hidden mx-auto custom-circle-image">
            <a href="${artista.youtube}" target="_blank">
              <img class="w-100 h-100" src="${artista.imagen}">
            </a>
          </div>
          <div class="card-body text-center">
            <h3 class="text-uppercase card-title">${artista.nombre}</h3>
          </div>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
});
