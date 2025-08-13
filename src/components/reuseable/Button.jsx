import whitearrow from "../../assets/white-arrow.png";
import darkarrow from "../../assets/dark-arrow.png";

const Button = ({
  text,
  onClick,
  image,
  type,
  dark,
  bg = "bg-emerald",
  color = "text-[#212121]",
}) => {
  const currentImage = dark;
  return (
    <div>
      <button onClick={onClick} type={type}
        className={`border-none flex justify-center items-center font-inherit gap-[.5rem] rounded-3xl ${bg} ${color} py-[.7rem] px-[1.5rem]`}
      >
        {text}{" "}
        {image && (
          <div className="w-5">
            <img className="w-full" src={currentImage? darkarrow:whitearrow} alt="Next" />
          </div>
        )}
      </button>
    </div>
  );
};

export default Button;
