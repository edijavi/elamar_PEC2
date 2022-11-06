/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
 class ExpenseController {
    constructor(service, view) {
      this.service = service;
      this.view = view;
  
      // Explicit this binding

      this.service.bindExpenseListChanged(this.onExpenseListChanged);
      this.view.addTransaction(this.handleAddExpense);
      this.view.bindEditExpense(this.handleEditExpense);
      this.view.bindDeleteExpense(this.handleDeleteExpense);

      // Display initial Expenses
      this.onExpenseListChanged(this.service.expenses);

    }
  
    onExpenseListChanged = expenses => {
      this.view.addTransactionDOM(expenses);
      this.view.updateValues(expenses)
    };
  
    handleAddExpense = (expenseText, expenseAmount) => {
      this.service.addExpense(expenseText, expenseAmount);
    };

    handleEditExpense = (id, expenseAmount) => {
      this.service.editExpense(id, expenseAmount);
    };

    handleDeleteExpense = id => {
      console.log(id);
      this.service.deleteExpense(id);
    };

  }