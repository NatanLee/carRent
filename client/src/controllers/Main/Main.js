import CarMiniCard from "../../components/CarMiniCard/CarMiniCard";
import MainInfo from "../../components/MainInfo/MainInfo";
import Slider from "../../components/Slider/Slider";
import ThreeFreeCars from "../../components/ThreeFreeCars/ThreeFreeCars";

const Main = (props) => {
    return(
        <>
            <Slider />
            <MainInfo />
            <ThreeFreeCars />        
        </>
    )
};

export default Main;