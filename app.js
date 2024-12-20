let input = document.getElementById('input');
let searchbtn = document.getElementById('search');
let humidity = document.getElementById('humidity')
let temperature = document.getElementById('temperature');
let weathercondition = document.getElementById('weathercondition');
let wind = document.getElementById('wind')
let feellike = document.getElementById('feellike');
let cityname = document.getElementById('cityname')
// let city = 'hyderabad'
let key = `cd5ef99f7768c51c4412a3dd20c21313`
let image = document.getElementById('image')
let weimage = `4cc1f7ef24ee5f2978f14a75315cca77`
let child2 = document.querySelector('.child-2');
let child3 = document.querySelector('.child-3');
let container = document.querySelector('.container')

 async function checkweather(){

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric`
    await fetch(url)
    .then(resp=>resp.json())
    .then(async (data)=>{
        let fetcheddata = data;
        console.log(fetcheddata)
        let ans = Object.values(fetcheddata)   
        // console.log(ans)
        let tempo = Math.floor(ans[3].temp);
        let feel  = Math.floor(ans[3].feels_like)
        let weathercond = ans[1][0].main
        if(weathercond == 'Clouds'){
            image.src = `https://cdn-icons-gif.flaticon.com/17102/17102874.gif`
        }else if(weathercond == 'Snow'){
            image.src = `https://cdn-icons-gif.flaticon.com/6454/6454998.gif`
        }else if(weathercond == 'wind'){
            image.src = `https://media.lordicon.com/icons/wired/flat/812-wind.gif`
        }else if(weathercond == 'Clear'){
            image.src = `https://cdn-icons-gif.flaticon.com/6455/6455053.gif`
        }else if(weathercond == 'Haze'){
            image.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3RpamQqK4DyQ81nMF-TdgW1N-91TaEL7dA&s`
        }else if(weathercond == 'Mist'){
            image.src =`https://media.lordicon.com/icons/wired/flat/812-wind.gif`
        }else if(weathercond == 'Rain'){
            image.src = `https://cdn.dribbble.com/users/2120934/screenshots/6193512/11_rain.gif`
        }else if(weathercond == 'Sunny'){
            image.src = `https://cdn.dribbble.com/users/622977/screenshots/6473478/weather-test-4.gif`
        }else if(weathercond == 'Smoke'){
            image.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3RpamQqK4DyQ81nMF-TdgW1N-91TaEL7dA&s`
        }
        cityname.innerText = `Weather of (${ans[11]})`
        feellike.innerText = `feels_like : ${feel}`
        weathercondition.innerText = `${ans[1][0].main}`
        temperature.innerText = `Temperature : ${tempo}`
        // const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        humidity.innerText = `HUMADITY : ${ans[3].humidity}`
        child2.style.display = 'block';
        container.style.height = 'auto'
        input.value="";
        input.focus()
        fetch 
    }).catch((e)=>{
        alert('this place is not found');
    })

 }
searchbtn.addEventListener('click',checkweather) 

