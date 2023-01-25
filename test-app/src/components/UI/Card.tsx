import { Children } from 'react';
import './Card.css'

const Card = (props) => {

    const aditionalClass = 'card ' + props.aditionalClass 

    return <div className={aditionalClass}>{props.children}</div>


}

export default Card;