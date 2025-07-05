import { useEffect, useState } from "react"
import { loadCart } from "../../utils/cartFunction"
import CartCard from "../../components/cartCard"
import axios from "axios"

export default function Cart() {
    const [cart, setCart] = useState([])
    const [total,setTotal] = useState(0)
    const [labeledTotal,setLabeledTotal]=useState(0)
    useEffect(
        // () => {
        //     setCart(loadCart())
        // },[]
        () => {
            setCart(loadCart())
            // console.log(loadCart())
            axios.post(import.meta.env.VITE_BACKEND_URL+"/api/orders/quote",{
                orderedItems : loadCart()
            }).then(
                (res)=>{
                    console.log(res.data)
                    setTotal(res.data.total)
                    setLabeledTotal(res.data.labeledTotal)
                }
            )
        },[]
    )
    function onOrderCheckOutClick(){
        const token = localStorage.getItem("user");
        if(token == null){
            console.log("test")
            return
        }
        axios.post(
            import.meta.env.VITE_BACKEND_URL + "/api/orders",
            {
                orderedItems: cart,
                name: "John Doe",
                address: "123,Galle Road,Colombo 03",
                phone: "0770400134"
            },
            {
                headers:{
                    Authorization: "Bearer " + token,
                },
            }
        )
        .then((res)=>{
            console.log(res.data);
        })
    }
    return (
        <div className="w-full h-full overflow-y-scroll flex flex-col items-end">
            <table className="w-full">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Product ID</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
            {
                cart.map(
                    (item) => {
                        return (
                              <CartCard key={item.productId} productId={item.productId} qty={item.qty} />
                            // <span className="border">{item.productId}*{item.qty}</span>
                        )
                    }
                )
                // cart.map(
                //     (item) => {
                //         return (
                //             //   <CartCard key={item.productId} productId={item.productId} qty={item.qty} />
                //             <span >{item.productId}*{item.qty}</span>
                //         )
                //     }
                // )
            }
            </table>
            <h1 className="text-3xl font-bold text-[#cd7225]">Total: LKR.{labeledTotal.toFixed(2)}</h1>
            <h1 className="text-3xl font-bold text-[#cd7225]">Discount: LKR.{(labeledTotal-total).toFixed(2)}</h1>
            <h1 className="text-3xl font-bold text-[#cd7225]">Grand Total: LKR.{total}</h1>
            <button onClick={onOrderCheckOutClick} className="bg-[#cd7225] hover:bg-[#cd722590] text-white p-2 rounded-w-[300px]">Checkout</button>
        </div>
    )
}