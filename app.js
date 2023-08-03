// Master

let items = document.getElementById("items-group");
let item = document.createElement("li");

// Add Expense

function addExpense(event) {
  event.preventDefault();
  let expenseAmount = document.getElementById("expenseAmount").value;
  let description = document.getElementById("description").value;
  let category = document.getElementById("category").value;

  let user = {
    expenseAmount: expenseAmount,
    description: description,
    category: category,
  };

  let userData = JSON.stringify(user);

  localStorage.setItem(`${expenseAmount}`, userData);

  let items = document.getElementById("items-group");
  let item = document.createElement("li");
  let text = `Expense Amount: ${expenseAmount} Description: ${description} Category: ${category}`;

  // Add a delete buton and delete functionality
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "deleteButton";

  // Add Edit button and Edit functionality

  let editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "editButton";

  item.setAttribute("expense-amount", expenseAmount);

  item.textContent = text;

  item.addEventListener("click", deleteUser);
  editButton.addEventListener("click", editUser);

  item.appendChild(deleteButton);
  item.appendChild(editButton);
  items.appendChild(item);

  document.getElementById("expenseAmount").value = "";
  document.getElementById("description").value = "";
  document.getElementById("category").valuse = "";
}

// Delete button function

function deleteUser(event) {
  if (event.target.classList.contains("deleteButton")) {
    if (confirm("Are You Sure?")) {
      let li = event.target.parentElement;
      let expenseAmount = li.getAttribute("expense-amount");
      localStorage.removeItem(expenseAmount);
      li.remove();
    }
  }
}

// Edit button function

function editUser(event) {
  if (event.target.classList.contains("editButton")) {
    let li = event.target.parentElement;
    let expenseAmount = li.getAttribute("expense-amount");
    let userData = localStorage.getItem(expenseAmount);
    let user = JSON.parse(userData);
    localStorage.removeItem(expenseAmount);
    li.remove();

    document.getElementById("expenseAmount").value = user.expenseAmount;
    document.getElementById("description").value = user.description;
    document.getElementById("category").value = user.category;
  }
}
