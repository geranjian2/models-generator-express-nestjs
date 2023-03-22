const pluralize = require('pluralize');

const getInitials = function (string) {
    let names = string.split('_'),
        initials = names[0].substring(0, 1);
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1);
    }
    return initials;
}
const singularize = (word) => {
    let words = word.toLowerCase().split(/[_\- ]/);
    return words.map(w => pluralize.singular(w)).join('-');
};
const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
const camelCase = (word) => word.toLowerCase()
    .replace(/[-_]([a-z0-9])/g, g => g[1].toUpperCase());

const middleDash = (word) => word.toLowerCase()
    .replace('_','-');


    module.exports = {
        getInitials,
        singularize,
        capitalize,
        camelCase,
        middleDash
    }