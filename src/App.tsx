import React, { FC } from 'react'

import { Content } from './components/layout/Content'
import { Header } from './components/layout/Header'

export const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  )
}
