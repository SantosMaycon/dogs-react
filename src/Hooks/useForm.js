import React from 'react'

const types = {
  email: {
    message: 'Preencha um email válido',
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  }
}

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false;
    } else {
      setError(false);
      return true;
    }
  }

  function onChange({target}) {
    if(error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm
