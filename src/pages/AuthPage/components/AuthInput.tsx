import useAuth from '../../../hooks/useAuth';

const AuthInput = () => {
  const { email, password, handleAuthInputChange, handleLogin } = useAuth();

  return (
    <form>
      <label>
        email
        <input
          name="email"
          type="email"
          value={email}
          placeholder="이메일을 입력해 주세요"
          onChange={handleAuthInputChange}
        />
      </label>
      <label>
        password
        <input
          name="password"
          type="password"
          value={password}
          placeholder="비밀번호를 입력해 주세요"
          onChange={handleAuthInputChange}
        />
      </label>
      <button onClick={handleLogin}>로그인</button>
    </form>
  );
};

export default AuthInput;
