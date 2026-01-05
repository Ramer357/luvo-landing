import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ShoppingBag, Users, ArrowRight, Instagram, Mail, MessageCircle } from "lucide-react";
import { FaTiktok, FaInstagram } from "react-icons/fa";


export default function LandingPage() {

  return (
    <div className="min-h-screen bg-black">
      {/* Subtle animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8900bb] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#8900bb] rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#8900bb]/5 rounded-full mb-8"
              >
                <div className="w-2 h-2 bg-[#8900bb] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#8900bb]">Launching Early 2026</span>
              </motion.div> */}

              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight">
                Luvo
              </h1>

              <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                Your style, your community
              </p>

              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                The social platform where fashion meets discovery. Shop every outfit, join style challenges, and connect with your fashion tribe.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <Button
                  size="lg"
                  className="bg-[#8900bb] hover:bg-[#7000a0] text-white px-8 py-6 text-base rounded-full group transition-all shadow-lg shadow-[#8900bb]/20 hover:shadow-xl hover:shadow-[#8900bb]/30"
                >
                  Install on App Store
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-700 text-gray-300 hover:border-[#8900bb] hover:text-[#8900bb] hover:bg-[#8900bb]/10 px-8 py-6 text-base rounded-full transition-all"
                >
                  Learn More
                </Button> */}
              </motion.div>

              {/* Stats
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-zinc-800"
              >
                {[
                  { number: "10K+", label: "On Waitlist" },
                  { number: "50+", label: "Communities" },
                  { number: "100%", label: "Authentic" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-[#8900bb] mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div> */}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-6 bg-zinc-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Fashion, Simplified
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Everything you need to discover, shop, and share your style
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <ShoppingBag className="w-8 h-8" />,
                  title: "Shop Every Post",
                  description: "Tap any item to buy it instantly. No more endless searching—every outfit is shoppable."
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Weekly Challenges",
                  description: "Join creative style challenges and get featured as Outfit of the Week, voted by the community."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Your Tribe",
                  description: "Find communities that match your aesthetic—from streetwear to luxury, minimal to maximalist."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 rounded-3xl hover:border-[#8900bb]/50 hover:shadow-xl hover:shadow-[#8900bb]/10 transition-all duration-300">
                    <div className="w-16 h-16 bg-[#8900bb]/10 rounded-2xl flex items-center justify-center text-[#8900bb] mb-6 group-hover:bg-[#8900bb] group-hover:text-white transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-[#8900bb] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Join the Luvo Community
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                No ads. No fake influencers. No algorithm pushing products you don't want.
                <br />
                Just real people, real style, and real community.
              </p>

              {/* Social Media Links */}
              <div className="mb-16">
                <p className="text-sm uppercase tracking-wider text-white/70 mb-6">Follow Us</p>
                <div className="flex gap-4 justify-center flex-wrap">
                  {[
                    { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/luvo.fashion/" },
                    { icon: FaTiktok, label: "TikTok", href: "https://www.tiktok.com/@luvo.fashion?is_from_webapp=1&sender_device=pc" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 px-8 py-4 rounded-full flex items-center gap-3 transition-all"
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Contact & Support */}
              {/* <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-3xl mx-auto">
                <p className="text-sm uppercase tracking-wider text-white/70 mb-6">Get in Touch</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <a
                    href="mailto:hello@luvo.app"
                    className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-6 rounded-2xl transition-all group"
                  >
                    <Mail className="w-8 h-8 mb-3 text-white group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-2">Contact Us</h3>
                    <p className="text-sm text-white/70">hello@luvo.app</p>
                  </a>
                  <a
                    href="mailto:support@luvo.app"
                    className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-6 rounded-2xl transition-all group"
                  >
                    <MessageCircle className="w-8 h-8 mb-3 text-white group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-2">Support</h3>
                    <p className="text-sm text-white/70">support@luvo.app</p>
                  </a>
                </div>
              </div> */}
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-black border-t border-zinc-800">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Luvo. Fashion meets community.
            </p>
            <a className="text-gray-500 text-sm underline" href="https://www.privacypolicies.com/live/f3543005-1c80-4a94-a679-19dc934d596c">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
