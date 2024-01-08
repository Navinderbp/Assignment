document.addEventListener("DOMContentLoaded", function () {
    fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
        .then(response => response.json())
        .then(data => {
            // Sort the data based on descending popularity
            const sortedData = data.sort((a, b) => b.Popularity - a.Popularity);

            // Display the sorted data
            displayProducts(sortedData);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayProducts(products) {
    const productListDiv = document.getElementById('productList');

    // Create a table to display the data
    const table = document.createElement('table');
    table.border = '1';

    // Create table header
    const headerRow = table.insertRow(0);
    const headerCells = ['Title', 'Price'];
    headerCells.forEach(cellText => {
        const cell = headerRow.insertCell();
        cell.appendChild(document.createTextNode(cellText));
    });

    // Create table rows
    products.forEach(product => {
        const row = table.insertRow();
        const titleCell = row.insertCell();
        const priceCell = row.insertCell();

        titleCell.appendChild(document.createTextNode(product.Title));
        priceCell.appendChild(document.createTextNode(product.Price));
    });

    // Append the table to the productListDiv
    productListDiv.appendChild(table);
}
