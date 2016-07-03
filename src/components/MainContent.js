import React from 'react'

class MainContent extends React.Component {
  render() {
    let { recipe } = this.props
    return (
      <div class="main">
        <h3>{recipe.title}</h3>
        <p class="summary">{recipe.sub_title}</p>
        {recipe.body}
      </div>
    )
  }
}

export default MainContent;
