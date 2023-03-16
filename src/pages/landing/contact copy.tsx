/** @format */
import React, { useState } from "react";
import { GetStaticPropsContext } from "next";
import Image from "next/image";

import MainLayout from "@/components/layout/main";
import Header from "@/components/headers/landing/header";
import Section from "@/components/headers/landing/section";
// Icons
import { AtSymbolIcon, InboxIcon } from '@heroicons/react/24/outline'
//Images
import image from "public/images/assets/landing/contact/slide.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    company: "",
    phone: "",
    subject: "Personal",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const { name, surname, email, company, phone, subject, message } = formData;

  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (formData.name == '') {
      setError(true)
    } else {
      setSubmitted(true)

    }

    console.log(formData);
    // Add logic to send form data to backend or external service here
  };

  return (
    <>
      <Header image={image} />
      <Section title="CONTACT US" gradiant="h-[129px] w-[100%] pl-[20px] lg:pl-[200px] py-[35px] bg-gradient-to-b from-customGreen via-customGreen to-white" />

      <div className=" flex relative mt-[50px] mb-[50px]  w-[1046px] mx-auto bg-white  rounded-3xl shadow-[0px_4px_8px_5px_rgba(0,0,0,0.25)] ">
        {
          submitted ?
            (
              <>
                <div className="flex flex-col ">

                  <h2 className="w-[342px] h-[60px] font-provicali font-normal text-[24px] leading-[30px] tracking-wider text-verde-2 font-bold mt-[73px] ml-[88px] text-green-500">
                    Your message has been sent successfully.
                  </h2>
                  <p className="ml-[88px] mt-[23px]">Thank you very much, we will contact you as soon as possible!
                  </p>
                </div>
              </>
            )
            : error ?
              (
                <>
                  <div className="flex flex-col ">

                    <p className="w-[232px] h-[30px] font-[provicali] font-normal text-rojo-[3px] text-[24px] leading-[30px] font-bold mt-[73px] ml-[88px] text-red-500">
                      An error occurred.
                    </p>
                    <p className="ml-[88px] mt-[23px]">Please try again or contact us through our social networks or WhatsApp</p>
                    <button

                      className="flex bg-[#C34BBD] justify-center w-[396px] h-[44px] px-10 gap-[5px] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded  mt-[23px] ml-[88px]"
                      onClick={() => setError(false)}
                    >
                      Back to the form
                    </button>
                  </div>
                </>
              )
              :
              <>
                <div className="flex justify-start flex-wrap mt-[50px] mb-[50px] ml-[58px]">
                  <div className="block font-bold mb-2">
                    We want to know more about you
                  </div>
                  <form onSubmit={onSubmit} className="max-w-md w-full">
                    <div className="mb-4">
                      <label htmlFor="name" className="block font-bold mb-2">
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={onChange}
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="surname" className="block font-bold mb-2">
                        Surname:
                      </label>
                      <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={surname}
                        onChange={onChange}
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="block font-bold mb-2">
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="company" className="block font-bold mb-2">
                        Company:
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={company}
                        onChange={onChange}
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="phone" className="block font-bold mb-2">
                        Phone:
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={onChange}
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="subject" className="block font-bold mb-2">
                        Subject:
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={subject}
                        onChange={onChange}
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option value="Personal">Personal</option>
                        <option value="Work">Work</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="block font-bold mb-2">
                        Message:
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={onChange}
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex bg-customGreen justify-center w-[396px] h-[44px] px-10 gap-[5px] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Send
                    </button>
                    <div className="flex justify-center mt-[36px] gap-[35px]">
                      <div className="flex gap-[15px] items-center">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-[10px] text-[#000000]">@CulturizateApp</p>
                      </div>
                      <div className="flex gap-[15px] items-center">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-[10px] text-[#000000]">@CulturizateApp</p>
                      </div>
                    </div>
                    <div className=" flex gap-[37.9px] mt-[21px]">
                      <div className="flex gap-[11.09px]">
                        <div className="flex items-center">
                          <svg fill="currentColor" viewBox="0 0 24 24">
                            <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clipRule="evenodd"
                            />
                          </svg></div>
                        <div className="text-[10px]">
                          <h4>WhatsApp
                            <br />
                            <span className="text-[#F9BB35]">+52 (492) 250 4460</span></h4>
                        </div>
                      </div>
                      <div className="flex gap-[11.09px] ">
                        <div className="flex items-center"><InboxIcon /></div>
                        <div className="text-[10px]">
                          <h4>EMAIL <br />
                            <span className="text-[#F9BB35]">contacto@culturizate.app
                              ventas@culturizate.app</span></h4>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="relative">
                  <p className="absolute bottom-[211px] right-[-546px] font-provicali font-bold text-xs w-[445px]">José Sergio Báez 111-B, Villas del Sol, Zacatecas, Zacatecas, México. C.P. 98067</p>
                </div>

              </>

        }
        <div className="absolute  -left-[-578.88px] top-[38px]  z-2">

        </div>
        <div className="flex justify-end ml-[292px]">
          <div className="w-[304.36px] h-[653.75px] bg-black z-1 rounded-tr-3xl"></div>
        </div>
        {


        }

      </div>
    </>
  );
};

Contact.Layout = MainLayout;
export default Contact;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}
