import { Link } from "react-router-dom";

export default function ProductCard(props) {
  console.log(props);
  return (
    <Link to={`/productInfo/${props.product.productId}`}>
      <div className="w-[300px] h-[450px] m-[70px] rounded-xl shadow-lg shadow-gray-500 hover:shadow-[#f3f3f3] hover:border-[3px] overflow-hidden flex flex-col">
        <img src={props.product.images[0]} alt={props.product.name} className="h-[60%] w-full object-cover" />
        <div className="max-h-[40%] h-[35%] p-4 flex flex-col justify-between">
        <h1 className="text-3xl font-bold text-[#cd7225] text-center">{props.product.productName}</h1>
        <h1 className="text-lg font-bold text-[#cd7225] text-center">{props.product.productId}</h1>
        <p className="text-left text-xl font-semibold">{props.product.lastPrice.toFixed(2)}</p>
        {
          (props.product.lastPrice<props.product.price)&&
          <p className="text-left text-xl text-gray-500 font-semibold line-through">LKR.{props.product.price.toFixed(2)}</p>
        }
        </div>
      </div>
    </Link>
  );
}