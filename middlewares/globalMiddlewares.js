function serverError(err, req, res, next) {
    res.status(500).json({
        error: true,
        message: err.message,
        stack: err.stack
    })
}

function notFound(req, res, next) {
    res.status(404).json({
        error: true,
        message: 'endpoint not found. 404',
    })
}
module.exports = {
    serverError,
    notFound
}