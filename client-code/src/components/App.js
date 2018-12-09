import React from 'react'
import Header from 'components/Header';

export default function App( {children} ) {
  return (
    <div>
      <Header />
      { children }
    </div>
  )
}
