import React from 'react';
import './Button.css';

export default props => {
    let classes = `button ${props.operation ? 'operation' : ''}`;

    return (
        <button className={classes} onClick={e => props.click(props.value || props.label)}>
            {props.label}
        </button>
    );
}