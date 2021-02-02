import React,{useState, useEffect} from 'react';
import {axiosInstance} from "../../Axios";
import {useParams,useHistory} from "react-router-dom";
import {Link} from 'react-router-dom';
import {Card, CardBody, CardTitle, CardText, CardSubtitle} from 'reactstrap';
import "./Post.css";
import Spinner from '../Spinner/Spinner';

const Post = () => {

    const {id} = useParams();
    const history= useHistory();

    const [posts, setPost] = useState([]);

    const [isLoading, setLoading]= useState(false);
 
    const getUserPost= async()=>{
        try {
            const fetchedPosts= await axiosInstance.get(`/posts`);
            setPost(fetchedPosts.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setLoading(true);
        getUserPost();
    }, []);

    const backRouteHandler=()=>{
        history.goBack();
    }

    const homeRouteHandler=()=>{
        history.push("/");
    }

    let singleUserPosts=[];
    singleUserPosts= posts.filter(post=>{
        return id==post.userId;
    });

    const postsList=( 
        isLoading
        ? <Spinner/>
        :
        singleUserPosts.map(post=>{
            return(
            <React.Fragment key={post.id}>
            <div className="Card">
            <Card>
            <CardBody>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{post.userId}</CardSubtitle>
                <CardTitle tag="h5">{post.title}</CardTitle>
                <CardText>{post.body}</CardText>
            </CardBody>
            </Card>
            </div>
        </React.Fragment>
            );
        })
    );

    return (
       <React.Fragment>
           {postsList}
           <div className="btnGroup">
                <Link onClick={backRouteHandler}>Back</Link>
                <Link onClick={homeRouteHandler}>Home</Link>
            </div>
       </React.Fragment>
        
    );
}

export default Post;
