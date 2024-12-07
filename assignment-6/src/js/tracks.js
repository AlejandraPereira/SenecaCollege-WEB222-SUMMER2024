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

window.tracks = [
  {
    id: "T1",
    title: "Take Off",
    artist: ["Luke Bergs", "Waesto"],
    duration: "2:37",
    url: "path/to/track1.mp3",
    categories: [c4]
  },
  {
    id: "T2",
    title: "Follow The Sun",
    artist: ["Luke Bergs", "Waesto"],
    duration: "2:57",
    url: "path/to/track2.mp3",
    categories: [c4]
  },
  {
    id: "T3",
    title: "Cuba",
    artist: ["ASHUTOSH"],
    duration: "2:34",
    url: "path/to/track3.mp3",
    categories: [c4]
  },
  {
    id: "T4",
    title: "Summertime",
    artist: ["Eric Lund"],
    duration: "3:10",
    url: "path/to/track4.mp3",
    categories: [c4]
  },
  {
    id: "T5",
    title: "Beautiful Liar",
    artist: ["Markvard", "AgusAlvarez"],
    duration: "3:39",
    url: "path/to/track5.mp3",
    categories: ["tropical", "popular"]
  },
  {
    id: "T6",
    title: "Summer Bliss",
    artist: ["Ocean Bloom"],
    duration: "2:07",
    url: "path/to/track6.mp3",
    categories: ["tropical", "popular"]
  },
  {
    id: "T7",
    title: "Ocean Vibes",
    artist: ["Waesto"],
    duration: "2:58",
    url: "path/to/track7.mp3",
    categories: ["tropical", "popular"]
  }
];
