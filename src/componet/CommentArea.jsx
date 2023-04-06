import { Col } from "react-bootstrap"
import SingleComment from "./SingleComment"
import NewComment from "./NewComment"



const CommentArea = (props) => {

    return (
        <Col md={4} className=" my-5">
            {
                props.comments.map((com) => <SingleComment key={com._id} id={com._id} comment={com.comment} rate={com.rate} arraylength={props.arraylength} setArrayLength={props.setArrayLength} />)
            }

                <NewComment arraylength={props.arraylength} setArrayLength={props.setArrayLength}  id={props.elementId} />
            
        </Col>
    )
}

export default CommentArea