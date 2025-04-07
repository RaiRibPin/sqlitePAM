import React from 'react';
import { Button, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

// componentes

const Banco = () =>{
    async function criaDatabase () {
        const db = await SQLite.openDatabaseAsync('PAM2');
        if(db){
            console.log('Banco criado');
        }else{
            console.log('Erro');
        }
    }
    return(
        <View>
            <Button onPress={criaDatabase} title="Create Banco" />
        </View>
    )
}

export default Banco;