// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = cryptoDetails
  return (
    <li className="cypto-item-container">
      <div className="coin-type-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="values-container">
        <p className="currency-name">{usdValue}</p>
        <p className="currency-name">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
