//táblázat generálása globális változókkal
const tabla = document.createElement(`table`); //Létrehozok egy table elemet, ami a táblázatomat fogja tartalmazni.(HTMLelement)
const tablafej = document.createElement(`thead`); //Létrehozok egy tablehead elemet, ami a táblázat fejlécét fogja tartalmazni.(HTMLelement)
const tablatest = document.createElement(`tbody`);//Létrehozok egy tablebody elementet, mely a táblázatom törzsét(sorait) fogja tartalmazni(HTMLelement)
document.body.appendChild(tabla); // a table elemet hozzáfűzöm a HTML dokumentumhoz.
tabla.appendChild(tablafej); // a thead elemet hozzáfűzöm a table elemhez
tabla.appendChild(tablatest);// a table body elementet hozzáfűzöm a táblázatomhoz

const formarray = [
    {
        htmlFor: `uralkodo_nev`,
        innerText: `Uralkodó neve: `,
        type: `text`,
    },
    {
        htmlFor: `esemeny1`,
        innerText: `Első esemény: `,
        type: `text`,
    },
    {
        htmlFor: `evszam1`,
        innerText: `Első esemény évszáma: `,
        type: `text`,
    },
    {
        htmlFor: `esemeny2`,
        innerText: `Második esemény: `,
        type: `text`,
    },
    {
        htmlFor: `evszam2`,
        innerText: `Második esemény évszáma: `,
        type: `text`,
    }
];

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


generateForm(formarray); //meghívom a generateForm függvényt
renderTabla(array);//meghívom a renderTabla függvényt

const fejcellak = { //létrehozom a fejcellak objektumot, ami a fejléc értékeit fogja tartalmazni(öszetett objektum)
    fejcella1label: `Uralkodó`, //a fejcellak fejcella1label tulajdonságának értéket adunk(objektum tulajdonság, aminek string értéket adunk)
    fejcella2label: `Esemény`,// értékadás a fejcellak fejcella2label tulajdonságának(objektum tulajdonság, aminek string értéket adunk)
    fejcella3label: `Évszám`,//fejcellak fejcella3label tulajdonságának értékadás(objektum tulajdonság, aminek string értéket adunk)
};

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
        if(newUralkodo.esemeny2 === `` || newUralkodo.evszam2 === ``){ //ha az újonnan létrehozott objektumunk evszam2 és esemeny2 értéke üres sztring akkor az értékük undefined lesz,mivel így fog működni megfelőlen az objektum hozzáadás
            newUralkodo.esemeny2 = undefined;//az újonnan létrehozott objektumunk esemeny2 tulajdonságának értékadás
            newUralkodo.evszam2 = undefined; //az újonnan létrehozott objektumunk evszam2 tulajdonságának értékadás
            //az értékadás során, ebben az elágazásban vizsgálom, hogy az esemeny2_Element és evszam2_Element értéke üres string-e, és ha ez van, akkor ezeknek a változók undefined értéket kapnak, mivel fentebb, úgy írtam meg a renderelési logikát,hogy ha vagy az egyik vagy a másik értéke undefined ne fűzzön hozzon létre egy felesleges sort.
        };
        array.push(newUralkodo); // hozzáadom a tömbömhöz az újonnan deklarált objektumot 
        tablatest.innerHTML = ``; // a táblázatom tartalmát egy üres stringgel teszem egyenlővé, hogy törlödjön a tábla és ne renderelődjenek újra a már meglévő elemek
        renderTabla(array); // újra meghívom a renderTabla függvényt
        ezaForm.reset();    // a formunk reset metódusát meghívva kitöröljük az értékeket a form input mezőinől, miután feltöltöttük az adatokat a táblázatunkba (beépített metódus)
    };
});
  




    





