import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { TbPassword } from "react-icons/tb";
import { RxReset } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export default function page() {
  return (
    <div className="w-full bg-[url('/hp.jpg')] bg-no-repeat bg-cover text-2xl flex flex-col md:flex-row justify-between items-stretch h-screen">
      <div className="flex flex-col justify-between gap-5 p-10">
        <div className="flex flex-col gap-2 mx-auto">
          <h1 className="md:text-4xl md:font-extrabold text-left font-bold">
            Speak your
          </h1>
          <p className="text-lg pb-1 md:font-bold font-normal">
            Login ID & Password.
          </p>
        </div>
        <Image
          src="/audio.gif"
          alt="gif"
          width={250}
          height={200}
          className="md:w-[250px] w-[130px]"
        />
        <div className="flex flex-col justify-center md:gap-6 gap-1 mx-auto">
          <span className="flex flex-row font-extrabold border-b-[1px] border-slate-200 justify-between items-center pb-2 md:space-x-10 space-x-5 text-2xl">
            <p className="">ibsharon19@gmail.com</p>
            <span>
              <HiCheckCircle size={20} style={{ color: "green" }} />
            </span>
          </span>

          <span className="flex flex-row border-b-[1px] font-extrabold border-slate-200 justify-between items-center pb-2 md:space-x-10 space-x-5 text-2xl">
            <p className="pr-5">..................</p>
            <span>
              <HiCheckCircle size={20} style={{ color: "green" }} />
            </span>
          </span>
        </div>
      </div>

      <aside className="border p-5 rounded-full outline-offset-4 w-fit m-auto outline-double outline-[10px] shadow-xl shadow-sky-400 outline-slate-50">
        <FaMicrophoneAlt size={30} style={{ color: "black" }} />
      </aside>

      <div className="flex flex-col justify-between gap-5 md:p-8 p-6 bg-black text-white md:basis-[40%] w-full ">
        <div className="flex flex-col gap-2">
          <span className="flex flex-row justify-between items-center">
            <h1 className="md:text-4xl text-xl text-left md:font-extrabold font-bold">
              Login
            </h1>
          </span>
          <p className="text-lg pb-1 font-normal">Hello! Let's get started</p>
        </div>
        <Image
          src="/favicon.ico"
          width={100}
          height={100}
          alt="fav"
          className="border rounded-full mx-auto"
        />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="flex flex-row border rounded-md p-1 justify-between items-center text-2xl">
              <input
                placeholder="Email ID"
                className="text-base bg-transparent md:w-[400px] placeholder:text-slate-200  border-slate-200"
              />
              <span className="mr-8">
                <GoMail size={30} style={{ color: "white" }} />
              </span>
            </span>
            <span className="flex flex-row border rounded-md justify-between items-center p-1 text-2xl">
              <input
                placeholder="Password"
                className=" md:w-[400px] border-slate-200 pb-2 space-x-10 text-base bg-transparent placeholder:text-slate-200"
              />
              <span className="mr-8">
                <TbPassword size={30} style={{ color: "white" }} />
              </span>
            </span>
          </div>
          <div className="flex gap-1">
            <p className="text-slate-300 flex md:text-2xl text-base">
              Forgot password?
              <Link href="/forgot-password" className="text-black font-bold">
                Reset
              </Link>
              <span className="border rounded-md bg-white md:w-[100px] p-1 hover:opacity-40">
                <Link href="/forgot-password">
                  <RxReset
                    className="mx-auto"
                    size={30}
                    style={{ color: "black" }}
                  />
                </Link>
              </span>
            </p>
          </div>
          <Link href="/sign-up">
            <div className="flex gap-3 md:text-lg text-sm">
              <p>Don't have an account?</p>
              <button className="border rounded-md bg-white md:w-[120px] p-1 hover:opacity-40 text-black">
                Sign up
              </button>
            </div>
          </Link>

          <span className="flex flex-row  font-normal border rounded-md bg-slate-300 ">
            <FaFacebook size={20} style={{ color: "blue" }} className="mt-1" />
            <p className="pr-10 mx-auto"> Continue with facebook </p>
          </span>
          <span className="flex flex-row  font-normal border rounded-md bg-slate-300  ">
            <FcGoogle size={20} className="mt-1" />
            <p className="pr-10 mx-auto"> Continue with google </p>
          </span>
        </div>
      </div>
    </div>
  );
}
