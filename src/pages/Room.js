import React from 'react'
import { Link } from 'react-router-dom'

import Hero from '../components/Hero'
import Banner from '../components/Banner'


const Room = (props) => {
    return ( 
        <Hero hero='roomsHero'>
        <Banner title='our rooms'>
        <Link className='btn-primary' to='/'>return home</Link>
        </Banner>
        </Hero>
     );
}
 
export default Room;