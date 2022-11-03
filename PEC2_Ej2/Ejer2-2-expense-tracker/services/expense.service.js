/**
 * @class Service
 *
 * Manages the data of the application.
 */
 class ExpenseService {
    constructor() {
      this.expenses = (JSON.parse(localStorage.getItem("expenses")) || []).map(
        expense => new Expense(expense)
      );
    }

    bindExpenseListChanged(callback) {
      this.onExpenseListChanged = callback;
    }

    _commit(expenses) {
      this.onExpenseListChanged(expenses);
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  
    addExpense(text, amount) {
      const expense = new Expense({ text, amount });
      this.expenses.push(expense);
      console.log(this.expenses);
      this._commit(this.expenses);
    }
  }
  