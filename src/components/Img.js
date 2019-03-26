import React from 'react'

const url = 'https://raw.githubusercontent.com/jacquesdebar/solo-imgs/master'

export default ({ src, style, ...props }) => (
  <img style={{ maxWidth: '100%', ...style }} src={`${url}${src}`} {...props} />
)
