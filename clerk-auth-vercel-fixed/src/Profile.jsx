import { SignedIn, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user } = useUser();

  return (
    <SignedIn>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
        <div className="text-lg space-y-2">
          <p><strong>Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.primaryEmailAddress.emailAddress}</p>
        </div>
        <Link to="/" className="mt-6 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded">Back to Dashboard</Link>
      </div>
    </SignedIn>
  );
}
