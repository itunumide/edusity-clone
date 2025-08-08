

const ImageCard = ({image}) => {
  return (
    <div>
      <div className="w-full">
        <img src={image} alt={image} className="w-full rounded-xl " />
      </div>
    </div>
  );
};

export default ImageCard;
