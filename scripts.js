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

/**
 * 
 */
function generateForm(){ //létrehozom a generateForm függvényt, amelyben egyesével kigeneráljuk a korábbi html form alapján annak a sorait,hogy a végén képesek legyünk ismételten egy új objektumot hozzáadni a csodás táblázatunkba
    const form  = document.createElement(`form`); // létrehozok egy form HTML elemet
    form.id = `form`;// id-nek megadom neki a formot, ami az addEventListener miatt kulcsfontosságú hiszen enélkül nem tudnánk hozzáadni egy új uralkodót a táblázatunkhoz.
    document.body.appendChild(form); // a fentebb létrehozott form elemünket hozzáfűzzük a HTML dokumentumunk törzséhez
    

    const div1  = document.createElement(`div`); //létrehozok egy div elemet ami a formom első sora lesz
    div1.classList.add(`field`); //hozzáfűzöm a field osztályt

    const label1 = document.createElement(`label`); // létrehozok egy label elemet
    label1.htmlFor  = `uralkodo_nev`; // a for attribútum értékének megadom az uralkodo_nevet
    label1.innerText  = `Uralkodó neve: `;// az Innertextje pedig az Uralkodó neve: lett
    div1.appendChild(label1);// ezt a labelt hozzáfűzöm a div1-hez ami  a formom első sora


    const input1  = document.createElement(`input`);//létrehozok egy input elemet
    input1.type  = `text`;// ennek az inputnak típusként megadom a textet, tehát szövegként lesz kezelve amit beleírunk
    input1.id  = `uralkodo_nev`;//id-nek itt is megadtam az uralkodo_nevet
    input1.name  = `uralkodo_nev`;// namenek is
    div1.appendChild(input1);// ezt az inputot hozzáfűzöm a div1-hez ami a formom első sora

    const div_error1 = document.createElement(`div`);//létrehozok egy div elemet ismét, ami a validációs üzenetek helye
    div_error1.classList.add(`error`);  // ezt ellátom az error osztály kijelölővel
    div1.appendChild(div_error1);// és ezt is hozzáfűzöm természetesen a form első sorához.



    const div2  = document.createElement(`div`);//létrehozok egy div elemet ami a formom második sora lesz
    div2.classList.add(`field`);//hozzáfűzöm a field osztályt


    const label2 = document.createElement(`label`);// létrehozok egy label elemet ismét
    label2.htmlFor  = `esemeny1`;// a for attribútum értékének megadom az esemeny1-et
    label2.innerText  = `Első esemény:`;// az Innertextje pedig az Első esemény: lett
    div2.appendChild(label2);// ezt a labelt hozzáfűzöm a formom második sorához

    
    const input2  = document.createElement(`input`);//létrehozok egy input elemet
    input2.type  = `text`;// ennek az inputnak típusként megadom a textet, tehát szövegként lesz kezelve amit beleírunk
    input2.id  = `esemeny1`;//id-nek itt is megadtam az esemeny1-et
    input2.name  = `esemeny1`;// namenek is
    div2.appendChild(input2);// ezt az inputot hozzáfűzöm a formom második sorához
    const div_error2 = document.createElement(`div`);//létrehozok egy div elemet ismét, ami a validációs üzenetek helye
    div_error2.classList.add(`error`);  // ezt ellátom az error osztály kijelölővel
    div2.appendChild(div_error2);// és ezt is hozzáfűzöm természetesen a form második sorához.

    const div3  = document.createElement(`div`);//létrehozok egy div elemet ami a formom harmadik sora lesz
    div3.classList.add(`field`);//ellátom a field osztállyal

    const label3 = document.createElement(`label`);// létrehozok egy label elemet ismét
    label3.htmlFor  = `evszam1`;// a for attribútum értékének megadom az evszam1-et
    label3.innerText  = `Első esemény évszáma: `;// az Innertextje pedig az Első esemény évszáma: lett
    div3.appendChild(label3);// ezt a labelt hozzáfűzöm a formom harmadik sorához

    const input3  = document.createElement(`input`);//létrehozok egy input elemet megint
    input3.type  = `text`;// ennek az inputnak típusként megadom a textet, tehát szövegként lesz kezelve amit beleírunk
    input3.id  = `evszam1`;//id-nek itt megadtam az evszam1-et(fontos hogy egyezzen a label for tulajdonságával)
    input3.name  = `evszam1`;// namenek is
    div3.appendChild(input3);// ezt az inputot hozzáfűzöm a formom harmadik sorához
    const div_error3 = document.createElement(`div`);//létrehozok egy div elemet ismét, ami a validációs üzenetek helye
    div_error3.classList.add(`error`);  // ezt ellátom az error osztállyal
    div3.appendChild(div_error3);// és ezt is hozzáfűzöm természetesen a form harmadik sorához.


    const div4  = document.createElement(`div`);//létrehozok egy div elemet ami a formom negyedik sora lesz
    div4.classList.add(`.field`);//ellátom a field osztállyal

    const label4 = document.createElement(`label`);// létrehozok egy label elemet
    label4.htmlFor  = `esemeny2`;// a for attribútum értékének megadom az esemeny2-t
    label4.innerText  = `Második esemény: `;// az Innertextje pedig az Második esemény: lett
    div4.appendChild(label4);// ezt a labelt hozzáfűzöm a formom negyedik sorához
    
    const input4  = document.createElement(`input`);//létrehozok egy input elemet a negyedik sorhoz
    input4.type  = `text`;// ennek az inputnak típusként megadom a textet, tehát szövegként lesz kezelve amit beleírunk
    input4.id  = `esemeny2`;//id-nek itt megadtam az esemeny2-t(fontos hogy egyezzen a label for tulajdonságával)
    input4.name  = `esemeny2`;// namenek is
    div4.appendChild(input4);// ezt az inputot hozzáfűzöm a formom negyedik sorához
    const div_error4 = document.createElement(`div`);//létrehozok egy div elemet ismét, ami az error üzenetek helye
    div_error4.classList.add(`error`);  
    div4.appendChild(div_error4);// és ezt is hozzáfűzöm természetesen a form negyedik sorát tartalmazó div elemhez.

    const div5  = document.createElement(`div`);//létrehozok egy div elemet ami a formom utolsó sora lesz
    div5.classList.add(`.field`);//ellátom a field osztálykijelölővel


    const label5 = document.createElement(`label`);// létrehozok egy label elemet
    label5.htmlFor  = `evszam2`;// a for attribútum értékének megadom az evszam2-t
    label5.innerText  = `Második esemény évszáma: `;// az Innertextje pedig az Második esemény évszáma: lett
    div5.appendChild(label5);// ezt a labelt hozzáfűzöm a formom ötödik sorához
    
    
    const input5  = document.createElement(`input`);//létrehozok egy input elemet a ötödik sorhoz
    input5.type  = `text`;// ennek az inputnak típusként megadom a textet, tehát szövegként lesz kezelve amit beleírunk
    input5.id  = `evszam2`;//id-nek itt  megadtam az evszam2-t(fontos hogy egyezzen a label for tulajdonságával)
    input5.name  = `evszam2`;// namenek is
    div5.appendChild(input5);// ezt az inputot hozzáfűzöm a formom ötödik sorához
    const div_error5 = document.createElement(`div`);//létrehozok egy div elemet ismét, ami az error üzenetek helye lesz
    div_error5.classList.add(`error`); // ezt ellátom az error osztállyal
    div5.appendChild(div_error5);// és ezt is hozzáfűzöm természetesen a form ötödik sorát tartalmazó div elemhez. 

    const button = document.createElement(`button`); //létrehozok egy gombot melynek a segítségével tudjuk majd a táblázathoz hozzáadni 
    button.type = `submit`; // ennek a gombnak beállítom a submit típust, ez fontos mivel a form addeventListenerje a submitra hallgat
    button.innerText = `Hozzáadás`; // innerTextnek pedig megkapta a Hozzáadást, mint ahogy korábban a HTML oldalon volt.
    
    form.appendChild(div1); // hozzáfűzöm az első sort a formhoz
    form.appendChild(div2); // hozzáfűzöm a második sort a formhoz
    form.appendChild(div3); // hozzáfűzöm az harmadik sort a formhoz
    form.appendChild(div4); // hozzáfűzöm az negyedik sort a formhoz 
    form.appendChild(div5); // hozzáfűzöm az ötödik sort a formhoz
    form.appendChild(button); // hozzáfűzöm a gombot a formunkhoz
    // fontos a sorrend, mivel ha másképp lenne nem lennének a sorok megfelelő sorrendben és elcsúszna a táblázat.
};

