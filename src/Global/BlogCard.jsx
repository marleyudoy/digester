import React from "react";

function BlogCard({data}) {
  return (
    <div>
      <div>
        <img src={data.image} alt="" />
      </div>
      <div className="py-2">
        <h2 className="text-[16px] font-bold">{data.title}</h2>
        <p className="text-[14px] text-secondaryColor py-2">
          {data.description}
        </p>
        <strong>{data.price}</strong>
      </div>
    </div>
  );
}

export default BlogCard;
