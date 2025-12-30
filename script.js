import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Star, 
  Clock, 
  List, 
  Target, 
  FileText, 
  Folder, 
  Settings, 
  Search, 
  Plus, 
  Bell, 
  ChevronDown, 
  MoreHorizontal,
  ArrowUpRight,
  ArrowRight,
  Filter,
  Users
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for cleaner class names
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Mock Data
const barData = [
  { name: 'Be', value: 40, fill: '#3b82f6' },
  { name: 'G', value: 65, fill: '#fbbf24' },
  { name: 'Ig', value: 35, fill: '#ec4899' },
  { name: 'Db', value: 85, fill: '#ea4c89' },
];

const lineData = [
  { name: 'W1', value: 4000 },
  { name: 'W2', value: 3000 },
  { name: 'W3', value: 5000 },
  { name: 'W4', value: 2780 },
  { name: 'W5', value: 6890 },
  { name: 'W6', value: 4390 },
  { name: 'W7', value: 5490 },
  { name: 'W8', value: 3490 },
  { name: 'W9', value: 6000 },
  { name: 'W10', value: 5000 },
  { name: 'W11', value: 7000 },
];

// Reusable Components
const Avatar = ({ src, fallback, size = "sm" }) => (
  <div className={cn("rounded-full overflow-hidden border-2 border-white", 
    size === "sm" ? "w-6 h-6" : "w-10 h-10"
  )}>
    <img src={src} alt="avatar" className="w-full h-full object-cover" />
  </div>
);

const Card = ({ children, className, dark = false }) => (
  <div className={cn(
    "p-5 rounded-[24px] transition-all duration-200 hover:shadow-lg",
    dark ? "bg-[#18181b] text-white" : "bg-white text-gray-800 shadow-[0_2px_20px_rgba(0,0,0,0.02)]",
    className
  )}>
    {children}
  </div>
);

const IconButton = ({ icon: Icon, active }) => (
  <button className={cn(
    "p-2 rounded-xl transition-colors",
    active ? "bg-rose-500 text-white shadow-lg shadow-rose-200" : "text-gray-400 hover:bg-gray-100"
  )}>
    <Icon size={20} />
  </button>
);

