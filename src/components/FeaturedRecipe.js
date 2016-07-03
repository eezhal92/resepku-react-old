import React from 'react'

function FeaturedRecipe (props) {
  return (
    <div class="banner top-banner">
      <div class="overlay"></div>
      <div class="container container-absolute">
        <div class="description">
          <h2>{props.title}</h2>
          {props.description}
        </div>
      </div>
    </div>
  )
}

FeaturedRecipe.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string
}

export default FeaturedRecipe
