const del = require('del');

del(['dist']).then(() => {
    console.info('Dist folder has been deleted.\n');
});
