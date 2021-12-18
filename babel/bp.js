module.exports = function({types: t}) {
  return {
    visitor: {
      Identifier(path, state) {
        // console.log(Object.keys(path))
        if(path.node.name === 'n'){
          path.node.name = 'x';
        }
      },
      BinaryExpression(path){
        // console.log(Object.keys(path))
        // console.log(path.node)
        path.replaceWith(
          t.binaryExpression("**", path.node.left, t.numericLiteral(2))
        );
        path.skip();
      }
    }
  };
}