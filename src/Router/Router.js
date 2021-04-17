import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../components/body/Main";
import News from "../components/body/News";
import Services from "../components/body/Services";
import Rooms from "../components/body/Rooms";
import Gallery from "../components/body/Gallery";
import Dinning from "../components/body/Dinning";
import Contact from "../components/body/Contact";
import BookNow from "../components/body/BookNow";

const Router =()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/rooms" component={Rooms}/>
                <Route exact path="/gallery" component={Gallery}/>
                <Route exact path="/dinning" component={Dinning}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/booknow" component={BookNow}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;