const cars = [
  {
    price: "$23000",
    status: "new",
    year: "2020",
    name: "Toyota Camry",
    category: "Sedan",
    color: "Bleu",
    image:
      "imgage/camry.jfif",
  },
  {
    price: "$40000",
    status: "new",
    year: "2024",
    name: "Boxer",
    category: "Van",

    color: "Bleu",
    image:"imgage/boxxer.jfif",
      
  },
  {
    price: "$24566",
    status: "new",
    year: "20022",
    name: "Passat cc",
    category: "Sedan",

    color: "Bleu",
    image:
      "imgage/R.jfif",
  },
  {
    price: "$22345",
    status: "new",
    year: "2023",
    name: "skoda octavia",
    category: "Sedan",

    color: "Bleu",
    image:
      "imgage/octavia.jfif",
  },
  {
    price: "$55090",
    status: "new",
    year: "2022",
    name: "Megane Rs ",
    category: "Sport",

    color: "Jaune",
    image:
      "imgage/megane.jpg",
  },
  {
    price: "$40000",
    status: "used",
    year: "2020",
    name: "BMW M3 competion",

    category: "Sport",
    color: "Jaune",

    image:
      "imgage/m3.jfif",
  },
  {
    price: "$11000",
    status: "used",
    year: "2011",
    name: "Honda Civic",
    category: "Compacte",
    color: "Rouge",

    image:
      "imgage/honada.jfif",
  },
  {
    price: "$14000",
    status: "used",
    year: "2017",
    name: "polo",
    category: "Compacte",
    color: "Rouge",

    image:
      "imgage/polo.jfif",
  },
  {
    price: "$30000",
    status: "used",
    year: "2022",
    name: "Ford Mustang",
    category: "Sport",
    color: "Jaune",
    image:
      "imgage/mustang.jfif",
  },
  {
    price: "$60000",
    status: "used",
    year: "2022",
    name: "urus",
    category: "Suv",

    color: "Jaune",
    image:
      "imgage/urus.jfif",
  },
  {
    price: "$44000",
    status: "used",
    year: "2024",
    name: "Mercedes GLE",
    category: "Suv",

    color: "Jaune",
    image:
      "imgage/gle.jpg",
  },
  {
    price: "$33000",
    status: "used",
    year: "2016",
    name: "Land crusier",
    category: "Suv",

    color: "Jaune",
    image:
      "imgage/land.jfif",
  },
];

function backTotop() {
  window.addEventListener("scroll", () => {
    let back = document.querySelector(".backTop");

    if (window.scrollY < 180) {
      back.classList.add("hide");
    } else {
      back.classList.remove("hide");
    }
    back.addEventListener("click", () => {
      window.scrollTo(0,0);
    });
  });
}
backTotop();

let co = 1;

function sidebar() {
  //for the creation of the bar

  const bar = document.createElement("div");
  let huburger = document.querySelector("#humberger");
  huburger.classList.add("hide");
  let container = document.querySelector(".container");
  container.appendChild(bar);

  let ulFather = document.getElementById("ul");
  ulFather.style.flexDirection = "column";

  bar.appendChild(ulFather);

  console.log("hello from huburger");

  bar.classList.add("sidebar");

  //for(let i=0;i<4;i++){ let ul = document.getElementsByClassName('navel')[i].classList.remove('navel'); this method did not work!!!!!!!!!!

  let a = document.getElementById("a").classList.remove("navel");
  let b = document.getElementById("b").classList.remove("navel");
  let c = document.getElementById("c").classList.remove("navel");
  let d = document.getElementById("d").classList.remove("navel");
  let e = document.getElementById("e").classList.remove("navel");

  //for not create an exit button the time we click the hamburger menu

  if (co <= 1) {
    const Div = document.createElement("div");
    ulFather.appendChild(Div);
    let exitWord = document.createElement("p");
    exitWord.innerHTML = "X";
    exitWord.style.fontSize = "30px";
    exitWord.style.color = "var(--primary-color)";
    Div.appendChild(exitWord);
    Div.classList.add("exitButton");
    co++;
    console.log("in if statment");
  }

  let exitButton = document.querySelector(".exitButton");

  console.log(exitButton);

  // in order to quit or exit from the bar

  exitButton.addEventListener("click", () => {
    bar.style.display = "none";
    let nav = document.querySelector("#nav");
    huburger.classList.remove("hide");
    nav.appendChild(huburger);
    ulFather.appendChild(exitButton);
  });
}

