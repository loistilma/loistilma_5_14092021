/**
* Fonction pour créer des balises avec des attributs
* @param {string} tag - Balise html - 'tag'
* @param {object} attributes - Attribut html - {attr: value}
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

/**
* Fonction pour target un parent par level
* @param {string} element - élement de départ
* @param {number} level - Nombre de noeud parent à atteindre
*/
function getParentNode(element, level = 1) { // 1 - default value (if no 'level' parameter is passed to the function)
    while (level-- > 0) {
      element = element.parentNode;
      if (!element) return null; // to avoid a possible "TypeError: Cannot read property 'parentNode' of null" if the requested level is higher than document
    }
    return element;
}

/** Class pour créer du html et l'ajouter au dom  */
class CreateNode {

    /**
	* Paramètrer le noeud à intégrer dans le dom
	* @param {string} tag - Balise à créer afin d'y insérer des enfants - 'div'
	* @param {object} attributes - Attribut de tag {attr: value}
    * @param {string} appendTo - Le parent où l'on ajoute "tag"
	*/
    constructor(tag, attributes, appendTo){
        this.tag = tag
        this.attributes = attributes
        this.appendTo = document.querySelector(appendTo)
    }

    createNode(inner){
        let tag = createTag(this.tag, this.attributes)
        tag.innerHTML = inner
        this.appendTo.appendChild(tag)
    }

}

export { createTag, getParentNode, CreateNode }