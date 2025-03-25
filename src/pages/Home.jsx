import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={`Choose your desired coffee category to browse through specific coffees that fit in your taste.`}
      ></Heading>

      <div className="my-7"> 
        <Categories categories={data}></Categories>
      </div>

    <section>
        <Outlet></Outlet>
    </section>
     
    </div>
  );
};

export default Home;
