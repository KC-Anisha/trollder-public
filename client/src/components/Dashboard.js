import GoogleButton from 'react-google-button';
import '../styles/app.css';
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

function DashboardPage({ user }) {
  const navigate = useNavigate()

  function handleSignOut() {
    // Sign out with Firebase
    signOut(auth).then(() => {
      // Redirect to home page after successful sign-out
      navigate('/')
    })
  }

  return (
    <div className='both-center'>
      <h3>Welcome, {user.displayName}!</h3>
      {console.log(user)}
      <GoogleButton className='google-button'
                type="light"
                label='Sign Out'
                onClick={handleSignOut}
            />
    </div>
  );
}

export default DashboardPage;