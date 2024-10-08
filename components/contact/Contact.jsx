import PageHeader from "../PageHeader";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div
      className="w-full md:min-h-screen h-auto md:px-28 px-8 py-16 dark:bg-slate-900"
      id="contact"
    >
      <div className="md:hidden md:w-1/5 w-full flex justify-center items-start border-l-2 border-gray-400 order-1">
        <PageHeader>Contact</PageHeader>
      </div>

      <div className="w-full md:flex">
        <div className="md:w-4/5 w-full h-auto p-5 mt-2 dark:text-white transition-colors duration-500">
          <h1 className="mb-2 font-bold text-2xl" data-aos="zoom-in">
            Hello,{" "}
          </h1>
          <p className="text-pretty" data-aos="zoom-in">
            If you&apos;d like to chat with me, please feel free to reach out!
            You can either fill out the form below with your information or find
            my location, phone number, and email for direct contact. I&apos;m
            here to connect with you, so don&apos;t hesitate to get in touch.
          </p>

          <ContactForm />
        </div>

        <div className="md:w-1/5 w-full md:h-auto md:flex flex-col hidden justify-start items-center border-l-2 border-gray-400">
          <PageHeader>Contact</PageHeader>
        </div>
      </div>
    </div>
  );
};

export default Contact;
