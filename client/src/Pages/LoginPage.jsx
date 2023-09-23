import { useContext } from "react";
// import { AuthContext } from "../components/Auth/AuthContext";
import { Button, Input, Typography } from "@material-tailwind/react";
import image from "../assets/random/loginImage.svg";

export const Login = () => {
  return (
    <>
      <div className="lg:flex items-center">
        <div className=" lg:w-1/2 bg-loginBg h-[79vh] flex flex-col items-center justify-center">
          {/* <img src={image} className=" w-full" /> */}
          <Typography
            color="white"
            className="text-5xl font-extrabold ml-20 mt-[-80px] self-start"
          >
            Embrace the <br />{" "}
            <span className="text-white">spirit of India</span>
          </Typography>
          <br />
          <Typography
            color="white"
            className="text-sm w-[30rem] ml-20 self-start"
          >
            An unparalleled legacy that spans millennia. Pure, authentic craft
            sourced from artisans across the Indian sub- continent. Our vast
            collection of over 80 different craft forms celebrates a heritage of
            some of the world's oldest handicrafts.
          </Typography>
        </div>
        <div className="lg:w-1/2 px-56 h-[79vh] flex flex-col gap-5 items-center justify-center">
            <Typography color="black" className="text-xl self-start">
            LOGIN
            </Typography>
            <Typography color="gray" className="text-sm self-start">
                If you are already registered, please log in.
            </Typography>
          <Input
            type="text"
            color="lightBlue"
            size="regular"
            outline={false}
            label="Enter your email"
            className="rounded-none"
          />
          <Input
            type="password"
            color="lightBlue"
            size="regular"
            outline={false}
            label="Enter your password"
            className=" rounded-none"
          />
          <Typography color="gray" className="self-start text-xs">
            <span className="cursor-pointer hover:underline">Forgot Password?</span>
          </Typography>
          <Button
            variant="outlined"
            size="regular"
            className=" rounded-none w-full"
          >
            Login
          </Button>
          <Typography color="gray" className="text-sm mt-5">
            Create your account and enjoy a new shopping experience.{" "}
            {/* <span className="text-lightBlue-500 cursor-pointer">Sign up</span> */}
          </Typography>
          <Button variant="filled" size="regular" className="bg-Charcoal rounded-none w-full">
            Sign Up
            </Button>
        </div>
      </div>
    </>
  );
};
