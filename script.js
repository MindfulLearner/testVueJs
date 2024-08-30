// ciaV

const { createApp } = Vue;

// abbiamo usato const app per poter debuggare e capire la reattivita su console browser
const app = createApp (
    {
        data() {
            return {
                // definiamo i nostri dati
                i: 0,
                // richiamiamo attraverso script in html contacts cosi da poter reperire i dati array
                contatti : contacts,

                // creiamo due dati per poter usare vmodel
                nuovoNome: '',
                nuovoTelefono: '',
            }
        },
        methods: {
            // funzione debug entrata in file js e funzionamento
            ciaoMondo() {
                console.log('');
            },
            // funzione che aggiunge tramite vmodel su html e click dei bottoni
            aggiungiNuovoContatto() {
                console.log(this.nuovoNome);
                console.log(this.nuovoTelefono);
                // se this nuovoNome e nuovoTelefono hanno una stringa allora pusha
                if (this.nuovoNome && this.nuovoTelefono) {
                    // pushamo su array contatti i nuovi dati che restituiranno un nuovo card su html
                    this.contatti.push({ nome: this.nuovoNome, telefono: this.nuovoTelefono });
                    // reset degli spazi input per poter dinserire nuovi input
                    this.nuovoNome = '';
                    this.nuovoTelefono = '';
                }
            },

        }
    }
).mount('#app');

/*
    <script>
    let contatti = [
        { nome: "Mario Rossi", telefono: "123-456-7890" },
        { nome: "Giulia Bianchi", telefono: "098-765-4321" },
        { nome: "Luca Verdi", telefono: "555-123-4567" },
        { nome: "Anna Neri", telefono: "333-444-5555" },
        { nome: "Paolo Gialli", telefono: "222-333-4444" },
        { nome: "Francesca Blu", telefono: "777-888-9999" },
        { nome: "Roberto Marrone", telefono: "444-555-6666" },
        { nome: "Chiara Rosa", telefono: "666-777-8888" },
        { nome: "Marco Arancio", telefono: "111-222-3333" },
        { nome: "Laura Viola", telefono: "999-000-1111" },
        { nome: "Davide Celeste", telefono: "888-999-0000" },
        { nome: "Elisa Magenta", telefono: "123-321-4567" },
        { nome: "Simone Grigio", telefono: "987-654-3210" },
        { nome: "Valentina Azzurra", telefono: "456-789-0123" },
        { nome: "Andrea Indaco", telefono: "741-852-9630" }
    ];

// Mostra i contatti al caricamento della pagina
mostraContatti();

function mostraContatti() {
    const rubrica = document.getElementById('rubrica');
    rubrica.innerHTML = '';
    contatti.forEach(contatto => {
        const elemento = document.createElement('div');
        elemento.className = 'col';
        elemento.innerHTML = `
            <div class="card">
            <div class="card-body">
            <h5 class="card-title">${contatto.nome}</h5>
            <p class="card-text">${contatto.telefono}</p>
            </div>
            </div>`;
        rubrica.appendChild(elemento);
    });
}

function aggiungiNuovoContatto() {
    const nome = document.getElementById('nuovoNome').value;
    const telefono = document.getElementById('nuovoTelefono').value;

    if (nome && telefono) {
        contatti.push({ nome, telefono });
        mostraContatti();

        // Chiudi il modal
        var modal = bootstrap.Modal.getInstance(document.getElementById('formModal'));
        modal.hide();

        // Pulisce i campi del form
        document.getElementById('nuovoNome').value = '';
        document.getElementById('nuovoTelefono').value = '';
    } else {
        alert('Per favore, inserisci sia il nome che il numero di telefono.');
    }
}

    </script>
    */
