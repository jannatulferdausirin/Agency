import Paragraph from './components/Paragraph';

const NotFound = () => {
    return (
        <div>
        <Paragraph text="sorry there,this page is not found !! 404 ." className={`text-6xl text-orange-600 font-bold text-center mt-20 capitalize`}/>
    </div>
    );
};

export default NotFound;