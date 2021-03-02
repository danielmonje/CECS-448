const panels = document.querySelectorAll('.panel');
const tabLink = document.querySelectorAll('.tab-link');
//removeActiveClasses();

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

tabLink.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
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
}