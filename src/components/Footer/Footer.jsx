import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-slate-950 
    border border-t-2 border-t-black text-white">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                            <p className="text-sm text-gray-600">
                                &copy; Copyright 2023. All Rights Reserved by 
                                <a href="https://www.linkedin.com/in/sharma01ketan" 
                                target="_blank" rel="noopener noreferrer"
                                className="text-sky-500"
                                > sharma01ketan</a>.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-6 text-s font-bold uppercase text-slate-50 text-left">
                                Company
                            </h3>
                            <ul className="text-left">
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:text-slate-100 text-gray-500"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:text-slate-100 text-gray-500"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:text-slate-100 text-gray-500"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium hover:text-slate-100 text-gray-500"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-6 text-s font-bold uppercase text-slate-50 text-left">
                                Support
                            </h3>
                            <ul className="text-left">
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:text-slate-100 text-gray-500"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:text-slate-100 text-gray-500"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:text-slate-100 text-gray-500"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium hover:text-slate-100 text-gray-500"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-6 text-s font-bold uppercase text-slate-50 text-left">
                                Legals
                            </h3>
                            <ul className="text-left">
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:text-slate-100 text-gray-500"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:text-slate-100 text-gray-500"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium hover:text-slate-100 text-gray-500"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer