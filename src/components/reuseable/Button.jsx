import arrow from "../../assets/white-arrow.png";

const Button = ({ text, onClick, image, bg='bg-blue', color='text-[#212121]' }) => {
  return (
    <div>
      <button
        className={`border-none flex justify-center items-center font-inherit gap-[.5rem] rounded-3xl ${bg} ${color} py-[.7rem] px-[1.5rem]`}
      >
        {text}{" "}
        {image && (
          <div className="w-5">
            <img className="w-full" src={arrow || image} alt="Next" />
          </div>
        )}
      </button>
    </div>
  );
};

export default Button;
