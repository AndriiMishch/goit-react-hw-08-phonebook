import * as React from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';
import { selectFiltersSearch } from 'redux/filtres/selectors';
import { useSelector } from 'react-redux';
import { changeFilter } from 'redux/filtres/slice';
import { useDispatch } from 'react-redux';

export default function ContactSearch() {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectFiltersSearch);

  const onSearchChange = newValue => {
    dispatch(changeFilter(newValue));
  };

  return (
    <Box
      component="div"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        justifyContent: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-basic"
        label="Search Contacts"
        variant="filled"
        value={searchValue}
        onChange={e => onSearchChange(e.target.value)}
      />
    </Box>
  );
}