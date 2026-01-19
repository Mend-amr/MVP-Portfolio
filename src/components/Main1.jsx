import {
  FigmaIcon,
  GithubIcon,
  TwitterIcon,
  GreenIcon,
  LocationIcon,
} from "./svg";

export const Main1 = () => {
  return (
    <div className="container m-auto py-[96px]  px-[16px] ">
      <div className=" flex  md:justify-between gap-12 md:px-8  ">
        <div className="w-[600px] flex flex-col gap-12">
          <div className="flex flex-col gap-2 ">
            <div className="md:hidden w-50 h-50 ">
              <img src="./agaa2.png" alt="" />
            </div>
            <p className=" text-6xl leading-[72px] not-italic tracking-[-1.2px] font-bold text-gray-900  dark:text-white">
              Hi, I’m MVP 👋
            </p>
            <p className="text-base not-italic font-normal text-gray-600  dark:text-white">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <a href="https://www.google.com/maps/place/Ulaanbaatar/@47.8916206,106.8194715,12z/data=!3m1!4b1!4m6!3m5!1s0x5d96925be2b18aab:0xe606927864a1847f!8m2!3d47.9220509!4d106.9155007!16zL20vMGhxa2c?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D">
                <LocationIcon />
              </a>
              <p className="text-base not-italic font-normal text-gray-600  dark:text-white">
                Ulaanbaatar, Mongolia
              </p>
            </div>
            <div className="flex gap-2 ">
              <GreenIcon />
              <p className="text-base not-italic font-normal text-gray-600  dark:text-white">
                Available for new projects
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex gap-1">
              <button>
                <GithubIcon />
              </button>
              <button>
                <TwitterIcon />
              </button>
              <button>
                <FigmaIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[600px]  justify-end items-center md:flex hidden">
          <img className="w-100 h-100" src="./agaa2.png" alt="" />
        </div>
      </div>
    </div>
  );
};
