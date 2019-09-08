import styled from 'styled-components'
import defaultImage from '../images/room-1.jpeg'


const SimpleHero = styled.header`
min-height: 60vh ;
background: url(${props => props.img ? props.img: defaultImage}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`

export default SimpleHero