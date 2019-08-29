import React from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    icon: <FaCocktail />,
                    title: 'free cocktails',
                    info: 'Come to the beach where you will get a free cocktail from 5pm to 6pm. Enjoy our happy hour from 6pm-7pm'
                },
                {
                    icon: <FaHiking />,
                    title: 'endless hiking',
                    info: 'Come to the beach where you will get a free cocktail from 5pm to 6pm. Enjoy our happy hour from 6pm-7pm'
                }, 
                {
                    icon: <FaShuttleVan />,
                    title: 'free shuttle',
                    info: 'Come to the beach where you will get a free cocktail from 5pm to 6pm. Enjoy our happy hour from 6pm-7pm'
                },
                {
                    icon: <FaBeer />,
                    title: 'best beer around',
                    info: 'Come to the beach where you will get a free cocktail from 5pm to 6pm. Enjoy our happy hour from 6pm-7pm'
                }                                  
            ]
        }
    } 

    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className='services-center'>
                {this.state.services.map((item, index) => (
                    <article key={index} className='service'>
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                ))}
                </div>
            </section>
        );
    }
}

export default Services;