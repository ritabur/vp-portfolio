import * as React from 'react';
import { firestore } from '../../../firebase.js';
import { CommentForm } from './CommentForm';

export const CommentSection = ({ pathname }) => {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    // TODO: unsubscribe
    firestore.collection(`comments`).onSnapshot(snapshot => {
      const posts = snapshot.docs
        .filter(doc => doc.data().slug === pathname)
        .map(doc => {
          return { id: doc.id, ...doc.data() };
        });
      setComments(posts);
    });
  }, [pathname]);

  const getComments = () => {
    console.log('comments', comments);
    if (comments.length === 0) return null;

    return comments.map(comment => (
      <div key={comment.id}>
        {comment.name}:{comment.content}:
        <time>{comment.time}</time>
      </div>
    ));
  };

  return (
    <>
      {getComments()}
      <CommentForm pathname={pathname} />
    </>
  );
};
