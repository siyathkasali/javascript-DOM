class Book{
  constructor(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  showAlert(msg,color){
    const div = document.createElement('div');
    div.className = `alert ${color}`;
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div,form);

    setTimeout(function(){
      document.querySelector('.alert').remove();
    },2000);
  }

  addBook(book){
    const booklist = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href="#" class="delete">X</a></td>
    `;
    booklist.appendChild(row)
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';  
  }
  
  deleteBook(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  }

}




document.getElementById('book-form').addEventListener('submit', function(e){

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);

  if(title === '' || author === '' || isbn === ''){
    book.showAlert(`Enter a valid letters`, 'error');
  }else{  
    book.addBook(book);
    book.showAlert(`Insterted Succes fully`, 'success');  
  }

  book.clearFields();
  e.preventDefault();

});

document.getElementById('book-list').addEventListener('click', function(e){
  const book = new Book(title, author, isbn);
    book.deleteBook(e.target);
    book.showAlert(`Sucessfully deleted`, 'error');
});
