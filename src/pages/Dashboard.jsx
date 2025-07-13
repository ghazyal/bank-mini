function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 bg-dashboard text-white vh-100 p-3">
          <h4 className="mb-4">Bank Mini</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link text-white active mb-2"><i className="fas fa-tachometer-alt me-2"></i>Dashboard</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white mb-2">Transaksi</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">Nasabah</a>
            </li>
          </ul>
        </div>

        {/* Konten Utama */}
        <div className="col-md-10 p-4">
          {/* Topbar */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Dashboard</h2>
            <button className="btn btn-danger btn-sm">Logout</button>
          </div>

          {/* Cards */}
          <div className="row">
            <div className="col-md-4">
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h5 className="card-title">Saldo Anda</h5>
                  <p className="card-text">Rp 5.000.000</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h5 className="card-title">Total Transaksi</h5>
                  <p className="card-text">Rp 15.000.000</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white bg-warning mb-3">
                <div className="card-body">
                  <h5 className="card-title">Jumlah Nasabah</h5>
                  <p className="card-text">120 Orang</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
