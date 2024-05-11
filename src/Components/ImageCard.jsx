

const ImageCard = ({image}) => {
    const {  username, email,feedback, image:photo } = image;
    console.log(photo);
    return (
        <div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="relative">
    <img className="w-full h-auto" src={photo} alt="User's Image"/>
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex flex-col justify-center items-center">
      <h3 className="text-white text-lg font-semibold">{username}</h3>
      <p className="text-white text-sm p-2">{feedback}</p>
    </div>
  </div>
</div> 

        </div>
    );
};

export default ImageCard;