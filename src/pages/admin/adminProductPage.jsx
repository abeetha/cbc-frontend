// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import React from 'react';
// import { FaTrash } from 'react-icons/fa';
// import { FaPencil } from 'react-icons/fa6';

// export default function AdminProductsPage() {
//     // axios.get('http://localhost:3000/api/products').then((res) => {
//     //     console.log(res.data); 
//     // })

//     //   getProducts()
//     const [products, setProducts] = useState([
//         {
//             "_id": "68517dbc15a97078b91f04e6",
//             "productId": "BEAUTY001",
//             "productName": "Hydrating Face Serum",
//             "altNames": [
//                 "Face Moisturizer",
//                 "Glow Serum",
//                 "Hydration Booster"
//             ],
//             "images": [
//                 "https://example.com/images/serum-front.jpg",
//                 "https://example.com/images/serum-box.jpg"
//             ],
//             "price": 25.5,
//             "lastPrice": 30,
//             "stock": 120,
//             "description": "A lightweight face serum enriched with hyaluronic acid and vitamin C to hydrate and brighten your skin.",
//             "__v": 0
//         },
//         {
//             "_id": "6852b9c9405ce4a22f9cf898",
//             "productId": "B10001",
//             "productName": "Hydrating Face Serum",
//             "altNames": [
//                 "Face Moisturizer",
//                 "Glow Serum",
//                 "Hydration Booster"
//             ],
//             "images": [
//                 "https://example.com/images/serum-front.jpg",
//                 "https://example.com/images/serum-box.jpg"
//             ],
//             "price": 25.5,
//             "lastPrice": 30,
//             "stock": 120,
//             "description": "A lightweight face serum enriched with hyaluronic acid and vitamin C to hydrate and brighten your skin.",
//             "__v": 0
//         }

//     ])
//     useEffect(() => {
//         // Fetch products when the component mounts
//         axios.get('http://localhost:3000/api/products').then((res) => {
//             console.log(res.data);
//             setProducts(res.data);
//         }).catch((error) => {
//             console.error('Error fetching products:', error);
//         });
//     }, []); // Empty dependency array means this effect runs once on mount

//     // axios.get('http://localhost:3000/api/products').then((res) => {
//     //     console.log(res.data)
//     //     setProducts(res.data) 
//     // })
//     return (
//         <div>
//             <h1>Admin Products Page</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Product ID</th>
//                         <th>Product Name</th>
//                         <th>Price</th>
//                         <th>Last Price</th>
//                         <th>Stock</th>
//                         <th>Description</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map((product, index) => (
//                         <tr key={index}>
//                             <td>{product.productId}</td>
//                             <td>{product.productName}</td>
//                             <td>${product.price.toFixed(2)}</td>
//                             <td>${product.lastPrice.toFixed(2)}</td>
//                             <td>{product.stock}</td>
//                             <td>{product.description}</td>
//                             <td>
//                                 <FaTrash />
//                                 <FaPencil />
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// async function getProducts() {
//   try {
//     const response = await axios.get('http://localhost:3000/api/products');
//     console.log(response.data);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// }
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function AdminProductsPage() {
    const [products, setProducts] = useState([]);
    const [productsLoaded, setProductsLoaded] = useState(false);

    useEffect(() => {
        if (!productsLoaded) {
            axios
                .get('http://localhost:3000/api/products')
                .then((res) => {
                    setProducts(res.data);
                    console.log(res.data);
                    setProductsLoaded(true);
                })
                .catch((error) => {
                    console.error('Error fetching products:', error);
                });
        }
    }, [productsLoaded]);

    return (
        <div className="min-h-screen bg-gray-100 p-8 relative">
            <Link to={"/admin/products/addProduct"} className="absolute right-[25px] bottom-[25px] text-[#3b82f6] border-[#3b82f6] border-[2px] text-[#38b2fc] p-5 rounded-xl hover:rounded-full">
                <FaPlus />
            </Link>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Products Page</h1>
            {
                productsLoaded?<div className="overflow-x-auto shadow-lg rounded-lg bg-white">    
                <table className="min-w-full text-left text-sm text-gray-800">
                    <thead className="bg-blue-600 text-white uppercase text-xs">
                        <tr>
                            <th className="px-6 py-4">Product ID</th>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Price</th>
                            <th className="px-6 py-4">Last Price</th>
                            <th className="px-6 py-4">Stock</th>
                            <th className="px-6 py-4">Description</th>
                            <th className="px-6 py-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr
                                key={index}
                                className="border-b hover:bg-blue-50 transition duration-150"
                            >
                                <td className="px-6 py-4">{product.productId}</td>
                                <td className="px-6 py-4">{product.productName}</td>
                                <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                                <td className="px-6 py-4">${product.lastPrice.toFixed(2)}</td>
                                <td className="px-6 py-4">{product.stock}</td>
                                <td className="px-6 py-4 max-w-xs truncate">{product.description}</td>
                                <td className="px-6 py-4 flex justify-center gap-4 text-blue-600">
                                    <button
                                        title="Edit"
                                        className="hover:text-blue-800 transition"
                                    >
                                        <FaPencil />
                                    </button>
                                    <button
                                        title="Delete"
                                        className="hover:text-red-600 transition"
                                        onClick={() => {
                                            // alert(product.productId + " will be deleted");
                                            const token = localStorage.getItem("user");
                                            // Handle delete action here
                                            axios.delete(`http://localhost:3000/api/products/${product.productId}`, {
                                                headers: {
                                                    Authorization: `Bearer ${token}`,
                                                },
                                            }).then((res) => {
                                                console.log(res.data);
                                                toast.success("Product deleted successfully");
                                                setProductsLoaded(false)
                                            });
                                        }}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {products.length === 0 && (
                    <div className="text-center text-gray-600 p-6">No products available.</div>
                )}
            </div>:<div className="w-full b-full flex justify-center items-center">
             <div className="w-[60px] h-[60px] border-[4px] border-gray-200 border-b-[#3b82f6] animate-spin rounded-full"></div>
            </div>
            }


        </div>
    );
}