//the creationn of car cards
function creation() {
  const carCards = document.querySelector(".carsCards");

  for (let i = 0; i < cars.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card", `${cars[i].category}`, "all");

    const images = document.createElement("img");
    images.src = cars[i].image;
    images.classList.add("carImage");
    card.appendChild(images);

    let docuContainer = document.createElement("div");
    docuContainer.classList.add("carDesc"); //////ajouert
    //add car names from the array
    const names = document.createElement("div");
    names.innerHTML = `<h3>${cars[i].name + " " + cars[i].year}<\h3>`;
    images.classList.add("carName");
    //add the  status
    const status = document.createElement("p");
    status.innerText = cars[i].status;
    //add the price
    const price = document.createElement("h2");
    price.innerText = cars[i].price;
    price.classList.add('carprice');//to filter 

    //add kilometres
    let kilometre = document.createElement("p");
    kilometre.innerText = "23090808 Km";//make true
    

    //add contact saler and show details
    let botom = document.createElement("div");
    botom.classList.add("cardButtom");
    let showDetails = document.createElement("a");
    let contactSaler = document.createElement("a");
    contactSaler.classList.add("saler");
    showDetails.classList.add("showDetails");
    contactSaler.href = "contactSaler.html";
    showDetails.href = "cardetails.html";
    showDetails.innerText = "Show Details";
    showDetails.classList.add("details");
    contactSaler.innerText = "Contact Saler";
    botom.appendChild(showDetails);
    botom.appendChild(contactSaler);

    docuContainer.appendChild(status);
    docuContainer.appendChild(names);
    docuContainer.appendChild(kilometre);
    docuContainer.appendChild(price);
    docuContainer.appendChild(botom);

    card.appendChild(docuContainer);

    carCards.appendChild(card);

    //show details
  }

  document.querySelector(".container").appendChild(carCards);
}

creation();

function filterCars(value) {
  //value comes from html

  //this is for the active category (to add color to the filter buttons)
  let buttons = document.querySelectorAll(".types");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //filter cars
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

function darKmode() {
  //dark mode
  let ulElement = document.querySelectorAll(".ula");
  let moon = document.querySelector(".moon");
  let carCards = document.querySelectorAll(".card");

  moon.addEventListener("click", () => {
    let bodyy = document.body;

    if (true) {
      bodyy.classList.toggle("darkmode");

      if (bodyy.classList.contains("darkmode")) {
        var bars = document.getElementById("str");
        bars.style.stroke = "black";
        //make the ul elemrnt white
        for (let i = 0; i < ulElement.length; i++) {
          document.querySelectorAll(".ula")[i].classList.add("white");
        }

        for (let i = 0; i < carCards.length; i++) {
          document.querySelectorAll(".card")[i].classList.add("black");
        }

        for (let i = 0; i < 3; i++) {
          document.querySelectorAll(".carte")[i].classList.add("black");
        }

        document.querySelector(".form").classList.add("black");

        document.querySelector("#foot").classList.add("black");
      } else {
        //mke them black
        for (let i = 0; i < ulElement.length; i++) {
          document.querySelectorAll(".ula")[i].classList.remove("white");
        }
        //make them to initial state
        for (let i = 0; i < carCards.length; i++) {
          document.querySelectorAll(".card")[i].classList.remove("black");
        }
        //testimonials element
        for (let i = 0; i < 3; i++) {
          document.querySelectorAll(".carte")[i].classList.remove("black");
        }
        //conatact us
        document.querySelector(".form").classList.remove("black");
        //foteer
        document.querySelector("#foot").classList.remove("black");
      }
    }
  });
}
darKmode();



function find(){
let saerch = document.getElementById('search');
let price = document.getElementById('price');
let year = document.getElementById('year');

saerch.addEventListener('click',()=>{

 
cars.forEach((e)=>{
  if(price.value==e.price){
    console.log(e.name);
  }else{
    console.log(price.innerText);
  }

})
  
})

}

find();