import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Mcq.css';

const OS = () => {
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
                        <h2>Question 1: In Operating Systems, which of the following are CPU scheduling algorithms?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">Priority</li>
                            <li className="option" data-correct="false">Round Robin</li>
                            <li className="option" data-correct="false">Shortest job first</li>
                            <li className="option" data-correct="true">All of the above</li>
                        </ul>
                        <h2>Question 2: When was the first operating system developed?</h2>
                        <ul className="options">
                            <li className="option" data-correct="true">1950</li>
                            <li className="option" data-correct="false">1949</li>
                            <li className="option" data-correct="false">1947</li>
                            <li className="option" data-correct="false">1951</li>
                        </ul>
                        <h2>Question 3: Which of the following is the extension of Notepad?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">.xls</li>
                            <li className="option" data-correct="true">.txt</li>
                            <li className="option" data-correct="false">.bmp</li>
                            <li className="option" data-correct="false">.ppt</li>
                        </ul>
                        <h2>Question 4: What else is a command interpreter called?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">prompt</li>
                            <li className="option" data-correct="false">kernel</li>
                            <li className="option" data-correct="false">command</li>
                            <li className="option" data-correct="true">shell</li>
                        </ul>
                        <h2>Question 5: What is the mean of the Booting in the operating system?</h2>
                        <ul className="options">
                            <li className="option" data-correct="true">Restarting computer</li>
                            <li className="option" data-correct="false">Install the program</li>
                            <li className="option" data-correct="false">To scan</li>
                            <li className="option" data-correct="false">To turn off</li>
                        </ul>
                        <h2>Question 6: When does page fault occur?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">The page is present in memory</li>
                            <li className="option" data-correct="false">The deadlock occurs</li>
                            <li className="option" data-correct="true">The page does not present in memory</li>
                            <li className="option" data-correct="false">The buffering occurs</li>
                        </ul>
                        <h2>Question 7: Banker's algorithm is used?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">To deadlock recovery</li>
                            <li className="option" data-correct="false">To solve the deadlock</li>
                            <li className="option" data-correct="true">To prevent deadlock</li>
                            <li className="option" data-correct="false">None of these</li>
                        </ul>
                        <h2>Question 8: Which is the Linux operating system?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">Private operating system</li>
                            <li className="option" data-correct="true">Open-source operating system</li>
                            <li className="option" data-correct="false">Windows operating system</li>
                            <li className="option" data-correct="false">None of the above</li>
                        </ul>
                        <h2>Question 9: What is the full name of the IDL?</h2>
                        <ul className="options">
                            <li className="option" data-correct="false">Interface direct language</li>
                            <li className="option" data-correct="false">Interface data library</li>
                            <li className="option" data-correct="true">Interface definition language</li>
                            <li className="option" data-correct="false">None of these</li>
                        </ul>
                        <h2> Question 10: Which of the following is a single-user operating system?</h2>
                        <ul className="options">
                            <li className="option" data-correct="true">Ms-Dos</li>
                            <li className="option" data-correct="false">Windows</li>
                            <li className="option" data-correct="false">MAC</li>
                            <li className="option" data-correct="false">None of the above</li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default OS;
