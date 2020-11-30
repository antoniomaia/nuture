import { InputContainer, Unit, UnitContainer } from '../primitives';

const FormControl = ({
  field: { id, type, label, unit },
  register,
  dispatch,
}) => {
  switch (type) {
    case 'number': {
      return (
        <InputContainer>
          {label && <label htmlFor="name">{label}</label>}
          <UnitContainer>
            <input
              type="number"
              step=".01"
              id={id}
              name={id}
              min="0"
              max={unit === '%' ? '100' : ''}
              style={{ width: unit === '%' && '70px' }}
              onKeyDown={evt => evt.key === 'e' && evt.preventDefault()}
              ref={register({
                //required: 'Required',
                pattern: {
                  //value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid number',
                },
              })}
            />
            {unit && <Unit>{unit}</Unit>}
          </UnitContainer>
        </InputContainer>
      );
    }
    default: {
      return '';
    }
  }
};

export default FormControl;
