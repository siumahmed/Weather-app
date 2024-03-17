//api
const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
//fetch
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
   if(city.length < 1){
    alert("Please enter a valid city name")
   }
   else{
     fetch(url)
    .then(response => response.json())
    .then(data => displayTemperature(data))
   }
    
}
function setInnerText(id, text){
    document.getElementById(id).innerText = text;
} 

function displayTemperature(temperature){
    setInnerText(`city`,temperature.name);
    setInnerText(`temperature`, temperature.main.temp)
    setInnerText(`condition`,temperature.weather[0].main)

    //weather icon added
     const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
     const imgIcon = document.getElementById('weather-icon');
     imgIcon.setAttribute(`src`,url);

}

