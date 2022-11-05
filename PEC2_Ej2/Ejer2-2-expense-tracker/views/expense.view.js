/**
 * @class View
 *
 * Visual representation of the model.
 */
 class ExpenseView {
    constructor() {
        this.balance = this.getElement('#balance');
        this.money_plus = this.getElement('#money-plus');
        this.money_minus = this.getElement('#money-minus');
        this.list = this.getElement('#list');
        this.form = this.getElement('#form');
        this.text = this.getElement('#text');
        this.amount = this.getElement('#amount');

        this._temporaryExpenseText = "";
        this._temporaryExpenseAmount = "";
        this._initLocalListeners();
    }

    get _expenseText() {
      return this.text.value;
    }
    get _expenseAmount() {
      return this.amount.value;
    }
  
    _resetInputs() {
      this.text.value = '';
      this.amount.value = '';
    }

    createElement(tag, className) {
      const element = document.createElement(tag);
  
      if (className) element.classList.add(className);
  
      return element;
    }

    getElement(selector) {
      const element = document.querySelector(selector);
  
      return element;
    }
    
    // Add transaction
    addTransaction(handler) {
      this.form.addEventListener('submit', event => {
          event.preventDefault();
          if (this._expenseText.trim() === '' || this._expenseAmount.trim() === '') {
              alert('Please add a text and amount');
              } else {
              handler(this._expenseText, +this._expenseAmount);
              this._resetInputs();        
              // this.updateValues();
              // this.updateLocalStorage();
              }
      });

  }

  // Add transactions to DOM list
  addTransactionDOM(transactions) {
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }

    // Show default message
    if (transactions.length != 0) {
      // Create nodes
      transactions.forEach(transaction => {
        // Get sign
        const sign = transaction.amount < 0 ? '-' : '+';
    
        const item = this.createElement('li');
        item.id = transaction.id;
        // Add class based on value
        item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
        item.textContent= transaction.text;

        const span = this.createElement("span");
        span.contentEditable = true;
        span.classList.add("editable");
        span.textContent= sign + Math.abs(transaction.amount)

        const deleteButton = this.createElement("button", "delete-btn");
        deleteButton.textContent = "x";
    
        item.append(span, deleteButton);

        this.list.append(item);
      })
    }

    // Debugging
    console.log(transactions);
  }

  _initLocalListeners() {
    this.list.addEventListener("input", event => {
      if (event.target.id === "text") {
        this._temporaryExpenseText = event.target.innerText;
      }else if (event.target.id === "amount") {
        this._temporaryExpenseAmount = event.target.innerText;
      }
    });
  }

  updateValues(transactions) {
      const amounts = transactions.map(transaction => transaction.amount);
    
      const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
      const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    
      const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
      ).toFixed(2);
    
      this.balance.innerText = `$${total}`;
      this.money_plus.innerText = `$${income}`;
      this.money_minus.innerText = `$${expense}`;
  }

  // Remove transaction by ID
  bindDeleteExpense(handler) {
    this.list.addEventListener("click", event => {
      if (event.target.className === "delete-btn") {
        const id = event.target.parentElement.id;
        console.log(id);
        handler(id);
      }
    });
  }
  

    // updateLocalStorage() {
    //     localStorage.setItem('transactions', JSON.stringify(transactions));
    //   }
  
  // Init app
  // init() {
  //     list.innerHTML = '';
  //     this.transactions.forEach(this.addTransactionDOM);
  //     this.updateValues();
  // }
}
  