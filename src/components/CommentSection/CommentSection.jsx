import * as React from 'react';
import dayjs from 'dayjs';
import { Box } from 'components/Box';
import { ContentBox } from 'components/ContentBox';
import { Button } from 'components/Button';
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
    firestore
      .collection(`comments`)
      .orderBy('time', 'desc')
      .onSnapshot(snapshot => {
        const posts = snapshot.docs
          .filter(doc => doc.data().slug === pathname)
          .map(doc => {
            return { id: doc.id, ...doc.data() };
          });

        setComments(posts);
      });
  }, [pathname]);

  const getFormattedDate = timestamp =>
    `${dayjs(timestamp.toDate()).format('MMMM D, YYYY')} | ${dayjs(
      timestamp.toDate()
    ).format('HH:mm')}`;

  const getComments = () => {
    if (comments.length === 0) return null;

    return (
      <>
        {comments.map((comment, index) => (
          <div key={comment.id}>
            <Name>{comment.name}</Name>
            <Time>
              <time>{getFormattedDate(comment.time)}</time>
            </Time>
            <Comment>{comment.content}</Comment>
            <Box mb={30}>
              <Button secondary>Reply</Button>
            </Box>
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
