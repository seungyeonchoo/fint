const AuthInput = () => {
  return (
    <form>
      <label>
        email
        <input type="email" placeholder="이메일을 입력해 주세요" />
      </label>
      <label>
        password
        <input type="password" placeholder="비밀번호를 입력해 주세요" />
      </label>
      <button>로그인</button>
    </form>
  );
};

export default AuthInput;
