
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
    image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "fruits",
    unit: "lb",
    onSale: false
  },
  {
    id: "fruit-002",
    name: "Apples",
    price: 1.29,
    originalPrice: 1.79,
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "fruits",
    unit: "lb",
    onSale: true
  },
  {
    id: "fruit-003",
    name: "Oranges",
    price: 1.49,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "fruits",
    unit: "lb",
    onSale: false
  },
  {
    id: "fruit-004",
    name: "Strawberries",
    price: 2.99,
    originalPrice: 3.99,
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "fruits",
    unit: "16 oz",
    onSale: true
  },

  // Vegetables
  {
    id: "veg-001",
    name: "Carrots",
    price: 1.19,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5d47f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "vegetables",
    unit: "lb",
    onSale: false
  },
  {
    id: "veg-002",
    name: "Broccoli",
    price: 1.49,
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "vegetables",
    unit: "lb",
    onSale: false
  },

  // Dairy
  {
    id: "dairy-001",
    name: "Milk",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "dairy",
    unit: "gal",
    onSale: false
  },
  {
    id: "dairy-002",
    name: "Eggs",
    price: 2.49,
    originalPrice: 3.29,
    image: "https://images.unsplash.com/photo-1518569656728-22b9b8d154b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "dairy",
    unit: "dozen",
    onSale: true
  },
  {
    id: "dairy-003",
    name: "Cheese",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "dairy",
    unit: "8 oz",
    onSale: false
  },
  {
    id: "dairy-004",
    name: "Yogurt",
    price: 0.99,
    image: "https://images.unsplash.com/photo-1584278773422-d69ef536c430?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1558642891-54be180ea339?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "protein",
    unit: "lb",
    onSale: true
  },
  {
    id: "meat-003",
    name: "Canned Tuna",
    price: 1.29,
    image: "https://images.unsplash.com/photo-1597769906771-45c913cae1ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "protein",
    unit: "5 oz",
    onSale: false
  },
  {
    id: "meat-004",
    name: "Peanut Butter",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "pantry",
    unit: "15 oz",
    onSale: true
  },
  {
    id: "pantry-002",
    name: "Pasta Sauce",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1620159525938-7d1c40d69c58?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "pantry",
    unit: "24 oz",
    onSale: false
  },
  {
    id: "pantry-003",
    name: "Soup",
    price: 1.29,
    image: "https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "pantry",
    unit: "can",
    onSale: false
  },
  {
    id: "pantry-004",
    name: "Cooking Oil",
    price: 3.49,
    originalPrice: 4.29,
    image: "https://images.unsplash.com/photo-1620577438168-c1898888fb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
