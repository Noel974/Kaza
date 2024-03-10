import datas from "../../assets/data/data.json";
import CardItem from "./Carditem";

export default function Card() {
    return (
        <main className='home_card'>
            {datas.map(data => {
                console.log("Data ID:", data.id);
                return <CardItem key={data.id} id={data.id} cover={data.cover} title={data.title} />;
            })}
        </main>
    )
}