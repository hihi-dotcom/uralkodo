const array = [
    { // az array tömb első elemének létrehozása
        Uralkodo_name: `I. István`,//értéket adunk az array tömb első elemének Uralkodo_name tulajdonságának
        esemeny: `Koronázás`,//értéket adunk az array tömb első elemének esemeny tulajdonságának
        evszam: `1000`,//értéket adunk az array tömb első elemének evszam tulajdonságának  
        esemeny2: `Pannonhalmi apátság megalapítása`, //értéket adunk a tömbünk első elemének esemeny2 tulajdonságának
        evszam2: `1001`//értéket adunk a tömbünk első elemének evszam2 tulajdonságának 
    },
    {// az array tömb második elemének létrehozása
        Uralkodo_name: `IV. Béla`,// array tömb harmadik elemének Uralkodo_name tulajdonságának értéket adunk
        esemeny: `tatárjárás`,//az array tömbünk harmadik elemének esemeny tulajdonságának értéket adunk
        evszam: `1241-1242`// a tömbünk harmadik elemének evszam tulajdonságához értéket adunk
    },
    {// az array tömb harmadik elemének deklarációja
        Uralkodo_name: `Mátyás király`,// a tömbünk negyedik elemének Uralkodo_name tulajdonságához értéket rendelek
        esemeny: `Bécs elfoglalása`,// az arrayem negyedik elemének esemeny tulajdonságához értéket adok
        evszam: `1485`,// array tömb negyedik elemének evszam tulajdonságának értékadás
        esemeny2: `Kenyérmezei csata`, //az array nevű tömböm 4. elemének esemeny2 tulajdonságának értéket adok
        evszam2: `1479`//a tömböm 4. elemének evszam2 tulajdonságának értéket adunk
    },
    {// az array tömb negyedik elemének deklarációja
        Uralkodo_name: `II. Rákóczi Ferenc`, // a tömböm hatodik elemének Uralkodo_name tulajdonságához értéket rendelek
        esemeny: `A szabadságharc kezdete`,// az array-em hatodik elemének esemeny tulajdonságának értéket adok
        evszam: `1703`,//az array nevű tömböm hatodik tagjának evszam tulajdonságának értékadás
        esemeny2: `A szabadságharc vége`,// a tömböm 6.(utolsó) elemének esemeny2 tulajdonságának adok értéket
        evszam2: `1711` // az array-em 6. tagjának evszam2_rakoczi tulajdonságának értéket adok
    },


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


const fejcellak = { //létrehozom a fejcellak objektumot, ami a fejléc értékeit fogja tartalmazni
    fejcella1label: `Uralkodó`, //a fejcellak fejcella1label tulajdonságának értéket adunk
    fejcella2label: `Esemény`,// értékadás a fejcellak fejcella2label tulajdonságának
    fejcella3label: `Évszám`,//fejcellak fejcella3label tulajdonságának értékadás
}

const fejrow = document.createElement(`tr`); //létrehozok egy tablerow elemet ami majd a fejléc sora lesz
tablafej.appendChild(fejrow);//hozzáadom ezt a tr elemet a thead elemhez

const fejcella1 = document.createElement(`th`);//létrehozok egy th elemet ami a táblázatom fejlécének első cellája lesz.
fejrow.appendChild(fejcella1);//hozzáfűzöm ezt a th elemet a fentebb deklarált tr elemhez (a fejléc sorához)
fejcella1.innerHTML = fejcellak.fejcella1label; // a cella tartalma a fejcellak objektum első fejcella1label tulajdonságának értéke lesz


const fejcella2 = document.createElement(`th`);//létrehozok egy th elemet ami a táblázatom fejlécének a második cellája lesz.
fejrow.appendChild(fejcella2);//hozzáfűzöm ezt a th elemet a tr elemhez (a fejléc sorához)
fejcella2.innerHTML = fejcellak.fejcella2label; // a cella tartalma a fejcellak objektum  fejcella2label tulajdonságának értéke lesz

const fejcella3 = document.createElement(`th`);//létrehozok egy th elemet ami a táblázatom fejlécének a harmadik cellája lesz.
fejrow.appendChild(fejcella3);//hozzáfűzöm ezt a th elemet a fejléc sorához
fejcella3.innerHTML = fejcellak.fejcella3label; // a cella tartalma a fejcellak objektum  fejcella3label tulajdonságának értéke lesz


for(const jelenElem of array){//végig iterálunk a tömbön egy növekményes for ciklussal
    //a táblázat törzsének sorai
    const sor = document.createElement(`tr`);//létrehozok egy tableRow elemet
    tablatest.appendChild(sor);//Hozzáfűzöm ezt a sort a táblázatom törzséhez.

    const sorUralkodoName  = document.createElement(`td`);//deklarálok egy td elemet
    sorUralkodoName.innerHTML  = jelenElem.Uralkodo_name;// a cella tartalma a jelenlegi elem Uralkodo_name tulajdonságának értéke lesz
    sor.appendChild(sorUralkodoName);//Hozzáfűzöm a most deklarált td elemet a fentebb létrehozott sorhoz

    const sorEsemeny  = document.createElement(`td`); //létrehozok ismét egy td elemet
    sorEsemeny.innerHTML = jelenElem.esemeny;// a cella tartalma az éppen aktuális elem esemeny tulajdonságának értéke lesz
    sor.appendChild(sorEsemeny);// Hozzáfűzöm ezt az elemet a korábban létrehozott soromhoz.

    
    const  sorEvszam  = document.createElement(`td`);
    sorEvszam.innerHTML = jelenElem.evszam;// a cella tartalma az éppen aktuális elem evszam tulajdonsága lesz
    sor.appendChild(sorEvszam);// Rögtön hozzáfűzöm ezt az elemet a sorhoz.

    if(jelenElem.esemeny2 !== undefined && jelenElem.evszam2 !== undefined){
        sorUralkodoName.rowSpan = 2;
        const sor2 = document.createElement(`tr`); // létrehozok még egy tableRow elementet a második eseménynek és évszámnak
        tablatest.appendChild(sor2);//hozzáfűzöm ezt a sort a táblázatom törzséhez

    
        const sorEsemeny2 = document.createElement(`td`); //létrehozok egy td elemet a második eseménynek ami majd egy új sorba fog kerülni
        sorEsemeny2.innerHTML = jelenElem.esemeny2;// a cella tartalma az éppen aktuális objektum esemeny2 tulajdonságának értéke lesz
        sor2.appendChild(sorEsemeny2);//hozzáfűzöm ezt az elemet az újonnan deklarált soromhoz
    
        const sorEvszam2  =document.createElement(`td`);//létrehozok egy td elemet a második évszámnak ami majd az új sorba fog kerülni megint
         sorEvszam2.innerHTML = jelenElem.evszam2;// a cella tartalma az éppen aktuális objektum evszam2 tulajdonságához rendelt érték lesz, ha van az objektumnak ilyen tulajdonsága.
        sor2.appendChild(sorEvszam2);//hozzáfűzöm ezt az elemet az új soromhoz.
    }


  




    




};
