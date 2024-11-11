selector = '#mainmenu > a.menuentry .menuentry.lang-he';
badText = 'חומר המקצוע';
goodText = 'חומר הקורס';

function getButtons() {
    return document.querySelectorAll(selector);
}

function fixButtonText() {
    for (const button of getButtons()) {
        button.innerHTML = button.innerHTML.replace(badText, goodText);
    }
}

fixButtonText();
