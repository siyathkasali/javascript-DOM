function Book(title,author,isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI() {}

UI.prototype.addBooktoList = function(book){
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');
  
  row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row);
  console.log(list);
}

UI.prototype.clearFields = function(){
   document.getElementById('title').value = ' ';
   document.getElementById('author').value = ' ';
   document.getElementById('isbn').value = ' ';
}

UI.prototype.showAlert = function(msg, classname){
  const div = document.createElement('div');
  div.className = `alert ${classname}`;
  div.appendChild(document.createTextNode(msg));
  // Get parent
  const conatiner = document.querySelector('.container');
  // Get Form
  const form = document.getElementById('book-form');

  conatiner.insertBefore(div, form);

  setTimeout(function(){
      document.querySelector('.alert').remove();
  },2000)
}

// Deletebook Prototype
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

document.getElementById('book-form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // Instantiate Book
  const book = new Book(title,author,isbn);
  // Instantiate UI
  const ui = new UI(book);
  
  if(title === '' || author === '' || isbn === ''){
    // Error Alert
    ui.showAlert(`Please fill the details`, 'error');
  }else{
  
  ui.addBooktoList(book);
  ui.showAlert(`Insterted Succes fully`, 'success');  
  // Clear fields
  ui.clearFields();
  }

  e.preventDefault();
});

// Delete Book

document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert(`Removed Sucessfully `, 'success');
  e.preventDefault();
})