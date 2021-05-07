import loadable from "@loadable/component";
import LandingPagePlaceholder from "./LandingPagePlaceholder";

const LoadableComponent = loadable(
  () => import("./LandingPage"),
  {
    fallback: <LandingPagePlaceholder></LandingPagePlaceholder>,
  },
  1000
);

function LoadableLandingPage() {
  return <LoadableComponent></LoadableComponent>;
}

export default LoadableLandingPage;
