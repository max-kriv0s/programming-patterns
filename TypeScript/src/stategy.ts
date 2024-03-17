class User1 {
    githubToken: string;
    jwtToken: string;
}

interface AuthStrategy {
    auth(user: User1): boolean;
}

class Auth {
    constructor(private strategy: AuthStrategy) {}

    setStrategy(strategy: AuthStrategy) {
        this.strategy = strategy;
    }

    public authUser(user: User1): boolean {
        return this.strategy.auth(user);
    }
}

class JWTStrategy implements AuthStrategy {
    auth(user: User1): boolean {
        if (user.jwtToken) {
            return true;
        }
        return false;
    }
}

class GithubStrategy implements AuthStrategy {
    auth(user: User1): boolean {
        if (user.githubToken) {
            // Идем в API
            return true;
        }
        return false;
    }
}

const user1 = new User1();
user1.jwtToken = 'token';
const auth1 = new Auth(new JWTStrategy());
console.log(auth1.authUser(user1));
auth1.setStrategy(new GithubStrategy());
console.log(auth1.authUser(user1));