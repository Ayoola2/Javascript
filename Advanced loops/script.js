const basket = ['apples', 'oranges', 'grapes'];

const detailedBasket = {
    apples: 40,
    coconut: 37,
    grapes: 150
}

for ( let i=0; i< basket.length; i++){
    console.log(basket[i]);
}

//Using forEach
basket.forEach(item =>{
    console.log(item);
})

// Using for of loop
for (item of basket){
    console.log(item);
}w