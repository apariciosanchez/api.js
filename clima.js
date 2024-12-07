
document.getElementById('btnConsultar').addEventListener('click', obtenerClima);

function obtenerClima(){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=San salvador,SV&units=metric&lang=es&appid=e3e61da1f4a11ae3ab831a83370f7dc5';

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(data => {
        document.getElementById('descripcion').textContent = `Descripción: ${data.weather[0].description}`;
        document.getElementById('temperatura').textContent = `Temperatura: ${data.main.temp}°C`;
        document.getElementById('humedad').textContent = `Humedad: ${data.main.humidity}%`;
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
    
    }

    // vave de la api bc6b0084f47e012868885bf54c7292ca //
    // https://openweathermap.org/ //