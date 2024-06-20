import Banner from "./Banner";
import BlogComponent from "./BlogComponent";
import LinkedInCarouselComponent from "./LinkedInCarouselComponent";
import LinkedInInspirationComponent from "./LinkedInInspirationComponent";
import LinkedInPostComponent from "./LinkedInPostComponent";
import Services from "./Services";
import Shidiulpost from "./Shidiulpost";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <LinkedInPostComponent></LinkedInPostComponent>
      <LinkedInCarouselComponent></LinkedInCarouselComponent>
      <LinkedInInspirationComponent></LinkedInInspirationComponent>
      <Shidiulpost></Shidiulpost>
      <Services></Services>
      <BlogComponent></BlogComponent>
    </div>
  );
}
