// compile LESS to CSS

const less = require('less');
const fs = require('fs');
const path = require('path');

// Define the paths for LESS and CSS files
const lessFile = path.join(__dirname, 'public', 'css', 'style.less');
const cssFile = path.join(__dirname, 'public', 'css', 'style.css');

// Read the LESS file
fs.readFile(lessFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading LESS file:', err);
    return;
  }

  // Render the LESS to CSS
  less.render(data, { javascriptEnabled: true }, (err, output) => {
    if (err) {
      console.error('Error rendering LESS:', err);
      return;
    }

    // Write the compiled CSS to the file
    fs.writeFile(cssFile, output.css, (err) => {
      if (err) {
        console.error('Error writing CSS file:', err);
        return;
      }
      console.log('CSS compiled successfully!');
    });
  });
});
