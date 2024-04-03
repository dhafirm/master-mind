

const Circle = ({ diameter, fillColor }) => {
  return (
    <svg className="transparent" width={diameter} height={diameter} viewBox={`0 0 ${diameter} ${diameter}`} xmlns="http://www.w3.org/2000/svg">
      <circle cx={diameter / 2} cy={diameter / 2} r={diameter / 2} fill={fillColor} />
    </svg>
  );
};

export default Circle;