"use client";
import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";

const items = [
  {
    questions: "Lorem ipsum dolor sit, amet consectetur adipisicing?",
    answers:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dignissimos repudiandae laborum recusandae consequatur sed!",
  },
  {
    questions: "Lorem ipsum dolor sit, amet consectetur adipisicing?",
    answers:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dignissimos repudiandae laborum recusandae consequatur sed!",
  },
  {
    questions: "Lorem ipsum dolor sit, amet consectetur adipisicing?",
    answers:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dignissimos repudiandae laborum recusandae consequatur sed!",
  },
  {
    questions: "Lorem ipsum dolor sit, amet consectetur adipisicing?",
    answers:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dignissimos repudiandae laborum recusandae consequatur sed!",
  },
  {
    questions: "Lorem ipsum dolor sit, amet consectetur adipisicing?",
    answers:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dignissimos repudiandae laborum recusandae consequatur sed!",
  },
];

export default function Faq() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text[#172026] lg:text-[42px] leading-[58px]">
          Let’s clarify some of your questions
        </h1>
        <p className="text-[#36485C] pb-[24px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          dignissimos repudiandae laborum recusandae consequatur sed!
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.questions}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="See more"
                        className="h-10 w-10 lg:h-6 lg:w-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answers}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
