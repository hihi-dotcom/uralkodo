const array = [
    {// az array tömb első elemének deklarációja
        Uralkodo: `Uralkodó`,//az array tömb első elemének Uralkodo tulajdonságának értékadás
        Esemeny: `Esemény`,//az array tömb első elemének Esemény tulajdonságának értéket adunk
        Evszam: `Évszám`,//az array tömb első elemének Evszam tulajdonságának értéket adunk
    },
    { // az array tömb második elemének létrehozása
        Uralkodo_name: `I. István`,//értéket adunk az array tömb második elemének Uralkodo_name tulajdonságának
        esemeny_istvan: `Koronázás`,//értéket adunk az array tömb második elemének esemeny_istvan tulajdonságának
        evszam_istvan: `1000`//értéket adunk az array tömb második elemének evszam_istvan tulajdonságának

       
    },
    {// az array tömb harmadik elemének deklarációja
        esemeny2_istvan: `Pannonhalmi apátság megalapítása`, //értéket adunk a tömbünk harmadik elemének esemeny2_istvan tulajdonságának
        evszam2_istvan: `1001`//értéket adunk a tömbünk harmadik elemének evszam2_istvan tulajdonságának
    },
    {// az array tömb negyedik elemének létrehozása
        Uralkodo_name: `IV. Béla`,// array tömb negyedik elemének Uralkodo_name tulajdonságának értéket adunk
        esemeny_bela: `tatárjárás`,//az array tömbünk negyedik elemének esemeny_bela tulajdonságának értéket adunk
        evszam_bela: `1241-1242`// a tömbünk negyedik elemének evszam_bela tulajdonságához értéket adunk
    },
    {// az array tömb ötödik elemének deklarációja
        Uralkodo_name: `Mátyás király`,// a tömbünk 5. elemének Uralkodo_name tulajdonságához értéket rendelek
        esemeny_matyas: `Bécs elfoglalása`,// az arrayem 5. elemének esemeny_matyas tulajdonságához értéket adok
        evszam_matyas: `1485`// array tömb ötödik elemének evszam_matyas tulajdonságának értékadás
    },
    {// az array tömb hatodik elemének deklarációja
        esemeny2_matyas: `Kenyérmezei csata`, //az array nevű tömböm hatodik elemének esemeny2_matyas tulajdonságának értéket adok
        evszam2_matyas: `1479`//a tömböm hatodik elemének evszam2_matyas tulajdonságának értéket adunk
    },
    {// az array tömb hetedik elemének deklarációja
        Uralkodo_name: `II. Rákoczi Ferenc`, // a tömböm hetedik elemének Uralkodo_name tulajdonságához értéket rendelek
        esemeny_rakoczi: `A szabadságharc kezdete`,// az array-em hetedik elemének esemeny_rakoczi tulajdonságának értéket adok
        evszam_rakoczi: `1703`,
        // az array nevű tömböm hetedik tagjának evszam_rakoczi tulajdonságának értékadás
    },
    {// az array tömb nyolcadik elemének deklarációja
        esemeny2_rakoczi: `A szabadságharc vége`,// a tömböm nyolcadik(utolsó) elemének esemeny2_rakoczi tulajdonságának adok értéket
        evszam2_rakoczi: `1711` // az array-em nyolcadik tagjának evszam2_rakoczi tulajdonságának értéket adok
    }
];



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
fejresz1.innerHTML = array[0].Uralkodo;// a cella tartalma az array tömb első elemének Uralkodo tulajdonságának értéke lesz.
const fejresz2 = document.createElement(`th`);//létrehozok egy th elemet ami a táblázat fejlécének egy cellája lesz.
fejsor.appendChild(fejresz2);// ezt hozzáfűzöm a táblázat fejlécének sorához
fejresz2.innerHTML = array[0].Esemeny;// a cella tartalma az array első elemének Esemeny tulajdonságának értéke lesz.


const fejresz3 = document.createElement(`th`);//létrehozok egy th elemet ami a táblázat fejlécének egy cellája lesz.
fejsor.appendChild(fejresz3);// ezt hozzáfűzöm a táblázat fejlécének sorához
fejresz3.innerHTML = array[0].Evszam;// a cella tartalma a tömböm első elemének Evszam tulajdonságának értéke lesz.



// 1. sora a táblázatnak 
const tabla1sor = document.createElement(`tr`);//létrehozok egy tableRow elementet, a táblázatom első sorának
tablatest.appendChild(tabla1sor);// ezt az új sort rögtön hozzáfűzöm a táblázatomhoz

