



//táblázat generálása globális változókkal
const tabla = document.createElement(`table`); //Létrehozok egy table elemet, ami a táblázatomat fogja tartalmazni.
const tablafej = document.createElement(`thead`); //Létrehozok egy tablehead elemet, ami a táblázat fejlécét fogja tartalmazni.
const tablatest = document.createElement(`tbody`);//Létrehozok egy tablebody elementet, mely a táblázatom törzsét(sorait) fogja tartalmazni
document.body.appendChild(tabla); // a table elemet hozzáfűzöm a HTML dokumentumhoz.
tabla.appendChild(tablafej); // a thead elemet hozzáfűzöm a table elemhez
tabla.appendChild(tablatest);// a table body elementet hozzáfűzöm a táblázatomhoz


//css 
const colgroup = document.createElement(`colgroup`);//létrehozok egy colgroup elemet, ami a táblázat oszloponkénti stílusbeállítására alkalmas.
tabla.appendChild(colgroup);//a colgroup elemet hozzáfűzöm a táblázathoz

const col1 = document.createElement(`col`);//létrehozok egy col elmet, amivel a táblázat első oszlopának stílusát állítom be.
colgroup.appendChild(col1); //hozzáfűzöm a colgroup elemhez 
col1.classList.add(`colored_column`);//hozzáadok az elemhez egy osztálykijelölőt, aminek a segítségével az 1. oszlop színe megváltozik

const col2 = document.createElement(`col`);//létrehozok egy col elmet, a táblázatom középső oszlopának, mivel a colok egymás alatt jelképezik a táblázat három oszlopát
colgroup.appendChild(col2);//hozáfűzöm a colgrouphoz ezt az elemet

const col3 = document.createElement(`col`);//létrehozom az utolsó col elemet, amivel a táblázatom utolsó oszlopának a stílusát állítom be
colgroup.appendChild(col3);//hozzáfűzöm ezt is a colgroup elemhez
col3.classList.add(`colored_column`); //ezt is ellátom a megfelelő osztálykijelölővel, hogy a stílus a feladatnak megfelelően megváltozzon

//fejléc generálása
const fejsor = document.createElement(`tr`); //Létrehozok egy tableRow elementet, ami a táblázatom fejrészének a sorát adja.
tablafej.appendChild(fejsor);//ezt az elemet hozzáfűzöm a fejléchez

const fejresz1 = document.createElement(`th`);//létrehozok egy th elemet ami a táblázat fejlécének egy cellája lesz 
fejsor.appendChild(fejresz1);// ezt hozzáfűzöm a táblázat fejlécének sorához
fejresz1.innerHTML = `Uralkodó`;// a th tagek közötti értéknek megadom az uralkodót

const fejresz2 = document.createElement(`th`);//létrehozok egy th elemet ami a táblázat fejlécének egy cellája lesz.
fejsor.appendChild(fejresz2);// ezt hozzáfűzöm a táblázat fejlécének sorához
fejresz2.innerHTML = `Esemény`;// a th tagek közötti értéknek megadom az eseményt


const fejresz3 = document.createElement(`th`);//létrehozok egy th elemet ami a táblázat fejlécének egy cellája lesz.
fejsor.appendChild(fejresz3);// ezt hozzáfűzöm a táblázat fejlécének sorához
fejresz3.innerHTML = `Évszám`;// a th tagek közötti értéknek megadom az évszámot




// 1. sora a táblázatnak 
const tabla1sor = document.createElement(`tr`);//létrehozok egy tableRow elementet, a táblázatom első sorának
tablatest.appendChild(tabla1sor);// ezt az új sort rögtön hozzáfűzöm a táblázatomhoz

const tabla1sorelem = document.createElement(`td`);//létrehozok egy td elemet , ami az első sor első cellája lesz.
tabla1sor.appendChild(tabla1sorelem); //ezt hozzáfűzöm az első sorhoz
tabla1sorelem.rowSpan = 2; //megadom neki a rowspan értékének a kettőt
tabla1sorelem.innerHTML = `I. István`; // a első sor td tagjei közül megadom neki az István értéket

