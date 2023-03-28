import HeadSection from "./HeadSection/HeadSection";
import housingList from "../../../datas/logements.json";
import HousingCard from "../../components/HousingCard/HousingCard";

function Home() {
    return (
      <div className="wrapper__boxed">
        <HeadSection/>
        <div className="cardlist">
          {housingList.map(house => (
            <HousingCard 
              cover={house.cover}
              id={house.id}
              title={house.title}
            />
          ))}
        </div>
      </div>
    );  
  }

export default Home;
