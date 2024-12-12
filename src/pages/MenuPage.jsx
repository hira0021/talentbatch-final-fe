import React, { useEffect, useState } from 'react';
import MenuItemCard from '../components/MenuItemCard';
import CategoryList from '../components/CategoryList';
import useIsMobile from '../hooks/useIsMobile';

const MenuPage = () => {
  const isMobile = useIsMobile();

  const [originalMenu, setOriginalMenu] = useState([]);
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    getCategory()
  }, [])

  useEffect(() => {
    if (!categories) return
    getMenu()
  }, [categories])

  async function getMenu() {
    const url = "https://truthful-shadowed-sink.glitch.me/menu";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setOriginalMenu(json.body.data);
      setMenu(json.body.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getCategory() {
    const url = "https://truthful-shadowed-sink.glitch.me/category";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setCategories(json.body.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  const filterByCategory = (category) => {
    if (category === null) {
      setMenu(originalMenu);
    } else {
      const filteredMenu = originalMenu.filter((item) => item.category === category);
      setMenu(filteredMenu);
    }
    setActiveCategory(category);
  };

  return (
    <div className={`page-container ${isMobile ? 'mobile' : 'desktop'}`}>
      <div className='page-content'>
        <h1>D'Angkringan Menu</h1>

        <CategoryList
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={filterByCategory}
        />

        <div className='grid'>
          {menu.map((item) => (
            <MenuItemCard key={item.name} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default MenuPage;
