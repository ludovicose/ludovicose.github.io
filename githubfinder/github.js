class GitHub {
    constructor() {
        this.clientId = 'd5b766e858b1ff337dd5';
        this.clientSecret = 'c203727ef6ff7bad6d3b87c1b16e49ff262bfdd6';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}