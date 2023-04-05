import HeadSection from "./HeadSection/HeadSection";
import housingList from "../../../datas/logements.json";
import HousingCard from "../../components/HousingCard/HousingCard";

function Home() {
    return (
      <div className="body__wrapper wrapper__boxed">
        <HeadSection/>
        <div className="cardlist">
          {housingList.map(house => (
            <HousingCard 
              cover={house.cover}
              key= {"housing" + house.id}
              id={house.id}
              title={house.title}
            />
          ))}
        </div>
      </div>
    );  
  }

export default Home;
