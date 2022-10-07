d = new Date()
const hour = d.getHours()

const greeting = () => {
    if(hour < 12 ){
        return "Morning"
    }else if(hour >=12 && hour<18){
        return "Afternoon"
    }else{
        return "Evening"
    }
}

document.getElementById('greeting').innerText = `Gud ${greeting()}, Samahd!`

