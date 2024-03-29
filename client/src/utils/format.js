/**
* Fonction pour formater un nombre en prix locale fr
* @param {number} number - 10
* @return 10,00 €
*/
function numberToEUR(number) {
    var price = (number / 100) + ".00"
    var localFrNumber = Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
    });
    var EURPrice = localFrNumber.format(price)

    return EURPrice
}

export { numberToEUR }