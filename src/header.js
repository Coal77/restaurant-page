    import { factoryButton } from "./factory";
    
    export const createButtons = function () {
    const nav = document.querySelector('nav');
    //* Creates the buttons we need for the navs
    const homeButton = factoryButton('homeButton', 'Home');
    const menuButton = factoryButton('menuButton', 'Menu');
    const contactButton = factoryButton('contactButton', 'Contact');

    let buttons = [homeButton, menuButton, contactButton];
    for(const button of buttons) {
        button.classList.add('navButtons');
    }

    nav.append(homeButton, menuButton, contactButton);

    return nav;

};