const tabla1sorelem = document.createElement(`td`);//létrehozok egy td elemet , ami az első sor első cellája lesz.
tabla1sor.appendChild(tabla1sorelem); //ezt hozzáfűzöm az első sorhoz
tabla1sorelem.rowSpan = 2; //megadom neki a rowspan értékének a kettőt
tabla1sorelem.innerHTML = array[1].Uralkodo_name; // a cella tartalma az array második elemének Uralkodo_name tulajdonságának értéke lesz.


const tabla1sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami az első sor második cellája lesz.
tabla1sor.appendChild(tabla1sorelem2);//ezt hozzáfűzöm az első sorhoz
tabla1sorelem2.innerHTML = array[1].esemeny_istvan;// a cella tartalma az arrayem második elemének esemeny_istvan tulajdonságának értéke lesz.

const tabla1sorelem3 = document.createElement(`td`);//létrehozok egy td elemet , ami az első sor harmadik cellája lesz.
tabla1sor.appendChild(tabla1sorelem3);//ezt hozzáfűzöm az első sorhoz
tabla1sorelem3.innerHTML = array[1].evszam_istvan;// a cella tartalma az array nevű tömböm második tagjának evszam_istvan tulajdonságának értéke lesz.




//1. és 2. összekapcsolodó sor
//Mivel az első sor első elemének megadtuk a rowspan értékenek a 2-t, a második sor összekapcsolódik az elsővel.
const tabla2sor = document.createElement(`tr`); //létrehozok egy tableRow elementet, a táblázatom második sorának
tablatest.appendChild(tabla2sor);// ezt az új sort rögtön hozzáfűzöm a táblázatomhoz


const tabla2sorelem1 = document.createElement(`td`);//létrehozok egy td elemet , ami a második sor első cellája lesz.
tabla2sor.appendChild(tabla2sorelem1);//ezt hozzáfűzöm a második sorhoz
tabla2sorelem1.innerHTML = array[2].esemeny2_istvan;// a cella tartalma a tömb harmadik elemének esemeny2_istvan tulajdonságának értéke lesz.


const tabla2sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a második sor második cellája lesz.
tabla2sor.appendChild(tabla2sorelem2);//ezt hozzáfűzöm a második sorhoz
tabla2sorelem2.innerHTML = array[2].evszam2_istvan;// a cella tartalma a tömböm harmadik tagjának evszam2_istvan tulajdonságának értéke lesz.



//3.sor
const tabla3sor = document.createElement(`tr`);//létrehozok egy tableRow elementet, a táblázatom harmadik sorának
tablatest.appendChild(tabla3sor);// ezt az új sort hozzáfűzöm a táblázatomhoz


const tabla3sorelem1 = document.createElement(`td`);//létrehozok egy td elemet , ami a harmadik sor első cellája lesz.
tabla3sor.appendChild(tabla3sorelem1);//ezt az újonnan létrehozott elemet hozzáfűzöm a harmadik sorhoz
tabla3sorelem1.innerHTML = array[3].Uralkodo_name; // a cella tartalma az arrayem negyedik elemének Uralkodo_name tulajdonságának értéke lesz.

const tabla3sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a harmadik sor második cellája lesz.
tabla3sor.appendChild(tabla3sorelem2);//ezt az újonnan létrehozott elemet hozzáfűzöm a harmadik sorhoz
tabla3sorelem2.innerHTML = array[3].esemeny_bela;// a cella tartalma a tömböm negyedik elemének esemeny_bela tulajdonságának értékével lesz feltöltve.

const tabla3sorelem3 = document.createElement(`td`);//létrehozok egy td elemet , ami a harmadik sor harmadik cellája lesz.
tabla3sor.appendChild(tabla3sorelem3);//ezt az újonnan létrehozott elemet hozzáfűzöm a harmadik sorhoz
tabla3sorelem3.innerHTML = array[3].evszam_bela;// a cella tartalma az array nevű tömb neygedik elemének evszam_bela tulajdonságának értékével lesz feltöltve.




//4. sor
const tabla4sor = document.createElement(`tr`);//létrehozok egy tableRow elementet, a táblázatom negyedik sorának
tablatest.appendChild(tabla4sor);// ezt az új sort hozzáfűzöm a táblázatomhoz

const tabla4sorelem1 = document.createElement(`td`);//létrehozok egy td elemet , ami a negyedik sor első cellája lesz.
tabla4sor.appendChild(tabla4sorelem1);//ezt hozzáfűzöm a negyedik sorhoz
tabla4sorelem1.rowSpan = 2;// az elem rowspan tulajdonságának értékül adtam a kettőt
tabla4sorelem1.innerHTML = array[4].Uralkodo_name; // a cella tartalma a tömböm ötödik elemének Uralkodo_name tulajdonságának értékével lesz feltöltve.
 
