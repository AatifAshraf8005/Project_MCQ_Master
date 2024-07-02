import React, {useEffect} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Mcq.css';

const Math = () => {

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
    <>
      <Header />
      <main>
        <section className="mcq-container">
          <div className="mcq">
            <h2>Question 1: What is the value of x and y, if 2i + 3j = xi + yj?</h2>
            <ul className="options">
              <li className="option" data-correct="false">3,2</li>
              <li className="option" data-correct="false">0,0</li>
              <li className="option" data-correct="false">4,9</li>
              <li className="option" data-correct="true">2,3</li>
            </ul>
            <h2>Question 2: A point from a vector starts is called __ and where it ends is called its __</h2>
            <ul className="options">
              <li className="option" data-correct="true">initial point, endpoint</li>
              <li className="option" data-correct="false">origin, endpoint</li>
              <li className="option" data-correct="false">terminal point, endpoint</li>
              <li className="option" data-correct="false">initial point, terminal point</li>
            </ul>
            <h2>Question 3: If z=3+4i,then modulus of z is</h2>
            <ul className="options">
              <li className="option" data-correct="false">7</li>
              <li className="option" data-correct="false">25</li>
              <li className="option" data-correct="true">5</li>
              <li className="option" data-correct="false">34</li>
            </ul>
            <h2>Question 4: Conjugate of complex number z=-3+i is</h2>
            <ul className="options">
              <li className="option" data-correct="false">3-i</li>
              <li className="option" data-correct="true">-3-i</li>
              <li className="option" data-correct="false">3+i</li>
              <li className="option" data-correct="false">-3+i</li>
            </ul>
            <h2>Question 5: Curl of vector field represents</h2>
            <ul className="options">
              <li className="option" data-correct="false">Laurent field</li>
              <li className="option" data-correct="false">Irrotational field</li>
              <li className="option" data-correct="false">Magnetic field</li>
              <li className="option" data-correct="true">Rotational Field</li>
            </ul>
            <h2>Question 6: Which of the following can be represented using Fourier Series?</h2>
            <ul className="options">
              <li className="option" data-correct="false">Only continuous functions</li>
              <li className="option" data-correct="false">Both periodic and non-periodic</li>
              <li className="option" data-correct="false">Only non-periodic functions</li>
              <li className="option" data-correct="true">Only periodic functions</li>
            </ul>
            <h2>Question 7: Roots of equation is ?</h2>
            <ul className="options">
              <li className="option" data-correct="true">i,-i</li>
              <li className="option" data-correct="false">1,i</li>
              <li className="option" data-correct="false">1,-1</li>
              <li className="option" data-correct="false">-1,i</li>
            </ul>
            <h2>Question 8: Cube roots of Unity are</h2>
            <ul className="options">
              <li className="option" data-correct="false">1,-1,0</li>
              <li className="option" data-correct="true">1,w,w^2</li>
              <li className="option" data-correct="false">1,1,1</li>
              <li className="option" data-correct="false">None of the above</li>
            </ul>
            <h2>Question 9: Curl of a vector field represents</h2>
            <ul className="options">
              <li className="option" data-correct="false">Both scalar and vector</li>
              <li className="option" data-correct="false">Never be a vector</li>
              <li className="option" data-correct="false">Scalar</li>
              <li className="option" data-correct="true">Vector</li>
            </ul>
            <h2> Question 10: Which axis is known as real axis in argand plane</h2>
            <ul className="options">
              <li className="option" data-correct="true">X axis</li>
              <li className="option" data-correct="false">Y axis</li>
              <li className="option" data-correct="false">Z axis</li>
              <li className="option" data-correct="false">Any axis</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Math;
