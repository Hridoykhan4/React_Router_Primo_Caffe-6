import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getStoredFavorite, removeFromLS } from "../utils/indexLocal";
import Card from "../components/Card";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favorites = getStoredFavorite();
    setCoffees(favorites);
  }, []);

  const handleRemove = (id) => {
    removeFromLS(id);
    const favorites = getStoredFavorite();
    setCoffees(favorites);
  };

  if (coffees.length < 1)
    return (
      <div className="flex justify-center items-center">
        <h3>No Favorite Item Added</h3>
      </div>
    );
  return (
    <>
      <Heading
        title={`Welcome to Dashboard`}
        subtitle={`Manage coffees that you have previously added as favorite. You can view or remove them from here.`}
      ></Heading>

      <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 ">
        {coffees.map((coffee) => (
          <Card
            handleRemove={handleRemove}
            key={coffee.id}
            coffee={coffee}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
