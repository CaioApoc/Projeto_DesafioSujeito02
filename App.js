import { StyleSheet, Text, View, TextInput } from "react-native";
import Slider, { slider } from "@react-native-community/slider";
import { Picker, picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(null);
  const [sexo, setSexo] = useState(0);
  const [limite, setLimite] = useState(250);

  function pegaNome(texto) {
    if (texto.length > 0) {
      setNome("Bem vindo " + texto);
    } else {
      setNome("");
    }
  }

  function pegaIdade(texto) {
    if (texto.length > 0) {
      setIdade(texto + " Anos");
    } else {
      setIdade("");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.texto1}>Banco do Sujeito</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={(texto) => pegaNome(texto)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={(texto) => pegaIdade(texto)}
      />
      <Text style={styles.textoresp}>{nome}</Text>
      <Text style={styles.textoresp}>{idade}</Text>

      <Text style={styles.textoSexo}>Selecione seu sexo:</Text>
      <Picker
        selectedValue={sexo}
        onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
      >
        <Picker.Item key={0} value={0} label="Escolha uma opção" />
        <Picker.Item key={1} value={1} label="Masculino" />
        <Picker.Item key={2} value={2} label="Feminino" />
      </Picker>

      <Text style={styles.textoSexo}>Selecione o limite desejado:</Text>
      <Slider
        minimumValue={250}
        maximumValue={2000}
        value={limite}
        onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
      />
      <Text style={styles.textoLimite}>
        Limite escolhido: R${limite.toFixed(0)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  texto1: {
    // alignItems: "center",
    marginTop: 30,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
  },
  container2: {
    alignItems: "center",
  },
  textoresp: {
    textAlign: "center",
    fontSize: 25,
  },
  textoSexo: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
  },
  textoSexo2: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 15,
  },
  textoLimite: {
    fontSize: 15,
    marginLeft: 5,
    fontWeight: "400",
  },
});
