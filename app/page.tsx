"use client"

import { Badge } from "@/components/ui/badge"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import {
  Calendar,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  BarChart3,
  Globe,
  Clock,
  CheckCircle,
  ArrowRight,
  Calculator,
  Timer,
  Play,
  Pause,
  RotateCcw,
  BookOpen,
  ShowerHeadIcon as Swimmer,
  Megaphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function VirtualAssistantPortfolio() {
  const { scrollYProgress } = useScroll()

  // Interactive Activities State
  const [productivityScore, setProductivityScore] = useState([50])
  const [emailCount, setEmailCount] = useState("")
  const [timeSpent, setTimeSpent] = useState("")
  const [calculatedSavings, setCalculatedSavings] = useState(0)

  // Pomodoro Timer State
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60) // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Task Tracker State
  const [tasks, setTasks] = useState([
    { id: 1, text: "Check emails", completed: false },
    { id: 2, text: "Schedule meetings", completed: false },
    { id: 3, text: "Update calendar", completed: false },
  ])
  const [newTask, setNewTask] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  // Pomodoro Timer Effect
  useEffect(() => {
    if (!mounted) return // Add this line to prevent the effect from running on the server or before hydration

    let interval: NodeJS.Timeout
    if (isRunning && pomodoroTime > 0) {
      interval = setInterval(() => {
        setPomodoroTime((time) => time - 1)
      }, 1000)
    } else if (pomodoroTime === 0) {
      setIsRunning(false)
      setIsBreak(!isBreak)
      setPomodoroTime(isBreak ? 25 * 60 : 5 * 60) // 25 min work, 5 min break
    }
    return () => clearInterval(interval)
  }, [isRunning, pomodoroTime, isBreak, mounted])

  // Calculate Productivity Savings
  const calculateSavings = () => {
    const emails = Number.parseInt(emailCount) || 0
    const hours = Number.parseFloat(timeSpent) || 0
    const hourlyRate = 25 // Average hourly rate
    const timeSavedPerEmail = 2 // minutes saved per email
    const totalTimeSaved = (emails * timeSavedPerEmail) / 60 // convert to hours
    const savings = Math.round(totalTimeSaved * hourlyRate)
    setCalculatedSavings(savings)
  }

  // Task Management
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask("")
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const services = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Management",
      description:
        "Professional email handling, organization, and response management to keep your inbox clean and efficient.",
      features: ["Email sorting & filtering", "Response templates", "Follow-up tracking"],
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Calendar Management",
      description: "Seamless scheduling, appointment coordination, and calendar optimization for maximum productivity.",
      features: ["Meeting scheduling", "Calendar optimization", "Reminder systems"],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Content Creation",
      description: "High-quality content writing, editing, and management for your business communications.",
      features: ["Blog writing", "Social media content", "Document editing"],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Management",
      description: "Accurate data entry, analysis, and reporting to help you make informed business decisions.",
      features: ["Data entry", "Report generation", "Database management"],
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Customer Support",
      description: "Professional customer service and support to maintain excellent client relationships.",
      features: ["Live chat support", "Ticket management", "Customer follow-up"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Research & Analysis",
      description: "Comprehensive market research, competitor analysis, and business intelligence gathering.",
      features: ["Market research", "Competitor analysis", "Lead generation"],
    },
  ]

  const projects = [
    {
      image: "/images/project-crm-data-entry.png",
      title: "01_CRM Data Entry - Smart Contacts Upload",
      description:
        "Cleaned and organized product data for an online retail platform, improving search accuracy and customer experience.",
      link: "https://drive.google.com/drive/folders/1oMysQrPH78If4irKd5FzUp2_NSzpGdVK?usp=drive_link",
    },
    {
      image: "/images/project-web-research.png",
      title: "02_Web Research - SaaS Startups in Africa",
      description: "Developed and managed a comprehensive content calendar for a startup, boosting engagement by 20%.",
      link: "https://drive.google.com/drive/folders/1fx1PsySmgI2NcuYKJQztBMI3BPlhk-fQ?usp=drive_link",
    },
    {
      image: "/images/project-data-cleaning.png",
      title: "03_Data Cleaning & Formatting - Excel Cleanup",
      description:
        "Automated client onboarding workflows, reducing manual effort by 40% and improving client satisfaction.",
      link: "https://drive.google.com/drive/folders/11-v9InFnIPSqAi0mK0-Yl_FHYjXs-NTw?usp=drive_link",
    },
    {
      image: "/images/project-lead-generation.png",
      title: "04_Lead Generation - Real Estate USA",
      description: "Conducted in-depth market research and compiled a detailed report for a new product launch.",
      link: "https://drive.google.com/drive/folders/1D08HzlQRSDCgRRfZCh8N-rHvob9tSRRP?usp=drive_link",
    },
    {
      image: "/images/project-excel-reporting.png",
      title: "05_Excel Reporting - Sales Dashboard",
      description:
        "Managed logistics and attendee communication for a successful virtual conference, ensuring smooth execution.",
      link: "https://drive.google.com/drive/folders/1c-_d_2mo7SV128ga4jk7-_TiDe9zu78x?usp=drive_link",
    },
    {
      image: "/images/project-pdf-to-excel.png",
      title: "06_PDF to Excel - Invoice Conversion",
      description:
        "Optimized a client's CRM database, improving data integrity and enabling more effective customer segmentation.",
      link: "https://drive.google.com/drive/folders/17oz1dbhwEkvwd0dqrMGA-qs38m36tni6?usp=drive_link",
    },
  ]

  const testimonials = [
    {
      logo: "/images/theday.jpeg",
      name: "TheDay Digital Marketing Agency",
      content:
        "Natnael consistently delivers accurate and well-organized data. His speed and attention to detail saved us hours of work every week.",
    },
    {
      logo: "/images/insight.jpeg",
      name: "Insight Software",
      content:
        "Great experience working with Natnael on our lead generation project. He was responsive, thorough, and delivered exactly what we needed — on time.",
    },
    {
      logo: "/images/allagi.jpeg",
      name: "Allagi Travel Agency",
      content:
        "Natnael handled our product listings and web research with professionalism and precision. Heʼs dependable, fast, and gets the job done right.",
    },
  ]

  const certifications = [
    {
      image: "/images/certifications/adama.png",
      title: "Software Engineering Degree - Adama Science and Technology University",
    },
    {
      image: "/images/certifications/alx.png",
      title: "Virtual Assistant - ALX",
    },
    {
      image: "/images/certifications/google.png",
      title: "Digital Marketing - Google",
    },
    {
      image: "/images/certifications/alison.png",
      title: "Email Marketing - Allison",
    },
    {
      image: "/images/certifications/dereja.png",
      title: "Soft Skill and Career Guidance - Derja Academy",
    },
    {
      image: "/images/certifications/edi-ethiopia.png",
      title: "Entrepreneurship - EDI",
    },
  ]

  const hobbies = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      image: "/images/events.jpeg",
      title: "Events",
      description: "Engaging with communities and learning from diverse perspectives at various events.",
    },
    {
      icon: <Swimmer className="w-8 h-8" />,
      image: "/images/swimming.jpeg",
      title: "Swimming",
      description: "Staying active and refreshed with regular swimming sessions.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      image: "/images/book.jpeg",
      title: "Books",
      description: "Expanding knowledge and gaining new insights through reading a variety of books.",
    },
  ]

  const stats = [
    { number: "5+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Availability" },
    { number: "1+", label: "Years Experience" }, // Changed from 3+ to 1+
  ]

  return (
    <>
      {!mounted ? (
        <div className="min-h-screen flex items-center justify-center bg-subtle-gradient-animated text-white">
          Loading portfolio...
        </div>
      ) : (
        <div className="min-h-screen bg-subtle-gradient-animated">
          {/* Intro Video Section (very top) */}
          <section id="intro" className="pt-16 pb-6 px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Video Introduction</h2>
              <div className="rounded-2xl overflow-hidden border-8 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-2">
                <div className="relative w-full h-0 pt-[56.25%] rounded-xl overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/uF5Exr2fPnQ?rel=0&modestbranding=1"
                    title="Introduction video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Hero Section */}
          <section id="home" className="pt-16 py-16 px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col items-center text-center gap-12">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border-8 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-2">
                    <div className="relative w-full h-0 pt-[56.25%] rounded-xl overflow-hidden">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/uF5Exr2fPnQ"
                        title="Introduction video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute top-10 right-10 bg-slate-800 border border-slate-600 p-4 rounded-lg shadow-lg"
                  >
                    <Mail className="w-6 h-6 text-blue-600" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    className="absolute bottom-10 left-10 bg-slate-800 border border-slate-600 p-4 rounded-lg shadow-lg"
                  >
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-3xl mx-auto"
                >
                  <motion.h1
                    className="text-5xl lg:text-7xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Your Professional
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                      Virtual Assistant
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-xl text-slate-300 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Streamline your business operations with expert virtual assistance. From email management to content
                    creation, I help entrepreneurs and businesses focus on what matters most.
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {/* "Get Started Today" button now links to Contact section */}
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      Get Started Today
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                    {/* "View My Services" button now links to Services section */}
                    <a
                      href="#services"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 border border-slate-400 text-slate-300 hover:bg-slate-800 bg-transparent"
                    >
                      View My Services
                    </a>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    {stats.map((stat, index) => (
                      <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center">
                        <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                        <div className="text-slate-400 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">About Me</h2>

                  <p className="text-lg text-slate-300 mb-6">
                    I'm Natnael Ayele, a virtual assistant with over one year of experience helping busy entrepreneurs
                    and growing businesses streamline their operations. I combine precision, speed, and clear
                    communication to free up your time and unlock momentum.
                  </p>

                  <p className="text-lg text-slate-300 mb-8">
                    From email management and calendar optimization to research, reporting, and client support, I deliver
                    reliable, professional outcomes you can count on. Whether you need ongoing support or a one-off
                    project, let's make your next week lighter and your goals closer.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-blue-600 text-white">
                          Email Management
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-600 text-white">
                          Web Research
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-600 text-white">
                          Project Management
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-600 text-white">
                          Email Marketing Support
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-600 text-white">
                          Lead Generation
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-slate-400 text-slate-300">
                          Google Workspace
                        </Badge>
                        <Badge variant="outline" className="border-slate-400 text-slate-300">
                          Microsoft Office
                        </Badge>
                        <Badge variant="outline" className="border-slate-400 text-slate-300">
                          Slack & Teams
                        </Badge>
                        <Badge variant="outline" className="border-slate-400 text-slate-300">
                          Trello
                        </Badge>
                        <Badge variant="outline" className="border-slate-400 text-slate-300">
                          Notion
                        </Badge>
                        <Badge variant="outline" className="border-slate-400 text-slate-300">
                          Zoom
                        </Badge>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-slate-700 border border-slate-600 p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center mb-6">
                      <Clock className="w-6 h-6 text-blue-400 mr-3" />
                      <span className="font-semibold text-white">Available 24/7</span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Response Time</span>
                        <span className="font-semibold text-green-400">{"< 2 hours"}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Project Completion</span>
                        <span className="font-semibold text-green-400">On Time</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Communication</span>
                        <span className="font-semibold text-green-400">Daily Updates</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">My Services</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Comprehensive virtual assistance solutions tailored to your business needs
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-slate-700 border-slate-600">
                      <CardContent className="p-8">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6"
                        >
                          {service.icon}
                        </motion.div>

                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>

                        <p className="text-slate-300 mb-6">{service.description}</p>

                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                              <span className="text-slate-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">My Recent Projects</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Showcasing a selection of my work and successful collaborations.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.a
                    key={index}
                    href={project.link} // Use the project link
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer" // Security best practice
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="block" // Make the entire motion.a block clickable
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-slate-700 border-slate-600">
                      <CardContent className="p-6">
                        <img
                          src={project.image || "/placeholder.svg"} // Use the actual image path
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-slate-300">{project.description}</p>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">My Certifications</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Showcasing my commitment to continuous learning and professional development.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-slate-700 border-slate-600">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <img
                          src={cert.image || "/placeholder.svg"}
                          alt={`${cert.title} logo`}
                          className="w-24 h-24 object-contain mb-4 rounded-full"
                        />
                        <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Hobbies Section */}
          <section id="hobbies" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">My Hobbies & Interests</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">A glimpse into what I enjoy outside of work.</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-slate-700 border-slate-600">
                      <CardContent className="p-6">
                        <div className="w-full h-48 overflow-hidden rounded-md mb-4">
                          <img
                            src={hobby.image || "/placeholder.svg"}
                            alt={hobby.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mr-4">
                            {hobby.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-white">{hobby.title}</h3>
                        </div>
                        <p className="text-slate-300">{hobby.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Client Testimonials</h2>
                <p className="text-xl text-slate-300">Here are some of the feedback from my clients:</p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-slate-700 border-slate-600">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          {testimonial.logo && (
                            <img
                              src={testimonial.logo || "/placeholder.svg"}
                              alt={`${testimonial.name} logo`}
                              className="w-12 h-12 object-contain mr-4 rounded-full"
                            />
                          )}
                          <div className="font-semibold text-white">{testimonial.name}</div>
                        </div>

                        <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Tools Section */}
          <section id="tools" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Try These Productivity Tools</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Experience the kind of tools and efficiency I bring to your business
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Productivity Calculator */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-slate-700 border-slate-600 h-full">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Calculator className="w-6 h-6 mr-2 text-blue-400" />
                        Productivity Calculator
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="emails" className="text-slate-300">
                          Daily Emails
                        </Label>
                        <Input
                          id="emails"
                          type="number"
                          placeholder="e.g., 50"
                          value={emailCount}
                          onChange={(e) => setEmailCount(e.target.value)}
                          className="bg-slate-800 border-slate-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="time" className="text-slate-300">
                          Hours Spent on Admin
                        </Label>
                        <Input
                          id="time"
                          type="number"
                          step="0.5"
                          placeholder="e.g., 3.5"
                          value={timeSpent}
                          onChange={(e) => setTimeSpent(e.target.value)}
                          className="bg-slate-800 border-slate-600 text-white"
                        />
                      </div>
                      <Button onClick={calculateSavings} className="w-full bg-blue-600 hover:bg-blue-700">
                        Calculate Savings
                      </Button>
                      {calculatedSavings > 0 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center p-4 bg-green-600/20 rounded-lg border border-green-600/30"
                        >
                          <p className="text-green-400 font-bold text-2xl">${calculatedSavings}/month</p>
                          <p className="text-slate-300 text-sm">Potential savings with VA help</p>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Pomodoro Timer */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-slate-700 border-slate-600 h-full">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Timer className="w-6 h-6 mr-2 text-purple-400" />
                        Pomodoro Timer
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-center">
                      <div className="text-6xl font-bold text-white">{formatTime(pomodoroTime)}</div>
                      <p className="text-slate-300">{isBreak ? "Break Time!" : "Focus Time"}</p>
                      <div className="flex gap-2 justify-center">
                        <Button onClick={() => setIsRunning(!isRunning)} className="bg-green-600 hover:bg-green-700">
                          {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                        <Button
                          onClick={() => {
                            setIsRunning(false)
                            setPomodoroTime(25 * 60)
                            setIsBreak(false)
                          }}
                          variant="outline"
                          className="border-slate-400 text-slate-300 hover:bg-slate-800"
                        >
                          <RotateCcw className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Task Tracker */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-slate-700 border-slate-600 h-full">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
                        Task Tracker
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add a task..."
                          value={newTask}
                          onChange={(e) => setNewTask(e.target.value)}
                          onKeyPress={(e) => e.key === "Enter" && addTask()}
                          className="bg-slate-800 border-slate-600 text-white"
                        />
                        <Button onClick={addTask} className="bg-blue-600 hover:bg-blue-700">
                          Add
                        </Button>
                      </div>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {tasks.map((task) => (
                          <motion.div
                            key={task.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              checked={task.completed}
                              onChange={() => toggleTask(task.id)}
                              className="rounded"
                            />
                            <span className={`text-slate-300 ${task.completed ? "line-through opacity-50" : ""}`}>
                              {task.text}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      <div className="text-sm text-slate-400">
                        {tasks.filter((t) => t.completed).length} of {tasks.length} completed
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Productivity Score */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="md:col-span-2 lg:col-span-1"
                >
                  <Card className="bg-slate-700 border-slate-600 h-full">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <BarChart3 className="w-6 h-6 mr-2 text-yellow-400" />
                        Productivity Score
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">{productivityScore[0]}%</div>
                        <p className="text-slate-300 text-sm">Current Efficiency</p>
                      </div>
                      <Slider
                        value={productivityScore}
                        onValueChange={setProductivityScore}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="text-center">
                        <p className="text-slate-300 text-sm">
                          {productivityScore[0] < 30 && "Room for improvement"}
                          {productivityScore[0] >= 30 && productivityScore[0] < 70 && "Good progress"}
                          {productivityScore[0] >= 70 && "Excellent productivity!"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quick Tips */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="md:col-span-2"
                >
                  <Card className="bg-slate-700 border-slate-600 h-full">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <FileText className="w-6 h-6 mr-2 text-orange-400" />
                        Productivity Tips
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                            <div>
                              <h4 className="text-white font-semibold">Email Batching</h4>
                              <p className="text-slate-300 text-sm">
                                Check emails 2-3 times daily instead of constantly
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                            <div>
                              <h4 className="text-white font-semibold">Time Blocking</h4>
                              <p className="text-slate-300 text-sm">Dedicate specific hours to similar tasks</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                            <div>
                              <h4 className="text-white font-semibold">Delegate Admin</h4>
                              <p className="text-slate-300 text-sm">Let a VA handle routine administrative tasks</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                            <div>
                              <h4 className="text-white font-semibold">Focus Sessions</h4>
                              <p className="text-slate-300 text-sm">Use 25-minute focused work periods</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-xl mb-12 text-slate-300">
                  Let's discuss how I can help streamline your business operations
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  >
                    <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-slate-300">natnaelayele80@gmail.com</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  >
                    <Phone className="w-8 h-8 mx-auto mb-4 text-green-400" />
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-slate-300">+251935189776</p>
                    <p className="text-slate-300">+251947626239</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  >
                    <MessageSquare className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                    <h3 className="font-semibold mb-2">Live Chat</h3>
                    <p className="text-slate-300">Telegram: @natnael80</p>
                    <p className="text-slate-300">Signal: natnael80.40</p>
                  </motion.div>
                </div>

                <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Free%20Virtual%20Assistant%20Consultation&details=Schedule%20a%20free%20consultation%20to%20discuss%20your%20virtual%20assistant%20needs%20with%20Natnael%20Ayele.&sf=true&output=xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    Schedule a Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-slate-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Natnael Ayele
                </div>
                <p className="text-slate-400 mb-6">Professional Virtual Assistant Services</p>
                <p className="text-slate-500 text-sm">© 2025 Natnael Ayele. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  )
}
