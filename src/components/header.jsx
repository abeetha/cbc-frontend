import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header className="bg-white w-full h-[60px] relative flex justify-center items-center">

        <img src="/logo.png" className="cursor-pointer h-full rounded-full absolute left-[10px]"/>
        <div className="h-full flex items-center w-[500px] justify-between">
        <Link to="/" className="text-[#cd7225] font-bold text-xl hover:border-b border-b-[#cd7225]">Home</Link>
        <Link to="/products" className="text-[#cd7225] font-bold text-xl hover:border-b border-b-[#cd7225]">Products</Link>
        <Link to="/about" className="text-[#cd7225] font-bold text-xl hover:border-b border-b-[#cd7225]">About Us</Link>
        <Link to="/contact" className="text-[#cd7225] font-bold text-xl hover:border-b border-b-[#cd7225]">Contact Us</Link>
        <Link to="/cart" className="text-[#cd7225] font-bold text-xl hover:border-b border-b-[#cd7225]">Cart</Link>
        </div>
        </header>
    );
}