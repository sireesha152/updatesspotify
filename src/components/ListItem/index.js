import {Link} from 'react-router-dom'
import './index.css'

const ListItem = props => {
  const {details} = props
  const {requrl, reqname, reqid} = details

  return (
    <Link to={`/playlist/${reqid}`}>
      <li className="items-container">
        <img src={requrl} alt="featured-playlist" className="pic" />
        <p className="details">{reqname}</p>
      </li>
    </Link>
  )
}
export default ListItem
