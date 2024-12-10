const form3  = document.createElement(`form`); // létrehozok egy form HTML elemet
form3.id = `form`;// id-nek megadom neki a formot, ami az addEventListener miatt kulcsfontosságú hiszen enélkül nem tudnánk hozzáadni egy új uralkodót a táblázatunkhoz.
document.body.appendChild(form3); // a fentebb létrehozott form elemünket hozzáfűzzük a HTML dokumentumunk törzséhez
/**
 * @param {Array} formarray
 * kigeneráljuk minden egyes sorát a HTML formnak a megadott form segítségével
 */
function generateForm(formarray){ //létrehozom a generateForm függvényt, amelyben egy növekményes ciklus segítségével és a formarray segítségével kigeneráljuk a korábbi html form alapján annak a sorait,hogy a végén képesek legyünk ismételten egy új objektumot hozzáadni a csodás táblázatunkba
//a ciklus során egy sort generálunk és az egyes HTMLELementek tulajdonságainak megadjuk a formarray tömbben lévő éppen aktuális objektumunk egyes tulajdonságainak értékeit    
    
    for(const jelenFelem of formarray){
        const div1  = document.createElement(`div`); //létrehozok egy div elemet ami a formom első sora lesz
        div1.classList.add(`field`); //hozzáfűzöm a field osztályt
    
        const label1 = document.createElement(`label`); // létrehozok egy label elemet
        label1.htmlFor  = jelenFelem.htmlFor; // a for attribútum értékének megadom az uralkodo_nevet
        label1.innerText  = jelenFelem.innerText;// az Innertextje pedig az Uralkodó neve: lett
        div1.appendChild(label1);// ezt a labelt hozzáfűzöm a div1-hez ami  a formom első sora
    
    
        const input1  = document.createElement(`input`);//létrehozok egy input elemet
        input1.type  = jelenFelem.type;// ennek az inputnak típusként megadom a textet, tehát szövegként lesz kezelve amit beleírunk
        input1.id  = jelenFelem.htmlFor;//id-nek itt is megadtam az uralkodo_nevet
        input1.name  = jelenFelem.htmlFor;// namenek is
        div1.appendChild(input1);// ezt az inputot hozzáfűzöm a div1-hez ami a formom első sora
    
        const div_error1 = document.createElement(`div`);//létrehozok egy div elemet ismét, ami a validációs üzenetek helye
        div_error1.classList.add(`error`);  // ezt ellátom az error osztály kijelölővel
        div1.appendChild(div_error1);// és ezt is hozzáfűzöm természetesen a form első sorához.
        form3.appendChild(div1); // hozzáfűzöm az első sort a formhoz
    };

    const button = document.createElement(`button`); //létrehozok egy gombot melynek a segítségével tudjuk majd a táblázathoz hozzáadni 
    button.type = `submit`; // ennek a gombnak beállítom a submit típust, ez fontos mivel a form addeventListenerje a submitra hallgat
    button.innerText = `Hozzáadás`; // innerTextnek pedig megkapta a Hozzáadást, mint ahogy korábban a HTML oldalon volt.

    form3.appendChild(button); // hozzáfűzöm a gombot a formunkhoz
    // fontos a sorrend, mivel ha másképp lenne nem lennének a sorok megfelelő sorrendben és elcsúszna a táblázat.

};







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








/**
 * 
 * @param {HTMLElement} inputhtmlElem 
 * @param {string} errorUzenet 
 * @returns {boolean}
 *  visszaadunk egy error üzenetet az első bemeneti paraméter parentElementjében legelső error class-al ellátott elemében   ha üres string az inputhtmlElem bemeneti paraméter értéke a visszatérési értékünket a valid változóban tároljuk ami boolean típusú(fontos a visszatérés a validáció miatt az addeventlistenerben)
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
 * 
 * ismételten egy booleant küldünk vissza, ez a valid változó és ebben tároljuk az egyes esetek esetén a visszatérési értéket(fontos a visszatérés a validáció miatt az addeventlistenerben)
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