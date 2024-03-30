"use client";

import { sendEmail } from "@/utils/sendEmail";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSending, setIsSending] = useState(false);
  const onSubmit = async (formData) => {
    const currentTime = new Date().getTime();
    setIsSending(true);
    try {
      await sendEmail(formData);
      toast.success("Email Successfully send");
    } catch (error) {
      toast.error(error.message);
    }
    reset();
    setIsSending(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} data-aos="zoom-in">
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
          {isSending ? "Sending..." : "Send"}{" "}
          {/* Change button text based on sending state */}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
