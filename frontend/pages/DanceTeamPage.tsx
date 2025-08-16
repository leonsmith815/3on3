import React from 'react';
import { Music, Star, Calendar, Users } from 'lucide-react';

export function DanceTeamPage() {
  const danceTeamMembers = [
    {
      id: 1,
      name: 'Sophia Martinez',
      position: 'Captain',
      experience: '5 years',
      specialty: 'Hip-Hop & Contemporary',
      image: '/api/placeholder/150/150'
    },
    {
      id: 2,
      name: 'Emma Johnson',
      position: 'Co-Captain',
      experience: '4 years',
      specialty: 'Jazz & Lyrical',
      image: '/api/placeholder/150/150'
    },
    {
      id: 3,
      name: 'Ava Williams',
      position: 'Performer',
      experience: '3 years',
      specialty: 'Ballet & Modern',
      image: '/api/placeholder/150/150'
    },
    {
      id: 4,
      name: 'Isabella Brown',
      position: 'Performer',
      experience: '2 years',
      specialty: 'Commercial & Pop',
      image: '/api/placeholder/150/150'
    },
    {
      id: 5,
      name: 'Mia Davis',
      position: 'Performer',
      experience: '3 years',
      specialty: 'Hip-Hop & Street',
      image: '/api/placeholder/150/150'
    },
    {
      id: 6,
      name: 'Charlotte Wilson',
      position: 'Performer',
      experience: '2 years',
      specialty: 'Contemporary & Acro',
      image: '/api/placeholder/150/150'
    }
  ];

  const upcomingPerformances = [
    {
      date: '2024-02-15',
      event: 'Eagles vs Longhorns Halftime Show',
      venue: 'Phoenix Arena',
      theme: 'Fire & Ice'
    },
    {
      date: '2024-02-22',
      event: 'All-Star Weekend Performance',
      venue: 'Convention Center',
      theme: 'U3BL Celebration'
    },
    {
      date: '2024-03-01',
      event: 'Championship Opening Ceremony',
      venue: 'Main Arena',
      theme: 'Champions Rise'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F3] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0A1D37] mb-4">U3BL Dance Team</h1>
          <p className="text-xl text-gray-600 mb-6">
            Bringing energy, passion, and entertainment to every game
          </p>
          <div className="bg-gradient-to-r from-[#FF8500] to-[#E63946] text-white p-8 rounded-lg">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <Music size={48} className="mx-auto mb-2" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-90">Performances</div>
              </div>
              <div className="text-center">
                <Users size={48} className="mx-auto mb-2" />
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm opacity-90">Team Members</div>
              </div>
              <div className="text-center">
                <Star size={48} className="mx-auto mb-2" />
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm opacity-90">Years Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#0A1D37] mb-8 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {danceTeamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A1D37] mb-2">{member.name}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Position:</span>
                      <span className="font-semibold text-[#FF8500]">{member.position}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-medium">{member.experience}</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <span className="text-sm text-gray-600">Specialty:</span>
                      <p className="font-medium text-[#0A1D37]">{member.specialty}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Performances */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#0A1D37] mb-8 text-center">Upcoming Performances</h2>
          <div className="space-y-6">
            {upcomingPerformances.map((performance, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0A1D37] mb-2">{performance.event}</h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {new Date(performance.date).toLocaleDateString()}
                      </div>
                      <div>📍 {performance.venue}</div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="bg-gradient-to-r from-[#FF8500] to-[#E63946] text-white px-4 py-2 rounded-lg text-center">
                      <div className="font-semibold">Theme</div>
                      <div className="text-sm">{performance.theme}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#0A1D37] mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              The U3BL Dance Team is dedicated to bringing high-energy entertainment and 
              athletic artistry to every basketball game. We combine technical skill with 
              creative choreography to enhance the fan experience and represent the spirit 
              of the league.
            </p>
            <p className="text-gray-700">
              Our team members are accomplished dancers from various backgrounds, united 
              by their passion for performance and commitment to excellence.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#0A1D37] mb-4">Performance Highlights</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Star className="text-[#FF8500] mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-700">Halftime shows at all home games</span>
              </li>
              <li className="flex items-start">
                <Star className="text-[#FF8500] mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-700">Special performances during timeouts</span>
              </li>
              <li className="flex items-start">
                <Star className="text-[#FF8500] mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-700">Community event appearances</span>
              </li>
              <li className="flex items-start">
                <Star className="text-[#FF8500] mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-700">Championship and playoff entertainment</span>
              </li>
              <li className="flex items-start">
                <Star className="text-[#FF8500] mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-700">Fan interaction and photo opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Join the Team */}
        <div className="bg-gradient-to-r from-[#0A1D37] to-[#FF8500] text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Joining?</h2>
          <p className="text-xl mb-6 opacity-90">
            We hold auditions annually for new team members
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Requirements</h3>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• 2+ years dance experience</li>
                <li>• Strong performance skills</li>
                <li>• Team player attitude</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Audition Process</h3>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• Technical skill assessment</li>
                <li>• Choreography learning</li>
                <li>• Performance evaluation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Season Commitment</h3>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• 3-4 practices per week</li>
                <li>• All home games</li>
                <li>• Special events</li>
              </ul>
            </div>
          </div>
          <button className="bg-white text-[#0A1D37] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Learn More About Auditions
          </button>
        </div>
      </div>
    </div>
  );
}
