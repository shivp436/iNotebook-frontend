import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Register() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className='container my-3'>
      Register: Only admins can register you :) <br /> Bye
      <br />
      <Button variant='primary' onClick={goToLogin} className='mt-3'>
        Go to Login
      </Button>
    </div>
  );
}

export default Register;
