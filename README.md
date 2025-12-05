# Role Level Access Control System

A comprehensive React-based web application for managing enterprise role-level access control with field-level permissions, case categories, sub-categories, and data masking previews.

## 🚀 Features

### Core Functionality
- **Side Navigation Bar**: Vertical navigation with icons for Home, Users, Reports, Analytics, Settings, and Help
- **Role Management**: Search and select roles (e.g., Branch Manager)
- **Access Control Types**: Configure field-level, screen-level, or function-level access
- **Case Category Management**: Add/remove case categories (NRI, Corporate) with visual tags
- **Case Sub-category Management**: Manage sub-categories like "Address Update" and "Stop Check"
- **Search Results Table**: Display access control data in a structured, sortable table format
- **Data Masking Preview**: Visual representation of how sensitive data will be masked
- **Responsive Design**: Fully responsive interface that works on desktop and tablet devices

### UI/UX Features
- Clean, modern interface with Tailwind CSS
- Hover effects and smooth transitions
- Active state management for navigation
- Tag-based category selection with removal capability
- Empty state visualization when no results
- Alternating row colors in data table

## 🛠️ Technologies Used

- **React** v18.2.0 - Frontend framework
- **Tailwind CSS** v3.3.0 - Utility-first CSS framework
- **Lucide React** v0.263.1 - Icon library
- **JavaScript (ES6+)** - Modern JavaScript features

## 📋 Prerequisites

Before running this application, ensure you have:

- **Node.js** v14 or higher
- **npm** v6 or higher (or **yarn** v1.22+)

## 📦 Installation

1. **Navigate to the output folder**:

cd output


2. **Install dependencies**:

npm install


Or using yarn:

yarn install


3. **Install Tailwind CSS** (if not automatically installed):
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init


## 🚀 Running the Application

Start the development server:

npm start


Or using yarn:

yarn start


The application will automatically open at `http://localhost:3000` in your browser.

## 📁 Project Structure


output/
├── README.md                      # This file
├── package.json                   # Project dependencies
├── tailwind.config.js            # Tailwind CSS configuration
├── public/
│   └── index.html                # HTML template
└── src/
    ├── index.js                  # Application entry point
    ├── index.css                 # Global styles with Tailwind
    ├── App.js                    # Root component
    └── components/
        └── AccessControl.jsx     # Main access control component


## 🎯 Component Overview

### AccessControl Component

The main component handles:
- **Navigation**: Side menu with icon-based navigation and active state
- **Search Form**: Role selection, access type, and category filters
- **Results Display**: Data table showing access control configurations
- **State Management**: React hooks for managing UI state and data

### Key State Variables

```javascript
- role: Current selected role (default: 'Branch Manager')
- accessType: Selected access control type (default: 'Field Level')
- caseCategories: Array of selected case categories
- subCategories: Array of selected sub-categories
- activeNav: Currently active navigation item
- showResults: Boolean to toggle between empty state and results table


## 📊 Data Structure

### Access Control Entry

{
  caseCategory: 'NRI',              // Category name
  subCategory: 'Address Update',    // Sub-category name
  fieldName: 'Address',             // Field identifier
  accessType: 'No Access',          // Access permission level
  maskingPreview: 'XXXX XXXX XXXX' // Masked data preview
}


### Sample Data Included

**NRI Category - Address Update:**
- Address (XXXX XXXX XXXX_XXXX)
- Aadhaar Number (XXXX XXXX XXXX)
- Account Number (XXXX XXXX XXXX XXXX)
- Related Party (XXXXXXXXXX)

**Corporate Category - Stop Check:**
- Name (XXXX XXXXX XXXXX)
- DOB (XX-XX-XXXX)
- Aadhar Number (XXXX XXXX XXXX)
- Phone Number (XX XXXXX XXXXX)

## 💡 Usage Guide

### Searching for Access Controls

1. **Select a Role**: Enter or select a role (e.g., Branch Manager)
2. **Choose Access Type**: Select from dropdown (Field Level, Screen Level, Function Level)
3. **Add Categories**: Case categories are pre-selected (remove with X button)
4. **Add Sub-categories**: Sub-categories are pre-selected (remove with X button)
5. **Click Search**: View the results in the data table
6. **Click Clear**: Reset the form and return to empty state

### Understanding Results

The results table displays:
- **Case Category**: The category the access control applies to
- **Case Sub-category**: Specific sub-category within the case
- **Field Name**: The specific field being controlled (shown in blue)
- **Access Type**: Permission level (No Access, Read Only, Full Access)
- **Masking Preview**: How the data appears when masked

## 🎨 Customization

### Adding New Access Control Data

Edit `src/components/AccessControl.jsx`:

const accessControlData = [
  {
    caseCategory: 'Your Category',
    subCategory: 'Your Sub-category',
    fieldName: 'Your Field',
    accessType: 'Full Access',
    maskingPreview: 'XXXX XXXX'
  },
  // ... more entries
];
```

### Adding Navigation Items

const navItems = [
  { id: 'custom', icon: YourIcon, label: 'Custom Label' },
  // ... more items
];


### Changing Color Scheme

Modify Tailwind classes in the component:

// Change sidebar color
<aside className="w-16 bg-purple-900 ...">

// Change button color
<button className="bg-green-600 hover:bg-green-700 ...">

### Modifying Access Types

Update the dropdown options:

<select>
  <option>Field Level</option>
  <option>Screen Level</option>
  <option>Function Level</option>
  <option>Your Custom Level</option>
</select>

## 🔧 Configuration

### Tailwind Configuration

The `tailwind.config.js` includes custom color extensions
theme: {
  extend: {
    colors: {
      'blue-900': '#1e3a8a',
      'blue-800': '#1e40af',
      'blue-700': '#1d4ed8',
    }
  }
}
```

## 🏗️ Building for Production

Create an optimized production build:
npm run build


Or using yarn:

yarn build


The build folder will contain optimized static files ready for deployment.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ♿ Accessibility

- Keyboard navigation supported
- ARIA labels for screen readers
- Semantic HTML elements
- Focus indicators on interactive elements
- High contrast mode compatible

## 🚧 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication & authorization
- [ ] Advanced table filtering and sorting
- [ ] Export to CSV/PDF/Excel
- [ ] Audit trail and change history
- [ ] Bulk edit operations
- [ ] Pagination for large datasets
- [ ] Real-time search
- [ ] Custom masking pattern editor
- [ ] Role hierarchy visualization
- [ ] Access request workflow
- [ ] Multi-language support

## 🐛 Troubleshooting

### Application won't start
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start

### Tailwind styles not working
- Ensure `index.css` imports Tailwind directives
- Check `tailwind.config.js` content paths
- Restart development server

### Icons not displaying
# Reinstall lucide-react
npm install lucide-react
