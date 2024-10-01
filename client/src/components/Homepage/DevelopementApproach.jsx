import CodeIcon from '@mui/icons-material/Code';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import FolderIcon from '@mui/icons-material/Folder';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import { cloneElement } from 'react';

const DevelopementApproach = () => {
  const approaches = [
    {
      icon: <FormatAlignCenterIcon />,
      title: 'Requirement-Based Coding',
      description: 'Precise implementation of project specifications.',
    },
    {
      icon: <IntegrationInstructionsIcon />,
      title: 'Clean & Functional Code',
      description: 'Balancing readability with optimal performance.',
    },
    {
      icon: <FolderIcon />,
      title: 'Scalable Architecture',
      description: 'Organized structure with reusable components.',
    },
  ];
  return (
    <>
      <section id="approach" className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          My Development Approach
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
            <CodeIcon className="w-10 h-10 text-blue-950 mr-4" />
            Test-Driven Development (TDD)
          </h3>
          <p className="text-gray-700 mb-6 text-lg">
            I've embraced Test-Driven Development to ensure the highest quality
            and reliability for GICafe's' Cafe Employee Manager. This approach
            brings numerous benefits:
          </p>
          <ul className="space-y-4 text-gray-700">
            {[
              'Robust codebase with comprehensive test coverage',
              'Early bug detection and prevention',
              'Improved code design and modularity',
              'Easier maintenance and updates',
              'Increased confidence in deploying new features',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <ChevronRightIcon className="w-5 h-5 text-blue-950 mr-2 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-8 mb-20">
        {approaches.map((approach, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-950 rounded-lg mr-4">
                {cloneElement(approach.icon, {
                  size: 24,
                  className: 'text-white',
                })}
              </div>
              <h3 className="text-xl text-blue-950 font-bold">{approach.title}</h3>
            </div>
            <p className="text-blue-950">{approach.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DevelopementApproach;
