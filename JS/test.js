let city=""

let xhr= new XMLHttpRequest();

  xhr.addEventListener('readystatechange',function(){
    if(xhr.readyState==4){
        currentData= JSON.parse(xhr.responseText);
        city=currentData.country
       console.log(currentData.country);

    
    }
})


xhr.open('get','http://ip-api.com/json');
xhr.send()
console.log(city)



