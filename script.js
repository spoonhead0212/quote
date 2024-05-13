const headId = document.querySelector('.quote-id');
const advice = document.querySelector('.advice')
const errP = document.querySelector('.error-show')
const wrap = document.querySelector('.wrap')
const diceBtn = document.querySelector('.dice-btn')

const fade = function(element) {
    element.style.opacity = 1
    element.style.transition = '400ms ease-in-out 200ms'
    element.style.transform = 'unset';
}

async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice')
        // if (!response.ok) {throw new Error('No advice')}
        const {slip} = await response.json()
        headId.textContent = `advice #${slip.id}`
        advice.textContent = slip.advice
        fade(advice)
    } catch (error) {
        // const errMsg = error.message
        fade(errP)
        console.error(error);
        errP.textContent = `${error.message} advice due to bad network. Try again. 🚧`
        
    } finally {
        // console.log('Must');
    }
}

// fetchAdvice()

window.addEventListener('DOMContentLoaded', function(){
    fetchAdvice()
})

diceBtn.addEventListener('click', fetchAdvice)