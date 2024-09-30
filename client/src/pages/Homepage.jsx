import React, { useState } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';

import RequirementsChecklist from '../components/Homepage/Requirement';
import DevelopementApproach from '../components/Homepage/DevelopementApproach';
import Header from '../components/Homepage/Header';
import Feature from '../components/Homepage/Feature';
import Footer from '../components/Homepage/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Header />

      <main className="container mx-auto px-6 py-16 pb-0">
        <section id="features" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <Feature
              icon={FreeBreakfastIcon}
              title="Café Management"
              description="Effortlessly manage your cafés with detailed tracking of locations, descriptions, and employee counts."
            />
            <Feature
              icon={GroupIcon}
              title="Employee Directory"
              description="Maintain a comprehensive database of your staff, including contact details and work history."
            />
            <Feature
              icon={WorkIcon}
              title="Work Assignment"
              description="Seamlessly assign employees to specific cafés and monitor their work duration in real-time."
            />
          </div>
        </section>
        <DevelopementApproach />
      </main>
      <RequirementsChecklist />
      <Footer />
    </div>
  );
};

export default HomePage;
