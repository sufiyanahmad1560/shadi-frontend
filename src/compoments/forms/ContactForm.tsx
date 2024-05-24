
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import * as yup from "yup";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
}

const schema = yup.object({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  phone: yup.string().required().label("Phone"),
  subject: yup.string().required().label("Subject"),
}).required();



const ContactForm = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const notify = () => toast("Submit Successful");
    notify()
    reset();
    console.log(data);
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-box user-icon mb-30">
              <input type="text" placeholder="Your Name" {...register("name")} />
              <p className="form_error">{errors.name?.message}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-box email-icon mb-30">
              <input type="text" placeholder="Your Email" {...register("email")} />
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-box phone-icon mb-30">
              <input type="text" placeholder="Your Phone" {...register("phone")} />
              <p className="form_error">{errors.phone?.message}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-box subject-icon mb-30">
              <input type="text" placeholder="Your Subject" {...register("subject")} />
              <p className="form_error">{errors.subject?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box message-icon mb-30">
              <textarea name="message" id="message" cols={30} rows={10} placeholder="Your Message"></textarea>
            </div>
            <div className="contact-btn text-center">
              <button className="btn btn-icon ml-0" type="submit"><span>+</span> get action</button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;