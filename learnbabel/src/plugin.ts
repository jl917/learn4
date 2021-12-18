export default function(babel) {
  return {
    visitor: {
      Identifier(path, state) {
        if(path.node.name === 'n'){
          path.node.name = 'x';
        }
      },
    }
  };
}