import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const { menuContent, Company, Caroulsel } = require('../data/content')

export default function Layout(props) {
    return (
        <>
            <main>
                <Nav menuContent={menuContent}
                    Company={Company} />
                {props.children}
                <Footer/>
            </main>
        </>
    )
}
