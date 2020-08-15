    const areaValue = document.getElementById("location");
    const tempValue = document.getElementById("temparature");
    const weatherValue = document.getElementById("weather");


   function getWeather(){
    const getInput = document.getElementById("inputvalue");

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ getInput.value +'&appid=450a3f93752c5dafed6b248682d595cb')
    .then(response => response.json())
    .then(data => {
        const name = data.name;
        areaValue.innerText = name;

        const temparature = data['main']['temp'] - 273;
        tempValue.innerText = temparature.toFixed(2);

        const weather = data['weather']['0']['description'];
        weatherValue.innerText = weather;

        
    });
   }


