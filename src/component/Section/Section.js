import T from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: T.string.isRequired,
  children: T.node.isRequired,
};

export default Section;
