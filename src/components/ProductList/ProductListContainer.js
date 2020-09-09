import React, { Component } from 'react'
import ProductList from './ProductList'
import {connect} from 'react-redux'
import {loginUser} from '../../ducks/userReducer'
import './productList.css'

class ProductListContainer extends Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    return (
      <div className="container">
        <h1 className="product-list-head">
          {this.props.user ? 'All of our products' : 'Log in to see products'}
        </h1>
        {this.props.isLoggedIn ? (
          <ProductList />
        ) : (
          <div className="form">
            <input
              name="userInput"
              placeholder="Username"
              onChange={this.handleChange}
            />
            <button>Sign In</button>
          </div>
        )}
      </div>
    )
  }
}
const mapStateToProps = (reduceState) => {
  return reduxState
}
 
export default connect(mapStateToProps, {loginUser})(ProductListContainer)
