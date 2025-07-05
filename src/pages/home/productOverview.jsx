import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../../components/imageSlider";
import toast from "react-hot-toast/headless";
import { addToCart, clearCart } from "../../utils/cartFunction";

export default function ProductOverview() {
    const params = useParams();
    const productId = params.id;
    const [product, setProduct] = useState(null)
    const [status, setStatus] = useState("loading")
    useEffect(
        () => {
            // console.log(productId)
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId).then((res) => {
                // console.log(res.data)
                if (res.data == null) {
                    setStatus("not-found")
                }
                if (res.data != null) {
                    setProduct(res.data)
                    setStatus("found")
                }
            })
        }, [])
    function onAddtoCartClick(){
        addToCart(product.productId,1)
        toast.success(product.productId+"Added to Cart")
    }

    return (
        <div className="w-full h-[calc(100vh-100px)]">
            {
                status == "loading" && (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-2 border-gray-500 border-b-[#cd7225] border-b"></div>
                    </div>
                )
            }
            {
                status == "not-found" && (
                    <div className="flex flex-col items-center justify-center h-full text-center px-4">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
                        <p className="text-lg text-gray-600 mb-6">We couldn't find the product you're looking for.</p>
                        <img
                            src="https://illustrations.popsy.co/gray/error-404.svg"
                            alt="Not found illustration"
                            className="w-64 h-auto"
                        />
                    </div>
                )
            }
            {
                status == "found" && (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-[35%] h-full">
                            {/* <img src={product.images[0]} className="w-full h-[300px] object-cover rounded-lg" /> */}
                            <ImageSlider images={product.images} />
                        </div>
                        <div className="w-[65%] h-full p-4">
                            <h1 className="text-3xl font-bold text-gray-800">{product.productName}</h1>
                            <h1 className="text-3xl font-bold text-gray-500">{product.altNames.join(" | ")}</h1>

                            <p className="text-xl text-gray-600">{
                                (product.price > product.lastPrice) && <span className="line-through text-red-500">LKR.{product.price}</span>
                            }<span>{"LKR." + product.lastPrice}</span></p>
                            <p className="text-lg text-gray-600 line-clamp-3">{product.description}</p>
                            <button onClick={onAddtoCartClick} className="bg-[#cd7225] text-white p-2 rounded-lg">Add to cart</button>
                            {/* <button onClick={clearCart} className="bg-[#cd7225] text-white p-2 rounded-lg">Add to cart</button> */}
                        </div>
                    </div>
                )
            }
        </div>
    )
}