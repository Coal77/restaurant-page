//* Factory function to create a div element with a specific class and text content
function factoryDiv(className, textContent) {
    const createDiv = document.createElement('div');
    createDiv.setAttribute('class', className);
    createDiv.textContent = textContent;
    return createDiv;
}

//* Factory function to create an image element with a specific class and source
function factoryImage(className, src) {
    const createImage = document.createElement('img');
    createImage.setAttribute('class', className);
    createImage.setAttribute('src', src);
    return createImage;
}

//* Factory function to create a button element with a specific class and text content
function factoryButton(className, textContent) {
    const createButton = document.createElement('button');
    createButton.setAttribute('class', className);
    createButton.textContent = textContent;
    return createButton;
}

export { factoryDiv, factoryImage, factoryButton };