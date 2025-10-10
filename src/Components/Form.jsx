// import { useState } from "react";

// function App() {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         gender: "",
//         message: "",
//     });

//     const [errors, setErrors] = useState({});

//     // Handle input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev, 
//             [name]: value, 
//         }));   
//     }; 

//     // Simple form validation
//     const validate = () => {
//         let newErrors = {}; 
//         if (!formData.name.trim()) newErrors.name = "Name is required"; 
//         if (!formData.email.includes("@")) newErrors.email = "Valid email required"; 
//         if (!/^\d{10}$/.test(formData.phone))
//             newErrors.phone = "Phone must be 10 digits";
//         if (!formData.address.trim()) newErrors.address = "Address is required";
//         if (!formData.gender) newErrors.gender = "Select your gender";
//         return newErrors; 
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {  
//         e.preventDefault();
//         const validationErrors = validate(); 
//         setErrors(validationErrors); 

//         if (Object.keys(validationErrors).length === 0) {
//             console.log("Form Submitted:", formData);
//             alert("Form submitted successfully!");
//             setFormData({
//                 name: "",
//                 email: "",
//                 phone: "",
//                 address: "",
//                 gender: "",
//                 message: "",

//             });
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-indigo-300 to-teal-200 flex items-center justify-center p-4">
//             <form
//                 onSubmit={handleSubmit}
//                 className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8"
//             >
//                 <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//                     Contact Form
//                 </h2>

//                 {/* Name */}
//                 <div className="mb-4">
//                     <label className="block text-gray-700 mb-2 font-medium">  Full Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Enter your full name"
//                         className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"
//                             } rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none`}
//                     />
//                     {errors.name && (
//                         <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//                     )}
//                 </div>

//                 {/* Email */}
//                 <div className="mb-4">
//                     <label className="block text-gray-700 mb-2 font-medium"> Email Address </label>
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"
//                         } rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none`}
//                     />
//                     {errors.email && (
//                         <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                     )}
//                 </div>

//                 {/* Phone */}
//                 <div className="mb-4">
//                     <label className="block text-gray-700 mb-2 font-medium"> Phone Number  </label>
//                     <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="Enter your 10-digit number"
//                         className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-300"
//                             } rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none`}
//                     />
//                     {errors.phone && (
//                         <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//                     )}
//                 </div>

//                 {/* Address */}
//                 <div className="mb-4">
//                     <label className="block text-gray-700 mb-2 font-medium">  Address </label>
//                     <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" rows="2"
//                         className={`w-full border ${errors.address ? "border-red-500" : "border-gray-300"
//                             } rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none`}
//                     ></textarea>
//                     {errors.address && (
//                         <p className="text-red-500 text-sm mt-1">{errors.address}</p>

//                     )}
//                 </div>

//                 {/* Gender */}
//                 <div className="mb-4"> 
//                     <label className="block text-gray-700 mb-2 font-medium">Gender</label>
//                     <select name="gender" value={formData.gender} onChange={handleChange}
//                         className={`w-full border ${errors.gender ? "border-red-500" : "border-gray-300"
//                             } rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none`}  >
//                         <option value="">Select Gender</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                         <option value="Other">Other</option>
//                     </select>
//                     {errors.gender && (
//                         <p className="text-red-500 text-sm mt-1">{errors.gender}</p>)}
//                 </div>

//                 {/* Message  */}
//                 <div className="mb-6">
//                     <label className="block text-gray-700 mb-2 font-medium ">
//                         Message
//                     </label>
//                     <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Type your message..." rows="2"
//                         className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none "
//                     ></textarea>
//                 </div>

//                 {/* Submit Button */}
//                 <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4  rounded-lg transition duration-200">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default App;

