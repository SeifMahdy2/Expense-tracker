import './Home.css'
import{ Link } from 'react-router-dom';

function Home() {
  return (
    <body className='Home'>
    <div className="Home">
        <div className="navbar">
          <h1>FlexTracker</h1>
          <div className="navbar-right">
            <Link to="/Login_Signup" type="submit">
              <button>Login or Signup</button>
            </Link>
          </div>
        </div>
      <main>
        

        {/* New promotional messages */}
        <p className="Head">Welcome to FlexTracker!</p>
        <p className="tagline">💸Follow all your transactions here and stay on top of your finances💸</p>


        {/* Existing feature blocks */}
        <div className="feature-section">
          <div className="feature">
            <h3>Easy to Use</h3>
            <p>Effortlessly track your expenses with our user-friendly interface.</p>
          </div>
          <div className="feature">
            <h3>Insightful Reports</h3>
            <p>Get detailed insights into your spending habits with comprehensive reports.</p>
          </div>
          <div className="feature">
            <h3>Secure and Private</h3>
            <p>Your financial data is kept secure and private with our advanced encryption.</p>
          </div>
        </div>
      </main>
    </div>
    </body>
  );
}
export default Home;