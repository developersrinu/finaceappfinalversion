// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, provider, db } from "../firebase";// Import Firebase authentication and Firestore
// import logo from '../assets/logo.jpg'
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";//Firebase authentication functions
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import Header from "./Header";
// import { toast } from "react-toastify";

// const SignUpSignIn = () => {
//    // State variables for user input and loading state
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [flag, setFlag] = useState(false);
//   const navigate = useNavigate();

//   // Function to create a user document in Firestore
//   const createUserDocument = async (user) => {
//     setLoading(true);
//     if (!user) return;

//     const userRef = doc(db, "users", user.uid);
//     const userData = await getDoc(userRef);

//     if (!userData.exists()) {
//       const { displayName, email, photoURL } = user;
//       const createdAt = new Date();

//       try {
//         await setDoc(userRef, {
//           name: displayName ? displayName : name,
//           email,
//           photoURL: photoURL ? photoURL : "",
//           createdAt,
//         });
//         toast.success("Account Created!");
//         setLoading(false);
//       } catch (error) {
//         toast.error(error.message);
//         console.error("Error creating user document: ", error);
//         setLoading(false);
//       }
//     }
//   };

//   const signUpWithEmail = async (e) => {
//     setLoading(true);
//     e.preventDefault();
//     try {
//       const result = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = result.user;
//       await createUserDocument(user);
//       toast.success("Successfully Signed Up!");
//       setLoading(false);
//       navigate("/dashboard");
//     } catch (error) {
//       toast.error(error.message);
//       console.error(
//         "Error signing up with email and password: ",
//         error.message
//       );
//       setLoading(false);
//     }
//   };

//   const signInWithEmail = async (e) => {
//     setLoading(true);
//     e.preventDefault();
//     try {
//       const result = await signInWithEmailAndPassword(auth, email, password);
//       const user = result.user;
//       navigate("/dashboard");
//       toast.success("Logged In Successfully!");
//       setLoading(false);
//     } catch (error) {
//       toast.error(error.message);
//       console.error(
//         "Error signing in with email and password: ",
//         error.message
//       );
//       setLoading(false);
//     }
//   };

//   const signInWithGoogle = async () => {
//     setLoading(true);
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       await createUserDocument(user);
//       toast.success("User Authenticated Successfully!");
//       setLoading(false);
//       navigate("/dashboard");
//     } catch (error) {
//       setLoading(false);
//       toast.error(error.message);
//       console.error("Error signing in with Google: ", error.message);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="wrapper">
//       <img src={logo} alt="ok" style={{ width: "40%", margin: '40px', position: 'relative', left: "-60px" }} />
//         {flag ? (
//           <div className="signup-signin-container">
//             <h2 style={{ textAlign: "center" }}>
//               Log In on <span className="blue-text">Financely.</span>
//             </h2>
//             <form onSubmit={signUpWithEmail}>
//               <div className="input-wrapper">
//                 <p>Email</p>
//                 <input
//                   type="email"
//                   placeholder="JohnDoe@gmail.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>






//               <div className="input-wrapper">
//                 <p>Password</p>
//                 <input
//                   type="password"
//                   placeholder="Example123"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>

//               <button
//                 disabled={loading}
//                 className="btn"
//                 onClick={signInWithEmail}
//               >
//                 {loading ? "Loading..." : " Log In with Email and Password"}
//               </button>
//             </form>
//             <p style={{ textAlign: "center", margin: 0 }}>or</p>
//             <button
//               disabled={loading}
//               className="btn btn-blue"
//               onClick={signInWithGoogle}
//             >
//               {loading ? "Loading..." : " Log In with Google"}
//             </button>
//             <p
//               onClick={() => setFlag(!flag)}
//               style={{
//                 textAlign: "center",
//                 marginBottom: 0,
//                 marginTop: "0.5rem",
//                 cursor: "pointer",
//               }}
//             >
//               Or Don't Have An Account? Click Here.
//             </p>
//           </div>
//         ) : (
//           <div className="signup-signin-container">
//             <h2 style={{ textAlign: "center" }}>
//               Sign Up on <span className="blue-text">Financely.</span>
//             </h2>
//             <form onSubmit={signUpWithEmail}>
//               <div className="input-wrapper">
//                 <p>Full Name</p>
//                 <input
//                   type="text"
//                   placeholder="John Doe"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div className="input-wrapper">
//                 <p>Email</p>
//                 <input
//                   type="email"
//                   placeholder="JohnDoe@gmail.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               <div className="input-wrapper">
//                 <p>Password</p>
//                 <input
//                   type="password"
//                   placeholder="Example123"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>

