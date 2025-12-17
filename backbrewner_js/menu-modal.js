// DATABASE OF ALL PRODUCTS with PRICES added
const productsDatabase = {
  // ====================================================
  // 1. MENU PAGE (DRINKS)
  // ====================================================

  // --- Hot Coffee ---
  "brewed_coffee": { name: "Brewed Coffee", image: "images/brewed_coffee.jpg", calories: 5, price: 120, description: "Freshly brewed hot coffee made from our house blend beans." },
  "espresso": { name: "Espresso", image: "images/expresso.jpg", calories: 5, price: 110, description: "A concentrated shot of rich, full-bodied coffee." },
  "cappuccino": { name: "Cappuccino", image: "images/cappuccino.jpg", calories: 120, price: 140, description: "Espresso topped with steamed milk and a thick layer of foam." },
  "latte": { name: "Café Latte", image: "images/latte.jpg", calories: 150, price: 150, description: "Espresso with steamed milk and a light layer of foam." },
  "mocha_hot": { name: "Café Mocha", image: "images/mocha.jpg", calories: 250, price: 160, description: "A delicious blend of espresso, steamed milk, and rich chocolate." },
  "flat_white": { name: "Flat White", image: "images/flat_white.jpg", calories: 110, price: 150, description: "Espresso with silky microfoam milk for a velvety texture." },
  "macchiato": { name: "Macchiato", image: "images/macchiato.jpg", calories: 15, price: 130, description: "Espresso 'stained' with a dash of frothy milk." },
  "americano": { name: "Americano", image: "images/hotamericano.jpg", calories: 5, price: 120, description: "Espresso diluted with hot water for a classic black coffee taste." },

  // --- Cold Coffee ---
  "iced_coffee": { name: "Iced Coffee", image: "images/iced_coffee.jpg", calories: 80, price: 130, description: "Our signature coffee poured over ice." },
  "cold_brew": { name: "Cold Brew", image: "images/cold_brew.jpg", calories: 15, price: 160, description: "Steeped for 24 hours for a smooth, less acidic taste." },
  "iced_mocha": { name: "Iced Mocha", image: "images/mocha2.jpg", calories: 280, price: 170, description: "Chilled espresso and chocolate served over ice." },
  "iced_caramel": { name: "Iced Caramel", image: "images/caramel_latte.jpg", calories: 250, price: 170, description: "Sweet caramel blended with coffee and milk over ice." },

  // --- Hot Tea ---
  "green_tea": { name: "Green Tea", image: "images/hotgreentea.jpg", calories: 2, price: 100, description: "Antioxidant-rich green tea leaves steeped to perfection." },
  "earl_grey": { name: "Earl Grey", image: "images/earltea.jpg", calories: 2, price: 110, description: "Black tea flavored with the oil of bergamot." },
  "chamomile": { name: "Chamomile", image: "images/herbal_tea3.jpg", calories: 0, price: 100, description: "Soothing floral tea, perfect for relaxation." },
  "jasmine_tea": { name: "Jasmine Tea", image: "images/herbal_tea4.jpg", calories: 2, price: 110, description: "Fragrant tea infused with jasmine blossoms." },

  // --- Cold Tea ---
  "classic_iced_tea": { name: "Classic Iced Tea", image: "images/icedtea.jpg", calories: 90, price: 120, description: "Refreshing black tea served ice cold with lemon." },
  "peach_iced_tea": { name: "Peach Iced Tea", image: "images/icedpeachtea.jpg", calories: 110, price: 130, description: "Sweet and fruity peach flavored iced tea." },
  "iced_matcha_tea": { name: "Iced Matcha", image: "images/matcha_latte.jpg", calories: 180, price: 150, description: "Premium matcha green tea mixed with milk and ice." },
  "lemon_tea": { name: "Lemon Tea", image: "images/icedlemontea.jpg", calories: 100, price: 120, description: "Zesty lemon infused tea for a citrus kick." },

  // --- Fruit Tea ---
  "passion_fruit": { name: "Passion Fruit Tea", image: "images/passiontea.jpg", calories: 130, price: 140, description: "Exotic passion fruit flavors infused in tea." },
  "strawberry_tea": { name: "Strawberry Tea", image: "images/strawberrytea.jpg", calories: 140, price: 140, description: "Sweet strawberry infusion, perfect for summer." },
  "lychee_tea": { name: "Lychee Tea", image: "images/lycheetea.jpg", calories: 135, price: 140, description: "Fragrant and sweet lychee flavored tea." },
  "mango_green_tea": { name: "Mango Green Tea", image: "images/mangotea.jpg", calories: 125, price: 140, description: "Tropical mango blended with refreshing green tea." },

  // --- Frappuccino ---
  "coffee_jelly": { name: "Coffee Jelly Frap", image: "images/frappuccino.jpg", calories: 450, price: 180, description: "Blended coffee with chewy coffee jelly cubes." },
  "vanilla_cream": { name: "Vanilla Cream Frap", image: "images/vanillafrap.jpg", calories: 380, price: 170, description: "Creamy vanilla blend (caffeine-free option)." },
  "hazelnut_frap": { name: "Hazelnut Frap", image: "images/hazelnut.jpg", calories: 420, price: 180, description: "Nutty hazelnut syrup blended with coffee and ice." },
  "java_chip": { name: "Java Chip Frap", image: "images/mocha.jpg", calories: 480, price: 190, description: "Coffee blend with chocolate chips and drizzle." },

  // --- Bottled Beverages ---
  "fresh_milk": { name: "Fresh Milk", image: "images/milk.jpg", calories: 150, price: 80, description: "Pure, fresh dairy milk." },
  "bottled_juice": { name: "Bottled Juice", image: "images/orange.jpg", calories: 140, price: 90, description: "Freshly squeezed bottled orange juice." },
  "choco_milk": { name: "Choco Milk", image: "images/hot_chocolate.jpg", calories: 200, price: 100, description: "Rich and creamy chocolate milk." },
  "mineral_water": { name: "Mineral Water", image: "images/mineral.jpg", calories: 0, price: 40, description: "Clean and refreshing bottled water." },

  // ====================================================
  // 2. PRODUCTS PAGE (MERCH & BEANS)
  // ====================================================
  "house_blend": { name: "House Blend", image: "images/house_blend.png", calories: 5, price: 450, description: "Our signature blend." },
  "espresso_roast": { name: "Espresso Roast", image: "images/expresso_roast_beans.jpg", calories: 5, price: 480, description: "Strong and intense roast." },
  "medium_roast": { name: "Medium Roast", image: "images/medium_roast_beans.jpg", calories: 5, price: 450, description: "Balanced flavor profile." },
  "dark_roast": { name: "Dark Roast", image: "images/dark_roast_beans.jpg", calories: 5, price: 480, description: "Bold and smoky notes." },
  "decaf_beans": { name: "Decaf Beans", image: "images/decaf_coffee_beans.jpg", calories: 5, price: 500, description: "All the flavor, none of the caffeine." },
  "colombia_origin": { name: "Colombia Origin", image: "images/single_origin_beans_colombia.jpg", calories: 5, price: 550, description: "Rich and mild." },
  "ethiopia_origin": { name: "Ethiopia Origin", image: "images/single_origin_beans_ethiopia.jpg", calories: 5, price: 580, description: "Fruity and floral notes." },
  "brazil_origin": { name: "Brazil Origin", image: "images/single_origin_beans_brazil.jpg", calories: 5, price: 520, description: "Nutty and chocolatey." },
  "bottled_iced_coffee": { name: "Bottled Iced Coffee", image: "images/bottled_iced_coffee.png", calories: 120, price: 150, description: "Classic chilled coffee." },
  "bottled_cold_brew": { name: "Bottled Cold Brew", image: "images/bottled_cold_brew.png", calories: 15, price: 180, description: "Steeped for 24 hours." },
  "bottled_matcha": { name: "Bottled Matcha", image: "images/bottled_macha_latte.png", calories: 180, price: 170, description: "Creamy green tea latte." },
  "bottled_choco": { name: "Bottled Choco", image: "images/bottled_choco_drink.png", calories: 220, price: 160, description: "Rich chocolate drink." },
  "coffee_concentrate": { name: "Coffee Concentrate", image: "images/coffee_concentrated_bottle.png", calories: 10, price: 250, description: "Potent base for your drinks." },
  "coffee_drip_bags": { name: "Coffee Drip Bags", image: "images/coffee_drip_bags.png", calories: 5, price: 350, description: "Single serve convenience." },
  "instant_coffee": { name: "Instant Coffee", image: "images/instant_coffee_sashets.png", calories: 5, price: 250, description: "Quick and easy sachets." },
  "branded_mug": { name: "Branded Mug", image: "images/branded_ceramic_mug.png", calories: 0, price: 300, description: "High quality ceramic mug." },

  // ====================================================
  // NEW: FEATURED ITEMS DATA (For accurate pop-up)
  // ====================================================
  "featured_caramel_latte": { name: "Caramel Latte", image: "images/caramel_latte.png", calories: 260, price: 180, description: "A special customer-favorite caramel latte, featuring a limited-time drizzle and richer espresso shot." },
  
  "featured_matcha_cream": { name: "Matcha Cream", image: "images/matcha_cream.png", calories: 350, price: 160, description: "Our best-selling Matcha Cream drink, made with a blend of premium matcha and house-made whipped cream." },

  // ====================================================
  // 3. FOOD PAGE (BREAKFAST, LUNCH, DINNER, PASTRIES)
  // ====================================================
  // --- Breakfast ---
  "tuna_melt": { name: "Tuna Melt", image: "images/tuna_melt_sandwich.jpg", calories: 450, price: 180, description: "Toasted sandwich with tuna and cheese." },
  "ham_cheese_panini": { name: "Ham & Cheese Panini", image: "images/ham_cheese_panini.jpg", calories: 400, price: 170, description: "Grilled panini with ham." },
  "clubhouse_sandwich": { name: "Clubhouse Sandwich", image: "images/clubhouse_sandwich.jpg", calories: 550, price: 220, description: "Classic triple decker." },
  "blt_sandwich": { name: "BLT Sandwich", image: "images/blt_sandwich.jpg", calories: 420, price: 190, description: "Bacon, lettuce, tomato." },
  "grilled_chicken_sandwich": { name: "Grilled Chicken Sandwich", image: "images/grilled_chicken_sandwich.jpg", calories: 380, price: 180, description: "Healthy grilled chicken." },
  "crispy_chicken_sandwich": { name: "Crispy Chicken Sandwich", image: "images/crispy_chicken_sandwich.jpg", calories: 520, price: 200, description: "Fried chicken breast sandwich." },

  // --- Lunch ---
  "classic_beef_burger": { name: "Classic Beef Burger", image: "images/classic_beef_burger.jpg", calories: 600, price: 250, description: "100% Beef patty." },
  "cheese_burger_deluxe": { name: "Cheese Burger Deluxe", image: "images/cheese_burger_deluxe.jpg", calories: 700, price: 280, description: "Burger with extra cheese." },
  "chicken_caesar_salad": { name: "Caesar Salad", image: "images/chicken_caesar_salad.jpg", calories: 350, price: 220, description: "Fresh greens with chicken." },
  "garden_salad": { name: "Garden Salad", image: "images/garden_fresh_salad.jpg", calories: 200, price: 180, description: "Healthy mix of vegetables." },
  "beef_nachos": { name: "Beef Nachos", image: "images/beef_nachos.jpg", calories: 650, price: 300, description: "Great for sharing." },
  "cheesy_fries": { name: "Cheesy Fries", image: "images/cheesy_fries.jpg", calories: 450, price: 150, description: "Fries topped with cheese sauce." },
  "fried_chicken": { name: "Fried Chicken", image: "images/fried_chicken.jpg", calories: 500, price: 250, description: "Crispy skin and juicy meat." },
  "chicken_inasal": { name: "Chicken Inasal", image: "images/chicken_inasal.jpg", calories: 450, price: 240, description: "Grilled lemongrass chicken." },

  // --- Pastries ---
  "choco_cookies": { name: "Choco Cookies", image: "images/chocolate_chip_coockies.jpg", calories: 250, price: 80, description: "Sweet chocolate chip cookies." },
  "blueberry_muffin": { name: "Blueberry Muffin", image: "images/blueberry_muffin.jpg", calories: 300, price: 100, description: "Baked fresh daily." },
  "banana_bread": { name: "Banana Bread", image: "images/banana_bread.jpg", calories: 280, price: 90, description: "Moist banana loaf." },
  "carrot_cake": { name: "Carrot Cake", image: "images/carrot_cake.jpg", calories: 350, price: 150, description: "Slice of carrot cake." },
  "red_velvet_cupcake": { name: "Red Velvet Cupcake", image: "images/red_velvet_cupcake.jpg", calories: 320, price: 120, description: "Topped with cream cheese." },
  "cheesecake": { name: "Cheesecake", image: "images/cheesecake_slice.jpg", calories: 400, price: 180, description: "Creamy cheesecake slice." },
  "lava_cake": { name: "Lava Cake", image: "images/chocolate_lava_cake.jpg", calories: 450, price: 200, description: "Warm chocolate cake." },
  "mango_float": { name: "Mango Float", image: "images/mango_float.jpg", calories: 300, price: 160, description: "Chilled mango dessert." },
  "leche_flan": { name: "Leche Flan", image: "images/leche_flan.jpg", calories: 220, price: 120, description: "Classic caramel custard." },

  // --- Dinner ---
  "beef_steak": { name: "Beef Steak", image: "images/beef_steak.jpg", calories: 600, price: 350, description: "Hearty beef meal." },
  "grilled_steak": { name: "Grilled Steak", image: "images/grilled_beef_steak.jpg", calories: 650, price: 380, description: "Premium grilled beef." },
  "beef_bulgogi": { name: "Beef Bulgogi", image: "images/beef_bulgogi.jpg", calories: 550, price: 320, description: "Sweet korean beef." },
  "beef_kare_kare": { name: "Beef Kare-Kare", image: "images/beef_kare-kare.jpg", calories: 700, price: 400, description: "Rich peanut sauce." },
  "beef_caldereta": { name: "Beef Caldereta", image: "images/beef_caldereta.jpg", calories: 600, price: 350, description: "Spicy beef stew." },
  "chicken_curry": { name: "Chicken Curry", image: "images/chicken_curry.jpg", calories: 550, price: 300, description: "Creamy curry sauce." },
  "chicken_adobo": { name: "Chicken Adobo", image: "images/chicken_adobo.jpg", calories: 500, price: 280, description: "Classic pinoy dish." },
  "chicken_tinola": { name: "Chicken Tinola", image: "images/chicken_tinola.jpg", calories: 350, price: 260, description: "Comforting soup." },

  // ====================================================
  // 4. PREVIOUSLY FEATURED ITEMS
  // ====================================================
  "previous_vanilla_brew": { name: "Vanilla Iced Brew", image: "images/vanilla_iced_brew.png", calories: 140, price: 150, description: "A smooth vanilla-infused cold brew, featured last month for its creamy finish." },
  "previous_coffee_jelly": { name: "Coffee Jelly", image: "images/coffee_jelly.png", calories: 220, price: 160, description: "Our limited edition refreshing coffee drink with chewy coffee jelly cubes." },
  "previous_brown_sugar": { name: "Brown Sugar Latte", image: "images/brown_sugar_latte.png", calories: 250, price: 170, description: "Rich brown sugar syrup blended with creamy milk and espresso. A sweet seasonal treat." },
  "previous_winter_mocha": { name: "Winter Mocha", image: "images/winter_mocha.png", calories: 280, price: 180, description: "A holiday special mocha with a hint of peppermint and dark chocolate." },

  // ====================================================
  // 5. FAVORITES PAGE ITEMS (NEWLY ADDED)
  // ====================================================
  "fav_caramel_latte": { name: "Caramel Latte", image: "images/caramel_latte.png", calories: 260, price: 180, description: "Our #1 Customer Favorite. Perfectly balanced espresso and caramel." },
  "fav_matcha_cream": { name: "Matcha Cream", image: "images/matcha_cream.png", calories: 350, price: 160, description: "Top Rated by matcha lovers for its creamy texture and authentic taste." },
  "fav_vanilla_brew": { name: "Vanilla Iced Brew", image: "images/vanilla_iced_brew.png", calories: 140, price: 150, description: "A seasonal hit that became a permanent favorite due to high demand." },
  "fav_coffee_jelly": { name: "Coffee Jelly", image: "images/coffee_jelly.png", calories: 220, price: 160, description: "A fun and textured drink that customers crave daily." },
  "fav_brown_sugar": { name: "Brown Sugar Latte", image: "images/brown_sugar_latte.png", calories: 250, price: 170, description: "Sweet, rich, and comforting. A classic favorite." }

};

