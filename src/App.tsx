import { Guid } from 'typescript-guid';

import { Category } from 'types';

const App = () => {
  const categories: Category[] = [
    { id: Guid.create(), title: 'Hats' },
    { id: Guid.create(), title: 'Jackets' },
    { id: Guid.create(), title: 'Sneakers' },
    { id: Guid.create(), title: 'Women' },
    { id: Guid.create(), title: 'Men' },
  ];

  return (
    <div className='categoriesContainer'>
      {categories.map((category) => (
        <div key={category.id.toString()} className='categoryContainer'>
          <div className='categoryBackground'></div>
          <div className='categoryBodyContainer'>
            <h2>{category.title}</h2>
            <p>Show Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
