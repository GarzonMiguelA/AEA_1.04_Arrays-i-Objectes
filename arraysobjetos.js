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