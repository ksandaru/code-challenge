import React ,{useEffect,useState} from 'react';
import CommentView from './CommentView';
import axios from 'axios';
const getCommentsUrl = process.env.API_URL + "/comments";

const CommentList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getComments = async () => {
          const res = await axios.get('http://localhost:5001/comments');
          setData(res.data);
          console.log(res.data);
        };
        getComments();
      }, []);

    return (
        <div>
            <h4>Comment List</h4>
            {data.map((comment) => (
              <CommentView key={comment.id}  
              creator={comment.creator}
              body={comment.body}
              upvotes={comment.upvotes}
              userprofile={comment.userprofile}
              time={comment.time}/>
            
            ))}
        </div>
    );
}

export default CommentList;
