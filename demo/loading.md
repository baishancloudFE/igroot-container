---
order: 0
title:
  zh-CN: 加载
  en-US: Loading
---

## zh-CN

加载

## en-US

set loading

````jsx
import React, { Component } from 'react'
import UpgradeSelect from 'igroot-container/src/index'


class App extends Component {
  render() {
    return (
      <IgrootContainer style={{ width: 400}} loading={true}>
        内容
      </IgrootContainer>
    )
  }
} 

ReactDOM.render(
  <App />
, mountNode);

