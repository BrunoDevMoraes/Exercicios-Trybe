  const ESTADO_INICIAL = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  }
  const NEXT_COLOR = 'NEXT_COLOR';
  const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
  const reducer = (state = ESTADO_INICIAL, action) => {
    const { index, colors } = state;
    switch (action.type) {
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
    console.log('batata')
  })

  store.subscribe(() => {
    const colorName = document.getElementById('value');
    const container = document.getElementById('container');
    const {colors, index} = store.getState();
    colorName.innerHTML = colors[index];
    container.style.backgroundColor = colors[index];
  });
