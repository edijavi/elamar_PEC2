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
      localStorage.setItem('expenses', JSON.stringify(this.expenses));
    }
  
    addExpense(text, amount) {
      this.expenses.push(new Expense({ text, amount }));
      this._commit(this.expenses);
    }

    editExpense(id, updatedAmount) {
      this.expenses = this.expenses.map(expense =>
        expense.id === id
          ? new Expense({
              ...expense,
              amount: updatedAmount
            })
          : expense
      );
  
      this._commit(this.expenses);
    }

    deleteExpense(_id) {
      debugger
      this.expenses = this.expenses.filter((expense) => expense.id !== _id);
      this._commit(this.expenses);
      console.log(this.expenses);
    }

  }
  