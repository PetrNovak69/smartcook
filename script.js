let products = {
    data: [
      {
        productName: "Mushroom soup",
        category: "Soup",
        price: "Cheap",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mushroom_soup-9b55c55.jpg?quality=90&webp=true&resize=300,272", 
      },
      {
        productName: "Mushroom & potato soup",
        category: "Soup",
        price: "Cheap",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mushroom-potato-soup-440-400-53841c1.jpg?quality=90&webp=true&resize=300,272",
      },
      {
        productName: "Shrimp Marinara",
        category: "MainCourse",
        price: "Mid",
        image: "https://www.allrecipes.com/thmb/rlodttra6H7V89oghj4cP02ufxQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7972426-shrimp-marinara-ddmfs-4x3-608ceee07d004406b17237b5d8cbf231.jpg",
      },
      {
        productName: "Rib-eye steak with red wine & pastrami sauce",
        category: "MainCourse",
        price: "Expensive",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/rib-eye-steak-with-red-wine-and-pastrami-sauce-948f28f.jpg?quality=90&webp=true&resize=300,272",
      },
      {
        productName: "Almond-Buckwheat Granola with Yogurt and Berries",
        category: "Breakfast",
        price: "Cheap",
        image: "https://hips.hearstapps.com/hmg-prod/images/yogurt-strawberries-almond-buckwheat-groats-recipe-656948e1229b2.jpg?crop=0.851xw:0.566xh;0.0114xw,0.283xh&resize=1200:*",
      },
      {
        productName: "French Toast",
        category: "Breakfast",
        price: "Cheap",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRyRfzy4JUOqxh-FfmOiK2LFePCDDtaHLcAg&usqp=CAU",
      },
      {
        productName: "Red Wine Chocolate Snack Cake",
        category: "Dessert",
        price: "Mid",
        image: "https://www.foodandwine.com/thmb/nZBdA-OMf-3mSIUYux2UpQwchy8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/red-wine-chocolate-snack-cake-XL-RECIPE0418-d06d1bcfff4b4e2e88b8325afd3e38b5.jpg",
      },
      {
        productName: "Mediterranean Steak and Potatoes ",
        category: "Dinner",
        price: "Luxury",
        image: "data:image/jpeg;base64,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",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
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
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };