import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { useStudents } from 'hooks/useStudents';
import { GroupWrapper, TitleWrapper, Wrapper } from 'views/Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';
import useModal from 'components/organisms/Modal/useModal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';
import axios from 'axios'
import { data } from 'blockchain/blockchain';
const Dashboard = () => {
  const instans = axios.create()
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const { getGroups, getStudentById, GetBlockChain } = useStudents();
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  
  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
      
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    // const bc=await GetBlockChain(id)
   instans.get('http://localhost:3000/blockchain',data)
     console.log(data)
    setCurrentStudent(student);
    handleOpenModal();
  };
  
  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0].id}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Zespół {id}</Title>
        <nav>
          {groups.map(({ id }) => (
            <Link key={id} to={`/group/${id}`}>
              {id}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <StudentDetails student={currentStudent} />
        </Modal>
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;