// MODAL LOGIC
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalCalories = document.getElementById("modal-calories");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.getElementsByClassName("close")[0];

// NEW: Get the featured sticker element
const featuredSticker = document.getElementById("featured-sticker");

function openModal(productId) {
  const product = productsDatabase[productId];
  if (product) {
    modalImg.src = product.image;
    modalName.textContent = product.name;
    modalCalories.textContent = product.calories;
    modalPrice.textContent = product.price;
    modalDescription.textContent = product.description;
    
    // Logic to show/hide the sticker based on which page is calling it
    // We assume any call from featured.html should show the sticker.
    if (featuredSticker) {
        // If the product ID starts with 'featured_', show the sticker.
        // Also show for house_blend as per original request.
        if (productId.startsWith('featured_') || productId === 'house_blend') {
             featuredSticker.style.display = "block";
        } else {
             featuredSticker.style.display = "none";
        }
    }
    
    modal.style.display = "flex";
  }
}

// Close modal when clicking the 'x'
if (closeBtn) {
  closeBtn.onclick = function() {
    modal.style.display = "none";
    // HIDE THE STICKER WHEN CLOSING
    if (featuredSticker) {
        featuredSticker.style.display = "none";
    }
  }
}

// Close modal when clicking outside the content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // HIDE THE STICKER WHEN CLOSING
    if (featuredSticker) {
        featuredSticker.style.display = "none";
    }
  }
}