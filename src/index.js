import './styles.css';
import { homePage } from './home';
import { menuPage } from './menu';
import {createButtons} from './header';

const content = document.querySelector('#content');

createButtons();

function renderPage(page) {
    resetDom();
    content.appendChild(page);
}
renderPage(homePage());






//* Function to reset the page
const menuButton = document.querySelector('.menuButton');
const homeBtn = document.querySelector('.homeButton');
function resetDom() {
    content.innerHTML = '';
}

homeBtn.addEventListener('click', () => renderPage(homePage()));
menuButton.addEventListener('click', function() {
    resetDom();
    content.appendChild(menuPage());
})

