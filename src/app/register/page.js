import React from "react";

function Register() {
  return (
    <div className="">
      <form className="flex flex-col w-52 gap-4 m-auto pt-56" action="">
        <input
          className="p-2 rounded-md"
          type="text"
          placeholder="Username"
          name="username"
        />
        <input
          className="p-2 rounded-md"
          type="text"
          placeholder="Password"
          name="password"
        />
        <input className="" type="file" />
        <button
          className="bg-[--foreground] text-[--background] w-[50%] m-auto rounded-md"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
