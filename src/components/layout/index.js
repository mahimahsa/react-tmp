import React from 'react'
import Header from 'src/components/layout/header'
import RightMenu from 'src/components/layout/rightMenu'


function Layout({ children }) {

  return (
    <div >
        <RightMenu />
        <Header />
        <div >{children}</div>
    </div>
  )
}

export default Layout
