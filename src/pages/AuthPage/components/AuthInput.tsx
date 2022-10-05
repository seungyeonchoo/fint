import useAuth from '../../../hooks/useAuth';

const AuthInput = () => {
  const { email, password, handleInputChange, handleLogin } = useAuth();

  return (
    <form>
      <label>
        email
        <input
          name="email"
          type="email"
          value={email}
          placeholder="이메일을 입력해 주세요"
          onChange={handleInputChange}
        />
      </label>
      <label>
        password
        <input
          name="password"
          type="password"
          value={password}
          placeholder="비밀번호를 입력해 주세요"
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleLogin}>로그인</button>
    </form>
  );
};

export default AuthInput;
