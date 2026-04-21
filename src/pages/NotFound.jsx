import Navbar from "../layouts/Navbar.jsx";
import SubNavbar from "../layouts/SubNavbar.jsx";
import Container from "../components/ui/Container.jsx";
import LinkButton from "../components/ui/LinkButton.jsx";
import Footer from "../layouts/Footer.jsx";

const NotFoundPage = () => {
    return (
        <>
            <Navbar />
            <SubNavbar />

            <Container tag="section" wrapperClassName="flex flex-col items-center justify-center gap-y-10">
                <img src="/images/not-found-min.png" alt="۴۰۴ - چیزی پیدا نشد " className="h-64 w-auto"/>
                <h2 className="heading-3 text-gray-950">صفحه مورد نظر یافت نشد</h2>
                <LinkButton href="/"
                            variant="outline"
                            color="primary"
                            rightIcon="arrow-right"
                            size="lg"
                            text="بازگشت به صفحه اصلی"
                />
            </Container>

            <Footer />
        </>
    );
};

export default NotFoundPage;
