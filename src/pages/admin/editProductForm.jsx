
import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../../utils/mediaUpload.js";

export default function EditProductForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state.product
    const altNames = product.altNames.join(",")
    if (!product) {
        navigate("/admin/products")
    }
    const [productId, setProductId] = useState(product.productId);
    const [productName, setProductName] = useState(product.productName);
    const [alternativeNames, setAlternativeNames] = useState(altNames);
    const [imagefiles, setImageFiles] = useState([]);
    const [price, setPrice] = useState(product.price);
    const [lastPrice, setLastPrice] = useState(product.lastPrice);
    const [stock, setStock] = useState(product.stock);
    const [description, setDescription] = useState(product.description);


    async function handleSubmit() {
        const altNames = alternativeNames.split(',');
        // const imgUrls = imageUrls.split(',');
        const promisesArray = [];
        let imgUrls = product.images
        if (imagefiles.length > 0) {
            for (let i = 0; i < imagefiles.length; i++) {
                promisesArray[i] = uploadMediaToSupabase(imagefiles[i]);

            }
             imgUrls = await Promise.all(promisesArray);
        }
        console.log(imgUrls);
        // return
        const productData = {
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
            // await axios.put("http://localhost:3000/api/products", product, {
            await axios.put(import.meta.env.VITE_BACKEND_URL+"/api/products/"+product.productId,productData, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            navigate("/admin/products");
            toast.success("Product added successfully")
        } catch (err) {
            console.error(err);
            toast.error("Failed to add product");
        }
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Product Form</h1>

            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <div className="space-y-4">
                    {/* Product ID */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Product ID</label>
                        <input
                            disabled
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
                            type="file"
                            className="block w-full text-sm text-gray-800
                                       file:mr-4 file:py-2 file:px-4
                                       file:rounded file:border-0
                                       file:text-sm file:font-semibold
                                      file:bg-blue-50 file:text-black-700
                                      hover:file:bg-blue-100"
                            placeholder="Enter Image URLs(comma-separated)"
                            onChange={(e) => setImageFiles(e.target.files)}
                            multiple
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
                        Update Product
                    </button>
                </div>
            </div>
        </div>
    );
}

