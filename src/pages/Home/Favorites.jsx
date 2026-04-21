import Container from "../../components/ui/Container";
import Title from "../../components/Title";
import ProductsWrapper from "../../components/ProductsWrapper";
import Product from "../../components/Product";

const products = [
  { id: 1, title: "کیف زنانه", description: "دارای رنگ بندی، قابل طراحی", image: "image-24", colors: ["#FFFFFF", "#FF9800", "#F44336", "#009688"], price: 6700000, favorite: true },
  { id: 2, title: "جوراب زنانه", description: "دارای رنگ بندی، قابل طراحی", image: "image-25", colors: ["#607D8B", "#8BC34A", "#FFFFFF", "#4CAF50", "#FF9800", "#F44336"], price: 2500000, favorite: true },
  { id: 3, title: "قاب موبایل آیفون", description: "دارای رنگ بندی، قابل طراحی", image: "image-26", colors: ["#2196F3", "#E91E63", "#795548", "#FFFFFF", "#FF9800", "#F44336", "#009688"], price: 1250000, favorite: true },
  { id: 4, title: "تیشرت مردانه", description: "دارای رنگ بندی، قابل طراحی", image: "image-27", colors: ["#4CAF50", "#FF9800"], price: 1100000, favorite: true }
]

const Favorites = () => (
  <Container tag="section">
    <Title text="علاقمندی ها" icon="like" />
    <ProductsWrapper>
      { products.map(({ id, ...props }) => <Product key={id} {...props} />) }
    </ProductsWrapper>
  </Container>
);

export default Favorites;