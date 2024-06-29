import Banner from "./Banner";
import BlogComponent from "./BlogComponent";
import LinkedInCarouselComponent from "./LinkedInCarouselComponent";
import LinkedInInspirationComponent from "./LinkedInInspirationComponent";
import LinkedInPostComponent from "./LinkedInPostComponent";
import MarqueeButton from "./MarqueeButton";
import Services from "./Services";
import Shidiulpost from "./Shidiulpost";
import UsersLove from "./UsersLove";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <UsersLove></UsersLove>
      <LinkedInPostComponent></LinkedInPostComponent>
      <LinkedInCarouselComponent></LinkedInCarouselComponent>
      <LinkedInInspirationComponent></LinkedInInspirationComponent>
      <Shidiulpost></Shidiulpost>
      <Services></Services>
      <MarqueeButton></MarqueeButton>
      <BlogComponent></BlogComponent>
    </div>
  );
}
