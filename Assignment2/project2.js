const panels = document.querySelectorAll('.panel');
const tabLink = document.querySelectorAll('.tab-link');
const tabPanes = document.querySelectorAll('.tab-pane');
//removeActiveClasses();

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

tabLink.forEach((panel, index) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        tabPanes[index].classList.add('active');
        tabPanes[index].classList.add('d-flex');
    });
});

function removeActiveClasses()
{
    panels.forEach(panel =>
        {
            panel.classList.remove('active');
        });
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