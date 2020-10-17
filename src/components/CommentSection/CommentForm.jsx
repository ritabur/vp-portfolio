import * as React from 'react';
import dayjs from 'dayjs';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { firestore } from '../../../firebase.js';
import { Title, StyledTextarea, StyledInput } from './StyledCommentForm';

export const CommentForm = ({ pathname }) => {
  const [comment, setComment] = React.useState('');
  const [name, setName] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const date = dayjs();
    const formattedDate = `${date.format('MMMM D, YYYY')} | ${date.format(
      'HH:mm'
    )}`;

    firestore
      .collection('comments')
      .add({
        content: comment,
        name,
        slug: pathname,
        time: formattedDate,
      })
      .catch(error => console.log('add comment error:', error));

    setComment('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={24}>
        <label>
          <Title>Comment</Title>
          <StyledTextarea
            rows="4"
            onChange={e => setComment(e.target.value)}
            value={comment}
          />
        </label>
      </Box>
      <label>
        <Title>
          Name <span>*</span>
        </Title>
        <StyledInput onChange={e => setName(e.target.value)} value={name} required />
      </label>
      <Box mt={24}>
        <Button>Submit</Button>
      </Box>
    </form>
  );
};
