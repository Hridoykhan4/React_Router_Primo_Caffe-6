import toast from "react-hot-toast";

const getStoredFavorite = () => {
  const storedItems = localStorage.getItem("favorites");
  return storedItems ? JSON.parse(storedItems) : [];
};

const addFavorite = (coffee) => {
  const storedItems = getStoredFavorite();
  const isExist = storedItems.find((item) => item.id === coffee.id);
  if (!isExist) {
    storedItems.push(coffee);
    localStorage.setItem("favorites", JSON.stringify(storedItems));
    toast.success("Added to the favorite");
  } else {
    toast.error("Can not add twice");
  }
};

const removeFromLS = (id) => {
  const storedItems = getStoredFavorite();
  const remaining = storedItems.filter((storeItem) => storeItem.id !== id);
  localStorage.setItem("favorites", JSON.stringify(remaining));
  toast.success("Successfully Removed");
};

export { addFavorite, getStoredFavorite, removeFromLS };
