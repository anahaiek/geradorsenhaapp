
import {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'
import Slider from '@react-native-community/slider'
import {ModalPassword} from "../../components/modal"

let charset ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@"
export function Home(){
  const [size, setSize] = useState(10) /*muda o valor do estado sem mudar*/
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  function generatePassword(){
    
    let password = "";
    for(let i=0, n = charset.length; i < size; i++){
       password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password);
    setModalVisible(true);
  }
  return(
    <View style={styles.container}>
      <Text style={styles.gerasenha}>Gerador de senhas</Text>
      <Image
      source={require("../../assets/logoz.png")}
      style={styles.logo}
      />

      <Text style={styles.title}>{size} caracteres</Text>
      <View style={styles.area}>
        <Slider
        style={{height:50}}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor="#C1E2A4"
        minimumTrackTintColor="#5CB338"
        thumbTintColor="#F7C566"
        value={size}
        onValueChange={(value)=>setSize(parseInt(value.toFixed(0), 10))}  // Garantindo que o valor seja um número}
         />
      </View>

      <TouchableOpacity style={styles.button} onPress ={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
      <Modal visible = {modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>

      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#FBFBFB",
    justifyContent: 'center',
    alignItems:'center'
  },
  logo:{
    marginBottom:60
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor:"#FFF",
    borderRadius:8,
    padding: 6,
  },
  button:{
    backgroundColor: "#5CB338",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent:"center",
    borderRadius:8,
    marginTop:18,
  },
  buttonText:{
    color:"#FFF",
    fontSize: 20,
    fontWeight: 'bold',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  gerasenha:{
    color:"#000",
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    fontWeight: 'bold',
  }
})