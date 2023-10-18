import './MyCard.css';

function Star({filled}){
    return (
        <span className={`star ${filled ? 'filled' : ''}`}>&#9733;</span>
        );
}

function MyCard({ name, imgSrc, description, stars }) {
    return (
      <div>
        <figure className='figure'>
          <img src={imgSrc} alt={name} />
        </figure>
        <div>
          <h1>{name}</h1>
          <div className="stars">
            {Array(5).fill().map((_, index) => (
              <Star key={index} filled={index < stars} />
            ))}
          </div>
          <h2></h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  

export default MyCard;
