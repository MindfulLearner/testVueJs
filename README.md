# swag

- aggiunti commenti

## Cosa abbiamo fatto? 

Abbiamo trasformato il codice HTML con script JavaScript nel framework Vue.js. Abbiamo separato i file 3 file 
- js contentente le logiche, 
-data contenente array di dati, 
-html
, rendendoli più leggibili, e utilizzato le direttive v-model, v-on:click e v-for di Vue.js.

Icodice originale mandato da Michele su comunicazioni

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rubrica telefonica</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .floating-button {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            font-size: 36px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            z-index: 2;
            font-family: auto;
        }
    </style>
</head>
<body>
    <div class="container mt-4">
        <h1 class="text-center mb-4">Rubrica telefonica</h1>
        <div id="rubrica" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"></div>
    </div>

    <button class="btn btn-primary floating-button d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#formModal">+</button>

    <!-- Modal per aggiungere un nuovo contatto -->
    <div class="modal fade" id="formModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Aggiungi nuovo contatto</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="text" id="nuovoNome" class="form-control mb-3" placeholder="Nome" autocomplete="off">
                    <input type="tel" id="nuovoTelefono" class="form-control" placeholder="Telefono" autocomplete="off">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
                    <button type="button" class="btn btn-primary" onclick="aggiungiNuovoContatto()">Salva</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

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
</body>
</html>
```
