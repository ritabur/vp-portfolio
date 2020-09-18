import * as React from 'react';
import dayjs from 'dayjs';
import { firestore } from "../../../firebase.js"

export const CommentSection = ({ pathname }) => {
    const [comments, setComments] = React.useState([]);

    React.useEffect(() => {
        // TODO: unsubscribe
        firestore
            .collection(`comments`)
            .onSnapshot(snapshot => {
                const posts = snapshot.docs
                    .filter(doc => `/${doc.data().slug}` === pathname)
                    .map(doc => {
                        return { id: doc.id, ...doc.data() }
                    });
                setComments(posts);
            })
    }, []);

    // TODO: uncomment - WIP
    return null;

    if (comments.length === 0) return null;

    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id}>
                    {comment.name}:
                    {comment.content}:
                    <time>{dayjs(comment.time.toDate()).format('MMMM D, YYYY hh:mm')}</time>
                </div>
            ))}
        </div>
    )
};
