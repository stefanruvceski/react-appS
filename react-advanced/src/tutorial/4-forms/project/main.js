import React, { useState, useEffect } from 'react';
import Tours from './tours';
const url = "https://course-api.com/react-tours-project";
const Main = () => {

    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchTours = async () => {
        fetch(url)
            .then((response) => {
                if (!response.status.ok) {
                    return response.json();
                }
                else {
                    let err = new Error(response.statusText);
                    err.response = response;
                    throw err;
                }
            })
            .then((response) => { setTours(response); setLoading(false); })
            .catch((error) => console.log(error));
    }
    const removeItem = (id) => {
        const filteredTours = tours.filter((tour) => tour.id !== id);
        setTours(filteredTours);
    }
    useEffect(() => {
        fetchTours();
    },[]);
    if (loading) {
        return (
            <div className="container">
                <h1> Loading . . . </h1>
            </div>
        );
    }
    else if(tours.length ===0) {
        return (
            <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
        );
    }
    else {
        return (
            <main className="container">
                <h1>our tours</h1>
                <Tours tours={tours} removeItem={removeItem} />
            </main>
        );
    }
}

export default Main
