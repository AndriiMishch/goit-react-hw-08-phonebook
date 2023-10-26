import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/actions';
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactEditModal from 'components/ContactEditModal';
import { toast } from 'react-hot-toast';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}`,
  };
}

export default function ContactListItem({ contact }) {
  const dispatch = useDispatch();

  const handleContactDelete = () => {
    toast.promise(
      dispatch(deleteContact(contact.id)).unwrap(),
      {
        loading: 'Loading',
        success: data => `Contact ${data.name} was deleted`,
        error: err => `${err.toString()}`,
      },
      {
        style: {
          minWidth: '250px',
        },
        success: {
          duration: 5000,
          icon: '🔥',
        },
      }
    );
  };

  return (
    <ListItem
      secondaryAction={
        <>
          <ContactEditModal contact={contact} />

          <IconButton
            edge="end"
            aria-label="delete"
            onClick={handleContactDelete}
          >
            <DeleteIcon color="error" />
          </IconButton>
        </>
      }
    >
      <ListItemAvatar>
        <Avatar {...stringAvatar(contact.name)}></Avatar>
      </ListItemAvatar>
      <ListItemText primary={contact.name} secondary={contact.number} />
    </ListItem>
  );
}