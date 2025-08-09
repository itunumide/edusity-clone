

const Input = ({id, type, placeholder, label}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} className="bg-[#ebecfe] p-3 text-inherit focus:outline-none" />
    </div>
  )
}

export default Input
