import SummaryCard from "./SummaryCard";

const DashboardHome = () => {
  return (
    <div>
      
      <div className="cards-container">
        <SummaryCard title="Total Sales" value="₹1000" />
        <SummaryCard title="Total Orders" value="320" />
        <SummaryCard title="Total Users" value="150" />
      </div>
    </div>
  );
};

export default DashboardHome;
