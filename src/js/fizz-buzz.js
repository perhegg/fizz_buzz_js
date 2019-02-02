function FizzBuzz() {
    this.check = (number) => {
        if (number % 15 === 0) {
            return 'FizzBuzz';
        } else if (number % 5 === 0) {
            return 'Buzz';
        } else if (number % 3 === 0) {
            return 'Fizz';
        } else {
            return number
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('button')
    let displayDiv = document.getElementById('display_answer')
    button.addEventListener('click', () =>{
        let value = document.getElementById('value').value
        let fizzBuzz = new FizzBuzz
        let result = fizzBuzz.check(value)
        displayDiv.innerHTML = result;
    })
})
