import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import  {getBestSellingProducts} from "../shopify"

// Dummy data for testing
console.log(getBestSellingProducts)
const dummyProducts = [
  {
    id: 1,
    title: "Product 1",
    status: "active",
    price: "19.99",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Product 2",
    status: "active",
    price: "29.99",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "Product 3",
    status: "inactive",
    price: "39.99",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    title: "Product 4",
    status: "active",
    price: "49.99",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 5,
    title: "Product 5",
    status: "active",
    price: "59.99",
    image: "https://via.placeholder.com/150"
  }
];

const dummyCustomers = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    total_spent: "199.99"
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Smith",
    total_spent: "299.99"
  },
  {
    id: 3,
    first_name: "Alice",
    last_name: "Johnson",
    total_spent: "399.99"
  },
  {
    id: 4,
    first_name: "Bob",
    last_name: "Brown",
    total_spent: "499.99"
  },
  {
    id: 5,
    first_name: "Charlie",
    last_name: "Davis",
    total_spent: "599.99"
  }
];

export const loader = async () => {
  // Use dummy data for testing
  const bestSellingProducts = dummyProducts;
  const mostValuableCustomers = dummyCustomers;

  return json({ bestSellingProducts, mostValuableCustomers });
};

function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} width="50" height="50" />
          <div>{product.title}</div>
          <div>Status: {product.status}</div>
          <div>Price: ${product.price}</div>
        </li>
      ))}
    </ul>
  );
}

function CustomerList({ customers }) {
  return (
    <ul>
      {customers.map((customer) => (
        <li key={customer.id}>
          {customer.first_name} {customer.last_name} - ${customer.total_spent}
        </li>
      ))}
    </ul>
  );
}

export default function Index() {
  const { bestSellingProducts, mostValuableCustomers } = useLoaderData();

  return (
    <div>
      <h1>Best Selling Products</h1>
      <ProductList products={bestSellingProducts} />
      <h1>Most Valuable Customers</h1>
      <CustomerList customers={mostValuableCustomers} />
    </div>
  );
}