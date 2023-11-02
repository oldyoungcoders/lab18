
//object -> ymr neg zuiliig todorhoiloh
//object zarlamaar baival zaaval key bolon value-g bichih oistoi

// let utas = {
//     ungu:'har',
//     on:2023,
//     brand:'apple',
//     call : function(){
//         console.log('calling');
//     }
// }

// utas.call();
// console.log(utas.brand);
// console.log(utas);
// console.log(utas.ungu);


let person = {
    ner:'Mongolbayr ',
    nas:11,
    huis:'eregtei',   
    hayag:{
        uls:'Mongiala',
        hot:'ulaanbaatar',
        duureg:'bayngol',
        hothon:'narnii horoolol',
        bair:{
            orts:2,
            bair:3,
        }
    },
    great:function(){
        console.log('Sain baina uu? ' + this.ner + "!");
        console.log(`Ter ${this.nas}-tai. Ter ${this.huis}. Ter ${this.hayag.hot} hotod amidardag.`);
    }
}

// person.great();
// console.log(hun.ner);
// console.log(hun.nas);
// console.log(hun.huis);
// console.log(hun.hayag.uls);
// console.log(hun.hayag.hot);
// console.log(hun.hayag.duureg);
// console.log(hun.hayag.hothon);
// console.log(hun.hayag.bair.orts);
// console.log(hun.hayag.bair.bair);





let huuhed = {
    ovog:person.ner,
    ner:"Nandin",
    hayag:person.hayag,
}

// console.log('Minii aaviin ner: '+ huuhed.ovog);
// console.log('Bi '+huuhed.hayag.bair.bair+'-t baird amidardag');


let bookStore = {
    book1:{
        name:'Harry Potter',
        huudas:600,
        author:'J.K.Rowling',
        read:true,
    },
    book2:{
        name:'Ohin',
        huudas:420,
        author:'????',
        read:true,
    },
    book3:{
        name:'Jaal',
        huudas:450,
        author:'???',
        read:true,
    },
    book4:{
        name:'Terbumten huu',
        huudas:500,
        author:'??',
        read:false,
    },
    book5:{
        name:'Tashi',
        huudas:24,
        author:'?',
        read:true,
    },
}

console.log(bookStore);
//ES6 for in
for(key in bookStore){
    // console.log(bookStore[key].read);
    // if(bookStore[key].read == false){
    //     console.log(bookStore[key].name);
    // }
    if(bookStore[key].huudas>150 && true == bookStore[key].read){
        console.log(bookStore[key].name);
    } 
}

