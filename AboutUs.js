document.getElementById('theme-logo').addEventListener('click',() =>{
    // console.log(document.getElementById('theme-logo').className)
    
    if(document.getElementById('theme-logo').className === 'fa-solid fa-sun fa-xl'){
        document.documentElement.style.setProperty('--theme-color','white')
        document.documentElement.style.setProperty('--card-text-color','black')
        document.documentElement.style.setProperty('--card-background-color','rgba(255, 255, 255, 0.5)')
        document.getElementById('theme-logo').className = 'fa-solid fa-moon'
    }
    else{
        document.documentElement.style.setProperty('--theme-color','#37474f')
        document.documentElement.style.setProperty('--card-text-color','white')
        document.documentElement.style.setProperty('--card-background-color','rgba(82, 109, 130, 0.7)')
        document.getElementById('theme-logo').className = 'fa-solid fa-sun fa-xl'
    }
    
})