const Feature = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
      <Icon className="w-16 h-16 text-blue-950 mb-4" />
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );

export default Feature
