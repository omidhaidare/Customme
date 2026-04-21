import { NavLink } from "react-router-dom";
import cn from "classnames";
import Container from "../components/ui/Container";
import LinkButton from "../components/ui/LinkButton.jsx";

const menuItems = [
  { id: 1, name: "پوشاک", path: "clothes" },
  { id: 2, name: "لوازم خانه", path: "home-accessories" },
  { id: 3, name: "قاب موبایل", path: "phone-case" },
  { id: 4, name: "اکسسوری", path: "accessory" },
  { id: 5, name: "مدرسه و اداره", path: "school-and-office" },
  { id: 6, name: "کارت و پوستر", path: "cart-and-poster" },
  { id: 7, name: "جشن و مهمانی", path: "party" },
];

const SubNavbar = () => (
  <Container tag="nav"
             containerClassName="hidden lg:block"
             wrapperClassName="flex items-center gap-x-8">
    <LinkButton text="خودت طراحیش کن !"
                size="md"
                rightIcon="magicpen"
                className="whitespace-nowrap"
    />
    <div className="flex items-center justify-between gap-x-8 flex-1 pl-6">
      {
        menuItems.map(item => {
          return (
            <NavLink key={item.id}
                     to={"products/" + item.path}
                     className={({ isActive }) => cn(
                       "px-0.5 py-1 body-3 whitespace-nowrap border-b-2",
                       isActive
                         ? "border-b-ac-primary text-ac-primary"
                         : "border-b-transparent hover:text-ac-primary"
                     )}>
              { item.name }
            </NavLink>
          );
        })
      }
    </div>
  </Container>
);

export default SubNavbar;