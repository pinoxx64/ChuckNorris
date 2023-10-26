// index.js

import axios from 'axios';

const ContTabla = document.getElementById('tabla');
const generar = document.getElementById('generar');

async function datosYTabla() {
  try {
    const respuesta = await axios.get('https://api.chucknorris.io');
    const categorias = respuesta.data.categorias;
    const tabla = document.createElement('tabla');
    const filaCabecera = tabla.insertRow();
    filaCabecera.innerHTML = '<th>Categoría</th>';

    categorias.forEach(category => {
      const filas = tabla.insertRow();
      const celdas = filas.insertCell();
      const catLink = document.createElement('a');
      catLink.href = `frase.html?category=${category.name}`;
      catLink.textContent = category.name;
      celdas.appendChild(catLink);
    });
    generar.addEventListener('click', async () => {
        try {
          const respuesta = await axios.get('https://api.chucknorris.io/jokes/random');
          const fraseAle = respuesta.data.frase;
          // Redirige a frase.html y pasa la frase aleatoria como parámetro
          window.location.href = `frase.html?frase=${fraseAle}`;
        } catch (error) {
          console.error('Error al obtener frase aleatoria de la API:', error);
        }
      });   
    ContTabla.appendChild(tabla);
    
  } catch (error) {
    console.error('Error al obtener datos de la API:', error);
  }
}

datosYTabla();
