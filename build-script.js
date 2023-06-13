const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/app/runtime.js',
        './dist/app/polyfills.js',
        './dist/app/main.js',]
    await concat(files, "./dist/app/custom-popup.js")
    await fs.copyFile('./dist/app/styles.css','./dist/app/custom-popup.css');
})()