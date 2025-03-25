
import React, { useRef, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingCart as CartIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ShoppingCart: React.FC = () => {
  const { cart, removeItem, updateQuantity, clearCart, toggleCart, remainingBudget } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node) && cart.isOpen) {
        toggleCart();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cart.isOpen, toggleCart]);

  const handleIncreaseQuantity = (id: string, currentQuantity: number) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const handleDecreaseQuantity = (id: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    } else {
      removeItem(id);
    }
  };

  return (
    <AnimatePresence>
      {cart.isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            onClick={toggleCart}
          />
          <motion.div
            ref={cartRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 flex flex-col"
          >
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h2 className="text-lg font-semibold flex items-center">
                <CartIcon className="w-5 h-5 mr-2" />
                Shopping Cart
              </h2>
              <button
                onClick={toggleCart}
                className="p-1 rounded-full hover:bg-muted transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {cart.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <CartIcon className="w-16 h-16 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium">Your cart is empty</p>
                  <p className="text-muted-foreground mt-1">Add some items to get started!</p>
                </div>
              ) : (
                <ul className="space-y-4">
                  <AnimatePresence initial={false}>
                    {cart.items.map(item => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center space-x-4 border-b border-border pb-4"
                      >
                        <div className="h-16 w-16 bg-muted rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            ${item.price.toFixed(2)} / {item.unit}
                          </p>
                          <div className="flex items-center mt-1">
                            <button
                              onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                              className="p-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="mx-2 min-w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                              className="p-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-xs text-destructive hover:underline mt-1"
                            aria-label="Remove item"
                          >
                            Remove
                          </button>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            <div className="p-4 border-t border-border">
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${cart.totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-medium">Remaining Budget</span>
                <span className={`font-bold ${remainingBudget < 10 ? 'text-destructive' : 'text-primary'}`}>
                  ${remainingBudget.toFixed(2)}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" onClick={clearCart} disabled={cart.items.length === 0}>
                  Clear Cart
                </Button>
                <Button disabled={cart.items.length === 0}>
                  Checkout
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Budget: $50.00 for 5 days of groceries
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;
