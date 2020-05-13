/* eslint-disable */
import theme from '../theme';

const inputStyles = {
  "& .MuiFormLabel-root": {
    fontFamily: "Muli, Arial, sans-serif",
  },
  "& .MuiInputLabel-formControl": {
    fontSize: 14,
    top: -3,
  },
  "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
    top: 0,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.colorWhite2,
    borderRadius: 4,
  },
  "& .MuiOutlinedInput-input": {
    fontFamily: "Muli, Arial, sans-serif",
    fontSize: 14,
    padding: 16,
    color: theme.colorBlack,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.colorWhite2,
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderWidth: 2,
    borderColor: theme.colorBrand,
  },
  "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.colorWhite2,
  },
  "& .MuiInputLabel-shrink.Mui-focused": {
    color: `${theme.colorBrand} !important`,
  },
  "& .MuiInputLabel-shrink.Mui-error": {
    color: theme.colorError,
  },
  "& .Mui-error .MuiOutlinedInput-notchedOutline": {
    borderWidth: 2,
    borderColor: theme.colorError,
  },
  "& .MuiOutlinedInput-multiline": {
    padding: 0,
  },
  "& .MuiInputBase-input.Mui-disabled": {
    opacity: 0.5,
  },
  "& .iconButton:hover": {
    backgroundColor: "transparent",
  },
};

export default inputStyles;
