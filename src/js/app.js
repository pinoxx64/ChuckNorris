document.addEventListener("DOMContentLoaded", function () {
  const apiCategorias = 'https://api.chucknorris.io/jokes/categories'
  const apiFraseRandom = 'https://api.chucknorris.io/jokes/random'
  const contTabla = document.getElementById('tabla');

  async function tablaCategorias(event) {
    const respuesta = await fetch(apiCategorias)
    const categorias = await respuesta.json()

    contTabla.innerHTML = ""


    let rellenar = "<table>"
    for (let i = 0; i < categorias.length; i++) {
      rellenar += "<tr>"
      rellenar += "<td>"
      rellenar += "<button id=" + categorias[i] + ">" + categorias[i] + "</button>"
      rellenar += "</td>"
      rellenar += "</tr>"
    }
    rellenar += "<button id=generar>Generar frase aleatoria</button>"
    rellenar += "</table>"
    contTabla.innerHTML = rellenar

    const envCategoria = document.querySelectorAll('button')
    envCategoria.forEach(function (boton) {
      boton.addEventListener('click', function (event) {
        const idBoton = event.target.id
        catGenerar(idBoton)
      })
    })
  }

  async function catGenerar(categoriaElegida) {

    if (categoriaElegida != "generar") {
      let fraseCat = await fetch("https://api.chucknorris.io/jokes/random?category=" + categoriaElegida)
      let fraseJson = await fraseCat.json()
      let frase = fraseJson.value
      localStorage.setItem('generar', frase)

    } else {

      let fraseRan = await fetch(apiFraseRandom)
      let fraseJson = await fraseRan.json()
      let frase = fraseJson.value
      localStorage.setItem('generar', frase)
      
    }

    window.location.href = "./src/html/frases.html"

  }

  tablaCategorias()

})
