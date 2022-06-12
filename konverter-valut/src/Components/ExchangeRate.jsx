import React, { Component } from "react"
export default class ExchangeRate extends Component {
    state = {
        exchangeRate: '',
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true })
        return fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
            .then(res => res.json())
            .then(res => this.setState({
                exchangeRate: res,
                loading: false
            }))
    }

    render() {
        const { exchangeRate, loading } = this.state
        return (
            <>
                <h1>Курс Валют</h1>
                {loading
                    ? <h2>Loading...</h2>
                    : <>
                        {exchangeRate.length > 0 && (
                            <ul>
                                {exchangeRate.map(currency =>
                                    <li key={currency.ccy}>
                                        {currency.ccy}: Купівля: {currency.buy} Продаж: {currency.sale}
                                    </li>)}
                            </ul>
                        )}
                    </>
                }

            </>
        )
    }
}