import React, { Component } from 'react'
import IgrootContainer from './IgrootContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <IgrootContainer 
          style={{ width: 400}}
          title="标题"
        >
          内容
        </IgrootContainer>
        <IgrootContainer 
          style={{ width: 400}}
          loading={true}
        >
          内容
        </IgrootContainer>
        <IgrootContainer 
          style={{ width: 400}}
          empty={true}
        >
          内容
        </IgrootContainer>
        <IgrootContainer 
          style={{ width: 400}}
          error={true}
        >
          内容
        </IgrootContainer>
      </div>
    )
  }
} 