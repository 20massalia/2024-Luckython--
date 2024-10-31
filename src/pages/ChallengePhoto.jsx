import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../utils/color';
import Button from '../components/Button';
import ChallengeHeader from '../components/ChallengeHeader';
// import { post_challenge_image } from '../services/challenge';

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  min-height: 100vh;
`;

const Box = styled.div`
  padding: 20px;
  border-radius: 16px;
  background-color: #fff;
`

const FileInput = styled.input`
  font-size: 20px;
  margin-bottom: 500px;
`;

const ChallengePhoto = () => {
  const { id: chId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState(location.state);
  const [imageFile, setImageFile] = useState(null);
  const userId = process.env.REACT_APP_USER_ID;

  useEffect(() => {
    if (!challenge) {
      const storedChallenge = localStorage.getItem(`challenge-${chId}`);
      if (storedChallenge) {
        setChallenge(JSON.parse(storedChallenge));
      }
    }
  }, [chId, challenge]);

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImageFile(file);
      alert('업로드 완료');
    } else {
      alert('파일을 선택하지 않았습니다.');
    }
  };

  const handleVerification = async () => {
    if (!imageFile) {
      alert('이미지를 선택해주세요.');
      return;
    }

    try {
      // await post_challenge_image(chId, userId, '');
      alert('관리자의 확인 후 인증이 완료됩니다.');
      navigate(`/challenges/${chId}`);
    } catch (error) {
      alert('이미지 인증 중 오류가 발생했습니다.');
    }
  };

  if (!challenge) {
    return <Container>해당 챌린지의 정보를 찾을 수 없습니다.</Container>;
  }

  return (
    <>
      <ChallengeHeader title={challenge.title} />
      <Container>
        <Box>
          <FileInput type="file" onChange={handleImageUpload} />
          <Button text="인증 완료!" onClick={handleVerification} />
        </Box>
      </Container>
    </>
  );
};

export default ChallengePhoto;
