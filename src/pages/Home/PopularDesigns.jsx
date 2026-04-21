import Container from "../../components/ui/Container";
import Title from "../../components/Title";
import ProductsWrapper from "../../components/ProductsWrapper";
import Product from "../../components/Product";

const products = [
  { id: 1, title: "استیکر", description: "قابل طراحی و چاپ بر روی انواع محصولات", image: "image-09", favorite: false },
  { id: 2, title: "استیکر", description: "قابل طراحی و چاپ بر روی انواع محصولات", image: "image-10", favorite: true },
  { id: 3, title: "استیکر", description: "قابل طراحی و چاپ بر روی انواع محصولات", image: "image-11", favorite: false },
  { id: 4, title: "استیکر", description: "قابل طراحی و چاپ بر روی انواع محصولات", image: "image-12", favorite: true },
  { id: 5, title: "استیکر", description: "قابل طراحی و چاپ بر روی انواع محصولات", image: "image-13", favorite: true },
  { id: 6, title: "استیکر", description: "قابل طراحی و چاپ بر روی انواع محصولات", image: "image-14", favorite: false },
  { id: 7, title: "استیکر", description: "قابل طراحی و چاپ بر روی انواع محصولات", image: "image-15", favorite: false },
  { id: 8, title: "استیکر", description: "قابل طراحی و چاپ بر روی انواع محصولات", image: "image-16", favorite: true }
];

const PopularDesigns = () => (
  <Container tag="section">
    <Title icon="like-shapes"
           text="طرح های پرطرفدار"
           link={{ to: "/popular-designs", text: "مشاهده بیشتر" }} />
    <ProductsWrapper>
      {
        products.map(({ id, ...props }) => (
          <Product key={id}
                   btn={{
                     variant: "outline",
                     size: "md",
                     text: "افزودن به گالری",
                     rightIcon: "gallery-add"
                   }}
                   {...props} />
        ))
      }
    </ProductsWrapper>
  </Container>
);

export default PopularDesigns;