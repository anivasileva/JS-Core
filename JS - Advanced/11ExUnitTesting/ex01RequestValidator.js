function request(obj) {
    let methodType = obj['method'];
    if (methodType !== 'GET' && methodType !== 'POST' && methodType !== 'DELETE' && methodType !== 'CONNECT' || methodType === undefined) {
        throw new Error('Invalid request header: Invalid Method');
    }

    let url = obj['uri'];
    let regex = /^[a-zA-Z0-9\.]+$/;
    if (url === '' || (url !== '*' && !regex.test(url)) || url === undefined) {
        throw  new Error('Invalid request header: Invalid URI');
    }

    let version = obj['version'];
    if ((version !== 'HTTP/0.9' && version !== 'HTTP/1.0' && version !== 'HTTP/1.1' && version !== 'HTTP/2.0') || version === undefined) {
        throw new Error('Invalid request header: Invalid Version');
    }

    let message = obj['message'];
    let secondRegex = /^[^<>\\&'"]*$/;
    if (!secondRegex.test(message) || message === undefined) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return obj;
}
