import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: 'John',
      data: [],
    }
  }

  componentDidMount() {
    const API_URL = 'https://restcountries.eu/rest/v2/all'
    fetch(API_URL)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({
          data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  renderCountries = () => {
    return this.state.data.map((country) => {
      return (
        <div className="inner-div">
          <div>
            {' '}
            <img src={country.flag} alt={country.name} />{' '}
          </div>
          <div className="outer-flex">
            <div className="flex"><p>Name: </p><p>{country.name}</p></div>
            <div className="flex"><p>Population: </p><p>{country.population}</p></div>
            <div className="flex"><p>Capital: </p><p>{country.capital}</p></div>

          </div>
        </div>
      )
    })
  }

  render() {
    return (

      <div className="outer-container">
        <div className='text-center'>
          <h1>Find Your Country</h1>
          <p>There are {this.state.data.length} countries in the world</p>
          <p>Which one is yours?</p>
        </div>
        <div className='App'>
          <div className='countries-wrapper-inner'>{this.renderCountries()}</div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

serviceWorker.unregister();
