const CATALOG = [
    {
        id:'w1',
        img:'watch_images/AP_RO_selfwinding.png',
        brand:'Audemars Piguet',
        name:'Royal Oak',
        material:'34mm, pink gold',
        price:'25 000',

    },
    {
        id:'w2',
        img:'watch_images/AP_SELFWINDING-FLYING-TOURBILLON.png',
        brand:'Audemars Piguet',
        name:'Selfwinding',
        material:'41mm, white gold',
        price:'34 000',
    },

    {
        id:'w3',
        img:'watch_images/AP_Ultra_Complication.png',
        brand:'Audemars Piguet',
        name:'Ultra-Compication',
        material:'42mm, white gold',
        price:'42 000',
    },

    {
        id:'w4',
        img:'watch_images/AP_RO_perpetual_calendar.png',
        brand:'Audemars Piguet',
        name:'Royal Oak',
        material:'41mm, steel',
        price:'36 000',
    },

    {
        id:'w5',
        img:'watch_images/Hublot_big_bang.png',
        brand:'Hublot',
        name:'Big Bang',
        material:'44mm, steel',
        price:'14 000',
    },

    {
        id:'w6',
        img:'watch_images/Hublot_classic_fusion.png',
        brand:'Hublot',
        name:'Classic Fusion',
        material:'45mm, titanium',
        price:'18 500',
    },

    {
        id:'w7',
        img:'watch_images/breitling_chronomat.png',
        brand:'Breitling',
        name:'Chronomat',
        material:'42mm, steel',
        price:'12 500',
    },

    {
        id:'w8',
        img:'watch_images/Hublot_square_bang.png',
        brand:'Hublot',
        name:'Square Bang',
        material:'42mm, titanium',
        price:'24 100',
    },

    {
        id:'w9',
        img:'watch_images/Omega_Aqua_terra.png',
        brand:'Omega',
        name:'Aqua Terra',
        material:'41mm, steel',
        price:'8 500',
    },

    {
        id:'w10',
        img:'watch_images/Omega_moonwatch.png',
        brand:'Omega',
        name:'Moonwatch',
        material:'42mm, steel',
        price:'6 000',
    },


    {
        id:'w11',
        img:'watch_images/Omega_globemaster.png',
        brand:'Omega',
        name:'Globemaster',
        material:'41mm, white gold',
        price:'16 200',
    },

    {
        id:'w12',
        img:'watch_images/pattel_phillippe_nautilus.png',
        brand:'Patek Phillippe',
        name:'Nautilus',
        material:'38mm, steel',
        price:'23 000',
    },

    {
        id:'w13',
        img:'watch_images/Rado_florence_classic.png',
        brand:'Rado',
        name:'Florence Classic',
        material:'38mm, white gold & yellow gold',
        price:'5 500',
    },

    {
        id:'w14',
        img:'watch_images/Rado_hyperchrome_classic.png',
        brand:'Rado',
        name:'Hyperchrome Classic',
        material:'44mm, steel',
        price:'2 500',
    },

    {
        id:'w15',
        img:'watch_images/Rolex_submariner_date.png',
        brand:'Rolex',
        name:'Submariner',
        material:'41mm, white gold',
        price:'52 300',
    },

    {
        id:'w16',
        img:'watch_images/Rolex_explorer_2.png',
        brand:'Rolex',
        name:'Explorer II',
        material:'42mm, steel',
        price:'29 300',
    },

    {
        id:'w17',
        img:'watch_images/Rolex_DD.jpg',
        brand:'Rolex',
        name:'Day Date',
        material:'40mm, yellow gold',
        price:'41 300',
    },

    {
        id:'w18',
        img:'watch_images/Breguet_tradition.avif',
        brand:'Breguet',
        name:'Traditional',
        material:'41mm, white gold',
        price:'32 600',
    },





]

// class Watches {
//     render(){
//         let htmlCatalog = '';
//         CATALOG.forEach(({id,img,brand,name,material,price})=>{
//             htmlCatalog +=`
//             <div class="watch">
//                 <img class="w-img" src="${img}">
//                 <p class="w-brand">${brand}</p>
//                 <p class="w-name">${name}</p>
//                 <p class="w-material">${material}</p>
//                 <p class="w-price">${price}</p>
//             </div>
//             `;
        
//         });
//       let cat = document.querySelector(".watch-container")
//       cat.innerHTML = htmlCatalog;
        
//     }
// }
// const watchPage = new Watches();
// watchPage.render();


class Watches {
    render(ind){
        let htmlCatalog = ``;
        for(let i=ind-6; i<ind; i++){
            htmlCatalog +=`
            <div class="watch">
                <img class="w-img" src="${CATALOG[i].img}">
                <p class="w-brand">${CATALOG[i].brand}</p>
                <p class="w-name">${CATALOG[i].name}</p>
                <p class="w-material">${CATALOG[i].material}</p>
                <p class="w-price">${CATALOG[i].price}$</p>
                <p class="info">...</p>
            </div>
            `;
        
        };
      let cat = document.querySelector(".watch-container")
      cat.innerHTML = htmlCatalog;
        
    }
}
const watchPage = new Watches();
watchPage.render(6);
/* Щоб було по сторіках створюємо для кожної сторінки функцію онклік. далі в кожній функціі запускаємо 
watchPage.render(x); де х - це індекс елементів масива для відображення*/


//Визначення кількості сторінок
pageamount = Math.ceil(CATALOG.length/6)
let htmlPages = ``;
for(let i=1; i<pageamount+1;i++){
    htmlPages += `
    <button class="page p${i}btn">${i}</button>
    `;
};
let pageContainer = document.querySelector(".page-number");
pageContainer.innerHTML = htmlPages;

document.querySelector('.p1btn').addEventListener('click', ()=>{
    watchPage.render(6);
})

document.querySelector('.p2btn').addEventListener('click', ()=>{
    watchPage.render(12);
})

document.querySelector('.p3btn').addEventListener('click', ()=>{
    watchPage.render(18);
})
