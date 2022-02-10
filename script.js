document.getElementById('second-heading').innerHTML= 'Whats up Class'

const getDataButton = document.getElementById('get-data')
getDataButton.addEventListener('click', () => {
    console.log('testing button')
    
    function displayData(allBeers){
        document.querySelector('pre').innerHTML = JSON.stringify(allBeers, null, 2)
    }

    fetch('https://api.sampleapis.com/beers/ale')
    .then(data => data.json())
    .then(beers => displayData(beers))
    .catch(err => console.log(err))
})
function showAlert(){
     alert('hey class we done')

}
const alertBtn = document.getElementById('show-alert-btn')
alertBtn.addEventListener('click', showAlert)
