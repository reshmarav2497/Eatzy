const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img animate"></div>
      <div className="shimmer-details">
        <div className="shimmer-line animate w-75"></div>
        <div className="shimmer-line animate w-50"></div>
        <div className="shimmer-line animate w-75"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
