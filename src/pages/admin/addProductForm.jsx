// export default function AddProductForm() {
//     return (
//         <div className="w-full h-full ">
//             <h1 className="text-2xl font-bold text-center">Add New Product</h1>
//             <div className="flex flex-col w-full border items-center">
//                 <div className="flex flex-col">
//                     <label>Product ID</label>
//                     <input type="text" className="w-[200px] bg-white" />
//                 </div>
//                 <div className="flex flex-col">
//                     <label>Product Name</label>
//                     <input type="text" className="w-[200px] bg-white" />
//                 </div>
//                 <div className="flex flex-col">
//                     <label>Alternative Names</label>
//                     <input type="text" className="w-[200px] bg-white" />
//                 </div>
//                 <div className="flex flex-col">
//                     <label>Image URLs</label>
//                     <input type="text" className="w-[200px] bg-white" />
//                 </div>
//                 <div className="flex flex-col">
//                     <label>Price</label>
//                     <input type="text" className="w-[200px] bg-white" />
//                 </div>
//                 <div className="flex flex-col">
//                     <label>Last Price</label>
//                     <input type="text" className="w-[200px] bg-white" />
//                 </div>
//                 <div className="flex flex-col">
//                     <label>Stock</label>
//                     <input type="text" className="w-[200px] bg-white" />
//                 </div>
//                 <div className="flex flex-col">
//                     <label>Description</label>
//                     <textarea type="text" className="w-[200px] bg-white" />
//                 </div>
//                 <button className="w-[200px]">Add Product</button>"
//             </div>
//         </div>
//     )
// }

import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function AddProductForm() {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [alternativeNames, setAlternativeNames] = useState("");
    const [imageUrls, setImageUrls] = useState("");
    const [price, setPrice] = useState("");
    const [lastPrice, setLastPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const navigate= useNavigate

    async function handleSubmit() {
        const altNames = alternativeNames.split(',');
        const imgUrls = imageUrls.split(',');

        const product = {
            productId: productId,
            productName: productName,
            alternativeNames: altNames,
            images: imgUrls,
            price: price,
            lastPrice: lastPrice,
            stock: stock,
            description: description
        }
        const token = localStorage.getItem("user");
        try {
            await axios.post("http://localhost:3000/api/products", product, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            navigate("/admin/products");
            toast.success("Product added successfully")
        } catch (err) {
            toast.error("Failed to add product");
        }
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Product</h1>

            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <div className="space-y-4">
                    {/* Product ID */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Product ID</label>
                        <input
                            type="text"
                            placeholder="Enter product ID"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                            className="bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Product Name */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Product Name</label>
                        <input
                            type="text"
                            placeholder="Enter product name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            className="bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Alternative Names */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Alternative Names</label>
                        <input
                            type="text"
                            placeholder="Enter alternative names"
                            value={alternativeNames}
                            onChange={(e) => setAlternativeNames(e.target.value)}
                            className="bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Image URLs */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Image URLs</label>
                        <input
                            type="text"
                            placeholder="Enter image URL(s)"
                            value={imageUrls}
                            onChange={(e) => setImageUrls(e.target.value)}
                            className="bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Price */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="text"
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Last Price */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Last Price</label>
                        <input
                            type="text"
                            placeholder="Enter last price"
                            value={lastPrice}
                            onChange={(e) => setLastPrice(e.target.value)}
                            className="bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Stock */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Stock</label>
                        <input
                            type="text"
                            placeholder="Enter stock quantity"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            className="bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            rows="3"
                            placeholder="Enter product description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="bg-white border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
                        onClick={handleSubmit}
                    >
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
}

