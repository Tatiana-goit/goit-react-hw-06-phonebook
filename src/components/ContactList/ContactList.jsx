import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/Phonebook/phone-actions';
import s from './ContactList.module.css';

export default function ContactList() {
  const getVisibleContacts = state => state.contacts;
  // const normalizeFilter = filter.toLowerCase();
  // return contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizeFilter),
  // );

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li className={s.item} key={id}>
          <div className={s.info}>
            <p className={s.name}> {name}</p>
            <p className={s.number}> {number}</p>
          </div>

          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

// const mapStateToProps = state => {
//     return {
//         contacts: state.contacts,
//     };
// };

// const mapDispatchToProps = dispatch => ({
//   onAddNote: () => null
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
