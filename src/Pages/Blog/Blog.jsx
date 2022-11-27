import React from 'react';
import prototype from '../../assets/prototype.png'
import unitTest from '../../assets/unitTest.jpg'
import { IoCheckmarkSharp } from "react-icons/io5";

const Blog = () => {

    return (
        <div className='max-w-[1000px] mx-auto lg:py-20 md:py-12 py-10'>
            <div className='pb-10'>
                <h1 className='text-primary md:text-5xl sm:text-4xl text-2xl text-center font-specially font-bold  tracking-tight'>4 React Q & A</h1>
                <div className='flex justify-center mt-2'>
                    <div className='w-24 h-[6px] bg-accent'></div>
                </div>
            </div>

            <div className="single-blog p-5 border border-gray-300 mt-5 shadow-lg rounded-xl bg-white">

                <div>
                    <h3 className=' font-bold md:text-2xl text-lg text-black font-specially'><span className='md:text-2xl  text-lg font-extrabold text-primary' >1. </span> What are the different ways to manage a state in a React application?</h3>
                    <div className="text-md mt-4">
                        There are four main types of state you need to properly manage in your React apps: <br /> <br />

                        <ul className='ml-2 my-3'>
                            <li className='flex items-center gap-1 pb-2'>
                                <IoCheckmarkSharp className='text-xl' />
                                <p className='text-lg  text-black '>
                                    <b>Local state</b> - Local state is data we manage in one or another component.
                                </p>
                            </li>
                            <li className='flex items-center gap-1 pb-2'>
                                <IoCheckmarkSharp className='text-xl' />
                                <p className='text-lg  text-black '>
                                    <b>Global (UI) state</b> - Global state is data we manage across multiple components.
                                </p>
                            </li>
                            <li className='flex items-center gap-1 pb-2'>
                                <IoCheckmarkSharp className='text-xl' />
                                <p className='text-lg  text-black '>
                                    <b>Server state</b> - Data that comes from an external server that must be integrated with our UI state.
                                </p>
                            </li>
                            <li className='flex items-center gap-1 pb-2'>
                                <IoCheckmarkSharp className='text-xl' />
                                <p className='text-lg  text-black '>
                                    <b>URL state</b> - Data that exists on our URLs, including the pathname and query parameters.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Single Blog End */}

            <div className="single-blog p-5 border border-gray-300 mt-5 shadow-lg rounded-xl bg-white ">
                <h3 className=' font-bold md:text-2xl text-lg text-black font-specially'><span className='md:text-2xl  text-lg font-extrabold text-primary' >2. </span> How does prototypical inheritance work?</h3>
                <h4 className='md:text-2xl  text-lg font-bold mt-3 text-primary underline'>Answer:</h4>
                <p className='text-lg sm:text-md mt-1 text-black font-medium'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. </p>
                <p className='text-lg text-black mt-3'>Traditionally, in order to get and set the <strong>[[Prototype]] </strong> of an object, we use <strong>Object.getPrototypeOf</strong> and <strong>Object.setPrototypeOf.</strong> Nowadays, in modern language, it is being set using <strong>__proto__</strong>.</p>
                <div className='flex justify-center my-4'>
                    <img src={prototype} alt="" />
                </div>
                <p className='font-bold text-xl mt-4'>Syntax:<span className="ai-anchor"></span></p>
                <div className="my-3 ml-8">
                    <span className='py-2 px-3 bg-gray-200 text-lg rounded text-black font-bold font-specially'>ChildObject.__proto__ = ParentObject</span>
                </div>
                <div>
                    <p className='text-lg text-black mt-3'>So, the core idea of <strong>Prototypal Inheritance</strong> is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
                </div>
            </div>
            {/* Single Blog End */}

            <div className="single-blog p-5 border border-gray-300 mt-5 shadow-lg rounded-xl bg-white ">
                <h3 className='text-black font-bold md:text-2xl text-lg font-specially'><span className='md:text-2xl  text-lg font-extrabold text-primary' >3. </span> What is a unit test? Why should we write unit tests?</h3>
                <h4 className='md:text-2xl  text-lg font-bold mt-3 text-primary underline'>Answer:</h4>
                <p className='text-lg sm:text-md mt-1 text-black font-medium'><strong>Unit Testing</strong> is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. </p>
                <p className='text-lg text-black mt-3'>Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing.  </p>
                <div className='flex justify-center my-4'>
                    <img src={unitTest} alt="" />
                </div>
                <p className='font-bold text-xl mt-4'>Heres why should we write unit test:-</p>
                <div className='mt-3'>
                    <p className='text-lg text-black font-medium'>To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:</p>
                    <ol className='list-decimal mt-2 ml-6'>
                        <li><span className="text-lg text-black">Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users.</span></li>
                        <li><span className="text-lg text-black">Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.</span></li>
                        <li><span className="text-lg text-black">It simplifies the debugging process.</span></li>
                        <li><span className="text-lg text-black">Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.</span></li>
                        <li><span className="text-lg text-black">Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.</span></li>
                        <li><span className="text-lg text-black">Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.</span></li>
                        <li><span className="text-lg text-black">In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback. </span></li>
                    </ol>
                </div>
            </div>
            {/* Single Blog End */}

            <div className="single-blog p-5 border border-gray-300 mt-5 shadow-lg rounded-xl bg-white">

                <div>
                    <h3 className='text-black font-bold md:text-2xl text-lg font-specially'><span className='md:text-2xl  text-lg font-extrabold text-primary' >4. </span>React vs. Angular vs. Vue?</h3>

                    <table className="text-left w-full border-collapse mt-4">
                        <thead>
                            <tr>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">React</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Angular</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Vue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">Rich Library to build UI</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    A Framework
                                </td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    A Framework
                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">Everything is on JavaScript</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    Based on TypeScript</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    Based on JavaScript and HTML</td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">Developed by Facebook on March 2013 </td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    Developed by Google on September 2016
                                </td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    Developed by Former Google employee on February 2014
                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">React provides you with modern widgets and in-built features that help you develop SPA and mobile apps for different platforms using a single codebase.</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    Undoubtedly, Angular is a mature framework, so if you want to develop native apps, hybrid apps, and web apps, Angular is good to go.
                                </td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    Offering a wide choice of widgets that enables you to build advanced SPA and start supporting Native apps.
                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">Suitable for modern web development and native-rendered apps for iOS and Android</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    Angular is an ideal approach to build large-scale, feature-rich applications or enterprise-level apps.
                                </td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    Ideal for web development and single-page applications

                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">Easy to access as it is based on JavaScript</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    A steep learning curve
                                </td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    A small learning curve
                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">Ensuring flexible development environment	</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    It embraces structure-based framework
                                </td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    In case, your focus is on separation of concerns
                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">Based on Virtual DOM (Document Object Model) JavaScript</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    Based on MVC (Model-View-Controller) architecture
                                </td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    Based on Virtual DOM (Document Object Model)
                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">Used by Facebook, Uber, Netflix, Twitter, Reddit, Paypal, Walmart, and others</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    Used by Google, Forbes, Wix, and weather.com
                                </td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    Used by Alibaba, Baidu, GitLab, and others
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Single Blog End */}

        </div>
    );
};

export default Blog;