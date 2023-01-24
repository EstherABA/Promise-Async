
//A
// const getData = () => {
//     return new Promise((resolve,reject) =>{ 
//        setTimeout(() => resolve("hello, world"), 2000)
//     })
//     return newPromise
// }

// const processData = async () => {
//     const data = await getData();
//     console.log(data);
// }
// processData()
//B
// debugger
// const myFunction = (data) => {
//     return new Promise ((resolve,reject) =>{
//         if (Number.isInteger(data)) {
//             if (data % 2 === 0) {
//                 setTimeout(() => resolve("even"), 2000)
//             }
//             else {
//                 setTimeout(() => resolve("odd"), 1000)  
//             }}
//         else {
//             reject(('Error--->'))
//         }
//     })
// };

// const process = async () => {
//     try{
//         const dataNum = await myFunction("sa");
//         console.log(dataNum);
//     } 
    
//     catch(error) { 
//         console.error(error);
//     }
// };


// process()

//
fetch('https://restcountries.com/v2/all')
.then((response)=> response.json())
.then((data)=>{
    console.log(data);
    const mapCountries = data.map((country)=>{

        let mainCountries = document.getElementById('countriesCard');
        let allCountryInformation = document.createElement('div')
        let countryBlockText = document.createElement('div')
        let countryName = document.createElement('div')
        let CountryPopulation = document.createElement('div')
        let CountryRegion = document.createElement('div')
        let countryCapital = document.createElement('div')
        let countryImg = document.createElement('img')
        
        allCountryInformation.setAttribute("class" ,"countryCard")
        allCountryInformation.setAttribute("id" ,`countryCard-${country['name']}`)
        countryBlockText.setAttribute("class" , "countryBlockText")
        countryImg.src = country['flags']['png']
        countryName.textContent = country['name']
        countryName.setAttribute("class" , "countryName")
        CountryPopulation.textContent = "Population:" +" "+ country['population'].toLocaleString()
        CountryRegion.textContent = "Region:" +" "+ country['region']
        countryCapital.textContent = "Capital:" +" "+ country['capital']
        
        countryBlockText.appendChild(countryName)
        countryBlockText.appendChild(CountryPopulation)
        countryBlockText.appendChild(CountryRegion)
        countryBlockText.appendChild(countryCapital)
        allCountryInformation.appendChild(countryImg)
        allCountryInformation.appendChild(countryBlockText)
        mainCountries.appendChild(allCountryInformation)
    })
})



function searchValue() {
    let input = document.getElementById('search-row').value;
    const countryCardId = document.getElementById(`countryCard-${input}`)
    // console.log(countryCardId);
    countryCardId.style.display = "block"
    body.style.display = "none"
    debugger
}

//   input.setAttribute("class","active");
//   body.setAttribute("class", "hide")
