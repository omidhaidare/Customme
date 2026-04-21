import Container from "../../components/ui/Container"
import Title from "../../components/Title";
import Category from "../../components/Category";

const categories = [
  { id: 1, title: "قاب موبایل", image: "phone-case" },
  { id: 2, title: "کارت تبریک", image: "postal-card" },
  { id: 3, title: "اکسسوری", image: "accessory" },
  { id: 4, title: "لوازم تحریر", image: "stationery" },
  { id: 5, title: "لباس", image: "clothes" },
  { id: 6, title: "دکور خانه", image: "home-decor" }
];

const Categories = () => (
  <Container tag="section">
    <Title text="دسته بندی محصولات" icon="medal-star" />
    <div className="flex items-center gap-x-6 overflow-x-auto">
      { categories.map(({ id, ...props }) => <Category key={id} {...props} />) }
    </div>
  </Container>
);

export default Categories;