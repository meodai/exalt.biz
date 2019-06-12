const yaml = require('js-yaml');
const fs = require('fs');

const data = yaml.safeLoad(fs.readFileSync('./data.yml', 'utf8'), {
  onWarning: (error) => {
    console.log(error)
  }
});

module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: data,
    },
  }
};

