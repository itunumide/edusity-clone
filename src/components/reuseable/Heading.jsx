
const Heading = ({p, h2, text="text-[1rem]"}) => {
  return (
    <div className="max-w-[25rem]">
      <p className={`text-emerald ${text} font-semibold mb-[.5rem] mt-[-.5rem] `}>{p}</p>
      <h2 className="text-charcoal font-bold text-[2.2rem] leading-tight ">{h2}</h2>
    </div>
  )
}

export default Heading
