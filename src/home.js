import { factoryDiv, factoryImage, factoryButton } from './factory.js';
import './styles.css';

export const homePage = function home() {
    //* Creates the content for the home page
    const contentContainer = factoryDiv('contentContainer', '');
    const title = factoryDiv('header', "Gattuso's Breakfast Bar");
    const testimonyContainer = factoryDiv();
    const testimony = factoryDiv('testimony', "Gattuso's has the best porridge! The atmosphere and customer service make you feel like you're sitting in the middle of the woods, eating like a bear! This is exactly the king of place that I like to return to again and agian.");
    const testimonyAuthor = factoryDiv('testimonyAuthor', '— John Doe');
    const openHours = factoryDiv('');
    const open = factoryDiv('openHoursContainer', 'Hours');
    const openTime = factoryDiv('hours', 'Everyday: 8am - 8pm');
    const locationContainer = factoryDiv();
    const location = factoryDiv('restaurantLocation', 'Location');
    const address = factoryDiv('', '123 Forest Drive, Forestville, Maine.')


    for(const homeBorders of [ testimonyContainer, locationContainer, openHours ]) {
        homeBorders.classList.add('homeBorder')
    } 




    contentContainer.appendChild(title);
    contentContainer.appendChild(testimonyContainer);
    testimonyContainer.appendChild(testimony);
    testimonyContainer.appendChild(testimonyAuthor);
    contentContainer.appendChild(openHours);
    openHours.appendChild(open);
    openHours.appendChild(openTime);
    contentContainer.appendChild(locationContainer);
    locationContainer.appendChild(location);
    locationContainer.appendChild(address);


return contentContainer;
};

