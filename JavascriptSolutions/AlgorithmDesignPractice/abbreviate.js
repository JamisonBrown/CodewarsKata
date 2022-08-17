

function abbrevName(name){
    var names = name.split(' ');

    return `${names[0].charAt(0).toUpperCase()}.${names[1].charAt(0).toUpperCase()}.`;
    
}

console.log(abbrevName('jamison brown'));
console.log(abbrevName("Jeinis Durrett"));