//táblázat generálása globális változókkal
const tabla = document.createElement(`table`); //Létrehozok egy table elemet, ami a táblázatomat fogja tartalmazni.(HTMLelement)
const tablafej = document.createElement(`thead`); //Létrehozok egy tablehead elemet, ami a táblázat fejlécét fogja tartalmazni.(HTMLelement)
const tablatest = document.createElement(`tbody`);//Létrehozok egy tablebody elementet, mely a táblázatom törzsét(sorait) fogja tartalmazni(HTMLelement)
document.body.appendChild(tabla); // a table elemet hozzáfűzöm a HTML dokumentumhoz.
tabla.appendChild(tablafej); // a thead elemet hozzáfűzöm a table elemhez
tabla.appendChild(tablatest);// a table body elementet hozzáfűzöm a táblázatomhoz



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


/**
 * 
 * @param {Array} array 
 */
function renderTabla(array){// definiálom a renderTabla függvényt, itt a függvényünk bemeneti paraméterként a tömbünket kapja meg, amivel később dolgozik is, és ezt várja minden egyes újabb függvényhívásakor is. átalakítható lenne,ha a sokszor ismételt lépéseket is kiszerveznénk több függvénybe akár.
   
    for(const jelenElem of array){//végig iterálunk a tömbön egy növekményes for ciklussal
        //a táblázat törzsének sorai
        const sor = document.createElement(`tr`);//létrehozok egy tableRow elemet(HTMLelement)
        tablatest.appendChild(sor);//Hozzáfűzöm ezt a sort a táblázatom törzséhez.

        const sorUralkodoName  = document.createElement(`td`);//deklarálok egy td elemet(HTMLelement) az Uralkodó nevének
        sorUralkodoName.innerHTML  = jelenElem.Uralkodo_name;// a cella tartalma a jelenlegi elem Uralkodo_name tulajdonságának értéke lesz
        sor.appendChild(sorUralkodoName);//Hozzáfűzöm a most deklarált td elemet a fentebb létrehozott sorhoz

        const sorEsemeny  = document.createElement(`td`); //létrehozok ismét egy td elemet(HTMLelement) az elso eseménynek
        sorEsemeny.innerHTML = jelenElem.esemeny;// a cella tartalma az éppen aktuális elem esemeny tulajdonságának értéke lesz
        sor.appendChild(sorEsemeny);// Hozzáfűzöm ezt az elemet a korábban létrehozott soromhoz.

        
        const  sorEvszam  = document.createElement(`td`);//létrehozok egy td elemet az evszamnak(HTMLelement)
        sorEvszam.innerHTML = jelenElem.evszam;// a cella tartalma az éppen aktuális elem evszam tulajdonsága lesz
        sor.appendChild(sorEvszam);// Rögtön hozzáfűzöm ezt az elemet a sorhoz.

        if(jelenElem.esemeny2 !== undefined || jelenElem.evszam2 !== undefined)
        {//ha az aktuális objektumnak nincs esemeny2 és evszam2 tulajdonsága akkor az elágazáson belüli kód fut le
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
    }
};

renderTabla(array);//meghívom a renderTabla függvényt

const form = document.getElementById(`form`);// elkérem a HTMLelementet, ami a form id-vel van ellátva (HTMLelement)

form.addEventListener('submit', function(e){//deklarálom a fentebb elkért HTMLelement eseménykezelőjét
    e.preventDefault();//megakadályozom hogy a böngésző standard működése lefusson a submit esetén
    const uralkodo_NevElement = document.getElementById(`uralkodo_nev`); // elkérem a HTMLelementet, amely az uralkodo_nev id-val van ellátva. (HTMLinputfield)
    const esemeny1_Element = document.getElementById(`esemeny1`); //elkérem azt a HTMLelementet, ami az esemeny1 id-val van felvértezve.(HTMLelement)
    const evszam1_Element = document.getElementById(`evszam1`); //elkérem azt a HTMLelementet, ami evszam1 id-val van felszerelve.(HTMLinputfield)
    const esemeny2_Element = document.getElementById(`esemeny2`);// elkérem azt a HTMLelementet, ami az esemeny2 id-val van ellátva.(HTMLinputfield)
    const evszam2_Element = document.getElementById(`evszam2`);// elkérem azt a HTMLelementet, ami az evszam2 id-val van ellátva.(HTMLinputfield)

    const ezaForm = e.currentTarget; // az event currentTarget tulajdonsága a formunkat tartalmazza és ezt eltároljuk egy lokális változóban
    
    const errorElements = ezaForm.querySelectorAll(`.error`); // a formunkon belüli összes error classal ellátott htmlelemet elkérjük

    for(const errorElem of errorElements){ //Végigiterálunk a visszakapott error class-sal ellátott HTML elementeken
        errorElem.innerHTML = ``;//töröljük a mostani tartalmat
    };

    let valid = true; // a valid változó értékét létrehozáskor igaznak állítjuk be
    if(!validateFormHTMLinputMezo(uralkodo_NevElement,`Az Uralkodó nevének megadása kötelező!`)){//Ha a validateFormHTMLinputMezo függvény hamissal tér vissza az uralkodo_Nev HTMLElement esetén
            valid = false;// a valid változó értékét hamis-ra állítjuk
    };

    if(!validateFormHTMLinputMezo(esemeny1_Element, `Az esemény megadása kötelező`)){//Ha a validateFormHTMLinputMezo függvény hamissal tér vissza az esemeny1 HTMLElement esetén, ráfordul az elágazásra
            valid = false;// a valid változó értékét hamis-ra állítjuk ismét
    };

    if(!validateFormHTMLinputMezo(evszam1_Element, `Az évszámot is kötelező megadni!`)){//Ha a validateFormHTMLinputMezo függvény hamissal tér vissza az evszam1 HTMLElement esetén
            valid = false;// a valid változónak hamis értéket adunk
    };
    
    if(!complexValidation(esemeny2_Element, evszam2_Element, `Minden eseményhez vagy évszámhoz tartozik egy évszám vagy esemény!`)){//Ha a complexValidation függvény hamissal tér vissza az esemeny2 és evszam2 HTMLelementek vizsgálata esetén
        valid = false;// valid változónak hamis értéket adunk
    };

    if(valid){//ellenőrizzük,hogy sikeres volt-e a validáció, és akkor fut le a lentebb látható kód
        //ha a valid változó értéke még mindig igaz, akkor
        const Uralkodo_Nev = uralkodo_NevElement.value;  //az uralkodo_NevElement értékét beleteszem egy lokális változóba
        const Esemeny1 = esemeny1_Element.value; //az esemeny1_Element értékét belerakom egy lokális változóba (HTMLinputfieldbe írt szövegre mutat)
        const Evszam1 = evszam1_Element.value;  // az evszam1_Element értékét beleteszem egy lokális változóba (HTMLinputfieldbe írt szövegre értékre mutat)
        const Esemeny2 = esemeny2_Element.value;// az esemeny2_Element értékét beleteszem egy lokális változóba(HTMLinputfieldbe írt szövegre vagy értékre mutat)
        const Evszam2 = evszam2_Element.value; // az  evszam2_Element értékét beleteszem egy lokális változóba.(HTMLinputfieldbe írt szövegre értékre mutat)
        const newUralkodo = {// létehozok egy új objektumot, ezt építjük fel az inputfieldekbe beírt értékekből
            Uralkodo_name: Uralkodo_Nev, // az uj objektum uralkodo értéke az uralkodo_Nev lesz
            esemeny: Esemeny1, // az új elem esemeny1 értéke az Esemeny1 lesz
            evszam: Evszam1, // az új objektum evszam1 értéke az Evszam2 lesz
            esemeny2: Esemeny2, // az új objektum esemeny2 értéke az Esemeny2 lesz
            evszam2: Evszam2, // az új objektum evszam2 értéke az Evszam2 értéke lesz
        };
        if(newUralkodo.esemeny2 === `` || newUralkodo.evszam2 === ``){
            newUralkodo.esemeny2 = undefined;
            newUralkodo.evszam2 = undefined;
            //az értékadás során, ebben az elágazásban vizsgálom, hogy az esemeny2_Element és evszam2_Element értéke üres string-e, és ha ez van, akkor ezeknek a változók undefined értéket kapnak, mivel fentebb, úgy írtam meg a renderelési logikát,hogy ha vagy az egyik vagy a másik értéke undefined ne fűzzön hozzon létre egy felesleges sort.
        };
        array.push(newUralkodo); // hozzáadom a tömbömhöz az újonnan deklarált objektumot 
        tablatest.innerHTML = ``; // a táblázatom tartalmát egy üres stringgel teszem egyenlővé, hogy törlödjön a tábla és ne renderelődjenek újra a már meglévő elemek
        renderTabla(array); // újra meghívom a renderTabla függvényt
        ezaForm.reset();    
    };
});
  
/**
 * 
 * @param {HTMLElement} inputhtmlElem 
 * @param {string} errorUzenet 
 */
function validateFormHTMLinputMezo(inputhtmlElem, errorUzenet){ //definiáljuk a validateFormHTMLinputMezo függvényt, ami két bemeneti paramétert vár egy inputhtmlElemet, ami egy HTMLElement típusú bemeneti paraméternek kell lennie, illetve egy error üzenetet, ami pedig egy string típus lesz
    let valid = true; //létrehozzuk a valid lokális változót true értékkel
    if(inputhtmlElem === ``){ //ha a paraméterként kapott beviteli mező üres az elágazás törzsében lévő kód fut le
        const parentElem = inputhtmlElem.parentElement;//eltároljuk egy változóba a kapott HTMLElementnek a parentElement tulajdonságát

        const errorPlace = parentElem.querySelector(`.error`); // a paraméterként kapott beviteli mező parentElement divjében megkeressük az első olyan elemet, amin rajta van az error class

        if(errorPlace != undefined){ //Ha találunk ilyen mezőt, akkor nem undefined
            errorPlace.innerHTML = errorUzenet; //Akkor beleírjuk a hibaüzenetünket, amit bemeneti paraméterként várunk
        }
        valid = false;// a valid lokális változó étékét hamisra állítjuk
    };
    return valid; // visszatérünk a valid változóval, ami természetesen, akkor hamis,ha nem ment át a validáció, egyébként pedig igazzal tér vissza.
}


/**
 * 
 * @param {HTMLElement} HTMlinput1 
 * @param {HTMLElement} HTMlinput2 
 * @param {string} errorMessage 
 * @returns 
 */
function complexValidation(HTMlinput1, HTMlinput2, errorMessage){//definiáljuk a complexValidation függvényt ez három bemenetet vár kettő HTMlinputifieldet, aminek az értékeit vizsgáljuk és egy error messaget amit visszaad a documentben az error classal
    let valid = true;
    if(HTMlinput1.value === `` && HTMlinput2.value !== ``){ // feltételes validáció, nem minden esetben fut le, de ha a második évszám üres és a második esemény nem az lefut, ugyanakkor, ha egyik sincs kitöltve az objektumunk felkerül a táblázatunkba
        const szuloElem = HTMlinput1.parentElement;//elrakjuk egy lokális változóba a Második évszám beviteli mezőjének a parentElement tulajdonságát, ami most a div class="field"
        const errorHely = szuloElem.querySelector('.error');// ebben a parentElementben megkeressük az első olyan elemet ami rendelkezik az error classal

        if(errorHely != undefined){ // Ha van ilyen mező, ez sem undefined
            errorHely.innerHTML = errorMessage; // Beleírjuk a csodás hibaüzenetünket
        }
        
        valid = false; // a valid változó értékét falsera állítjuk, ez a folyamatos hamisra állítás egy diszkrét módja, annak hogy minden egyes validáció esetnél hamissal térünk vissza nyilván egy return is megoldaná ezt
    };
    if(HTMlinput2.value === `` && HTMlinput1.value !== ``){// feltételes validáció, nem minden esetben fut le, de ha a második esemény üres és a második évszám nem az lefut, ugyanakkor, ha egyik sincs kitöltve az objektumunk felkerül a táblázatunkba
        const szuloElem = HTMlinput2.parentElement; //elrakjuk egy lokális változóba a Második esemény beviteli mezőjének a parentElement propertyjét, ami most a div class="field"
        const errorHely = szuloElem.querySelector('.error'); // A második esemény parentElement divjében megkeressük a legelső olyan elemet amin rajta van az error class

        if(errorHely != undefined){ // ha ez az elem létezik, tehát nem undefined
            errorHely.innerHTML = errorMessage; //Akkor beleírjuk a csodás hibaüzenetünket
        }
        valid = false; //a valid változó értékét természetesen itt is hamisra állítjuk

    };
    return valid;
};

    