//               <div className="input-wrapper">
//                 <p>Confirm Password</p>
//                 <input
//                   type="password"
//                   placeholder="Example123"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//               </div>

//               <button type="submit" className="btn">
//                 {loading ? "Loading..." : "Sign Up with Email and Password"}
//               </button>
//             </form>
//             <p style={{ textAlign: "center", margin: 0 }}>or</p>
//             <button
//               disabled={loading}
//               className="btn btn-blue"
//               onClick={signInWithGoogle}
//             >
//               {loading ? "Loading..." : "Sign Up with Google"}
//             </button>
//             <p
//               onClick={() => setFlag(!flag)}
//               style={{
//                 textAlign: "center",
//                 marginBottom: 0,
//                 marginTop: "0.5rem",
//                 cursor: "pointer",
//               }}
//             >
//               Or Have An Account Already? Click Here
//             </p>
//             {/* <button onClick={signInWithEmail}>
//             Sign In with Email and Password
//           </button> */}
//           </div>
//         )}
//       </div>

//     </>
//   );
// };

// export default SignUpSignIn;




// =====================================================================================================================================



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, db } from "../firebase"; // Import Firebase authentication and Firestore
import logo from '../assets/logo.jpg'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth"; // Firebase authentication functions
import { doc, getDoc, setDoc } from "firebase/firestore"; // Firestore functions
import Header from "./Header";
import { toast } from "react-toastify";

