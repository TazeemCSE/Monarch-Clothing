
import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { iurl, name } = category;
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${iurl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{name}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;