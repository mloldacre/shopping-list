/* eslint-env jquery */



function main() {
//adding to shopping list
  $('#js-shopping-list-form').submit(event =>{
    event.preventDefault(); //prevents form submission
    const itemTextBox = $(event.currentTarget).find('#shopping-list-entry');

    let itemVal = itemTextBox.val();

    //console.log(itemTextBox.val());

    let newItem = `<li>
<span class="shopping-item">${itemVal}</span>
<div class="shopping-item-controls">
  <button class="shopping-item-toggle">
    <span class="button-label">check</span>
  </button>
  <button class="shopping-item-delete">
    <span class="button-label">delete</span>
  </button>
</div>
</li>`;

    $('.shopping-list').append(newItem);
  });

  //striking through using the check button
  $('.shopping-list').on('click', '.shopping-item-toggle', event =>{
    console.log(event);
    $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  //deleting item from shopping list
  $('.shopping-list').on('click', '.shopping-item-delete', event =>{
    $(event.currentTarget).closest('li').remove();
  });

}

$(main);