import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Mcq.css';

const Mern = () => {
    useEffect(() => {
        const options = document.querySelectorAll('.option');

        options.forEach(option => {
            option.addEventListener('click', function () {
                options.forEach(opt => opt.classList.remove('correct', 'incorrect'));
                if (option.getAttribute('data-correct') === 'true') {
                    option.classList.add('correct');
                } else {
                    option.classList.add('incorrect');
                }
            });
        });

        // Cleanup function to remove event listeners when the component unmounts
        return () => {
            options.forEach(option => {
                option.removeEventListener('click', () => {});
            });
        };
    }, []);

    return (
        <div>
            <Header />
            <main>
                <section className="mcq-container">
                    <div className="mcq">
                        <h2>Question 1: Mean stack is a ?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">Angular-based framework</li>
                            <li className="option" data-correct="true">JavaScript-based framework</li>
                            <li className="option" data-correct="false">Python-based framework</li>
                            <li className="option" data-correct="false">C-based framework</li>
                        </ul>
                        <h2>Question 2: MongoDB stores data in which format?</h2>
                        <ul className="options">
                            <li className="option" data-correct="true">JSON</li>
                            <li className="option" data-correct="false">CSV</li>
                            <li className="option" data-correct="false">XLS</li>
                            <li className="option" data-correct="false">Text</li>
                        </ul>
                        <h2>Question 3: Which of the following company created Angular</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">Microsoft</li>
                            <li className="option" data-correct="false">IBM</li>
                            <li className="option" data-correct="true">Google</li>
                            <li className="option" data-correct="false">Apache</li>
                        </ul>
                        <h2>Question 4: A software service that allows 2 or more applications to talk to each other?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">REST</li>
                            <li className="option" data-correct="true">API</li>
                            <li className="option" data-correct="false">Both A and B</li>
                            <li className="option" data-correct="false">None of the above</li>
                        </ul>
                        <h2>Question 5: How can we check the installed version of Node?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">npm -version</li>
                            <li className="option" data-correct="false">npm getversion</li>
                            <li className="option" data-correct="true">node -version</li>
                            <li className="option" data-correct="false">None of the above</li>
                        </ul>
                        <h2>Question 6: What does the fs module stand for?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">File Store</li>
                            <li className="option" data-correct="false">File Service</li>
                            <li className="option" data-correct="false">File Software</li>
                            <li className="option" data-correct="true">File System</li>
                        </ul>
                        <h2>Question 7: What is the full form of REPL?</h2>
                        <ul className="options">
                            <li className="option" data-correct="true">Real Eval Print Loop</li>
                            <li className="option" data-correct="false">Research Eval Program Learn</li>
                            <li className="option" data-correct="false">Read Earn Point Learn</li>
                            <li className="option" data-correct="false">Real Eval Point Loop</li>
                        </ul>
                        <h2>Question 8: What is Callback?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">The callback is a technique in which a method calls back the caller method.</li>
                            <li className="option" data-correct="true">The callback is an asynchronous equivalent for a function.</li>
                            <li className="option" data-correct="false">Both of the above</li>
                            <li className="option" data-correct="false">None of the above</li>
                        </ul>
                        <h2>Question 9: What are arbitrary inputs of components in react also known as?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">Elements</li>
                            <li className="option" data-correct="false">Keys</li>
                            <li className="option" data-correct="false">Ref</li>
                            <li className="option" data-correct="true">props</li>
                        </ul>
                        <h2> Question 10: Which of the following is used in React.js to increase performance?</h2>
                        <ul className="options">
                            <li className="option" data-correct="true">Virtual DOM</li>
                            <li className="option" data-correct="false">Original DOM</li>
                            <li className="option" data-correct="false">Both A and B</li>
                            <li className="option" data-correct="false">None of the above</li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Mern;