const tabla1sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami az első sor második cellája lesz.
tabla1sor.appendChild(tabla1sorelem2);//ezt hozzáfűzöm az első sorhoz
tabla1sorelem2.innerHTML = `Koronázás`;// a első sor td tagjei közül megadom neki a Koronázás értéket

const tabla1sorelem3 = document.createElement(`td`);//létrehozok egy td elemet , ami az első sor harmadik cellája lesz.
tabla1sor.appendChild(tabla1sorelem3);//ezt hozzáfűzöm az első sorhoz
tabla1sorelem3.innerHTML = `1000`;// a első sor td tagjei közül megadom neki az 1000 értéket


//1. és 2. összekapcsolodó sor
//Mivel az első sor első elemének megadtuk a rowspan értékenek a 2-t, a második sor összekapcsolódik az elsővel.
const tabla2sor = document.createElement(`tr`); //létrehozok egy tableRow elementet, a táblázatom második sorának
tablatest.appendChild(tabla2sor);// ezt az új sort rögtön hozzáfűzöm a táblázatomhoz


const tabla2sorelem1 = document.createElement(`td`);//létrehozok egy td elemet , ami a második sor első cellája lesz.
tabla2sor.appendChild(tabla2sorelem1);//ezt hozzáfűzöm a második sorhoz
tabla2sorelem1.innerHTML = `Pannonhalmi apátság megalapítása`;//megadom értéknek a Pannonhalmi .....


const tabla2sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a második sor második cellája lesz.
tabla2sor.appendChild(tabla2sorelem2);//ezt hozzáfűzöm a második sorhoz
tabla2sorelem2.innerHTML = `1001`; //megadom értéknek az 1001-et



//3.sor
const tabla3sor = document.createElement(`tr`);//létrehozok egy tableRow elementet, a táblázatom harmadik sorának
tablatest.appendChild(tabla3sor);// ezt az új sort hozzáfűzöm a táblázatomhoz


const tabla3sorelem1 = document.createElement(`td`);//létrehozok egy td elemet , ami a harmadik sor első cellája lesz.
tabla3sor.appendChild(tabla3sorelem1);//ezt az újonnan létrehozott elemet hozzáfűzöm a harmadik sorhoz
tabla3sorelem1.innerHTML = `IV. Béla`; // megadom értéknek: IV. Béla

const tabla3sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a harmadik sor második cellája lesz.
tabla3sor.appendChild(tabla3sorelem2);//ezt az újonnan létrehozott elemet hozzáfűzöm a harmadik sorhoz
tabla3sorelem2.innerHTML = `tatárjárás`;// megadom neki értékként a tatárjárást

const tabla3sorelem3 = document.createElement(`td`);//létrehozok egy td elemet , ami a harmadik sor harmadik cellája lesz.
tabla3sor.appendChild(tabla3sorelem3);//ezt az újonnan létrehozott elemet hozzáfűzöm a harmadik sorhoz
tabla3sorelem3.innerHTML = `1241-1242`;// megadom neki értékként az 1241-1242-t



//4. sor
const tabla4sor = document.createElement(`tr`);//létrehozok egy tableRow elementet, a táblázatom negyedik sorának
tablatest.appendChild(tabla4sor);// ezt az új sort hozzáfűzöm a táblázatomhoz

const tabla4sorelem1 = document.createElement(`td`);//létrehozok egy td elemet , ami a negyedik sor első cellája lesz.
tabla4sor.appendChild(tabla4sorelem1);//ezt hozzáfűzöm a negyedik sorhoz
tabla4sorelem1.rowSpan = 2;// az elem rowspan tulajdonságának értékül adtam a kettőt
tabla4sorelem1.innerHTML = `Mátyás király`; // az elemnek értékül adtam a Mátyás királyt
 
const tabla4sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a negyedik sor második cellája lesz.
tabla4sor.appendChild(tabla4sorelem2);// ezt az elemet hozzáadom a sorhoz
tabla4sorelem2.innerHTML = `Bécs elfoglalása`;// az elemnek értékül adtam : Bécs elfoglalása

