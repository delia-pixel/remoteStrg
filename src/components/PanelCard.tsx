import arrow from "../assets/icons/arrow-narrow-right.svg";
import "./panelCard.css";

type Panel = {
  icon: string;
  title: string;
  description: string;
};

const PanelCard: React.FC<Panel> = (props) => {
  return (
    <div className="w-[365px] h-32 rounded-2xl border border-solid bg-[#FAFAFB] border-neutral flex gap-3 px-5 py-4 card cursor-pointer">
      <div className="h-16 w-16 bg-interactive-primary icon flex justify-center items-centergap-2 rounded-xl">
        <img src={props.icon} alt="" height="40" width="40" />
      </div>

      <div className="flex justify-between items-stretch">
        <div className="w-52">
          <p className="text-[16px] font-rebond font-bold">{props.title}</p>
          <p className="text-[14px] font-thin">{props.description}</p>
        </div>
      </div>
      <div className="w-6 h-6 rounded-full flex items-center justify-center gap-1 arrow">
        <img src={arrow} alt="arrow narrow right" height="20" width="20" />
      </div>
    </div>
  );
};

export default PanelCard;
