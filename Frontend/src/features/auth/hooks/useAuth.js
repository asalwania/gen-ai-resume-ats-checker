import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      const data = await login({ email, password });
      setUser(data.user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (username, email, password) => {
    setLoading(true);
    const data = await register({ username, email, password });
    setUser(data.user);
    setLoading(false);
  };

  const handleLogout = async () => {
    setLoading(true);
    await logout();
    setUser(null);
    setLoading(false);
  };

  useEffect(() => {
    const getAndSetUser = async () => {
      try {
        const data = await getMe();
        setUser(data.user);
      } catch (error) {
        console.log(error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    getAndSetUser();
  }, []);

  return {
    user,
    setUser,
    loading,
    setLoading,
    handleLogin,
    handleRegister,
    handleLogout,
  };
};
