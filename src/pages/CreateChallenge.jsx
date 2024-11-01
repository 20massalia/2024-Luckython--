import React, { useState } from 'react';
import styled from 'styled-components';
import axios from '../services/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../utils/color';

const Container = styled.div`
  padding: 20px;
  background-color: ${COLORS.gray};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: ${COLORS.black};
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: ${COLORS.lightGray};
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: none;
  border-radius: 15px;
  background-color: white;
  font-size: 16px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: none;
  border-radius: 15px;
  background-color: white;
  font-size: 16px;
  resize: none;
  box-sizing: border-box;
  height: 80px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

const TagButton = styled.button`
  background-color: ${(props) => (props.selected ? COLORS.mint : COLORS.lightGray)};
  color: ${COLORS.black};
  border: none;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  cursor: pointer;
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0 5px;
  color: ${COLORS.black};
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: ${COLORS.black};
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
`;

const CreateChallenge = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [prize, setPrize] = useState('');

  const tags = ["#전체", "#운동", "#취미", "#생활", "#케어"];

  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const handleSubmit = async () => {
    if (!title || !content || !startDate || !endDate || !prize) {
      alert("모든 필드를 입력해 주세요.");
      return;
    }

    try {
      await axios.post('/api/challenge', {
        title,
        content,
        hashtag: selectedTags.join(", "),
        startDate,
        endDate,
        prize: parseInt(prize, 10),
      });
      alert("챌린지가 성공적으로 생성되었습니다!");
      navigate('/mychallenges');
    } catch (error) {
      console.error("Failed to create challenge:", error);
      alert("챌린지 생성에 실패했습니다.");
    }
  };

  return (
    <Container>
      <Header>할래? 말래?</Header>
      <FormWrapper>
        <Label>챌린지 제목</Label>
        <Input
          placeholder="챌린지 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <Label>내용</Label>
        <TextArea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        
        <Label>해시태그</Label>
        <TagContainer>
          {tags.map((tag) => (
            <TagButton
              key={tag}
              selected={selectedTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </TagButton>
          ))}
        </TagContainer>
        
        <Label>시작 날짜</Label>
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        
        <Label>마감 날짜</Label>
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        
        <Label>보상</Label>
        <Input
          type="number"
          placeholder="보상"
          value={prize}
          onChange={(e) => setPrize(e.target.value)}
        />
        
        <SubmitButton onClick={handleSubmit}>생성하기</SubmitButton>
      </FormWrapper>
    </Container>
  );
};

export default CreateChallenge;