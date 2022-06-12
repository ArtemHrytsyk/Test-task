export default function CurrencyInput(props) {
    return (
        <div>
            <input
                type="text"
                value={props.amount}
                name={props.inputName}
                onChange={e => props.amountChangeHandler(e.target.value)}
            />
            <select
                value={props.currency}
                name={props.selectName}
                onChange={e => props.currencyChangeHandler(e.target.value)}
            >
                {props.currencies.map(currency => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    )
}