import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const { menuContent, Company,socialItems,FooterItems} = require('../data/content')

export default  function Layout(props) {
    return (
        <>
            <main>
                <Nav menuContent={menuContent}
                    Company={Company} />
                {props.children}
                <Footer socialItems={socialItems} FooterItems={FooterItems} Company={Company}/>
            </main>
        </>
    )
} 


