import React from 'react'

class About extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section class="content">
        <div class="container">
          <div class="main">
            <h2>Tentang</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur dicta voluptates, iste ducimus quibusdam voluptatem doloribus, quas aperiam aliquid explicabo amet facilis alias consequuntur accusamus odio illum itaque ut ipsum.</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur dicta voluptates, iste ducimus quibusdam voluptatem doloribus, quas aperiam aliquid explicabo amet facilis alias consequuntur accusamus odio illum itaque ut ipsum.</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur dicta voluptates, iste ducimus quibusdam voluptatem doloribus, quas aperiam aliquid explicabo amet facilis alias consequuntur accusamus odio illum itaque ut ipsum.</p>
            { this.props.children }
          </div>
        </div>
      </section>
    )
  }
}

export default About
