class AppBar extends HTMLElement {
 
    constructor() {
        super();
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
            <style>
                nav{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 75px;
                    color: #2e2e2e;
                }
                
                nav .logo a{
                    text-decoration: none;
                    color: #2e2e2e;
                }
                
                nav ul{
                    display: flex;
                    list-style: none;
                    transition-duration: 0.5s;
                }
                
                nav ul li{
                    padding: 10px;
                    transition-duration: 0.2s;
                }
                nav ul li:hover{
                    cursor: pointer;
                    box-shadow: inset 0 -2px 0 #1273f3;
                }
                
                nav ul li a{
                    /* font-family: 'Roboto', sans-serif; */
                    letter-spacing: -1px;
                    text-decoration: none;
                    text-transform: uppercase;
                    color: #2e2e2e;
                }
                
                #menu-toggle{
                    display: none;
                    flex-direction: column;
                    height: 20px;
                    justify-content: space-between;
                    cursor: pointer;
                }
                #menu-toggle span{
                    display: block;
                    width: 28px;
                    height: 3px;
                    border-radius: 3px;
                    background: #585858;
                    transition: all 0.5s;
                }
                
                #menu-toggle span:first-child{
                    transform-origin: 0px 0px;
                }
                #menu-toggle span:last-child{
                    transform-origin: 0px 100%;
                }
                
                #unclicked-nav{
                    display: none;
                }

                @media screen and (max-width: 768px){
                    nav{
                        position: relative;
                        background: white;
                        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                        z-index: 9999;
                    }
                
                    nav ul{
                        display: none;
                        opacity: 0;
                        transform: translate(0%, -25%);
                        flex-direction: column;
                        position: absolute;
                        width: 94%;
                        top: 75px;
                        left: 3%;
                        text-align: center;
                        border-radius: 0 0 20px 20px;
                        background: linear-gradient(to bottom, #fff, #ebebeb);
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                        overflow: hidden;
                    }
                    
                    nav ul li{
                        padding: 0;
                    }
                
                    nav ul li:hover{
                        background: #006eff;
                    }
                
                    nav ul li a{
                        display: block;
                        padding: 25px 10px;
                        color: #000;
                    }
                
                    nav ul li:hover a{
                        color: #fff;
                    }
                
                    #menu-toggle{
                        display: flex;
                    }
                
                    #unclicked-nav{
                        display: block;
                        position: fixed;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        background: rgba(0, 0, 0, 0.5);
                        visibility: hidden;
                        z-index: 9998;
                    }
                }
            </style>

            <nav class="container">
                <div class="logo">
                     <h3><a href="#" class="hand-writing"></a></h3>
                </div>
                <ul id="nav-toggle">
                    <li><a href="#home" class="nav-link">Home</a></li>
                    <li><a href="#about" class="nav-link">About</a></li>
                    <li><a href="#skill" class="nav-link">Skill</a></li>
                    <li><a href="#work" class="nav-link">Work</a></li>
                </ul>
    
                <div id="menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            <div id="unclicked-nav"></div>
        `;
    }
 }
  
 customElements.define("app-bar", AppBar);