const { getOptions } = require('loader-utils')

function loader(source) {
    function handler(s, l) {
        if (source.match(s)) {
            source = source.replace(s, l)
        }
        return source
    }
    const options = getOptions(this);
    if (options.mode.indexOf(options.workModes) > -1) {
        if (options.reg && options.reg.length > 0) {
            options.reg.forEach(e => {
                handler(e[0], e[1])
            })
        }
    }
    return source
};

module.exports = loader