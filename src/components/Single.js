import React from 'react'
import { connect } from 'react-redux'
import MainContent from './MainContent'
import SecondaryContent from './SecondaryContent'
import { loveRecipe, unloveRecipe } from './../actions'

class Single extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOnLove = () => {
    let { slug } = this.props.params
    let index = this.props.recipes.findIndex(r => r.slug == slug)
    let recipe = this.props.recipes[index]
    let toggle = recipe.loved ? false : true
    let action = toggle ? loveRecipe(index) : unloveRecipe(index)

    this.props.dispatch(action)
  }


  render() {
    let { slug } = this.props.params
    let index = this.props.recipes.findIndex(recipe => recipe.slug == slug)

    let recipe = this.props.recipes[index]

    return (
      <div>
        <section class="banner recipe-banner" style={{background: 'url(/img/lemper.jpg)'}}>
          <div class="overlay"></div>
          <div class="container container-absolute">
            <div class="description description-center">
              <h2>{recipe ? recipe.title : ''}</h2>
            </div>
          </div>
        </section>
        <section class="content">
          <div class="container">
            {recipe ? <MainContent index={index} recipe={recipe}/> : ''}
            {recipe ? <SecondaryContent recipe={recipe} onLove={this.handleOnLove} />: ''}
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes.items
  }
}

export default connect(mapStateToProps)(Single);
