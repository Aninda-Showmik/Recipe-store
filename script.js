
const recipes = [
    {
        title: 'Spaghetti Bolognese',
        ingredients: ['500g ground beef', '1 onion', '2 cloves garlic', '400g tomato sauce', 'Spaghetti', 'Salt', 'Pepper', 'Olive oil'],
        instructions: 'Cook the spaghetti according to package instructions. In a pan, brown the ground beef with chopped onions and garlic. Add tomato sauce and season with salt and pepper. Serve the Bolognese sauce over the cooked spaghetti.',
        image: 'https://supervalu.ie/thumbnail/800x600/var/files/real-food/recipes/Uploaded-2020/spaghetti-bolognese-recipe.jpg'
    },
    {
        title: 'Chicken Stir Fry',
        ingredients: ['300g chicken breast', '1 bell pepper', '1 broccoli', '2 tbsp soy sauce', '1 tbsp oyster sauce', '1 tsp sesame oil'],
        instructions: 'Slice chicken breast and vegetables. In a wok or pan, stir-fry chicken until cooked. Add vegetables and sauces. Stir-fry until vegetables are tender. Drizzle with sesame oil before serving.',
        image: 'https://myfoodstory.com/wp-content/uploads/2021/10/Dragon-Chicken-1.jpg'
    },
    {
        title: 'Chocolate Cake',
        ingredients: ['2 cups all-purpose flour', '1 3/4 cups sugar', '3/4 cup unsweetened cocoa powder', '1 1/2 tsp baking powder', '1 1/2 tsp baking soda', '1 tsp salt', '2 eggs', '1 cup milk', '1/2 cup vegetable oil', '2 tsp vanilla extract', '1 cup boiling water'],
        instructions: 'Preheat oven to 350°F (175°C). Grease and flour baking pans. In a large bowl, combine dry ingredients. Add eggs, milk, oil, and vanilla. Mix well. Stir in boiling water. Pour batter into prepared pans. Bake for 30-35 minutes or until a toothpick comes out clean.',
        image: 'https://alldayidreamaboutfood.com/wp-content/uploads/2023/05/Death-by-Keto-Chocolate-Cake.jpg'
    },
    {
        title: 'Lasagna',
        ingredients: ['1 pound ground beef', '1 onion', '2 cloves garlic', '2 cups ricotta cheese', '2 cups shredded mozzarella cheese', '2 cups grated Parmesan cheese', '2 cups marinara sauce', 'Lasagna noodles', 'Salt', 'Pepper', 'Olive oil'],
        instructions: 'Preheat oven to 375°F (190°C). In a pan, brown ground beef with chopped onions and garlic. In a separate bowl, mix ricotta, mozzarella, and Parmesan cheeses. In a baking dish, layer lasagna noodles, meat sauce, and cheese mixture. Repeat layers. Bake for 25-30 minutes or until bubbly and golden.',
        image: 'https://png.pngtree.com/background/20230321/original/pngtree-tasty-lasagna-on-black-plate-picture-image_2153649.jpg'
    },
    {
        title: 'Shingara',
        ingredients: ['1 cup all-purpose flour', '1/2 cup vegetable oil', '1/2 cup water', '1 cup boiled and shredded chicken', '1 cup chopped onions', '1/2 cup chopped cilantro', '1/2 cup chopped potatoes', '1 tsp cumin powder', '1 tsp coriander powder', 'Salt', 'Oil for frying'],
        instructions: 'Mix flour, oil, and water to make a dough. Roll out dough into thin circles. In a bowl, mix shredded chicken, onions, cilantro, potatoes, and spices. Place a spoonful of the mixture in the center of each circle. Fold and seal to make a triangular shape. Deep fry until golden brown.',
        image: 'https://assets-global.website-files.com/60d34b8627f6e735cf28df18/637cb91f9787b2adc3e1c231_Phulkopir%20Shingara%201.1.jpg'
    },

    {
        title: 'Chicken Alfredo Pasta',
        ingredients: ['2 cups fettuccine pasta', '1 cup cooked and shredded chicken', '1 cup heavy cream', '1/2 cup grated Parmesan cheese', '2 cloves garlic (minced)', '2 tbsp butter', 'Salt', 'Pepper', 'Chopped parsley for garnish'],
        instructions: 'Cook fettuccine pasta according to package instructions. In a pan, melt butter and sauté minced garlic. Add cooked chicken, heavy cream, and Parmesan cheese. Stir until the sauce thickens. Season with salt and pepper. Toss the cooked pasta in the sauce. Garnish with chopped parsley.',
        image: 'https://www.savorytooth.com/wp-content/uploads/2017/03/lightened-up-chicken-alfredo-pasta-3.jpg'
    },
    {
        title: 'Vegetable Fried Rice',
        ingredients: ['2 cups cooked rice (preferably chilled)', '1 cup mixed vegetables (carrots, peas, corn)', '2 eggs (beaten)', '2 tbsp soy sauce', '1 tbsp sesame oil', '2 green onions (chopped)', 'Salt', 'Pepper'],
        instructions: 'In a wok or pan, heat sesame oil. Add mixed vegetables and stir-fry until tender. Push the vegetables to the side and pour beaten eggs into the pan. Scramble the eggs and mix with the vegetables. Add chilled cooked rice, soy sauce, salt, and pepper. Stir-fry until well combined. Garnish with chopped green onions.',
        image: 'https://nishkitchen.com/wp-content/uploads/2018/07/Vegetable-Fried-Rice-1B.jpg'
    },
    {
        title: 'Pancakes',
        ingredients: ['1 cup all-purpose flour', '2 tbsp sugar', '1 tsp baking powder', '1/2 tsp baking soda', '1/4 tsp salt', '3/4 cup buttermilk', '1 large egg', '2 tbsp unsalted butter (melted)', 'Maple syrup for serving'],
        instructions: 'In a bowl, whisk together flour, sugar, baking powder, baking soda, and salt. In another bowl, whisk together buttermilk, egg, and melted butter. Pour wet ingredients into dry ingredients and stir until just combined. Heat a griddle or non-stick pan over medium heat. Pour 1/4 cup of batter for each pancake. Cook until bubbles form on the surface, then flip and cook until golden brown. Serve with maple syrup.',
        image: 'https://img.freepik.com/premium-photo/delicious-fresh-pancakes-black-plate-against-dark-concrete-background_73989-27193.jpg?size=626&ext=jpg'
    },
    {
        title: 'Chicken Noodle Soup',
        ingredients: ['8 cups chicken broth', '1 cup diced cooked chicken', '2 carrots (sliced)', '2 celery stalks (sliced)', '1 onion (chopped)', '2 cloves garlic (minced)', '1 tsp dried thyme', '1 bay leaf', '2 cups cooked egg noodles', 'Salt', 'Pepper', 'Fresh parsley for garnish'],
        instructions: 'In a large pot, combine chicken broth, diced chicken, carrots, celery, onion, garlic, thyme, and bay leaf. Bring to a boil, then reduce heat and simmer until vegetables are tender. Add cooked egg noodles and season with salt and pepper. Remove the bay leaf. Garnish with fresh parsley before serving.',
        image: 'https://i.pinimg.com/736x/7d/77/cc/7d77cc7573e33735c3ab32abd71504d0.jpg'
    },
    {
        title: 'Caprese Salad',
        ingredients: ['4 large tomatoes (sliced)', '200g fresh mozzarella cheese (sliced)', 'Fresh basil leaves', 'Balsamic glaze', 'Extra virgin olive oil', 'Salt', 'Pepper'],
        instructions: 'Arrange tomato and mozzarella slices on a serving platter. Tuck fresh basil leaves between the tomato and mozzarella slices. Drizzle with balsamic glaze and olive oil. Season with salt and pepper. Serve immediately.',
        image: 'https://www.thebossykitchen.com/wp-content/uploads/2022/05/Caprese-Salad-on-black-background-square-photo0-e1691234198377.jpg'
    },
    {
        title: 'Chicken Caesar Salad',
        ingredients: ['2 boneless, skinless chicken breasts', 'Salt', 'Pepper', '1 tbsp olive oil', 'Romaine lettuce (chopped)', '1 cup croutons', '1/2 cup grated Parmesan cheese', 'Caesar dressing'],
        instructions: 'Season chicken breasts with salt and pepper. Heat olive oil in a pan over medium-high heat. Cook chicken until golden brown and cooked through. Slice the chicken. In a large bowl, toss chopped romaine lettuce with croutons, Parmesan cheese, and Caesar dressing. Top with sliced chicken. Serve immediately.',
        image: 'https://citrusanddelicious.com/wp-content/uploads/2022/02/Best-Arugula-Salad-11.jpg'
    },
    {
        title: 'Mango Salsa',
        ingredients: ['2 ripe mangos (peeled, pitted, and diced)', '1/2 red onion (finely chopped)', '1 red bell pepper (diced)', '1 jalapeño (seeds and ribs removed, finely chopped)', '1/4 cup fresh cilantro (chopped)', 'Juice of 1 lime', 'Salt', 'Tortilla chips for serving'],
        instructions: 'In a bowl, combine diced mango, red onion, red bell pepper, jalapeño, cilantro, lime juice, and salt. Stir until well combined. Refrigerate for at least 30 minutes to let the flavors meld. Serve with tortilla chips.',
        image: 'https://www.onceuponachef.com/images/2021/03/Mango-Salsa-1024x715.jpg'
    },
    {
        title: 'Vegetarian Pizza',
        ingredients: ['1 pizza dough', '1/2 cup pizza sauce', '1 cup shredded mozzarella cheese', '1/2 cup sliced bell peppers', '1/2 cup sliced cherry tomatoes', '1/4 cup sliced black olives', '1/4 cup sliced red onion', 'Fresh basil leaves', 'Red pepper flakes (optional)'],
        instructions: 'Preheat the oven according to the pizza dough package instructions. Roll out the pizza dough on a floured surface. Transfer the dough to a pizza stone or baking sheet. Spread pizza sauce evenly over the dough. Sprinkle with shredded mozzarella cheese. Arrange bell peppers, cherry tomatoes, black olives, and red onion on top. Bake until the crust is golden and the cheese is melted. Garnish with fresh basil leaves and red pepper flakes if desired.',
        image: 'https://www.modernhoney.com/wp-content/uploads/2020/05/Homemade-Pizza-Recipe-2-768x1152.jpg'
    },
    {
        title: 'Avocado Toast',
        ingredients: ['2 slices whole-grain bread', '1 ripe avocado', 'Salt', 'Pepper', 'Red pepper flakes (optional)', 'Lemon wedges for serving'],
        instructions: 'Toast the bread slices. While the bread is toasting, mash the ripe'
    },
    {
        title: 'Bengali Fish Curry (Maacher Jhol)',
        ingredients: ['500g fish (rohu or any freshwater fish)', '1 potato (cut into wedges)', '1 tomato (chopped)', '1 onion (sliced)', '2 green chilies (slit)', '1 tsp turmeric powder', '1 tsp red chili powder', '1 tsp cumin powder', '1 tsp mustard oil', 'Salt', 'Water', 'Fresh coriander leaves for garnish'],
        instructions: 'Marinate fish with turmeric powder and salt. Heat mustard oil in a pan. Fry the fish until golden brown. In the same oil, sauté sliced onion until golden. Add turmeric, red chili, and cumin powder. Add chopped tomato, green chilies, and potato wedges. Cook until spices are fragrant. Add water and salt. Bring it to a boil. Add fried fish and simmer until the fish is cooked through. Garnish with fresh coriander leaves.',
        image: 'https://www.whiskaffair.com/wp-content/uploads/2018/03/Macher-Jhol-2.jpg'
    },
    {
        title: 'Paneer Butter Masala',
        ingredients: ['200g paneer (cubed)', '1 cup tomato puree', '1 onion (finely chopped)', '2 tbsp butter', '1 tsp ginger-garlic paste', '1/2 cup cashew paste', '1 tsp red chili powder', '1 tsp garam masala', '1/2 cup cream', 'Salt', 'Fresh coriander leaves for garnish'],
        instructions: 'In a pan, heat butter and sauté chopped onions until golden brown. Add ginger-garlic paste and sauté until the raw smell disappears. Add tomato puree, red chili powder, and cashew paste. Cook until the oil separates. Add cubed paneer and garam masala. Cook for a few minutes. Add cream and salt. Simmer until the gravy thickens. Garnish with fresh coriander leaves.',
        image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/03/Paneer-Butter-Masala-Recipe-14.jpg'
    },
    {
        title: 'Biryani',
        ingredients: ['2 cups basmati rice', '500g chicken (or lamb)', '1 cup yogurt', '1 cup fried onions', '1/2 cup mint leaves', '1/2 cup coriander leaves', '4 cups water', '3 tbsp biryani masala', '1 tsp ghee', 'Salt', 'Saffron strands soaked in milk', 'Fried cashews and raisins for garnish'],
        instructions: 'Marinate chicken with yogurt, biryani masala, and salt. In a pot, layer half-cooked rice, marinated chicken, fried onions, mint leaves, and coriander leaves. Repeat the layers. Top with saffron-infused milk, ghee, and fried cashews-raisins. Cover and cook on low heat until rice and chicken are fully cooked.',
        image: 'https://www.archanaskitchen.com/images/archanaskitchen/Indian_Breads/Chicken_Biryani_Recipe.jpg'
    },
    {
        title: 'Chingri Macher Malai Curry (Prawn Coconut Curry)',
        ingredients: ['250g prawns', '1 cup coconut milk', '1 onion (finely chopped)', '1 tsp ginger paste', '1 tsp garlic paste', '1/2 tsp turmeric powder', '1 tsp red chili powder', '1 tsp cumin powder', '1 tsp garam masala', '2 tbsp mustard oil', 'Salt', 'Fresh coriander leaves for garnish'],
        instructions: 'Marinate prawns with turmeric powder and salt. Heat mustard oil in a pan. Fry the prawns until they turn pink. In the same oil, sauté chopped onions until golden. Add ginger-garlic paste, turmeric powder, red chili powder, and cumin powder. Cook until the spices release aroma. Add coconut milk and garam masala. Simmer until the curry thickens. Add fried prawns. Garnish with fresh coriander leaves.',
        image: 'https://www.antoskitchen.com/wp-content/uploads/2016/11/Prawn-Coconut-Curry.jpg'
    },
    {
        title: 'Aloo Paratha',
        ingredients: ['2 cups whole wheat flour', '2 large potatoes (boiled and mashed)', '1 tsp cumin powder', '1 tsp coriander powder', '1/2 tsp red chili powder', 'Salt', 'Ghee for cooking'],
        instructions: 'Mix mashed potatoes with cumin powder, coriander powder, red chili powder, and salt. Knead the whole wheat flour with water to make a soft dough. Take a small portion of the dough, flatten it, and stuff it with the potato mixture. Roll it into a paratha. Cook on a hot griddle with ghee until both sides are golden brown.',
        image: 'https://www.whiskaffair.com/wp-content/uploads/2019/09/Aloo-Paratha-3.jpg'
    },
    {
        title: 'Bengali Aloo Posto',
        ingredients: ['4 potatoes (medium-sized)', '3 tbsp poppy seeds', '1/2 tsp mustard seeds', '2 green chilies (slit)', '1/2 tsp turmeric powder', 'Mustard oil', 'Salt'],
        instructions: 'Peel and cut potatoes into cubes. Grind poppy seeds to a paste. Heat mustard oil in a pan, add mustard seeds, and let them splutter. Add cubed potatoes, turmeric powder, and salt. Cook until potatoes are half-done. Add poppy seed paste and green chilies. Cook until potatoes are fully cooked and the poppy seed paste is well-coated. Drizzle with mustard oil before serving.',
        image: 'https://www.antoskitchen.com/wp-content/uploads/2016/09/Aloo-Posto-Recipe.jpg'
    },
    {
        title: 'Butter Chicken (Murgh Makhani)',
        ingredients: ['500g chicken', '1 cup tomato puree', '1/2 cup butter', '1/2 cup cream', '1 tbsp ginger-garlic paste', '1 tsp red chili powder', '1 tsp garam masala', '1/2 tsp kasuri methi (dried fenugreek leaves)', 'Salt'],
        instructions: 'Marinate chicken with red chili powder, ginger-garlic paste, and salt. Grill or cook the chicken until done. In a pan, heat butter, add tomato puree, garam masala, and kasuri methi. Cook until the oil separates. Add grilled chicken and cream. Simmer until the chicken is coated with the sauce.',
        image: 'https://www.cookwithmanali.com/wp-content/uploads/2019/07/Butter-Chicken-1.jpg'
    },
    {
        title: 'Thai Green Curry',
        ingredients: ['200g chicken (sliced)', '1 can coconut milk', '2 tbsp green curry paste', '1 cup mixed vegetables (bell peppers, bamboo shoots, baby corn)', '1 tbsp fish sauce', '1 tsp sugar', 'Basil leaves for garnish', 'Cooked jasmine rice'],
        instructions: 'In a pan, heat coconut milk and green curry paste. Add sliced chicken and cook until it changes color. Add mixed vegetables, fish sauce, and sugar. Simmer until the vegetables are tender. Garnish with basil leaves. Serve with jasmine rice.',
        image: 'https://www.cookingwithnart.com/wp-content/uploads/2021/07/Thai-Green-Beef-Curry-with-Eggplant.jpg'
    },
    {
        title: 'Mango Lassi',
        ingredients: ['1 cup ripe mango (peeled and cubed)', '1 cup plain yogurt', '1/2 cup milk', '2 tbsp sugar', 'Ice cubes', 'Mint leaves for garnish'],
        instructions: 'Blend ripe mango, yogurt, milk, and sugar until smooth. Add ice cubes and blend again. Pour into glasses and garnish with zafran.',
        image: 'https://simmertoslimmer.com/wp-content/uploads/2016/06/Mango-Lassi-Recipe.jpg'
    },
    {
        title: 'Greek Salad',
        ingredients: ['2 cups cherry tomatoes (halved)', '1 cucumber (sliced)', '1 red onion (thinly sliced)', '200g feta cheese (cubed)', 'Kalamata olives', '1/4 cup olive oil', '2 tbsp red wine vinegar', '1 tsp dried oregano', 'Salt', 'Pepper'],
        instructions: 'In a large bowl, combine cherry tomatoes, cucumber, red onion, feta cheese, and Kalamata olives. In a small bowl, whisk together olive oil, red wine vinegar, dried oregano, salt, and pepper. Pour the dressing over the salad and toss to combine.',
        image: 'https://cdn3.didevelop.com/public/product_images/3137/533_6c3010c7663ede730b7a1527f430106b.jpg'
    },
    {
        title: 'Japanese Miso Soup',
        ingredients: ['4 cups dashi (fish stock)', '3 tbsp miso paste', '100g tofu (cubed)', '2 green onions (sliced)', 'Seaweed (optional)', 'Soy sauce (to taste)', 'Mirin (to taste)'],
        instructions: 'In a pot, bring dashi to a simmer. Dissolve miso paste in a ladle with some broth, then add it to the pot. Add tofu, green onions, seaweed, soy sauce, and mirin. Simmer for a few minutes, but do not boil. Serve hot.',
        image: 'https://beach.kitchen/106-large_default/miso-soup.jpg'
    }


];

const recipeContainer = document.getElementById('recipe-list');
const searchInput = document.getElementById('searchInput');

function displayRecipes(filteredRecipes) {
    // Clear existing recipes
    recipeContainer.innerHTML = '';

    // Display filtered recipes
    filteredRecipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.innerHTML = ` 
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p><strong>Ingredients:</strong></p>
            <ol>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ol>
            <p><strong>Instructions:</strong></p>
            <p>${recipe.instructions}</p>
        `;
        recipeContainer.appendChild(recipeDiv);
    });
}

function searchRecipes() {
    const searchTerm = searchInput.value.toLowerCase();

    // Filter recipes based on the search term
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm)
    );

    // Display the filtered recipes
    displayRecipes(filteredRecipes);
}

// Initial display of all recipes
displayRecipes(recipes);