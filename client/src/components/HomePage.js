import GoogleButton from 'react-google-button';
import '../styles/app.css';
import { useNavigate } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../firebase'


function HomePage() {
    const navigate = useNavigate()

    function handleLogin() {
        // Log in with Firebase
        signInWithPopup(auth, new GoogleAuthProvider())
            .then(() => {
                // Redirect to /dashboard after successful login
                navigate('/dashboard')
            })
    }

    return (
        <div className='both-center'>
            <h1 className='hero-text'>Meet your #1 <br></br> match! </h1>
            <GoogleButton className='google-button'
                type="light"
                onClick={handleLogin}
            />
        </div>
    );
};

export default HomePage;