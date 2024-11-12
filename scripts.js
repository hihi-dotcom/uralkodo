const tabla = document.createElement(`table`);
const tablasor = document.createElement(`tr`);
const tablafej = document.createElement(`thead`);
const tfej = document.createElement(`th`);
const colgroup1 = document.createElement(`colgroup`);
const col = document.createElement(`col`);

tabla.appendChild(tablafej);
tablafej.appendChild(tablasor);
tablasor.appendChild(tfej);
tabla.appendChild(colgroup);
colgroup.appendChild(col);

col.classList.add(`colored-column`);


/*
createHTMLtableelement(`table`, `tabla`, document.body);
createHTMLtableelement(`thead`, `tablaf`, table);
createHTMLtableelement(`tr`, `tablarow`, thead);
createHTMLtableelement(`colgroup`, `colcsop`, table);
createHTMLtableelement(`col`, `col`, colgroup);
/**
 * 
 * @param {string} htmlelement 
 * @param {string} id 
 * @param {HTMLElement} parentelement 
 */
/*
function createHTMLtableelement(htmlelement, id, parentelement){
    const htmlelem = document.createElement(htmlelement);
    htmlelem.id = id;
    parentelement.appendChild(htmlelem);
};
*/