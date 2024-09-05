import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";

export default function Footer() {
  return (
    <div className="pt-[80px] pb-[40px]">
      <div className="lg:flex lg:w-full lg:justify-between lg:items-start">
        <div className="flex items-start justify-center gap-x-[12px] lg:w-1/3 lg:justify-start">
          <Image src={Logo} alt="Logo" />
          <p className="font-bold text-[#07090a] text-[17px]">Your Site</p>
        </div>

        <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485F]   sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5 lg:flex-col">
          <li>Features</li>
          <li>Growth</li>
          <li>Sales</li>
          <li>Chat</li>
        </ul>
        <ul className="hidden flex-col items-center gap-y-[32px] pt-[56px] text-[#36485F] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5 lg:flex lg:flex-col ">
          <li>Pricing</li>
          <li>Free Trial</li>
          <li>Standard</li>
          <li>Business</li>
        </ul>
        <ul className="hidden flex-col items-center gap-y-[32px] pt-[56px] text-[#36485F] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5 lg:flex lg:flex-col ">
          <li>Enterprise</li>
          <li>Personalize</li>
          <li>Automation</li>
          <li>Invoicing</li>
          <li>24/7 Support</li>
        </ul>
        <ul className="hidden flex-col items-center gap-y-[32px] pt-[56px] text-[#36485F] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5 lg:flex lg:flex-col ">
          <li>Careers</li>
          <li>Open Positions</li>
          <li>Part-Time</li>
          <li>Contractual</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="lg:flex lg:flex-row lg:w-full lg:justify-between">
        <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7869] sm:pt-5 lg:pt-[80px]">
          © Copyright 2024. Your Site. All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-x-[56px] pt-[40px] lg:items-end">
          <Image src={Facebook} alt="Facebook" />
          <Image src={Twitter} alt="Twitter" />
          <Image src={Feed} alt="Feed" />
        </div>
      </div>
    </div>
  );
}
