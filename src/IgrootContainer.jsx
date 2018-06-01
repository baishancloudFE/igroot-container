import React, { Component } from 'react'
import { Spin } from 'igroot'
import './IgrootContainer.scss'


export default class IgrootContainer extends Component {
  static displayName = 'IgrootContainer'

  constructor(props) {
    super(props)
  }

  render() {
    const { title, children, loading, empty, error, style, className } = this.props
    let containerClass = 'igroot-container' 
    let content = ''

    if (error) {
      containerClass = 'igroot-container igroot-error-container'
      content = <img src="https://img.alicdn.com/tfs/TB1KJkbRFXXXXbRXVXXXXXXXXXX-216-218.png" width="108"  alt="数据加载错误"/>
    } else if (empty) {
      containerClass = 'igroot-container igroot-empty-container'
      content = <img src="https://img.alicdn.com/tfs/TB1df3oRFXXXXbEXFXXXXXXXXXX-194-220.png" width="97"  alt="数据为空"/>
    } else if (loading) {
      containerClass = "igroot-container igroot-loading-container"
      content = (
        <div className="igroot-container-content">
          <div className="loading-mask"><Spin className="loading-icon"/></div>
          { title && <h4>{title}</h4>}
          { this.props.children }
        </div>
      )
    } else {
      content = (
        <div className="igroot-container-content">
          { title && <h4>{title}</h4>}
          { this.props.children }
        </div>
      )
    }

    return (
      <div className={`${containerClass} ${className || ''}`} style={style}>
        {content}
      </div>
    );
  }
}
