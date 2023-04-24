function toggleTheme() {
    var theme = document.getElementsByTagName('link').theme;
    if (theme.getAttribute('href') == 'css/style.css') {
        theme.setAttribute('href', 'css/style-dark.css');
    } else {
        theme.setAttribute('href', 'css/style.css');
    }
}