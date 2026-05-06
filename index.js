let inputEl=document.getElementById("inputBox")
let convertEl = document.getElementById("convert-btn")


let lengthEl = document.getElementById("lengthBox")
let volumeEl = document.getElementById("volumeBox")
let massEl = document.getElementById("massBox")

convertEl.addEventListener("click",function(){
    let input=inputEl.value
    converter(input)
})


inputEl.addEventListener("input", function(){
    inputBox.style.fontSize="48px"
    
    while (inputBox.scrollWidth > inputBox.clientWidth && parseInt(inputBox.style.fontSize) > 16) {
        inputBox.style.fontSize = parseInt(inputBox.style.fontSize) - 2 + "px"
    }
})




/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


function converter(num){
    convertLength(num)
    convertVolume(num)
    convertMass(num)
}

function convertLength(length){
    let lengthinMeters = Math.round((length/3.281)*100)/100
    let lengthinFeet = Math.round((length*3.281)*100)/100
    lengthEl.innerHTML = `
        <div class="output-content">
            <h1 class="output-title">Length (Meter/Feet)</h1>
            <p class="output-content">${length} meters = ${lengthinFeet} feet | ${length} feet =  ${lengthinMeters} meters</p>
        </div>
    `
}

function convertVolume(volume){
    let volumeinGallons = Math.round((volume/0.264)*100)/100
    let volumeinLiters = Math.round((volume*0.264)*100)/100
    volumeEl.innerHTML = `
        <div class="output-content">
            <h1 class="output-title">Volume (Gallons/Litres)</h1>
            <p class="output-content">${volume} gallons = ${volumeinGallons} litres | ${volume} litres =  ${volumeinLiters} gallons</p>
        </div>
    `
}

function convertMass(mass){
    let massinKgs = Math.round((mass*2.204)*100)/100
    let massinPounds = Math.round((mass/2.204)*100)/100
    massEl.innerHTML = `
        <div class="output-content">
            <h1 class="output-title">Mass (Kg/Pounds)</h1>
            <p class="output-content">${mass} pounds = ${massinKgs} kgs | ${mass} kgs =  ${massinPounds} pounds</p>
        </div>
    `
}

