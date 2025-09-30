class ClientComponent {
    constructor(url) {
        this.url = url;
    }

    async getData() {
        const response = await fetch(this.url);
        return await response.json();
    }
}

// Decorator
class ClientDecorator {
    constructor(clientComponent) {
        this.clientComponent = clientComponent;
    }

    async getData() {
        return await this.clientComponent.getData();
    }
}

// Decorator 1
class UpperCaseClientDecorator extends ClientDecorator {
    async getData() {
        const data = await super.getData();
        return data.map((item) => {
            item.title = item.title.toUpperCase();
            return item;
        });
    }
}

// Decorator 2
class HTMLClientDecorator extends ClientDecorator {
    async getData() {
        const data = await super.getData();
        return data.map((item) => {
            item.title = `<h1>${item.title}</h1>`;
            item.thumbnailUrl = `<img src="${item.thumbnailUrl}" alt="${item.title}">`;
            return item;
        });
    }
}

(async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const client = new ClientComponent(url);
    const data = await client.getData();

    const upperClient = new UpperCaseClientDecorator(client);
    const data2 = await upperClient.getData();

    const htmlClient = new HTMLClientDecorator(upperClient);
    const data3 = await htmlClient.getData();
    const htmlClient2 = new HTMLClientDecorator(client);
    const data4 = await htmlClient2.getData();

    divContent1.innerHTML = data3.reduce((ac, el) =>  {
        return ac + el.title + el.thumbnailUrl;
    }, '');

    divContent2.innerHTML = data4.reduce((ac, el) =>  {
        return ac + el.title + el.thumbnailUrl;
    }, '');

})();