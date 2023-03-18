import './style.css';
import validator from 'validator';

validator.isEmail('buraia30@gmail..com'); //=> true


const campoDeTexto = document.querySelector('#value');
const button = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');

button.addEventListener('click', (event) => {
  // Vamos usar o preventDefault() para evitar que, ao
  // clicar no botão, ele recarregue a página
event.preventDefault();

const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    email: validator.isEmail(campoDeTexto.value),
};
})

const a = () => 'blablablaxD';

const resolvedPromise = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const resposta = a();
      resolve(resposta)
    }, 1000);  
});

const rejectedPromise = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const resposta = a();
      reject(new Error(`Erro errado`));
    }, 1000);
  })

resolvedPromise()
.then((response) => {
  console.log(`Mensagem: ${response}`);
})
.finally(() => console.log('Fim da execução da primeira promise.'));

rejectedPromise()
.catch((error) => {
  console.log(`${error.message}`);
})
.finally(() => console.log('Fim da execução da segunda promise.'));

