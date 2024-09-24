// Sample data array
let chemicals = [
    { id: 1, chemicalName: "Ammonium Persulfate", vendor: "LG Chem", density: 3525.92, viscosity: 60.63, packaging: "Bag", packSize: 100, unit: "kg", quantity: 6495.18 },
    { id: 2, chemicalName: "Caustic Potash", vendor: "Formosa", density: 3172.15, viscosity: 48.22, packaging: "Bag", packSize: 100, unit: "kg", quantity: 8751.90 },
    { id: 3, chemicalName: "Dimethylaminopropylamino", vendor: "LG Chem", density: 8435.37, viscosity: 12.62, packaging: "Barrel", packSize: 75, unit: "L", quantity: 5964.61 },
    { id: 4, chemicalName: "Mono Ammonium Phosphate", vendor: "Sinopec", density: 1597.65, viscosity: 76.51, packaging: "Bag", packSize: 105, unit: "kg", quantity: 8183.73 },
    { id: 5, chemicalName: "Ferric Nitrate", vendor: "DowDuPont", density: 364.04, viscosity: 14.90, packaging: "Bag", packSize: 105, unit: "kg", quantity: 4154.33 },
    { id: 6, chemicalName: "n-Pentane", vendor: "Sinopec", density: 4535.26, viscosity: 66.76, packaging: "N/A", packSize: "N/A", unit: "t", quantity: 6272.34 },
    { id: 7, chemicalName: "Glycol Ether PM", vendor: "LG Chem", density: 6495.18, viscosity: 72.12, packaging: "Bag", packSize: 250, unit: "kg", quantity: 8749.54 },
    { id: 8, chemicalName: "Sodium Hydroxide", vendor: "BASF", density: 2150.43, viscosity: 39.87, packaging: "Barrel", packSize: 100, unit: "L", quantity: 7891.12 },
    { id: 9, chemicalName: "Acetone", vendor: "DowDuPont", density: 784.50, viscosity: 23.45, packaging: "Can", packSize: 25, unit: "L", quantity: 1250.50 },
    { id: 10, chemicalName: "Benzene", vendor: "Formosa", density: 873.56, viscosity: 18.74, packaging: "Barrel", packSize: 100, unit: "L", quantity: 5454.44 },
    { id: 11, chemicalName: "Ethanol", vendor: "LG Chem", density: 789.32, viscosity: 27.33, packaging: "Can", packSize: 50, unit: "L", quantity: 3267.12 },
    { id: 12, chemicalName: "Hydrochloric Acid", vendor: "BASF", density: 1200.45, viscosity: 31.56, packaging: "Barrel", packSize: 75, unit: "L", quantity: 7123.56 },
    { id: 13, chemicalName: "Sulfuric Acid", vendor: "Formosa", density: 1840.27, viscosity: 45.11, packaging: "Barrel", packSize: 150, unit: "L", quantity: 8945.78 },
    { id: 14, chemicalName: "Toluene", vendor: "Sinopec", density: 867.34, viscosity: 22.11, packaging: "Can", packSize: 20, unit: "L", quantity: 3895.23 },
    { id: 15, chemicalName: "Methanol", vendor: "BASF", density: 792.41, viscosity: 19.47, packaging: "Can", packSize: 50, unit: "L", quantity: 4150.12 }
];

// Populate the table initially
function populateTable() {
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    chemicals.forEach((chemical, index) => {
        let row = tableBody.insertRow();
        let cellSelect = row.insertCell(0);
        let cellId = row.insertCell(1);
        let cellName = row.insertCell(2);
        let cellVendor = row.insertCell(3);
        let cellDensity = row.insertCell(4);
        let cellViscosity = row.insertCell(5);
        let cellPackaging = row.insertCell(6);
        let cellPackSize = row.insertCell(7);
        let cellUnit = row.insertCell(8);
        let cellQuantity = row.insertCell(9);

        cellSelect.innerHTML = `<input type="checkbox">`;
        cellId.innerHTML = `<input type="text" value="${chemical.id}" />`;
        cellName.innerHTML = `<input type="text" value="${chemical.chemicalName}" />`;
        cellVendor.innerHTML = `<input type="text" value="${chemical.vendor}" />`;
        cellDensity.innerHTML = `<input type="text" value="${chemical.density}" />`;
        cellViscosity.innerHTML = `<input type="text" value="${chemical.viscosity}" />`;
        cellPackaging.innerHTML = `<input type="text" value="${chemical.packaging}" />`;
        cellPackSize.innerHTML = `<input type="text" value="${chemical.packSize}" />`;
        cellUnit.innerHTML = `<input type="text" value="${chemical.unit}" />`;
        cellQuantity.innerHTML = `<input type="text" value="${chemical.quantity}" />`;

        // Add click event to highlight selected row
        row.addEventListener("click", function() {
            document.querySelectorAll("tr").forEach(tr => tr.classList.remove("selected"));
            this.classList.add("selected");
        });
    });
}

