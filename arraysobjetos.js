function ej1(){
    const estudiant = {
        nom: 'Joan',
        edat: 20,
        notes: {
            matematiques: 8,
            programacio: 9,
            fisica: 7
        }
    };


    // Desestructura l'objecte aquí
    //FORMA1:
    console.log(estudiant.nom)
    console.log(estudiant.edat)
    console.log(estudiant.notes.matematiques)
    console.log(estudiant.notes.programacio)
    console.log(estudiant.notes.fisica)

    //FORMA2:
    /*
    const { nom, edat, notes: { matematiques, programacio, fisica } } = estudiant;
    
    console.log(nom);           // Joan
    console.log(edat);          // 20
    console.log(matematiques);  // 8
    console.log(programacio);   // 9
    console.log(fisica);        // 7
    */

    // Imprimeix: "Joan té 20 anys i ha tret un 8 en matemàtiques."
    console.log(`${estudiant.nom} te ${estudiant.edat} anys i ha tret un ${estudiant.notes.matematiques} en matematiques`)
}


function ej2(){
    const coordenades = [12, 5, 8];


    // Desestructura l'array aquí
    const[x, y, z] = [12, 5, 8]
    console.log(x)
    console.log(y)
    console.log(z)

    // Imprimeix les coordenades: "Les coordenades són x=12, y=5, z=8."
    console.log(`Les coordenades son x=${x} y=${y} z=${z}.`);
}


function ej3(){
    const preus = [100, 200, 300, 400];


    // Aplica el mètode map per incrementar els preus en un 10%
    const incremento = preus.map(preu => preu * 1.10)

    
    // Imprimeix el nou array de preus
    console.log(incremento)
}


function ej4(){
    const edats = [16, 21, 18, 24, 12, 30];

    // Utilitza el mètode filter per obtenir les edats majors de 18
    const edadesNuevas = edats.filter(edat => edat > 18)
    
    // Imprimeix el nou array
    console.log(edadesNuevas)
}


function ej5(){
    const notes = [7, 9, 5, 10, 8];

    // Utilitza reduce per calcular la mitjana
    const media = notes.reduce(nota => (7+9+5+10+8)/5)

    // Imprimeix el resultat
    console.log(media)
}


// Escriu la funció per crear l'objecte producte
function ej6(nom, preu, quantitat){

    const descuento = preu * 0.95

    const producte = {
        nom: nom,
        preu: descuento,
        quantitat: quantitat
    };

    console.log(producte)

    // Exemple de sortida: { nom: "Portàtil", preu: 950, quantitat: 3 }
    return producte;
}

function ej7(){
    const cotxe = {
        marca: 'Tesla',
        model: 'Model S',
        preu: 80000
    };
    // Afegeix la propietat 'any' aquí
    cotxe.any = 2023

    // Imprimeix l'objecte actualitzat
    console.log(cotxe)
}
