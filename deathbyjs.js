/*eslint-env browser*/

//STEP 1

/*
function reverseStr(str) {

    var splitStr = str.split('');

    var revStr = splitStr.reverse();

    var sortStr = revStr.sort();

    var joinStr = sortStr.join(' ');

    return joinStr;
}

window.alert(reverseStr('Sunflower'));
*/

//STEP 2

/*function capitalize(str1) {

    str1 = str1.split(" ")

    for(var i = 0; i < str1.length; i++) {

    str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
}

    return (str1.join(" "));
}

alert(capitalize("programming is fun"));*/

//STEP 3

/*function vowels(str) {
    'use strict';

    var string = str.split(" ");
    var array = [];

    for (var i = 0; i < string.length; i += 1) {

        if (string[i] === 'a' || 'e' || 'i' || 'o' || 'u') {
            array.push(string[i]);

        } else {

            return;
        }
    }
    return array.length;
}

alert(vowels('Programming is fun'));*/

//STEP 4

/*function randId(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

window.alert(randId(10));*/

//STEP 5

/*function Word(string) {
    var length = 0;

    var longestWord = "";

    string.replace(/\S+/g, (word) => {

        if (word.length > length) {
            length = word.length;
            longestWord = word;
        }

        return "";
    });

    return longestWord;
}

alert(Word('Programming is fun'));*/
