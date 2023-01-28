import React, {useState} from 'react';

import './PainelGraphic.css';

const PainelGraphic = (props) => {

    const onSelectedOptionChange = (event) => {
        props.onSelectedOptionChange(event.target.value);
    }

    return (
            <div className='painel-graphic'>
                <div className='painel-graphic-control'>
                    <label>Filter by year</label>
                    <select defaultValue={''} onChange={onSelectedOptionChange}>
                        <option value=' '>Select</option>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                        <option value='2020'>2020</option>
                        <option value='2019'>2019</option>
                    </select>
                </div>
            </div>
            );
};

export default PainelGraphic;