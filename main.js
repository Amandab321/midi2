alert ('Olá mundo!')
function Tocasom (seletorAudio) { 
    const elemento = document.querySelector (seletorAudio);
    if (elemento) && elemento.localName=== 'Audio') {
    elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
    }
}