import React, { useState } from "react";
import { useRouter } from "next/router";
import { ProviderType } from "@/lib/firebase_auth";

interface LoginFormProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleLogin: (provider: ProviderType | "credentials") => Promise<void>;
    loading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    loading,
}) => {
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleLogin("credentials");
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" disabled={loading}>
                    Log In
                </button>
            </form>
            <button onClick={() => handleLogin("google")} disabled={loading}>
                Log In with Google
            </button>
            <button onClick={() => handleLogin("facebook")} disabled={loading}>
                Log In with Facebook
            </button>
            <button onClick={() => handleLogin("apple")} disabled={loading}>
                Log In with Apple
            </button>
        </div>
    );
};

export default LoginForm;
