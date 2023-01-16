'use strict';
let str = 'я люблю JS!';
let sub = str.substr(0,2);
console.log(sub);

let str2 = 'я люблю JS!';
let sub2 = str.substring(0, 2);
console.log(sub2);

let str3 = 'я люблю JS!';
let sub3 = str.slice(0, 2);
console.log(sub3);

// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).