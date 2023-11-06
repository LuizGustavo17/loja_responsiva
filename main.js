
const nth3 = document.getElementById('nth3');
const nth4 = document.getElementById('nth4');
const divnone = document.querySelector('.divnone');
const divproducts = document.querySelector('.cards');

function moveElement() {
  if (window.innerWidth <= 640) {
    // Mova o elemento da div1 para a div2
    if(divproducts.childElementCount==4){
        console.log("executando")
    divproducts.removeChild(nth3);
    divproducts.removeChild(nth4);
    divnone.appendChild(nth3);
    divnone.appendChild(nth4);
    }
  } else {
    // Mova o elemento de volta para a div1
    if(divnone.childElementCount==2){
        divnone.removeChild(nth3);
        divnone.removeChild(nth4);
        divproducts.appendChild(nth3);
        divproducts.appendChild(nth4);
    }
    
    
  }
}

// Execute a função ao carregar a página e redimensionar a tela
moveElement();
window.addEventListener('resize', moveElement);
