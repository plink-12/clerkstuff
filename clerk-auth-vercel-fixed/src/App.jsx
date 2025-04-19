import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";
import Profile from "./Profile";

const clerkFrontendApi = "clerk_placeholder_frontend_api"; // Replace with your Clerk Frontend API

function App() {
  return (
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SignedIn>
                  <div className="min-h-screen flex flex-col items-center justify-center gap-6">
                    <h1 className="text-3xl font-bold">Welcome to your dashboard!</h1>
                    <div className="flex gap-4">
                      <Link to="/profile" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded">Profile</Link>
                      <UserButton afterSignOutUrl="/sign-in" />
                    </div>
                  </div>
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;
