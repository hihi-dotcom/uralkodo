const tomb = [
    {
        Uralkodo: `Uralkodó`,
        Esemeny: `Esemény`,
        Evszam: `Évszám`,
    },
    {
        Uralkodo_name: `I. István`,
        esemeny_istvan: `Koronázás`,
        evszam_istvan: `1000`

       
    },
    {
        esemeny2_istvan: `Pannonhalmi apátság megalapítása`,
        evszam2_istvan: `1001`
    },
    {
        Uralkodo_name: `IV. Béla`,
        esemeny_bela: `tatárjárás`,
        evszam_bela: `1241-1242`
    },
    {
        Uralkodo_name: `Mátyás király`,
        esemeny_matyas: `Bécs elfoglalása`,
        evszam_matyas: `1485`
    },
    {
        esemeny2_matyas: `Kenyérmezei csata`,
        evszam2_matyas: `1479`
    },
    {
        Uralkodo_name: `II. Rákoczi Ferenc`,
        esemeny_rakoczi: `A szabadságharc kezdete`,
        evszam_rakoczi: `1703`,
    },
    {
        esemeny2_rakoczi: `A szabadságharc vége`,
        evszam2_rakoczi: `1711`
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



//összetett objektumok bevezetése
const fejsorObj = { //fejsorObj objektum létrehozása
    fejresz1: `Uralkodó`, //fejsorObj fejresz1 tulajdonságának értékadás
    fejresz2: `Esemény`,//fejsorObj fejresz2 tulajdonságának értékadás
    fejresz3: `Évszám`,//fejsorObj fejresz3 tulajdonságának értékadás
};





//fejléc generálása
const fejsor = document.createElement(`tr`); //Létrehozok egy tableRow elementet, ami a táblázatom fejrészének a sorát adja.
tablafej.appendChild(fejsor);//ezt az elemet hozzáfűzöm a fejléchez

const fejresz1 = document.createElement(`th`);//létrehozok egy th elemet ami a táblázat fejlécének egy cellája lesz 
fejsor.appendChild(fejresz1);// ezt hozzáfűzöm a táblázat fejlécének sorához
fejresz1.innerHTML = fejsorObj.fejresz1;// a cella tartalma a fejsorObj fejresz1 tulajdonságának értéke lesz.
const fejresz2 = document.createElement(`th`);//létrehozok egy th elemet ami a táblázat fejlécének egy cellája lesz.
fejsor.appendChild(fejresz2);// ezt hozzáfűzöm a táblázat fejlécének sorához
fejresz2.innerHTML = fejsorObj.fejresz2;// a cella tartalma a fejsorObj fejresz2 tulajdonságának értéke lesz.


const fejresz3 = document.createElement(`th`);//létrehozok egy th elemet ami a táblázat fejlécének egy cellája lesz.
fejsor.appendChild(fejresz3);// ezt hozzáfűzöm a táblázat fejlécének sorához
fejresz3.innerHTML = fejsorObj.fejresz3;// a cella tartalma a fejsorObj fejresz3 tulajdonságának értéke lesz.






//Az első sor összetett objektuma
const elsosorObj = {//elsosorObj objektum létrehozása
    tabla1sorcella: `I. István`,//elsosorObj tabla1sorcella tulajdonságának értékadás
    tabla1sorcella1: `Koronázás`,//elsosorObj tabla1sorcella1 tulajdonságának értékadás
    tabla1sorcella2: `1000`,//elsosorObj tabla1sorcella2 tulajdonságának értékadás
};

// 1. sora a táblázatnak 
const tabla1sor = document.createElement(`tr`);//létrehozok egy tableRow elementet, a táblázatom első sorának
tablatest.appendChild(tabla1sor);// ezt az új sort rögtön hozzáfűzöm a táblázatomhoz

const tabla1sorelem = document.createElement(`td`);//létrehozok egy td elemet , ami az első sor első cellája lesz.
tabla1sor.appendChild(tabla1sorelem); //ezt hozzáfűzöm az első sorhoz
tabla1sorelem.rowSpan = 2; //megadom neki a rowspan értékének a kettőt
tabla1sorelem.innerHTML = elsosorObj.tabla1sorcella; // a cella tartalma az elsosorObj tabla1sorcella tulajdonságának értéke lesz.


const tabla1sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami az első sor második cellája lesz.
tabla1sor.appendChild(tabla1sorelem2);//ezt hozzáfűzöm az első sorhoz
tabla1sorelem2.innerHTML = elsosorObj.tabla1sorcella1;// a cella tartalma az elsosorObj tabla1sorcella1 tulajdonságának értéke lesz.

const tabla1sorelem3 = document.createElement(`td`);//létrehozok egy td elemet , ami az első sor harmadik cellája lesz.
tabla1sor.appendChild(tabla1sorelem3);//ezt hozzáfűzöm az első sorhoz
tabla1sorelem3.innerHTML = elsosorObj.tabla1sorcella2;// a cella tartalma az elsosorObj tabla1sorcella2 tulajdonságának értéke lesz.





// a második sor öszetett objketuma
const masodiksorObj = {//masodiksorObj objektum létrehozása
    tabla2sorcella: `Pannonhalmi apátság megalapítása`,//masodiksorObj tabla2sorcella tulajdonságának értéket adunk
    tabla2sorcella1: `1001`,//masodiksorObj tabla2sorcella1 tulajdonságának értéket adunk
};


//1. és 2. összekapcsolodó sor
//Mivel az első sor első elemének megadtuk a rowspan értékenek a 2-t, a második sor összekapcsolódik az elsővel.
const tabla2sor = document.createElement(`tr`); //létrehozok egy tableRow elementet, a táblázatom második sorának
tablatest.appendChild(tabla2sor);// ezt az új sort rögtön hozzáfűzöm a táblázatomhoz


const tabla2sorelem1 = document.createElement(`td`);//létrehozok egy td elemet , ami a második sor első cellája lesz.
tabla2sor.appendChild(tabla2sorelem1);//ezt hozzáfűzöm a második sorhoz
tabla2sorelem1.innerHTML = masodiksorObj.tabla2sorcella;// a cella tartalma a masodiksorObj tabla2sorcella tulajdonságának értéke lesz.


const tabla2sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a második sor második cellája lesz.
tabla2sor.appendChild(tabla2sorelem2);//ezt hozzáfűzöm a második sorhoz
tabla2sorelem2.innerHTML = masodiksorObj.tabla2sorcella1;// a cella tartalma a masodiksorObj tabla2sorcella1 tulajdonságának értéke lesz.


// a harmadik sor összetett objektuma
const harmadiksorObj = {//a harmadiksorObj objektum létrehozása
    tabla3sorcella: `IV. Béla`,//harmadiksorObj tabla3sorcella tulajdonságának értéket adunk
    tabla3sorcella1: `tatárjárás`,//harmadiksorObj tabla3sorcella1 tulajdonságának értéket adunk
    tabla3sorcella2: `1241-1242`,//harmadiksorObj tabla3sorcella2 tulajdonságának értéket adunk
};

//3.sor
const tabla3sor = document.createElement(`tr`);//létrehozok egy tableRow elementet, a táblázatom harmadik sorának
tablatest.appendChild(tabla3sor);// ezt az új sort hozzáfűzöm a táblázatomhoz


const tabla3sorelem1 = document.createElement(`td`);//létrehozok egy td elemet , ami a harmadik sor első cellája lesz.
tabla3sor.appendChild(tabla3sorelem1);//ezt az újonnan létrehozott elemet hozzáfűzöm a harmadik sorhoz
tabla3sorelem1.innerHTML = harmadiksorObj.tabla3sorcella; // a cella tartalma a harmadiksorObj tabla3sorcella tulajdonságának értéke lesz.

const tabla3sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a harmadik sor második cellája lesz.
tabla3sor.appendChild(tabla3sorelem2);//ezt az újonnan létrehozott elemet hozzáfűzöm a harmadik sorhoz
tabla3sorelem2.innerHTML = harmadiksorObj.tabla3sorcella1;// a cella tartalma a harmadiksorObj tabla3sorcella1 tulajdonságának értékével lesz feltöltve.

const tabla3sorelem3 = document.createElement(`td`);//létrehozok egy td elemet , ami a harmadik sor harmadik cellája lesz.
tabla3sor.appendChild(tabla3sorelem3);//ezt az újonnan létrehozott elemet hozzáfűzöm a harmadik sorhoz
tabla3sorelem3.innerHTML = harmadiksorObj.tabla3sorcella2;// a cella tartalma a harmadiksorObj tabla3sorcella2 tulajdonságának értékével lesz feltöltve.




//a negyedik sor összetett objektuma
const negyediksorObj = {// a negyediksorObj objektum létrehozása
    tabla4sorcella: `Mátyás király`,//negyediksorObj tabla4sorcella tulajdonságának értéket adunk
    tabla4sorcella1: `Bécs elfoglalása`,//negyediksorObj tabla4sorcella1 tulajdonságának értéket adunk
    tabla4sorcella2: `1485`,//negyediksorObj tabla4sorcella2 tulajdonságának értéket adunk

};

//4. sor
const tabla4sor = document.createElement(`tr`);//létrehozok egy tableRow elementet, a táblázatom negyedik sorának
tablatest.appendChild(tabla4sor);// ezt az új sort hozzáfűzöm a táblázatomhoz

const tabla4sorelem1 = document.createElement(`td`);//létrehozok egy td elemet , ami a negyedik sor első cellája lesz.
tabla4sor.appendChild(tabla4sorelem1);//ezt hozzáfűzöm a negyedik sorhoz
tabla4sorelem1.rowSpan = 2;// az elem rowspan tulajdonságának értékül adtam a kettőt
tabla4sorelem1.innerHTML = negyediksorObj.tabla4sorcella; // a cella tartalma a negyediksorObj tabla4sorcella tulajdonságának értékével lesz feltöltve.
 
const tabla4sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a negyedik sor második cellája lesz.
tabla4sor.appendChild(tabla4sorelem2);// ezt az elemet hozzáadom a sorhoz
tabla4sorelem2.innerHTML = negyediksorObj.tabla4sorcella1;// a cella tartalma a negyediksorObj tabla4sorcella1 tulajdonságának értékével lesz feltöltve.

const tabla4sorelem3 = document.createElement(`td`);//létrehozok egy td elemet , ami a negyedik sor harmadik cellája lesz.
tabla4sor.appendChild(tabla4sorelem3);//ezt az elemet hozzáadom a sorhoz
tabla4sorelem3.innerHTML = negyediksorObj.tabla4sorcella2;// a cella tartalma a negyediksorObj tabla4sorcella2 tulajdonságának értékével lesz feltöltve.




//az ötödik sor összetett objektuma
const otsorObj = {// az otsorObj objektum létrehozása
    tabla5sorcella: `Kenyérmezei csata`,//otodiksorObj tabla5sorcella tulajdonságának értéket adunk
    tabla5sorcella1: `1479`,//otodiksorObj tabla5sorcella1 tulajdonságának értéket adunk
};


//4-5. összekapcsolódó sor
//Mivel a 4. sor első elemének rowspan tulajdonságának kettőt adtuk értékül a 4. és az 5. sor összefügg
const tabla5sor = document.createElement(`tr`);// létrehozok egy tableRow elemet a táblázatom 5. sorának
tablatest.appendChild(tabla5sor);//ezt is hozzáfűzöm a táblázathoz

const tabla5sorelem1 = document.createElement(`td`);//létrehozok egy td elemet , ami a ötödik sor első cellája lesz.
tabla5sor.appendChild(tabla5sorelem1);//hozzáfűzöm az ötödik sorhoz
tabla5sorelem1.innerHTML = otsorObj.tabla5sorcella; // a cella tartalma az otsorObj tabla5sorcella tulajdonságának értékével lesz feltöltve.


const tabla5sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a ötödik sor második cellája lesz.
tabla5sor.appendChild(tabla5sorelem2);//hozzáfűzöm az ötödik sorhoz
tabla5sorelem2.innerHTML = otsorObj.tabla5sorcella1;// a cella tartalma az otsorObj tabla5sorcella1 tulajdonságának értékével lesz feltöltve.




const hatodiksorObj = {//a hatodiksorObj objektum létrehozása
    tabla6sorcella: `II. Rákoczi Ferenc`, //hatodiksorObj tabla6sorcella tulajdonságának értéket adunk
    tabla6sorcella1: `A szabadságharc kezdete`,//hatodiksorObj tabla6sorcella1 tulajdonságának értéket adunk
    tabla6sorcella2: `1703`,//hatodiksorObj tabla6sorcella2 tulajdonságának értéket adunk
};


//6.sor
const tabla6sor = document.createElement(`tr`);// létrehozok egy tableRow elemet a táblázatom 6. sorának
tablatest.appendChild(tabla6sor);//hozzáfűzöm a táblázathoz

const tabla6sorelem1 = document.createElement(`td`)//létrehozok egy td elemet , ami a hatodik sor első cellája lesz.
tabla6sor.appendChild(tabla6sorelem1);// az újonnan létrehozott elemet hozzáfűzöm a hatodik sorhoz
tabla6sorelem1.rowSpan = 2; // a 6. sor első elemének rowspan tulajdonságának megadjuk a 2 értéket
tabla6sorelem1.innerHTML = hatodiksorObj.tabla6sorcella; // a cella a hatodiksorObj tabla6sorcella tulajdonságának értékével lesz feltöltve.

const tabla6sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a hatodik sor második cellája lesz.
tabla6sor.appendChild(tabla6sorelem2);// az újonnan létrehozott elemet hozzáfűzöm a hatodik sorhoz
tabla6sorelem2.innerHTML = hatodiksorObj.tabla6sorcella1; // a cella a hatodiksorObj tabla6sorcella1 tulajdonságának értékével lesz feltöltve.

const tabla6sorelem3 = document.createElement(`td`);//létrehozok egy td elemet , ami a hatodik sor harmadik cellája lesz.
tabla6sor.appendChild(tabla6sorelem3);// az újonnan létrehozott elemet hozzáfűzöm a hatodik sorhoz
tabla6sorelem3.innerHTML = hatodiksorObj.tabla6sorcella2;// a cella a hatodiksorObj tabla6sorcella2 tulajdonságának értékével lesz feltöltve.




const hetediksorObj = {// a hetediksorObj objektum deklarálása
    tabla7sorcella: `A szabadságharc vége`,//hetediksorObj tabla7sorcella tulajdonságának értéket adunk
    tabla7sorcella1: `1711`,//hetediksorObj tabla7sorcella1 tulajdonságának értéket adunk
}



//6-7. összekapcsolódó sorok
//Mivel a 6. sor első elemének a rowspant kettőre állítottuk  a 6-7. sor összefügg
const tabla7sor = document.createElement(`tr`);// létrehozok egy tableRow elemet a táblázatom 7. sorának
tablatest.appendChild(tabla7sor);//hozzáfűzöm utolsó sorként a táblázathoz.


const tabla7sorelem1 = document.createElement(`td`);//létrehozok egy td elemet , ami a hetedik sor első cellája lesz.
tabla7sor.appendChild(tabla7sorelem1);//hozzáfűzöm az elemet az utolsó sorhoz
tabla7sorelem1.innerHTML  = hetediksorObj.tabla7sorcella;// a cella a hetediksorObj tabla7sorcella tulajdonságának értékével lesz feltöltve.

const tabla7sorelem2 = document.createElement(`td`);//létrehozok egy td elemet , ami a hetedik sor második cellája lesz.
tabla7sor.appendChild(tabla7sorelem2);//hozzáfűzöm az elemet az utolsó sorhoz
tabla7sorelem2.innerHTML = hetediksorObj.tabla7sorcella1;// a cella a hetediksorObj tabla7sorcella1 tulajdonságának értékével lesz feltöltve.


