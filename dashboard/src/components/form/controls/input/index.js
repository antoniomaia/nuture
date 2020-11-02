import TextField from '@material-ui/core/TextField';

const Input = ({
  name,
  label,
  value,
  error = null,
  onChange,
  type = 'text',
}) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default Input;
