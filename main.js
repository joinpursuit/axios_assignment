let $ = document;
$.addEventListener('DOMContentLoaded', ()=> {
  onLoad();
});

const onLoad = ()=> {
  let content = $.querySelector('.content');
  let h1 = $.createElement('h1');
  h1.innerText = 'Axios Card Shuffle';
  content.appendChild(h1);
};
