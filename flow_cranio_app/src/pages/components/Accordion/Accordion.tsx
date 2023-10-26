import React from "react";
import { Accordion as AccordionWrapper, Flowbite } from "flowbite-react";
import style from "./accordion.module.css";
import type { CustomFlowbiteTheme, ThemeProps } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  accordion: {
    root: {
      base: " ",
      flush: {
        off: "rounded-lg border",
        on: "border-b",
      },
    },
    content: {
      base: "py-5 px-10 last:rounded-b-lg first:rounded-t-lg bg-second-background",
    },
    title: {
      arrow: {
        base: "h-6 w-6 shrink-0",
        open: {
          off: "",
          on: "rotate-180",
        },
      },
      base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
      flush: {
        off: "",
        on: "bg-transparent ",
      },
      heading: "",
      open: {
        off: "",
        on: "text-main-violet ",
      },
    },
  },
};

const Accordion: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <AccordionWrapper
        className={`md:w-2/3 border-main-violet ${style.accordion}`}
      >
        <AccordionWrapper.Panel>
          <AccordionWrapper.Title className=" text-main-violet ">
            Für wen ist Cranio Sacral geeignet?
          </AccordionWrapper.Title>
          <AccordionWrapper.Content className="">
            <div className="mb-2 text-main-violet">
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi. Nam liber tempor cum soluta nobis
                eleifend option congue nihil imperdiet doming id quod mazim
                placerat facer possim assum. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
          </AccordionWrapper.Content>
        </AccordionWrapper.Panel>
        <AccordionWrapper.Panel>
          <AccordionWrapper.Title className=" text-main-violet">
            Für Kinder & Säuglinge
          </AccordionWrapper.Title>
          <AccordionWrapper.Content>
            <div className="mb-2  text-main-violet">
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi. Nam liber tempor cum soluta nobis
                eleifend option congue nihil imperdiet doming id quod mazim
                placerat facer possim assum. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
          </AccordionWrapper.Content>
        </AccordionWrapper.Panel>
        <AccordionWrapper.Panel>
          <AccordionWrapper.Title className=" text-main-violet">
            Wobei kann Cranio Saracl unterstüzen?
          </AccordionWrapper.Title>
          <AccordionWrapper.Content>
            <div className="mb-2 text-main-violet">
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi. Nam liber tempor cum soluta nobis
                eleifend option congue nihil imperdiet doming id quod mazim
                placerat facer possim assum. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
          </AccordionWrapper.Content>
        </AccordionWrapper.Panel>
      </AccordionWrapper>
    </Flowbite>
  );
};
export default Accordion;
