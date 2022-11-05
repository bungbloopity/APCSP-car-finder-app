// various variables
let matchList = [];
let count1 = 0;
let count2 = 0;
let favorites = [];
let index;

// functions
function funcFindCars(event, age, type) {
  funcEmptyList();
  event.preventDefault();
  console.log(`form submitted with values ${age} and ${type}`);
  if (age != "" || type != "") {
    console.log("age and type not empty");
    for (let x = 0; x < cars.length; x++) {
      const car = cars[x];
      index = x;
      if (age == car.age && type == car.type) {
        matchList.push(car);
        console.log(matchList);
      }
    }
    fillList(matchList);
  } else {
    alert("Please Enter Options");
  }
}

function fillList(cars) {
  // fills the list of cars to be shown
  console.log(cars);
  if (count1 == 0) {
    let h2 = document.createElement("h2");
    h2.innerHTML = "Matches Found!";
    carList.appendChild(h2);
  }
  cars.forEach(function (item) {
    let li = document.createElement("li");
    li.innerHTML = `<h3>A ${cap(item.age)} ${item.name} ${cap(item.type)}</h3><br><img src="${item.pic}"><br><button type="button" onclick="funcAddFavorites(\'${item.name}\',\'${item.type}\')">Add to Favorites</button>`;
    carList.appendChild(li);
  });
  count1++;
}

function funcEmptyList() {
  // empties list of search results
  matchList = [];
  let lis = document.querySelectorAll("#car-list li");
  for (let i = 0; (li = lis[i]); i++) {
    li.parentNode.removeChild(li);
  }
}

function cap(string) {
  // simple function to make first letter capitalized
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function funcAddFavorites(name, type) {
  for (let x = 0; x < cars.length; x++) {
    const car = cars[x];
    if (car.name == name && car.type == type) {
      car.favorite = true;
      console.log(car.favorite);
      funcFillFavorites(car);
    }
  }
}

function funcFillFavorites(fav) {
  favorites.push(fav);
  console.log(favorites);
  let h2 = document.createElement("h2");
  let li = document.createElement("li");
  if (count2 == 0) {
    h2.innerHTML = "Favorites";
    favoritesList.appendChild(h2);
  }
  favorites.forEach(function (item) {
    li.innerHTML = `<p>${cap(item.age)} ${item.name}`;
    favoritesList.appendChild(li);
  });
  count2++;
}
