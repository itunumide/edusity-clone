

const Button = ({text, onClick}) => {
  return (
    <div>
      <button className={`border-none rounded-3xl bg-white text-[#212121] py-[.6rem] w-[9rem]`}>{text}</button>
    </div>
  )
}

export default Button
