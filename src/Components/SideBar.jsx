import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState, useEffect} from 'react';
import button from '../Data/SidebarButtons.json';

const logo = {}

const SideBar = ({navigation, position}) => {
  const [loadButton, setLoadButton] = useState(false);
  useEffect(() => {
    setLoadButton(true);
    setTimeout(() => {
      setLoadButton(false);
    }, 1500);
  }, []);
  return (
    <View style={style.sideApp}>
      <View style={style.headers}>
        <View style={style.headerSection}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>
            MUHAMMAD RAFFI ABDURROHMAN
          </Text>
          <View style={{display: 'flex', gap: 5}}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{color: 'white', fontSize: 10}}>NISN: </Text>
              <Text style={{color: 'white', fontSize: 10}}>0071307923</Text>
            </View>
            <Text style={{color: 'white', fontSize: 10}}>
              SMK TELKOM BANDUNG
            </Text>
          </View>
        </View>
        <View style={style.headersButtonCase}>
          <TouchableOpacity style={style.headersButton}>
            <Text style={{color: 'white'}}>2022/2023 - 2</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.listButtons}>
        {button.map(e => (
          <TouchableOpacity style={style.button} onPress={() => navigation.navigate(`${e.navigate}`)}>
            {/* {loadButton ? (
              <Text style={{color: 'white'}}>Memuat...</Text>              
            ) : (
              <Text style={{color: 'white'}}>{e.title}</Text>
            )} */}
            <View style={{height: '100%'}}></View>
            <View style={style.buttonText}>
              <Text style={{color: 'white'}}>{e.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  sideApp: {
    position: 'absolute',
    width: '65%',
    height: '100%',
    backgroundColor: 'red',
    zIndex: 10,
    elevation: 10,
  },
  headers: {
    width: '100%',
    height: 150,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  headerSection: {
    width: '100%',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  headersButtonCase: {
    width: '100%',
    height: 50,
    padding: 10,
  },
  headersButton: {
    width: '100%',
    height: '100%',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  listButtons: {
    width: '100%',
    height: 350,
    backgroundColor: 'black',
    display: 'flex',
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
});
export default SideBar;
