import { factoryDiv, factoryImage, factoryButton } from './factory.js';
import './styles.css';

export const menuPage = function menu() {
    //! Root container
    const menuContainer = factoryDiv();
    menuContainer.classList.add()


    //! Header
    const menuHeader = factoryDiv('', 'Menu');

    menuContainer.appendChild(menuHeader);


    //! Beverage Section
    const beverageSectHeader = factoryDiv('beverages', 'Beverage');

    menuContainer.appendChild(beverageSectHeader);


    //! Honey Tea Container
    const honeyTeaContainer = factoryDiv();
    const honeyTeaHeader = factoryDiv('', 'Honey Tea');
    const honeyTeaContent = factoryDiv('menuServicesDescription', 'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!');
    const honeyTeaImageFlex = factoryDiv('honeyTeaFlex', '');
    const honeyTeaPrice = factoryDiv('', '$2');
    const honeyTeaImage = factoryImage() //todo Don't remember to put the src for the image here

    honeyTeaContainer.classList.add('menuServices')

    menuContainer.appendChild(honeyTeaContainer);
    honeyTeaContainer.append(honeyTeaHeader, honeyTeaContent,honeyTeaImageFlex);
    honeyTeaImageFlex.append(honeyTeaPrice, honeyTeaImage);


    //! Beary Tea Container
    const bearyTeaContainer = factoryDiv();
    const bearyTeaHeader = factoryDiv('', 'Beary Tea');
    const bearyTeaContent = factoryDiv('', 'A comforting, almost filling tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.');
    const bearyTeaImageFlex = factoryDiv('imageFlex', '');
    const bearyTeaPrice = factoryDiv('', '$2');
    const bearyTeaImage = factoryImage() //todo Don't remember to put the src for the image here

    menuContainer.appendChild(bearyTeaContainer);
    bearyTeaContainer.append(bearyTeaHeader, bearyTeaContent, bearyTeaImageFlex);
    bearyTeaImageFlex.append(bearyTeaPrice, bearyTeaImage);


    //! Sides Section
    const sidesSectHeader = factoryDiv('', 'Sides');
    menuContainer.appendChild(sidesSectHeader);


    //! Toast and Jam Container
    const toastContainer = factoryDiv();
    const toastHeader = factoryDiv('', 'Toast and Jam');
    const toastContent = factoryDiv('', 'A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.');
    const toastImageFlex = factoryDiv('menuImageFlex', '');
    const toastPrice = factoryDiv('', '$1');
    const toastImage = factoryImage(); //todo Don't remember to put the src for the image here

    menuContainer.appendChild(toastContainer);
    toastContainer.append(toastHeader, toastContent, toastImageFlex);
    toastImageFlex.append(toastPrice, toastImage);


    //* Fresh fruit Container
    const freshFruitContainer = factoryDiv();
    const freshFruitHeader = factoryDiv('', 'Fresh Fruit');
    const freshFruitContent = factoryDiv('', 'A small bowl of fresh fruit, whatever we find at the market for the day.');
    const freshFruitImageFlex = factoryDiv('menuImageFlex', '');
    const freshFruitPrice = factoryDiv('', '$3');
    const freshFruitImage = factoryImage(); //todo Don't remember to put the src for the image here

    menuContainer.appendChild(freshFruitContainer);
    freshFruitContainer.append(freshFruitHeader, freshFruitContent, freshFruitImageFlex);
    freshFruitImageFlex.append(freshFruitPrice, freshFruitImage);


//! Main dishes section
    const mainDishesHeader = factoryDiv('', 'Main Dishes');
    menuContainer.appendChild(mainDishesHeader);


    const pancakesContainer = factoryDiv();
    const pancakesHeader = factoryDiv('', 'Pancakes');
    const pancakesContent = factoryDiv('', 'A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.');
    const pancakesImageFlex = factoryDiv();
    const pancakesPrice = factoryDiv('', '$4');
    const pancakesImage = factoryImage(); //todo Don't remember to put the src for the image here

    menuContainer.appendChild(pancakesContainer);
    pancakesContainer.append(pancakesHeader, pancakesContent, pancakesImageFlex);
    pancakesImageFlex.append(pancakesPrice, pancakesImage);


    return menuContainer;

};