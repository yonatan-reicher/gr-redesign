selector = '#mainmenu > a.menuentry:nth-child(4) .menuentry.lang-he';
badText = 'חומר המקצוע';
goodText = 'חומר הקורס';

function getButton() {
    return document.querySelector(selector);
}

function fixButtonText() {
    var button = getButton();
    if (button) {
        button.innerHTML = button.innerHTML.replace(badText, goodText);
    }
}

fixButtonText();
