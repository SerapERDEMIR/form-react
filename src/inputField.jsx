const InputField = ({placeholderTitle, labelTitle, onChange}) => {
    return (
      <div>
        <label htmlFor="name">{labelTitle}</label>
        <input onChange={onChange} id="name" type="text" placeholder={placeholderTitle} />
      </div>
    );
  };
  
  export default InputField;