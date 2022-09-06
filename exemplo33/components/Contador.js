import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

export default class Contador extends React.Component {
  constructor() {
    super();
    this.state = {
        // criar um estado, por exemplo a variável contador, onde ela é iniciada com o
            // numero 0.
      contador: 0,
    };
  }
  Decrementar() {
    this.setState({
      contador: this.state.contador - 1,
       // uso o estado contador criado anteriormente
    });
  }
  // Setar um estado não é criar uma variavel, mas sim um item que pode ser
    // modificado
  Incrementar() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  render() {
    return (
      <View>
        <View style={styles.texto}>
          <Text>{this.state.contador}</Text>
        </View>
        <View style={styles.botoes}>
          <Button
            style={styles.botao1}
            title="+"
            onPress={this.Incrementar.bind(this)}
          />
          <Button
            style={styles.botao2}
            onPress={this.Decrementar.bind(this)}
            title="-"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  botoes: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    top: 300,
    height: 45,
  },
  texto: {
    alignItems: 'center',
    top: 200,
  },
});
