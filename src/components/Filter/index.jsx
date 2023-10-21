import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';

export default function ContactFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input type="text" name="filter" value={filter} onChange={onFilterChange} />
  );
}