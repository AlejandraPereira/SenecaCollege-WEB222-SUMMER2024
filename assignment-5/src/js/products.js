/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    URL: "cristofer-maximilian-AqLIkOzWDAk-unsplash.jpg",
    title: "T-Shirt unisex",
    description:
      "High-performance T-shirt, designed to offer comfort and breathability during any sporting activity.",
    price: 35.89,
    discontinued: false,
    categories: ["c1-y"]
  },
  {
    id: "P2",
    URL: "stephanie-greene-rMzg35fH6K0-unsplash.jpg",
    title: "Two-piece sports set",
    description:
      "This two-piece sports set offers comfort and style, with a fitted top and high-quality pants that allow freedom of movement.",
    price: 120,
    discontinued: false,
    categories: ["c1", "c1-w"]
  },

  {
    id: "P3",
    URL: "tikkho-maciel-2-_WkjmC8x4-unsplash.jpg",
    title: "Running Jacket",
    description:
      "This running jacket is lightweight and breathable, perfect for keeping you comfortable on all your runs.",
    price: 180,
    discontinued: false,
    categories: ["c1-m"]
  },
  {
    id: "P4",
    URL: "pexels-mart-production-8846214.jpg",
    title: "Resistance Bands",
    description: "Set of (4) durable resistance bands for strength training.",
    price: 50,
    discontinued: false,
    categories: ["c3-w"]
  },
  {
    id: "P5",
    URL: "pexels-karolina-grabowska-4498577.jpg",
    title: "Yoga Mat",
    description:
      "Designed to provide a non-slip, cushioned surface on which you can perform yoga poses with greater comfort and safety.",
    price: 100,
    discontinued: false,
    categories: ["c3-w"]
  },
  {
    id: "P6",
    URL: "prateek-katyal-FNMztJegsSA-unsplash.jpg",
    title: "Boxing Gloves",
    description:
      "Designed for a perfect fit and maximum protection, our gloves offer comfort and support during training and competitions, with a velcro closure for a secure fit.",
    price: 800,
    discontinued: false,
    categories: ["c3-w"]
  },
  {
    id: "P7",
    URL: "aly-ramirez-xcLvUbETjWs-unsplash.jpg",
    title: "Gym bag",
    description: "Water and tear-resistant gym bag.",
    price: 80,
    discontinued: false,
    categories: ["c3-m"]
  },

  {
    id: "P8",
    URL: "joshua-coleman-xo2Euf3aPMs-unsplash.jpg",
    title: "Running Shoes",
    description:
      "Lightweight running shoes with excellent cushioning, ideal for offering support and comfort with every step.",
    price: 300,
    discontinued: true,
    categories: ["c2-r"]
  },
  {
    id: "P9",
    URL: "deon-collison-Rk62VPlcZqw-unsplash.jpg",
    title: "Trail Shoes",
    description: "Durable shoes designed for trail hiking",
    price: 1150,
    discontinued: false,
    categories: ["c2-t"]
  },
  {
    id: "P10",
    URL: "victor-freitas-Op6ZGEwnwrI-unsplash.jpg",
    title: "Weightlifting Shoes ",
    description:
      "Weightlifting shoes designed to provide superior stability and support, improving your performance in every lift.",
    price: 350,
    discontinued: false,
    categories: ["c2-we"]
  },

  {
    id: "P11",
    URL: "victor-freitas-KkYWWpurqbE-unsplash.jpg",
    title: "Rowing Machine",
    description:
      "Enjoy a complete workout with this air rower, which offers adjustable resistance to simulate the real rowing experience.",
    price: 13000,
    discontinued: false,
    categories: ["c4-i"]
  },

  {
    id: "P12",
    URL: "victor-freitas-nZUpk5E8p5A-unsplash.jpg",
    title: "Gymnastics Rings",
    description:
      "A set of American-made Rogue Wood Rings provides a solid foundation for gymnastic strength building and beginner-to-advanced suspension training. ",
    price: 400,
    discontinued: false,
    categories: ["c4-i"]
  },

  {
    id: "P13",
    URL: "mac-blades-jpgJSBQtw5U-unsplash.jpg",
    title: "Outdoor Bicycle",
    description:
      "Explore new horizons with this outdoor bike, designed to offer you a smooth and comfortable ride on any terrain.",
    price: 2800,
    discontinued: true,
    categories: ["c4-o"]
  },

  {
    id: "P14",
    URL: "victor-freitas-JbI04nYfaJk-unsplash (1).jpg",
    title: "Barbel Plates Set",
    description:
      "Maximize your strength training with these barbell plates, built to provide durability and precision with every lift.",
    price: 3500,
    discontinued: false,
    categories: ["c4-i"]
  },
  {
    id: "P15",
    URL: "pexels-rdne-8183955.jpg",
    title: "Sport Bra",
    description:
      "Designed to provide support and minimize breast movement during exercise. Made from breathable, moisture-wicking fabrics, it ensures comfort and reduces discomfort during physical activities.",
    price: 50,
    discontinued: false,
    categories: ["c1", "c1-w"]
  },

  {
    id: "P16",
    URL: "pexels-rdne-7187841.jpg",
    title: "Short",
    description:
      "Elevate your workout with our men's sports shorts, designed for maximum comfort and performance. Perfect for any athletic activity, they combine durability with style.",
    price: 90,
    discontinued: false,
    categories: ["c1-m"]
  },

  {
    id: "P17",
    URL: "pexels-pluyar-786003.jpg",
    title: "High-Level Running Shoes",
    description:
      "Elevate your running workout with our new high-level running shoes, designed for maximum comfort and performance.",
    price: 200,
    discontinued: false,
    categories: ["c2-r"]
  },

  {
    id: "P18",
    URL: "pexels-jeshoots-com-147458-7432.jpg",
    title: "Pink runnig Shoes",
    description: "Designed for maximum comfort and performance.",
    price: 90,
    discontinued: false,
    categories: ["c2-r"]
  },

  {
    id: "P19",
    URL: "pexels-picjumbo-com-55570-196654.jpg",
    title: "Running Jacket",
    description:
      "This running jacket is lightweight and breathable, perfect for keeping you comfortable on all your runs.",
    price: 120,
    discontinued: false,
    categories: ["c1", "c1-w"]
  },
  {
    id: "P20",
    URL: "pexels-olly-3776875.jpg",
    title: "T-shirt",
    description:
      "Experience ultimate comfort and performance with this athletic shirt, designed to keep you cool and dry during any activity.",
    price: 40,
    discontinued: false,
    categories: ["c1", "c1-w"]
  },
  {
    id: "P21",
    URL: "pexels-shvets-production-8007167.jpg",
    title: "Long-Sleeve Crop Top",
    description:
      "Designed for both performance and style. Crafted from breathable, moisture-wicking fabric, it offers a comfortable fit and sleek look for all your athletic needs.",
    price: 60,
    discontinued: false,
    categories: ["c1", "c1-w"]
  },
  {
    id: "P22",
    URL: "pexels-cristian-rojas-10043105.jpg",
    title: "Sports Shorts",
    description:
      "Experience ultimate comfort with our extended-length sports shorts, offering more coverage than regular shorts. Perfect for active days, these shorts feature breathable, moisture-wicking fabric and a relaxed fit for superior freedom of movement.",
    price: 600,
    discontinued: false,
    categories: ["c1", "c1-w"]
  },
  {
    id: "P23",
    URL: "pexels-thelazyartist-1668034.jpg",
    title: "Sparkling Running Shoes",
    description:
      "Elevate your running workout with our new running shoes, designed for maximum comfort and performance.",
    price: 300,
    discontinued: false,
    categories: ["c2-r"]
  },
  {
    id: "P24",
    URL: "pexels-shvetsa-6283561.jpg",
    title: "Platform Running Shoes",
    description:
      "Elevate your running workout with our new running shoes, designed for maximum comfort and performance.",
    price: 250,
    discontinued: false,
    categories: ["c2-r"]
  },

  {
    id: "P25",
    URL: "pexels-gonzalo-alvarez-balcazar-217421007-14585533.jpg",
    title: "Race Running Shoes",
    description:
      "Elevate your running workout with our new running shoes, designed for maximum comfort and performance.",
    price: 500,
    discontinued: false,
    categories: ["c2-r"]
  },

  {
    id: "P26",
    URL: "pexels-olly-3775140.jpg",
    title: "Silicone Swim Cap",
    description:
      "Designed for swimmers looking for an excellent fit. No more caps that do not remain in place!",
    price: 350,
    discontinued: false,
    categories: ["c3-w"]
  },
  {
    id: "P27",
    URL: "pexels-dom-j-7304-45056.jpg",
    title: "Jumping Rope Cable ",
    description:
      "This jumping rope provides you with comfortable jump exercises. It supports fast jumps while protecting you from any potential tangles",
    price: 30,
    discontinued: false,
    categories: ["c3-w"]
  },

  {
    id: "P28",
    URL: "pexels-andres-ayrton-6551132.jpg",
    title: "Shaker Bottle 24oz",
    description: "A bottle that keeps your protein beverages ice cold, perfectly blended",
    price: 25,
    discontinued: false,
    categories: ["c3-w"]
  },
  {
    id: "P29",
    URL: "pexels-annushka-ahuja-7991675.jpg",
    title: "Boxing Bag",
    description:
      "Can be used for all punching and kicking sports: kickboxing, savate boxing, etc. This tough, synthetic punching bag is ideal for routine training.",
    price: 700,
    discontinued: false,
    categories: ["c4-i"]
  },
  {
    id: "P30",
    URL: "pexels-pixabay-221247.jpg",
    title: "Weight Training Kettlebell Set",
    description:
      "Thanks to its rubber base, this kettlebells will help you avoid impacts on your floor.The ergonomic handle is perfect for use with one hand or two!",
    price: 1000,
    discontinued: false,
    categories: ["c4-i"]
  },
  {
    id: "P31",
    URL: "pexels-cesar-galeao-1673528-3253501.jpg",
    title: "Training Rope",
    description:
      "for strength training; ideal for working hands, arms, shoulders, back, abs, core, and legs",
    price: 200,
    discontinued: false,
    categories: ["c4-i"]
  }
];
