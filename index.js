const recipes = [
    // The JSON array of recipes (provided above)
    {
      "name": "Veggie Delight",
      "imageSrc": "https://source.unsplash.com/random?veggies",
      "time": "30 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.2
  },
  {
      "name": "Chicken Grill",
      "imageSrc": "https://source.unsplash.com/random?chicken",
      "time": "45 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Cheese Pizza",
      "imageSrc": "https://source.unsplash.com/random?pizza",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.1
  },
  {
      "name": "Steak",
      "imageSrc": "https://source.unsplash.com/random?steak",
      "time": "60 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.7
  },
  {
      "name": "Grilled Salmon",
      "imageSrc": "https://source.unsplash.com/random?salmon",
      "time": "50 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Tomato Pasta",
      "imageSrc": "https://source.unsplash.com/random?pasta",
      "time": "35 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.0
  },
  {
      "name": "Vegan Salad",
      "imageSrc": "https://source.unsplash.com/random?salad",
      "time": "20 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.9
  },
  {
      "name": "Fried Chicken",
      "imageSrc": "https://source.unsplash.com/random?friedChicken",
      "time": "55 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Mushroom Risotto",
      "imageSrc": "https://source.unsplash.com/random?risotto",
      "time": "45 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Burger",
      "imageSrc": "https://source.unsplash.com/random?burger",
      "time": "30 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.2
  },
  {
      "name": "Paneer Tikka",
      "imageSrc": "https://source.unsplash.com/random?paneerTikka",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.4
  },
  {
      "name": "BBQ Ribs",
      "imageSrc": "https://source.unsplash.com/random?ribs",
      "time": "70 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Caesar Salad",
      "imageSrc": "https://source.unsplash.com/random?caesarSalad",
      "time": "25 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.8
  },
  {
      "name": "Fish Tacos",
      "imageSrc": "https://source.unsplash.com/random?fishTacos",
      "time": "35 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Chocolate Cake",
      "imageSrc": "https://source.unsplash.com/random?chocolateCake",
      "time": "90 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.9
  }
  ];
  
  const recipeContainer = document.getElementById("recipeContainer");
  const searchInput = document.getElementById("searchInput");
  const showAllBtn = document.getElementById("showAllBtn");
  const showVegBtn = document.getElementById("showVegBtn");
  const showNonVegBtn = document.getElementById("showNonVegBtn");
  const above4_5Radio = document.getElementById("above4.5");
  const below4_0Radio = document.getElementById("below4.0");
  const drawer = document.querySelector(".drawer");
  const drawerBtn = document.querySelector(".drawer-btn");
  
  // Function to render the recipes based on the provided array
  function renderRecipes(recipesArray) {
    recipeContainer.innerHTML = "";
  
    recipesArray.forEach((recipe) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
  
        const image = document.createElement("img");
        image.src = recipe.imageSrc;
        recipeCard.appendChild(image);
  
        const name = document.createElement("h3");
        name.textContent = recipe.name;
        recipeCard.appendChild(name);
  
        const type = document.createElement("p");
        type.textContent = recipe.type === "veg" ? "Veg" : "Non-Veg";
        recipeCard.appendChild(type);
  
        const time = document.createElement("p");
        time.textContent = recipe.time;
        recipeCard.appendChild(time);
  
        const rating = document.createElement("p");
        rating.textContent = `Rating: ${recipe.rating.toFixed(1)}`;
        recipeCard.appendChild(rating);
  
        const likeBtn = document.createElement("span");
        likeBtn.classList.add("like-btn");
        likeBtn.textContent = recipe.isLiked ? "❤️" : "♡";
        recipeCard.appendChild(likeBtn);
  
        recipeContainer.appendChild(recipeCard);
    });
  }
  
  // Filter recipes by name
  searchInput.addEventListener("input", () => {
    const searchQuery = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery)
    );
    renderRecipes(filteredRecipes);
  });
  
  // Toggle recipe type buttons
  showAllBtn.addEventListener("click", () => {
    renderRecipes(recipes);
  });
  
  showVegBtn.addEventListener("click", () => {
    const vegRecipes = recipes.filter((recipe) => recipe.type === "veg");
    renderRecipes(vegRecipes);
  });
  
  showNonVegBtn.addEventListener("click", () => {
    const nonVegRecipes = recipes.filter((recipe) => recipe.type === "non-veg");
    renderRecipes(nonVegRecipes);
  });
  
  // Filter recipes by rating
  above4_5Radio.addEventListener("click", () => {
    const highRatedRecipes = recipes.filter((recipe) => recipe.rating > 4.5);
    renderRecipes(highRatedRecipes);
  });
  
  below4_0Radio.addEventListener("click", () => {
    const lowRatedRecipes = recipes.filter((recipe) => recipe.rating < 4.0);
    renderRecipes(lowRatedRecipes);
  });
  
  // Toggle mobile drawer
  drawerBtn.addEventListener("click", () => {
    drawer.classList.toggle("active");
  });
  
  // Initial rendering of all recipes
  renderRecipes(recipes);
  
  