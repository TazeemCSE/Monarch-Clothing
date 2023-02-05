import DirectoryItem from '../directory-item/directory-item.component';
import './directory.style.scss'

const categories=[
    {
      name:'HATS',
      id:'1',
      iurl:'https://images.pexels.com/photos/1680171/pexels-photo-1680171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      route:'shop/hats',
    },
    {
      name:'JACKETS',
      id:'2',
      iurl:'https://images.pexels.com/photos/905375/pexels-photo-905375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      route:'shop/jackets',
    },
    {
      name:'SNEAKERS',
      id:'3',
      iurl:'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1600',
      route:'shop/sneakers',
    },
    {
      name:'WOMEN',
      id:'4',
      iurl:'https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      route:'shop/womens',
    },
    {
      name:'MEN',
      id:'5',
      iurl:'https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      route:'shop/mens',
    },
  ]
const Directory=()=>{
  return(
        <div className='directory-container'>
       {categories.map((category) => (
          <DirectoryItem key={category.id} category={category}/>
         ))}
     </div>
    );
       }

export default Directory;
