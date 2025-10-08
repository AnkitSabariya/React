const StatCard = ({ icon, label, value, color }) => {
  return (
    <div
      className={`flex items-center gap-4 p-5 rounded-2xl bg-white/80 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${color}`}
    >
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <h2 className="text-2xl font-semibold text-gray-800">{value}</h2>
      </div>
    </div>
  );
};

export default StatCard;
