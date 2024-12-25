import React, { useState } from "react";
import ContentHeading from "../Global/ContentHeading";
import Button from "../Global/Button";
import { blogData } from "../data/data";
import BlogCard from "../Global/BlogCard";
function Dashboard() {
  const [isChat, setIsChat] = useState(false);
  return (
    <div className="">
      <ContentHeading
        headingTitle="Dashboard"
        isSearch={true}
        isSort={true}
        buttonTitle="Cyper"
      >
        <Button classNm="bg-primaryColor text-white text-semibold">
          Cyper AI
        </Button>
      </ContentHeading>
      <div className="container grid grid-cols-2 md: md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8 my-5 md:my-8 lg:my-10">
        {blogData.map((data) => (
          <BlogCard key={data.id} data={data} />
        ))}
      </div>
      <div className="container">


        <button className="w-[50px] h-[50px] bg-primaryColor fixed bottom-[3rem] text-white text-xl rounded-full right-[5rem]">
          C
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
