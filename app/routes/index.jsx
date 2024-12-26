// import { json } from '@remix-run/node';
// import { useLoaderData } from '@remix-run/react';
// import { getBestSellingProducts, getMostValuableCustomers } from '../shopify';

// export const loader = async () => {
//   const bestSellingProducts = await getBestSellingProducts();
//   const mostValuableCustomers = await getMostValuableCustomers();

//   return json({ bestSellingProducts, mostValuableCustomers });
// };

// function ProductList({ products }) {
//   return (
//     <ul>
//       {products.map((product) => (
//         <li key={product.id}>
//           {product.title} - {product.sold_quantity} sold
//         </li>
//       ))}
//     </ul>
//   );
// }

// function CustomerList({ customers }) {
//   return (
//     <ul>
//       {customers.map((customer) => (
//         <li key={customer.id}>
//           {customer.first_name} {customer.last_name} - ${customer.total_spent}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default function Index() {
//   const { bestSellingProducts, mostValuableCustomers } = useLoaderData();

//   return (
//     <div>
//       <h1>Best Selling Products</h1>
//       <ProductList products={bestSellingProducts} />
//       <h1>Most Valuable Customers</h1>
//       <CustomerList customers={mostValuableCustomers} />
//     </div>
//   );
// }


import React from 'react'
import {getMostValuableCustomers} from "../shopify.js"

const index = () => {
  return (
    <div>
      abc
      
    </div>
  )
}

export default index
