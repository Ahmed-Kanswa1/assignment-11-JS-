// let city=""
// let ip=""

// let xhr= new XMLHttpRequest();

//   xhr.addEventListener('readystatechange',function(){
//     if(xhr.readyState==4){
//         currentData= JSON.parse(xhr.responseText).query;
//     ip=currentData
//         city=currentData
//        console.log(currentData);

    
//     }
// })


// xhr.open('get','http://ip-api.com/json');
// // xhr.open('get','https://api.ipstack.com');

// xhr.send()
// console.log(city)



// let api= new XMLHttpRequest();

//   api.addEventListener('readystatechange',function(){
//     if(api.readyState==4){
//         currentData= JSON.parse(api.responseText);
//         city=currentData
//        console.log(currentData);

    
//     }
// })


// // api.open('get','http://ip-api.com/json');
// api.open('get',`http://api.ipstack.com/${ip}?access_key = 1cbfca2ae7df64d95b1b625d45b5955f`)

// api.send()
// console.log(city)










let city = "";
let ip = "";

function getLocation(){
  return new Promise(function(){
    let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', function() {
  if (xhr.readyState == 4) {
    const currentData = JSON.parse(xhr.responseText);
    ip = currentData.query;
 
    console.log(ip);
   

    // Make the second API request using the obtained IP
    let api = new XMLHttpRequest();

    api.addEventListener('readystatechange', function() {
      if (api.readyState == 4) {
        const currentData = JSON.parse(api.responseText);
        city = currentData.country_name;
        console.log(currentData);
        console.log(city);
        getCountryName(city)
      }
    });

    api.open('GET', `http://api.ipstack.com/${ip}?access_key=1cbfca2ae7df64d95b1b625d45b5955f`);
    api.send();
  }
});

xhr.open('GET', 'http://ip-api.com/json');
xhr.send();



  })
}
getLocation().then(function() {
 
});

