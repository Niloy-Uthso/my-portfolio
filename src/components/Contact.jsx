import { forwardRef, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast'; 

const Contact = forwardRef((_, ref) => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q2jtz2q',
        'template_hnu6bg6',
        formRef.current,
        'Iiyjrmb-ueGucPDl9'
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          toast.error('Something went wrong. Try again later.');
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" ref={ref} className="py-16 px-4 lg:px-20 bg-base-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">Contact Me</h2>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col items-center gap-4 ">
          <input name="name" type="text" placeholder="Your Name" className="input input-bordered" required />
          <input name="email" type="email" placeholder="Your Email" className="input input-bordered" required />
          <input name="subject" type="text" placeholder="Subject" className="input input-bordered" required />
          <textarea name="message" className="textarea textarea-bordered" rows="4" placeholder="Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
});

export default Contact;
