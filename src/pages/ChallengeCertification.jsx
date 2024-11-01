import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { COLORS } from '../utils/color';

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageUploadContainer = styled.div`
  width: 80%;
  height: 300px;
  border: 2px dashed ${COLORS.grayblue};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin-bottom: 20px;
  background-color: ${COLORS.lightGray};
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 24px;
  color: ${COLORS.grayblue};
  cursor: pointer;
`;

const CompleteButton = styled.button`
  background-color: ${COLORS.green};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;

const ChallengeCertification = () => {
  const { id } = useParams(); // URL에서 id를 가져옴
  const userId = process.env.REACT_APP_USER_ID; // .env 파일에서 userId 가져옴
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleCertification = () => {
    alert(`인증이 완료되었습니다. 사용자 ID: ${userId}`);
    navigate(`/challenges/${id}/completed`, { replace: true });
  };

  return (
    <Container>
      <ImageUploadContainer>
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded"
            style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover' }}
          />
        ) : (
          <UploadLabel htmlFor="imageUpload">📷 이미지 업로드</UploadLabel>
        )}
        <UploadInput
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </ImageUploadContainer>
      <CompleteButton onClick={handleCertification}>인증 완료!</CompleteButton>
    </Container>
  );
};

export default ChallengeCertification;