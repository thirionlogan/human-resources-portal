import { Auth } from 'firebase/auth';

interface SignOutProps {
  auth: Auth;
}

export default function SignOut({ auth }: SignOutProps) {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}
