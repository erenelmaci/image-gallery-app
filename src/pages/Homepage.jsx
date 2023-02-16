import Picture from "../components/Picture"
import data from "../helper/data"

const Homepage = () => {
  return (
    <div className="App">
      <div>
          <h1>Image Gallery</h1>
        <div className="pictures">
          {data.map(({ photographer, src }, index) => (
            <Picture photographer={photographer} src={src} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Homepage
