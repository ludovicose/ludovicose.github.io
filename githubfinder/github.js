class GitHub {
    constructor() {
        this.clientId = 'd5b766e858b1ff337dd5';
        this.clientSecret = 'c203727ef6ff7bad6d3b87c1b16e49ff262bfdd6';
        this.reposCount = 5;
        this.reposSort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}