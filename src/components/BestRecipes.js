import React, { PropTypes } from 'react'
import _ from 'lodash'

import RecipeItem from './RecipeItem'

class BestRecipes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let chunkNumber = 4;
    let recipes = _.chunk(this.props.recipes, chunkNumber)

    return (
      <section class="best-recipe">
        <div class="container">
          <h2>Resep Terbaik</h2>
          {recipes.map((row, i) => {
            return (
              <div class="row" key={i}>
                {row.map((item, j) => {
                  return (
                    <RecipeItem recipe={item} index={chunkNumber * i + j} key={j} />
                  )
                })}
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

BestRecipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string
  })).isRequired
}

export default BestRecipes;
