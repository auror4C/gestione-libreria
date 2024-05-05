const prompt=require("prompt-sync")();

 let a=parseInt(prompt("Inserire il numero di libri da inserire: "));

    let l=[];
    for(let i=0; i<a; i++)
    {
        let n=i+1;    
        const libro=
        {
            autore:prompt("Inserisci l'autore del libro "+n+": "),
            genere:prompt("Inserisci il genere del libro "+n+": "),
            titolo:prompt("Inserisci il titolo del libro "+n+": "),
            pagine:parseInt(prompt("Inserisci le pagine del libro "+n+": ")),
            isbn:parseInt(prompt("Inserisci l'ISBN: "))
        }
        while(libro.pagine<=0)
            {
                libro.pagine=parseInt(prompt("Le pagine del libro "+n+" devono essere maggiori di 0: "));
            }
        
        l.push(libro);
    }  


let risposta1=prompt("Vuoi modificare le informazioni di qualche libro? (Si/No): ");
while(risposta1.toLowerCase() !== "si" && risposta1.toLowerCase() !== "no")
{
    risposta1=prompt("Vuoi modificare le informazioni di qualche libro? (Si/No): ");
}
if(risposta1 === "no")
{
    console.log("Lista dei libri disponibili: ");
    console.log(l);
}

do
{
    if(risposta1.toLowerCase() === "si")
    {
        let risposta2=parseInt(prompt("Di quale libro vuoi modificare le informazioni? (Inserisci un numero valido compreso tra 1 e " + a + "): "));
        while (risposta2 <= 0 || risposta2 > a)
        {
            risposta2 = parseInt(prompt("Inserisci un numero valido compreso tra 1 e " + a + ": "));
        }
        
        let risposta4;
        do
        {
            let risposta3=prompt("Quale delle seguenti informazioni vuoi modificare? (autore, genere, titolo, pagine): ");
            while(risposta3.toLowerCase() !== "autore" && risposta3.toLowerCase() !== "genere" && risposta3.toLowerCase() !== "titolo" && risposta3.toLowerCase() !== "pagine" )
            {
                risposta3=prompt("Quale delle seguenti informazioni vuoi modificare? (autore, genere, titolo, pagine): ");
            }

            if(risposta3.toLowerCase() === "autore")
            {
                l[risposta2-1].autore=prompt("Inserisci il nuovo autore: ");
            }
            if(risposta3.toLowerCase() === "genere")
            {
                l[risposta2-1].genere=prompt("Inserisci il nuovo genere: ");
            }
            if(risposta3.toLowerCase() === "titolo")
            {
                l[risposta2-1].titolo=prompt("Inserisci il nuovo titolo: ");
            }
            if(risposta3.toLowerCase() === "pagine")
            {
                l[risposta2-1].pagine=parseInt(prompt("Inserisci il nuovo pagine: "));
            }

            risposta4=prompt("Vuoi modificare altro di questo libro? (Si/No): ")
            while(risposta4.toLowerCase() !== "si" && risposta4.toLowerCase() !== "no")
            {
                risposta4=prompt("Vuoi modificare altro di questo libro? (Si/No): ");
            }
        }
        while(risposta4.toLowerCase() === "si")

        risposta1=prompt("Vuoi modificare un altro libro? (Si/No): ");
        while(risposta1.toLowerCase() !== "si" && risposta1.toLowerCase() !== "no")
        {
            risposta1=prompt("Vuoi modificare un altro libro? (Si/No): ");
        } 
    }
}
while(risposta1.toLowerCase() === "si")

let richiesta=prompt("Vuoi cercare un libro?(si/no)");
while(richiesta.toLowerCase() !== "si" && richiesta.toLowerCase() !== "no")
{
    richiesta=prompt("Vuoi cercare un libro?(si/no)");
}
if(richiesta==="no")
{
   console.log("Libri disponibili: ");
   console.log(l);
}

if(richiesta==="si")
{
    const termineRicerca = prompt("Inserisci il termine di ricerca (titolo, autore, genere): ").toLowerCase();
    const valoreRicerca = prompt("Inserisci il valore da cercare: ").toLowerCase();

    const risultati = l.filter(libro => {
        if (termineRicerca === "autore") {
            return libro.autore.toLowerCase().includes(valoreRicerca);
        } else if (termineRicerca === "genere") {
            return libro.genere.toLowerCase().includes(valoreRicerca);
        } else if (termineRicerca === "titolo") {
            return libro.titolo.toLowerCase().includes(valoreRicerca);
        } 
    });

    console.log("Risultati della ricerca:");
    console.log(risultati);
}

let utenti=[];

const prestito=prompt("Vuoi prendere in prestito un libro?(si/no) ");
if(prestito==="no")
{
  console.log("Continua a vedere i libri");
}

if(prestito==="si")
{
    const nomeUtente = prompt("Inserisci il nome dell'utente: ");
    const nuovoUtente = {
        nome: nomeUtente,
        libriInPrestito: []
    };
    utenti.push(nuovoUtente);
    console.log("Utente aggiunto con successo.");
    
    const utente = utenti.find(utente => utente.nome === nomeUtente);
    if (!utente) 
    {
        console.log("Utente non trovato.");
        return;
    }
    const libroDaPrestare = prompt("Inserisci il titolo del libro da prestare: ");

    const libro = l.find(libro => libro.titolo === libroDaPrestare && !libro.prestato);
    if (!libro) 
    {
        console.log("Libro non disponibile.");
        return;
    }

    libro.prestato = true;
    utente.libriInPrestito.push(libro);
    console.log("Libro prestato con successo a " + nomeUtente + ".");
}
