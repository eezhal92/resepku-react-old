import React, { PropTypes } from 'react'

class SecondaryContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loved: false
    }
  }

  love() {
    this.props.onLove()
  }

  render() {
    let { recipe } = this.props
    let toggleClass = `btn ${recipe.loved ? 'loved' : ''}`
    return (
      <div class="secondary">
        <div class="rating">
          <h3>Suka</h3>
          <span class="number">{recipe.love}</span>
          <button class={toggleClass} onClick={this.love.bind(this)}>Love</button>
        </div>
      </div>
    )
  }
}

SecondaryContent.propTypes = {
  recipe: PropTypes.object,
  onLove: PropTypes.func
}

export default SecondaryContent
