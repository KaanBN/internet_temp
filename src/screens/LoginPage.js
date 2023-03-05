import React from 'react';
import {View, Text, TextInput} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/AntDesign";
import CheckBox from "@react-native-community/checkbox";
const LoginPage = () => {
  const [selectedItem,setSelectedItem] = React.useState('TC Kimlik No');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
  return (
    <View style={{
      flex:1,
      backgroundColor:'#fafafa',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Text style={{
        fontSize: 16,
        color:'#1c1c1c'
      }}>Uygulamaya giriş için bir seçim yapınız</Text>
      <SelectDropdown
        data={[
          'TC Kimlik No',
          'Müşteri No',
          'E-Posta Adresi'
        ]}
        defaultValue={'TC Kimlik No'}
        onSelect={
          (selectedItem, index) => {
            console.log(selectedItem, index);
            setSelectedItem(selectedItem);
          }
        }
        renderDropdownIcon={isOpened => {
          return <Icon name={isOpened ? 'caret-up' : 'caret-down'} style={{
            marginRight:'5%',
          }} size={18} color={'#fff'} />;
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={{
          backgroundColor: '#3f73e1',
        }}
        rowTextStyle={{
          fontSize: 16,
          color: '#fff',
          textAlign: 'left',
          width: '100%',
          paddingLeft: '5%',
          paddingRight: '5%',
        }}
        buttonTextStyle={{
          fontSize: 16,
          color: '#fff',
          textAlign: 'left',
          width: '100%',
          paddingLeft: '5%',
          paddingRight: '5%',
        }}
        buttonStyle={{
          width: '80%',
          backgroundColor: '#3f73e1',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#e0e0e0',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

      <View style={{
        width: '80%',
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 10,
        marginTop: '5%',
      }}>
        <Icon3 name={
          selectedItem === 'TC Kimlik No' ? 'idcard' :
            selectedItem === 'Müşteri No' ? 'user' :
              selectedItem === 'E-Posta Adresi' ? 'mail' : 'idcard'
        } style={{
          padding: 10
        }} size={18} color={'#787a7c'} />
        <TextInput
          style={{
            flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            backgroundColor: '#fff',
            color: '#424242',
          }}
          placeholder={selectedItem}
          placeholderTextColor={'#787a7c'}
        />
      </View>

      <View style={{
        width: '80%',
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 10,
        marginTop: '5%',
      }}>
        <Icon3 name={'unlock'} style={{
          padding: 10
        }} size={18} color={'#787a7c'} />
        <TextInput
          style={{
            flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            backgroundColor: '#fff',
            color: '#424242',
          }}
          placeholder={'Şifre'}
          placeholderTextColor={'#787a7c'}
        />
      </View>

      <View style={{
        width: '80%',
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          tintColors={{true: '#3f73e1', false: 'black'}}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={{
          fontSize: 16,
          color:'#212121'
        }}>Beni Hatırla</Text>
      </View>

      <View style={{
        width: '80%',
        height: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3f73e1',
        borderRadius: 1000,
        marginTop: '5%',
      }}>
        <Text style={{
          fontSize: 16,
          fontWeight: 'bold',
          color:'#fff'
        }}>Giriş</Text>
      </View>

      <View style={{
        width: '80%',
        height: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 1000,
        borderColor: '#3f73e1',
        marginTop: '5%',
      }}>
        <Text style={{
          fontSize: 16,
          color:'#3f73e1'
        }}>Şifre Oluştur</Text>
      </View>

    </View>
  );
};

export default LoginPage;
