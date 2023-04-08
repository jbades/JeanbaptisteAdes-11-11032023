import HeadSection from "../../components/HeadSection/HeadSection";
import housingList from "../../../datas/logements.json";
import HousingCard from "../../components/HousingCard/HousingCard";
import HeadPicture from "../../../assets/kasa_home_headsection.jpg"

function Home() {
  return (
    <div>
      <HeadSection picturePath={HeadPicture} pictureMessage="Chez vous, partout et ailleurs"/>
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
