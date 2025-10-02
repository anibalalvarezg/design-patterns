class DocumentContext {
    constructor() {
        this.content = "";
        this.state = new BlankState();
    }

    setState(state) {
        this.state = state;
    }

    write(text) {
        this.state.write(this, text);
    }
}

class BlankState {
    write(documentContext, text) {
        documentContext.content = text;
        documentContext.setState(new WithContentState());
    }
}

class WithContentState {
    write(documentContext, text) {
        documentContext.content += " " + text;
        documentContext.setState(new WithContentState());
    }
}

class ApprovedState {
    write(documentContext, text) {
        console.error("Documento aprobado ya no se modifica.");
    }
}

const doc = new DocumentContext();
console.log(doc);

doc.write("Hello World");
console.log(doc);
console.log(doc.state);

doc.write("Hello World");
doc.write("Hello World");
console.log(doc.content);


doc.setState(new ApprovedState());
doc.write("Hello World");
doc.write("Hello World");

doc.setState(new WithContentState())
console.log(doc.content);