let dato1 = document.getElementById('dato-1');

let dato2 = document.getElementById('dato-2');

let dato3 = document.getElementById('dato-3');

let dato4 = document.getElementById('dato-4');

let continueButton = document.querySelector("button");

//Crear el evento para cuando se haga click en continuar y asi generar numeros aleatorios

continueButton.addEventListener('click', function asignarNumeros() {
    let num1 = Math.floor(Math.random() * 101);
    let num2 = Math.floor(Math.random() * 101);
    let num3 = Math.floor(Math.random() * 101);
    let num4 = Math.floor(Math.random() * 101);

    //Cambiar el contenido dentro de las etiquetas <b> para agregarle los numeros aleatorios

    dato1.textContent = num1;
    dato2.textContent = num2;
    dato3.textContent = num3;
    dato4.textContent = num4;

    //crear dos variables una para la suma de los numeros y la otra, para divir el resultado entre 4, para asi sacar el promedio. 

    let sum = num1 + num2 + num3 + num4;
    let promedio = Math.floor(sum / 4);

    console.log(sum);
    console.log(promedio);


    let result = document.getElementById('resultado');

    result.textContent = promedio;
    
    //creamos la condicion con los signos de comparacion, que dependiendo del promedio cambie el color de fondo 
    
    
    let statusColor = document.querySelector(".result-component");
    
    if (promedio >= 76 && promedio <= 100) {
       statusColor.classList.remove("caution", "danger");
       statusColor.classList.add("great");
        } else if (promedio >= 44 && promedio < 76) { 
        statusColor.classList.remove("great", "danger");
        statusColor.classList.add("caution");
        } else if (promedio >= 0 && promedio < 44) {
        statusColor.classList.remove("great", "caution");
        statusColor.classList.add("danger");
    
        };

////creamos la condicion con los signos de comparacion, que dependiendo del promedio cambie el texto de la seccion 
        
    let statusText = document.querySelector('.status');

    if (promedio >= 76 && promedio <= 100) {
        statusText.textContent = 'Great';
         } else if (promedio >= 44 && promedio < 76) { 
            statusText.textContent = 'Caution';
         } else if (promedio >= 0 && promedio < 44) {
            statusText.textContent = 'Danger';
     
         };






let statusContent = document.querySelector('.result-component-paragraph');

    if (promedio >= 76 && promedio <= 100) {
      statusContent.textContent = 'Estas muy bien';
         } else if (promedio >= 44 && promedio < 76) { 
            statusContent.textContent = 'Ten cuidado, se recomienda ir al medico ';
         } else if (promedio >= 0 && promedio < 44) {
            statusContent.textContent = 'Estas en un peligro muy alto ir a tu especialista de inmediato';
     
         };

      });








