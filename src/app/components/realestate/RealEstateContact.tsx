import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useNavigate } from "react-router";
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { submitContact, resetMessages } from "../features/contactSlice";

export function RealEstateContact() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.contact);

  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaValue) {
      toast.error("Please verify you are not a robot");
      return;
    }

    try {
      await dispatch(
        submitContact({
          ...form,
          recaptchaToken: recaptchaValue,
        }),
      ).unwrap();

      toast.success("Message sent successfully!");

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });

      setRecaptchaValue(null);
      dispatch(resetMessages());

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/thank-you");
      }, 1200);
    } catch (err) {
      toast.error("Failed to submit form. Try again.");
    }
  };

  return (
    <section
      id="contact"
      className="
        py-20 
        bg-gradient-to-b 
        from-white to-gray-50 
        dark:from-gray-950 dark:to-gray-900 
        transition-colors duration-300
      "
    >
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-600 dark:text-amber-500 uppercase tracking-wider text-sm mb-2 block">
              Get In Touch
            </span>

            <h2 className="text-gray-900 dark:text-white mb-4">
              Let's Find Your Dream Property
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Whether you're buying, selling, or investing, our expert team is
              here to help you every step of the way.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 dark:bg-amber-600 rounded-xl flex items-center justify-center shadow-md">
                  <Phone className="w-6 h-6 text-amber-400 dark:text-white" />
                </div>
                <div>
                  <div className="text-gray-900 dark:text-white mb-1">
                    Phone
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    +1 (555) 123-4567
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 dark:bg-amber-600 rounded-xl flex items-center justify-center shadow-md">
                  <Mail className="w-6 h-6 text-amber-400 dark:text-white" />
                </div>
                <div>
                  <div className="text-gray-900 dark:text-white mb-1">
                    Email
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    info@primeestate.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 dark:bg-amber-600 rounded-xl flex items-center justify-center shadow-md">
                  <MapPin className="w-6 h-6 text-amber-400 dark:text-white" />
                </div>
                <div>
                  <div className="text-gray-900 dark:text-white mb-1">
                    Office
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Downtown, CA 90210
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-white 
              dark:bg-gray-900/70 
              backdrop-blur-xl
              rounded-2xl 
              shadow-xl 
              dark:shadow-2xl
              p-8 
              border 
              border-gray-100 
              dark:border-gray-800
              transition-all duration-300
            "
          >
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
                  />
                </div>

                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>

              <div>
                <Label htmlFor="interest">I'm interested in</Label>
                <select
                  id="interest"
                  value={form.interest}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 h-10 px-3 border rounded-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
                >
                  <option value="">Select an option</option>
                  <option>Buying a property</option>
                  <option>Selling a property</option>
                  <option>Property investment</option>
                  <option>Property management</option>
                  <option>General inquiry</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>

              <ReCAPTCHA
                sitekey="6LfsuXcsAAAAAOI48bX2UGbpvs9yAPKOotQ2qNCI"
                onChange={(value) => setRecaptchaValue(value)}
                className="mt-4"
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 dark:from-amber-600 dark:to-amber-500 dark:hover:from-amber-500 dark:hover:to-amber-400 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
