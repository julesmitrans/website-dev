const init = () => {
  const removeThisLi = $("#remove-this");
  const emptyThisUl = $("#empty-this");
  removeThisLi.remove();
  emptyThisUl.empty();

  const newLineItem = $("<li>Line item 1</li>");
  const anotherLineItem = $("<li>Line item 2</li>");
  const ul = $("#append-new-elements");
  ul.append(newLineItem);
  ul.append(anotherLineItem);


  console.log('Hello world from jQuery');
  /* do the rest of the work here */


  const bindById = $('#bind-by-id');
  const bindByClass = $('.bind-by-class');
  console.log('Binding to DOM');
  console.log(bindById);
  console.log(bindByClass);

  bindById.remove();
  bindByClass
    .css('background-color', 'blue')
    .css('color', 'white')
}
$(init);
