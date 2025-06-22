import axios from 'axios';
import { useState,useEffect } from 'react';
import React from 'react';

export default function AdminProductsPage() {
    // axios.get('http://localhost:3000/api/products').then((res) => {
    //     console.log(res.data); 
    // })

//   getProducts()
const[products, setProducts] = useState([
      {
        "_id": "68517dbc15a97078b91f04e6",
        "productId": "BEAUTY001",
        "productName": "Hydrating Face Serum",
        "altNames": [
            "Face Moisturizer",
            "Glow Serum",
            "Hydration Booster"
        ],
        "images": [
            "https://example.com/images/serum-front.jpg",
            "https://example.com/images/serum-box.jpg"
        ],
        "price": 25.5,
        "lastPrice": 30,
        "stock": 120,
        "description": "A lightweight face serum enriched with hyaluronic acid and vitamin C to hydrate and brighten your skin.",
        "__v": 0
    },
    {
        "_id": "6852b9c9405ce4a22f9cf898",
        "productId": "B10001",
        "productName": "Hydrating Face Serum",
        "altNames": [
            "Face Moisturizer",
            "Glow Serum",
            "Hydration Booster"
        ],
        "images": [
            "https://example.com/images/serum-front.jpg",
            "https://example.com/images/serum-box.jpg"
        ],
        "price": 25.5,
        "lastPrice": 30,
        "stock": 120,
        "description": "A lightweight face serum enriched with hyaluronic acid and vitamin C to hydrate and brighten your skin.",
        "__v": 0
    }

])
useEffect(() => {
    // Fetch products when the component mounts
    axios.get('http://localhost:3000/api/products').then((res) => {
        console.log(res.data);
        setProducts(res.data);
    }).catch((error) => {
        console.error('Error fetching products:', error);
    });
}, []); // Empty dependency array means this effect runs once on mount

// axios.get('http://localhost:3000/api/products').then((res) => {
//     console.log(res.data)
//     setProducts(res.data) 
// })
  return (
    <div>
        <h1>Admin Products Page</h1>
        {
            products.map((product,index) => {
                return (
                    <div key={product._id} >
                       {index}
                       {product.productName}
                    </div>
                )
            }
)
        }
    </div>
  )
}

// async function getProducts() {
//   try {
//     const response = await axios.get('http://localhost:3000/api/products');
//     console.log(response.data);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// }