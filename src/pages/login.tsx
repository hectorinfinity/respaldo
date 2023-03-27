import { useState, useContext } from "react";
import { AuthContext } from "@/context/auth/auth_provider";
import { sign_in_with_credentials, sing_in, ProviderType } from "@/lib/firebase_auth";
import LoginForm from "@/components/LoginForm";
import { useRouter } from "next/router";


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const router = useRouter();

    const handleLogin = async (provider: ProviderType | "credentials") => {
        setLoading(true);

        try {
            let result;

            if (provider === "credentials") {
                result = await sign_in_with_credentials({ email, password });
            } else {
                result = await sing_in(provider);
            }

            if (result.error) {
                console.log("Error logging in:", result.error);
            } else {
                if (result.user) {
                    const { id_token, uid, providerId } = result.user;
                    await login(id_token, uid, providerId);
                    console.log("User login info:", result.user);
                    router.push("/");
                } else {
                    console.log("Error: User object is undefined");
                }
            }
        } catch (error) {
            console.log("Error logging in:", error);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div>
            {/* Other page elements if needed */}
            <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                loading={loading}
            />
        </div>
    );
};

export default LoginPage;
