



//táblázat generálása globális változókkal
const tabla = document.createElement(`table`);
const tablafej = document.createElement(`thead`);
document.body.appendChild(tabla);
tabla.appendChild(tablafej);

//fejléc generálása
const fejsor = document.createElement(`tr`);
tablafej.appendChild(fejsor);

const fejresz1 = document.createElement(`th`);
fejsor.appendChild(fejresz1);
fejresz1.innerHTML = `Uralkodó`;

const fejresz2 = document.createElement(`th`);
fejsor.appendChild(fejresz2);
fejresz2.innerHTML = `Esemény`;

const fejresz3 = document.createElement(`th`);
fejsor.appendChild(fejresz3);
fejresz3.innerHTML = `Évszám`;



// 1. sora a táblázatnak 
const tabla1sor = document.createElement(`tr`);
tabla.appendChild(tabla1sor);

const tabla1sorelem = document.createElement(`td`);
tabla1sor.appendChild(tabla1sorelem);
tabla1sorelem.rowSpan = 2;
tabla1sorelem.innerHTML = `I. István`;

const tabla1sorelem2 = document.createElement(`td`);
tabla1sor.appendChild(tabla1sorelem2);
tabla1sorelem2.innerHTML = `Koronázás`;

const tabla1sorelem3 = document.createElement(`td`);
tabla1sor.appendChild(tabla1sorelem3);
tabla1sorelem3.innerHTML = `1000`;


//1. és 2. összekapcsolodó sor
const tabla2sor = document.createElement(`tr`);
tabla.appendChild(tabla2sor);


const tabla2sorelem1 = document.createElement(`td`);
tabla2sor.appendChild(tabla2sorelem1);
tabla2sorelem1.innerHTML = `Pannonhalmi apátság megalapítása`;


const tabla2sorelem2 = document.createElement(`td`);
tabla2sor.appendChild(tabla2sorelem2);
tabla2sorelem2.innerHTML = `1001`;



//3.sor
const tabla3sor = document.createElement(`tr`);
tabla.appendChild(tabla3sor);


const tabla3sorelem1 = document.createElement(`td`);
tabla3sor.appendChild(tabla3sorelem1);
tabla3sorelem1.innerHTML = `IV. Béla`;

const tabla3sorelem2 = document.createElement(`td`);
tabla3sor.appendChild(tabla3sorelem2);
tabla3sorelem2.innerHTML = `tatárjárás`;

const tabla3sorelem3 = document.createElement(`td`);
tabla3sor.appendChild(tabla3sorelem3);
tabla3sorelem3.innerHTML = `1241-1242`;



//4. sor
const tabla4sor = document.createElement(`tr`);
tabla.appendChild(tabla4sor);

const tabla4sorelem1 = document.createElement(`td`);
tabla4sor.appendChild(tabla4sorelem1);
tabla4sorelem1.rowSpan = 2;
tabla4sorelem1.innerHTML = `Mátyás király`;
 
const tabla4sorelem2 = document.createElement(`td`);
tabla4sor.appendChild(tabla4sorelem2);
tabla4sorelem2.innerHTML = `Bécs elfoglalása`;

const tabla4sorelem3 = document.createElement(`td`);
tabla4sor.appendChild(tabla4sorelem3);
tabla4sorelem3.innerHTML = `1485`;


//4-5. összekapcsolódó sor

const tabla5sor = document.createElement(`tr`);
tabla.appendChild(tabla5sor);

const tabla5sorelem1 = document.createElement(`td`);
tabla5sor.appendChild(tabla5sorelem1);
tabla5sorelem1.innerHTML = `Kenyérmezei csata`;


const tabla5sorelem2 = document.createElement(`td`);
tabla5sor.appendChild(tabla5sorelem2);
tabla5sorelem2.innerHTML = `1479`;


//6.sor
const tabla6sor = document.createElement(`tr`);
tabla.appendChild(tabla6sor);

const tabla6sorelem1 = document.createElement(`td`)
tabla6sor.appendChild(tabla6sorelem1);
tabla6sorelem1.rowSpan = 2;
tabla6sorelem1.innerHTML = `II. Rákóczi Ferenc`;

const tabla6sorelem2 = document.createElement(`td`);
tabla6sor.appendChild(tabla6sorelem2);
tabla6sorelem2.innerHTML = `A szabadságharc kezdete`;

const tabla6sorelem3 = document.createElement(`td`);
tabla6sor.appendChild(tabla6sorelem3);
tabla6sorelem3.innerHTML = `1703`;

//6-7. összekapcsolódó sorok
const tabla7sor = document.createElement(`tr`);
tabla.appendChild(tabla7sor);


const tabla7sorelem1 = document.createElement(`td`);
tabla7sor.appendChild(tabla7sorelem1);
tabla7sorelem1.innerHTML  = `A szabadságharc vége`;


const tabla7sorelem2 = document.createElement(`td`);
tabla7sor.appendChild(tabla7sorelem2);
tabla7sorelem2.innerHTML = `1711`;



//css 
const colgroup = document.createElement(`colgroup`);
tabla.appendChild(colgroup);

const col1 = document.createElement(`col`);
colgroup.appendChild(col1);
col1.classList.add(`colored_column`);

const col2 = document.createElement(`col`);
colgroup.appendChild(col2);

const col3 = document.createElement(`col`);
colgroup.appendChild(col3);
col3.classList.add(`colored_column`);
