import "./Login.css"

function Login() {
  return (
    <div className="main">
      <input type="text" className="inp" placeholder="Username" />
      <input type="password" className="inp" placeholder="Password" />
      <button className="btn"> LOGIN</button>
    </div>
  );
}
export default Login;
