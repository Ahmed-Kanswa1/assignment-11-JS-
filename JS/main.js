let currentData="";
let locationData="";
let forecastData="";
let city="London"
let ip=""
let search=document.getElementById('search');
let xhr= new XMLHttpRequest();
function getCountryName(city){
  xhr.addEventListener('readystatechange',function(){
    if(xhr.readyState==4){
        currentData= JSON.parse(xhr.responseText).current;
        locationData= JSON.parse(xhr.responseText).location;
        forecastData= JSON.parse(xhr.responseText).forecast;
       console.log(currentData);
       console.log(locationData);
       console.log(forecastData)
       console.log(city+'blaaaah');
       
      
      call()
    }
})


xhr.open('get',`https://api.weatherapi.com/v1/forecast.json?key=e9256cb46b95488180c172900233107&q=${city}&days=3`);
xhr.send()



}

getCountryName(city)
function display(){
  return new Promise(function(){
    function nameOfDay(date1){
       
      console.log(date1);
          let newdate=new Date(date1)
          let options = { weekday: 'long' };
          let dayName= newdate.toLocaleDateString('en-US', options)
          console.log(dayName)
          return dayName;
  }
  function nameOfMonth(month){
      let newMonth= new Date(month);
      let options = { day: 'numeric', month: 'long' };
     
      let dayMonthName = newMonth.toLocaleDateString('en-US', options).replace(/ /g,'');
      
      return dayMonthName;


  }
  let dis="";
   dis+=`
   <p class="d-flex   p-2 day1d justify-content-between align-items-center "><span>${nameOfDay(forecastData.forecastday[0].date)}</span><span>${nameOfMonth(forecastData.forecastday[0].date)} </span></p>
  <span class="d-inline-block" id="country">${locationData.name}</span>
  <h1 id="temp">${currentData.temp_c}&degC</h1>
  <div>
      <img src="https:${forecastData.forecastday[0].day.condition.icon}" alt="">
  </div>
  
  <span id="state1">${currentData.condition.text}</span>
  <div class="wind-info my-3">
    <img src="images/icon-umberella@2x.png" alt="">
    <span >${currentData.humidity}%</span>
    <img src="images/icon-wind@2x.png" alt="">
    <span>${currentData.vis_km}km/h</span>
    <img src="images/icon-compass@2x.png" alt="">
    <span>${currentData.wind_dir}</span>

  </div>
  `
  document.getElementById('Weather-data').innerHTML=dis


  let dis2=``;
  dis2+=`
  <p class="p-2 text-center day2d  align-items-center "><span>${nameOfDay(forecastData.forecastday[1].date)}</span></p>
                     
  <h1 class="mt-5">${forecastData.forecastday[1].day.maxtemp_c}&degC</h1>
  <span class="py-1">${forecastData.forecastday[1].day.avgtemp_c}&degC</span>
  <div class="my-3">
      <img src="https:${forecastData.forecastday[1].day.condition.icon}" alt="">
  </div>
  
  <span id="state2">${forecastData.forecastday[1].day.condition.text}</span>`
  document.getElementById('weather-data2').innerHTML=dis2
  let dis3=``;
  dis3=`
  <p class="p-2 text-center day1d  align-items-center "><span>${nameOfDay(forecastData.forecastday[2].date)}</span></p>
                     
  <h1 class="mt-5 " >${forecastData.forecastday[2].day.maxtemp_c}&degC</h1>
  <span class="py-1">${forecastData.forecastday[2].day.avgtemp_c
  }&degC</span>
  <div class="my-3">
      <img src="https:${forecastData.forecastday[2].day.condition.icon}" alt="">
  </div>
  
  <span id="state3">${forecastData.forecastday[2].day.condition.text}</span>
  `
  document.getElementById('weather-data3').innerHTML=dis3
  // getLocation()
  })
  
    
}




function getLocation() {
    return new Promise(function() {
     
          let apiNew = new XMLHttpRequest();

          apiNew.addEventListener('readystatechange',function(){
              if(apiNew.readyState==4){
                let result = JSON.parse(apiNew.responseText);
                console.log(result+'asdasdasdas');
               
                   city = result.country;
                  console.log("City: " + city);
                  getCountryName(city)
               
                  
                
              } 
             
          });
          apiNew.open('get','https://ip-api.com/json');
              apiNew.send()
        } );
      } 
      
      
    
  
  
  getLocation().then(function() {
    // console.log("City: " + city);
    // alert(city)
  });
  

 async function call(){
  // await getLocation()
  await display()
 }


search.addEventListener('keyup',function(){
  console.log(search.value);
  getCountryName(search.value)
})
 







