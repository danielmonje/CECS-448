var links = document.querySelectorAll(".side-link")
var sections = document.querySelectorAll(".menu-category")

links.forEach((link, index) => {
    link.addEventListener('click', () =>{
        
        console.log("Link " + index + " clicked");
        removeActiveLink();
        showSection(index);


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

