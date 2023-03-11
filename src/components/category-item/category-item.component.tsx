import { Category } from 'types';
import './category-item.styles.scss';

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = (props: CategoryItemProps) => {
  const { category } = props;
  return (
    <div className='category-container'>
      <div className='background-image' style={{ backgroundImage: `url(${category.imageUrl})` }}></div>
      <div className='category-body-container'>
        <h2>{category.title}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
