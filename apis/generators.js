export function dateGeneratorForCryptoApi() {
    const date = new Date()
    const month = date.getMonth();
    const monthDoubleDigits = month < 10 ? `0${month}` : month
    const year = date.getFullYear()
    const day = date.getDay()
    const dayDoubleDigits = day < 10 ? `0${day}` : day
    return `${year}-${monthDoubleDigits}-${dayDoubleDigits}`
}