import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';
//Nintendo shop
const Home = () => {

const categories = [
  {
    id: 1,
    title: 'Consoles',
    imageUrl: 'https://pliki.ppe.pl/storage/084be6ab79ec8d00389a/084be6ab79ec8d00389a.jpg',
  },
  {
    id: 2,
    title: 'Games',
    imageUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_23/3556058/220607-switch-games-vl-2x1.jpg',
  },
  {
    id: 3,
    title: 'Accesories',
    imageUrl: 'https://wp-uploads.qualbert.com/2022/02/Controller-Buttons.jpg',
  },
  {
    id: 4,
    title: 'Literature',
    imageUrl: 'https://i.ytimg.com/vi/Mpkvf-nvdSU/maxresdefault.jpg',
  },
  {
    id: 5,
    title: 'Colletibles',
    imageUrl: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/others_3/amiibo_4/H2x1_Amiibo_main_image1600w.jpg',
  },
]

  return (
    <div>
        <Directory categories={categories} />
    </div>
    
  );
}

export default Home;
