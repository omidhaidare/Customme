import Container from "../../components/ui/Container";
import GiftCard from "../../components/GiftCard";

const Gifts = () => (
  <Container tag="section"
             wrapperClassName="flex flex-col lg:flex-row items-center gap-6">
    <GiftCard image="men-gifts.jpg"
              link="/products/men-gifts"
              title="محصولات مناسب هدیه دادن به آقایان" />
    <GiftCard image="women-gifts.jpg"
              link="/products/women-gifts"
              title="محصولات مناسب هدیه دادن به خانم ها" />
  </Container>
);

export default Gifts;