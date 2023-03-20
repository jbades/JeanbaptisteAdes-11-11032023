import HeadSection from "./HeadSection/HeadSection";
import CardList from "../../components/CardList/CardList";
import housing from "../../../datas/logements.json";

function Home() {
    return (
      <div>
        <HeadSection/>
        {housing.map(house => (
          <CardList key={house.id}/>
        ))}
      </div>
    );  
  }

export default Home;
