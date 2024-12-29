console.log('script running...')
document.querySelector('.cross').style.display='none';
document.querySelector('.ham').addEventListener("click", () =>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.hmm').style.display = 'inline'
        document.querySelector('.cross').style.display ='none'
    }
    else{
         document.querySelector('.hmm').style.display = 'none'
        document.querySelector('.cross').style.display ='inline'
    }
})