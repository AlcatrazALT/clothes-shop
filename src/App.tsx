import './categories.styles.scss';
import { Category } from 'types';

const App = () => {
  const categories: Category[] = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'women',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'men',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <div key={category.id} className='category-container'>
          <div className='background-image' style={{ backgroundImage: `url(${category.imageUrl})` }}></div>
          <div className='category-body-container'>
            <h2>{category.title}</h2>
            <p>Show Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
