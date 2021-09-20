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