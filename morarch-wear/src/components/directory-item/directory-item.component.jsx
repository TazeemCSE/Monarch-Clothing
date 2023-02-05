import { BackgroundImage,  Body,
  DirectoryItemContainer, } from './directory-item.styles.jsx';
import './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';
const DirectoryItem = ({ category }) => {
  const { iurl, name ,route} = category;
  const navigate=useNavigate();
  const onNavigateHandler=()=>navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
    <BackgroundImage iurl={iurl} />
    <Body>
      <h2>{name}</h2>
      <p>Shop Now</p>
    </Body>
  </DirectoryItemContainer>
  );
};

export default DirectoryItem;