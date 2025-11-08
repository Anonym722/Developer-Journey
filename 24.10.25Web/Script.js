// Event listener for when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Handle h elements click to show/hide p elements
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
        heading.addEventListener('click', function () {
            const nextParagraph = this.nextElementSibling;
            if (nextParagraph && nextParagraph.tagName === 'P') {
                nextParagraph.style.display =
                    nextParagraph.style.display === 'none' ? 'block' : 'none';
            }
        });
    });

    // ClickMe button function
    function handleClickMe() {
        alert('You clicked me!');
    }

    // Close function
    function handleClose() {
        const element = document.querySelector('.content');
        if (element) {
            element.style.display = 'none';
        }
    }

    // Schliessen function (same as close but in German)
    function handleSchliessen() {
        const element = document.querySelector('.content');
        if (element) {
            element.style.display = 'none';
        }
    }

    // Add event listeners to buttons
    const clickMeBtn = document.querySelector('.clickme-btn');
    const closeBtn = document.querySelector('.close-btn');
    const schliessenBtn = document.querySelector('.schliessen-btn');

    if (clickMeBtn) clickMeBtn.addEventListener('click', handleClickMe);
    if (closeBtn) closeBtn.addEventListener('click', handleClose);
    if (schliessenBtn) schliessenBtn.addEventListener('click', handleSchliessen);
});