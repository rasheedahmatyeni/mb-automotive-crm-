import "./App.css";

function App() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="brand">
          <div className="brand-mark">MB</div>
          <h1>Automotive CRM</h1>
          <p>Customer & Operations Management Platform</p>
        </div>

        <div className="login-form">
          <h2>Welcome back</h2>
          <p className="login-subtitle">
            Sign in to access your CRM dashboard.
          </p>

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
          />

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <button className="forgot-password">
              Forgot password?
            </button>
          </div>

          <button className="login-button">
            Sign in
          </button>
        </div>

        <div className="login-footer">
          <p>Independent portfolio concept project</p>
        </div>
      </div>
    </div>
  );
}

export default App;