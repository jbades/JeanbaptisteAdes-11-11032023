import HeadSection from "./HeadSection/HeadSection";
// import CardList from "../../components/CardList/CardList";
import housing from "../../../datas/logements.json";
import HousingCard from "../../components/HousingCard/HousingCard";

function Home() {
    return (
      <div className="wrapper__boxed">
        <HeadSection/>
        {/* <CardList key={housing}/> */}
        <div className="cardlist">
          {housing.map(house => (
            <HousingCard 
              key={house.title}
              cover={house.cover}
              pictures={house.pictures}
              title={house.title}
            />
          ))}
        </div>
      </div>
    );  
  }

export default Home;
