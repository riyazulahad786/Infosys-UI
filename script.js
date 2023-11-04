const addTextButton = document.getElementById('addTextButton');
const textContainer = document.getElementById('textContainer');

function addTextAndApplyStyles() {
    const newText = document.createElement('p');
    newText.textContent = 'addedNew!';
    newText.style.display = 'flex';
    newText.style.alignItems = 'center';
    newText.style.justifyContent = 'center';
    newText.style.height = '14px';
    newText.style.paddingTop = '11px';
    textContainer.appendChild(newText);

    textContainer.style.borderRadius = '41px';
    textContainer.style.border = '2px solid rgb(138, 135, 135)';
    textContainer.style.width = '100px';
    textContainer.style.paddingTop = '6px';
    textContainer.style.marginTop="10px"
    textContainer.style.alignItems = 'center'
}


addTextButton.addEventListener('click', addTextAndApplyStyles);