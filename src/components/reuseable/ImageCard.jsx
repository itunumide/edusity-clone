const ImageCard = ({ image1, image2, text, height, position }) => {
  return (
    <div className={`w-full ${position} group`}>
      <img src={image1} alt={image1} className={`${height}w-full rounded-xl ${height}`} />
      {image2 && (
        <div
          className="flex flex-col items-center justify-center gap-4 
                   absolute inset-0 rounded-xl bg-lightBlue 
                   opacity-0 translate-y-8 
                   transition-all duration-700 ease-out 
                   group-hover:opacity-100 group-hover:translate-y-0"
        >
          <img src={image2} alt={image2} className="w-16" />
          <span className="text-white">{text}</span>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
