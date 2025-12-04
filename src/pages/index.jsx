import { Header, Main3 } from "@/components";
import { ContactMe } from "@/components/Contact";
import { FooterYeah } from "@/components/Footer";
import { Main1 } from "@/components/Main1";
import { Main2 } from "@/components/Main2";
import { Main4 } from "@/components/Main4";
import { Main5 } from "@/components/Main5";
import { MobileXbutton, OnclickIcon, OnIcon } from "@/components/svg";
export default function app() {
  return (
    <div className="w-full dark:bg-black dark:text-white ">
      <Header />
      <Main1 />
      <div className="w-screen  bg-[#F9FAFB] ">
        <Main2 />
      </div>
      <Main3 />
      <div className="w-screen  bg-[#F9FAFB] dark:bg-[#111827]">
        <Main5 />
      </div>
      <Main4 />
      <ContactMe />
      <div className="w-screen  bg-[#F9FAFB] dark:bg-[#111827]">
        <FooterYeah />
      </div>
    </div>
  );
}
