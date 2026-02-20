"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import EyeIcon from "@/public/assets/icons/eye.svg";
import EyeOffIcon from "@/public/assets/icons/eye-off.svg";

// Get password from environment variable
const SITE_PASSWORD = "901.101";

export default function PasswordProtection() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if password is valid on component mount
    const checkAuth = () => {
      const auth = localStorage.getItem("auth");
      if (auth) {
        const { expiresAt } = JSON.parse(auth);
        if (new Date().getTime() < expiresAt) {
          router.refresh();
        } else {
          localStorage.removeItem("auth");
        }
      }
    };

    checkAuth();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (password === SITE_PASSWORD) {
        // Set expiration time to 1 hour from now
        const expiresAt = new Date().getTime() + 60 * 60 * 1000; // 1 hour
        localStorage.setItem("auth", JSON.stringify({ expiresAt }));

        // Force a full page reload to ensure all components re-render
        window.location.href = "/";
      } else {
        setError("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
      }
    } catch (err) {
      console.error("Authentication error:", err);
      setError("Ocurrió un error. Por favor, inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Acceso Restringido
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          aria-label="Formulario de acceso"
        >
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contraseña
            </label>
            <div className="flex w-auto h-auto relative ">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Introduce la contraseña"
                required
                disabled={isLoading}
                aria-required="true"
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "password-error" : undefined}
              />
              <div className="absolute bottom-2 right-0 pr-2">
                {showPassword ? (
                  <EyeOffIcon
                    className="w-5 h-5 text-secondary cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeIcon
                    className="w-5 h-5 text-secondary cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </div>
          </div>
          {error && (
            <p id="password-error" className="text-red-500 text-sm">
              {error}
            </p>
          )}
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md
               hover:bg-blue-700 transition-colors flex justify-center items-center cursor-pointer active:scale-95 ${
                 isLoading ? "opacity-75 cursor-not-allowed" : ""
               }`}
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Verificando...
              </>
            ) : (
              "Acceder"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
