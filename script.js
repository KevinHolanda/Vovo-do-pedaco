//Menu Hamburguer
// let menu = document.getElementById("menu")
// let iconeBarras = document.getElementById("icone-barras")
// let iconeX = document.getElementById("icone-x")
// let sombra = document.getElementById("sombra")

// function abreFechaMenu(){
    //Se o menu está fechado
    // if(window.getComputedStyle(menu).right == "-210px"){
        //Abrir o menu
        // menu.style.right = "0"

        //Mostrar icone X 
        // iconeX.style.display = "inline"

    //Esconde icone barras
    // iconeBarras.style.display = "none"
    
    // sombra.style.right = "0"
    // }else{
        //Fechar o menu
        // menu.style.right = "-210"

        //Esconder icone X 
        // menu.style.display = "none"

        //Mostrar o icone barras
        // iconeBarras.style.display ="inline"

        // sombra.style.right = "-101vw"
//     }
// }

let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let sombra = document.getElementById("sombra")

function abreFechaMenu(){
    //Se o menu está fechado
    if(window.getComputedStyle(menu).right == "500px"){
        //Abrir o menu
        menu.style.right = "0"

        //Mostrar icone X
        iconeX.style.display = "none"

        //Esconde icone barras
        iconeBarras.style.display = "inline"

        sombra.style.display = "none"
        menu.style.display = "none"

    }else{
        //Fechar o menu
        menu.style.right = "500px"

        //Esconder icone X
        iconeX.style.display = "inline"

        //Mostrar o icone barras
        iconeBarras.style.display = "none"

        sombra.style.display = "block"
        menu.style.display = "block"

        sombra.style.right = "78vw"
    }   
}

onresize = () =>{
    if(window.getComputedStyle(menu).right == "-210px"){
        //Mostra icone X
        iconeX.style.display = "none"
    }else{
        //Esconde icone barras
        iconeBarras.style.display = "inline"
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}