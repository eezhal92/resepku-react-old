import React from 'react'
import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'
import Home from './components/Home'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import { fetchRecipes } from './actions'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {
    return (
      <div>
        <Navigation />
        { this.props.children || <Home /> }
        <Footer />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRecipes: () => {
      return dispatch(fetchRecipes())
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