const tabla4sorelem3 = document.createElement(`td`);//létrehozok egy td elemet , ami a negyedik sor harmadik cellája lesz.
tabla4sor.appendChild(tabla4sorelem3);//ezt az elemet hozzáadom a sorhoz
tabla4sorelem3.innerHTML = `1485`;// az elemnek értékül adtam: 1485


//4-5. összekapcsolódó sor
//Mivel a 4. sor első elemének rowspan tulajdonságának kettőt adtuk értékül a 4. és az 5. sor összefügg
const tabla5sor = document.createElement(`tr`);// létrehozok egy tableRow elemet a táblázatom 5. sorának
tablatest.appendChild(tabla5sor);//ezt is hozzáfűzöm a táblázathoz

const tabla5sorelem1 = document.createElement(`td`);//létrehozok egy td elemet , ami a ötödik sor első cellája lesz.
tabla5sor.appendChild(tabla5sorelem1);//hozzáfűzöm az ötödik sorhoz
tabla5sorelem1.innerHTML = `Kenyérmezei csata`; //értékül adom neki: Kenyérmezei csata


const tabla5sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a ötödik sor második cellája lesz.
tabla5sor.appendChild(tabla5sorelem2);//hozzáfűzöm az ötödik sorhoz
tabla5sorelem2.innerHTML = `1479`;//értékül adom neki az 1479-et


//6.sor
const tabla6sor = document.createElement(`tr`);// létrehozok egy tableRow elemet a táblázatom 6. sorának
tablatest.appendChild(tabla6sor);//hozzáfűzöm a táblázathoz

const tabla6sorelem1 = document.createElement(`td`)//létrehozok egy td elemet , ami a hatodik sor első cellája lesz.
tabla6sor.appendChild(tabla6sorelem1);// az újonnan létrehozott elemet hozzáfűzöm a hatodik sorhoz
tabla6sorelem1.rowSpan = 2; // a 6. sor első elemének rowspan tulajdonságának megadjuk a 2 értéket
tabla6sorelem1.innerHTML = `II. Rákóczi Ferenc`; // az elemnek értékül adjuk: II. Rákóczi Ferenc

const tabla6sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a hatodik sor második cellája lesz.
tabla6sor.appendChild(tabla6sorelem2);// az újonnan létrehozott elemet hozzáfűzöm a hatodik sorhoz
tabla6sorelem2.innerHTML = `A szabadságharc kezdete`; // az elemnek értékül adjuk, A szabadságharc kezdete

const tabla6sorelem3 = document.createElement(`td`);//létrehozok egy td elemet , ami a hatodik sor harmadik cellája lesz.
tabla6sor.appendChild(tabla6sorelem3);// az újonnan létrehozott elemet hozzáfűzöm a hatodik sorhoz
tabla6sorelem3.innerHTML = `1703`;// az elemnek értékül adjuk, 1703

//6-7. összekapcsolódó sorok
//Mivel a 6. sor első elemének a rowspant kettőre állítottuk  a 6-7. sor összefügg
const tabla7sor = document.createElement(`tr`);// létrehozok egy tableRow elemet a táblázatom 7. sorának
tablatest.appendChild(tabla7sor);//hozzáfűzöm utolsó sorként a táblázathoz.


const tabla7sorelem1 = document.createElement(`td`);//létrehozok egy td elemet , ami a hetedik sor első cellája lesz.
tabla7sor.appendChild(tabla7sorelem1);//hozzáfűzöm az elemet az utolsó sorhoz
tabla7sorelem1.innerHTML  = `A szabadságharc vége`;//értékül adom neki: A szabadságharc vége


const tabla7sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a hetedik sor második cellája lesz.
tabla7sor.appendChild(tabla7sorelem2);//hozzáfűzöm az elemet az utolsó sorhoz
tabla7sorelem2.innerHTML = `1711`;//értékül adom neki: 1703


