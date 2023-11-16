// import logo from '../godofwar.png';
import { format} from "date-fns";
import { Link } from "react-router-dom";
// https://www.npmjs.com/package/date-fns
export default function Post({_id,title,summary,content,coverimage,createdAt,author}){
  // console.log(coverimage);
    return (
        <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={'http://localhost:4000/'+coverimage} alt="post"/>
          </Link>
       
        </div>
        <div className="content">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
          </Link>
          <p className="info">
            <a className="author">{author.username}</a>
            <time>{format(new Date (createdAt),'MMM d,yyyy HH:mm')}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>

      </div>
    );
}