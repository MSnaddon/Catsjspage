var Cat = function(name, favFood, imageUrl){
  this.name = name
  this.favFood = favFood
  this.imageUrl = imageUrl
}





function app(){


  var cats = [
  new Cat("Boba","Sock Fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"),
  new Cat("Barnaby","Tuna","http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg"),
  new Cat("Max","Whiskas Temptations","http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"),
  new Cat("Toast + Brandy","Tealights and everything, respectively","toast.jpg"),
  new Cat("Sophie","Curry", "sophie.jpg")
  ]
  
  for (var i = 0; i<cats.length; i++){
    makeCatBoxes(cats[i].name, cats[i].favFood, cats[i].imageUrl, document.getElementById("cats"))
  }
}


function makeCatBoxes(name, favFood, imageurl, parent){
  var name = makeNameLi(name);
  var favFood = makeFavFoodLi(favFood);
  var image = makeImage(imageurl);

  var list = document.createElement("ul");
  list.appendChild(name);
  list.appendChild(favFood);

  var div = document.createElement("div")
  div.classList.add("cat")

  div.appendChild(list);
  div.appendChild(image)
  parent.appendChild(div)

}

function makeNameLi(name){
  var li = document.createElement("li");
  li.innerText = "CodeName : " + name;
  return li;
}

function makeFavFoodLi(favFood){
  var li = document.createElement("li");
  li.innerText = "Preferred nutritional substance : " + favFood;
  return li;
}

function makeImage(url){
  var img = document.createElement("img");
  img.width = 500;
  img.src = url;
  return img;
}


window.onload = app;
