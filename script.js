const recipes = [
    {
        name: "Aloo Paratha",
        ingredients: ["wheat flour", "potato", "onion", "spices", "ghee"],
        instructions: "Mash boiled potatoes with onion and spices. Stuff into rolled dough and cook on tawa with ghee.",
        
        video: "https://www.youtube.com/watch?v=Lq9cltuGvhE"
    },
    {
        name: "Vegetable Pulao",
        ingredients: ["rice", "carrot", "peas", "beans", "onion", "spices"],
        instructions: "Sauté vegetables with spices, add rice and cook with water until done.",
        
        video: "https://www.youtube.com/watch?v=pjk1-cOfmds"
    },
    {
        name: "Paneer Bhurji",
        ingredients: ["paneer", "onion", "tomato", "spices", "capsicum"],
        instructions: "Crumble paneer and cook with sautéed onion, tomato, and spices.",
        
        video: "https://www.youtube.com/watch?v=MUzjIceBV70"
    },
    {
        name: "Masoor Dal",
        ingredients: ["masoor dal", "tomato", "onion", "garlic", "spices"],
        instructions: "Boil dal and temper with sautéed onion, tomato, garlic, and spices.",
        
        video: "https://www.youtube.com/watch?v=BkgelbPRC0M"
    },
    {
        name: "Poha",
        ingredients: ["poha", "onion", "mustard seeds", "green chili", "turmeric", "lemon"],
        instructions: "Rinse poha. Sauté onion, mustard seeds, chili, add poha and turmeric. Finish with lemon juice.",
        
        video: "https://www.youtube.com/watch?v=-MUXuB1ul4g"
    },
    // South Indian additions
    {
        name: "Egg Curry",
        ingredients: ["egg", "tomato", "onion", "garlic", "spices"],
        instructions: "Boil eggs. Make a curry base with onion, tomato, garlic, and spices. Add eggs and simmer.",
        
        video: "https://www.youtube.com/watch?v=xH2iedsq0qA"
    },
    {
        name: "Tomato Rasam",
        ingredients: ["tomato", "tamarind", "mustard seeds", "cumin", "garlic", "spices"],
        instructions: "Boil tomatoes with tamarind. Temper mustard seeds, cumin, garlic and add to rasam.",
       
        video: "https://www.youtube.com/watch?v=n5xVP6urnuY"
    },
    {
        name: "Fish Fry",
        ingredients: ["fish", "turmeric", "chili powder", "salt", "oil"],
        instructions: "Marinate fish with spices. Shallow fry till golden and crisp.",
        
        video: "https://www.youtube.com/watch?v=o8lDCY2_jyw"
    },
    {
        name: "Lemon Rice",
        ingredients: ["rice", "mustard seeds", "green chili", "turmeric", "lemon"],
        instructions: "Sauté mustard seeds and chili, mix with cooked rice and turmeric. Finish with lemon juice.",
        
        video: "https://www.youtube.com/watch?v=S582ox6c4l4"
    },
    {
        name: "Sambar",
        ingredients: ["toor dal", "tomato", "onion", "tamarind", "spices"],
        instructions: "Boil dal, add cooked vegetables and tamarind. Temper with mustard seeds and curry leaves.",
        
        video: "https://www.youtube.com/watch?v=zOJEc_3_Ng8"
    },
    {
        name: "Chicken Chettinad",
        ingredients: ["chicken", "onion", "tomato", "garlic", "spices", "coconut"],
        instructions: "Cook chicken with a roasted spice and coconut paste. Sauté with onion and tomato until tender.",
        
        video: "https://www.youtube.com/watch?v=zVYa0abkdkE"
    },
    // More Non-Veg
    {
        name: "Butter Chicken",
        video: "https://www.youtube.com/watch?v=a03U45jFxOI",
        ingredients: ["chicken", "butter", "tomato", "cream", "garam masala"],
        instructions: "Marinate chicken, grill it, then simmer in a creamy spiced tomato sauce."
      },
      {
        name: "Thai Basil Chicken",
        video: "https://www.youtube.com/watch?v=entMQMVK4go",
        ingredients: ["chicken", "basil", "soy sauce", "garlic", "chili"],
        instructions: "Stir fry chicken with garlic, chili, and soy sauce. Finish with fresh basil leaves."
      },
      {
        name: "Grilled Chicken Shawarma",
        video: "https://www.youtube.com/watch?v=zEwN6bmVsCY",
        ingredients: ["chicken", "yogurt", "lemon", "garlic", "spices"],
        instructions: "Marinate chicken in yogurt and spices, then grill and serve in pita with veggies."
      },
      {
        name: "Teriyaki Chicken",
        video: "https://www.youtube.com/watch?v=jbRr01FqINo",
        ingredients: ["chicken", "soy sauce", "mirin", "sugar", "ginger"],
        instructions: "Cook chicken in a homemade teriyaki glaze until sticky and golden."
      },
      {
        name: "Chicken Biryani",
        video: "https://www.youtube.com/watch?v=95BCU1n268w",
        ingredients: ["chicken", "rice", "onion", "spices", "yogurt"],
        instructions: "Layer marinated chicken and par-cooked rice. Cook until aromatic and fluffy."
      },
      // fish
      {
        name: "Goan Fish Curry",
        video: "https://www.youtube.com/watch?v=UsQWd_o77wI",
        ingredients: ["fish", "coconut milk", "tamarind", "spices", "garlic"],
        instructions: "Simmer fish in a tangy, spicy coconut-based curry."
      },
      {
        name: "Fish Tacos",
        video: "https://www.youtube.com/watch?v=CPFxcByLeYE",
        ingredients: ["fish", "lime", "cabbage", "sour cream", "tortilla"],
        instructions: "Grill or fry fish, assemble in tortillas with cabbage and a creamy lime sauce."
      },
      {
        name: "Japanese Teriyaki Salmon",
        video: "https://www.youtube.com/watch?v=GiyHYRI1gx0",
        ingredients: ["salmon", "soy sauce", "mirin", "sugar", "ginger"],
        instructions: "Pan-sear salmon, then glaze with homemade teriyaki sauce."
      },
      {
        name: "Fish Molee",
        video: "https://www.youtube.com/watch?v=GXldXVwVhZI",
        ingredients: ["fish", "coconut milk", "green chili", "onion", "curry leaves"],
        instructions: "Kerala-style fish curry with coconut milk and light spices."
      },
      {
        name: "Lemon Garlic Butter Fish",
        video: "https://www.youtube.com/watch?v=sAmO2TUo61E",
        ingredients: ["fish", "lemon", "garlic", "butter", "parsley"],
        instructions: "Pan-fry fish fillets in garlic butter and finish with a squeeze of lemon."
        //egg recipes
      },
      {
        name: "Shakshuka",
        video: "https://www.youtube.com/watch?v=m5Kn9WmOCrw",
        ingredients: ["egg", "tomato", "onion", "bell pepper", "spices"],
        instructions: "Simmer tomatoes, onions, peppers with spices, then poach eggs in the sauce."
      },
      {
        name: "Tamago Sushi",
        video: "https://www.youtube.com/watch?v=7ExN9-pXw3s",
        ingredients: ["egg", "soy sauce", "sugar", "sushi rice", "seaweed"],
        instructions: "Make a sweet omelette, slice it, and serve over sushi rice with seaweed wrap."
      },
      {
        name: "Menemen",
        video: "https://www.youtube.com/watch?v=7fUI-nbEbN4",
        ingredients: ["egg", "tomato", "green pepper", "onion", "olive oil"],
        instructions: "Sauté vegetables in olive oil, then gently stir in eggs until soft-cooked."
      },
      {
        name: "Spanish Tortilla",
        video: "https://www.youtube.com/watch?v=epIdjMaHa_w",
        ingredients: ["egg", "potato", "onion", "olive oil", "salt"],
        instructions: "Thinly slice and fry potatoes and onion, mix with beaten eggs and cook into a thick omelette."
      },
      {
        name: "Scotch Eggs",
        video: "https://www.youtube.com/watch?v=Hs1ccQFnNZI",
        ingredients: ["egg", "sausage", "breadcrumbs", "flour", "oil"],
        instructions: "Wrap boiled eggs in sausage meat, bread them, and deep fry until crispy."
      },
      {
        name: "Huevos Rancheros",
        video: "https://www.youtube.com/watch?v=EoC-PwGjVqQ",
        ingredients: ["egg", "tortilla", "tomato", "beans", "chili"],
        instructions: "Fry eggs and serve on tortillas with spicy tomato sauce and beans."
      },
      {
        name: "Egg Bhurji",
        video: "https://www.youtube.com/watch?v=S-UEMw4kBHg",
        ingredients: ["egg", "onion", "tomato", "green chili", "spices"],
        instructions: "Scramble eggs with sautéed onions, tomatoes, green chili, and spices."
      },
      {
        name: "Omu Rice",
        video: "https://www.youtube.com/watch?v=3wSMiUaLBYo",
        ingredients: ["egg", "rice", "chicken", "ketchup", "onion"],
        instructions: "Fried rice with chicken wrapped in a thin omelette and topped with ketchup."
      }    
];

function findRecipes() {
    const input = document.getElementById("ingredientsInput").value.toLowerCase();
    const userIngredients = input.split(",").map(item => item.trim());

    const matched = recipes.filter(recipe =>
        recipe.ingredients.some(ingredient => userIngredients.includes(ingredient))
    );

    const resultDiv = document.getElementById("recipeResults");
    resultDiv.innerHTML = "";

    if (matched.length === 0) {
        resultDiv.innerHTML = "<p>No exact matches found. Try adding more ingredients!</p>";
    } else {
        matched.forEach(recipe => {
            resultDiv.innerHTML += `
                <div class="recipe">
                    <h3>${recipe.name}</h3>
                    <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
                    <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                    <a href="recipe-details.html?name=${recipe.name}" class="button">See Recipe Details</a>
                </div>
            `;
        });
    }
}
