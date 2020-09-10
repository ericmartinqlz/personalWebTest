import './repo-card.js';

class RepoList extends HTMLElement{
    constructor(){
        super();
    }

    set works(works){
        this._works = works;
        this.render();
    }

    render(){
        this.innerHTML = `<style>
        repo-list{
            display: grid;
            grid-template-columns: repeat(auto-fit ,minmax(400px,1fr));
            grid-gap: 1rem 1rem;
        }
        
        repo-list .card{
            height: 200px;
            background: #83b6f8;
            border-radius: 20px;
            transition-duration: 0.3s;
            padding: 20px;
            color: #052a5a;
        }
        
        repo-list .card:hover{
            transform: scale(1.02, 1.02);
            box-shadow: 0 5px 15px -5px #00000070;
            background: #6ca6f1;
        }
        
        repo-list .card .card-title{
            margin-bottom: 10px;
        }
        
        repo-list .card h3{
            font-size: 16pt;
            font-weight: 500;
        }
        
        repo-list .card .card-body{
            min-height: 40px;
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin-bottom: 30px;
        }
        
        repo-list .card p{
            font-size: 12pt;
        }
        
        repo-list .card .card-foot a{
            color: #fff;
            text-decoration: none;
        }

        repo-list .btn-repo, repo-list .btn-open{
            padding: 5px 10px;
            border-radius: 5px;
            transition-duration: 0.3s;
        }
        repo-list .btn-open{
            background: #1273f3;
            border: 1.5px solid #1273f3;
        }
        repo-list .btn-open:hover{
            background: #084696;
            border: 1.5px solid #084696;
        }
        repo-list .btn-repo{
            border: 1.5px solid black;
            color: black !important;
        }
        repo-list .btn-repo:hover{
            border: 1.5px solid grey;
            color: grey !important;
        }

        @media screen and (max-width: 768px){
            section .work-cont{
                grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
            }
        }
        </style>`;
        this._works.forEach(work => {
            const repoCardElement = document.createElement("repo-card");
            repoCardElement.work = work
            this.appendChild(repoCardElement);
        });
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("repo-list", RepoList);