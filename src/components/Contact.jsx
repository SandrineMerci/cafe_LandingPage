import { useState } from "react";
import { MapPin, Mail, PhoneCall } from "lucide-react";

// Reusable Input component
function Input({ id, label, type = "text", name, placeholder, value, onChange, error }) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block mb-1 font-semibold text-black">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border rounded px-4 py-2 focus:outline-none ${
          error ? "border-red-500" : "border-[color:var(--primary-600)]"
        }`}
      />
      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </div>
  );
}

function Textarea({ id, label, name, placeholder, value, onChange, error }) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block mb-1 font-semibold text-black">
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows={4}
        value={value}
        onChange={onChange}
        className={`w-full border rounded px-4 py-2 focus:outline-none resize-none ${
          error ? "border-red-500" : "border-[color:var(--primary-600)]"
        }`}
      />
      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </div>
  );
}

// Reusable Button component
function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[color:var(--primary-600)] text-white px-6 py-2 rounded hover:opacity-90 transition"
    >
      {children}
    </button>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Simple email regex for validation
  const emailRegex = /^[^@]+@[^@]+$/;



  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error on input change
    setErrors((prev) => ({ ...prev, [name]: null }));
  }

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

   

    alert("Message sent successfully!");

   
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <section className="py-12 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-[color:var(--primary-600)] font-semibold">Contact Us</p>
          <h2 className="text-3xl font-bold text-black">Say Hello</h2>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="text-[color:var(--primary-600)] text-2xl"><MapPin size={32} color="#00816e" /></div>
            <div>
              <h3 className="font-bold text-black">Address</h3>
              <p className="text-gray-600">Location KG 9 Ave, Kigali</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="text-[color:var(--primary-600)] text-2xl"><Mail size={32} color="#00816e" /></div>
            <div>
              <h3 className="font-bold text-black">Email</h3>
              <p className="text-gray-600">businesscafe@info.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="text-[color:var(--primary-600)] text-2xl"><PhoneCall size={32} color="#00816e" /></div>
            <div>
              <h3 className="font-bold text-black">Phone</h3>
              <p className="text-gray-600">+250788183828</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <p className="text-[color:var(--primary-600)] font-semibold">Have Question ?</p>
          <h2 className="text-2xl font-bold text-black mb-6">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-3" noValidate>
            <Input
              label="Name"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            />
            
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Input
              label="Subject"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              error={errors.subject}
            />
            <Textarea
              label="Your Message"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              error={errors.message}
            />
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
