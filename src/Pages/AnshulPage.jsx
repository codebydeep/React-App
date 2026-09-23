
import React from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const AnshulPage = () => {
  return (
    <div className="min-h-screen bg-[#0f1115] text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-orange-500 flex items-center justify-center text-3xl font-bold shadow-lg shadow-orange-500/20">
              A
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Anshul
              </h1>
              <p className="text-gray-400 mt-1">
                Software Developer
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition">
              <Mail size={18} />
              Contact
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 hover:border-orange-500 transition">
              <Github size={18} />
              GitHub
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Profile Card */}
          <div className="lg:col-span-1 bg-[#16191f] border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="text-orange-500" />
              <h2 className="text-xl font-semibold">Profile</h2>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="text-orange-500" />
                <span>anshul@example.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-orange-500" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} className="text-orange-500" />
                <span>India</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Linkedin size={18} className="text-orange-500" />
                <span>LinkedIn Profile</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="lg:col-span-2 bg-[#16191f] border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <Code2 className="text-orange-500" />
              <h2 className="text-xl font-semibold">About Me</h2>
            </div>

            <p className="text-gray-400 leading-7">
              Hello! I'm Anshul, a passionate software developer who enjoys
              building modern web applications and learning new technologies.
              I focus on writing clean, maintainable code and continuously
              improving my technical and communication skills.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-7">
              <div className="bg-[#0f1115] rounded-xl p-4">
                <p className="text-2xl font-bold text-orange-500">5+</p>
                <p className="text-sm text-gray-500">Projects</p>
              </div>

              <div className="bg-[#0f1115] rounded-xl p-4">
                <p className="text-2xl font-bold text-orange-500">10+</p>
                <p className="text-sm text-gray-500">Technologies</p>
              </div>

              <div className="bg-[#0f1115] rounded-xl p-4">
                <p className="text-2xl font-bold text-orange-500">100+</p>
                <p className="text-sm text-gray-500">Problems Solved</p>
              </div>

              <div className="bg-[#0f1115] rounded-xl p-4">
                <p className="text-2xl font-bold text-orange-500">∞</p>
                <p className="text-sm text-gray-500">Learning</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-2 bg-[#16191f] border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-orange-500" />
              <h2 className="text-xl font-semibold">Skills</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Java",
                "Spring Boot",
                "React",
                "JavaScript",
                "Node.js",
                "Express",
                "MongoDB",
                "MySQL",
                "Docker",
                "Kafka",
                "Git",
                "REST API",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-[#0f1115] border border-gray-700 text-gray-300 hover:border-orange-500 hover:text-orange-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-[#16191f] border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-orange-500" />
              <h2 className="text-xl font-semibold">Education</h2>
            </div>

            <h3 className="font-semibold">
              B.Tech – Information Technology
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Engineering Graduate
            </p>

            <p className="text-orange-500 text-sm mt-3">
              2026
            </p>
          </div>

          {/* Experience */}
          <div className="lg:col-span-3 bg-[#16191f] border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-orange-500" />
              <h2 className="text-xl font-semibold">Experience & Projects</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">

              <div className="bg-[#0f1115] rounded-xl p-5 border border-gray-800">
                <h3 className="font-semibold">Full Stack Development</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Building responsive applications using modern frontend and
                  backend technologies.
                </p>
              </div>

              <div className="bg-[#0f1115] rounded-xl p-5 border border-gray-800">
                <h3 className="font-semibold">Backend Development</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Developing REST APIs, authentication systems and
                  microservice-based applications.
                </p>
              </div>

              <div className="bg-[#0f1115] rounded-xl p-5 border border-gray-800">
                <h3 className="font-semibold">Learning & Growth</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Continuously learning technologies such as Kafka, Docker and
                  cloud-native development.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm mt-8">
          © 2026 Anshul. All rights reserved.
        </div>

      </div>
    </div>
  );
};

export default AnshulPage;

