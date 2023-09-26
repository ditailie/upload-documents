let documentCounter = 1; // Contor pentru numărul de documente

function uploadDocument() {
    const fileInput = document.getElementById('file');
    const documentTableBody = document.getElementById('document-table-body');

    const file = fileInput.files[0];
    if (file) {
        // Creează un rând nou în tabelul de conținut
        const newRow = documentTableBody.insertRow();
        const cellNumber = newRow.insertCell(0);
        const cellName = newRow.insertCell(1);
        const cellDocument = newRow.insertCell(2);
        const cellAction = newRow.insertCell(3);

        // Adaugă datele documentului în rândul de conținut
        cellNumber.textContent = documentCounter++;
        cellName.textContent = file.name;

        // Salvează documentul în celula corespunzătoare
        const fileReader = new FileReader();
        fileReader.onload = function (event) {
            const savedDocument = document.createElement('a');
            savedDocument.href = event.target.result;
            savedDocument.textContent = 'Descarcă';
            savedDocument.setAttribute('download', file.name);
            cellDocument.appendChild(savedDocument);
        };
        fileReader.readAsDataURL(file);

        // Adaugă butonul "Stergere" și funcționalitatea sa
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Ștergere';
        deleteButton.addEventListener('click', function () {
            newRow.remove(); // Sterge rândul când se apasă butonul "Stergere"
        });
        cellAction.appendChild(deleteButton);

        // Resetăm câmpul de încărcare
        fileInput.value = null;
    }
}
