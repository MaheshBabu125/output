import React, { useState } from 'react';
import { Search, Bell, User, X, Home, Settings, Users, FileText, BarChart, HelpCircle } from 'lucide-react';

export default function AccessControl() {
  const [role, setRole] = useState('Branch Manager');
  const [accessType, setAccessType] = useState('Field Level');
  const [caseCategories, setCaseCategories] = useState(['NRI', 'Corporate']);
  const [subCategories, setSubCategories] = useState(['Address Update', 'Stop Check']);
  const [activeNav, setActiveNav] = useState('settings');
  const [showResults, setShowResults] = useState(true);

  const accessControlData = [
    { caseCategory: 'NRI', subCategory: 'Address Update', fieldName: 'Address', accessType: 'No Access', maskingPreview: 'XXXX XXXX XXXX_XXXX' },
    { caseCategory: 'NRI', subCategory: 'Address Update', fieldName: 'Aadhaar Number', accessType: 'No Access', maskingPreview: 'XXXX XXXX XXXX' },
    { caseCategory: 'NRI', subCategory: 'Address Update', fieldName: 'Account Number', accessType: 'No Access', maskingPreview: 'XXXX XXXX XXXX XXXX' },
    { caseCategory: 'NRI', subCategory: 'Address Update', fieldName: 'Related Party', accessType: 'No Access', maskingPreview: 'XXXXXXXXXX' },
    { caseCategory: 'Corporate', subCategory: 'Stop Check', fieldName: 'Name', accessType: 'No Access', maskingPreview: 'XXXX XXXXX XXXXX' },
    { caseCategory: 'Corporate', subCategory: 'Stop Check', fieldName: 'DOB', accessType: 'No Access', maskingPreview: 'XX-XX-XXXX' },
    { caseCategory: 'Corporate', subCategory: 'Stop Check', fieldName: 'Aadhar Number', accessType: 'No Access', maskingPreview: 'XXXX XXXX XXXX' },
    { caseCategory: 'Corporate', subCategory: 'Stop Check', fieldName: 'Phone Number', accessType: 'No Access', maskingPreview: 'XX XXXXX XXXXX' },
  ];

  const [filterData, setFilterData] = useState(accessControlData);

  const removeCategory = (category) => {
    setCaseCategories(caseCategories.filter(c => c !== category));
  };

  const removeSubCategory = (subCategory) => {
    setSubCategories(subCategories.filter(s => s !== subCategory));
  };

  const filterAccessControl = (data, filters) => {
    return data.filter(item => {
      return Object.entries(filters).every(([key, values]) => {
        if (!values || values.length === 0) return true; // ignore empty lists
        return values.includes(item[key]); // match if value exists in list
      });
    });
  };


  const searchHandler = () => {
    const filters = {
      caseCategory: caseCategories.length > 0 ? caseCategories : [],
      subCategory: subCategories.length > 0 ? subCategories : [],
    };
    const filteredData = filterAccessControl(accessControlData, filters);
    setFilterData(filteredData);
    setShowResults(true);
  }

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'reports', icon: FileText, label: 'Reports' },
    { id: 'analytics', icon: BarChart, label: 'Analytics' },
    { id: 'settings', icon: Settings, label: 'Settings' },
    { id: 'help', icon: HelpCircle, label: 'Help' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Side Navigation */}
      <aside className="w-16 bg-blue-900 flex flex-col items-center py-6 space-y-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`p-3 rounded-lg transition-colors ${
                activeNav === item.id
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-200 hover:bg-blue-800 hover:text-white'
              }`}
              title={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-gray-800">Logo</div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Home</span>
                <span>&gt;</span>
                <span>Admin</span>
                <span>&gt;</span>
                <span className="font-semibold">Access Control</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                  <option>Category</option>
                </select>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="border border-gray-300 rounded pl-3 pr-10 py-2 text-sm w-64"
                  />
                  <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
              </div>
              <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
              <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              Maintain Role Level Access Control
            </h1>

            {/* Search Criteria Section */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-sm font-semibold text-gray-700 mb-4">Search Criteria</h2>
              
              <div className="grid grid-cols-3 gap-6">
                {/* Role */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                    />
                    <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Access Control Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Access Control Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={accessType}
                    onChange={(e) => setAccessType(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    <option>Field Level</option>
                    <option>Screen Level</option>
                    <option>Function Level</option>
                  </select>
                </div>

                {/* Case Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Case Category
                  </label>
                  <div className="border border-gray-300 rounded px-3 py-2 min-h-[42px] flex flex-wrap gap-2">
                    {caseCategories.map((category) => (
                      <span
                        key={category}
                        className="inline-flex items-center bg-gray-200 rounded px-2 py-1 text-sm"
                      >
                        {category}
                        <button
                          onClick={() => removeCategory(category)}
                          className="ml-1 hover:text-red-600"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Case Sub-category */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Case Sub-category
                </label>
                <div className="border border-gray-300 rounded px-3 py-2 min-h-[42px] flex flex-wrap gap-2 max-w-md">
                  {subCategories.map((subCategory) => (
                    <span
                      key={subCategory}
                      className="inline-flex items-center bg-gray-200 rounded px-2 py-1 text-sm"
                    >
                      {subCategory}
                      <button
                        onClick={() => removeSubCategory(subCategory)}
                        className="ml-1 hover:text-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mt-6">
                <button 
                  onClick={() => setShowResults(false)}
                  className="px-6 py-2 text-gray-700 hover:text-gray-900"
                >
                  Clear
                </button>
                <button 
                  onClick={searchHandler}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Results Table */}
            {showResults ? (
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">
                  Access Controls
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100 border-b-2 border-gray-300">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Case Category</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Case Sub-category</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Field Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Access Type</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Masking Preview</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {filterData.map((row, index) => (
                        <tr 
                          key={index} 
                          className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                        >
                          <td className="px-4 py-3 text-sm text-gray-700">{row.caseCategory}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{row.subCategory}</td>
                          <td className="px-4 py-3 text-sm text-blue-600 font-medium">{row.fieldName}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{row.accessType}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 font-mono">{row.maskingPreview}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              /* Empty State */
              <div className="flex flex-col items-center justify-center py-16">
                <div className="relative">
                  <div className="flex space-x-4">
                    <div className="w-24 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <User className="w-12 h-12 text-gray-300" />
                    </div>
                    <div className="w-24 h-32 bg-blue-100 rounded-lg flex items-center justify-center border-2 border-blue-500">
                      <Search className="w-16 h-16 text-blue-600" />
                    </div>
                    <div className="w-24 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <User className="w-12 h-12 text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
