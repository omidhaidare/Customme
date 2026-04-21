import cn from "classnames";
import Container from "../../components/ui/Container";
import LinkButton from "../../components/ui/LinkButton.jsx"

const Hero = () => (
  <Container tag="header"
             wrapperClassName={cn(
               "flex flex-col-reverse md:flex-row items-center gap-x-6",
               "py-2 px-4 lg:py-9 lg:pr-[4.5rem] lg:pl-32",
               "bg-ac-tint-300 rounded-lg lg:rounded-2xl",
               "lg:relative overflow-hidden"
             )}>
    <div className="w-full lg:w-2/5">
      <h1 className={cn(
        "heading-6 lg:heading-3 text-gray-900 text-center md:text-right",
        "md:mb-1 lg:mb-4"
      )}>
        آنلاین شاپ کاستومی
      </h1>
      <p className="body-5 lg:body-2 text-gray-900 mb-2 lg:mb-14">
        آنلاین شاپ کاستومی محصولات متنوعی داره و این امکان رو بهتون میده خودتون
        رنگ و طرح و نوشته ی روی محصولات رو انتخاب کنید
      </p>
      <div className="flex items-center gap-x-2 lg:gap-x-6">
        <LinkButton size="custom"
                    text="شروع طراحی"
                    rightIcon="brush"
                    className={cn(
                  "w-full flex-1 py-2 px-3 lg:px-6",
                  "caption-4 lg:button-2 whitespace-nowrap",
                  "[&>svg]:w-4 [&>svg]:h-4",
                  "lg:[&>svg]:w-6 lg:[&>svg]:h-6"
                )} />
        <LinkButton variant="outline"
                    size="custom"
                    text="دیدن محصولات"
                    className={cn(
                  "w-full flex-1 py-2 px-3 lg:px-6",
                  "caption-4 lg:button-2 whitespace-nowrap",
                )} />
      </div>
    </div>
    <div className="w-full lg:w-3/5 sm:max-w-[60%] md:max-w-none">
      <img src="/images/hero-image.png"
           alt="دخترانی با لباس‌های شخسی‌سازی شده‌ی کاستومی"
           className="w-full h-auto"
      />
    </div>
    <span className={cn(
      "hidden lg:block w-60 h-96 bg-ac-tint-200 rounded-lg rotate-12",
      "absolute -top-[22.5%] 2xl:-top-[12.5%] -right-52"
    )} />
    <span className={cn(
      "hidden lg:block w-60 h-96 bg-ac-tint-200 rounded-lg -rotate-[8deg]",
      "absolute -bottom-48 -left-36"
    )} />
  </Container>
);

export default Hero;