"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerApi = void 0;
function errorHandlerApi(err, req, res, next) {
    console.log('API error handler foi executado: ${err}');
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Erro Interno do Servidor'
    });
}
exports.errorHandlerApi = errorHandlerApi;
