import { useEffect } from "react";

export default function HomePage() {
  const Logout = async () => {
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("refreshToken");
  };

  useEffect(() => {
    if (
      window.sessionStorage.getItem("token") == null ||
      window.sessionStorage.getItem("refreshToken") == null
    ) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <h1>This is home page</h1>
      <button onClick={Logout}>Logout</button>
    </>
  );
}
