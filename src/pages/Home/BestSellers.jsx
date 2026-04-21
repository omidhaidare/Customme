import Container from "../../components/ui/Container";
import Title from "../../components/Title";
import ProductsWrapper from "../../components/ProductsWrapper";
import Product from "../../components/Product";

const products = [
  { id: 1, title: "ست کت و شلوار", description: "تعویض کالا حداکثر تا ۴۸ ساعت همراه با تگ لباس و در بسته‌بندی و شرایط اولیه پوشیده نشده باشد (بدون بوی بدن و عطر و پارگی )و فاکتور امکان پذیر میباشد.", image: "image-01", colors: ["#FFFFFF", "#FF9800", "#F44336", "#009688"], price: 6700000, favorite: false },
  { id: 2, title: "کت تک زنانه", description: "تعویض کالا حداکثر تا ۴۸ ساعت همراه با تگ لباس و در بسته‌بندی و شرایط اولیه پوشیده نشده باشد (بدون بوی بدن و عطر و پارگی )و فاکتور امکان پذیر میباشد.", image: "image-02", colors: ["#607D8B", "#8BC34A", "#FFFFFF", "#4CAF50", "#FF9800", "#F44336"], price: 2500000, favorite: true },
  { id: 3, title: "کمربند", description: "تعویض کالا حداکثر تا ۴۸ ساعت همراه با تگ لباس و در بسته‌بندی و شرایط اولیه پوشیده نشده باشد (بدون بوی بدن و عطر و پارگی )و فاکتور امکان پذیر میباشد.", image: "image-03", colors: ["#2196F3", "#E91E63", "#795548", "#FFFFFF", "#FF9800", "#F44336", "#009688"], price: 1250000, favorite: true },
  { id: 4, title: "پیراهن مردانه", description: "تعویض کالا حداکثر تا ۴۸ ساعت همراه با تگ لباس و در بسته‌بندی و شرایط اولیه پوشیده نشده باشد (بدون بوی بدن و عطر و پارگی )و فاکتور امکان پذیر میباشد.", image: "image-04", colors: ["#4CAF50", "#FF9800"], price: 1100000, favorite: false },
  { id: 5, title: "کفش ورزشی", description: "تعویض کالا حداکثر تا ۴۸ ساعت همراه با تگ لباس و در بسته‌بندی و شرایط اولیه پوشیده نشده باشد (بدون بوی بدن و عطر و پارگی )و فاکتور امکان پذیر میباشد.", image: "image-05", colors: ["#795548", "#FFFFFF", "#FF9800"], price: 3890000, favorite: false },
  { id: 6, title: "شلوار جین اسکینی", description: "تعویض کالا حداکثر تا ۴۸ ساعت همراه با تگ لباس و در بسته‌بندی و شرایط اولیه پوشیده نشده باشد (بدون بوی بدن و عطر و پارگی )و فاکتور امکان پذیر میباشد.", image: "image-06", colors: ["#000000"], price: 1000000, favorite: false },
  { id: 7, title: "ست کامل مردانه", description: "تعویض کالا حداکثر تا ۴۸ ساعت همراه با تگ لباس و در بسته‌بندی و شرایط اولیه پوشیده نشده باشد (بدون بوی بدن و عطر و پارگی )و فاکتور امکان پذیر میباشد.", image: "image-07", colors: ["#9E9E9E", "#E91E63", "#795548", "#FFFFFF"], price: 6070000, favorite: false },
  { id: 8, title: "کت تک زنانه", description: "تعویض کالا حداکثر تا ۴۸ ساعت همراه با تگ لباس و در بسته‌بندی و شرایط اولیه پوشیده نشده باشد (بدون بوی بدن و عطر و پارگی )و فاکتور امکان پذیر میباشد.", image: "image-08", colors: ["#795548", "#FFFFFF", "#000000"], price: 1720000, favorite: false }
]

const BestSellers = () => (
  <Container tag="section">
    <Title text="پر فروش ترین ها"
           icon="medal-star"
           link={{ text: "مشاهده بیشتر", to: "/products" }} />
    <ProductsWrapper>
      { products.map(({ id, ...props }) => <Product key={id} {...props} />) }
    </ProductsWrapper>
  </Container>
);

export default BestSellers;