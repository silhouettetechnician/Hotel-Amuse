import React from 'react'
import spinner from '../images/gif/loading-arrow.gif'
const Loading = ( props ) => {
    return ( 
        <div className='loading'>
             <h4>Rooms data loading... </h4>
             <img src={spinner} alt='Loading' />
        </div>
     );
}
 
export default Loading;