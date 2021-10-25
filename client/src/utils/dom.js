/**
* Fonction pour créer des balises avec des attributs
*/

function createTag(tag, attributes){
    var element = document.createElement(tag)
    if (attributes) {
        for (var key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                element.setAttribute(key, attributes[key]);
            }
        }
    }
    return element
}

function removeElement(querySelector){
    document.querySelector(querySelector).remove();
}

function createTr(selector, inner){
    let tr = createTag('tr')
    tr.innerHTML = inner
    selector.appendChild(tr)
}

function getParentNode(element, level = 1) { // 1 - default value (if no 'level' parameter is passed to the function)
    while (level-- > 0) {
      element = element.parentNode;
      if (!element) return null; // to avoid a possible "TypeError: Cannot read property 'parentNode' of null" if the requested level is higher than document
    }
    return element;
}

export { createTag, removeElement, createTr, getParentNode }