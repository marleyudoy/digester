import React from "react";
import ContentHeading from "../../Global/ContentHeading";
import Button from "../../Global/Button";
import { useNavigate } from "react-router-dom";

function FinishIncident() {
  const navigate = useNavigate();
  return (
    <section>
      <ContentHeading
        headingTitle="New Incident"
        backButton={{
          state: true,
          path: "/incident/title",
        }}
        progress={true}
      >
        <Button
          handleClick={() => navigate("/incident/finish")}
          classNm="bg-primaryColor text-white font-bold"
        >
          finish
        </Button>
      </ContentHeading>
    </section>
  );
}

export default FinishIncident;
