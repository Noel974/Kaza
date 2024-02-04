import datas from "../../assets/data/data.json";
import { Link } from 'react-router-dom';

export default function Card() {
    return (
        <main className='home_card'>
            {datas.map(data => {
                console.log("Data ID:", data.id);
                return (
                    <Link to={`/Fichelogement/${data.id}`} className="home_gallery" key={data.id}>
                        <img src={data.cover} alt={data.title} />
                        <h3>{data.title}</h3>
                    </Link>
                )
            })}
        </main>
    )
}