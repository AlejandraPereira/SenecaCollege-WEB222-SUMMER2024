/**
 * categories.js
 *
 * The store's categories are defined in an Array of category Objects. Each
 * category Object has the following properties:
 *
 *  - id: String, a unique category id (e.g., "c1", "c2", "c3")
 *  - name: String, the human-readable name for the category (e.g., "Perfume")
 */

window.categories = [
  {
    id: "c1",
    name: "Clothing",
    subcategories: [
      { id: "c1-w", name: "Women" },
      { id: "c1-m", name: "Men" },
      { id: "c1-y", name: "Youth" }
    ]
  },
  {
    id: "c2",
    name: "Footwear",
    subcategories: [
      { id: "c2-r", name: "Running" },
      { id: "c2-t", name: "Training" },
      { id: "c2-we", name: "Weightlifting" }
    ]
  },

  {
    id: "c3",
    name: "Accessories",
    subcategories: [
      { id: "c3-w", name: "Sport Accesories" },
      { id: "c3-m", name: "Sport Bags" }
    ]
  },

  {
    id: "c4",
    name: "Equipment",
    subcategories: [
      { id: "c4-i", name: "Indoor" },
      { id: "c4-o", name: "Outdoor" }
    ]
  }
];
