
function strGen() {
    var result = '';
    var symbol = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*';
    var maxLength = 10;

    var numOfChar = Math.floor(Math.random() * maxLength);
    console.log(numOfChar);
    for (var i = 0; i <numOfChar; i++){
        result += symbol[Math.floor(Math.random() * symbol.length +1)];
        // console.log(result);
    }return result;
}
console.log(strGen());

