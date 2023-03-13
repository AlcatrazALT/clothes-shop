import { CategoryItem } from 'components';
import { Category } from 'types';

interface DirectoryProps {
  categories: Category[];
}

export const Directory = (props: DirectoryProps) => {
  return (
    <div className='directory-container'>
      {props.categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
