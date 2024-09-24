module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ["@babel/preset-react",{runtime:"automatic"}],
  ],
  };

  // we have configured babel into our application for testing

  // these babel presets are helping to convert react jsx code to html code so that testing library can understand it properly.