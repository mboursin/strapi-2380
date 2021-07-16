import PropTypes from "prop-types";
import Markdown from "react-markdown";

const OtherTestSection = ({ data }) => {
  return (
    <div className="prose prose-lg container py-12">
      <Markdown source={data.description} />
    </div>
  );
};

OtherTestSection.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
  }),
};

export default OtherTestSection;
