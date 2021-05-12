import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../components/body/Main";
import News from "../components/body/News";
import Services from "../components/body/Services";
import Rooms from "../components/body/RoomPage/Rooms";
import Gallery from "../components/body/Gallery";
import WinterEnter from "../components/body/WinterEnter";
import SummerEnter from "../components/body/SummerEnter";
import PriceList from "../components/body/PriceList";
import Restaurant from "../components/body/services/restaurant";
import Banya from "../components/body/services/banya";
import Sayna from "../components/body/services/sayna";
import Bassein from "../components/body/services/bassein";
import Conf from "../components/body/services/confe";
import BookNow from "../components/body/BookNow";
import RoomFull from "../components/body/RoomPage/RoomFull";

const Router =()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/rooms" component={Rooms}/>
                <Route exact path="/gallery" component={Gallery}/>
                <Route exact path="/winter" component={WinterEnter}/>
                <Route exact path="/summer" component={SummerEnter}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/price" component={PriceList}/>
                <Route exact path="/restaurant" component={Restaurant}/>
                <Route exact path="/banya" component={Banya}/>
                <Route exact path="/sayna" component={Sayna}/>
                <Route exact path="/bassein" component={Bassein}/>
                <Route exact path="/сonf" component={Conf}/>
                <Route exact path="/booknow" component={BookNow}/>
                <Route exact path="/roomShow" component={RoomFull}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;