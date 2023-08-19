import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Bars from '../Image/bars.png';
import Back from '../Image/back.png';
import tslogo from '../Image/ts-logo.png';

const AppBar = ({state, navigation}) => {
  return (
    <View style={style.appBar}>
      <View style={{position: 'absolute', left: 0, top: 0, height: '100%'}}>
        {state == 'home' ? <ButtonHome /> : <ButtonBack />}
      </View>
      <View style={style.img}>
        <Image source={tslogo} style={style.imgOpt} />
      </View>
    </View>
  );
};
const ButtonHome = () => {
  return (
    <View style={style.buttonHome}>
      <TouchableOpacity style={style.innerHomeButton}>
        <Image source={Bars} style={{width: '50%', height: '50%'}} />
      </TouchableOpacity>
    </View>
  );
};
const ButtonBack = ({navigation}) => {
  return (
    <View style={style.buttonHome}>
      <TouchableOpacity
        style={style.innerHomeButton}
        onPress={() => navigation.goBack()}>
        <Image source={Back} style={{width: '50%', height: '50%'}} />
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  appBar: {
    width: '100%',
    height: 60,
    backgroundColor: 'red',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonHome: {
    width: 60,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerHomeButton: {
    width: '80%',
    height: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: '100%',
    width: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgOpt: {
    height: '50%',
    width: '50%',
    aspectRatio: '14/4'
},
});
export default AppBar;
