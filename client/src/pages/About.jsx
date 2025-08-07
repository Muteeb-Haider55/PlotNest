import React from "react";
import { FaBuilding, FaHome, FaChartLine, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Our Story */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-emerald-800 mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4">
              Founded in 2023, PlotNest began with a simple mission: to make
              property hunting easier, faster, and more transparent. What
              started as a small team of real estate enthusiasts has grown into
              a trusted platform connecting thousands of buyers and sellers
              every month.
            </p>
            <p className="text-gray-700">
              We leverage cutting-edge technology and local market expertise to
              provide our clients with the best possible real estate experience.
            </p>
          </div>
          <div className="bg-emerald-100 rounded-xl p-6 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Real estate team"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-emerald-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <FaBuilding className="text-4xl mx-auto mb-4 text-emerald-300" />
              <h3 className="text-3xl font-bold mb-2">10,000+</h3>
              <p className="text-emerald-100">Properties Listed</p>
            </div>
            <div className="p-4">
              <FaHome className="text-4xl mx-auto mb-4 text-emerald-300" />
              <h3 className="text-3xl font-bold mb-2">5,000+</h3>
              <p className="text-emerald-100">Happy Clients</p>
            </div>
            <div className="p-4">
              <FaChartLine className="text-4xl mx-auto mb-4 text-emerald-300" />
              <h3 className="text-3xl font-bold mb-2">98%</h3>
              <p className="text-emerald-100">Satisfaction Rate</p>
            </div>
            <div className="p-4">
              <FaUsers className="text-4xl mx-auto mb-4 text-emerald-300" />
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-emerald-100">Trusted Agents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-emerald-800 mb-12 text-center">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Transparency",
              description:
                "We believe in open communication and honest dealings with all our clients.",
              icon: "🔍",
            },
            {
              title: "Innovation",
              description:
                "Constantly improving our platform to serve you better with the latest technology.",
              icon: "💡",
            },
            {
              title: "Community",
              description:
                "Building relationships that go beyond transactions to create lasting value.",
              icon: "🤝",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <span className="text-4xl mb-4 block">{value.icon}</span>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team CTA */}
      <div className="bg-emerald-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-6">
            Meet Our Team
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Our team of experienced real estate professionals is dedicated to
            helping you find your dream property or get the best value for your
            current one.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
