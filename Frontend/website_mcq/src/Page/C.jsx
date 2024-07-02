import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Mcq.css'; // Ensure you have the correct path to your CSS file

const C = () => {
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
                        <h2>Question 1: Who is the father of C language?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">Rasmus Lerdorf</li>
                            <li className="option" data-correct="false">Steve Jobs</li>
                            <li className="option" data-correct="true">Dennis Ritchie</li>
                            <li className="option" data-correct="false">James Gosling</li>
                        </ul>
                        <h2>Question 2: Which one of the following is a loop construct that will always be executed once?</h2>
                        <ul className="options">
                            <li className="option" data-correct="true">do while</li>
                            <li className="option" data-correct="false">for</li>
                            <li className="option" data-correct="false">switch</li>
                            <li className="option" data-correct="false">while</li>
                        </ul>
                        <h2>Question 3: What feature makes C++ so powerful?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">Easy implementation</li>
                            <li className="option" data-correct="false">Reusing the old code</li>
                            <li className="option" data-correct="false">Easy memory management</li>
                            <li className="option" data-correct="true">All of the above</li>
                        </ul>
                        <h2>Question 4: Which of the following cannot be a variable name in C?</h2>
                        <ul className="options">
                            <li className="option" data-correct="true">volatile</li>
                            <li className="option" data-correct="false">true</li>
                            <li className="option" data-correct="false">friend</li>
                            <li className="option" data-correct="false">export</li>
                        </ul>
                        <h2>Question 5: What is #include&lt;stdio.h&gt;?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">Inclusion directive</li>
                            <li className="option" data-correct="false">file inclusion directive</li>
                            <li className="option" data-correct="true">Preprocessor directive</li>
                            <li className="option" data-correct="false">None of the above</li>
                        </ul>
                        <h2>Question 6: Which of the following are C preprocessors?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">#ifdef</li>
                            <li className="option" data-correct="false">#define</li>
                            <li className="option" data-correct="false">#endif</li>
                            <li className="option" data-correct="true">All of the above</li>
                        </ul>
                        <h2>Question 7: scanf() is a predefined function in which header file.</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">ctype.h</li>
                            <li className="option" data-correct="true">stdio.h</li>
                            <li className="option" data-correct="false">stdlib.h</li>
                            <li className="option" data-correct="false">stdarg.h</li>
                        </ul>
                        <h2>Question 8: Which of the following is not a logical operator?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">&&</li>
                            <li className="option" data-correct="false">!</li>
                            <li className="option" data-correct="false">||</li>
                            <li className="option" data-correct="true">|</li>
                        </ul>
                        <h2>Question 9: How many bytes does “int=D” use?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">0</li>
                            <li className="option" data-correct="false">1</li>
                            <li className="option" data-correct="false">10</li>
                            <li className="option" data-correct="true">2 or 4</li>
                        </ul>
                        <h2>Question 10: C programs are converted into machine language with the help of</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">An editor</li>
                            <li className="option" data-correct="false">An Operating System</li>
                            <li className="option" data-correct="true">A compiler</li>
                            <li className="option" data-correct="false">None of these</li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default C;
