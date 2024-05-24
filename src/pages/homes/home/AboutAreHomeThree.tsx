
import brand_img from "../../../assets/img/about/medi-brand.png";


type about_content_typ = {
  title: string;
  sub_title: string;
  sm_des: string;
}
const about_content: about_content_typ = {
  title: "19+ Years Of Experience",
  sub_title: "Shivam Health Care cures complex disease through homeopathic.",
  sm_des: "We provide you the quality homeopathic treatment for all your chronic and long standing illness and expert in diagnosis and treatment of common and rare disease such as skin disease, Warts, Corn, Leukoderma, Eczema, Psoriasis, Cracks, Dermatitis, Diabetes, Hairfall, Cyst, Benign, Malignant tumor, Leucorrhoea, Monthly irregularity, Inflammation of the uterus, Tumour, Ovarian, Childless female and male infertility , Male and female sexual dysfunction, Kidney disease like Stone, Chronic, Renal and Heart failure disese like Swelling, Coronary, Artery, Diseases, Heart attack, Stroke, Gall bladder, Stone constipation, Gas formation, Cancer, Asthma, High and low blood pressure, Pain, Gathiya, Bai, Autoimmune diseases. We provide best treatement in very less expense. ",
}
const { title, sub_title, sm_des } = about_content

const AboutAreHomeThree = ({ style }: any) => {
  return (
    <>
      <section className="about-area pt-120 pb-80">
        <div className="container">

          <div className="row align-items-center  ">
            <div className="col-xl-6 col-lg-6">
              <div className="medical-icon-brand pos-rel f-left">
                <img src={brand_img} alt="theme-pure" />
              </div>
              <div className="about-title mb-20 fix">
                <h1 className="mb-40">{title}</h1>
                <h5 className="pink-color m-0">{sub_title}</h5>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-right-content">
                <p>{sm_des}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreHomeThree;