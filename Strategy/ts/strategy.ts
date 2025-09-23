interface Strategy {
    login(user: string, password: string): boolean;
}

class LoginContext {
    private strategy!: Strategy;

    constructor(strategy: Strategy) {
        this.setStrategy(strategy);
    }

    setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log("redirect to DB")
        return user === 'admin' && password == 'entra';

    }
}

class LoginServiceStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log("redirect to Oauth Service")
        return user === 'admin' && password == 'entra';

    }
}

const auth = new LoginContext(new LoginDBStrategy());
console.log(auth.login('admin', 'entra'));
auth.setStrategy(new LoginServiceStrategy())
console.log(auth.login('admin', 'entra'));