// Add row function
function addRow() {
    let table = document.getElementById("chemicalTable").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);
    
    // Create empty cells for the new row
    let cellSelect = newRow.insertCell(0);
    let cellId = newRow.insertCell(1);
    let cellName = newRow.insertCell(2);
    let cellVendor = newRow.insertCell(3);
    let cellDensity = newRow.insertCell(4);
    let cellViscosity = newRow.insertCell(5);
    let cellPackaging = newRow.insertCell(6);
    let cellPackSize = newRow.insertCell(7);
    let cellUnit = newRow.insertCell(8);
    let cellQuantity = newRow.insertCell(9);
    
    // Add input fields for all new row cells
    cellSelect.innerHTML = `<input type="checkbox">`;
    cellId.innerHTML = `<input type='text' value=''>`;
    cellName.innerHTML = `<input type='text' value=''>`;
    cellVendor.innerHTML = `<input type='text' value=''>`;
    cellDensity.innerHTML = `<input type='text' value=''>`;
    cellViscosity.innerHTML = `<input type='text' value=''>`;
    cellPackaging.innerHTML = `<input type='text' value=''>`;
    cellPackSize.innerHTML = `<input type='text' value=''>`;
    cellUnit.innerHTML = `<input type='text' value=''>`;
    cellQuantity.innerHTML = `<input type='text' value=''>`;

    // Add click event to highlight selected row
    newRow.addEventListener("click", function() {
        document.querySelectorAll("tr").forEach(tr => tr.classList.remove("selected"));
        this.classList.add("selected");
    });
}

// Move selected row down
function moveRowDown() {
    let selected = document.querySelectorAll("tr.selected");
    if (selected.length > 0) {
        let row = selected[selected.length - 1];
        let nextRow = row.nextElementSibling;
        if (nextRow) {
            row.parentNode.insertBefore(nextRow, row);
        }
    }
}

// Move selected row up
function moveRowUp() {
    let selected = document.querySelectorAll("tr.selected");
    if (selected.length > 0) {
        let row = selected[0];
        let prevRow = row.previousElementSibling;
        if (prevRow) {
            row.parentNode.insertBefore(row, prevRow);
        }
    }
}

// Delete selected rows
function deleteRow() {
    let selected = document.querySelectorAll("tr.selected");
    selected.forEach(row => {
        row.remove();
    });
}

// Save data function
function saveData() {
    // Gather data from the table
    let savedData = [];
    let rows = document.getElementById("tableBody").getElementsByTagName("tr");
    for (let row of rows) {
        let cells = row.getElementsByTagName("td");
        let chemical = {
            id: cells[1].children[0].value || "N/A",
            chemicalName: cells[2].children[0].value || "N/A",
            vendor: cells[3].children[0].value || "N/A",
            density: cells[4].children[0].value || "N/A",
            viscosity: cells[5].children[0].value || "N/A",
            packaging: cells[6].children[0].value || "N/A",
            packSize: cells[7].children[0].value || "N/A",
            unit: cells[8].children[0].value || "N/A",
            quantity: cells[9].children[0].value || "N/A"
        };
        savedData.push(chemical);
    }

    // Print to console (can be replaced with an API call to save the data)
    console.log(JSON.stringify(savedData, null, 2)); // Formatted for better readability
}

// Sort table function
function sortTable(columnIndex) {
    let table = document.getElementById("chemicalTable");
    let rows = Array.from(table.rows).slice(1); // skip header
    let sortedRows = rows.sort((a, b) => {
        let cellA = a.cells[columnIndex].children[0].value.trim();
        let cellB = b.cells[columnIndex].children[0].value.trim();
        return isNaN(cellA) || isNaN(cellB) ? cellA.localeCompare(cellB) : cellA - cellB;
    });
    sortedRows.forEach(row => table.appendChild(row)); // Reattach rows in sorted order
}

// Refresh table data
function refreshData() {
    populateTable(); // Re-populate the table with the original data
}

// Initial population of the table
populateTable();
