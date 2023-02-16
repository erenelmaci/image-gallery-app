import "../styles/style.css"

const Picture = ({ photographer, src }) => {
  return (
      <div className="picture">
        <div className="imageContainer">
          <img className="pictures" src={src.large} alt={photographer} />
          <h5>{photographer}</h5>
        </div>
        <div className="info">
          <p>{photographer}</p>
        </div>
      </div>
  )
}

export default Picture
