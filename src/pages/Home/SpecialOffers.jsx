import cn from "classnames";
import Container from "../../components/ui/Container";
import Title from "../../components/Title";
import SpecialOffer from "../../components/SpecialOffer";

const offers = [
  { id: 1, title: "لوازم خانه", image: "home-accessories", discount: 20 },
  { id: 2, title: "پوشاک", image: "clothes", discount: 30 },
  { id: 3, title: "مدرسه و اداره", image: "school-office", discount: 15 },
  { id: 4, title: "دیجیتال", image: "digital", discount: 10 },
  { id: 5, title: "استیکر", image: "stickers", discount: 40 }
];

const SpecialOffers = () => (
  <Container tag="section">
    <Title icon="discount-shape" text="فروش ویژه" />
    <div className={cn(
      "grid grid-cols-2 sm:grid-cols-4 grid-rows-4 sm:grid-rows-2",
      "gap-2 md:gap-4 lg:gap-6"
    )}>
      {
        offers.map(({ id, ...props }, index) => (
          <SpecialOffer key={id}
                        size={index === 0 ? "lg" : "md"}
                        className={cn(
                          index === 0 && [
                            "col-start-1 col-span-2",
                            "row-start-1 row-span-2"
                          ]
                        )}
                        {...props}
          />
        ))
      }
    </div>
  </Container>
);

export default SpecialOffers;