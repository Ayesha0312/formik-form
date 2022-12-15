import './App.css';
import { useFormik } from 'formik'
import * as Yup from 'yup'

function App() {
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      status: "",
      country: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, "username must be less than or equal to 10 characters")
        .required("this is required field"),
      name: Yup.string()
        .required("this is required field"),
      email: Yup.string()
        .email("Please provide valid email")
        .required("this is required field"),
      status: Yup.string()
        .required("this is required field"),
      country: Yup.string()
        .required("this is required field "),
    }),
    onSubmit: (values) => {
      console.log("form submitted", values)
    }
  })

 
  return (
    <div className="App">
      <h2>Registration Here</h2>

      <form onSubmit={formik.handleSubmit}>
        <label>Username: </label>
        
        <input id='name'
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          onBlur={formik.handleBlur}
          placeholder="type username"
        />
        {formik.touched.username && formik.errors.username && <p style={{ color: "red" }}>{formik.errors.username}</p>}
        <br />
        <br/>
        <label>Name: </label>
        
        <input id='name'
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          placeholder="type your name"
        />
        {formik.touched.name && formik.errors.name && <p style={{ color: "red" }}>{formik.errors.name}</p>}
        <br />
        <br/>
        <label>Email: </label>
        
        <input id='name'
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          placeholder="type your email"
        />
        {formik.touched.email && formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}
        <br />
        <br/>
        
        <span>Your status:</span>
        
        <input
          type="radio"
          name="status"
          value="single"
          onChange={formik.handleChange}
        />
        <label>single</label>
        <input
          type="radio"
          name="status"
          value="commited"
          onChange={formik.handleChange}
        />
        {formik.touched.status && formik.errors.status && <p style={{ color: "red" }}>{formik.errors.status}</p>}
       
        <label>commited</label>
        <br />
        <br/>

        <span>Gender:</span>
        
        <input
          type="checkbox"
          name="Gender"
          value="Male"
          onChange={formik.handleChange}
        />
        <label>Male</label>
        <input
          type="checkbox"
          name="Gender"
          value="Female"
          onChange={formik.handleChange}
        />
        {formik.touched.status && formik.errors.status && <p style={{ color: "red" }}>{formik.errors.status}</p>}
       
        <label>Female</label>
        <br />
        <br/>

        <select name="country" onBlur={formik.handleChange} onChange={formik.handleChange}>
          <option value="">select country</option>
          <option value="China">China</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Iraq">Iraq</option>
          <option value="Iran">Iran</option>
        </select>
        {formik.touched.country && formik.errors.country && <p style={{ color: "red" }}>{formik.errors.country}</p>}
        <br />
        <br />

        <button type="submit">submit</button>
      </form>


    </div>
  );
}

export default App;
