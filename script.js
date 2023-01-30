let str = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
let result = '*';


function checkString(str){
    for(let i = 0; i < str.length; i++){
        if(!str[i].includes('i'))
        if(!str[i].includes(['e']))
        if(!str[i].includes(['o']))
        if(!str[i].includes(['u']))
        if(!str[i].includes(['a'])){
            result += str[i];
        }
    }
    console.log(result);
}

checkString(str);