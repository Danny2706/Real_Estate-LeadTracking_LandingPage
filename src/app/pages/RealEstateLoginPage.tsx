import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Lock, Mail, Eye, EyeOff, AlertCircle, Home } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";
import { useAppDispatch, useAppSelector } from "../components/utils/hooks";
import { loginAdmin } from "../components/features/authSlice";

export function RealEstateLoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { token, loading, error } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (token) {
      toast.success("Login successful! Redirecting to dashboard...");
      setTimeout(() => navigate("/dashboard"), 500);
    }
  }, [token, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginAdmin({ email, password }));
  };

  return (
    <div
      className="
        min-h-screen 
        bg-gradient-to-br 
        from-gray-100 via-gray-200 to-gray-300
        dark:from-blue-950 dark:via-blue-900 dark:to-gray-950
        flex items-center justify-center px-4
        transition-colors duration-300
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
              <Home className="w-7 h-7 text-white" />
            </div>
            <div className="text-4xl font-semibold">
              <span className="text-gray-900 dark:text-white">Prime</span>
              <span className="text-amber-500">Estate</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Admin Dashboard Access
          </p>
        </div>

        {/* Login Card */}
        <div
          className="
            bg-white 
            dark:bg-gray-900/70
            backdrop-blur-xl
            rounded-2xl 
            shadow-2xl 
            dark:shadow-black/40
            p-8
            border border-gray-200 
            dark:border-gray-800
            transition-all duration-300
          "
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-amber-100 dark:from-blue-900/40 dark:to-amber-600/30 rounded-full mb-4">
              <Lock className="w-8 h-8 text-blue-900 dark:text-amber-400" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to manage your property leads
            </p>
          </div>

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                mb-6 p-4 
                bg-red-50 dark:bg-red-900/30
                border border-red-200 dark:border-red-800
                rounded-lg flex items-start gap-3
              "
            >
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <Label className="text-gray-700 dark:text-gray-300">
                Email Address
              </Label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="admin@primeestate.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    pl-10 
                    bg-white dark:bg-gray-800
                    border-gray-300 dark:border-gray-700
                    text-gray-900 dark:text-white
                    focus:border-blue-900 dark:focus:border-amber-500
                  "
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <Label className="text-gray-700 dark:text-gray-300">
                Password
              </Label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
                    pl-10 pr-10 
                    bg-white dark:bg-gray-800
                    border-gray-300 dark:border-gray-700
                    text-gray-900 dark:text-white
                    focus:border-blue-900 dark:focus:border-amber-500
                  "
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={loading}
              className="
                w-full 
                bg-gradient-to-r 
                from-blue-900 to-blue-700
                hover:from-blue-800 hover:to-blue-600
                dark:from-amber-600 dark:to-amber-500
                dark:hover:from-amber-500 dark:hover:to-amber-400
                text-white 
                py-6
                shadow-lg hover:shadow-xl
                transition-all duration-300
              "
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Back */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/")}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-amber-400 transition-colors"
            >
              ← Back to Website
            </button>
          </div>
        </div>

        <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8">
          © 2026 PrimeEstate. All rights reserved.
        </p>
      </motion.div>

      <Toaster position="top-right" richColors />
    </div>
  );
}
