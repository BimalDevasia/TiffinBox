"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register: React.FC = () => {
    const router = useRouter();
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
        terms: false,
    });

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.checked });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password1,
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                console.error('Error creating user:', error.message);
                alert(`Error creating user: ${error.message}`);
                return;
            }

            const data = await response.json();
            console.log('User created:', data);
            router.push("/login")
        } catch (error) {
            console.error('Error creating user:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="h-screen w-full relative flex bg-black font-bebasneue overflow-auto">
            <div className="bg-food bg-cover fixed bg-no-repeat w-[28%] h-full">
                <div className="absolute h-full w-full bg-gradient-to-b from-[rgb(0,0,0,0.9)] to-[rgb(0,0,0,0.2)]"></div>
                <Image className="z-1" src="" alt="Not Working" />
                <div className="flex absolute gap- items-center bottom-48">
                    <h1 className="text-8xl bg-gradient-to-b from-white to to-black text-transparent bg-clip-text font-bold font-bebasneue">
                        01
                    </h1>
                    <p className="text-white font-semibold font-bebasneue">
                        GOOD FOOD IS THE FOUNDATION <br /> OF GENUINE HAPPINESS
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center absolute right-0 gap-10 pt-12 w-[79%] h-screen rounded-3xl z-10 bg-gradient-to-bl from-[rgb(0, 0, 0, 1)] to-[rgba(38, 34, 34, 1)] text-white">
                <div className="flex w-9/12 items-center justify-between pt-6 text-inyellow">
                    <div className="flex gap-3">
                        <div className="flex w-24 h-14 justify-center cursor-pointer items-center rounded-md bg-ingrey text-white text-[17px]">
                            Sign up
                        </div>
                        <Link href="login">
                            <div className="flex w-24 h-14 justify-center cursor-pointer items-center hover:bg-ingrey hover:rounded-md hover:text-white text-[17px]">
                                Sign in
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex w-24 h-14 justify-center cursor-pointer items-center rounded-md bg-ingrey text-white text-[17px]">
                            User
                        </div>
                        <Link href="/admin-login">
                            <div className="flex w-24 h-14 justify-center cursor-pointer items-center hover:bg-ingrey rounded-md hover:text-white text-[17px]">
                                Admin
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex w-9/12 justify-between ">
                    <div className="w-1/3">
                        <h6 className="text-2xl mb-3 font-bebasneue">WELCOME</h6>
                        <p className="text-5xl font-bebasneue">
                            is simply dummy <br /> text of the <br />printing and lorem <br />
                            ipsum industry
                        </p>
                    </div>

                    <form className="flex flex-col w-7/12 gap-10" onSubmit={handleSubmit}>
                        <input
                            className="h-20 focus:outline-none bg-ingrey px-[3rem] rounded-lg"
                            placeholder="Name"
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />

                        <input
                            className="h-20 focus:outline-none bg-ingrey px-[3rem] rounded-lg"
                            placeholder="Email or Phone Number"
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />

                        <div className="relative">
                            <input
                                className="h-20 w-full focus:outline-none bg-ingrey px-[3rem] rounded-lg"
                                placeholder="Password"
                                type={showPassword1 ? 'text' : 'password'}
                                name="password1"
                                id="password1"
                                value={formData.password1}
                                onChange={handleInputChange}
                            />
                            <Image
                                onClick={togglePasswordVisibility1}
                                width={0}
                                height={0}
                                className="absolute w-7 top-[50%] translate-y-[-50%] right-12"
                                src="/Lock.svg"
                                alt="Toggle Password Visibility"
                            />
                        </div>

                        <div className="relative">
                            <input
                                className="h-20 w-full focus:outline-none bg-ingrey px-[3rem] rounded-lg"
                                placeholder="Confirm Password"
                                type={showPassword2 ? 'text' : 'password'}
                                name="password2"
                                id="password2"
                                value={formData.password2}
                                onChange={handleInputChange}
                            />
                            <Image
                                onClick={togglePasswordVisibility2}
                                width={0}
                                height={0}
                                className="absolute w-7 top-[50%] translate-y-[-50%] right-12"
                                src="/Lock.svg"
                                alt="Toggle Password Visibility"
                            />
                        </div>

                        <div className="flex gap-5">
                            <input
                                className="w-4 accent-ingrey focus:outline-none cursor-pointer"
                                type="checkbox"
                                name="terms"
                                id="terms"
                                checked={formData.terms}
                                onChange={handleCheckboxChange}
                                required
                            />
                            <label htmlFor="terms">
                                <p className="text-[20px]">
                                    I agree to the <Link href="/" className="text-inyellow">
                                        terms and conditions
                                    </Link>
                                </p>
                            </label>
                        </div>

                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="bg-inyellow rounded-lg w-[10rem] text-black h-16 font-bold text-[20px]"
                            >
                                SIGN UP
                            </button>
                            <div className="relative">
                                <Link href="/login">
                                    <p className="text-[17px]">
                                        Do you already have an <br />account? Please use the{' '}
                                    </p>
                                    <p className="absolute left-0 text-inyellow">Login</p>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;