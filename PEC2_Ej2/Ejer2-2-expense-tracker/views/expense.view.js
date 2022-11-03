/**
 * @class View
 *
 * Visual representation of the model.
 */
 class ExpenseView {
    constructor() {
        this.balance = document.getElementById('balance');
        this.money_plus = document.getElementById('money-plus');
        this.money_minus = document.getElementById('money-minus');
        this.list = document.getElementById('list');
        this.form = document.getElementById('form');
        this.text = document.getElementById('text');
        this.amount = document.getElementById('amount');

        const localStorageTransactions = JSON.parse(
          localStorage.getItem('transactions')
        );
        
        this.transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

        this.init();
    }
    
        // Add transaction
     addTransaction(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            if (this.text.value.trim() === '' || this.amount.value.trim() === '') {
                alert('Please add a text and amount');
                } else {
                handler(this.text.value, +this.amount.value);
                                    
                this.updateValues();
            
                this.updateLocalStorage();
            
                this.text.value = '';
                this.amount.value = '';
                }
        });

    }

    // Add transactions to DOM list
    addTransactionDOM(transaction) {
      // Get sign
      debugger
      console.log(transaction.amount + "juan");
      const sign = transaction.amount < 0 ? '-' : '+';
  
      const item = document.createElement('li');
  
      // Add class based on value
      item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  
      item.innerHTML = `
      ${transaction.text} <span>${sign}${Math.abs(
      transaction.amount
      )}</span> <button class="delete-btn" onclick="removeTransaction(${
      transaction.id
      })">x</button>
      `;
  
      list.appendChild(item);
    }

    updateValues() {
        const amounts = this.transactions.map(transaction => transaction.amount);
      
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
    updateLocalStorage() {
        localStorage.setItem('transactions', JSON.stringify(transactions));
      }
  
      // Init app
    init() {
        list.innerHTML = '';
    
        this.transactions.forEach(this.addTransactionDOM);
        this.updateValues();
    }
  
    // get _todoText() {
    //   return this.input.value;
    // }
  
    // _resetInput() {
    //   this.input.value = "";
    // }
  
    // createElement(tag, className) {
    //   const element = document.createElement(tag);
  
    //   if (className) element.classList.add(className);
  
    //   return element;
    // }
  
    // getElement(selector) {
    //   const element = document.querySelector(selector);
  
    //   return element;
    // }
  
  
    // _initLocalListeners() {
    //   this.todoList.addEventListener("input", event => {
    //     if (event.target.className === "editable") {
    //       this._temporaryTodoText = event.target.innerText;
    //     }
    //   });
    // }
  
    // bindAddTodo(handler) {
    //   this.form.addEventListener("submit", event => {
    //     event.preventDefault();
  
    //     if (this._todoText) {
    //       handler(this._todoText);
    //       this._resetInput();
    //     }
    //   });
    // }
  
    // bindDeleteTodo(handler) {
    //   this.todoList.addEventListener("click", event => {
    //     if (event.target.className === "delete") {
    //       const id = event.target.parentElement.id;
  
    //       handler(id);
    //     }
    //   });
    // }
  
    // bindEditTodo(handler) {
    //   this.todoList.addEventListener("focusout", event => {
    //     if (this._temporaryTodoText) {
    //       const id = event.target.parentElement.id;
  
    //       handler(id, this._temporaryTodoText);
    //       this._temporaryTodoText = "";
    //     }
    //   });
    // }
  
    // bindToggleTodo(handler) {
    //   this.todoList.addEventListener("change", event => {
    //     if (event.target.type === "checkbox") {
    //       const id = event.target.parentElement.id;
  
    //       handler(id);
    //     }
    //   });
    // }
  }
  