import { NavLink } from "react-router-dom";
import cn from "classnames";
import PropTypes from "prop-types";
import LinkButton from "../components/ui/LinkButton.jsx";

const menus = [
  {
    id: 1,
    items: [
      { id: 1, name: "پوشاک", path: "clothes" },
      { id: 2, name: "لوازم خانه", path: "home-accessories" },
      { id: 3, name: "قاب موبایل", path: "phone-case" },
      { id: 4, name: "اکسسوری", path: "accessory" },
      { id: 5, name: "مدرسه و اداره", path: "school-and-office" },
      { id: 6, name: "کارت و پوستر", path: "cart-and-poster" },
      { id: 7, name: "جشن و مهمانی", path: "party" },
    ]
  },
  {
    id: 2,
    items: [
      { id: 1, name: "همراه با کاستومی", path: "with-customme" },
      { id: 2, name: "خدمات مشتریان", path: "customer-service" },
      { id: 3, name: "راهنمای خرید", path: "shopping-guide" }
    ]
  }
];

const Drawer = ({ closeDrawer }) => (
  <div className="bg-black/60 fixed top-0 bottom-0 left-0 right-0 z-10">
    <nav className={cn(
      "bg-white flex flex-col justify-between gap-y-[4.5rem]",
      "fixed top-0 bottom-0 right-0 py-10 px-5 overflow-y-auto"
    )}>
      <LinkButton variant="text"
                  color="gray"
                  text=""
                  rightIcon="close"
                  onClick={closeDrawer}
                  className="absolute top-5 left-5" />
      {
        menus.map(menu => (
          <div key={menu.id} className="w-full flex flex-col gap-y-8">
            {
              menu.items.map(item => (
                <NavLink to={(menu.id === 1 ? "products/" : "") + item.path}
                         key={item.id}
                         className={({ isActive }) => cn(
                           "flex justify-between items-center",
                           "gap-x-8 px-2 border-r-2",
                           isActive
                             ? "border-r-ac-primary text-ac-primary"
                             : "border-r-transparent hover:text-ac-primary"
                         )}>
                  { item.name }
                </NavLink>
              ))
            }
          </div>
        ))
      }
    </nav>
  </div>
);

Drawer.propTypes = {
  closeDrawer: PropTypes.func
}

export default Drawer;