import React, { useState } from 'react'; // Import useState from 'react' explicitly
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton'; // Import IconButton from '@mui/material'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { MuiTelInput } from 'mui-tel-input'; // Import MuiTelInput separately
import { useDispatch } from 'react-redux';
import { changeContact } from 'redux/contacts/actions';
import { toast } from 'react-hot-toast';

export default function ContactEditModal({ contact }) {
  const dispatch = useDispatch();

  const [contactName, setContactName] = useState(contact.name); // Use useState directly
  const onNameChange = newValue => {
    setContactName(newValue);
  };

  const [phoneNumber, setPhoneNumber] = useState(contact.number);

  const onInputChange = newValue => {
    setPhoneNumber(newValue);
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contactData = {
      user: {
        name,
        number,
      },
      id: contact.id,
    };

    toast.promise(
      dispatch(changeContact(contactData)).unwrap(),
      {
        loading: 'Loading',
        success: data => `Contact ${data.name} was changed`,
        error: err => ` ${err.toString()}`,
      },
      {
        style: {
          minWidth: '250px',
        },
        success: {
          duration: 5000,
          icon: '✍️',
        },
      }
    );
    handleClose();
    form.reset();
  };

  return (
    <>
      <IconButton
        edge="end"
        aria-label="change"
        sx={{ mr: 2 }}
        onClick={handleClickOpen}
      >
        <EditIcon color="success" />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Change contact "{contact.name}"
        </DialogTitle>
        <DialogContent>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <form onSubmit={onFormSubmit}>
              <Box style={{ display: 'flex', gap: 20 }}>
                <FormControl variant="standard">
                  <InputLabel htmlFor="input-with-icon-adornment-name">
                    Contact Name
                  </InputLabel>
                  <Input
                    value={contactName}
                    onChange={e => onNameChange(e.target.value)}
                    autoComplete="off"
                    required
                    size="normal"
                    name="name"
                    id="input-with-icon-adornment-name"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <FormControl variant="standard">
                  <MuiTelInput
                    autoFocus
                    value={phoneNumber}
                    onChange={onInputChange}
                    variant="outlined"
                    sx={{ mt: 1 }}
                    size="small"
                    continents={['EU']}
                    defaultCountry="UA"
                    placeholder="Contact Number"
                    name="number"
                    id="input-with-icon-adornment-number"
                  />
                </FormControl>
              </Box>

              <DialogActions sx={{ mt: 3, mb: -3, mr: -3 }}>
                <Button onClick={handleClose} autoFocus color="error">
                  Close
                </Button>

                <Button type="submit" color="success">
                  Change
                </Button>
              </DialogActions>
            </form>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}