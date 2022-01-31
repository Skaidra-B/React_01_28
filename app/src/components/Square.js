import React from 'react';

const Square = ({fillColor, getColor, index, square}) => {


    return (
        <div>
            <div className="box" style={{backgroundColor: getColor}} onClick={fillColor}/>
        </div>
    );
};

export default Square;