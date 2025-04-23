const recipes = [
    {
        name: "Aloo Paratha",
        ingredients: ["wheat flour", "potato", "onion", "spices", "ghee"],
        instructions: "Mash boiled potatoes with onion and spices. Stuff into rolled dough and cook on tawa with ghee."
    },
    {
        name: "Vegetable Pulao",
        ingredients: ["rice", "carrot", "peas", "beans", "onion", "spices"],
        instructions: "Sauté vegetables with spices, add rice and cook with water until done."
    },
    {
        name: "Paneer Bhurji",
        ingredients: ["paneer", "onion", "tomato", "spices", "capsicum"],
        instructions: "Crumble paneer and cook with sautéed onion, tomato, and spices."
    },
    {
        name: "Masoor Dal",
        ingredients: ["masoor dal", "tomato", "onion", "garlic", "spices"],
        instructions: "Boil dal and temper with sautéed onion, tomato, garlic, and spices."
    },
    {
        name: "Poha",
        ingredients: ["poha", "onion", "mustard seeds", "green chili", "turmeric", "lemon"],
        instructions: "Rinse poha. Sauté onion, mustard seeds, chili, add poha and turmeric. Finish with lemon juice."
    },
    // South Indian additions
    {
        name: "Egg Curry",
        ingredients: ["egg", "tomato", "onion", "garlic", "spices"],
        instructions: "Boil eggs. Make a curry base with onion, tomato, garlic, and spices. Add eggs and simmer."
    },
    {
        name: "Tomato Rasam",
        ingredients: ["tomato", "tamarind", "mustard seeds", "cumin", "garlic", "spices"],
        instructions: "Boil tomatoes with tamarind. Temper mustard seeds, cumin, garlic and add to rasam."
    },
    {
        name: "Fish Fry",
        ingredients: ["fish", "turmeric", "chili powder", "salt", "oil"],
        instructions: "Marinate fish with spices. Shallow fry till golden and crisp."
    },
    {
        name: "Lemon Rice",
        ingredients: ["rice", "mustard seeds", "green chili", "turmeric", "lemon"],
        instructions: "Sauté mustard seeds and chili, mix with cooked rice and turmeric. Finish with lemon juice."
    },
    {
        name: "Sambar",
        ingredients: ["toor dal", "tomato", "onion", "tamarind", "spices"],
        instructions: "Boil dal, add cooked vegetables and tamarind. Temper with mustard seeds and curry leaves."
    },
    {
        name: "Chicken Chettinad",
        ingredients: ["chicken", "onion", "tomato", "garlic", "spices", "coconut"],
        instructions: "Cook chicken with a roasted spice and coconut paste. Sauté with onion and tomato until tender."
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
    </div>
    `;
    });
    }
    }
    