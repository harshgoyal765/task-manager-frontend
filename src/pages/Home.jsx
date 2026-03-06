import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-200 via-white to-indigo-200">
      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Manage Your
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
              Daily Tasks Smartly
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            A simple and powerful productivity tool to organize tasks, boost
            focus and track your progress everyday.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/dashboard"
              className="px-7 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition shadow-md"
            >
              Open Dashboard
            </Link>

            <Link
              to="/tasks"
              className="px-7 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition"
            >
              View Tasks
            </Link>
          </div>
        </div>

        <img
          src={hero}
          alt="hero"
          className="w-112.5 mt-14 md:mt-0 animate-pulse"
        />
      </section>

      {/* STATS */}

      <section className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8 pb-20">
        <div className="bg-linear-to-r from-purple-400 to-white p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-2">
          <h2 className="text-4xl font-bold text-indigo-800">10K+</h2>
          <p className="text-gray-600 mt-2">Tasks Managed</p>
        </div>

        <div className="bg-linear-to-r from-purple-400 to-white p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-2">
          <h2 className="text-4xl font-bold text-purple-900">5K+</h2>
          <p className="text-gray-600 mt-2">Active Users</p>
        </div>

        <div className="bg-linear-to-r from-purple-400 to-white p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-2">
          <h2 className="text-4xl font-bold text-pink-600">99%</h2>
          <p className="text-gray-600 mt-2">Productivity Boost</p>
        </div>
      </section>

      {/* FEATURES */}

      <section className="py-24 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Why Choose Our Task Manager
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-14 px-8">
          <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-xl transition hover:scale-105">
            <h3 className="text-xl font-semibold text-indigo-600">
              Easy Task Creation
            </h3>

            <p className="text-gray-600 mt-3">
              Add tasks quickly and organize them efficiently.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-xl transition hover:scale-105">
            <h3 className="text-xl font-semibold text-purple-600">
              Smart Progress Tracking
            </h3>

            <p className="text-gray-600 mt-3">
              Monitor completed and pending tasks easily.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-xl transition hover:scale-105">
            <h3 className="text-xl font-semibold text-pink-600">
              Fast & Responsive
            </h3>

            <p className="text-gray-600 mt-3">
              Optimized UI for desktop and mobile experience.
            </p>
          </div>
        </div>
      </section>

      {/* TASK PREVIEW */}

      <section className="py-24 bg-linear-to-b from-purple-200 to-purple-50">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Task Preview
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-14 px-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition hover:-translate-y-2">
            <h3 className="font-semibold text-lg text-gray-800">UI Design</h3>

            <p className="text-gray-500 mt-2">Create landing page layout</p>

            <span className="text-green-600 text-sm font-semibold">
              Completed
            </span>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition hover:-translate-y-2">
            <h3 className="font-semibold text-lg text-gray-800">Backend API</h3>

            <p className="text-gray-500 mt-2">Connect database with tasks</p>

            <span className="text-yellow-600 text-sm font-semibold">
              Pending
            </span>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition hover:-translate-y-2">
            <h3 className="font-semibold text-lg text-gray-800">
              Authentication
            </h3>

            <p className="text-gray-500 mt-2">Implement login & signup</p>

            <span className="text-red-500 text-sm font-semibold">
              In Progress
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-linear-to-t from-purple-200 to-purple-50 text-center py-24">
        <h2 className="text-4xl font-bold text-gray-800">
          Start Organizing Your Work Today
        </h2>

        <p className="text-gray-600 mt-4">
          Stay productive and achieve more with smart task management.
        </p>

        <Link
          to="/dashboard"
          className="inline-block mt-8 px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition shadow-lg"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
