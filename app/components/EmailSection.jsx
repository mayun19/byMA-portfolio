"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().nonempty("Email is required.").email("Invalid email."),
  subject: z.string().nonempty("Message is required.").min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  content: z.string().nonempty("Message is required.").min(6, {
    message: "Message must be at least 6 characters.",
  }),
});

const EmailSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(formSchema) });

  async function onSubmit(values) {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        subject: values.subject,
        content: values.content,
      }),
    });

    if (response.status !== 200) {
      toast.error(`This didn't work - ${response.statusText}`);
    } else {
      toast.success("Message has been sent successfully ✨");
    }
  }

  return (
    <section className="grid md:grid-cols-2 mb-12 mt-0 py-24 gap-6 md:gap-14 relative">
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 sm:-translate-x-[90%] -translate-y-1/2"></div>

      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Im currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my
          best to get back to you!
        </p>
        <div className="md:hidden flex flex-row justify-start gap-4 mb-4">
          <Link
            href="https://www.linkedin.com/in/mutiaraayun/"
            target="_blank"
            rel="noreferrer"
            className="border-white border hover:border-purple-400 p-1 rounded-full">
            <FiLinkedin
              size="1rem"
              className="text-center cursor-pointer hover:text-purple-400"
            />
          </Link>
          <Link
            href="https://github.com/mayun19"
            target="_blank"
            rel="noreferrer"
            className="border-white border hover:border-purple-400 p-1 rounded-full">
            <FiGithub
              size="1rem"
              className="text-center cursor-pointer hover:text-purple-400"
            />
          </Link>
          {/* </div> */}
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              {...register("email")}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="elanor@mail.com"
            />
            {errors?.email && (
              <p className="ml-1 mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="text-white block text-sm font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              {...register("subject")}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
            {errors?.subject && (
              <p className="ml-1 mt-1 text-sm text-red-400">
                {errors.subject.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              {...register("content")}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."></textarea>
            {errors?.content && (
              <p className="ml-1 mt-1 text-sm text-red-400">
                {errors.content.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-xl w-full">
            {isSubmitting ? "Loading..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
