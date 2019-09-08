import React from 'react'
import defaultBCG from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'


class SingleRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBCG
        }
        console.log(this.props)
    }
    static contextType = RoomContext


    // componentDidMount(){} 

    render() {
        const { getRooms } = this.context
        const room = getRooms(this.state.slug)
        console.log(room)
        if (!room) {
            return <div className='error'>
                <h3>No such room found</h3>
                <Link to='/rooms' className='btn-primary'>back to rooms</Link>
            </div>
        }
        const { name, description, capacity, price, size, extras, breakfast, pets, images } = room

        const [mainImage, ...defaultImage] = images

        return (
            <>
                <StyledHero img={mainImage || this.state.defaultBCG} hero='roomsHero'>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className='single-room'>
                    <div className='single-room-images'>
                        {defaultImage.map((image, index) => {
                            return <img src={image} index={index} alt={name} />

                        })}
                        </div>
                 </section>
                        <div className='single-room-info'>
                            <article className='desc'>
                                <h3>details</h3>
                                <p>{description}</p>
                            </article>
                            <article className='info'>
                                <h3>info</h3>
                                <h6>price: £{price}</h6>
                                <h6>size: £{size} SQFT </h6>
                                <h6>capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`} </h6>
                                <h6>pets: {pets ? 'pets allowed' : 'pets not allowed'} </h6>
                                <h6>breakfast: {breakfast ? 'breakfast included' : 'breakfast not included'} </h6>
                            </article>
                        </div>
                    
               
                <section className='room-extras'>
                <h6>extras</h6>
                    <ul className='extras'>
                        {extras.map((item, index) => {
                            return <li key={index}>-{item}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}

export default SingleRoom 