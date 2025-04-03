import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

const Coffees = () => {
  const data = useLoaderData();

  const [coffees, setCoffees] = useState(data);
  const [tab, setTab] = useState(null);
  const handleSort = (sortBy) => {
    if (sortBy === "popularity") {
      const sortByPopularity = [...coffees].sort(
        (a, b) => b.popularity - a.popularity
      );
      setCoffees(sortByPopularity);
    }

    if (sortBy === "rating") {
      const sortByRating = [...coffees].sort((a, b) => a.rating - b.rating);
      setCoffees(sortByRating);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-12 justify-between items-center">
        <div>
          <h1 className="text-3xl font-thin">
            Sort Coffee&apos;s by Popularity & Rating-&gt;
          </h1>
        </div>
        <div className="flex  gap-4 sm:flex-row flex-col self-start">
          <button
            onClick={() => {
              handleSort("popularity"), setTab("popularity");
            }}
            className={`btn ${tab === "popularity" && "btn-warning"} `}
          >
            Sort By Popularity (DSC)
          </button>
          <button
            onClick={() => {
              handleSort("rating"), setTab("rating");
            }}
            className={`btn ${tab === "rating" && "btn-warning"} `}
          >
            Sort By Rating (ASC)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 my-5  lg:grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
};

export default Coffees;
