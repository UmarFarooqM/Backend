const boxen = require('boxen');

// console.log(boxen("I am using my first external module!", {padding: 1}));

console.log(boxen("I am using my first external module!", {title: 'Hurray!!!', titleAlignment: 'center',borderStyle:'classic'}));
console.log(boxen("I am  my first external module!", {type:"string", title:"Hurray!!!", titleAlignment: 'center',borderStyle:  'singleDouble' }))

console.log(boxen("unicorns love rainbows", {type:"string", title:"Hurray!!!", titleAlignment: 'center',borderStyle:  'round' }))