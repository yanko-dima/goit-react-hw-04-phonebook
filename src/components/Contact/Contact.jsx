import PropTypes from 'prop-types';
import css from 'components/Contact/Contact.module.css';

const Contact = ({ name, number, deleteContact }) => (
  <>
    <p>
      {name}: {number}
    </p>
    <button className={css.contacts__btn} onClick={deleteContact}>
      Delete
    </button>
  </>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
