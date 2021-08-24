  const ESTADO_INICIAL = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  }
  const NEXT_COLOR = 'NEXT_COLOR';
  const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
  const CREATE_COLOR = 'CREATE_COLOR';

  const reducer = (state = ESTADO_INICIAL, action) => {
    const { type, newColor } = action;
    const { index, colors } = state;
    switch (type) {
      case NEXT_COLOR:
        return {
          ...state,
          index: index >= 0 && index < colors.length - 1 ? index + 1 : 0,
        }
      case PREVIOUS_COLOR:
        return {
          ...state,
          index: index <= colors.length - 1 && index > 0 ? index - 1 : colors.length - 1,
        }
      case CREATE_COLOR:
        return {
          ...state,
          colors: [...colors, newColor],
          index: colors.indexOf(newColor, -1),
        }
      default:
        return state;
    }
  }
  const store = Redux.createStore(reducer);

  document.querySelector('#previous').addEventListener('click', () => {
    store.dispatch({type: PREVIOUS_COLOR})
  });
  document.querySelector('#next').addEventListener('click', () => {
    store.dispatch({type: NEXT_COLOR})
  });

  store.subscribe(() => {
    const colorName = document.getElementById('value');
    const container = document.getElementById('container');
    const {colors, index} = store.getState();
    colorName.innerHTML = colors[index];
    container.style.backgroundColor = colors[index];
    console.log(colors[index]);
  });

  function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}

const button = document.createElement('button');
button.innerHTML = 'Random Color';

document.querySelector('#container').appendChild(button);

button.addEventListener('click', () => {
  store.dispatch({type: CREATE_COLOR, newColor: criarCor()})
});
