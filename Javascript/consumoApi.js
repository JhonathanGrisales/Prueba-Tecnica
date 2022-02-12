const url = 'https://swapi.dev/api/people/'; //Url de api publica.
let person = [];
let name = '';
let height = '';
let count = 0;


//Función para consultar la api publica.
const personage = async () => {

    const url = await fetch('https://swapi.dev/api/people/')
    const data = await url.json()

//Recorrido del archivo json para validar si es mayor a 100 e ir agregando a un nuevo arreglo.
    for (let i = 0; i < data.results.length; i++) {

        if (data.results[i].height > 100) {

            name = data.results[i].name;
            height = data.results[i].height;

            person[count] = { name, height };
            count++;

        }

    }

    //Recorrido del nuevo arreglo para enviar a la parte visual.

    for (let j = 0; j < person.length; j++) {


        let element = document.getElementById('data')
        element.innerHTML += `<tr><td>${j+1}</td><td>${person[j].name}</td><td>${person[j].height}</td></tr>`;

    }


    //Conversion del arreglo a cadena JSON para mostrar en consola. 
    console.log(JSON.stringify(person));

}

personage();
