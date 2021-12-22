const qs = require('qs');
const a = qs.parse('person.name.first=John', { allowDots: true });

console.log(a);

const b = qs.parse('person.0.first=John', { allowDots: true });

console.log(b)

console.log(qs.stringify(b, { allowDots: true, encode: false }));

console.log(qs.stringify('person.0.first=John', { allowDots: true, encode: false }));

console.log(qs.parse('person.1.first=John', { allowDots: true, allowSparse: true }));

console.log(qs.stringify({"test":[{"name":"adaf23"},{"name":"21"},{"name":"1231"}]}, { allowDots: true, encode: false, allowSparse: true }));