import { COLORS } from 'helpers/colors';

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: 320,
    border: 'none',
    borderRadius: 0,
    marginBottom: 40,
    borderBottom: state.isFocused ? `1px solid ${COLORS.WHITE}` : `1px solid ${COLORS.GREY.PRIMARY}`,
    backgroundColor: COLORS.BLACK.PRIMARY,
  }),
  singleValue: (provided, state) => ({
    ...provided, 
    color: COLORS.WHITE,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 16,
  }),
  placeholder: (provided) => ({
    ...provided, 
    color: COLORS.GREY.PRIMARY,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',
    margin: 0,
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.isFocused ? 'rotate(-180deg)' : 'none',
    color: COLORS.WHITE
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    padding: '21px 16px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    backgroundColor: state.isFocused ? COLORS.BLACK.LIGHT : 'transparent',
  }),
  menu: (provided) => ({
    ...provided,
    width: 320,
    backgroundColor: COLORS.BLACK.PRIMARY,
    overflow: 'hidden',
  }),
  multiValue: (provided) => ({
    ...provided,
    color: COLORS.WHITE,
    backgroundColor: COLORS.BLACK.PRIMARY,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    '& div': {
      color: COLORS.WHITE,
    }
  })
}