import { Link } from 'react-router-dom';

const List = ({ text,className,to}) => {
    return (
        <ul>
      
      <Link to={to} className={` hover:text-violet-600 duration-300 ease-in text-[18px] font-bold leading-[26px] font-inter ${className}`}>{text}
    </Link>
        </ul>
    );
};

export default List;