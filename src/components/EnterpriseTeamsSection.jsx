import React from 'react';
import { motion } from 'framer-motion';
import { Users, Slack, Video, BarChart3, Target, ArrowRight } from 'lucide-react';

const EnterpriseTeamsSection = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Team-based Learning",
      description: "Create collaborative learning experiences with group projects, peer reviews, and team challenges.",
      bgColor: "bg-[#121214]",
      borderColor: "border-blue-900",
      iconBg: "bg-blue-900"
    },
    {
      icon: <Slack className="h-8 w-8 text-purple-400" />,
      title: "Slack Integration",
      description: "Seamlessly integrate with Slack for notifications, discussions, and collaborative learning workflows.",
      bgColor: "bg-[#121214]",
      borderColor: "border-purple-900",
      iconBg: "bg-purple-900"
    },
    {
      icon: <Video className="h-8 w-8 text-green-400" />,
      title: "Video Integration",
      description: "Connect directly with video platforms for live sessions, webinars, and virtual classroom experiences.",
      bgColor: "bg-[#121214]",
      borderColor: "border-green-900",
      iconBg: "bg-green-900"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-400" />,
      title: "Advanced Reporting",
      description: "Get detailed insights into learning progress, engagement metrics, and team performance analytics.",
      bgColor: "bg-[#121214]",
      borderColor: "border-orange-900",
      iconBg: "bg-orange-900"
    },
    {
      icon: <Target className="h-8 w-8 text-red-400" />,
      title: "Skill Recommendations",
      description: "AI-powered personalized learning paths and skill recommendations based on role and performance.",
      bgColor: "bg-[#121214]",
      borderColor: "border-red-900",
      iconBg: "bg-red-900"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section id="enterprise-teams" className="py-16 bg-[#09090a] overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <p className="text-blue-400 font-medium text-lg mb-2">Enterprise-Grade Learning</p>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Built for <span className="text-blue-400">Teams & Enterprises</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Scale learning across your entire organization with powerful collaboration tools,
              seamless integrations, and intelligent insights that drive team performance.
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className={`h-full ${feature.bgColor} ${feature.borderColor} border rounded-2xl hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300`}>
                <div className="p-6">
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="bg-[#121214] rounded-2xl p-8 shadow-lg border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Team&apos;s Learning?
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Join thousands of organizations already using Athena to deliver
                impactful learning experiences at scale. Get started with a custom demo
                tailored to your team&apos;s needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg flex items-center group transition">
                  Schedule Enterprise Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-900 hover:text-white px-8 py-6 text-lg font-semibold rounded-lg transition"
                >
                  View Pricing Plans
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    {/* Card 1 */}
                    <div className="bg-[#121214] rounded-2xl p-6 shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center">
                          <Users className="h-5 w-5 text-blue-400" />
                        </div>
                        <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                          <ArrowRight className="h-3 w-3 text-gray-400" />
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="text-2xl font-bold text-white mb-1">2.5k</p>
                        <p className="text-sm text-gray-400">Active Learners</p>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-[#121214] rounded-2xl p-6 shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 bg-green-900 rounded-xl flex items-center justify-center">
                          <BarChart3 className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                          <ArrowRight className="h-3 w-3 text-gray-400" />
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="text-2xl font-bold text-white mb-1">98%</p>
                        <p className="text-sm text-gray-400">Completion Rate</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    {/* Card 3 */}
                    <div className="bg-[#121214] rounded-2xl p-6 shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 bg-purple-900 rounded-xl flex items-center justify-center">
                          <Target className="h-5 w-5 text-purple-400" />
                        </div>
                        <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                          <ArrowRight className="h-3 w-3 text-gray-400" />
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="text-2xl font-bold text-white mb-1">150+</p>
                        <p className="text-sm text-gray-400">Skill Paths</p>
                      </div>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-[#121214] rounded-2xl p-6 shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 bg-orange-900 rounded-xl flex items-center justify-center">
                          <Slack className="h-5 w-5 text-orange-400" />
                        </div>
                        <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                          <ArrowRight className="h-3 w-3 text-gray-400" />
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="text-2xl font-bold text-white mb-1">50+</p>
                        <p className="text-sm text-gray-400">Integrations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseTeamsSection;
