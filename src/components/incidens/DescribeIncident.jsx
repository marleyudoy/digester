import React, { useState } from "react";
import ContentHeading from "../../Global/ContentHeading";
import Button from "../../Global/Button";
import d1 from "../../assets/images/icons/d1.svg";

function Btn({ children, icon, handleClick, fixedValue, value }) {
  const [isBg, setIsBg] = useState(0);

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex items-center justify-center gap-2 ${
          fixedValue === value ? "bg-primaryColor text-white" : "bg-p[#F4F4F5] text-secondaryColor"
        } px-4 py-4 rounded-md`}
      >
        <img src={icon} className="text-2xl"></img>
        <span>{children}</span>
      </button>
    </>
  );
}

function DescribeIncident() {
  const [value,setValue] = useState(0)
  return (
    <section>
      <ContentHeading
        headingTitle="New Incident"
        backButton={{
          state: true,
          path: "/incident/started",
        }}
        progress={true}
      >
        <Button classNm="bg-primaryColor text-white font-bold">
          Next Step
        </Button>
      </ContentHeading>
      <div className="container mt-5 md:mt-8 lg:mt-12 grid place-content-center">
        <div>
          <h2 className="text-[20px] md:text-[24px] font-bold font-oneast">
            Which of these best describes the incident?
          </h2>
        </div>
        <div className="mt-5 md:mt-8 lg:mt-12 grid grid-cols-2 md: gap-4 lg:grid-cols-4 ">
          <Btn handleClick={()=>setValue(1)} value={value} fixedValue={1} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(2)} value={value} fixedValue={2} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(3)} value={value} fixedValue={3} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(4)} value={value} fixedValue={4} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(5)} value={value} fixedValue={5} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(6)} value={value} fixedValue={6} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(7)} value={value} fixedValue={7} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(8)} value={value} fixedValue={8} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(9)} value={value} fixedValue={9} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(10)} value={value} fixedValue={10} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(11)} value={value} fixedValue={11} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(12)} value={value} fixedValue={12} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(13)} value={value} fixedValue={13} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(14)} value={value} fixedValue={14} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(15)} value={value} fixedValue={15} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(16)} value={value} fixedValue={16} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(17)} value={value} fixedValue={17} icon={d1}>Avalanche</Btn>
          <Btn handleClick={()=>setValue(18)} value={value} fixedValue={18} icon={d1}>Avalanche</Btn>
        </div>
      </div>
    </section>
  );
}

export default DescribeIncident;
