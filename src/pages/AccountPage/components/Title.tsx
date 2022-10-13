import { List, Row } from '../../UserPage/components/UserList';

const Title = () => {
  return (
    <List>
      <Row rows={9}>고객명</Row>
      <Row rows={9}>브로커명</Row>
      <Row rows={9}>계좌번호</Row>
      <Row rows={9}>계좌상태</Row>
      <Row rows={9}>계좌명</Row>
      <Row rows={9}>평가금액</Row>
      <Row rows={9}>입금금액</Row>
      <Row rows={9}>계좌활성화여부</Row>
      <Row rows={9}>계좌개설일</Row>
    </List>
  );
};

export default Title;