const SignUpSignIn = () => {
    // State variables for user input and loading state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();

    // Function to create a user document in Firestore
    const createUserDocument = async (user) => {
        setLoading(true);
        if (!user) return;

        // Define a reference to the user's document in Firestore
        const userRef = doc(db, "users", user.uid);

        // Check if the user document already exists
        const userData = await getDoc(userRef);

        if (!userData.exists()) {
            const { displayName, email, photoURL } = user;
            const createdAt = new Date();

            try {
                // Create the user document in Firestore
                await setDoc(userRef, {
                    name: displayName ? displayName : name,
                    email,
                    photoURL: photoURL ? photoURL : "",
                    createdAt,
                });

                // Display a success toast message
                toast.success("Account Created!");
                setLoading(false);
            } catch (error) {
                // Display an error toast message and log the error
                toast.error(error.message);
                console.error("Error creating user document: ", error);
                setLoading(false);
            }
        }
    };

    // Function to sign up with email/password
    const signUpWithEmail = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            // Create a new user with email and password
            const result = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = result.user;

            // Create the user document in Firestore
            await createUserDocument(user);

            // Display a success toast message
            toast.success("Successfully Signed Up!");
            setLoading(false);

            // Redirect to the dashboard
            navigate("/dashboard");
        } catch (error) {
            // Display an error toast message and log the error
            toast.error(error.message);
            console.error(
                "Error signing up with email and password: ",
                error.message
            );
            setLoading(false);
        }
    };

    // Function to sign in with email/password
    const signInWithEmail = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            // Sign in with email and password
            const result = await signInWithEmailAndPassword(auth, email, password);
            const user = result.user;

            // Redirect to the dashboard
            navigate("/dashboard");

            // Display a success toast message
            toast.success("Logged In Successfully!");
            setLoading(false);
        } catch (error) {
            // Display an error toast message and log the error
            toast.error(error.message);
            console.error(
                "Error signing in with email and password: ",
                error.message
            );
            setLoading(false);
        }
    };

    // Function to sign in with Google
    const signInWithGoogle = async () => {
        setLoading(true);
        try {
            // Sign in with Google using a popup
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Create the user document in Firestore
            await createUserDocument(user);

            // Display a success toast message
            toast.success("User Authenticated Successfully!");
            setLoading(false);

            // Redirect to the dashboard
            navigate("/dashboard");
        } catch (error) {
            // Display an error toast message and log the error
            setLoading(false);
            toast.error(error.message);
            console.error("Error signing in with Google: ", error.message);
        }
    };

    // JSX for rendering the sign-up/sign-in form
    return (
        <>
            <Header />
            <div className="wrapper">
                <img src={logo} alt="ok" style={{ width: "40%", margin: '40px', position: 'relative', left: "-60px" }} />
                {flag ? (
                    // Sign-In Form
                    <div className="signup-signin-container">
                        <h2 style={{ textAlign: "center" }}>
                            Log In on <span className="blue-text">CoinController</span>
                        </h2>
                        <form onSubmit={signUpWithEmail}>
                            {/* Input fields for email and password */}
                            <div className="input-wrapper">
                                <p>Email</p>
                                <input
                                    type="email"
                                    placeholder="JohnDoe@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-wrapper">
                                <p>Password</p>
                                <input
                                    type="password"
                                    placeholder="Example123"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {/* Button to sign in with email/password */}
                            <button
                                disabled={loading}
                                className="btn"
                                onClick={signInWithEmail}
                            >
                                {loading ? "Loading..." : " Log In with Email and Password"}
                            </button>
                        </form>
                        <p style={{ textAlign: "center", margin: 0 }}>or</p>

                        {/* Button to sign in with Google */}
                        <button
                            disabled={loading}
                            className="btn btn-blue"
                            onClick={signInWithGoogle}
                        >
                            {loading ? "Loading..." : " Log In with Google"}
                        </button>

                        <p
                            onClick={() => setFlag(!flag)}
                            style={{
                                textAlign: "center",
                                marginBottom: 0,
                                marginTop: "0.5rem",
                                cursor: "pointer",
                            }}
                        >
                            Or Don't Have An Account? Click Here.
                        </p>
                    </div>
                ) : (
                    // Sign-Up Form
                    <div className="signup-signin-container">
                        <h2 style={{ textAlign: "center" }}>
                            Sign Up on <span className="blue-text">CoinController</span>
                        </h2>
                        <form onSubmit={signUpWithEmail}>
                            {/* Input fields for name, email, password, and confirm password */}
                            <div className="input-wrapper">
                                <p>Full Name</p>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="input-wrapper">
                                <p>Email</p>
                                <input
                                    type="email"
                                    placeholder="JohnDoe@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-wrapper">
                                <p>Password</p>
                                <input
                                    type="password"
                                    placeholder="Example123"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="input-wrapper">
                                <p>Confirm Password</p>
                                <input
                                    type="password"
                                    placeholder="Example123"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>

                            {/* Button to sign up with email/password */}
                            <button type="submit" className="btn">
                                {loading ? "Loading..." : "Sign Up with Email and Password"}
                            </button>
                        </form>
                        <p style={{ textAlign: "center", margin: 0 }}>or</p>

                        {/* Button to sign up with Google */}
                        <button
                            disabled={loading}
                            className="btn btn-blue"
                            onClick={signInWithGoogle}
                        >
                            {loading ? "Loading..." : "Sign Up with Google"}
                        </button>

                        <p
                            onClick={() => setFlag(!flag)}
                            style={{
                                textAlign: "center",
                                marginBottom: 0,
                                marginTop: "0.5rem",
                                cursor: "pointer",
                            }}
                        >
                            Or Have An Account Already? Click Here
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default SignUpSignIn;
