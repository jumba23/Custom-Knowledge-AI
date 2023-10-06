import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleLogin = (e: any) => {
    e.preventDefault();
    // For demonstration, using 'credentials' provider, you can replace it with other providers
    signIn("credentials", { username: "username", password: "password" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-4 bg-white rounded-lg">
        <form onSubmit={handleLogin}>
          <div>
            <label className="block">Username</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="mt-4">
            <label className="block">Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-md"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
