import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

const Error = ( props ) => {
    return ( 
        <Hero>
            <Banner className='banner' title='404' subtitle='page not found'>
                <Link to='/' className='btn-primary'>Return Home</Link>
            </Banner>
        </Hero>
     );
}
 
export default Error;