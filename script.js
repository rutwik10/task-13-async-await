console.log('person1: shows ticket');
console.log('person2: shows ticket');    


const preMovie = async () => {
    const wifeBringTickets = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 2000);
    });
    
    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    
     const addButter = new Promise((resolve, reject) => resolve('butter'));
     
     const getColdDrinks = new Promise((resolve, reject) => resolve('cold drinks'));
    
    let ticket = await wifeBringTickets;
    
    console.log(`wife: i have the ${ticket}`);
    console.log('husband: lets go in');
    console.log('wife: no im hungry');
    
    let popcorn = await getPopcorn;
    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: lets go in');
    console.log('wife: i need butter on popcorn');
    
    let butter = await addButter;
    console.log(`i got ${butter} on popcorn`);
    console.log('wife: lets go');
    
    let colddrink = await getColdDrinks;
    console.log(`i got some ${colddrink}`);
    
    return ticket;
}

preMovie().then((m) => console.log(`person3 shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');
