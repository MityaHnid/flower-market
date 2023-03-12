function createCards() {
  fetch('https://run.mocky.io/v3/275cc213-7485-4396-b1ba-c1969194d67f')
  .then((response) =>{
    return response.json();
  }).then((cards) =>{
    return init(cards);
  });

  function createContentTemplate(card) {
     const article = `<li class="card">
          <div class="cardImage">
           <img src=${card.image}>
          </div>
          <h5>${card.name}</h5>
          <h5>${card.flovers}</h5>
          <p>${card.price} грн</p>
          <button class="whiteButton">
              <a href="">В кошик</a>
            </button>
         </li>`

         return createFragmentTemplate(article);
  }

  function createFragmentTemplate(str) {
    const template = document.createElement('template');

    template.innerHTML = str;

    return template.content;
  } 

  function appendContent(content) {
    const UL = document.querySelector('.cardList');

    UL.appendChild(content);
  }

  function init(cards) {
    const fragment = document.createDocumentFragment();

    cards.forEach((itemCard) =>{
      fragment.appendChild(createContentTemplate(itemCard));
    });

    appendContent(fragment);
  }
}

export default createCards();


