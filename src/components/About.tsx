import React from 'react';
import { Target, Users, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Our Mission',
      description: 'To connect students with exciting opportunities and foster a vibrant campus community through engaging departmental events.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Driven',
      description: 'Built by students, for students. We understand what makes college events meaningful and impactful.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We partner with departments to bring you high-quality workshops, competitions, and cultural events.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Stay ahead with cutting-edge events covering the latest trends in technology, arts, and sciences.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Events</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your gateway to discovering and participating in the most exciting events across all college departments.
          </p>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-orange-600 text-white p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-black rounded-3xl p-12 text-center border border-gray-800">
          <h3 className="text-3xl font-bold text-white mb-6">Join Our Community</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking to learn new skills, network with peers, or showcase your talents, this is your platform for growth.
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500">500+</div>
              <div className="text-gray-400">Students Registered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500">50+</div>
              <div className="text-gray-400">Events Hosted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500">8</div>
              <div className="text-gray-400">Departments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;