class Form {
    constructor(controls, actions) {
        this.controls = controls;
        this.actions = actions;
    }

    getContent() {
        return `
            <form method="post" action="${this.actions}">
                ${this.controls.reduce((acc, control) => {
                    return acc + `
                        <div>
                            ${this.getLabel(control)}
                            ${this.getInput(control)}
                        </div>
                    `;
                },"")}
                <button type="submit">Enviar</button>
            </form>
        `;
    }

    getLabel(control) {
        return `<label>${control.text}</label>`;
    }

    getInput(control) {
        return `<input type="${control.type}" id="${control.name}" name="${control.name}"/>`;
    }
}

class FormBuilder {
    constructor() {
        this.reset();
    }

    setAction(action) {
        this.action = action;
        return this;
    }

    setText(name, text) {
        this.controls.push({ name, text, type: "text" });
        return this;
    }

    setEmail(name, text) {
        this.controls.push({ name, text, type: "email" });
        return this;
    }

    setCheckBox(name, text) {
        this.controls.push({ name, text, type: "checkbox" });
        return this;
    }

    setColor(name, text) {
        this.controls.push({ name, text, type: "color" });
        return this;
    }

    reset() {
        this.action = "";
        this.controls = [];
    }

    build() {
        const frm = new Form(this.controls, this.action);
        this.reset();
        return frm;
    }
}

class FormDirector {
    constructor(formBuilder) {
         this.setBuilder(formBuilder)
    }

    setBuilder(formBuilder) {
        this.formBuilder = formBuilder;
    }

    createPeopleForm() {
        this.formBuilder.reset();
        this.formBuilder
            .setText("firstName", "nombre")
            .setText("lastName", "apellido");
    }

    createContactForm() {
        this.formBuilder.reset();
        this.formBuilder
            .setText("name", "Nombre del Interesado")
            .setEmail("email", "Correo Electrónico")
            .setText("message", "Mensaje");
    }
}

const frmBuilder = new FormBuilder();
const formPeople = frmBuilder
    .setAction("add.php")
    .setText("firstName", "nombre")
    .setText("lastName", "apellido")
    .setCheckBox("drinker", "Es bebedor?")
    .setColor("favoriteColor", "Color favorito")
    .build();

form1.innerHTML = formPeople.getContent();

const formMail = frmBuilder.setAction("send.php")
    .setText("name", "nombre")
    .setEmail("email", "Correo electronico")
    .build();

form2.innerHTML = formMail.getContent();


const director = new FormDirector(frmBuilder);
director.createPeopleForm();
form3.innerHTML = frmBuilder.build().getContent();

director.createPeopleForm();
form4.innerHTML = frmBuilder.build().getContent();

director.createContactForm();
form5.innerHTML = frmBuilder.build().getContent();