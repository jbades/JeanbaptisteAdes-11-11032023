import HeadSection from "./HeadSection/HeadSection";
import CardList from "../../components/CardList/CardList";
import housing from "../../../datas/logements.json";

function Home() {
    return (
      <div>
        <HeadSection/>
        <CardList key={housing}/>
      </div>
    );  
  }

export default Home;
