
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
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "fruits",
    unit: "lb",
    onSale: false
  },
  {
    id: "fruit-002",
    name: "Apples",
    price: 1.29,
    originalPrice: 1.79,
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "fruits",
    unit: "lb",
    onSale: true
  },
  {
    id: "fruit-003",
    name: "Oranges",
    price: 1.49,
    image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "fruits",
    unit: "lb",
    onSale: false
  },
  {
    id: "fruit-004",
    name: "Strawberries",
    price: 2.99,
    originalPrice: 3.99,
    image: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "fruits",
    unit: "16 oz",
    onSale: true
  },

  // Vegetables
  {
    id: "veg-001",
    name: "Carrots",
    price: 1.19,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "vegetables",
    unit: "lb",
    onSale: false
  },
  {
    id: "veg-002",
    name: "Broccoli",
    price: 1.49,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "vegetables",
    unit: "head",
    onSale: false
  },
  {
    id: "veg-003",
    name: "Spinach",
    price: 1.99,
    originalPrice: 2.49,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1571212515141-5b1017a5ba25?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "grains",
    unit: "loaf",
    onSale: true
  },
  {
    id: "grain-002",
    name: "Rice",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1521483451761-2ddd11f695cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "protein",
    unit: "lb",
    onSale: true
  },
  {
    id: "meat-003",
    name: "Canned Tuna",
    price: 1.29,
    image: "https://images.unsplash.com/photo-1597324698308-4e9f85e7ceb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "protein",
    unit: "5 oz",
    onSale: false
  },
  {
    id: "meat-004",
    name: "Peanut Butter",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1612119422206-e7c44293d9c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1596097094193-48d37034e1c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "pantry",
    unit: "15 oz",
    onSale: true
  },
  {
    id: "pantry-002",
    name: "Pasta Sauce",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1598511796472-e1fc17524c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "pantry",
    unit: "24 oz",
    onSale: false
  },
  {
    id: "pantry-003",
    name: "Soup",
    price: 1.29,
    image: "https://images.unsplash.com/photo-1613844077129-991261730187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
