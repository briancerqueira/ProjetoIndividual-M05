const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let properties = [];

function getProperties() {
  rl.question('Digite uma propriedade de CSS ou SAIR para finalizar: ', (property) => {
    if (property.toUpperCase() === 'SAIR') {
      const sortedProperties = properties.sort();
      console.log(sortedProperties.join('\n'));
      rl.close();
    } else {
      properties.push(property);
      getProperties();
    }
  });
}

getProperties();
