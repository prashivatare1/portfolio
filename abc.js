username='Pradyumna'
console.log(username)

x=50;
y=50;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

if(1>0)
{
     i=1;
    while(5>i)
    {
        console.log(x * i);
        i++;
    }
}

const fs = require('fs')


var result = fs.readFileSync('./abc.js','utf8');
console.log(result);