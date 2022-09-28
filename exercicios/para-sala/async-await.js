/**
<<<<<<< HEAD
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
=======
 * palavra reservada async -> indica uma funcao assincrona
 * palavra reserva await -> indica que a pilha precisa esperar
 * palvra reservada try -> captura o erro
 * palvra catch -> que recebe o erro
 */

const { acharUsuaria, acharEndereco } = require("./promises")

// async function imprimirDados(nome, cep) {}

const imprimirDados = async (nome, cep) => { // é uma funcao assincrona
   try {
     const endereco = await acharEndereco(cep)
     const usuaria = await acharUsuaria(nome) // espera achar a usuaria
      console.log(usuaria, endereco)
   } catch (err) {
    console.log(err)
   }
  //  const usuaria = await acharUsuaria(nome) // espera achar a usuaria
  //  const endereco = await acharEndereco(cep)
  //  console.log(usuaria, endereco)
}

imprimirDados("Jani", "12345-678") // 2
imprimirDados("Bea", null) // 3
imprimirDados(null, "12345-789") // 1
>>>>>>> 2bfd07ac02db92f658821301e87b5fabcbb51d43
