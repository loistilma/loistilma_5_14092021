/**
* Fonction pour formater une variable de type nombre en prix locale
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