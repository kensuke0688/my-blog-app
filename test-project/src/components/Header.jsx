const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-700 text-white">
            <button className="cursor-pointer hover:auto">Blog</button>
            <button className="cursor-pointer hover:auto">お問い合わせ</button>
        </header>
    );
};

export default Header;