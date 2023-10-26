import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/actions';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import { SpeedDialIcon } from '@mui/material';
import { SpeedDial } from '@mui/material';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { Toaster, toast } from 'react-hot-toast';

export default function ContactForModal() {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [phoneNumberValid, setPhoneNumberValid] = React.useState(null);
  const handleInputChange = newValue => {
    setPhoneNumber(newValue);
    setPhoneNumberValid(matchIsValidTel(newValue));
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = {
      name,
      number,
    };

    toast.promise(
      dispatch(addContact(newContact)).unwrap(),
      {
        loading: 'Loading',
        success: data => `Contact ${data.name} was added`,
        error: err => `${err.toString()}`,
      },
      {
        style: {
          minWidth: '250px',
        },
        success: {
          duration: 5000,
        },
      }
    );
    handleClose();
    setPhoneNumber('');
    setPhoneNumberValid(false);
    form.reset();
  };

  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 100, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        onClick={handleClickOpen}
      ></SpeedDial>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add new contact</DialogTitle>
        <DialogContent>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <form onSubmit={onFormSubmit}>
              <Box style={{ display: 'flex', gap: 20 }}>
                <FormControl variant="standard">
                  <InputLabel htmlFor="input-with-icon-adornment-name">
                    Contact Name
                  </InputLabel>
                  <Input
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
                    variant="outlined"
                    sx={{ mt: 1 }}
                    size="small"
                    continents={['EU']}
                    defaultCountry="UA"
                    placeholder="Contact Number"
                    name="number"
                    id="input-with-icon-adornment-number"
                    value={phoneNumber}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Box>

              <Button
                disabled={!phoneNumberValid}
                type="submit"
                sx={{ float: 'right', mt: 2 }}
                endIcon={<SendIcon />}
              >
                Add
              </Button>
            </form>
          </Box>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  );
}