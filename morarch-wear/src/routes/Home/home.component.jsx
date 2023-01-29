
import Directory from "../../components/directory/directory.component";
const Home=()=>{
  
    const categories=[
      {
        name:'SHIRT',
        id:'1',
        iurl:'https://images.pexels.com/photos/2313192/pexels-photo-2313192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name:'JEANS',
        id:'2',
        iurl:'https://images.pexels.com/photos/981619/pexels-photo-981619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        name:'T-SHIRT',
        id:'3',
        iurl:'https://images.pexels.com/photos/1356271/pexels-photo-1356271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name:'HATS',
        id:'4',
        iurl:'https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name:'SNEAKERS',
        id:'5',
        iurl:'https://images.pexels.com/photos/1662163/pexels-photo-1662163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
    ]
    
      return(
        <div>
          
           <Directory categories={categories} />
         
        </div>
      );
    }
    export default Home;