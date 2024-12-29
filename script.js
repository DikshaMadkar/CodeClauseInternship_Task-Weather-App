<script>
      const apikey = "71afbf1e8af9e48c21afa5e6fdcf1237";
      const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
       
      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");


      async function  checkweather(city){
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        var data = await response.json();

         console.log(data);
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "clouds"){
            weatherIcon.src = "C:\Users\Admin\Desktop\weather images\clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "C:\Users\Admin\Desktop\weather images\clear.png";
       }
       else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "C:\Users\Admin\Desktop\weather images\rain.png";

      }
      else if(data.weather[0].main == "drizzle"){
            weatherIcon.src = "C:\Users\Admin\Desktop\weather images\drizzle.png";
      }
      else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "C:\Users\Admin\Desktop\weather images\mist.png";
      }
      
 }  


      searchBtn.addEventListener("click", ()=>{
        checkweather(searchBox.value);
      })

      

      

     </script>