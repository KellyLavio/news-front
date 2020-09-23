import React from 'react';
import "../../App.css";
import Comment from './Comment';


const CommentBox = ({ items }) => {
    return (
        <div className="card w-75 mt-0 mb-2">
            <div className="card-body">
                <h6 className="card-title">Commentaires</h6>
                <p className="card-text">
                    {items.map((comment, index) => (
                        <Comment key={index}
                            id={comment.id}
                            content={comment.content}
                            date={comment.date}
                        />
                    )
                    )}
                </p>
            </div>


        </div>
    );
}



export default CommentBox;




