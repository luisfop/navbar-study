const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');

const gradients = [
    'background: linear-gradient(to right, #2c3e50, #bdc3c7)',
    'background: linear-gradient(to right, #4286f4, #373B44)',
    'background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2)'
];

const options = {
    treshHold: 0.7,
}
let observer = new IntersectionObserver(navCheck, options);



function navCheck(entries) {
    entries.forEach(entry => {
        console.log(entry);
    })
}

sections.forEach(section => {
    observer.observe(section)
    console.log('Observing');
})