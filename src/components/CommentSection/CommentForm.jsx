import * as React from 'react';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { firestore } from '../../../firebase';
import { Title, StyledTextarea, StyledInput } from './StyledCommentForm';

export const CommentForm = ({
  pathname,
  isReply = false,
  parentId,
  onSubmit,
}) => {
  const [comment, setComment] = React.useState('');
  const [name, setName] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();

    firestore
      .collection('comments')
      .add({
        content: comment,
        name,
        slug: pathname,
        time: new Date(),
        parentId: parentId || null,
      })
      .catch(error => console.log('add comment error:', error)); // eslint-disable-line no-console

    if (onSubmit) {
      onSubmit();
    }
    setComment('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={24}>
        <label htmlFor="text">
          <Title>Comment</Title>
          <StyledTextarea
            id="text"
            rows="4"
            onChange={e => setComment(e.target.value)}
            value={comment}
          />
        </label>
      </Box>
      <label htmlFor="name">
        <Title>
          Name <span>*</span>
        </Title>
        <StyledInput
          id="name"
          onChange={e => setName(e.target.value)}
          value={name}
          required
        />
      </label>
      <Box mt={24}>
        <Button type="submit">{isReply ? 'Submit reply' : 'Submit'}</Button>
      </Box>
    </form>
  );
};