const SidebarItem = ({ icon: Icon, label, active, count }) => (
  <div className={cn(
    "flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer group transition-all",
    active ? "bg-white shadow-sm" : "hover:bg-gray-100"
  )}>
    <div className="flex items-center gap-3">
      <Icon size={18} className={cn(active ? "text-rose-500" : "text-gray-400 group-hover:text-gray-600")} />
      <span className={cn("text-sm font-medium", active ? "text-gray-900" : "text-gray-500")}>{label}</span>
    </div>
    {count && (
      <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">{count}</span>
    )}
  </div>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('revenue');

  return (
    <div className="flex h-screen bg-[#F3F4F6] p-4 font-sans text-gray-800 overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-64 flex flex-col gap-6 pr-4 overflow-y-auto hide-scrollbar">
        {/* Logo Area */}
        <div className="px-3 flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">C</div>
          <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
            Codename.com <ChevronDown size={14} />
          </div>
        </div>

        {/* Navigation Groups */}
        <div className="space-y-1">
          <SidebarItem icon={Star} label="Starred" />
          <SidebarItem icon={Clock} label="Recent" />
          <SidebarItem icon={List} label="Sales list" />
          <SidebarItem icon={Target} label="Goals" />
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
        </div>

        <div className="space-y-1">
          <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Codename</div>
          <SidebarItem icon={Folder} label="Codename" />
        </div>

        <div className="space-y-1">
          <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Shared with me</div>
          <SidebarItem icon={Folder} label="Cargo2go" />
          <SidebarItem icon={Folder} label="Cloudz3r" count={2} />
          <SidebarItem icon={Folder} label="Idioma" />
          <SidebarItem icon={Folder} label="Syllables" />
        </div>

        <div className="space-y-1">
          <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Reports</div>
          <SidebarItem icon={FileText} label="Share with me" />
          <div className="pl-4 border-l-2 border-gray-200 ml-4 space-y-1 my-1">
            <div className="px-3 py-1 text-sm text-gray-500 hover:text-gray-800 cursor-pointer">Deals by user</div>
            <div className="px-3 py-1 text-sm text-gray-500 hover:text-gray-800 cursor-pointer">Deal duration</div>
          </div>
          <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-4">My reports</div>
          <div className="pl-4 border-l-2 border-gray-200 ml-4 space-y-1 my-1">
             <div className="px-3 py-1 text-sm text-gray-500 cursor-pointer">Emails received</div>
             <div className="px-3 py-1 text-sm text-gray-500 cursor-pointer">Deal duration</div>
             <div className="px-3 py-1 text-sm text-rose-500 font-medium cursor-pointer">New report</div>
             <div className="px-3 py-1 text-sm text-gray-500 cursor-pointer flex justify-between">
                Analytics <span className="bg-rose-500 text-white text-[10px] px-1.5 rounded">7</span>
             </div>
          </div>
        </div>
        
        <div className="mt-auto flex flex-col gap-2">
           <IconButton icon={Settings} />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-[#F9FAFB] rounded-[32px] p-6 overflow-y-auto shadow-sm relative flex flex-col gap-6">
        
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder='Try searching "insights"' 
              className="w-full bg-white pl-10 pr-4 py-2.5 rounded-full text-sm outline-none shadow-sm focus:ring-2 focus:ring-rose-100"
            />
          </div>
          
          <div className="flex items-center gap-3">
             <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50"><Plus size={20} /></button>
             <div className="flex -space-x-2">
                <Avatar src="https://i.pravatar.cc/150?u=a" />
                <Avatar src="https://i.pravatar.cc/150?u=b" />
                <Avatar src="https://i.pravatar.cc/150?u=c" />
             </div>
             <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold">C</div>
             <button className="ml-4 p-2 hover:bg-white rounded-full transition-colors">
                <Settings size={20} className="text-gray-500" />
             </button>
             <button className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-rose-200">
                <Plus size={20} />
             </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="space-y-6">
          
          {/* Title Row */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">New report</h1>
            <div className="flex items-center gap-3 bg-white p-1 rounded-full shadow-sm">
                <div className="flex items-center gap-2 px-3 py-1.5">
                   <div className="w-8 h-4 bg-gray-800 rounded-full relative cursor-pointer">
                      <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                   </div>
                   <span className="text-xs font-medium text-gray-600">Timeframe</span>
                </div>
                <div className="px-4 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-600 flex items-center gap-2">
                   Sep 1 – Nov 30, 2023 <ChevronDown size={14} />
                </div>
            </div>
          </div>

          {/* Top KPI Section */}
          <div className="grid grid-cols-12 gap-6">
            
            {/* Revenue Big Card */}
            <div className="col-span-12 xl:col-span-4">
              <div className="mb-1">
                <h2 className="text-lg font-bold text-gray-800">Revenue</h2>
              </div>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-4xl font-extrabold text-gray-900 tracking-tight">$528,976<span className="text-gray-400">.82</span></span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                  <ArrowUpRight size={12} /> 7.9%
                </span>
                <span className="bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-md">
                   $27,335.09
                </span>
              </div>
              <p className="text-xs text-gray-500">vs prev. $501,641.73 Jun 1 - Aug 31, 2023 <ChevronDown size={12} className="inline" /></p>
              
              <div className="mt-8 flex items-center justify-between gap-4 text-xs font-medium text-gray-600">
                  <div className="flex items-center gap-2"><Avatar src="https://i.pravatar.cc/150?u=1" size="sm" /> $209,633 <span className="text-gray-400">39.63%</span></div>
                  <div className="flex items-center gap-2"><Avatar src="https://i.pravatar.cc/150?u=2" size="sm" /> $156,841 <span className="text-gray-400">29.65%</span></div>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="col-span-12 xl:col-span-8 grid grid-cols-1 md:grid-cols-4 gap-4">
               {/* Top Sales */}
               <Card className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-gray-500 font-medium">Top sales</span>
                    <h3 className="text-2xl font-bold mt-1">72</h3>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                       <Avatar src="https://i.pravatar.cc/150?u=mikasa" />
                       <span className="text-sm font-semibold">Mikasa</span>
                    </div>
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>
               </Card>

               {/* Best Deal - Dark */}
               <Card dark className="flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                        <span className="text-xs text-gray-400 font-medium">Best deal</span>
                        <div className="ml-auto"><Star size={14} className="text-gray-500" /></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mt-2">$42,300</h3>
                    <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-gray-400">Rolf Inc.</span>
                        <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center"><ChevronDown size={14} /></div>
                    </div>
                  </div>
               </Card>
               
               {/* Small KPIs */}
               <div className="flex flex-col gap-4">
                  <Card className="flex-1 py-3 px-4 flex flex-col justify-center items-center border border-rose-100">
                     <span className="text-xs text-gray-500 mb-1">Deals</span>
                     <span className="text-xl font-bold text-gray-800">256</span>
                     <span className="text-[10px] text-gray-400 flex items-center mt-1"><ArrowRight size={10} /> 5</span>
                  </Card>
                  <Card className="flex-1 py-3 px-4 flex flex-col justify-center items-center border border-rose-200 bg-rose-50/30">
                     <span className="text-xs text-rose-600 font-medium mb-1">Value</span>
                     <span className="bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full mb-1">528k</span>
                     <span className="text-[10px] text-gray-500 flex items-center gap-1"><ArrowUpRight size={10} /> 7.9%</span>
                  </Card>
               </div>
               
               <div className="flex flex-col gap-4">
                  <Card className="flex-1 py-3 px-4 flex flex-col justify-center items-center">
                     <span className="text-xs text-gray-500 mb-1">Win rate</span>
                     <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full mb-1">44%</span>
                     <span className="text-[10px] text-gray-400 flex items-center mt-1"><ArrowUpRight size={10} /> 1.2%</span>
                  </Card>
                  <button className="bg-[#111827] text-white rounded-[20px] text-xs font-semibold h-full">Details</button>
               </div>
            </div>
          </div>

          {/* Middle Row: Filters, Chart, Table */}
          <div className="grid grid-cols-12 gap-6 h-full">
            
            {/* Left Column: Platform List */}
            <div className="col-span-12 md:col-span-3">
               <Card className="h-full">
                  <div className="flex justify-between items-center mb-6">
                     <div className="flex gap-2">
                        <MoreHorizontal size={20} className="text-gray-400" />
                     </div>
                     <button className="flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                        Filters <Filter size={12} />
                     </button>
                  </div>
                  
                  <div className="space-y-5">
                     {[
                        { name: 'Dribbble', val: '$227,459', pct: '43%', color: 'text-rose-500', icon: '🏀' },
                        { name: 'Instagram', val: '$142,823', pct: '27%', color: 'text-pink-500', icon: '📷' },
                        { name: 'Behance', val: '$89,935', pct: '11%', color: 'text-blue-500', icon: 'Be' },
                        { name: 'Google', val: '$37,028', pct: '7%', color: 'text-green-500', icon: 'G' },
                     ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between group cursor-pointer">
                           <div className="flex items-center gap-3">
                              <div className={cn("w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 text-sm", item.color)}>
                                 {item.icon === 'Be' ? <span className="font-bold">Bē</span> : item.icon}
                              </div>
                              <span className="text-sm font-medium text-gray-600">{item.name}</span>
                           </div>
                           <div className="flex items-center gap-3">
                              <span className="text-sm font-bold text-gray-800">{item.val}</span>
                              <span className="text-xs text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded">{item.pct}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </Card>
            </div>

            {/* Center Column: Bar Chart */}
            <div className="col-span-12 md:col-span-4">
              <Card className="h-full flex flex-col">
                  <div className="flex justify-end mb-4">
                     <button className="flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                        Filters <Filter size={12} />
                     </button>
                  </div>
                  
                  <div className="flex-1 w-full min-h-[200px]">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData} barSize={36}>
                           <CartesianGrid vertical={false} stroke="#f3f4f6" strokeDasharray="3 3" />
                           <Bar dataKey="value" radius={[8, 8, 8, 8]} background={{ fill: '#f9fafb', radius: 8 }} />
                        </BarChart>
                     </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-2 text-sm font-medium text-gray-700 flex items-center gap-1">
                     Deals amount <ChevronDown size={14} />
                  </div>
                  <div className="text-xs text-gray-400">by referrer category</div>
              </Card>
            </div>

            {/* Right Column: Leaderboard & Combined Stats */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
               {/* Leaderboard Table */}
               <Card className="py-4 px-6">
                  <div className="flex text-[10px] text-gray-400 uppercase tracking-wider mb-2 font-semibold">
                     <div className="w-1/3">Sales</div>
                     <div className="w-1/4">Revenue</div>
                     <div className="w-1/6">Leads</div>
                     <div className="w-1/6">KPI</div>
                     <div className="w-1/6 text-right">W/L</div>
                  </div>
                  
                  <div className="space-y-4">
                     <div className="flex items-center text-sm">
                        <div className="w-1/3 flex items-center gap-2">
                           <Avatar src="https://i.pravatar.cc/150?u=armin" size="sm" />
                           <span className="font-semibold text-gray-700">Armin A.</span>
                        </div>
                        <div className="w-1/4 text-gray-600 font-medium">$209,633</div>
                        <div className="w-1/6 flex items-center gap-1"><span className="bg-gray-800 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">41</span> <span className="text-xs text-gray-400">118</span></div>
                        <div className="w-1/6 text-gray-600 text-xs">0.84</div>
                        <div className="w-1/6 text-right flex items-center justify-end gap-1"><span className="bg-black text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">31%</span> <span className="bg-gray-800 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">12</span> <span className="text-xs text-gray-400">29</span></div>
                     </div>
                     
                     <div className="flex items-center text-sm">
                        <div className="w-1/3 flex items-center gap-2">
                           <Avatar src="https://i.pravatar.cc/150?u=mikasa" size="sm" />
                           <span className="font-semibold text-gray-700">Mikasa A.</span>
                        </div>
                        <div className="w-1/4 text-gray-600 font-medium">$156,841</div>
                        <div className="w-1/6 flex items-center gap-1"><span className="bg-gray-800 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">54</span> <span className="text-xs text-gray-400" >103</span></div>
                        <div className="w-1/6 text-gray-600 text-xs" style={top1rem}>0.89</div>
                        <div className="w-1/6 text-right flex items-center justify-end gap-1"><span className="text-gray-600 text-[10px]">39%</span> <span className="bg-black text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">21</span> <span className="bg-gray-100 text-gray-500 text-[10px] rounded-full w-5 h-5 flex items-center justify-center">33</span></div>
                     </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4 overflow-x-auto hide-scrollbar">
                     {["Top sales 👍", "Sales streak 🔥", "Top review 🤙"].map((tag, i) => (
                        <span key={i} className="text-[10px] font-medium bg-gradient-to-r from-gray-50 to-white border border-gray-100 px-3 py-1.5 rounded-full shadow-sm text-gray-600 whitespace-nowrap">{tag}</span>
                     ))}
                  </div>
               </Card>

               {/* Stats Block */}
               <Card className="bg-gradient-to-br from-rose-50 to-white p-5">
                  <div className="flex justify-between items-center mb-4">
                     <span className="text-xs font-semibold text-gray-600">Work with platforms</span>
                     <div className="flex gap-2">
                        <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full">3</span>
                        <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">$156,841</span>
                     </div>
                  </div>
                  
                  <div className="flex gap-4">
                     <div className="flex-1 bg-white p-3 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                           <div className="w-6 h-6 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">🏀</div>
                           <span className="text-xs font-bold text-gray-700">Dribbble</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-800">45.3% <span className="text-gray-300 text-lg">$71,048</span></div>
                     </div>
                     
                     <div className="flex-1 space-y-2">
                         <div className="bg-white p-2 rounded-xl shadow-sm flex items-center justify-between">
                            <div className="flex items-center gap-2"><span className="text-pink-500">📷</span> <span className="text-xs font-medium">Instagram</span></div>
                         </div>
                         <div className="bg-white p-2 rounded-xl shadow-sm flex items-center justify-between opacity-80">
                            <div className="flex items-center gap-2"><span className="text-green-500">G</span> <span className="text-xs font-medium">Google</span></div>
                            <span className="text-[10px] text-gray-400 line-through">$22,114</span>
                         </div>
                     </div>
                  </div>
               </Card>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-12 gap-6">
            
            {/* Red Card */}
            <div className="col-span-12 md:col-span-4">
               <div className="bg-[#E11D48] text-white rounded-[24px] p-6 h-full relative overflow-hidden">
                  <div className="flex items-center justify-between mb-6 z-10 relative">
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                           <span className="text-lg">🏀</span>
                        </div>
                        <div>
                           <div className="text-xs text-white/70">Platform value</div>
                           <div className="font-semibold text-sm">Dribbble <ChevronDown size={12} className="inline" /></div>
                        </div>
                     </div>
                     <div className="flex bg-black/20 rounded-full p-1 text-[10px] font-medium">
                        <div className="bg-black text-white px-3 py-1 rounded-full">Revenue</div>
                        <div className="px-3 py-1 text-white/70">Leads</div>
                        <div className="px-3 py-1 text-white/70">W/L</div>
                     </div>
                  </div>

                  <div className="flex items-end gap-1 mb-8 z-10 relative">
                      <div className="w-full h-32 flex items-end justify-between px-2">
                         {/* Mock Bars using divs for specific styling */}
                         <div className="w-8 bg-white/20 rounded-t-lg h-[40%] relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100">$6,901</span>
                         </div>
                         <div className="w-8 bg-white/20 rounded-t-lg h-[60%] relative">
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 text-center bg-rose-400 text-[9px] rounded py-0.5">$11,035</div>
                         </div>
                         <div className="w-8 bg-white/40 rounded-t-lg h-[80%]"></div>
                         <div className="w-8 bg-white/20 rounded-t-lg h-[50%]"></div>
                         <div className="w-8 bg-white/20 rounded-t-lg h-[70%] relative">
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 text-center bg-rose-400 text-[9px] rounded py-0.5">$9,288</div>
                         </div>
                         <div className="w-8 bg-white/20 rounded-t-lg h-[45%]"></div>
                      </div>
                  </div>

                  {/* Red Card Footer */}
                  <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm z-10 relative">
                     <div className="text-xs text-white/60 mb-1">Average monthly</div>
                     <div className="flex justify-between items-end">
                        <div>
                           <div className="text-sm font-bold">$18,552</div>
                           <div className="text-[10px] text-white/60">Leads <span className="text-white">373</span> 97/276</div>
                        </div>
                        <div className="text-right">
                           <div className="text-[10px] text-white/60">Win/lose</div>
                           <div className="text-sm font-bold">16% <span className="text-white/60 font-normal">51/318</span></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Line Chart */}
            <div className="col-span-12 md:col-span-8">
               <Card className="h-full relative">
                  <div className="flex justify-between items-center mb-2">
                     <h3 className="text-sm font-bold text-gray-800">Sales dynamic</h3>
                     <ArrowUpRight size={16} className="text-gray-400" />
                  </div>
                  
                  <div className="h-[200px] w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={lineData}>
                           <defs>
                              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                                 <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                              </linearGradient>
                           </defs>
                           <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                           <Area type="monotone" dataKey="value" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                           {/* Add custom dots/markers as needed */}
                        </AreaChart>
                     </ResponsiveContainer>
                  </div>

                  <div className="flex justify-between items-center mt-2 px-2">
                     <div className="flex items-center gap-2">
                        <Avatar src="https://i.pravatar.cc/150?u=eren" size="sm" />
                        <span className="text-xs font-semibold text-gray-700">Eren Y.</span>
                     </div>
                     <div className="text-xs font-bold text-gray-800">$117,115</div>
                     <div className="flex gap-2">
                        <span className="bg-black text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-full">22</span>
                        <span className="bg-gray-100 text-gray-600 text-[10px] w-6 h-6 flex items-center justify-center rounded-full">84</span>
                     </div>
                     <div className="text-xs text-gray-500">0.79</div>
                     <div className="flex gap-2">
                         <span className="text-xs font-medium">32%</span>
                         <span className="bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">7</span>
                         <span className="bg-gray-100 text-gray-600 text-[10px] w-5 h-5 flex items-center justify-center rounded-full">15</span>
                     </div>
                  </div>
               </Card>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;