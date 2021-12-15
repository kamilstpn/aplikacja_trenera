import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from 'store';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from 'views/Notes.styles';
import { useForm } from 'react-hook-form';

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddNote = ({ title, content }) => {
    dispatch(addNote({ title, content }));
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField {...register('title', { required: true })} label="Data treningu" name="title" id="title" />
        <StyledFormField {...register('content', { required: true })} isTextarea label="Nazwa ćwiczeń treningowych" name="content" id="content" />
        {errors.title && <span>Wprowadź datę treningu</span>}
        {errors.content && <span>Wprowadź nazwy ćwiczeń</span>}
        <Button type="submit">Dodaj</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => <Note id={id} key={id} title={title} content={content} />)
        ) : (
          <p>Stwórz swój pierwszy konspekt</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;