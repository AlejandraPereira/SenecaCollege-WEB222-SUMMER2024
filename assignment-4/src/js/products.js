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
    title: "Running Shoes",
    description: "High quality running shoes",
    price: 10000,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "P2",
    title: "Yoga Pants",
    description: "Comfortable yoga pants",
    price: 5000,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "P3",
    title: "Protein Bar",
    description: "Delicious protein bar",
    price: 200,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "P4",
    title: "Fitness Tracker",
    description: "Track your fitness goals",
    price: 35000,
    discontinued: true,
    categories: ["c5"]
  },
  {
    id: "P5",
    title: "Dumbbells",
    description: "Set of 2 dumbbells",
    price: 15000,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "P6",
    title: "Baseball Cap",
    description: "Stylish cap for sun protection",
    price: 3000,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P7",
    title: "Running Jacket",
    description: "Lightweight jacket for running",
    price: 10000,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "P8",
    title: "Jogger Pants",
    description: "Comfortable joggers for workouts",
    price: 8000,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "P9",
    title: "Shorts",
    description: "Lightweight sports shorts for active wear",
    price: 3000,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "P10",
    title: "Trail Shoes",
    description: "Durable shoes designed for trail hiking",
    price: 12000,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "P11",
    title: "Training Shoes",
    description: "Versatile shoes for strength training and weightlifting",
    price: 15000,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "P12",
    title: "Barbell Set",
    description: "Complete set of barbells for weight training.",
    price: 150000,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "P13",
    title: "Glute Machine",
    description: "Machine designed specifically for glute exercises.",
    price: 220000,
    discontinued: true,
    categories: ["c4"]
  },
  {
    id: "P14",
    title: "Pull-up Bar",
    description: "Sturdy pull-up bar suitable for upper body workouts.",
    price: 250000,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "P15",
    title: "Resistance Bands",
    description: "Set of (4) durable resistance bands for strength training.",
    price: 4000,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P16",
    title: "Training Gloves",
    description: "Durable training gloves designed for weightlifting and fitness.",
    price: 6000,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P21",
    title: "Lifting Straps",
    description: "Heavy-duty lifting straps for improved grip and support",
    price: 1800,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P22",
    title: "Whey Protein",
    description: " Protein supplement in various flavors",
    price: 4500,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "P23",
    title: "Creatine",
    description: "Supplies energy to your muscles",
    price: 6000,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "P24",
    title: "Scale Weight",
    description: "Device that is used to determine weight. ",
    price: 100000,
    discontinued: false,
    categories: ["c5"]
  }
];
