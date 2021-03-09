const hobbyPanels = document.querySelectorAll('.hobby.panel');
const projectPanels = document.querySelectorAll('.project.panel');
const hobbyName = document.querySelectorAll('.hobby.panel h2');
const projectPanels = document.querySelectorAll('.project.panel');
const tabLink = document.querySelectorAll('.tab-link');
const tabLinkText = document.querySelectorAll('.tab-link span');
const tabPanes = document.querySelectorAll('.tab-pane');
const paneImage = document.querySelectorAll('.pane-image');
const paneDesc = document.querySelectorAll('.pane-description');
var hobby_active = false;
var project_active = false;

hobbyPanels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
        removeActiveClassesCards(hobbyPanels);
        panel.classList.add('active');
        hobby_active = True
    });

    panel.addEventListener('mouseover', () => {
        if(!hobby_active) {
            panel.
        }
    }); 
});

projectPanels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClassesCards(projectPanels);
        panel.classList.add('active');
    });
});

tabLink.forEach((panel, index) => {
    panel.addEventListener('click', () => {
        removeActiveClassesTabs();
        panel.classList.add('active');
        tabPanes[index].classList.add('active');
        tabPanes[index].classList.add('d-flex');
        anime({
            targets: [paneImage[index], paneDesc[index]],
            opacity: 0,
            duration: 0,
            translateX: -20,
            translateY: -20,
            loop: false
        });
        anime({
                targets: paneImage[index],
                opacity: 1,
                duration: 2000,
                translateX: 0,
                translateY: 0,
                loop: false
        });
        anime({
            targets: paneDesc[index],
            delay: 400,
            opacity: 1,
            duration: 2000,
            translateX: 0,
            translateY: 0,
            loop: false
    });
    });
});

function removeActiveClassesCards(panels)
{
    panels.forEach(panel =>
        {
            panel.classList.remove('active');
        });
    
}

function removeActiveClassesTabs()
{
    tabLink.forEach(panel =>
        {
            panel.classList.remove('active');
        });
    tabPanes.forEach(panel =>
        {
            panel.classList.remove('active');
            panel.classList.remove('d-flex');
        });
}