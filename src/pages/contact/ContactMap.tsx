
import { CONTACT } from '../../utils/constant';

const ContactMap = () => {
  return (
    <>
      <section className="map-area">
        <div id="contact-map" className="contact-map">
          <div style={{ width: '100%', }}>
            <iframe
              title="Contact"
              src={CONTACT.GOOGLE_MAP}
              style={{ width: '100%' }}
              height={672}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;