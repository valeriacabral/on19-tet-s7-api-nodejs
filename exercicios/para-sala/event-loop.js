<<<<<<< HEAD
console.log("1 micro task") //callcastack
console.log("Bom dia meninas,eu estou feliz")
console.log("fim da micro task")
=======
setTimeout(() => {
  //... carregando dados do banco ou servidor
  console.log("primeira funcao assincrona")
}, 1000)

function comprimentar(callback) {
  console.log("micro-task")
  // banco acharia o email dela
  callback("bea")
}


comprimentar((nome) => console.log("Bom dia", nome))

console.log("1. micro task") // callcastack
console.log("Bom dia meninas, eu to com sono")
console.log("fim da micro task")

>>>>>>> 2bfd07ac02db92f658821301e87b5fabcbb51d43
