import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { firestore } from "../firebase";
import { collection, doc, updateDoc } from "firebase/firestore";

export default function AlterarDiario({ navigation, route }) {

    const id = route.params.id;


    const [titulo, setTitulo] = useState(route.params.titulo);
    const [texto, setTexto] = useState(route.params.texto);
    const [data, setData] = useState(route.params.data);
    const [local, setLocal] = useState(route.params.local);

    async function alterarDiario(id, titulo, texto, data, local) {
        try {
            await updateDoc(doc(collection(firestore, "diario"), id), {
                titulo: titulo,
                texto: texto,
                data: data,
                local: local
            })
            Alert.alert("Aviso", "Diário Alterado com sucesso.")
            navigation.navigate("Home")
        }
        catch (error) {
            console.error("Erro ao alterar: ", error);
            Alert.alert("Erro", "Erro ao alterar. Por favor, tente novamente.");
        }
    }
        return (
            <View style={estilo.container}>
                <View>
                    <Text style={estilo.titulo}> Alterar dados do Diario </Text>
                </View>
                <View>
                    <TextInput autoCapitalize='words' style={estilo.input} placeholder="Digite o Título" onChangeText={setTitulo} value={titulo} />
                    <TextInput style={estilo.input} placeholder="Digite o seu dia" onChangeText={setTexto} value={texto} />
                    <TextInput style={estilo.input} placeholder="Digite a data" onChangeText={setData} value={data} />
                    <TextInput style={estilo.input} placeholder="Digite o local" onChangeText={setLocal} value={local} />
                    <TouchableOpacity
                        style={estilo.btnenviar}
                        onPress={() => {
                            alterarDiario(id, titulo, texto, data, local);
                        }}>
                        <Text style={estilo.btntxtenviar}> Alterar </Text>
                    </TouchableOpacity>
                </View>
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