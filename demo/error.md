---
order: 2
title:
  zh-CN: 数据异常
  en-US: Error
---

## zh-CN

数据异常

## en-US

set error

````jsx
import React, { Component } from 'react'
import IgrootContainer from 'igroot-container/src/index'
// 演示使用  正式环境请使用
// import IgrootContainer from 'igroot-container'

class App extends Component {
  render() {
    return (
      <IgrootContainer error={true}>
        内容
      </IgrootContainer>
    )
  }
} 

ReactDOM.render(
  <App />
, mountNode);

