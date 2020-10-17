import * as React from 'react';
import dayjs from 'dayjs';
import { firestore } from '../../../firebase.js';

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
      <label>
        Comment
        <textarea
          rows="4"
          onChange={e => setComment(e.target.value)}
          value={comment}
        />
      </label>
      <label>
        Name <span>*</span>
        <input onChange={e => setName(e.target.value)} value={name} required />
      </label>
      <button type="submit">submit</button>
    </form>
  );
};
