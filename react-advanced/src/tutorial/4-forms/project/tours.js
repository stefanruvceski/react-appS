import React, { useState, useEffect } from 'react';
import Tour from './tour'


const Tours = ({ tours,removeItem}) => {
    
    return (
        <section>
            {tours.map((tour) => {
                return (
                    <Tour tour={tour} removeTour={removeItem} key={tour.id}/>
                );
            })}
        </section>
    );
}

export default Tours;