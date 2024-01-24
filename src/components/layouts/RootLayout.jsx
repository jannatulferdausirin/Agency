import Banner from './Banner';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div>
            <Banner/>
            <Outlet/>
            <Footer/> 
        </div>
    );
};

export default RootLayout;