import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Globe } from "lucide-react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"; 
import { doc, setDoc } from "firebase/firestore";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/index");
    };

    const onRegister = async (e) => {
        e.preventDefault();
        try {
            const createUser = await createUserWithEmailAndPassword(auth, email, password);
            const user = createUser.user;

            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                username: username,
                uid: user.uid,
                createdAt: new Date().toISOString(),
            });

            console.log("Kullanıcı başarıyla oluşturuldu ve Firestore'a kaydedildi:", user);
            navigate("/index");
        } catch (error) {
            console.error("Kullanıcı kaydı sırasında hata oluştu:", error);
        }
    };

    const onLogin = async (e) => {
        e.preventDefault();
        try {
            const loginUser = await signInWithEmailAndPassword(auth, email, password);
            const user = loginUser.user;
            console.log("Giriş başarılı:", user);
            navigate("/index");
        } catch (error) {
            console.error("Giriş sırasında hata oluştu:", error);
        }
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
                <form onSubmit={isLogin ? onLogin : onRegister} className="space-y-4">
                    <div className="space-y-2">
                        {!isLogin && (
                            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Kullanıcı adı" className="w-full" required />
                        )}
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
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
