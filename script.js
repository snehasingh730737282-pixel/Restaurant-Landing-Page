// Mobile Menu Toggle

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
};

// Close menu when clicking nav links

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Navbar Shadow on Scroll

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if(window.scrollY > 50){
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
    }else{
        header.style.boxShadow = "0 3px 10px rgba(0,0,0,0.1)";
    }
});

// Review Slider

const reviews = [
{
name: "Priya Sharma",
text: "⭐⭐⭐⭐⭐ Amazing food and excellent service!"
},
{
name: "Rahul Verma",
text: "⭐⭐⭐⭐⭐ Best restaurant in the city."
},
{
name: "Anjali Singh",
text: "⭐⭐⭐⭐⭐ Great ambience and tasty food."
}
];

let index = 0;

const reviewBoxes = document.querySelectorAll(".review-box");

setInterval(() => {

if(reviewBoxes.length > 0){

reviewBoxes[0].innerHTML = `
<h3>${reviews[index].name}</h3>
<p>${reviews[index].text}</p>
`;

index++;

if(index >= reviews.length){
index = 0;
}

}

},3000);

// Scroll Animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
}

});

});

document.querySelectorAll('section').forEach(section => {

section.style.opacity = "0";
section.style.transform = "translateY(50px)";
section.style.transition = "0.8s";

observer.observe(section);

});