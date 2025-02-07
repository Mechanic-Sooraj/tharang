import React from 'react';
import { Calendar, MapPin, Users, Sparkles, ChevronRight, Github, Linkedin, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-950">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
            alt="Tech background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl font-bold text-white mb-6">TECHFEST 2024</h1>
          <p className="text-xl text-purple-200 mb-8">Innovate • Create • Elevate</p>
          <div className="flex gap-4 justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-400 mb-2" />
              <p className="text-white">March 15-17</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <MapPin className="w-6 h-6 text-purple-400 mb-2" />
              <p className="text-white">Main Campus</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Users className="w-6 h-6 text-purple-400 mb-2" />
              <p className="text-white">5000+ Participants</p>
            </div>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 mx-auto">
            Register Now <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Events Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hackathon",
                desc: "24-hour coding challenge",
                icon: <Sparkles className="w-6 h-6" />,
                prize: "₹50,000"
              },
              {
                title: "Tech Talks",
                desc: "Industry experts sharing insights",
                icon: <Users className="w-6 h-6" />,
                prize: "Certificates"
              },
              {
                title: "Project Expo",
                desc: "Showcase your innovations",
                icon: <Sparkles className="w-6 h-6" />,
                prize: "₹30,000"
              }
            ].map((event, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all">
                <div className="text-purple-400 mb-4">{event.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-purple-200 mb-4">{event.desc}</p>
                <p className="text-sm text-purple-400">Prize Pool: {event.prize}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">TECHFEST 2024</h3>
              <p className="text-purple-200">The Ultimate Tech Festival</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-purple-400 hover:text-purple-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-purple-400 hover:text-purple-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-purple-400 hover:text-purple-300">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;