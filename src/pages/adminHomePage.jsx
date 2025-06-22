// import { Link } from "react-router-dom";
// import { BsGraphUp } from "react-icons/bs";

// export default function AdminHomePage() {
//     return(
//         <div className="bg-blue-200 w-full h-screen flex">
//            <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-center">
//             <Link to="/admin/dashboard"><BsGraphUp />Dashboard</Link>
//             <Link to="/admin/products">Products</Link>        
//             <Link to="/admin/orders">Orders</Link>
//             <Link to="/admin/customers">Customers</Link>
//            </div>
//             <div className="w-[80%] h-screen bg-red-600">
//            </div>
//         </div>
//     );
// }
import { Link } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { MdInventory2, MdOutlinePeople } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminProductsPage from './admin/adminProductPage.jsx'

export default function AdminHomePage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-[20%] bg-blue-600 text-white p-6 flex flex-col gap-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Admin Panel</h1>
        <Link
          to="/admin/dashboard"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-700 transition"
        >
          <BsGraphUp className="text-xl" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/admin/products"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-700 transition"
        >
          <MdInventory2 className="text-xl" />
          <span>Products</span>
        </Link>
        <Link
          to="/admin/orders"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-700 transition"
        >
          <RiFileList3Line className="text-xl" />
          <span>Orders</span>
        </Link>
        <Link
          to="/admin/customers"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-700 transition"
        >
          <MdOutlinePeople className="text-xl" />
          <span>Customers</span>
        </Link>
      </aside>

      {/* Main Content Area */}
       <div className="w-[80%] h-screen bg-red-600">
        <Routes path="/*">
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/products" element={<AdminProductsPage/>} />
        <Route path="/orders" element={<h1>Orders</h1>} />
        <Route path="/customers" element={<h1>Customers</h1>} />
        <Route path="/*" element={<h1>404 not found the admin page</h1>} />
        </Routes>
       </div>
    </div>
  );
}
