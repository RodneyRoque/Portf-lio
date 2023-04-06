/*ANIMAÇÃO ESCREVER*/ 
function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('')
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}


const titulo = document.querySelector('.digitando');
const loop = 2

ativaLetra(titulo);
/******************/

/*ANIMAÇÃO SCROLL*/ 
const observer = new IntersectionObserver(entries =>{
    console.log(entries)

    Array.from(entries).forEach(entry => {
        if(entry.intersectionRatio >= 1){
            entry.target.classList.add('init-hidden-off')
        }
    })
}, {
    threshold: [0, .5, 1]
})


Array.from(document.querySelectorAll('.init-hidden')).forEach(element =>{
    observer.observe(element)
})
/***************/

/*MENU MOBILE*/
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open');
    }
}