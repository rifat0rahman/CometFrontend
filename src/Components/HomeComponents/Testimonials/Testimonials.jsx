import JoinLeague from "../../ShaireComponents/JoinLeague";
import SubBanner from "../../ShaireComponents/SubBanner";

export default function Testimonials() {
  return (
    <div className="w-full">
      <SubBanner
        name={`Wall of Love`}
        title={`Hear directly from some of the best marketers, founders and professionals`}
      />

      <JoinLeague></JoinLeague>
    </div>
  );
}
