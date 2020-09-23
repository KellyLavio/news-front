import React from 'react';

const Comment = ({ 
    id,
    content,
    date
}) => {
    return(
        <div>
            <p className="text-muted">{date}</p>
            <p>{content}</p>
        </div>
    )
}

export default Comment;