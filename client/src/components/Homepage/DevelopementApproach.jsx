import CodeIcon from '@mui/icons-material/Code';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const DevelopementApproach = () => {
  return (
    <section id="approach" className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
        Our Development Approach
      </h2>
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
          <CodeIcon className="w-10 h-10 text-blue-950 mr-4" />
          Test-Driven Development (TDD)
        </h3>
        <p className="text-gray-700 mb-6 text-lg">
          We've embraced Test-Driven Development to ensure the highest quality
          and reliability for our Café Employee Manager. This approach brings
          numerous benefits:
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
  );
}

export default DevelopementApproach;
