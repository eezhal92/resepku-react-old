import React from 'react'
import { connect } from 'react-redux'
import { loveRecipe, unloveRecipe } from './../actions'
import { Link } from 'react-router'

class RecipeItem extends React.Component {
  constructor(props) {
    super(props)
  }

  toggleLove(e) {
    e.preventDefault()

    let { index, recipe } = this.props
    let toggle = recipe.loved ? false : true
    let action = toggle ? loveRecipe(index) : unloveRecipe(index)

    this.props.dispatch(action)
  }

  render() {
    let recipe = this.props.recipe
    let author = `${recipe.user.name} @ ${recipe.created_at}`
    let toggleClass = recipe.loved ? 'loved' : ''

    return (
      <div class="item">
        <img src="/img/recipe-item.jpg" />
        <div class="meta">
          <div class="details">
            <h3><Link to={`/recipes/${recipe.slug}`}>{recipe.title}</Link></h3>
            <span class="author">{author}</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. </p>
          </div>
          <div class="rating">
            <a class={toggleClass} onClick={this.toggleLove.bind(this)}>Suka</a>
            <span class="number">{recipe.love}</span>
          </div>
        </div>
      </div>
    )
  }
}

RecipeItem.propTypes = {
  recipe: React.PropTypes.object,
  index: React.PropTypes.number
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(RecipeItem)
