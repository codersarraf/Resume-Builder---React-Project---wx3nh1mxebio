import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypingEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Welcome To ResumeBuilder.io',
        1000,
        'A Responsive ResumeCreator..', // Deletes 'One' and types 'Two'
        2000,
        // () => {
        //   console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        // }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{display: 'inline-block' }}
    />
  );
};

export default TypingEffect;