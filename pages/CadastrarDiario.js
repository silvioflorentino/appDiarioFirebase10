import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import { firestore } from "../firebase"; 
import { collection, addDoc } from "firebase/firestore"; 

export default function CadDiario({navigation}) {
  const [titulo, setTitulo] = useState(null);
  const [texto, setTexto] = useState(null);
  const [data, setData] = useState(null);
  const [local, setLocal] = useState(null);

  async function addDiario() {
    try {
    const docRef = await addDoc(collection(firestore, 'diario'), {
      titulo: titulo,
      texto: texto,
      data: data,
      local: local
    });
    console.log("Cadastrado com ID: ", docRef.id);
  Alert.alert("Cadastro", "Registros cadastrados com sucesso")
navigation.navigate("Home");
} catch (error) {
    console.error("Erro ao cadastrar: ", error);
    Alert.alert("Erro", "Erro ao cadastrar . Por favor, tente novamente.");
  }
  }

  return (
    <View style={estilo.container}>
      <View>
        <Text style={estilo.titulo}> Registre no Seu Diário</Text>
      </View>
      <TextInput autoCapitalize = 'words' style={estilo.input} placeholder="Digite o Título" onChangeText={setTitulo} value={titulo}/>
      <TextInput style={estilo.input} placeholder="Digite o seu lindo dia" onChangeText={setTexto} value={texto}/>
      <TextInput style={estilo.input} placeholder="Digite a data" onChangeText={setData} value={data}/>
      <TextInput style={estilo.input} placeholder="Digite o seu local agora" onChangeText={setLocal} value={local}/>
      <TouchableOpacity
        style={estilo.btnenviar}
        onPress={() => {
          addDiario();
        }}>
        <Text style={estilo.btntxtenviar}> Enviar </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#9ac234',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
    borderRadius: 10,
  },
  btnenviar: {
    marginTop: 20,
  },
  btntxtenviar: {
    fontSize: 25,
  },
  titulo: {
    marginVertical: 40,
    fontSize: 25,
    textAlign: 'center',
  },
});
