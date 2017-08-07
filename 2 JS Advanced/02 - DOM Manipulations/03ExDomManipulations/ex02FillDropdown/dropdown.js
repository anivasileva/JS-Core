function addItem() {
    let firstElement = document.getElementById('newItemText').value;
    let secondElement = document.getElementById('newItemValue').value;

    let element=document.createElement('option');
    element.textContent=firstElement;
    element.value=secondElement;

    document.getElementById('menu').appendChild(element);
    document.getElementById('newItemText').value='';
    document.getElementById('newItemValue').value='';
}
