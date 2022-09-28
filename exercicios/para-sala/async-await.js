/**
 * palavra reservada async -> indica uma funnção assincroana
 * palavra reservada await -> indica que a pilha precisa esperar
 * palavra reservada try -> captura o erro
 * palavra catch -> que recebe o erro
 */

const {achaUsuaria,achaEndereço} = require ("./promises.Valéria")

// async function imprimirDados(nome, cep) {}

const imprirDados = async (nome, cep) =>{ // é uma assincrona
    const usuaria = await acharUsuaria(nome) // espera achar a usuaria
   const endereço = await acharendereço(new Promise((resolve, reject) => {

   const console.log(usuaria)

    } 

imprimirDados("Valéria", "12345-678")