import react from "react";
import { View, Text, Image, Scrollview, TextInput, ScrollView } from "react-native";
import gengarImg from './assets/img/gengar.jpg';

const Pokemon = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 45,
            alignSelf: "center",
            color:"purple",
          }}
        >
          Gengar da Fúria
        </Text>
        <Image
          source={{
            uri: gengarImg,
          }}
          style={{ width: 200, height: 210, alignSelf: "center" }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'purple' ,
          borderWidth: 1,
          padding: 5,
          margin: 15,
          borderRadius: 5,
        }}
        defaultValue="Digite aquiiii!"
      />
    </ScrollView>
  );  
}

  export default Pokemon;
