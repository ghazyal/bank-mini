import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="col-md-2 bg-dark text-white vh-100 p-3">
      <h4 className="mb-4">SIBANI</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/transaksi" className="nav-link text-white">Transaksi</Link>
        </li>
        <li className="nav-item">
          <Link to="/nasabah" className="nav-link text-white">Nasabah</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
