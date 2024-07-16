import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  Change = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const value = searchInput.toLowerCase()
    const {destinationsList} = this.props
    const fliterplaceList = destinationsList.filter(place =>
      place.name.includes(value),
    )
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="searchbox">
          <div>
            <input
              className="serachbar"
              placeholder="Search"
              type="search"
              onChange={this.Change}
            />

            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <div>
            <ul className="items">
              {fliterplaceList.map(eachitam => (
                <DestinationItem placeDetalis={eachitam} key={eachitam.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
