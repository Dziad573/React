const Card = ({ title, image, description }) => {
    return (
    <div className="w-20 border border-red-800">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    );
}

export default Card;