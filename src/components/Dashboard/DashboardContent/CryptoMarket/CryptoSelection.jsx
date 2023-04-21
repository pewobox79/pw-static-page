import style from '../../../../styling/DashboardStyling/CryptoOverview.module.css'

export function CryptoSelection({setCryptoQuery, cryptoQuery}) {

    const cryptoCurrencyList = [
        {
            name: "Bitcoin",
            value: "BTC",
            id: "123"
        }, {
            name: "Etherium",
            value: "ETH",
            id: "4532524"
        }, {
            name: "Solana",
            value: "SOL",
            id: "098455234"
        }, {
            name: "Binance Coin",
            value: "BNB",
            id: "898752"
        }, {
            name: "Ripple / XRP",
            value: "XRP",
            id: "9874598"
        },

    ]


    const OptionsList = cryptoCurrencyList.map((item) => {
        return (
            <option key={item.id} value={item.value}>{item.name}</option>
        )
    })

    function handleChange(e) {
        console.log(e.target.value)
        setCryptoQuery(e.target.value)

    }

    return (
        <div className={style.selectionWrapper}>
            <form>
                <label className={style.labelStyle} htmlFor="crypto-currency">Choose a Currency:</label><br/>
                <select className={style.inputButton} id="crypto-currency" name="crypto-currency" value={cryptoQuery} onChange={handleChange}>
                    {OptionsList}
                </select>
                </form>
        </div>
    )
}