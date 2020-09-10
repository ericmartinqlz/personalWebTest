import '../components/repo-list.js';
import works from '../data/works.js';

const repoMain = () => {
    const repoListElement = document.querySelector("repo-list");
    repoListElement.works = works;
}

export default repoMain;