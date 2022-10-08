import { List, Row } from './UserList';

const Title = () => {
  return (
    <List>
      <Row rows={10}>고객명</Row>
      <Row rows={10}>이메일</Row>
      <Row rows={10}>보유계좌</Row>
      <Row rows={10}>성별</Row>
      <Row rows={10}>생년월일</Row>
      <Row rows={10}>휴대폰번호</Row>
      <Row rows={10}>최근접속</Row>
      <Row rows={10}>가입일</Row>
      <Row rows={10}>마케팅동의</Row>
      <Row rows={10}>활성화여부</Row>
    </List>
  );
};

export default Title;
