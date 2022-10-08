const getid = (id) => {
    return document.getElementById(id)
}
d = new Date()

const hour = d.getHours()
const year = d.getYear()

const greeting = () => {
    if(hour < 12 ){
        return "Morning"
    }else if(hour >=12 && hour<18){
        return "Afternoon"
    }else{
        return "Evening"
    }
}

getid('greeting').innerText = `Gud ${greeting()}, Samahd!`

 getid('footnote').innerHTML = `Developed with ❤️ by <a href="github.com/devsamahd">Samahd</a> &copy; ${year + 1900}`