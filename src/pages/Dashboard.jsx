import React from "react";
import ContentHeading from "../Global/ContentHeading";
import Button from "../Global/Button";

function Dashboard() {
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
    </div>
  );
}

export default Dashboard;
