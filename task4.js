const categorySelect = document.getElementById("category-select");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const expensesBody = document.getElementById("expensed-body");
const totalAmountElement = document.getElementById("Totsl-Amount");

let totalAmount = 0;

function addExpense() {
    const category = categorySelect.value;
    const amount = parseFloat(amountInput.value);
    const date = dateInput.value;

    if (!category || isNaN(amount) || !date) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const newRow = document.createElement("tr");

    const categoryCell = document.createElement("td");
    categoryCell.textContent = category;
    newRow.appendChild(categoryCell);

    const amountCell = document.createElement("td");
    amountCell.textContent = amount.toFixed(2);
    newRow.appendChild(amountCell);

    const dateCell = document.createElement("td");
    dateCell.textContent = new Date(date).toLocaleDateString();
    newRow.appendChild(dateCell);

    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        deleteExpense(newRow, amount);
    };
    deleteCell.appendChild(deleteBtn);
    newRow.appendChild(deleteCell);

    expensesBody.appendChild(newRow);

    totalAmount += amount;
    updateTotal();

    categorySelect.value = "";
    amountInput.value = "";
    dateInput.value = "";
}

function deleteExpense(row, amount) {
    row.remove();
    totalAmount -= amount;
    updateTotal();
}

function updateTotal() {
    totalAmountElement.textContent = totalAmount.toFixed(2);
}

addBtn.addEventListener("click", addExpense);
