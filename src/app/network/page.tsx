import { UserPlus, Users, Eye, MapPin, Building2, Search, Filter, MessageCircle, ExternalLink } from 'lucide-react';
import Image from 'next/image';

type Person = {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  connections: string;
  seed: string;
};

type Connection = {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  connected: string;
  seed: string;
};

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-[#0B0F1C] text-white pt-20 sm:pt-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-purple-600/20 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-600/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative space-y-8">
        {/* Left Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-[#0F1629] rounded-xl border border-gray-800/40 overflow-hidden">
              <div className="p-4 sm:p-6">
                <h2 className="text-lg font-semibold mb-6">Manage Network</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-2.5 sm:p-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span>Connections</span>
                    </div>
                    <span className="text-sm text-gray-400">500+</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-2.5 sm:p-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <UserPlus className="w-5 h-5 text-blue-400" />
                      <span>Invitations</span>
                    </div>
                    <span className="text-sm text-gray-400">50</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-2.5 sm:p-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Eye className="w-5 h-5 text-blue-400" />
                      <span>Profile Views</span>
                    </div>
                    <span className="text-sm text-gray-400">20</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#0F1629] rounded-xl border border-gray-800/40 overflow-hidden">
              <div className="p-4 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Industry</label>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/30">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      <select className="w-full bg-transparent text-sm focus:outline-none">
                        <option value="">All Industries</option>
                        <option value="tech">Technology</option>
                        <option value="finance">Finance</option>
                        <option value="healthcare">Healthcare</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Location</label>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/30">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <select className="w-full bg-transparent text-sm focus:outline-none">
                        <option value="">All Locations</option>
                        <option value="sf">San Francisco</option>
                        <option value="nyc">New York</option>
                        <option value="remote">Remote</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-6">
            {/* Search Bar */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search connections..."
                  className="w-full pl-10 pr-4 py-3 bg-[#0F1629] border border-gray-800/40 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              <button className="p-3 bg-[#0F1629] border border-gray-800/40 rounded-xl hover:bg-gray-800/30 transition-colors">
                <Filter className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Connection Cards */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#0F1629] p-6 rounded-xl border border-gray-800/40 text-center">
                  <h3 className="text-4xl font-bold text-purple-500 mb-2">500+</h3>
                  <p className="text-gray-400">Connections</p>
                </div>
                <div className="bg-[#0F1629] p-6 rounded-xl border border-gray-800/40 text-center">
                  <h3 className="text-4xl font-bold text-purple-500 mb-2">50</h3>
                  <p className="text-gray-400">Pending Invitations</p>
                </div>
                <div className="bg-[#0F1629] p-6 rounded-xl border border-gray-800/40 text-center">
                  <h3 className="text-4xl font-bold text-purple-500 mb-2">20</h3>
                  <p className="text-gray-400">Profile Views This Week</p>
                </div>
              </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search connections..."
            className="flex-1 p-3 border border-gray-800/50 bg-gray-900/30 backdrop-blur-md text-white placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3BFF]/50"
          />
          <button className="bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Search
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          <select className="p-2 border border-gray-800/50 bg-gray-900/30 backdrop-blur-md text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3BFF]/50">
            <option value="">Industry</option>
            <option value="tech">Technology</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
          </select>
          <select className="p-2 border border-gray-800/50 bg-gray-900/30 backdrop-blur-md text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3BFF]/50">
            <option value="">Location</option>
            <option value="sf">San Francisco</option>
            <option value="nyc">New York</option>
            <option value="remote">Remote</option>
          </select>
        </div>
      </div>

      {/* Connection Suggestions */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">People You <span className="bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] bg-clip-text text-transparent">May Know</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {([
            { id: 1, name: 'Sarah Wilson', role: 'Senior Product Manager', company: 'Tech Corp', location: 'San Francisco Bay Area', connections: '500+', seed: 'Sarah' },
            { id: 2, name: 'Michael Chen', role: 'Software Architect', company: 'InnovateTech', location: 'New York City', connections: '450+', seed: 'Michael' },
            { id: 3, name: 'Emily Rodriguez', role: 'AI Research Lead', company: 'AI Solutions', location: 'Boston', connections: '600+', seed: 'Emily' },
            { id: 4, name: 'David Kim', role: 'Product Designer', company: 'Design Co', location: 'Seattle', connections: '300+', seed: 'David' },
            { id: 5, name: 'Priya Patel', role: 'Data Scientist', company: 'DataTech', location: 'Austin', connections: '400+', seed: 'Priya' },
            { id: 6, name: 'James Wilson', role: 'Frontend Engineer', company: 'WebTech', location: 'Remote', connections: '350+', seed: 'James' },
          ] as Person[]).map((person) => (
            <div key={person.id} className="group bg-[#0F1629] rounded-xl border border-gray-800/40 p-4 hover:bg-[#151C34] transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-gray-700/30 overflow-hidden">
                    <Image 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4" 
                      alt="Profile"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-[#0F1629] group-hover:border-[#151C34] transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{person.name}</h3>
                      <p className="text-sm text-gray-400">{person.role} at {person.company}</p>
                      <p className="text-xs text-gray-500 mt-1">{person.location} · {person.connections} connections</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors group/btn">
                        <MessageCircle className="w-5 h-5 text-gray-400 group-hover/btn:text-blue-400 transition-colors" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors group/btn">
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover/btn:text-blue-400 transition-colors" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <button className="px-3 sm:px-4 py-1.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium rounded-lg transition-colors">+ Connect</button>
                    <button className="px-3 sm:px-4 py-1.5 border border-gray-700/30 hover:bg-gray-800/30 text-gray-400 text-xs sm:text-sm font-medium rounded-lg transition-colors">View Profile</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Network */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Your <span className="bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] bg-clip-text text-transparent">Network</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {([
            { id: 1, name: 'John Smith', role: 'Software Engineer', company: 'Tech Corp', location: 'San Francisco Bay Area', connected: 'Jan 2024', seed: 'John' },
            { id: 2, name: 'Lisa Park', role: 'UX Designer', company: 'Design Hub', location: 'Los Angeles', connected: 'Feb 2024', seed: 'Lisa' },
            { id: 3, name: 'Alex Thompson', role: 'Product Manager', company: 'Product Co', location: 'Chicago', connected: 'Mar 2024', seed: 'Alex' },
          ] as Connection[]).map((connection) => (
            <div key={connection.id} className="group bg-[#0F1629] rounded-xl border border-gray-800/40 p-3 sm:p-4 hover:bg-[#151C34] transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-gray-700/30 overflow-hidden">
                    <Image 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4" 
                      alt="Profile"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-[#0F1629] group-hover:border-[#151C34] transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-blue-400 transition-colors">{connection.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-400">{connection.role} at {connection.company}</p>
                      <p className="text-xs text-gray-500 mt-0.5 sm:mt-1">{connection.location} · Connected since {connection.connected}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors group/btn">
                        <MessageCircle className="w-5 h-5 text-gray-400 group-hover/btn:text-blue-400 transition-colors" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors group/btn">
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover/btn:text-blue-400 transition-colors" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <button className="px-3 sm:px-4 py-1.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium rounded-lg transition-colors">Message</button>
                    <button className="px-3 sm:px-4 py-1.5 border border-gray-700/30 hover:bg-gray-800/30 text-gray-400 text-xs sm:text-sm font-medium rounded-lg transition-colors">View Profile</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
