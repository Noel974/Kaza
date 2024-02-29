import React from 'react';
import home from "../assets/media/home.png";
import Banner from '../Components/Banner/Banner';
import Card from '../Components/Card/Card'

function Home() {
    return (
        <div className='home'>
            <Banner backgroundImage={home}/>
                <p>Chez vous, partout et ailleurs</p>
                <Card />
        </div>
    )

};
export default Home;