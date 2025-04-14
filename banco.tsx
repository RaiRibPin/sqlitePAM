import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
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
        return db;
    }
    async function criarTabela () {
        try{
            let db = await criaDatabase();
            await db.execAsync(`PRAGMA journal_mode = WAL;
                CREATE TABLE IF NOT EXISTS tb_usuario (id INTEGER PRIMARY KEY NOT NULL, nome TEXT NOT NULL);`);
                console.log('Tabela criada');
        } catch(error) {
            console.log('Erro ao criar tabela', error);
        }
    }
    async function inserirDados () {
        try{
            let db = await criaDatabase();
            await db.execAsync(`PRAGMA journal_mode = WAL;
                CREATE TABLE IF NOT EXISTS tb_usuario (id INTEGER PRIMARY KEY NOT NULL, nome TEXT NOT NULL);`);
                console.log('Tabela criada');
        } catch(error) {
            console.log('Erro ao criar tabela', error);
        }
    }
    return(
        <View>
            <View style={style.button}>
                <Button onPress={criaDatabase} title="Criar Banco" />
            </View>
            <View style={style.button}>
                <Button onPress={criarTabela} title="Criar tabela"/>
            </View>
            <View style={style.button}>
                <Button onPress={inserirDados} title="Inserir dados"/>
            </View>
        </View>
        
    )
}

const style = StyleSheet.create({
    button:{
        marginBottom: 20,
    }
})

export default Banco;