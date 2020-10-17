import * as React from 'react';
import { Box } from 'components/Box';
import { ContentBox } from 'components/ContentBox';
import { firestore } from '../../../firebase.js';
import { CommentForm } from './CommentForm';
import {
  SectionDivider,
  Name,
  Time,
  Comment,
  CommentDivider,
} from './StyledCommentSection';

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

      console.log('posts', posts);

      setComments(posts);
    });
  }, [pathname]);

  const getComments = () => {
    if (comments.length === 0) return null;

    return (
      <>
        {comments.map((comment, index) => (
          <div key={comment.id}>
            <Name>{comment.name}</Name>
            <Time>
              <time>{comment.time}</time>
            </Time>
            <Comment>{comment.content}</Comment>
            {index !== comments.length - 1 && <CommentDivider />}
          </div>
        ))}
        <SectionDivider mb={30} />
      </>
    );
  };

  return (
    <Box mt={[20, 35, 45, 50]}>
      <ContentBox>
        {getComments()}
        <CommentForm pathname={pathname} />
      </ContentBox>
    </Box>
  );
};
