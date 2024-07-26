type Hub = {
  panelName: string;
  username: string;
};

function Banner(props: Hub) {
  return (
    <>
      <div
        className={`w-full h-64 ${
          props.panelName === "Panel" ? "bg-primary" : "bg-rich-black"
        }  flex justify-center items-center shrink-0`}
      >
        <h1 className="font-rebond text-5xl max-sm:text-4xl text-center max-sm:mx-4 text-white font-bold leading-10 pb-7">
          Welcome to the {props.panelName} Hub
          {props.panelName === "Panel" && (
            <span className="text-[#FFEB69]">, {props.username}</span>
          )}
        </h1>
        {props.panelName === "Panel" && (
          <div
            id="profile"
            className="absolute py-24 px-0 top-16 max-md:top-20"
          >
            <div className="bg-interactive-primary h-[200px] w-[200px] max-sm:h-44 max-sm:w-44 flex font-bold justify-center items-center font-rebond rounded-full shadow-md text-5xl">
              HF
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Banner;
