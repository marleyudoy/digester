import React from "react";
import SearchICon from "../assets/images/icons/searchIcon.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function ContentHeading({
  headingTitle,
  isSearch,
  isSort,
  children,
  backButton,
  progress
}) {
  const navigate = useNavigate();
  return (
    <section className="bg-[#E4E4E780] py-2">
      <div className="container flex justify-between items-center">
        <div>
          <small className="text-xs font-oneast text-secondaryColor">Welcome back</small>
          <h3 className="text-[20px] md:text-[26px] font-bold">
            {headingTitle}
          </h3>
        </div>
          {
            progress && (
              <div className="flex rounded-full overflow-hidden">
                <div className="w-[60px] md:w-[100px] lg:w-[120px] h-[4px] bg-primaryColor"></div>
                <div className="w-[60px] md:w-[100px] lg:w-[120px] h-[4px] bg-secondaryColor"></div>
                <div className="w-[60px] md:w-[100px] lg:w-[120px] h-[4px] bg-secondaryColor"></div>
              </div>
            )
          }
        <div className="flex items-center gap-3">
          {isSearch && (
            <div className="flex items-center gap-3 bg-white px-2 py-2 rounded-lg justify-center">
              <img src={SearchICon} alt="" />
              <input
                className="bg-transparent border-none outline-none"
                type="search"
                placeholder="search incident.."
              />
            </div>
          )}
          {isSort && (
            <div className="text-secondaryColor bg-white px-2 py-2 rounded-lg">
              <span>Sort By: Date modified</span>
            </div>
          )}
          {backButton?.state && (
            <Button classNm="border font-bold border-secondaryColor/50 bg-white" handleClick={() => navigate(backButton?.path)}>Back</Button>
          )}
          {/* children means onlyButton */}
          {children}
        </div>
      </div>
    </section>
  );
}

export default ContentHeading;
