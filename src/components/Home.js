import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { getRecipes } from './../reducers/recipes'

import Event from './Event'
import BestRecipes from './BestRecipes'
import Footer from './Footer'
import FeaturedRecipe from './FeaturedRecipe'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let title = 'Sate Kaili, Narasa!'
    let desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."

    return (
      <div>
        <FeaturedRecipe title={title} description={desc} />
        <BestRecipes recipes={this.props.recipes} />
        <Event />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recipes: getRecipes(state)
  }
}

export default connect(mapStateToProps)(Home)
