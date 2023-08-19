import { View } from "react-native";
import {useState} from 'react';
import AppBar from "../Components/AppBar";
import SideBar from "../Components/SideBar";

const Home = () => {
    const [shown, setShown] = useState(false);
    return(
        <View style={{flex: 1, position: 'relative'}}>
            <AppBar state={'home'}/>
            <SideBar/>
        </View>
    );
}
export default Home