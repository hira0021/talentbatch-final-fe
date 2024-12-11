const CategoryList = ({ categories, activeCategory, onCategoryClick }) => {
  return (
    <div style={styles.categoryContainer}>
      <button
        onClick={() => onCategoryClick(null)}
        style={{
          ...styles.button,
          ...(activeCategory === null ? styles.activeButton : {}),
        }}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => {
            onCategoryClick(category.id)
          }}
          style={{
            ...styles.button,
            ...(activeCategory === category.id ? styles.activeButton : {}),
          }}
        >
          {category.category_name}
        </button>
      ))}
    </div>
  );
};

const styles = {
  categoryContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap',
    marginLeft: '15px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#0d8509',
    border: '1px solid #ddd',
    borderRadius: '5px',
    cursor: 'pointer',
    minWidth: '120px',
  },
  activeButton: {
    backgroundColor: '#42d93d',
    color: '#fff',
  },
};

export default CategoryList;
