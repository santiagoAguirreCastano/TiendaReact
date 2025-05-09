import { useEffect, useState } from "react";
import { Card } from "../../Layouts/Card/Card";
import { SearchProductInput } from "../../components/SearchProductInput/SearchProductInput";

const URL = "https://fakestoreapi.com/products";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [contentInput, setContentInput] = useState("");

  useEffect(() => {
    const ProductsFetch = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data);
    };
    ProductsFetch();
  }, []);

  const SearchProduct = async (e) => {
    const value = e.target.value;
    setContentInput(value);

    if (value === "") {
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data);
      return;
    }

   
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filtered);
  };

  return (
    <>
     <SearchProductInput contentInput={contentInput} SearchProduct={SearchProduct}/>
     <h1 className="text-3xl font-extrabold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2"> 🛍️ Productos</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:grid-cols-2 ">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </section>
    </>
  );
};
