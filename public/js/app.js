const formdata=document.querySelector('form')
const input=document.querySelector('input')

const m1=document.querySelector('#message-1')
const m2=document.querySelector('#message-2')
const m3=document.querySelector('#m3')
const m4=document.querySelector('#m4')
const m5=document.querySelector('#m5')
const m6=document.querySelector('#m6')
const m7=document.querySelector('#m7')
formdata.addEventListener('submit',(e)=>{

    e.preventDefault()
 m1.textContent='Loading....'
 m2.textContent=''
 m3.textContent=""
 m4.textContent=""
 m5.textContent=""
 m6.textContent=""
 m7.textContent=""
const url='/weather?address='+encodeURI(input.value)
fetch(url).then((response)=>{
    response.json().then((data)=>{
    if(data.error)
    m1.textContent=data.error
    else
    {m1.textContent=""
    m2.textContent="Location = "+ data.location
    m3.textContent="Forecast Sumaary = "+ data.summary
    m4.textContent="Average Temperature in fahrenheit = "+ data.temperature
    m5.textContent="Percentage probability of rain = "+data.percentage
    m6.textContent="Highest temperature = "+data.hightemp
    m7.textContent="Lowest temperature = "+data.lowtemp
    }    
})
    })

})