const tabla4sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a negyedik sor második cellája lesz.
tabla4sor.appendChild(tabla4sorelem2);// ezt az elemet hozzáadom a sorhoz
tabla4sorelem2.innerHTML = array[4].esemeny_matyas;// a cella tartalma az arrayem ötödik tagjának esemeny_matyas tulajdonságának értékével lesz feltöltve.

const tabla4sorelem3 = document.createElement(`td`);//létrehozok egy td elemet , ami a negyedik sor harmadik cellája lesz.
tabla4sor.appendChild(tabla4sorelem3);//ezt az elemet hozzáadom a sorhoz
tabla4sorelem3.innerHTML = array[4].evszam_matyas;// a cella tartalma a tömböm ötödik elemének evszam_matyas tulajdonságának értékével lesz feltöltve.



//4-5. összekapcsolódó sor
//Mivel a 4. sor első elemének rowspan tulajdonságának kettőt adtuk értékül a 4. és az 5. sor összefügg
const tabla5sor = document.createElement(`tr`);// létrehozok egy tableRow elemet a táblázatom 5. sorának
tablatest.appendChild(tabla5sor);//ezt is hozzáfűzöm a táblázathoz

const tabla5sorelem1 = document.createElement(`td`);//létrehozok egy td elemet , ami a ötödik sor első cellája lesz.
tabla5sor.appendChild(tabla5sorelem1);//hozzáfűzöm az ötödik sorhoz
tabla5sorelem1.innerHTML = array[5].esemeny2_matyas; // a cella tartalma az array nevű tömböm hatodik elemének esemeny2_matyas tulajdonságának értékével lesz feltöltve.


const tabla5sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a ötödik sor második cellája lesz.
tabla5sor.appendChild(tabla5sorelem2);//hozzáfűzöm az ötödik sorhoz
tabla5sorelem2.innerHTML = array[5].evszam2_matyas;// a cella tartalma az arrayem hatodik tagjának evszam2_matyas tulajdonságának értékével lesz feltöltve.



//6.sor
const tabla6sor = document.createElement(`tr`);// létrehozok egy tableRow elemet a táblázatom 6. sorának
tablatest.appendChild(tabla6sor);//hozzáfűzöm a táblázathoz

const tabla6sorelem1 = document.createElement(`td`)//létrehozok egy td elemet , ami a hatodik sor első cellája lesz.
tabla6sor.appendChild(tabla6sorelem1);// az újonnan létrehozott elemet hozzáfűzöm a hatodik sorhoz
tabla6sorelem1.rowSpan = 2; // a 6. sor első elemének rowspan tulajdonságának megadjuk a 2 értéket
tabla6sorelem1.innerHTML = array[6].Uralkodo_name; // a cella a tömböm hetedik elemének Uralkodo_name tulajdonságának értékével lesz feltöltve.

const tabla6sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a hatodik sor második cellája lesz.
tabla6sor.appendChild(tabla6sorelem2);// az újonnan létrehozott elemet hozzáfűzöm a hatodik sorhoz
tabla6sorelem2.innerHTML = array[6].esemeny_rakoczi; // a cella az arrayem hetedik elemének esemeny_rakoczi tulajdonságának értékével lesz feltöltve.

const tabla6sorelem3 = document.createElement(`td`);//létrehozok egy td elemet , ami a hatodik sor harmadik cellája lesz.
tabla6sor.appendChild(tabla6sorelem3);// az újonnan létrehozott elemet hozzáfűzöm a hatodik sorhoz
tabla6sorelem3.innerHTML = array[6].evszam_rakoczi;// a cella a tömb hetedik elemének evszam_rakoczi tulajdonságának értékével lesz feltöltve.



//6-7. összekapcsolódó sorok
//Mivel a 6. sor első elemének a rowspant kettőre állítottuk  a 6-7. sor összefügg
const tabla7sor = document.createElement(`tr`);// létrehozok egy tableRow elemet a táblázatom 7. sorának
tablatest.appendChild(tabla7sor);//hozzáfűzöm utolsó sorként a táblázathoz.


const tabla7sorelem1 = document.createElement(`td`);//létrehozok egy td elemet , ami a hetedik sor első cellája lesz.
tabla7sor.appendChild(tabla7sorelem1);//hozzáfűzöm az elemet az utolsó sorhoz
tabla7sorelem1.innerHTML  = array[7].esemeny2_rakoczi;// a cella a tömb nyolcadik elemének esemeny2_rakoczi tulajdonságának értékével lesz feltöltve.

const tabla7sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a hetedik sor második cellája lesz.
tabla7sor.appendChild(tabla7sorelem2);//hozzáfűzöm az elemet az utolsó sorhoz
tabla7sorelem2.innerHTML = 
array[7].evszam2_rakoczi;// a cella az array nevű tömb nyolcadik elemének evszam2_rakoczi tulajdonságának értékével lesz feltöltve.


