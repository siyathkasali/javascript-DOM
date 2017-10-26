var form = document.getElementById('form');
form.addEventListener('submit', addItem);

var item = document.getElementById('list-item');


function addItem(e){
    e.preventDefault();
    var input = document.getElementById('input').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(input));

    var button = document.createElement('button');
    button.className = 'btn btn-danger float-right delete';
    button.appendChild(document.createTextNode('x'));
    console.log(button);
    item.appendChild(li);
    item.appendChild(button);
    

}