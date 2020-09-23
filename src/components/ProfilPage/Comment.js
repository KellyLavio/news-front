import React from 'react';

const Comment = ({ 
    id,
    content,
    date
}) => {
    return(
        <div>
            <p>{id}</p>
            <p>{content}</p>
            <p>{date}</p>
        </div>
    )
}

export default Comment;