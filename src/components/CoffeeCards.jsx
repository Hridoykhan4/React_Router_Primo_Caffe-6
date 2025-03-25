import { Link, useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
  const [coffees, setCoffees] = useState([]);
  const { category } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (d) => d.category === category
      );
      setCoffees(filteredByCategory);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [category, data]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 my-5 overflow-hidden lg:grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
      <Link to="/coffees" className="btn btn-primary">
        View All
      </Link>
    </>
  );
};

export default CoffeeCards;
