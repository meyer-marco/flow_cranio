import { SVGProps } from "react";

const Wave = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: "rotate(0deg)",
      transition: ".3s",
    }}
    viewBox="0 0 1440 300"
    {...props}
  >
    <defs>
      <linearGradient id="a" x1={0} x2={0} y1={1} y2={0}>
        <stop offset="0%" stopColor="rgba(221, 142, 109, 1)" />
        <stop offset="100%" stopColor="rgba(251, 243, 227, 1)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="m0 240 60-35c60-35 180-105 300-120s240 25 360 50 240 35 360 20 240-55 360-60 240 25 360 55 240 60 360 50 240-60 360-65 240 35 360 40 240-25 360-15 240 60 360 85 240 25 360 20 240-15 360-15 240 10 360 5 240-25 360-25 240 20 360 10 240-50 360-55 240 25 360 40 240 15 360-5 240-60 360-60 240 40 360 35 240-55 360-70 240 5 360-5 240-50 360-35 240 85 300 120l60 35v60H0Z"
      style={{
        transform: "translate(0,0)",
        opacity: 1,
      }}
    />
    <defs>
      <linearGradient id="b" x1={0} x2={0} y1={1} y2={0}>
        <stop offset="0%" stopColor="rgba(221, 142, 109, 1)" />
        <stop offset="100%" stopColor="rgba(251, 243, 227, 1)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#b)"
      d="m0 270 60-45c60-45 180-135 300-175s240-30 360 5 240 95 360 130 240 45 360 50 240 5 360-5 240-30 360-35 240 5 360 0 240-25 360-30 240 5 360-5 240-40 360-55 240-15 360-5 240 30 360 50 240 40 360 35 240-35 360-55 240-30 360-25 240 25 360 55 240 70 360 80 240-10 360-40 240-70 360-85 240-5 360 5 240 20 360 40 240 50 360 35 240-75 360-110 240-45 300-50l60-5v270H0Z"
      style={{
        transform: "translate(0,50px)",
        opacity: 0.9,
      }}
    />
    <defs>
      <linearGradient id="c" x1={0} x2={0} y1={1} y2={0}>
        <stop offset="0%" stopColor="rgba(221, 142, 109, 1)" />
        <stop offset="100%" stopColor="rgba(251, 243, 227, 1)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#c)"
      d="m0 150 60-25c60-25 180-75 300-65s240 80 360 120 240 50 360 55 240 5 360 5 240 0 360-40 240-120 360-140 240 20 360 55 240 65 360 50 240-75 360-90 240 15 360 45 240 60 360 85 240 45 360 55 240 10 360-15 240-75 360-85 240 20 360 45 240 45 360 10 240-125 360-125 240 90 360 130 240 30 360-10 240-110 360-145 240-35 360-25 240 30 360 25 240-35 360-50 240-15 300-15h60v300H0Z"
      style={{
        transform: "translate(0,100px)",
        opacity: 0.8,
      }}
    />
  </svg>
);
export default Wave;
