
import React from 'react';
import { getAllCategories } from '@/data/products';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, onSelectCategory }) => {
  const categories = getAllCategories();

  const formatCategoryName = (category: string): string => {
    if (category === 'all') return 'All Products';
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="overflow-x-auto pb-4 hide-scrollbar">
      <div className="flex space-x-2">
        {categories.map(category => (
          <motion.button
            key={category}
            whileTap={{ scale: 0.95 }}
            className={`category-button whitespace-nowrap ${
              activeCategory === category ? 'category-button-active' : ''
            }`}
            onClick={() => onSelectCategory(category)}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="categoryIndicator"
                className="absolute inset-0 bg-primary rounded-full z-0"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{formatCategoryName(category)}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
