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
    .then((data)=>{
        let fetcheddata = data;
        // console.log(fetcheddata)
        let ans = Object.values(fetcheddata)   
        // console.log(ans)
        let tempo = Math.floor(ans[3].temp);
        let feel  = Math.floor(ans[3].feels_like)

        cityname.innerText = `Weather of (${ans[11]})`
        feellike.innerText = `feels_like : ${feel}`
        weathercondition.innerText = `${ans[1][0].main}`
        temperature.innerText = `Temperature : ${tempo}`
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        image.src = iconUrl
        humidity.innerText = `HUMADITY : ${ans[3].humidity}`
        child2.style.display = 'block';
        container.style.height = 'auto'
        input.value=""



    }).catch((e)=>{
        alert('not found try again');
    })

 }
searchbtn.addEventListener('click',checkweather) 

