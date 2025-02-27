import "../css_designs/Scale.css";

type ScaleProps = {
  value: number | null;
};

function Scale({ value }: ScaleProps) {
  return (
    <div className="scale-item">{value === null ? "" : value.toFixed(2)}m</div>
  );
}

export default Scale;