generateForm(); //meghívom a generateForm függvényt




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


/**
 * 
 * @param {Array} array 
 * Végig iterálunk a fentebb létrehozott tömbön és közben létrehozunk egy új sort, ami a táblázat egy sora lesz, annyi sor lesz, ahány objektum van a a tömbünkben ezt hozzáfűzük a táblázattörzséhez és a sor egyes celláinak InnerHTML-je az éppen aktuális objektum egyik tulajdonsága lesz.Van egy elágazás is, mivel néhány objektum nem ugyanolyan mint a többi, ha az egyik objektumnak több tulajdonsága(esemeny2, evszam2) van a többinél egy új sort fűzünk hozzá a táblázatunkhoz és az először létrehozott sor első eleme az az alatti táblázattal lesz egybe vonva hiszen, ezek is az aktuális objektumnak a tulajdonságai lehetnek
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

        if(jelenElem.esemeny2 !== undefined || jelenElem.evszam2 !== undefined) //vizsgáljuk hogy az éppen aktuális elem a tömbünkből rendelkezik-e esemeny2 illetve evszam2 tulajdonságokkal, ha igen akkor hozzáfűzzük a plusz egy sort és lefut az elágazásban található kód
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
  
/**
 * 
 * @param {HTMLElement} inputhtmlElem 
 * @param {string} errorUzenet 
 * @returns {boolean}
 *  visszaadunk egy error üzenetet az első bemeneti paraméter parentElementjében legelső error class-al ellátott elemében ha üres string az inputhtmlElem bemeneti paraméter értéke
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
 * két esetet vizsgálunk
 * egy :
 * az első bemeneti paraméterünk értéke üres sztring a másodiké nem, ilyenkor visszaadunk egy error messaget az első bemeneti parameterunk parentElementjében található legelső error class-al ellátott elemében
 * 
 * két:
 * a második bemeneti paraméterünk értéke üres sztring az elsőé nem, ilyenkor visszaadunk egy error messaget a második bemeneti parameterunk parentElementjében található legelső error class-al ellátott elemében
 */
function complexValidation(HTMlinput1, HTMlinput2, errorMessage){//definiáljuk a complexValidation függvényt ez három bemenetet vár kettő HTMlinputifieldet, aminek az értékeit vizsgáljuk és egy error messaget amit visszaad a documentben az error classal
    let valid = true; // deklarálom a valid változót, melynek célja hogy tároljuk a visszatérési értékünket különböző elágazások esetén, és a végén ezzel a változóval térünk vissza a függvény végén
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
    return valid; //visszatérünk a valid változónkkal ez elengedhetetlen hiszen, enélkül nem működne a validációs elágazás, amit a feltöltésnél írtunk hiszen nem kapna vissza semmit.
};

    





