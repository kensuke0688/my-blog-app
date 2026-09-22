import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-700 text-white">
            <Link to="/" className="text-lg font-bold">Blog</Link>
            <button className="cursor-pointer hover:auto">お問い合わせ</button>
        </header>
    );
};

export default Header;