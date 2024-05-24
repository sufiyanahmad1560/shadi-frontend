import { useEffect } from "react";
import { Link } from "react-router-dom";
import imgUrl from '../assets/img/404/error.webp';
import Breadcrumb from "../compoments/common/Breadcrumb";
import FooterThree from "../layout/footers/FooterThree";
import HeaderFive from "../layout/headers/HeaderFive";
import { APP_ROUTES, PAGE_TITLE } from "../utils/constant";

const ErrorPage = () => {
    useEffect(() => {
        // Set the page title when the component mounts
        document.title = PAGE_TITLE.ERROR;

        // Optionally, you can return a cleanup function to reset the title when the component unmounts
        return () => {
            document.title = PAGE_TITLE.HOME;
        };
    }, []);
    return (
        <>
            <HeaderFive />
            <main>
                <Breadcrumb sub_title="We are here for your care." title="404 || Page not found" page="404" imgUrl={imgUrl} />
                <div className="pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2">
                                <div className="error-404 not-found mb-20">
                                    <div className="error-404-content text-center">
                                        <h1 className="error-404-title"> 404 </h1>
                                        <h2 className="error-title">Page not found</h2>
                                        <p className="err-text">
                                            Oops! The page you are looking for does not exist. It
                                            might have been moved or deleted.{" "}
                                        </p>
                                        <Link className="primary_btn" to={APP_ROUTES.HOME}>
                                            <span>+</span>BACK TO HOME
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <FooterThree />
        </>
    );
};

export default ErrorPage;
