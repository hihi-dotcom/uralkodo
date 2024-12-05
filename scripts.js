const array = [
    { // az array tömb első elemének létrehozása
        Uralkodo_name: `I. István`,//értéket adunk az array tömb első elemének Uralkodo_name tulajdonságának(objektum tulajdonság, aminek string értéket adunk)
        esemeny: `Koronázás`,//értéket adunk az array tömb első elemének esemeny tulajdonságának(objektum tulajdonság, aminek értéke string)
        evszam: `1000`,//értéket adunk az array tömb első elemének evszam tulajdonságának  (objektum tulajdonság, aminek string értéket adunk)
        esemeny2: `Pannonhalmi apátság megalapítása`, //értéket adunk a tömbünk első elemének esemeny2 tulajdonságának(objektum tulajdonság, aminek string értéket adunk)
        evszam2: `1001`//értéket adunk a tömbünk első elemének evszam2 tulajdonságának (objektum tulajdonság, aminek string értéket adunk)
    },
    {// az array tömb második elemének létrehozása
        Uralkodo_name: `IV. Béla`,// array tömb második elemének Uralkodo_name tulajdonságának értéket adunk(objektum tulajdonság, aminek string értéket adunk)
        esemeny: `tatárjárás`,//az array tömbünk második elemének esemeny tulajdonságának értéket adunk(objektum tulajdonság, aminek string értéket adunk)
        evszam: `1241-1242`// a tömbünk második elemének evszam tulajdonságához értéket adunk(objektum tulajdonság, aminek string értéket adunk)
    },
    {// az array tömb harmadik elemének deklarációja
        Uralkodo_name: `Mátyás király`,// a tömbünk harmadik elemének Uralkodo_name tulajdonságához értéket rendelek(objektum tulajdonság,aminek string értéket adunk)
        esemeny: `Bécs elfoglalása`,// az arrayem harmadik elemének esemeny tulajdonságához értéket adok(objektum tulajdonság, aminek string értéket adunk)
        evszam: `1485`,// array tömb harmadik elemének evszam tulajdonságának értékadás(objektum tulajdonság, aminek string értéket adunk)
        esemeny2: `Kenyérmezei csata`, //az array nevű tömböm harmadik elemének esemeny2 tulajdonságának értéket adok(objektum tulajdonság, aminek string értéket adunk)
        evszam2: `1479`//a tömböm harmadik elemének evszam2 tulajdonságának értéket adunk(objektum tulajdonság, aminek string értéket adunk)
    },
    {// az array tömb negyedik elemének deklarációja
        Uralkodo_name: `II. Rákóczi Ferenc`, // a tömböm negyedik elemének Uralkodo_name tulajdonságához értéket rendelek(objektum tulajdonság, aminek string értéket adunk)
        esemeny: `A szabadságharc kezdete`,// az array-em negyedik elemének esemeny tulajdonságának értéket adok(objektum tulajdonság, aminek string értéket adunk)
        evszam: `1703`,//az array nevű tömböm negyedik tagjának evszam tulajdonságának értékadás(objektum tulajdonság, aminek string értéket adunk)
        esemeny2: `A szabadságharc vége`,// a tömböm negyedik elemének esemeny2 tulajdonságának adok értéket(objektum tulajdonság, aminek string értéket adunk)
        evszam2: `1711` // az array-em negyedik tagjának evszam2_rakoczi tulajdonságának értéket adok(objektum tulajdonság, aminek string értéket adunk)
    },


];



//táblázat generálása globális változókkal
const tabla = document.createElement(`table`); //Létrehozok egy table elemet, ami a táblázatomat fogja tartalmazni.(HTMLelement)
const tablafej = document.createElement(`thead`); //Létrehozok egy tablehead elemet, ami a táblázat fejlécét fogja tartalmazni.(HTMLelement)
const tablatest = document.createElement(`tbody`);//Létrehozok egy tablebody elementet, mely a táblázatom törzsét(sorait) fogja tartalmazni(HTMLelement)
document.body.appendChild(tabla); // a table elemet hozzáfűzöm a HTML dokumentumhoz.
tabla.appendChild(tablafej); // a thead elemet hozzáfűzöm a table elemhez
tabla.appendChild(tablatest);// a table body elementet hozzáfűzöm a táblázatomhoz


//css 
const colgroup = document.createElement(`colgroup`);//létrehozok egy colgroup elemet, ami a táblázat oszloponkénti stílusbeállítására alkalmas.(HTMLelement)
tabla.appendChild(colgroup);//a colgroup elemet hozzáfűzöm a táblázathoz

const col1 = document.createElement(`col`);//létrehozok egy col elmet, amivel a táblázat első oszlopának stílusát állítom be.
colgroup.appendChild(col1); //hozzáfűzöm a colgroup elemhez (HTMLelement)
col1.classList.add(`colored_column`);//hozzáadok az elemhez egy osztálykijelölőt, aminek a segítségével az 1. oszlop színe megváltozik

const col2 = document.createElement(`col`);//létrehozok egy col elmet, a táblázatom középső oszlopának, mivel a colok egymás alatt jelképezik a táblázat három oszlopát(HTMLelement)
colgroup.appendChild(col2);//hozáfűzöm a colgrouphoz ezt az elemet

const col3 = document.createElement(`col`);//létrehozom az utolsó col elemet, amivel a táblázatom utolsó oszlopának a stílusát állítom be(HTMLelement)
colgroup.appendChild(col3);//hozzáfűzöm ezt is a colgroup elemhez
col3.classList.add(`colored_column`); //ezt is ellátom a megfelelő osztálykijelölővel, hogy a stílus a feladatnak megfelelően megváltozzon


