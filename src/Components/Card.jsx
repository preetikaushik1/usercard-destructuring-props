
import girlimg from '../Assets/Image/girl-img.jfif'

const Card = ({name , profession ,about}) => {
  return(
    <>
      <div className="outerbox">
       <div className="imgbox">
        <img src={girlimg} className='img' alt='girl'/>
       </div>
       <h2 >{name}</h2>
       <h2 className="h2">{profession}</h2>
       <p>{about}       </p>
       <div className="iconbox">
        <span><i className="fa fa-instagram" aria-hidden="true"></i></span>
        <span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
        <span><i className="fa fa-github" aria-hidden="true"></i></span>
       </div>
      </div>
    </>
  )
}




export default Card