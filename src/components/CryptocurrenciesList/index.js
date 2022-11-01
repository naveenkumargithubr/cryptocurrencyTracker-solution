// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoData} = this.props
    return (
      <div className="main-head-container">
        <h1 className="tracker-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="logo"
        />
        <div className="list-container">
          <div className="coin-type-head-container">
            <p className="coin">Coin Type</p>
            <div className="values-type-head-container">
              <p className="coin">USD</p>
              <p className="coin coin-space">EURO</p>
            </div>
          </div>
          <ul className="unorder-list">
            {cryptoData.map(eachItem => (
              <CryptocurrencyItem cryptoDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
