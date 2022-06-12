import React, { Component } from "react";
import CurrencyInput from "./CurrencyInput";

//інформаця отримана із запиту
const fetchInfo = {
    "success": true,
    "timestamp": 1654967823,
    "base": "USD",
    "date": "2022-06-11",
    "rates": {
        "AED": 3.673104,
        "AFN": 89.399125,
        "ALL": 114.261266,
        "AMD": 429.910629,
        "ANG": 1.815174,
        "AOA": 435.826404,
        "ARS": 122.446568,
        "AUD": 1.418038,
        "AWG": 1.8005,
        "AZN": 1.70397,
        "BAM": 1.859508,
        "BBD": 2.033562,
        "BDT": 93.65155,
        "BGN": 1.85946,
        "BHD": 0.376878,
        "BIF": 2071.296824,
        "BMD": 1,
        "BND": 1.391139,
        "BOB": 6.934398,
        "BRL": 4.987385,
        "BSD": 1.007131,
        "BTC": 3.5078203e-05,
        "BTN": 78.354725,
        "BWP": 12.156589,
        "BYN": 3.399791,
        "BYR": 19600,
        "BZD": 2.030139,
        "CAD": 1.277825,
        "CDF": 2005.000362,
        "CHF": 0.987862,
        "CLF": 0.03061,
        "CLP": 844.630396,
        "CNY": 6.708904,
        "COP": 3879.539836,
        "CRC": 691.538315,
        "CUC": 1,
        "CUP": 26.5,
        "CVE": 104.834569,
        "CZK": 23.48504,
        "DJF": 179.302149,
        "DKK": 7.07145,
        "DOP": 55.394562,
        "DZD": 146.51804,
        "EGP": 18.707929,
        "ERN": 15.000001,
        "ETB": 52.392375,
        "EUR": 0.950765,
        "FJD": 2.184904,
        "FKP": 0.818331,
        "GBP": 0.811919,
        "GEL": 2.91504,
        "GGP": 0.818331,
        "GHS": 7.981841,
        "GIP": 0.818331,
        "GMD": 54.05039,
        "GNF": 8915.953603,
        "GTQ": 7.780376,
        "GYD": 210.829055,
        "HKD": 7.849804,
        "HNL": 24.746149,
        "HRK": 7.151804,
        "HTG": 115.321354,
        "HUF": 378.41504,
        "IDR": 14614.95,
        "ILS": 3.39424,
        "IMP": 0.818331,
        "INR": 78.143504,
        "IQD": 1469.984788,
        "IRR": 42350.000352,
        "ISK": 131.860386,
        "JEP": 0.818331,
        "JMD": 154.474235,
        "JOD": 0.70904,
        "JPY": 134.41504,
        "KES": 117.889142,
        "KGS": 79.509604,
        "KHR": 4091.081955,
        "KMF": 468.250384,
        "KPW": 900.000222,
        "KRW": 1279.280384,
        "KWD": 0.30675,
        "KYD": 0.839323,
        "KZT": 439.38011,
        "LAK": 14497.147747,
        "LBP": 1522.818026,
        "LKR": 361.069975,
        "LRD": 152.000348,
        "LSL": 15.860382,
        "LTL": 2.95274,
        "LVL": 0.60489,
        "LYD": 4.814223,
        "MAD": 9.982791,
        "MDL": 19.191576,
        "MGA": 4083.067123,
        "MKD": 58.580529,
        "MMK": 1864.772866,
        "MNT": 3075.770799,
        "MOP": 8.142898,
        "MRO": 356.999828,
        "MUR": 44.095836,
        "MVR": 15.860378,
        "MWK": 1028.918996,
        "MXN": 19.97682,
        "MYR": 4.402039,
        "MZN": 63.830377,
        "NAD": 15.860377,
        "NGN": 415.130377,
        "NIO": 36.106674,
        "NOK": 9.71408,
        "NPR": 125.367941,
        "NZD": 1.569243,
        "OMR": 0.384978,
        "PAB": 1.007131,
        "PEN": 3.78437,
        "PGK": 3.594505,
        "PHP": 53.060375,
        "PKR": 203.699848,
        "PLN": 4.38115,
        "PYG": 6909.678646,
        "QAR": 3.641038,
        "RON": 4.699104,
        "RSD": 111.549724,
        "RUB": 57.624904,
        "RWF": 1035.976421,
        "SAR": 3.752019,
        "SBD": 8.113698,
        "SCR": 14.223236,
        "SDG": 456.503678,
        "SEK": 9.96571,
        "SGD": 1.38789,
        "SHP": 1.377404,
        "SLL": 13170.000339,
        "SOS": 582.000338,
        "SRD": 21.771038,
        "STD": 20697.981008,
        "SVC": 8.812512,
        "SYP": 2512.450518,
        "SZL": 15.710591,
        "THB": 34.713038,
        "TJS": 11.078817,
        "TMT": 3.5,
        "TND": 3.069504,
        "TOP": 2.32435,
        "TRY": 17.115804,
        "TTD": 6.845028,
        "TWD": 29.662038,
        "TZS": 2346.700894,
        "UAH": 29.758034,
        "UGX": 3716.486024,
        "USD": 1,
        "UYU": 39.787983,
        "UZS": 11083.922799,
        "VEF": 213830222338.07285,
        "VND": 23182,
        "VUV": 114.265663,
        "WST": 2.579343,
        "XAF": 623.651835,
        "XAG": 0.045695,
        "XAU": 0.000534,
        "XCD": 2.70255,
        "XDR": 0.748051,
        "XOF": 623.651835,
        "XPF": 113.690364,
        "YER": 250.250364,
        "ZAR": 15.85881,
        "ZMK": 9001.203593,
        "ZMW": 17.046302,
        "ZWL": 321.999592
    }
}

