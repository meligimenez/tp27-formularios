window.onload = function () {
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
    const errorsList = $('errores');


    // FUNCIÓN DE ERRORES
    const msgError = (input, error, msg) => {
        error.innerHTML = msg;
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
    };

    const cleanErrorBack = (error) => {
        error.innerHTML = "";
        errorsList.innerHTML = ""
    };

    // FUNCIÓN DE VERIFICACIÓN
    const validField = (input, error) => {
        error.innerHTML = null;
        error.innerHTML = "";
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')
    };

    const addMovies = $('addMovies');
    const elements = addMovies.elements;


    let errors = []
    const checkErrorToList = ({ errorMsg, isEmpty }) => {
        errors = errors.filter((error) => error !== errorMsg)

        if (isEmpty) {
            errors.push(errorMsg)
        }

        errors.forEach((error) => {
            errorsList.innerHTML += `<li><p class='alert-warning'> ${error}</p></li>`
        })
    }

    const checkFields = () => {
        let error = false;
        for (let i = 0; i < elements.length - 1; i++) {

            if (!elements[i].value || elements[i].classList.contains('is-invalid')) {
                error = true
            }
            console.log(error)
        }

        if (!error) {
            $('btn-submit').disabled = false;
        } else {
            $('btn-submit').disabled = true;
        }
    }

    /* title */
    title.addEventListener("blur", function () {
        cleanErrorBack(titleMsg)
        switch (true) {
            case !title.value.trim():
                msgError(title, titleMsg, 'el nombre es obligatorio');
                checkErrorToList({ errorMsg: "Titulo", isEmpty: true })
                break;
            default:
                checkErrorToList({ errorMsg: "Titulo", isEmpty: false })
                validField(title, titleMsg);
                break;
        }
        checkFields()
    });

    /* rating */
    rating.addEventListener("blur", function () {
        cleanErrorBack(ratingMsg)
        switch (true) {
            case !rating.value.trim():
                msgError(rating, ratingMsg, 'el rating es obligatorio');
                checkErrorToList({ errorMsg: "Rating", isEmpty: true })
                break;
            case rating.value < 0 || rating.value > 10.0:
                msgError(rating, ratingMsg, 'Solo números del 0 al 10');
                checkErrorToList({ errorMsg: "Rating", isEmpty: true })
                break;
            default:
                checkErrorToList({ errorMsg: "Rating", isEmpty: false })
                validField(rating, ratingMsg);
                break;
        }
        checkFields()
    });

    /* awards */
    awards.addEventListener("blur", function () {
        cleanErrorBack(awardsMsg)
        switch (true) {
            case !awards.value.trim():
                msgError(awards, awardsMsg, 'los premios es obligatorios');
                checkErrorToList({ errorMsg: "Premios", isEmpty: true })
                break;
            case awards.value < 0 || awards.value > 10.0:
                msgError(awards, awardsMsg, 'Solo números del 0 al 10');
                checkErrorToList({ errorMsg: "Premios", isEmpty: true })
                break;
            default:
                checkErrorToList({ errorMsg: "Premios", isEmpty: false })
                validField(awards, awardsMsg);
                break;
        }
        checkFields()
    });

    /* release date */
    release_date.addEventListener("blur", function () {
        cleanErrorBack(release_dateMsg)
        switch (true) {
            case !release_date.value.trim():
                msgError(release_date, release_dateMsg, 'la fecha de creacion es obligatoria');
                checkErrorToList({ errorMsg: "Fecha", isEmpty: true })
                break;
            default:
                checkErrorToList({ errorMsg: "Fecha", isEmpty: false })
                validField(release_date, release_dateMsg);
                break;
        }
        checkFields()
    });

    /* length */
    length.addEventListener("blur", function () {
        cleanErrorBack(lengthMsg)
        switch (true) {
            case !length.value.trim():
                msgError(length, lengthMsg, 'la duración es obligatoria');
                checkErrorToList({ errorMsg: "Duración", isEmpty: true })
                break;
            case length.value < 60 || length.value > 360:
                msgError(length, lengthMsg, 'Solo números del 60 al 360');
                checkErrorToList({ errorMsg: "Duración", isEmpty: true })
                break;
            default:
                checkErrorToList({ errorMsg: "Duración", isEmpty: false })
                validField(length, lengthMsg);
                break;
        }
        checkFields()
    });

    /* genre id */
    genre_id.addEventListener("blur", function () {
        cleanErrorBack(genre_idMsg)
        switch (true) {
            case !genre_id.value.trim():
                msgError(genre_id, genre_idMsg, 'el genero es obligatorio');
                checkErrorToList({ errorMsg: "Género", isEmpty: true })
                break;
            default:
                checkErrorToList({ errorMsg: "Género", isEmpty: false })
                validField(genre_id, genre_idMsg);
                break;
        }
        checkFields()
    });





}