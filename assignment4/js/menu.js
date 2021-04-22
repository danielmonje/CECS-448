var links = document.querySelectorAll(".side-link");
var sections = document.querySelectorAll(".menu-category");
var buttons = document.querySelectorAll(".order-btn");
var cards = document.querySelectorAll(".card");

links.forEach((link, index) => {
    link.addEventListener('click', () =>{
        
        console.log("Link " + index + " clicked");
        removeActiveLink();
        showSection(index);


    });
});

buttons.forEach(btn =>{
    btn.addEventListener('click', () =>{
        window.location = "customizationPage.html";
    });
});

cards.forEach((card, index)=> {
    card.addEventListener("mouseover", ()=>{
        console.log("Entering card" + index);
        console.log("$('.button-div').eq("+index+").show();");
        $(".button-div").eq(index).show();
    });
    card.addEventListener("mouseout", ()=>{
        console.log("Exiting card" + index);
        $(".button-div").eq(index).hide();
    });
});

function removeActiveLink() {
    links.forEach(link =>{
        link.classList.remove('active');
    });

    sections.forEach(section =>{
        section.classList.remove('d-flex');
        section.classList.add("hidden");
    });
}

function showSection(index) {

    sections[index].classList.remove("hidden");
    sections[index].classList.add("d-flex");
    links[index].classList.add("active");
}

