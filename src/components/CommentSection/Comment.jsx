import * as React from 'react';
import dayjs from 'dayjs';
import sanitizeHtml from 'sanitize-html';
import { Button } from 'components/Button';
import { Box } from 'components/Box';
import { CommentDivider, Name, Time, Content } from './StyledComment';
import { CommentForm } from './CommentForm';

export const Comment = ({ comment, comments, showDivider, pathname }) => {
  const [isReplyFormOpen, setReplyFormOpen] = React.useState(false);
  const childComments = comments.filter(item => item.parentId === comment.id);
  const hasChildComments = childComments.length > 0;

  const getFormattedDate = timestamp =>
    `${dayjs(timestamp.toDate()).format('MMMM D, YYYY')} | ${dayjs(
      timestamp.toDate()
    ).format('HH:mm')}`;

  const getReplyForm = () => (
    <Box ml={50} mb={30}>
      <CommentForm
        pathname={pathname}
        isReply
        parentId={comment.id}
        onSubmit={() => setReplyFormOpen(false)}
      />
    </Box>
  );

  const getCommentBody = (name, time, content) => (
    <>
      <Name
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(name),
        }}
      />
      <Time>
        <time>{getFormattedDate(time)}</time>
      </Time>
      <Content
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(content),
        }}
      />
    </>
  );

  const getChildComments = () =>
    childComments.map(item => (
      <Box ml={50} mb={30} key={item.id}>
        {getCommentBody(item.name, item.time, item.content)}
      </Box>
    ));

  return (
    <div key={comment.id}>
      {getCommentBody(comment.name, comment.time, comment.content)}
      <Box mb={30}>
        <Button
          secondary
          onClick={() => setReplyFormOpen(!isReplyFormOpen)}
          type="button"
        >
          {isReplyFormOpen ? 'Cancel' : 'Reply'}
        </Button>
      </Box>
      {isReplyFormOpen && getReplyForm()}
      {hasChildComments && getChildComments()}
      {showDivider && <CommentDivider />}
    </div>
  );
};
