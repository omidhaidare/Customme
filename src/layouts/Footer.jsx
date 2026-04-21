import cn from "classnames";
import InlineSVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import LinkButton from "../components/ui/LinkButton";

const socialLinks = [
  { id: 1, logo: "instagram", link: "https://www.instagram.com" },
  { id: 2, logo: "facebook", link: "https://www.facebook.com" },
  { id: 3, logo: "pinterest", link: "https://www.pinterest.com" },
  { id: 4, logo: "youtube", link: "https://www.youtube.com" }
];

const sections = [
  {
    id: 1,
    title: "همراه با کاستومی",
    links: [
      { id: 1, href: "/sell-products", text: "فروش محصولات" },
      { id: 2, href: "/cooperation-opportunity", text: "فرصت همکاری" },
      { id: 3, href: "/cotnact-us", text: "تماس با ما" },
      { id: 4, href: "/site-map", text: "نقشه سایت" }
    ]
  },
  {
    id: 2,
    title: "خدمات مشتریان",
    links: [
      { id: 1, href: "/faq", text: "سوالات متداول" },
      { id: 2, href: "/privacy-policy", text: "حریم خصوصی" },
      { id: 3, href: "/complaint", text: "ثبت شکایت" },
      { id: 4, href: "/warranty", text: "ضمانت نامه محصولات" }
    ]
  },
  {
    id: 3,
    title: "راهنمای خرید",
    links: [
      { id: 1, href: "/faq/order-guide", text: "راهنمای ثبت سفارش" },
      { id: 2, href: "/faq/payment-methods", text: "شیوه های پرداخت" },
      { id: 3, href: "/faq/orders-shipping-ways", text: "نحوه ارسال سفارش ها" },
      { id: 4, href: "/faq/product-return-terms", text: "شرایط بازگرداندن محصول" }
    ]
  }
];

const badges = [
  { id: 1, link: "https://enamd.ir", image: "enamd.jpg", alt: "نماد اعتماد الکترونیکی" },
  { id: 2, link: "https://samandehi.ir", image: "samandehi.jpg", alt: "ساماندهی پایگاه های اینترنتی" },
  { id: 3, link: "https://ecunion.ir", image: "ecunion.jpg", alt: "اتحادیه کشوری کسب و کارهای مجازی" }
]

const Footer = () => (
  <footer>
    <Container tag="div"
               containerClassName="bg-ac-shade-600 lg:py-11"
               wrapperClassName={cn(
                 "flex flex-col md:flex-row items-center justify-between",
                 "gap-8"
               )}>
      <div>
        <p className="body-4 text-white text-center md:text-right mb-3">
          برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید
        </p>
        <div className="flex items-center gap-x-3">
          <input type="text"
                 placeholder="ایمیل شما"
                 className={cn(
                   "lg:min-w-[26rem] w-full bg-transparent py-3 px-2",
                   "body-5 text-white placeholder:text-gray-600",
                   "border border-white rounded-lg outline-none"
                 )} />
          <LinkButton text="ثبت" size="md" className="hover:bg-ac-shade-700" />
        </div>
      </div>
      <div>
        <p className="body-4 text-white mb-6">
          ما را در شبکه های اجتماعی دنبال کنید
        </p>
        <div className={cn(
          "flex flex-row-reverse items-center justify-center gap-x-6"
        )}>
          {
            socialLinks.map(socialLink => (
              <a key={socialLink.id} href={socialLink.link} target="_blank">
                <InlineSVG src={`/logos/social/${socialLink.logo}.svg`}
                           className="w-6 h-auto [&>*]:fill-white" />
              </a>
            ))
          }
        </div>
      </div>
    </Container>
    <Container tag="div" containerClassName="bg-ac-primary lg:py-11">
      <div className={cn(
        "grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        "lg:items-center justify-between gap-8 mb-12"
      )}>
        {
          sections.map(section => (
            <div key={section.id} className="flex flex-col gap-y-6">
              <h5 className={cn(
                "caption-1 text-white border-b border-b-white pb-2",
                "self-start"
              )}>
                { section.title }
              </h5>
              <div className="flex flex-col gap-y-5">
                {
                  section.links.map(link => (
                    <Link key={link.id}
                          to={link.href}
                          className={cn(
                            "text-white body-4 pb-1 border-b self-start",
                            "border-b-transparent hover:border-b-white"
                          )}>
                      { link.text }
                    </Link>
                  ))
                }
              </div>
            </div>
          ))
        }
        <div className="xs:col-span-2 md:col-span-3 lg:col-span-1">
          <h2 className="heading-6 text-white text-center mb-10">
            فروشگاه اینترنتی کاستومی
          </h2>
          <div className={cn(
            "flex flex-col md:flex-row lg:flex-col 2xl:flex-row",
            "items-center justify-center gap-y-4 gap-x-8 mb-[4.5rem]"
          )}>
            <p className="body-5">
              <span className="text-white ml-3">تماس با پشتیبانی :</span>
              <span className="text-white">۳۴۵۶۰۰۰-۰۲۱</span>
            </p>
            <p className="body-5 text-white">
              پاسخگویی ۲۴ ساعته ، ۷ روز هفته
            </p>
          </div>
          <div className="flex items-center justify-center gap-x-8">
            {
              badges.map(({ id, image, alt, link }) => (
                <a key={id} href={link} target="_blank">
                  <img src={`/images/badges/${image}`}
                       alt={alt}
                       className="h-16 w-auto rounded" />
                </a>
              ))
            }
          </div>
        </div>
      </div>
      <p className="text-white text-center caption-4">
        تمام حقوق این وبسایت متعلق به فروشگاه آنلاین کاستومی می باشد
      </p>
    </Container>
  </footer>
);

export default Footer;