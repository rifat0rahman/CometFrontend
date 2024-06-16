import Banner from "./Banner";
import LinkedInCarouselComponent from "./LinkedInCarouselComponent";
import LinkedInInspirationComponent from "./LinkedInInspirationComponent";
import LinkedInPostComponent from "./LinkedInPostComponent";
import Shidiulpost from "./Shidiulpost";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <LinkedInPostComponent></LinkedInPostComponent>
      <LinkedInCarouselComponent></LinkedInCarouselComponent>
      <LinkedInInspirationComponent></LinkedInInspirationComponent>
      <Shidiulpost></Shidiulpost>
    </div>
  );
}
