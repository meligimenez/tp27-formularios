window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

    console.log('hola')

    const $ = (element) => document.getElementById(element);
    /* elementos del formulario */

    const title = $('title');
    const titleMsg = $('titleMsg');
    const ratingMsg = $('ratingMsg');
    const rating = $('rating');
    const awards = $('awards');
    const awardsMsg = $('awardsMsg');
    const release_date = $('release_date');
    const release_dateMsg = $('release_dateMsg');
    const length = $('length');
    const lengthMsg = $('lengthMsg');
    const genre_id = $('genre_id');
    const genre_idMsg = $('genre_idMsg');
    const form = $('form');
    const formMsg = $('formMsg');

    // FUNCIÓN DE ERRORES
const msgError = (input, error, msg) => {
    error.innerHTML = msg;
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
};

const cleanErrorBack = (error) => {
  error.innerHTML = "";
};

// FUNCIÓN DE VERIFICACIÓN
const validField = (input, error) => {
  error.innerHTML = null;
  error.innerHTML = "";
  input.classList.add('is-valid')
  input.classList.remove('is-invalid')
};

    /* title */
    title.addEventListener("blur", function () {
        cleanErrorBack(titleMsg)
        switch (true) {
        case !title.value.trim():
            msgError(title,titleMsg,'el nombre es obligatorio');
            break;
        default:
            validField(title, titleMsg);
            break;
        }
    });

    /* rating */
    rating.addEventListener("blur", function () {
        cleanErrorBack(ratingMsg)
        switch (true) {
        case !rating.value.trim():
            msgError(rating,ratingMsg,'el rating es obligatorio');
            break;
        case rating.value < 0 || rating.value > 10.0:
            msgError(rating, ratingMsg,'Solo números del 0 al 10');
            break;
        default:
            validField(rating, ratingMsg);
            break;
        }
    });

    /* awards */
    awards.addEventListener("blur", function () {
        cleanErrorBack(awardsMsg)
        switch (true) {
        case !awards.value.trim():
            msgError(awards,awardsMsg,'los premios es obligatorios');
            break;
        case awards.value < 0 || awards.value > 10.0:
            msgError(awards, awardsMsg,'Solo números del 0 al 10');
            break;
        default:
            validField(awards, awardsMsg);
            break;
        }
    });

    /* release date */
    release_date.addEventListener("blur", function () {
        cleanErrorBack(release_dateMsg)
        switch (true) {
        case !release_date.value.trim():
            msgError(release_date,release_dateMsg,'la fecha de creacion es obligatoria');
            break;
        default:
            validField(release_date, release_dateMsg);
            break;
        }
    });

    /* length */
    length.addEventListener("blur", function () {
        cleanErrorBack(lengthMsg)
        switch (true) {
        case !length.value.trim():
            msgError(length,lengthMsg,'la duración es obligatoria');
            break;
        case length.value < 60 || length.value > 360:
            msgError(length, lengthMsg,'Solo números del 60 al 360');
            break;
        default:
            validField(length, lengthMsg);
            break;
        }
    });

    /* genre id */
    genre_id.addEventListener("blur", function () {
        cleanErrorBack(genre_idMsg)
        switch (true) {
        case !genre_id.value.trim():
            msgError(genre_id,genre_idMsg,'el genero es obligatorio');
            break;
        default:
            validField(genre_id, genre_idMsg);
            break;
        }
    });

   

}