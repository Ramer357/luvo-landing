import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Sparkles, Heart, Zap, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-blue-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-r from-rose-200/30 to-yellow-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center min-h-screen">
        {/* Header with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-500 via-purple-600 to-blue-900 bg-clip-text text-transparent mb-4 tracking-tight">
            Luvo
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 mb-6">
            <Sparkles className="h-4 w-4 text-yellow-500" />
            <span>Fashion • Style • Community</span>
            <Sparkles className="h-4 w-4 text-yellow-500" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-10 leading-relaxed font-medium"
        >
          Discover outfits, explore discounts, and shop your favorite fashion brands — 
          <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-bold"> all in one stylish app</span>
        </motion.p>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="rounded-full px-12 py-6 text-lg font-bold shadow-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0 relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <ShoppingBag className="mr-3 h-6 w-6" /> 
              Coming soon on AppStore
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-2"
              >
                ✨
              </motion.div>
            </Button>
          </motion.a>
          <p className="text-sm text-gray-500 mt-3">Be the first to know when we launch!</p>
        </motion.div>

        {/* Enhanced Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {[
            {
              title: "Fashion Discovery",
              desc: "Curated clothing products, trends, and outfit ideas updated daily by style experts.",
              icon: <Sparkles className="h-10 w-10" />,
              gradient: "from-pink-500 to-rose-500",
              bgGradient: "from-pink-50 to-rose-50"
            },
            {
              title: "Exclusive Discounts",
              desc: "Find the hottest deals from your favorite brands with up to 70% off retail prices.",
              icon: <Zap className="h-10 w-10" />,
              gradient: "from-purple-500 to-indigo-500",
              bgGradient: "from-purple-50 to-indigo-50"
            },
            {
              title: "Style Community",
              desc: "Join weekly style challenges, vote on trends, and connect with fashion lovers.",
              icon: <Users className="h-10 w-10" />,
              gradient: "from-yellow-500 to-orange-500",
              bgGradient: "from-yellow-50 to-orange-50"
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className={`rounded-3xl shadow-xl border-0 bg-gradient-to-br ${feature.bgGradient} hover:shadow-2xl transition-all duration-300 overflow-hidden relative`}>
                <CardContent className="p-8 text-center relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 shadow-lg`}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 text-gray-500 text-sm flex items-center gap-2"
        >
          {new Date().getFullYear()} | Luvo | Built with 
          <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" />
          and deployed on Vercel
        </motion.footer>
      </div>
    </div>
  );
}