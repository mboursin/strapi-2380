import PropTypes from "prop-types";
import Markdown from "react-markdown";

const TestSection = ({ data }) => {
  return (
    <div className="prose prose-lg container py-12">
      <Markdown source={data.content} />
    </div>
  );
};

TestSection.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
  }),
};

export default TestSection;
