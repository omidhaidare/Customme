import InlineSVG from "react-inlinesvg";
import Container from "../../components/ui/Container";
import Title from "../../components/Title";
import ProductsWrapper from "../../components/ProductsWrapper";
import Product from "../../components/Product";

const products = [
  { id: 1, title: "آباژور", description: "دارای رنگ بندی، قابل طراحی", image: "image-18", price: 150000, favorite: true },
  { id: 2, title: "ماگ قابل طراحی", description: "دارای رنگ بندی، قابل طراحی", image: "image-17", price: 150000, favorite: true },
  { id: 3, title: "کیف زنانه", description: "دارای رنگ بندی، قابل طراحی", image: "image-23", price: 150000, favorite: false },
  { id: 4, title: "چمدان", description: "دارای رنگ بندی، قابل طراحی", image: "image-22", price: 150000, favorite: false },
  { id: 5, title: "تیشرت زنانه", description: "دارای رنگ بندی، قابل طراحی", image: "image-16", price: 150000, favorite: true },
  { id: 6, title: "کوسن", description: "دارای رنگ بندی، قابل طراحی", image: "image-20", price: 150000, favorite: false },
  { id: 7, title: "ساک هدیه", description: "دارای رنگ بندی، قابل طراحی", image: "image-19", price: 150000, favorite: true },
]

const RecentDesigns = () => (
  <Container tag="section">
    <Title text="جدیدترین طرح های هفته"
           icon="brush"
           link={{ text: "مشاهده بیشتر", to: "/products" }} />
    <ProductsWrapper>
      <div className="flex flex-col gap-7 pl-2 pr-8 pt-11">
        <h3 className="body-5 lg:heading-4 text-gray-900">
          محصولاتی که طراحی شده رو ببینید و در صورت نیاز طرحشون رو مطابق سلیقه
          خودتون تغییر بدید
        </h3>
        <InlineSVG src="/vectors/shopping-bags.svg"
                   className="h-32 lg:h-44" />
      </div>
      { products.map(({ id, ...props }) => <Product key={id} {...props} />) }
    </ProductsWrapper>
  </Container>
);

export default RecentDesigns;