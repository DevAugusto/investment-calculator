function execResult() {
    let value = document.getElementById('inputValue').value;
  
    let calcOne = value - (value * 50 / 100);
    let calcTwo = value * 20 / 100;
    let calcThree = value * 30 / 100;
  
    document.getElementById('bills').textContent = calcOne
    document.getElementById('lounge').textContent = calcTwo
    document.getElementById('investments').textContent = calcThree


  }
  
 
const form = document.getElementById('form')

form.addEventListener("submit" , e => {
    e.preventDefault()
})

