import "../css_designs/Status.css";

type StatusProps = {
  value: number;
};

function Status({ value }: StatusProps) {
  return <div className="status-item">{value}円</div>;
}

export default Status;
