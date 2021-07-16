import Markdown from "react-markdown";
import ButtonLink from "../elements/button-link";
import Image from "../elements/image";
import { getButtonAppearance } from "utils/button";

const Hero = ({ data }) => {
  return (
    <main className="container flex flex-col md:flex-row items-center justify-between py-12">
      {/* Left column for content */}
      <div className="flex-1 sm:pr-8">
        {/* Small rich text */}
        <div className="text-xl mb-6">
          <Markdown source={data.description} />
        </div>
      </div>
      {/* Right column for the image */}
      <Image
        media={data.picture}
        className="flex-shrink-0 object-contain w-full md:w-6/12 mt-6 md:mt-0"
      />
    </main>
  );
};

export default Hero;
