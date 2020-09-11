class RepoCard extends HTMLElement{
    constructor() {
        super();
    }

    set work(work) {
        this._work = work;
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="card">
            <div class="card-title">
                <h3>${this._work.repoName}</h3>
            </div>
            <div class="card-body">
                <p>
                    ${this._work.descriptive}
                </p>
            </div>
            <div class="card-foot">
                <a href="${this._work.repoURL}" class="btn-open">Open</a>
                <a href="${this._work.ghURL}" class="btn-repo">Repo</a>
            </div>
        </div>`;
    }
}

customElements.define("repo-card", RepoCard);
