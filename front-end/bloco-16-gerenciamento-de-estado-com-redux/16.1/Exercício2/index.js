const ESTADO_INICIAL_1 = {
    nome: 'Rodrigo',
    sobrenome: 'Santos da Silva',
    endereco: 'Rua Soldado Mathias, 765',
    cidade: 'Belo Horizonte',
  };

  const ESTADO_INICIAL_2 = {
    nome: 'Bruna',
    sobrenome: 'Santana Oliveira',
    endereco: 'Rua Holanda, 332',
    cidade: 'São Paulo',
  };

  const CHANGE_PERSON1 = 'CHANGE_PERSON1';
  const CHANGE_PERSON2 = 'CHANGE_PERSON2';

  const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
    const { type, nome, sobrenome } = action
    switch (type) {
      case CHANGE_PERSON1:
        return {
          ...state,
          nome,
          sobrenome,
        }
      default:
        return state;
    }
  };

  const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
    const { type, nome, sobrenome } = action
    switch (type) {
      case CHANGE_PERSON2:
        return {
          ...state,
          nome,
          sobrenome,
        }
      default:
        return state;
    }
  };

const rootReducer = combineReducers({meuPrimeiroReducer, meuSegundoReducer});

const store = Redux.createStore(rootReducer);

const action1 = {type: CHANGE_PERSON1, nome: 'Bruno', sobrenome: 'Moraes' }
const action2 = {type: CHANGE_PERSON2, nome: 'Yasmin', sobrenome: 'Lourenço' }

window.onload = () => {
  setTimeout(() => {
    store.dispatch(action1);
    store.dispatch(action2);
  }, 3000);
};

store.subscribe(() => {
  const globalState = store.getState();

  const nome1 = document.querySelector('#nome-1');
  const sobrenome1 = document.querySelector('#sobrenome-1');
  nome1.innerHTML = globalState.meuPrimeiroReducer.nome;
  sobrenome1.innerHTML = globalState.meuPrimeiroReducer.sobrenome;

  const nome2 = document.querySelector('#nome-2');
  const sobrenome2 = document.querySelector('#sobrenome-2');
  nome2.innerHTML = globalState.meuPrimeiroReducer.nome;
  sobrenome2.innerHTML = globalState.meuSegundoReducer.sobrenome;
});
