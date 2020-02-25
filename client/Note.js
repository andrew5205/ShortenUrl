npx create-react-app client 
cd client 
npm i react-animation


npm init -y
npm i express mongoose cors

nodemon server/server.js 







Css 
styles from appStyles.module.css 
Hover in 
Hover out 

copy link 
img is up 





function makeRandom(input) {
    var result = '';
    var symbol = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*';
    var maxLength = input.length * 2 / 3;

    var numOfChar = Math.floor(Math.random() * maxLength);
    console.log(numOfChar);
    for (var i = 0; i <numOfChar; i++){
        // console.log('inside for loop');
        result += symbol[Math.floor(Math.random() * symbol.length +1)];
        // console.log(result);
    }return result;

}





bit.ly 

andrew5205
andrewchung11@gmail.com
Aa030520@



CONCEPT:
Build my own API 
mongodb 

use random() to generate shorten URL 

mongoose schema with two field 1. user input url 2. output shorten url 

type in random redirect to original 


resources:

https://lapl.org/collections-resources/e-media

https://greensock.com/docs/










***
move random generator to server side 
check shorten result is not existing in db already 
post to db after 

1. 
function strGen() move outside modle.export as a local libary 
2. 
add express.urlencoded() in server/server.js for postman use 
3. 




https://stackoverflow.com/questions/34989305/redirecting-in-react-js

