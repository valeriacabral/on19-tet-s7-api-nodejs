/*1. [ ] Criar uma promise que simule um envio de email ela precisa ter como parametro: 
  - o email da destinataria
  - mensagem que será enviada.

 Regras de negocio:
  a. Se o email da destinataria for vazio, retornar um erro*/

  // construcao
const destinatariaEmail = (email, mensagem) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email) {
          return reject("O email nao pode ser vazio");
        }
        return resolve({
          
          email,
        
        });
      }, 1000);
    }).then(mensagem = mensagem => console.log(mensagem));
  };

  destinatariaEmail();

  module.exports = {
    destinatariaEmail
    }
    

   