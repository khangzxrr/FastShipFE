import ResgisterForm from "../component/register/RegisterForm"

const RegisterAccount = () => {
    return(
        <div className="container">
        <h1
          style={{
            fontSize: 20,
            color: "black",
            lineHeight: 1.35,
            fontWeight: 400,
          }}
        >
          Tạo một tài khoản
        </h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "20px 25px",
            boxShadow: "0 2px 3px rgb(0 0 0 / 8%)",
            borderRadius: "8px",
            borderTop: "4px solid #FFE715",
            marginBottom:"50px"
          }}
        >
          <div style={{ position: "relative", width: "100%", padding: "0 15px" }}>
            <h2
              style={{
                fontSize: 16,
                color: "black",
                lineHeight: 1.35,
                fontWeight: 400,
              }}
            >
              THÔNG TIN CÁ NHÂN
            </h2>
            <ResgisterForm />
          </div>
        </div>
      </div>
    )
}
export default RegisterAccount