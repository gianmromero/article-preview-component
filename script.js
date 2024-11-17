
function handleShareIconClick() {

    const newDiv = document.createElement('div');

    newDiv.style.backgroundColor = 'hsl(217, 19%, 35%)';
    newDiv.style.display = 'flex';
    newDiv.style.alignItems = 'center';
    newDiv.style.justifyContent = 'space-between';
    newDiv.style.position = 'absolute';
    newDiv.style.width = '327px';
    newDiv.style.height = '64px';
    newDiv.style.borderRadius = '0px 0px 10px 10px';
    //Text
    const text = document.createElement('p');
    text.textContent = 'S H A R E';
    text.fontFamily = 'Manrope';
    text.fontSize = '13px';
    text.fontWeight = 'medium';
    text.letterSpacing = '5px';
    text.style.color = '#9DAEC2';
    text.style.marginLeft = '32px';
    //Social media icons
    const icon1 = document.createElement('img');
    icon1.src = './images/icon-facebook.svg';
    icon1.style.width = '20px';
    icon1.style.height = '20px';

    const icon2 = document.createElement('img');
    icon2.src = './images/icon-twitter.svg';
    icon2.style.width = '20px';
    icon2.style.height = '16.25px';

    const icon3 = document.createElement('img');
    icon3.src = './images/icon-pinterest.svg';
    icon3.style.width = '20px';
    icon3.style.height = '20px';
    //New Share Div
    const newShareDiv = document.createElement('div');
    newShareDiv.style.display = 'flex';
    newShareDiv.style.justifyContent = 'center';
    newShareDiv.style.alignItems = 'center';
    newShareDiv.style.borderRadius = '50%';
    newShareDiv.style.padding = '15px';
    newShareDiv.style.width = '10px';
    newShareDiv.style.height = '10px';
    newShareDiv.style.backgroundColor = '#6E8098';
    newShareDiv.style.marginRight = '32px';
    newShareDiv.style.marginLeft = '46px';
    //New Share Icon
    const newShareIcon = document.createElement('img');
    newShareIcon.src = './images/icon-share.svg';
    newShareIcon.style.width = '15px';
    newShareIcon.style.height = '12.97px';
    newShareIcon.style.filter = 'brightness(0) invert(1)';
    
    newShareDiv.appendChild(newShareIcon);

    newDiv.appendChild(text);
    newDiv.appendChild(icon1);
    newDiv.appendChild(icon2);
    newDiv.appendChild(icon3);
    newDiv.appendChild(newShareDiv);

    const cardFooter = document.querySelector('.card__footer');
    cardFooter.style.position = 'relative';
    cardFooter.appendChild(newDiv);

}

function handleShareIconDesktopClick() {

    const shareIconDesktop = document.querySelector('.card__footer-share-icon');
    const shareArrow = document.querySelector('.card__share-arrow');

    shareIconDesktop.style.backgroundColor = '#6E8098';
    shareArrow.style.filter = 'brightness(0) invert(1)';
    // Div
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = 'hsl(217, 19%, 35%)';
    newDiv.style.display = 'flex';
    newDiv.style.alignItems = 'center';
    newDiv.style.justifyContent = 'space-between';
    newDiv.style.position = 'absolute';
    newDiv.style.width = '248px';
    newDiv.style.height = '55px';
    newDiv.style.borderRadius = '10px 10px 10px 10px';
    newDiv.style.position = 'absolute';
    newDiv.style.bottom = '61px';
    newDiv.style.left = '-115px';
    newDiv.style.zIndex = '10';
    //Div Arrow
    const arrow = document.createElement('div');
    arrow.style.position = 'absolute';
    arrow.style.bottom = '-10px';
    arrow.style.left = '52%';
    arrow.style.transform = 'translateX(-50%)';
    arrow.style.width = '0';
    arrow.style.height = '0';
    arrow.style.borderLeft = '10px solid transparent';
    arrow.style.borderRight = '10px solid transparent';
    arrow.style.borderTop = '10px solid hsl(217, 19%, 35%)';
    //Text
    const text = document.createElement('p');
    text.textContent = 'S H A R E';
    text.fontFamily = 'Manrope';
    text.fontSize = '13px';
    text.fontWeight = 'medium';
    text.letterSpacing = '5px';
    text.style.color = '#9DAEC2';
    text.style.marginLeft = '32px';
    //Social media icons
    const icon1 = document.createElement('img');
    icon1.src = './images/icon-facebook.svg';
    icon1.style.width = '20px';
    icon1.style.height = '20px';

    const icon2 = document.createElement('img');
    icon2.src = './images/icon-twitter.svg';
    icon2.style.width = '20px';
    icon2.style.height = '16.25px';

    const icon3 = document.createElement('img');
    icon3.src = './images/icon-pinterest.svg';
    icon3.style.width = '20px';
    icon3.style.height = '20px';
    icon3.style.marginRight = '26px';

    newDiv.appendChild(text);
    newDiv.appendChild(icon1);
    newDiv.appendChild(icon2);
    newDiv.appendChild(icon3);
    newDiv.appendChild(arrow);

    shareIconDesktop.style.position = 'relative';
    
    shareIconDesktop.appendChild(newDiv);

}

//Mobile
if (window.matchMedia('(max-width: 1023px)').matches) {
    const shareIcon = document.querySelector('.card__footer-share-icon');
    shareIcon.addEventListener('click', handleShareIconClick);
}
// Desktop
if (window.matchMedia('(min-width: 1024px)').matches) {
    const shareIconDesktop = document.querySelector('.card__footer-share-icon');    
    shareIconDesktop.addEventListener('click', handleShareIconDesktopClick);
}



