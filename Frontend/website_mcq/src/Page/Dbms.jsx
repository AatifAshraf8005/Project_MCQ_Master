import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Mcq.css';

const Dbms = () => {
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
                        <h2>Question 1: Which command deletes the whole table?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">DELETE</li>
                            <li className="option" data-correct="true">DROP</li>
                            <li className="option" data-correct="false">BOTH A AND B</li>
                            <li className="option" data-correct="false">NONE OF THE ABOVE</li>
                        </ul>
                        <h2>Question 2: LHS of a FD is called?</h2>
                        <ul className="options">
                            <li className="option" data-correct="true">Determinant</li>
                            <li className="option" data-correct="false">Dependent</li>
                            <li className="option" data-correct="false">LHS</li>
                            <li className="option" data-correct="false">RHS</li>
                        </ul>
                        <h2>Question 3: Which of the following company created SQL?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">Microsoft</li>
                            <li className="option" data-correct="false">Apple</li>
                            <li className="option" data-correct="true">IBM</li>
                            <li className="option" data-correct="false">Apache</li>
                        </ul>
                        <h2>Question 4: Types of join are?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">ALL</li>
                            <li className="option" data-correct="true">Natural</li>
                            <li className="option" data-correct="false">Neither A and B</li>
                            <li className="option" data-correct="false">None of the above</li>
                        </ul>
                        <h2>Question 5: An example of SQL package is?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">Oracle</li>
                            <li className="option" data-correct="false">My SQL</li>
                            <li className="option" data-correct="true">Both A and B</li>
                            <li className="option" data-correct="false">None of the above</li>
                        </ul>
                        <h2>Question 6: Full form of DDL?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">Data Digital Language</li>
                            <li className="option" data-correct="false">Data Delimiter Language</li>
                            <li className="option" data-correct="false">Digital Data Log</li>
                            <li className="option" data-correct="true">Data Definition Language</li>
                        </ul>
                        <h2>Question 7: What is the full form of SQL?</h2>
                        <ul className="options">
                            <li className="option" data-correct="true">Structured Query Language</li>
                            <li className="option" data-correct="false">Sequence Query Language</li>
                            <li className="option" data-correct="false">Sequence Quality Language</li>
                            <li className="option" data-correct="false">None</li>
                        </ul>
                        <h2>Question 8: What is Callback?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">The callback is a technique in which a method calls back the caller method.</li>
                            <li className="option" data-correct="true">The callback is an asynchronous equivalent for a function.</li>
                            <li className="option" data-correct="false">Both of the above</li>
                            <li className="option" data-correct="false">None of the above</li>
                        </ul>
                        <h2>Question 9: Which Normal form eliminated PFD?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">1NF</li>
                            <li className="option" data-correct="false">PJNF</li>
                            <li className="option" data-correct="false">2NF</li>
                            <li className="option" data-correct="true">3NF</li>
                        </ul>
                        <h2>Question 10: Types of Join are?</h2>
                        <ul className="options">
                            <li className="option" data-correct="true">5</li>
                            <li className="option" data-correct="false">2</li>
                            <li className="option" data-correct="false">10</li>
                            <li className="option" data-correct="false">None of the above</li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Dbms;
