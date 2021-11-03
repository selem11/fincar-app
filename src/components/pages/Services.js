import React from 'react';

const Services = ({ location }) => {

    const { state } = location;
    const { nombre, portada, descripcion, fotos } = state;
    
    return (
        <div className="">
            <h1 className='services'>
                { nombre }
            </h1>
            <p className=''>{ descripcion }</p>
            {/* {text} */}
        </div>
    );
};

export default Services;
