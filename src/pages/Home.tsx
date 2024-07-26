import PanelCard from "../components/PanelCard";
import { hubs, panels } from "../Dto/panels.dto";
import help from "../assets/icons/help-circle.svg";
import Banner from "../components/Banner";

function Home() {
  return (
    <section className="bg-principal h-screen max-xl:h-auto">
      <Banner {...hubs[0]} />
      <div className="pt-32 max-md:pt-32">
        <p className="text-4xl max-sm:text-2xl font-bold font-rebond tracking-tighter text-center">
          Select the Panel you want to reach
        </p>
        <div
          id="panels"
          className=" w-3/4 m-auto flex justify-center flex-wrap gap-4 mt-10 shrink-0"
        >
          {panels.map((panel) => (
            <PanelCard
              key={panel.title}
              title={panel.title}
              description={panel.description}
              icon={panel.icon}
            />
          ))}
        </div>
        <div className="w-16 h-16 bg-primary text-white flex rounded-full justify-center items-center gap-3 absolute right-0 mr-10 -mt-4 cursor-pointer">
          <img src={help} height="36" width="36" alt="help" />
        </div>
      </div>
    </section>
  );
}

export default Home;
