function changeFillColor() {
  const fillColorsMapping = {
    'rgb(83,177,253)': '#0f1430',
    'rgb(82,139,255)': '#0f1430',
    '#528BFF': '#0f1430',
    '#528BFF': '#0f1430',
    '#A48AFB': '#0f1430',
    // Init
    'rgb(180,180,180)': '#1E90FC',
    '#53B1FD': '#1E90FC',
    // Proc
    'rgb(34,204,238)': '#246FF0',
    '#22CCEE': '#246FF0',
    // Seed
    '#8098F9': ' #2A4EE5',
    // Won
    '#67E3F9': '#302DD9',
    'rgb(201,219,238)': '#302DD9',
    'rgb(103,227,249)': '#302DD9',
    // Lost
    '#36BFFA': '#360CCD',
  };

  // Find all elements with the class 'echarts'
  const customize_svgs = document.querySelectorAll('.echarts');

  customize_svgs.forEach((customize_svg) => {
    // Find all matching paths within the current '.echarts' element
    const matchingPaths = customize_svg.querySelectorAll('path[fill]');

    // Create an object to store color classes
    const colorClasses = {};

    matchingPaths.forEach((path) => {
      const currentFill = path.getAttribute('fill');
      console.log('Current Fill', currentFill);

      if (fillColorsMapping[currentFill]) {
        // Update fill and stroke with the mapped color
        path.setAttribute('fill', fillColorsMapping[currentFill]);
        path.setAttribute('stroke', fillColorsMapping[currentFill]);

        // Add a custom class based on the color
        if (!colorClasses[currentFill]) {
          colorClasses[currentFill] = `v-color-${
            Object.keys(colorClasses).length + 1
          }`;
        }
        path.classList.add(colorClasses[currentFill]);
      }
    });
  });
}

// Call changeFillColor immediately
changeFillColor();
// setInterval(changeFillColor, 5000);
