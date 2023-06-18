import { useDispatch, useSelector } from 'react-redux';
import { filterContact, getFilter } from 'redux/filterSlice';

import { LabelFilter, LabelWrapper, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div>
      <LabelFilter>
        <LabelWrapper>Find contacts by name</LabelWrapper>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(filterContact(e.target.value))}
          autoComplete="off"
        />
      </LabelFilter>
    </div>
  );
};

export default Filter;