//--------------------дані для запиту-----------------------
let myHeaders = new Headers();
myHeaders.append("apikey", "XzKde5G0jErkHMqx5BQWosyVGuAFyaiV");

let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};
//--------------------дані для запиту-----------------------

export default class CurrencyConverter extends Component {
    state = {
        amount1: 1,
        amount2: 1,
        currency1: 'USD',
        currency2: 'EUR',
        rates: [],
        exchangeRate: []
    }

    componentDidMount() {
        //АПІ, який я використав - безплатний, але дозволяє робити тільки 100
        //запитів на місяць, в мене залишилось десь 50
        //Тому, щоб перевірити роботу запиту розкоментуйте наступний код:

        // return fetch("https://api.apilayer.com/fixer/latest?symbols=&base=USD", requestOptions)
        //     .then(response => response.json())
        //     .then(response => this.setState({ rates: response.rates }))
        //         .catch(error => console.log('error', error));

        //і закоментуйте цей код:
        this.setState({ rates: fetchInfo.rates })
        //Змінна fetchInfo містить ідентичні дані до тих, що приходять із сервера
    }

    handleAmount1Change = (amount1) => {
        this.setState({
            amount1: amount1,
            amount2: amount1 * this.state.rates[this.state.currency2] / this.state.rates[this.state.currency1],
        })
    }

    handleCurrency1Change = (currency1) => {
        this.setState({
            currency1: currency1,
            amount2: this.state.amount1 * this.state.rates[this.state.currency2] / this.state.rates[this.state.currency1],
        })
    }

    handleAmount2Change = (amount2) => {
        this.setState({
            amount2: amount2,
            amount1: amount2 * this.state.rates[this.state.currency1] / this.state.rates[this.state.currency2],
        })
    }

    handleCurrency2Change = (currency2) => {
        this.setState({
            currency2: currency2,
            amount1: this.state.amount2 * this.state.rates[this.state.currency1] / this.state.rates[this.state.currency2],
        })
    }

    render() {
        const { amount1, amount2, currency1, currency2, exchangeRate, rates } = this.state
        return (
            <>
                <h1>Обмін валют</h1>
                <CurrencyInput
                    currencies={Object.keys(rates)}
                    amount={amount1}
                    currency={currency1}
                    amountChangeHandler={this.handleAmount1Change}
                    currencyChangeHandler={this.handleCurrency1Change}
                />
                <CurrencyInput
                    currencies={Object.keys(rates)}
                    amount={amount2}
                    currency={currency2}
                    amountChangeHandler={this.handleAmount2Change}
                    currencyChangeHandler={this.handleCurrency2Change}
                />
            </>
        )
    }
}

// amountChange = (e) => {
//     const { name, value } = e.target
//     this.setState({
//         [name]: value
//     })
// }

// currencyChange = (e) => {
//     const { name, value } = e.target
//     this.setState({
//         [name]: value
//     })
// }