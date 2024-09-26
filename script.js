const celsius = document.querySelector('#celsius');
const fahrenheit = document.querySelector('#fahrenheit');
const kelvin = document.querySelector('#kelvin');
const btnConvertir = document.querySelector('#convertir');
const btnLimpiar = document.querySelector('#limpiar');

btnConvertir.addEventListener('click', (e) => {
  e.preventDefault();

  if (!isNaN(celsius.value)) {
    const f = parseFloat(celsius.value * (9 / 5)) + 32;
    const k = parseFloat(celsius.value) + 273.15;

    fahrenheit.value = f;
    kelvin.value = k;
  } else {
    alert(`${celsius.value} No es un numero. Ingrese nuevamente los datos`);
    celsius.form.reset();
  }

})

btnLimpiar.addEventListener('click', (e) => {
  e.preventDefault();
  const form = celsius.form;

  form.reset();

})


