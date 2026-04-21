import Container from "../../components/ui/Container";
import Title from "../../components/Title";
import ProductsWrapper from "../../components/ProductsWrapper";
import Designer from "../../components/Designer";

const designers = [
  { id: 1, name: "نگار زمانی", avatar: "profile-04.png", designs: ["image-04.png", "image-12.png", "image-20.png"], statistics: [{ id: 1, title: "دنبال کنندگان", value: 400 }, { id: 2, title: "تعداد طرح ها", value: 12 }, { id: 3, title: "آمار فروش", value: 560 }] },
  { id: 2, name: "شهرام طالبی", avatar: "profile-03.png", designs: ["image-03.png", "image-11.png", "image-19.png"], statistics: [{ id: 1, title: "دنبال کنندگان", value: 500 }, { id: 2, title: "تعداد طرح ها", value: 40 }, { id: 3, title: "آمار فروش", value: 780 }] },
  { id: 3, name: "سارا محمدی", avatar: "profile-02.png", designs: ["image-02.png", "image-10.png", "image-18.png"], statistics: [{ id: 1, title: "دنبال کنندگان", value: 250 }, { id: 2, title: "تعداد طرح ها", value: 56 }, { id: 3, title: "آمار فروش", value: 200 }] },
  { id: 4, name: "آرش نظری", avatar: "profile-01.png", designs: ["image-01.png", "image-09.png", "image-17.png"], statistics: [{ id: 1, title: "دنبال کنندگان", value: 468 }, { id: 2, title: "تعداد طرح ها", value: 23 }, { id: 3, title: "آمار فروش", value: 365 }] },
  { id: 5, name: "سمانه جوادی", avatar: "profile-08.png", designs: ["image-08.png", "image-16.png", "image-24.png"], statistics: [{ id: 1, title: "دنبال کنندگان", value: 113 }, { id: 2, title: "تعداد طرح ها", value: 10 }, { id: 3, title: "آمار فروش", value: 807 }] },
  { id: 6, name: "سعید سلیمی", avatar: "profile-07.png", designs: ["image-07.png", "image-15.png", "image-23.png"], statistics: [{ id: 1, title: "دنبال کنندگان", value: 215 }, { id: 2, title: "تعداد طرح ها", value: 60 }, { id: 3, title: "آمار فروش", value: 102 }] },
  { id: 7, name: "مرجان جعفری", avatar: "profile-06.png", designs: ["image-22.png", "image-14.png", "image-06.png"], statistics: [{ id: 1, title: "دنبال کنندگان", value: 798 }, { id: 2, title: "تعداد طرح ها", value: 5 }, { id: 3, title: "آمار فروش", value: 96 }] },
  { id: 8, name: "نیلوفر کریمی", avatar: "profile-05.png", designs: ["image-21.png", "image-13.png", "image-05.png"], statistics: [{ id: 1, title: "دنبال کنندگان", value: 620 }, { id: 2, title: "تعداد طرح ها", value: 17 }, { id: 3, title: "آمار فروش", value: 465 }] }
]

const BestDesigners = () => (
  <Container tag="section">
    <Title icon="star" text="طراحان برتر" />
    <ProductsWrapper>
      { designers.map(({ id, ...props }) => <Designer key={id} {...props} />) }
    </ProductsWrapper>
  </Container>
);

export default BestDesigners;