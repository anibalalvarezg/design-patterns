class EncoderTextAbstraction {
    constructor(encoder) {
        this.encoder = encoder;
    }

    encode(str) {
        return this.encoder.encode(str);
    }

    decode(str) {
        return this.encoder.decode(str);
    }
}

class Base64EncoderImplementor {
    encode(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    }

    decode(str) {
        return decodeURIComponent(escape(window.atob(str)));
    }
}

class HTMLEncoderImplementor {
    encode(str) {
        return str.split(".").reduce((acc, cur) => {
           return acc + `<p>${cur.trim()}</p> `;
        },'');
    }

    decode(str) {
        return str.split("</p>").reduce((acc, cur) => {
            return cur !== "" ? acc + cur.replace("<p>", "") + '. ' : acc + "";
        }, '');
    }
}

const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
console.log(encoder1.encode('pato'));
console.log(encoder1.decode('cGF0bw=='));


const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());
console.log(encoder2.encode('Esto es un texto. Esto es otro. Y otro'));
console.log(encoder2.decode('<p>Esto es un texto</p><p>Esto es otro</p><p>Y otro</p>'));