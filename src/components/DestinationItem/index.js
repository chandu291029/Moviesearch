import './index.css'

const DestinationItem = props => {
  const {placeDetalis} = props
  const {name, imgUrl} = placeDetalis
  return (
    <div>
      <img src={imgUrl} alt={name} className="card" />

      <p className="para">{name}</p>
    </div>
  )
}
export default DestinationItem
