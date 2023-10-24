import Item from "./Item";
import { ABOUT_US, CATEGORY, JOIN_US, Icons } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={ABOUT_US} title="About Us" />
      <Item Links={CATEGORY} title="Category" />
      <Item Links={JOIN_US} title="Join Us" />
      <Item Links={Icons} title="Follow Us" />
    </div>
  );
};

export default ItemsContainer;
