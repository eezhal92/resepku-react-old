import React from 'react'

class Staff extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    window.alert('hello')
    e.preventDefault()
    const newPath = '/about/jane-doe'
    this.context.router.push(newPath)
  }

  render () {
    let { nick } = this.props.params
    return (
      <div>
        <hr />
        Hello {nick}
      </div>
    )
  }
}

Staff.contextTypes = {
  router: React.PropTypes.object
}

export default Staff
