System.register(["./diaDaSemana"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (diaDaSemana_1_1) {
                exportStar_1(diaDaSemana_1_1);
            }
        ],
        execute: function () {
        }
    };
});
