import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Globe } from "lucide-react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/lobby");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 animate-fade-in">
        <div className="flex justify-center mb-6">
          <Globe className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-8">
          {isLogin ? "Hoş Geldin" : "Aramıza Katılın!"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              className="w-full"
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="şifre"
              placeholder="Password"
              className="w-full"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            {isLogin ? "Giriş Yap" : "Kayıt Ol"}
          </Button>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary hover:underline"
          >
            {isLogin
              ? "Hesabın mı yok? Hemen kayıt ol!"
              : "Hesabınız var mı? Giriş yapın."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
