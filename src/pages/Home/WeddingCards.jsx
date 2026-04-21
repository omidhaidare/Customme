import cn from "classnames";
import Container from "../../components/ui/Container";
import LinkButton from "../../components/ui/LinkButton";

const images = [
  "image-01.jpg",
  "image-02.jpg",
  "image-03.jpg",
  "image-04.jpg",
  "image-05.jpg",
  "image-06.jpg"
]

const WeddingCards = () => (
  <Container tag="section"
             wrapperClassName="flex flex-col items-center gap-y-6">
    <div className={cn(
      "w-full grid grid-cols-3 md:grid-cols-4 grid-rows-2 gap-4 md:gap-6"
    )}>
      {
        images.map((image, index) => (
          <img key={image}
               src={`/images/home/wedding-cards/${image}`}
               alt={"عکس عروسی " + (index + 1)}
               className={cn(
                 "w-full h-full rounded-2xl object-cover object-center",
                 (index === 1 || index === 2) && "hidden md:block",
                 index === 0 && [
                   "max-h-52 row-start-1 row-end-3 col-start-1 col-end-2",
                   "object-top"
                 ],
                 index + 1 === images.length && [
                   "max-h-52 row-start-1 row-end-3",
                   "col-start-3 md:col-start-4 col-end-4 md:col-end-5"
                 ]
               )}
          />
        ))
      }
    </div>
    <h4 className="caption-3 md:heading-4 text-gray-950 text-center">
      کارت دعوت عروسی رو خودتون طراحی کنید
    </h4>
    <LinkButton text="شروع طراحی"
                rightIcon="brush"
                className="w-full md:w-auto" />
  </Container>
);

export default WeddingCards;