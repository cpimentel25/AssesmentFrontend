import { Link } from 'react-router-dom';
import './style.scss';

const Hedaer = () => {
  return (
    <div className='header'>
      <div className='header-menu'>
        <div className='header-menu_home'>
          <Link to='/' className='header-menu_home_link' >
            <h3>Home</h3>
          </Link>
        </div>
        <div className='header-menu_about'>
          <Link to='/about' className='header-menu_about_link' >
            <h3>About</h3>
          </Link>
        </div>
        {/* <div className='header-menu_detail'>
          <Link to='/productdetail/:id' className='header-menu_detail_link' >
           <h3>Product Detail</h3>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Hedaer;
