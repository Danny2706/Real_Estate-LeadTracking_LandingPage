import { motion } from "motion/react";
import { CheckCircle, Home, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";

export function RealEstateThankYouPage() {
  const navigate = useNavigate();

  return (
    <div
      className="
        min-h-screen 
        bg-gradient-to-br 
        from-gray-100 to-gray-200 
        dark:from-gray-950 dark:to-gray-900 
        flex items-center justify-center px-4
        transition-colors duration-300
      "
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="
          max-w-2xl w-full 
          bg-white 
          dark:bg-gray-900/70
          backdrop-blur-xl
          rounded-2xl 
          shadow-2xl 
          dark:shadow-black/40
          overflow-hidden
          border border-gray-200 
          dark:border-gray-800
          transition-all duration-300
        "
      >
        {/* Success Icon Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 dark:from-amber-600 dark:to-amber-500 p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            <CheckCircle className="w-24 h-24 text-white mx-auto drop-shadow-lg" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white"
          >
            Thank You!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          >
            Your message has been successfully received. Our real estate team
            will contact you shortly to help you find your perfect property.
          </motion.p>

          {/* What's Next Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="
              bg-gray-50 
              dark:bg-gray-800/60 
              rounded-xl 
              p-6 
              mb-8
              border border-gray-200 
              dark:border-gray-700
              transition-all
            "
          >
            <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
              What Happens Next?
            </h3>

            <div className="space-y-6 text-left">
              {[
                {
                  step: 1,
                  title: "We Review Your Inquiry",
                  desc: "Our property specialists will carefully review your message within 24 hours.",
                },
                {
                  step: 2,
                  title: "Personal Consultation",
                  desc: "A real estate advisor will contact you to understand your goals and preferences.",
                },
                {
                  step: 3,
                  title: "Schedule Viewing",
                  desc: "We’ll arrange property tours or consultations tailored to your needs.",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start">
                  <div className="w-8 h-8 bg-blue-900 dark:bg-amber-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 text-sm font-semibold">
                    {item.step}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">
                      {item.title}
                    </strong>{" "}
                    — {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => navigate("/")}
              className="
                bg-gradient-to-r 
                from-blue-900 to-blue-700
                hover:from-blue-800 hover:to-blue-600
                dark:from-amber-600 dark:to-amber-500
                dark:hover:from-amber-500 dark:hover:to-amber-400
                text-white 
                px-8 py-6
                shadow-lg hover:shadow-xl
                transition-all duration-300
              "
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="
                border-gray-300 
                dark:border-gray-600
                text-gray-700 
                dark:text-gray-300
                hover:bg-gray-100 
                dark:hover:bg-gray-800
                px-8 py-6
                transition-all duration-300
              "
            >
              <Calendar className="w-5 h-5 mr-2" />
              Explore Properties
            </Button>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <p className="text-gray-600 dark:text-gray-400">
              Need immediate assistance? Call us at{" "}
              <a
                href="tel:5551234567"
                className="text-blue-900 dark:text-amber-400 hover:underline font-medium"
              >
                (555) 123-4567
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
