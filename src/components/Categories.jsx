import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  /*   const location = useLocation();
    console.log(location); */

  return (
    <div role="tablist" className="tabs tabs-lift ">
      {categories.map((category) => (
        <NavLink
          className={({ isActive }) =>
            `${isActive && "!text-green-600 underline tab-active"} tab text-xl`
          }
          key={category.id}
          to={`/category/${category.category}`}
          role="tab"
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
