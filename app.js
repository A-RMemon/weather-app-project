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
            image.src = `https://media.giphy.com/media/HqeOAdFHx74be/giphy.gif`
        }else if(weathercond == 'Snow'){
            image.src = `https://media.giphy.com/media/lwmsEtDZhYWpW/giphy.gif`
        }else if(weathercond == 'Clear'){
            image.src = `https://media3.giphy.com/media/G1T5M0qT6ZJlu/giphy.gif`
        }else if(weathercond == 'Haze'){
            image.src = `https://i.gifer.com/origin/8d/8d1c415cc7016510e1578b3b300a3ce2_w200.gif`
        }else if(weathercond == 'Mist'){
            image.src =`https://www.bing.com/th/id/OGC.ea485d0f98c9c44f52246e4ae5e248e3?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2f3nQWWe5X1PD8s%2fgiphy.gif&ehk=k%2b5Ff51nllJykGOK%2brQ4%2b6nibIVcFSrc21n3uKqQN9M%3d`
        }else if(weathercond == 'Rain'){
            image.src = `https://www.bing.com/th/id/OGC.1619cff15261929efd0e85b7bbb2d2e1?pid=1.7&rurl=http%3a%2f%2fbestanimations.com%2fNature%2fWater%2frain%2frain-nature-animated-gif-17.gif&ehk=YaViHAKMmDPo9xqt2oBQsw47DE9Bypjy72H%2fu%2f1LaxA%3d`
        }else if(weathercond == 'Sunny'){
            image.src = `https://www.bing.com/th/id/OGC.4dc9630c964603cf58cbb20cdec919da?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fQ5jq8b6BvEtjbcXhlg%2fgiphy.gif&ehk=NdItdUzeWVDLqPnI4WjO7fC5eD3rxTIITXbCN%2bxgPcI%3d`
        }else if(weathercond == 'Smoke'){
            image.src = `https://www.bing.com/th/id/OGC.e723c1910c83f74738e207240c26d8a4?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fpF88GWa3H9lh6%2fgiphy.gif&ehk=%2bX3bi4j%2bTfNkTxl9vDMSZ1EFFKFncUBmUOVMJmqnq2I%3d`
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
        fetch 
    }).catch((e)=>{
        alert('this place is not found');
    })

 }
searchbtn.addEventListener('click',checkweather) 