const fejcellak = { //létrehozom a fejcellak objektumot, ami a fejléc értékeit fogja tartalmazni(öszetett objektum)
    fejcella1label: `Uralkodó`, //a fejcellak fejcella1label tulajdonságának értéket adunk(objektum tulajdonság, aminek string értéket adunk)
    fejcella2label: `Esemény`,// értékadás a fejcellak fejcella2label tulajdonságának(objektum tulajdonság, aminek string értéket adunk)
    fejcella3label: `Évszám`,//fejcellak fejcella3label tulajdonságának értékadás(objektum tulajdonság, aminek string értéket adunk)
}

const fejrow = document.createElement(`tr`); //létrehozok egy tablerow elemet ami majd a fejléc sora lesz(HTMLelement)
tablafej.appendChild(fejrow);//hozzáadom ezt a tr elemet a thead elemhez

const fejcella1 = document.createElement(`th`);//létrehozok egy th elemet ami a táblázatom fejlécének első cellája lesz.(HTMLelement)
fejrow.appendChild(fejcella1);//hozzáfűzöm ezt a th elemet a fentebb deklarált tr elemhez (a fejléc sorához)
fejcella1.innerHTML = fejcellak.fejcella1label; // a cella tartalma a fejcellak objektum első fejcella1label tulajdonságának értéke lesz


const fejcella2 = document.createElement(`th`);//létrehozok egy th elemet ami a táblázatom fejlécének a második cellája lesz.(HTMLelement)
fejrow.appendChild(fejcella2);//hozzáfűzöm ezt a th elemet a tr elemhez (a fejléc sorához)
fejcella2.innerHTML = fejcellak.fejcella2label; // a cella tartalma a fejcellak objektum  fejcella2label tulajdonságának értéke lesz

const fejcella3 = document.createElement(`th`);//létrehozok egy th elemet ami a táblázatom fejlécének a harmadik cellája lesz.(HTMLelement)
fejrow.appendChild(fejcella3);//hozzáfűzöm ezt a th elemet a fejléc sorához
fejcella3.innerHTML = fejcellak.fejcella3label; // a cella tartalma a fejcellak objektum  fejcella3label tulajdonságának értéke lesz


for(const jelenElem of array){//végig iterálunk a tömbön egy növekményes for ciklussal
    //a táblázat törzsének sorai
    const sor = document.createElement(`tr`);//létrehozok egy tableRow elemet(HTMLelement)
    tablatest.appendChild(sor);//Hozzáfűzöm ezt a sort a táblázatom törzséhez.

    const sorUralkodoName  = document.createElement(`td`);//deklarálok egy td elemet(HTMLelement)
    sorUralkodoName.innerHTML  = jelenElem.Uralkodo_name;// a cella tartalma a jelenlegi elem Uralkodo_name tulajdonságának értéke lesz
    sor.appendChild(sorUralkodoName);//Hozzáfűzöm a most deklarált td elemet a fentebb létrehozott sorhoz

    const sorEsemeny  = document.createElement(`td`); //létrehozok ismét egy td elemet(HTMLelement)
    sorEsemeny.innerHTML = jelenElem.esemeny;// a cella tartalma az éppen aktuális elem esemeny tulajdonságának értéke lesz
    sor.appendChild(sorEsemeny);// Hozzáfűzöm ezt az elemet a korábban létrehozott soromhoz.

    
    const  sorEvszam  = document.createElement(`td`);//létrehozok egy td elemet az evszamnak(HTMLelement)
    sorEvszam.innerHTML = jelenElem.evszam;// a cella tartalma az éppen aktuális elem evszam tulajdonsága lesz
    sor.appendChild(sorEvszam);// Rögtön hozzáfűzöm ezt az elemet a sorhoz.

    if(jelenElem.esemeny2 !== undefined && jelenElem.evszam2 !== undefined){//ha az aktuális objektumnak nincs esemeny2 és evszam2 tulajdonsága akkor az elágazáson belüli kód fut le
        sorUralkodoName.rowSpan = 2;// a táblázat első cellájának rowSpan tulajdonságát 2-re állítjuk
        const sor2 = document.createElement(`tr`); // létrehozok még egy tableRow elementet a második eseménynek és évszámnak(HTMLelement)
        tablatest.appendChild(sor2);//hozzáfűzöm ezt a sort a táblázatom törzséhez

    
        const sorEsemeny2 = document.createElement(`td`); //létrehozok egy td elemet a második eseménynek ami majd egy új sorba fog kerülni(HTMLelement)
        sorEsemeny2.innerHTML = jelenElem.esemeny2;// a cella tartalma az éppen aktuális objektum esemeny2 tulajdonságának értéke lesz
        sor2.appendChild(sorEsemeny2);//hozzáfűzöm ezt az elemet az újonnan deklarált soromhoz
    
        const sorEvszam2  =document.createElement(`td`);//létrehozok egy td elemet a második évszámnak ami majd az új sorba fog kerülni megint(HTMLelement)
         sorEvszam2.innerHTML = jelenElem.evszam2;// a cella tartalma az éppen aktuális objektum evszam2 tulajdonságához rendelt érték lesz, ha van az objektumnak ilyen tulajdonsága.
        sor2.appendChild(sorEvszam2);//hozzáfűzöm ezt az elemet az új soromhoz.
    }


  




    




};
