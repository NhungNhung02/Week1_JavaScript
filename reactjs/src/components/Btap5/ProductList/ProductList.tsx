import "./ProductList.css";

const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 120 },
    { id: 3, name: "Product 3", price: 90 },
    { id: 4, name: "Product 4", price: 150 },
    { id: 5, name: "Product 5", price: 110 },
    { id: 6, name: "Product 6", price: 130 },
];

const ProductList = () => {
    return (
        <div className="product-container">
            {products.map((item) => (
                <div className="product-card" key={item.id}>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

/* import ProductList from "./components/Btap5/ProductList/ProductList";

function App() {
 return <ProductList />;
}

export default App;
*/