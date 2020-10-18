import * as React from 'react';
import styled from 'styled-components';
import { Box } from 'components/Box';
import { ContentBox } from 'components/ContentBox';
import { firestore } from '../../../firebase.js';
import { CommentForm } from './CommentForm';
import { Comment } from './Comment';

export const SectionDivider = styled(Box)`
  height: 1px;
  background-color: ${props => props.theme.colors.lightDivider};
`;

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

  const getComments = () => {
    const commentsWithNoReplies = comments.filter(comment => !comment.parentId);

    return (
      <>
        {commentsWithNoReplies.map((comment, index) => (
          <Comment
            comment={comment}
            comments={comments}
            showDivider={index !== commentsWithNoReplies.length - 1}
            key={comment.id}
            pathname={pathname}
          />
        ))}
        <SectionDivider mb={30} />
      </>
    );
  };

  return (
    <Box mt={[20, 35, 45, 50]}>
      <ContentBox>
        {comments.length > 0 && getComments()}
        <CommentForm pathname={pathname} />
      </ContentBox>
    </Box>
  );
};
