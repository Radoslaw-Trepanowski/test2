API.addSettings('logger', {
    // gather logs in array
    onRow: function(logName, log, settings, ctx){
        if (!ctx.logs) ctx.logs = [];
        ctx.logs.push(log);
    },
    // onEnd trigger save (by returning a value)
    onEnd: function(name, settings, ctx){
        return ctx.logs;
    },
    // Transform logs into a string
    // we save as CSV because qualtrics limits to 20K characters and this is more efficient.
    serialize: function (name, logs) {
        var headers = ['group', 'latency', 'block', 'stimulus', 'correct'];
        var content = logs.map(function (log) { return [log.data.alias, log.latency, log.data.block, log.data.stimIndex, log.data.score]; });
        content.unshift(headers);
        return toCsv(content);

        function toCsv(matrice) { return matrice.map(buildRow).join('\n'); }
        function buildRow(arr) { return arr.map(normalize).join(','); }
        // wrap in double quotes and escape inner double quotes
        function normalize(val) {
            var quotableRgx = /(\n|,|")/;
            if (quotableRgx.test(val)) return '"' + val.replace(/"/g, '""') + '"';
            return val;
        }
    },
    // Set logs into an input (i.e. put them wherever you want)
    send: function(name, serialized){
        window.minnoJS.logger(serialized);
    }
});
