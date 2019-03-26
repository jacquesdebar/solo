import React from 'react'

import { Link as RouterLink } from 'react-router-dom'

const styles = {
  link: {
    // color: '#543713',
    color: 'white',
    textDecoration: 'none'
  },
  hovering: {
    // backgroundColor: '#543713',
    backgroundColor: 'white',
    // color: '#FFFEF4'
    color: '#ffcce6',
  }
}

class Link extends React.Component {
  state = {
    hovering: false
  }
  render() {
    const { hovering } = this.state
    const { to, hover, children } = this.props
    return (
      <RouterLink
        onMouseEnter={() => this.setState({ hovering: true })}
        onMouseLeave={() => this.setState({ hovering: false })}
        to={to}
        style={hover && hovering ? {...styles.link , ...styles.hovering} :  styles.link}
        className=""
      >{children}</RouterLink>
    )
  }
}

export default Link
