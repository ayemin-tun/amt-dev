"use client";

import { sendEmail } from "@/utils/sendEmail";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    sendEmail(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1 my-2">
          <label className="">Full Name</label>
          <input
            type="text"
            name="name"
            id=""
            className="md:w-[70%] w-full dark:border-0 border-2 border-gray-400 text-base p-1"
            {...register("name", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-1 my-2">
          <label className="">Email</label>
          <input
            type="email"
            name="email"
            id=""
            className="md:w-[70%] w-full dark:border-0 border-2 border-gray-400 text-base p-1"
            {...register("email", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-1 my-2">
          <label className="">Message</label>
          <textarea
            rows="4"
            name="message"
            id=""
            className="md:w-[70%] w-full dark:border-0 border-2 border-gray-400 text-base p-1"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <button className=" py-3 bg-gray-600 text-white md:w-[70%] w-full">
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
