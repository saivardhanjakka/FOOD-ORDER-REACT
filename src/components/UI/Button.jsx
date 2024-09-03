import React from 'react';
// Define the Button component
export default function Button({ children, textOnly, className, ...props }) {
  // Determine CSS classes based on textOnly prop
  let cssClasses = textOnly ? 'text-button' : 'button';

  // Combine incoming className prop with internal cssClasses
  cssClasses += ' '+ className; 

  // Render the button with all remaining props spread onto it
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
