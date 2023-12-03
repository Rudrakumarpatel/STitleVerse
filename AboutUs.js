document.getElementById('theme-logo').addEventListener('click',() =>{
    // console.log(document.getElementById('theme-logo').className)
    
    if(document.getElementById('theme-logo').className === 'fa-solid fa-sun fa-xl'){
        document.documentElement.style.setProperty('--theme-color','white')
        document.documentElement.style.setProperty('--card-text-color','black')
        document.documentElement.style.setProperty('--card-background-color','rgba(255, 255, 255, 0.5)')
        document.documentElement.style.setProperty('--body-text-color','black')
        document.getElementById('theme-logo').className = 'fa-solid fa-moon'
    }
    else{
        document.documentElement.style.setProperty('--theme-color','#37474f')
        document.documentElement.style.setProperty('--card-text-color','white')
        document.documentElement.style.setProperty('--card-background-color','rgba(82, 109, 130, 0.7)')
        document.documentElement.style.setProperty('--body-text-color','white')
        document.getElementById('theme-logo').className = 'fa-solid fa-sun fa-xl'
    }
    
})


var words = ['Thanks', 'for', 'visiting', 'our', 'website.'];
var area = document.getElementById('dynamic-text');
let wordIndex = 0; 
const typeEffect = ()=>{
    const currentWord = words[wordIndex];
    area.textContent +=currentWord+" ";
    wordIndex++;
    if(wordIndex >= 6){
        area.textContent = "";
        wordIndex = 0;
    }
    setTimeout(typeEffect, 500);
};

typeEffect();