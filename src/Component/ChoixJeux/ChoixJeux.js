import './ChoixJeux.css'
import React from 'react';

export default function ChoixJeux(props) {
    return <div onClick={() => {
        setTimeout(() => {
            props.functionX()
        }, 1000);
        props.functionRandom()
        props.lancer()
	}
	} 
    className={props.choix}>
        {props.img}
    </div>;
}
