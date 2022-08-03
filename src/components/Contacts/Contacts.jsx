import PropTypes from 'prop-types';
import css from 'components/Contacts/Contacts.module.css';
import Contact from 'components/Contact/Contact';

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul className={css.contacts__list}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.contacts__item} key={id}>
        <Contact
          name={name}
          number={number}
          deleteContact={() => onDeleteContact(id)}
        />
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
