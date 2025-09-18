import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    msg: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://agency.teamrabbil.com/api/CreateContact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        alert("Contact Saved Successfully!");
        setFormData({ fname: "", lname: "", email: "", msg: "" });
      } else {
        alert("Failed to save contact");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving contact");
    }
  };

  return (
    <div className="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Contact sales
        </h2>
        <p className="mt-2 text-lg/8 text-gray-400">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20 space-y-4"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="fname"
              className="block text-sm/6 font-semibold text-white"
            >
              First name
            </label>
            <input
              id="fname"
              name="fname"
              type="text"
              value={formData.fname}
              onChange={handleChange}
              className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-2 focus:outline-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="lname"
              className="block text-sm/6 font-semibold text-white"
            >
              Last name
            </label>
            <input
              id="lname"
              name="lname"
              type="text"
              value={formData.lname}
              onChange={handleChange}
              className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-2 focus:outline-indigo-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-white"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-2 focus:outline-indigo-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="msg"
              className="block text-sm/6 font-semibold text-white"
            >
              Message
            </label>
            <textarea
              id="msg"
              name="msg"
              rows={4}
              value={formData.msg}
              onChange={handleChange}
              className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-2 focus:outline-indigo-500"
            />
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
