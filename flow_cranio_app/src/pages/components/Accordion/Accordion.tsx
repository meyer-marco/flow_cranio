import React from "react";
import { Accordion as AccordionWrapper } from "flowbite-react";
import style from "./accordion.module.css";

const Accordion: React.FC<{ id?: string }> = ({ id }) => {
  return (
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
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
          </div>
          <div className=" text-main-violet">
            <p>Check out this guide to learn how to </p>
            <p>
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </div>
        </AccordionWrapper.Content>
      </AccordionWrapper.Panel>
      <AccordionWrapper.Panel>
        <AccordionWrapper.Title className=" text-main-violet">
          Is there a Figma file available?
        </AccordionWrapper.Title>
        <AccordionWrapper.Content>
          <div className="mb-2  text-main-violet">
            <p>
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
          </div>
          <div className=" text-main-violet">
            <p>Check out the</p>
            <p>
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </div>
        </AccordionWrapper.Content>
      </AccordionWrapper.Panel>
      <AccordionWrapper.Panel>
        <AccordionWrapper.Title className=" text-main-violet">
          What are the differences between Flowbite and Tailwind UI?
        </AccordionWrapper.Title>
        <AccordionWrapper.Content>
          <div className="mb-2 text-main-violet">
            <p>
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
          </div>
          <div className="mb-2 text-main-violet">
            <p>
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
          </div>
          <div className="mb-2  text-main-violet">
            <p>Learn more about these technologies:</p>
          </div>
        </AccordionWrapper.Content>
      </AccordionWrapper.Panel>
    </AccordionWrapper>
  );
};
export default Accordion;
