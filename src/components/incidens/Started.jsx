import React from "react";

function Started() {
  return (
    <section>
      <div className="container py-10">
        <div>
          <h1 className="text-[32px] font-oneast font-bold text-center">
            Let’s get started
          </h1>
          <p className="text-center max-w-[500px] mx-auto py-3 text-[16px] font-normal text-secondaryColor">
            Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
            general sac mascho werhoLorem ipsum dolar sit gene
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center mt-5">
            {/* <!-- First Circle --> */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primaryColor rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="w-[100px] md:w-[200px] lg:w-[300px] h-px bg-gray-300"></div>
            </div>

            {/* <!-- Second Circle --> */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primaryColor rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="w-[100px] md:w-[200px] lg:w-[300px] h-px bg-gray-300"></div>
            </div>

            {/* <!-- Third Circle --> */}
            <div className="w-8 h-8 bg-primaryColor rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Started;
