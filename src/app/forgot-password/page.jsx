import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { GoMail } from "react-icons/go";

export default function ForgotPassword() {
  return (
    <div className="w-full bg-[url('/bg.jpg')] bg-no-repeat  bg-cover flex md:flex-row flex-col justify-between items-stretch h-screen bg-white">
      <div className="flex flex-col justify-between md:gap-5 gap-3 md:p-8 p-2">
        <div className="flex flex-col gap-2 mx-auto">
          <h1 className="text-4xl text-left font-extrabold">Speak your</h1>
          <p className="text-lg pb-1 font-normal">Login ID & Password.</p>
        </div>

        <Image src="/audio.gif" alt="audio" width={250} height={200} />

        <div className="flex flex-col">
          <span className="flex flex-row border-b-[1px] font-extrabold border-slate-200 justify-between items-center p-5 pb-2 space-x-10 text-xl">
            <p>ibsharon19@gmail.com</p>
            <span>
              <HiCheckCircle size={20} style={{ color: "green" }} />
            </span>
          </span>

          <span className="flex flex-row border-b-[1px] font-extrabold border-slate-200 justify-between items-center md:pb-2 space-x-10 text-xl">
            <p className="pr-5">..................</p>
            <span>
              <HiCheckCircle size={20} style={{ color: "green" }} />
            </span>
          </span>
        </div>
      </div>

      <aside className="border pr-5 items-center md:p-5 p-0  rounded-full outline-offset-4 w-fit m-auto outline-double outline-[10px] shadow-xl shadow-sky-400 outline-slate-50">
        <FaMicrophoneAlt size={30} style={{ color: "black" }} />
      </aside>

      <div className="basis-[40%] flex justify-center gap-8 bg-black text-white p-10 h-screen ">
        <div className="flex  border rounded-tr-xl border-gray-600 flex-col">
          <span className="flex flex-row mx-auto gap-3">
            <h1 className=" font-extrabold text-4xl">FORGOT PASSWORD</h1>
            <BiErrorCircle size={40} style={{ color: "white" }} />
          </span>
          <p className="p-5 font-bold">
            Enter your email and we'll send a link to reset your password.
          </p>

          <span className="flex flex-row border justify-between bg-transparent">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
            />
            <p>
              <GoMail size={30} style={{ color: "white" }} />
            </p>
          </span>
          <div className="flex flex-row p-10 text-2xl gap-5 pl-6 mx-auto font-extrabold text-center text-black ">
            <button className="border h-[50px] w-[300px] bg-white hover:scale-x-125">
              Submit
            </button>
          </div>
          <Link href="/">
            <p className="outline-double outline-inset-2 hover:outline-orange-200 text-xl font-bold justify-center">
              back to login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
