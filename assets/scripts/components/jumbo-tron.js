class JumboTron extends HTMLElement {
 
    constructor() {
        super();
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <style>
            jumbo-tron{
                color: #2e2e2e;
                display: flex;
            }
            
            jumbo-tron .profile-image, jumbo-tron .profile-title{
                flex: 1;
                display: flex;
                padding: 0 2%;
                /* border: 5px solid #11e; */
            }
            
            jumbo-tron .profile-title{
                justify-content: flex-end;
                align-items: center;
            }
            
            jumbo-tron .profile-title h1{
                font-size: 28pt;
                font-weight: 400;
            }
            jumbo-tron .profile-title h1 span{
                font-size: 46pt;
                color: #1273f3;
                transition-duration: 0.3s;
            }
            
            jumbo-tron .name-hover:hover{
                color: #084696;
            }
            
            jumbo-tron .profile-image .shape{
                background: url(assets/images/pp-01.jpeg) center;
                background-size: cover;
                animation: morph 8s ease-in-out infinite;
                border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                height: 350px;
                width: 350px;
                transition: all 1s ease-in-out;
                z-index: 5;
            }
            
            .profile-btn{
                margin: 25px 0;
                border: none;
                background: #1273f3;
                color: white;
            }
            .profile-btn:hover{
                background: #084696;
            }
            
            @keyframes morph {
                0% {
                    border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
                } 
                
                50% {
                    border-radius:  30% 60% 70% 40% / 50% 60% 30% 60%;
                }
                
                100% {
                    border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
                } 
            }

            @media screen and (max-width: 768px){
                jumbo-tron, jumbo-tron .profile-title{
                    display: block;
                }
            
                jumbo-tron .profile-title{
                    text-align: center;
                    padding-top: 50px;
                }
            
                jumbo-tron .profile-title h1{
                    font-size: 23pt;
                }
            
                jumbo-tron .profile-title h1 span{
                    font-size: 39pt;
                    font-weight: 400;
                }
            
                jumbo-tron .profile-image{
                    padding-top: 25px;
                    justify-content: center;
                }
            
                jumbo-tron .profile-image .shape{
                    width: 300px;
                    height: 300px;
                }
            }

            @media screen and (max-width:576px){
                jumbo-tron .profile-title h1{
                    font-size: 18pt;
                }
            
                jumbo-tron .profile-title h1 span{
                    font-size: 32pt;
                    font-weight: 400;
                }
            
                jumbo-tron .profile-image .shape{
                    width: 250px;
                    height: 250px;
                }
            }
        </style>
        <div class="profile-title">
            <div class="profile-info">
                <h1>Hello!<br> I'm <span class="bold" id="profile-name">Eric Martin</span></h1>
                <p>College Student - Junior Front-end Dev</p>
                <a href="#work"><button class="profile-btn">Check my Work</button></a>
            </div>
        </div>

        <div class="profile-image">
            <div class="shape"></div>
        </div>
        `;
    }
 }
  
 customElements.define("jumbo-tron", JumboTron);