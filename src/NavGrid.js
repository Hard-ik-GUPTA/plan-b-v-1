import React from 'react';
import './App.css'

const NavGrid = ({ data, setQuestionState }) => {

    const changeQuestionState = (param) => {
        setQuestionState(param)

    }

    return (
        <>
            <div className='navGridContainer'>
                {data.map((value) => {
                    if(value.selected!=='')
                    return (
                        <div className='navGridItem ' key={value.id}  style={{backgroundColor:'green'}} onClick={() => changeQuestionState(value)}>{value.id} </div>
                    )
                    else
                    return (
                        <div className='navGridItem ' key={value.id} onClick={() => changeQuestionState(value)}>{value.id} </div>
                    )
                })}
            </div>

        </>
    );
};

export default NavGrid;
