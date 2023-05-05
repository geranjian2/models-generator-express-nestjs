const pluralize = require('pluralize');

const getInitials = function (string) {
  let names = string.split('_'),
    initials = names[0].substring(0, 3);

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1);
  }
  return initials;
};
const singularize = (word) => {
  let words = word.toLowerCase().split(/[_\- ]/);
  return words.map((w) => pluralize.singular(w)).join('-');
};
const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
const camelCase = (word) =>
  word.toLowerCase().replace(/[-_]([a-z0-9])/g, (g) => g[1].toUpperCase());

const middleDash = (word) => word.toLowerCase().replace('_', '-');

const addSpace = (word) => word.toLowerCase().replace('_', ' ');

const replace = (word, string, stringNew) =>
  word.toLowerCase().replace(string, stringNew);

const pluralizeReplace = (word, replace) => {
  let pluralizeWord;
  let find = word.search('_');
  if (find != -1) {
    var words = word.split('_');
    let array = words.map((w, i) => {
      if (i > 0) {
        return pluralize.plural(w);
      }
      return w;
    });
    pluralizeWord = array.join(replace);
  } else {
    pluralizeWord = pluralize.plural(word);
  }
  return pluralizeWord;
};

const transformText = (data, literal) => {
  let dataArray = data.split(literal);
  let textnew = '';
  dataArray.forEach((element) => {
    textnew += `'${element.trim()}'${literal}`;
  });
  return textnew.slice(0, -1);
};

module.exports = {
  getInitials,
  singularize,
  capitalize,
  camelCase,
  middleDash,
  addSpace,
  pluralizeReplace,
  replace,
  transformText,
};
