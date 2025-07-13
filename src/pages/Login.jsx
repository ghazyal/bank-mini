import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      
      navigate('/dashboard');
    };
    return (
      <div className="container-fluid vh-100">
        <div className="row h-100">
          
          <div className="col-md-6 d-flex mt-2" data-aos="fade-right">
            <div className="container p-5" >
            <div className="row">
              <div className="col-12">
                <div className="d-flex align-items-center mb-5">
                  <img
                    src={`${import.meta.env.BASE_URL}images/piggy-bank.png`}
                    alt="Logo Bank"
                    style={{ width: '25px' }}
                    className="me-3"
                  />
                  <span className="fs-6 fw-bold text-dark">SISTEM INFORMASI BANK MINI</span>
                </div>
                <h1 className="fw-bold text-dark">Halo, <br /> Selamat Datang</h1>
                <p className="text-secondary fw-light" style={{fontSize:'14px'}}>Silahkan Masukkan Akun Untuk Melanjutkan</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-9">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder="E-Mail atau Username" />
                  </div>
                  <div className="mb-5">
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-login w-25 mb-5">Masuk</button>
                  <p className="text-secondary fw-medium" style={{fontSize:'12px'}}>Tidak punya akun? <span className="text-danger">Hubungi Admin</span> </p>
                </form>
              </div>
              <div className="col-4"></div>
            </div>
            </div>
            
          </div>

          <div className="col-md-6 d-none d-md-block p-3" data-aos="fade-left">
            <img
              src={`${import.meta.env.BASE_URL}images/img-3.jpg`}
              alt="Ilustrasi"
              className="rounded img-fluid"
              
            />
          </div>
        </div>
    </div>
    );
  }
  
  export default Login;
  