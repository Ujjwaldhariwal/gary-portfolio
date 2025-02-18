"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Box,

  Mail,
  Github,
  Linkedin,
  
  Building2,
  GraduationCap,
  Calendar,
  Trophy,
  MapPin,
  
  CloudIcon,
  DatabaseIcon,
  GitBranchIcon,
  MonitorIcon,
  CpuIcon,
  NetworkIcon,
} from "lucide-react";
import { Badge } from "./components/ui/badge";
import { Card } from "./components/ui/card";
import { Tooltip } from "./components/ui/tooltip";
import MetricsDashboard from "./components/ui/MetricsDashboard";
import Navbar from "./components/ui/navbar";




const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");



  const education = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science",
      college: "Chitkara University",
      location: "Chandigarh, India",
      period: "2020 - 2024",
      gpa: "9.63/10",
      achievements: [
        "Best Group project (Hackathon)",
        "Best Solo Project Award",
      ],
    },
  ];

  

  // Work experience data
  const experiences = [
    {
      company: "CloudEQ",
      role: "Observability Engineer 1",
      period: "Jul 24 - Jan 25",
      achievements: [
        "Led ServiceNow-Datadog integration implementation, enabling automated case creation and resolution for server metrics through event correlation and Case Management system",
        "Configured secure API integration with ServiceNow and resolved critical challenges in table selection, ensuring seamless ticket creation workflows",
        "• Developed custom monitoring solutions with template variables and implemented 24-hour renotification system, resulting in enhanced incident tracking and escalation management",
      ],
    },
    {
      company: "CloudEQ",
      role: "Software Trainee",
      period: "Jan 24 - Jul 24",
      achievements: [
        "Implemented DevOps practices such as containerization, Container orchestration, Infrastructure as Code and CI/CD for a E-commerce.",
        "Implementing DevOps practices on multi micro service architectured applications.",
        "Strong knowledge on Infrastructure as Code using Terraform. Implemented an EKS cluster creation with in VPC using Terraform modules.",
        "Implemented CI/CD for a Java based microservice using GitHub Actions and Argo CD to achieve a single touch end to end automation.",
      ],
    },
  ];

  // Certifications data
  const certifications = [
    { name: "New Relic - Partner Practitioner", date: "2024", icon: Cloud },
    {
      name: "New Relic - Advanced Partner Practitioner",
      date: "2024",
      icon: Box,
    },
  ];

 


  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-900"
      } transition-colors duration-300`}
    >
      {/* Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content */}

      <main className="pt-20">
      <section id="home" >

        {/* Terminal-like Header */}
        <header className="relative z-10 pt-12 px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto"
          >
            <div
              className={`border border-cyan-500/30 rounded-lg ${
                darkMode ? "bg-slate-900/90" : "bg-white/90"
              } p-6 backdrop-blur-sm`}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="font-mono">
                <motion.div className="text-green-500">$ whoami</motion.div>
                <motion.h1 className="text-5xl font-bold mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Gaurav Bhainsora
                </motion.h1>
                <motion.div className="text-cyan-500 mt-2">
                  $ role --details
                </motion.div>
                <motion.h2 className="text-xl text-slate-400 mt-2">
                  DevOps & Cloud Infrastructure Engineer
                </motion.h2>
              </div>
            </div>
          </motion.div>
        </header>
      </section>
        


        {/* Metrics Dashboard Section */}
     <MetricsDashboard/>

      {/* Skills Grid with Animation */}
      <section id="skills">

      <section className="relative z-10 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: CloudIcon, title: "Cloud Platform", desc: "Amazon Web Service (AWS)," },
              { Icon: GitBranchIcon, title: "CI/CD Pipeline", desc: "GitHub Actions, ArgoCD" },
              { Icon: MonitorIcon, title: "Observability Tools", desc: "Datadog, New Relic" },
              { Icon: DatabaseIcon, title: "Infrastructure as Code", desc: "Terraform" },
              { Icon: CpuIcon, title: "Programming Languages", desc: "Python, Shell, Scripting" },
              { Icon: NetworkIcon, title: "Container Orchestration", desc: "Docker, Kubernetes" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="border border-cyan-500/30 rounded-lg bg-slate-800/50 p-6 backdrop-blur-sm hover:border-cyan-500/60 transition-colors">
                  <item.Icon className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-slate-100">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </section>

        {/* Work Experience Section */}
        <section id="experience">

        <section className="relative z-10 py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400 font-mono">
              $ ls experience/
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className={`border border-cyan-500/30 rounded-lg ${
                    darkMode ? "bg-slate-800/50" : "bg-white"
                  } p-6 backdrop-blur-sm`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <div className="flex items-center mt-1">
                        <Building2 className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-slate-400">{exp.company}</span>
                      </div>
                    </div>

                    <Tooltip text="Grade Point Average">
                      <Badge
                        text={exp.period}
                        color="cyan"
                        variant="subtle"
                        size="sm"
                      />
                    </Tooltip>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-slate-400 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        </section>

        {/* Education Section */}
        {/* Education Section */}
        <section className="relative z-10 py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400 font-mono">
              $ ls education/
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card
                    title={
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="w-6 h-6 text-cyan-400" />
                          <span
                            className={`text-xl font-semibold ${
                              darkMode ? "text-slate-100" : "text-slate-900"
                            }`}
                          >
                            {edu.degree}
                          </span>
                        </div>
                        <Tooltip text="Grade Point Average">
                          <Badge
                            text={edu.gpa}
                            color="cyan"
                            variant="subtle"
                            size="sm"
                          />
                        </Tooltip>
                      </div>
                    }
                  >
                    <div
                      className={`space-y-4 ${
                        darkMode ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      <p className="text-slate-400">{edu.field}</p>

                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span>
                          {edu.college}, {edu.location}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span>{edu.period}</span>
                      </div>

                      <div className="mt-4">
                        <Tooltip
                          text={
                            <ul className="space-y-1">
                              {edu.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          }
                        >
                          <div className="flex items-center space-x-2 text-cyan-400 cursor-pointer">
                            <Trophy className="w-4 h-4" />
                            <span>View Achievements</span>
                          </div>
                        </Tooltip>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" >

        <section className="relative z-10 py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400 font-mono">
              $ ls certifications/
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className={`border border-cyan-500/30 rounded-lg ${
                    darkMode ? "bg-slate-800/50" : "bg-white"
                  } p-6 backdrop-blur-sm`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                      <cert.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-sm text-slate-400">{cert.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        </section>

        {/* Social Links */}
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
          {[
            { Icon: Github, href: "https://github.com/gauravbhainsora" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/gauravb0/" },
            { Icon: Mail, href: "mailto:gauravsbhainsora@gmail.com" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-slate-800 hover:bg-slate-700"
                  : "bg-white hover:bg-slate-100"
              } shadow-lg`}
            >
              <social.Icon className="w-5 h-5 text-cyan-500" />
            </motion.a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-cyan-500/30">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>
            © {new Date().getFullYear()} Gaurav Bhainsora. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
