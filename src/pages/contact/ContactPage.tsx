
import Breadcrumb from '../../compoments/common/Breadcrumb';
import FooterThree from '../../layout/footers/FooterThree';
import HeaderFive from '../../layout/headers/HeaderFive';
import ContactArea from './ContactArea';
import ContactFormArea from './ContactFormArea';
import ContactMap from './ContactMap';


const ContactPage = () => {
    console.log('Contact Loaded')

    return (
        <>
            <HeaderFive />
            <main>
                <Breadcrumb sub_title='We are here for your care.' title='Contact Us' page='Contact' imgUrl={""} />
                <ContactArea />
                <ContactFormArea />
                <ContactMap />
            </main>
            <FooterThree />
        </>
    );
};

export default ContactPage;