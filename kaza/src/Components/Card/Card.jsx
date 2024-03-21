import React from 'react';
import datas from "../../assets/data/data.json";
import CardItem from './CardItem'; 

export default function Card() {
    return (
        <main className='home_card'>
            {datas.map(data => (
                <CardItem
                    key={data.id}
                    id={data.id}
                    cover={data.cover}
                    title={data.title}
                />
            ))}
        </main>
    )
}