window.onload = function() {
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
        index >= 0 && index < colors.length ? index += 1 : index = 0;
      case PREVIOUS_COLOR:
        index <= colors.length && index > 0 ? index -= 1 : index = colors.length;
      default: state;
    }
  }
  const store = Redux.createStore(reducer);
}
