import React from 'react';
import "../../App.css";
import Comment from './Comment';


const CommentBox = ({ items }) => {
    return (
        <div className="card-footer">
            <div class = "content-box">
            <h4>Laissez votre commentaire </h4>
            {items.map((comment, index) => (
                <Comment key={index}
                    id={comment.id}
                    content={comment.content}
                    date={comment.date}
                    />
                )
            )}
            </div>
        </div>
    );
}



export default CommentBox;




