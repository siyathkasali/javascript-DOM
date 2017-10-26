var form = document.getElementById('form');
form.addEventListener('submit', addItem);

var item = document.getElementById('list-item');
item.addEventListener('click', removeBtn);

var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItem);

function filterItem(e){
    var filtervalue = e.target.value.toLowerCase();
    var items = item.getElementsByTagName('li');
    Array.from(items).forEach(function(liItem){
        var itemname = liItem.firstChild.textContent;
        if(itemname.toLowerCase().indexOf(filtervalue) != -1){
            liItem.style.display = 'block';
        }else{
            liItem.style.display = 'none';
        }
    })
    
}

// Remove button
function removeBtn(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li = e.target.parentElement;
            item.removeChild(li);
        }
    }
}
    

// Add item
function addItem(e){
    e.preventDefault();
    // Get input value
    var input = document.getElementById('input').value;
    // Creating a new liste item 
    var li = document.createElement('li');
    li.className = 'list-group-item';

    // apeending text inside li
    li.appendChild(document.createTextNode(input));

    // Creating a button
    var button = document.createElement('button');
    button.className = 'btn btn-danger float-right delete';

    // Append text inside button
    button.appendChild(document.createTextNode('x'));
    // append button inside button
    li.appendChild(button);

    // append li in main UL
    item.appendChild(li);
}