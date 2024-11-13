



const table = createelem(`table`, document.body);
const thead = createelem(`thead`, table);
const tr = createelem(`tr`, thead);
const colgroup = createelem(`colgroup`, table);
const col = createelem(`col`, colgroup);
col.classList.add(`colored-column`);




    const th = createelem(`th`, tr);
    th.innerHTML = `Uralkodó`;
    const th2 = createelem(`th`, tr);
    th2.innerHTML = `Esemény`;
    const th3 = createelem(`th`, tr);
    th3.innerHTML = `Évszám`;


/**
 * 
 * @param {string} htmltag 
 * @param {HTMLElement} parentelement 
 */
function createelem(htmltag, parentelement){
    const htmlelement = document.createElement(htmltag);
    parentelement.appendChild(htmlelement);

    return htmlelement;
};




const uralkodok = [
    {
        uralkodo_nev:`I. István`,
        esemeny1: `Koronázás`,
        evszam1: `1000`,
        esemeny2: `Pannonhalmi apátság megalapítása`,
        evszam2: `1001`
    },
    {
        uralkodo_nev: `IV. Béla`,
        esemeny1: `tatárjárás`,
        evszam1: `1241-1242`
    },
    {
        uralkodo_nev: `Mátyás király`,
        esemeny1: `Kenyérmezei csata`,
        evszam1: `1479`,
        esemeny2: `Bécs elfoglalása`,
        evszam2: `1485`
    },
    {
        uralkodo_nev: `II. Rákoczi Ferenc`,
        esemeny1: `A szabadságharc kezdete`,
        evszam1: `1703`,
        esemeny2: `A szabadságharc vége`,
        evszam2: `1711`
    }
];


/**
 * 
 * @param {Array} uralkodok 
 */

function feltolto(uralkodok){
    const ttest = document.createElement('tbody');

    for(const uralkodo of uralkodok){
      
        const trow = document.createElement(`tr`);
        const td1 = document.createElement(`td`);
        const td2 = document.createElement(`td`);
        const td3 = document.createElement(`td`);

        table.appendChild(ttest);
        ttest.appendChild(trow);
        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);

        td1.innerHTML = uralkodo.uralkodo_nev;
        td2.innerHTML = uralkodo.esemeny1;
        td3.innerHTML = uralkodo.evszam1;

        if(uralkodo.esemeny2 !== undefined){
            td1.rowSpan = 2;
            const trow1 = document.createElement(`tr`);
            ttest.appendChild(trow1);
            
            const td4 = document.createElement(`td`);
            const td5 = document.createElement(`td`);

            trow1.appendChild(td4);
            trow1.appendChild(td5);
            td4.innerHTML = uralkodo.esemeny2;
            td5.innerHTML = uralkodo.evszam2;
        };



    }
   

};
feltolto(uralkodok);




