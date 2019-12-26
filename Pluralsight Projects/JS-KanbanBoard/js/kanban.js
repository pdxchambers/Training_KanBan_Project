let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {
  let item = document.createElement('div');
  item.classList.add('item');
  item.setAttribute('id', 'item-' + order);
  item.setAttribute('draggable', 'true');
};

const dragItem =  document.querySelector('.item[draggable]')
dragItem.addEventListenter('dragstart', (event) => {
  event.DataTransfer.setData('text', event.target.id);
});
dragItem.addEventListenter('dragend', (event) => {
  event.DataTransfer.clearData();
});

let input = document.createElement('input');
item.apppendChild(input);

const save_btn = document.createElement('button'); 
save_btn.innerHTML('Save');
save_btn.addEventListener('click', () => {
  error = '';
  if(input.value != ''){
    order++;
    item.innerHTML(input.value);
    adding = false;
  } else {
    error = message;
  }
  item.appendChild(save_btn);
  return item;
})

document.querySelectorAll('.drop').forEach(element => {
  element.addEventListener('drop', (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    event.darget.appendChild(document.getElementById(id));
  })
  element.addEventListener('dragover', (event) => {
    event.preventDefault();
  })
});