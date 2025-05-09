function pegarPosicao(posicao) {
    const lat = posicao.coords.latitude;
    const long = posicao.coords.longitude;
    info.textContent = `Latitude: ${lat}, Longitude: ${long}`;

    mapa.innerHTML = `
    <a href="https://www.google.com/maps?q=${lat},${long}">
      Abrir no Google Maps
    </a>
  `;
}

function pegarErro() {
    info.textContent = "Erro ao obter localização.";
    mapa.textContent = "";
}

function mostrarLocalizacao() {
    if (navigator.geolocation) {
        info.textContent = "Obtendo localização...";
        navigator.geolocation.getCurrentPosition(pegarPosicao, pegarErro);
    }
    else
        info.textContent = "Geolocalização não é suportada pelo navegador.";
}

btnObterLocalizacao.addEventListener("click", mostrarLocalizacao);