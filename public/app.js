
function app(){
  // create the list elements in loop

  var piddles = makeCatUl("derp", "derpSoup", "https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", document.getElementById("cats"));
}


function makeCatUl(name, favFood, imageurl, parent){
  var name = makeNameLi(name);
  var favFood = makeFavFoodLi(favFood);
  var image = makeImage(imageurl);

  var list = document.createElement("ul")
  list.appendChild(name);
  list.appendChild(favFood);

  parent.appendChild(list);
  parent.appendChild(image)


}

function makeNameLi(name){
  var li = document.createElement("li");
  li.innerText = "CodeName : " + name
  return li
}

function makeFavFoodLi(favFood){
  var li = document.createElement("li");
  li.innerText = "Preferred nutritional substance : " + favFood;
  return li
}

function makeImage(url){
  var img = document.createElement("img")
  img.src = url
  return img
}







window.onload = app;

// # Homework
// 1. Add JS code to allow a new cat to be added programmatically. Do it rough and ready at first!
// 2. Refactor the code to make it easy to add a new cat, just like we did with the quotes.
// 3. OPTIONAL: Remove the cat data in the HTML and add them via your javascript. If you want to be fancy, put the cat data into an array.
// 4. OPTIONAL: Do some sweeeet css
// Hint: Be careful with the order you append your elements to each other!
// Also be careful with what you need to pass when setting an image's width via the DOM.