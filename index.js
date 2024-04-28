const botonsi = document.querySelector('#botonsi');

botonsi.addEventListener('click' , function () {
    alert('Gracias Ju te prometo q no volvera a pasar y no pienso jugar con tu confianza q es lo mas importante para mi, te quiero mucho <3')
})

const botonno = document.querySelector('#botonno');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    botonno.style.setProperty('top',randomY+'%');
    botonno.style.setProperty('left',randomX+'%');
    botonno.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})