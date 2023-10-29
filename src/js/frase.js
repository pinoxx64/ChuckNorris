document.addEventListener("DOMContentLoaded",function(){
  const huecoFrase=document.getElementById('frase')
  let frase=localStorage.getItem('generar')
  huecoFrase.innerHTML=frase
  localStorage.setItem('generar',"")
})