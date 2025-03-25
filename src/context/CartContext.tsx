
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product } from '../data/products';
import { toast } from '@/components/ui/sonner';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' };

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
  isOpen: false,
};

const calculateTotals = (items: CartItem[]): { totalPrice: number; totalItems: number } => {
  return items.reduce(
    (acc, item) => {
      acc.totalPrice += item.price * item.quantity;
      acc.totalItems += item.quantity;
      return acc;
    },
    { totalPrice: 0, totalItems: 0 }
  );
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      let updatedItems: CartItem[];

      if (existingItemIndex >= 0) {
        updatedItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        updatedItems = [
          ...state.items,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }

      const { totalPrice, totalItems } = calculateTotals(updatedItems);

      return {
        ...state,
        items: updatedItems,
        totalPrice,
        totalItems,
      };
    }

    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const { totalPrice, totalItems } = calculateTotals(updatedItems);

      return {
        ...state,
        items: updatedItems,
        totalPrice,
        totalItems,
      };
    }

    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      }).filter(item => item.quantity > 0);

      const { totalPrice, totalItems } = calculateTotals(updatedItems);

      return {
        ...state,
        items: updatedItems,
        totalPrice,
        totalItems,
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        totalPrice: 0,
        totalItems: 0,
      };

    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};

interface CartContextType {
  cart: CartState;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  remainingBudget: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const TOTAL_BUDGET = 50;
  const remainingBudget = parseFloat((TOTAL_BUDGET - cart.totalPrice).toFixed(2));

  const addItem = (product: Product) => {
    const newTotal = cart.totalPrice + product.price;
    
    if (newTotal > TOTAL_BUDGET) {
      toast.error("You've exceeded your $50 budget!", {
        description: "Try removing some items first."
      });
      return;
    }
    
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast.success(`Added ${product.name} to cart`, {
      description: `$${product.price.toFixed(2)} - ${product.unit}`
    });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    const item = cart.items.find(item => item.id === id);
    
    if (item) {
      const priceDifference = (quantity - item.quantity) * item.price;
      const newTotal = cart.totalPrice + priceDifference;
      
      if (newTotal > TOTAL_BUDGET) {
        toast.error("You've exceeded your $50 budget!", {
          description: "Try removing some items first."
        });
        return;
      }
    }
    
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        remainingBudget
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
