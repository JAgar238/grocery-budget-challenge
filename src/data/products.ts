
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  unit: string;
  onSale: boolean;
}

const products: Product[] = [
  // Fruits
  {
    id: "fruit-001",
    name: "Bananas",
    price: 0.59,
    image: "https://cdn11.bigcommerce.com/s-1ly92eod7l/images/stencil/1280x1280/products/647/790/Product_Produce_Banana__90431.1737080777.jpg?c=1&imbypass=on",
    category: "fruits",
    unit: "lb",
    onSale: false
  },
  {
    id: "fruit-002",
    name: "Apples",
    price: 1.29,
    originalPrice: 1.79,
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/conversions/0a5ae820-7051-4495-bcca-61bf02897472-thumb.jpg",
    category: "fruits",
    unit: "lb",
    onSale: true
  },
  {
    id: "fruit-003",
    name: "Oranges",
    price: 1.49,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Gt37ySy_z-5JXJt6GNV4JU8NWG_yyBBEbw&s",
    category: "fruits",
    unit: "lb",
    onSale: false
  },
  {
    id: "fruit-004",
    name: "Strawberries",
    price: 2.99,
    originalPrice: 3.99,
    image: "https://m.media-amazon.com/images/I/8143FLAy6GL._AC_UF894,1000_QL80_.jpg",
    category: "fruits",
    unit: "16 oz",
    onSale: true
  },

  // Vegetables
  {
    id: "veg-001",
    name: "Carrots",
    price: 1.19,
    image: "https://cdn11.bigcommerce.com/s-kc25pb94dz/images/stencil/1280x1280/products/271/762/Carrot__40927.1634584458.jpg",
    category: "vegetables",
    unit: "lb",
    onSale: false
  },
  {
    id: "veg-002",
    name: "Broccoli",
    price: 1.49,
    image: "https://www.healthyfood.com/wp-content/uploads/2017/03/What_to_do_with_broccoli-1-500x375.jpg",
    category: "vegetables",
    unit: "head",
    onSale: false
  },
  {
    id: "veg-003",
    name: "Spinach",
    price: 1.99,
    originalPrice: 2.49,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "vegetables",
    unit: "bunch",
    onSale: true
  },
  {
    id: "veg-004",
    name: "Potatoes",
    price: 0.79,
    image: "https://images.unsplash.com/photo-1508313880080-c4bef0730395?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "vegetables",
    unit: "lb",
    onSale: false
  },

  // Dairy
  {
    id: "dairy-001",
    name: "Milk",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "dairy",
    unit: "gal",
    onSale: false
  },
  {
    id: "dairy-002",
    name: "Eggs",
    price: 2.49,
    originalPrice: 3.29,
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "dairy",
    unit: "dozen",
    onSale: true
  },
  {
    id: "dairy-003",
    name: "Cheese",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "dairy",
    unit: "8 oz",
    onSale: false
  },
  {
    id: "dairy-004",
    name: "Yogurt",
    price: 0.99,
    image: "https://images.unsplash.com/photo-1553787499-6f9133860278?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "dairy",
    unit: "6 oz",
    onSale: false
  },

  // Grains
  {
    id: "grain-001",
    name: "Bread",
    price: 2.29,
    originalPrice: 2.99,
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "grains",
    unit: "loaf",
    onSale: true
  },
  {
    id: "grain-002",
    name: "Rice",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1594488508993-659eded29f41?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "grains",
    unit: "2 lb",
    onSale: false
  },
  {
    id: "grain-003",
    name: "Pasta",
    price: 1.49,
    image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "grains",
    unit: "16 oz",
    onSale: false
  },
  {
    id: "grain-004",
    name: "Cereal",
    price: 3.29,
    originalPrice: 3.99,
    image: "https://images.unsplash.com/photo-1622711333430-4cf4abed0d9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "grains",
    unit: "18 oz",
    onSale: true
  },

  // Meat & Protein
  {
    id: "meat-001",
    name: "Chicken Breast",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "protein",
    unit: "lb",
    onSale: false
  },
  {
    id: "meat-002",
    name: "Ground Beef",
    price: 4.49,
    originalPrice: 5.29,
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "protein",
    unit: "lb",
    onSale: true
  },
  {
    id: "meat-003",
    name: "Canned Tuna",
    price: 1.29,
    image: "https://images.unsplash.com/photo-1614119068601-147837be2ea7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "protein",
    unit: "5 oz",
    onSale: false
  },
  {
    id: "meat-004",
    name: "Peanut Butter",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1501012306713-218c8ff73cd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "protein",
    unit: "16 oz",
    onSale: false
  },

  // Pantry & Essentials
  {
    id: "pantry-001",
    name: "Canned Beans",
    price: 0.89,
    originalPrice: 1.19,
    image: "https://images.unsplash.com/photo-1599383558121-cf52200bce38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "pantry",
    unit: "15 oz",
    onSale: true
  },
  {
    id: "pantry-002",
    name: "Pasta Sauce",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1619805640532-9a628ff08deb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "pantry",
    unit: "24 oz",
    onSale: false
  },
  {
    id: "pantry-003",
    name: "Soup",
    price: 1.29,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "pantry",
    unit: "can",
    onSale: false
  },
  {
    id: "pantry-004",
    name: "Cooking Oil",
    price: 3.49,
    originalPrice: 4.29,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "pantry",
    unit: "16 oz",
    onSale: true
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getSaleProducts = (): Product[] => {
  return products.filter(product => product.onSale);
};

export const getAllCategories = (): string[] => {
  return ['all', ...new Set(products.map(product => product.category))];
};

export default products;
