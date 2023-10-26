import axios from 'axios';

const frases = document.getElementById('frase-container');

async function buscarFrase(categoria) {
  try {
    const response = await axios.get(`https://api.chucknorris.io?categoria=${categoria}`);
    const frase = response.data.frase;
    frases.textContent = frase;
  } catch (error) {
    console.error('Error al obtener frase de la API:', error);
  }
}

// Obtén el parámetro de la URL que contiene la categoría seleccionada
const urlParams = new URLSearchParams(window.location.search);
const categoria = urlParams.get('categoria');

// Llama a la función buscarFrase con la categoría para mostrar la frase generada
if (categoria) {
  buscarFrase(categoria);
} else {
  frases.textContent = 'No se ha especificado una categoría.';
}