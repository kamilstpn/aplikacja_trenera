import {React,useRef} from 'react';
import { Button } from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from 'store';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from 'views/Notes.styles';
import { useForm } from 'react-hook-form';
// import {Block} from 'blockchain';
import axios from 'axios'

// import { data } from 'blockchain/blockchain';
const Notes = () => {
  const nameform=useRef(null)
  const form=nameform.current
    

  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   const handleAddNote = async ({ title, content }) => {
    dispatch(addNote({ title, content }));
    var body = {
      cont: content
    }
     axios ({method: 'post', url:'http://localhost:3000/blockchainadd', headers:{"Content-Type":"application/json"} ,data:body})
    .then(res=>{console.log(res)})
  //   axios.get('http://localhost:3000/blockchain')
  // .then(res=>{console.log(res)})
  // console.log(title)

  };
  
const bloczekes = (title) => {
  axios.get('http://localhost:3000/blockchain')
  .then(res=>{console.log(res)})
  //console.log({title})

}

const reqblockchain = () => {
  axios.post('http://localhost:3000/blockchain/add')
  .then(req=>{console.log(req)})
}



  return (
    <Wrapper>
     
      <FormWrapper ref={nameform} onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField {...register('title', { required: true })} label="Data treningu" name="title" id="title" />
        <StyledFormField {...register('content', { required: true })} isTextarea label="Nazwa ćwiczeń treningowych" name="content" id="content" />
        {errors.title && <span>Wprowadź datę treningu</span>}
        {errors.content && <span>Wprowadź nazwy ćwiczeń</span>}
        <Button type="submit" onClick={bloczekes}>Dodaj</Button>
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