import { GoogleAuthProvider, signInWithPopup, Auth } from 'firebase/auth';

interface SignInProps {
  auth: Auth;
}

export default function SignIn({ auth }: SignInProps) {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const result = signInWithPopup(auth, provider);
  };
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}
