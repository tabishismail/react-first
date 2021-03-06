let spa=()=>{
    let data=document.getElementById("data");
    console.log(data.innerHTML)
    data.innerHTML="";
    data.innerHTML=`
    <div class="react" id="spa">
            <div class="row myDivs">
                <div class="col-12">
                    <h1 class="heading">SPA vs MPA</h1>
                </div>
            </div>
            <div class="row myDivs">
                <div class="col-xl-6 col-md-06 col-sm-12 myDiv1">
                    <img class="img1" src="image/spa-and-mpa.jpg" alt="">
                </div>
                <div class="col-xl-6 col-md-06 col-sm-12">
                    <table class="table">
                        <thead class="myHeader">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">SPA</th>
                                <th scope="col">MPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>It performs inside a browser and does not require page reloading during its use</td>
                                <td>Its all changes display the data or submit data back to server requests rendering a
                                    new page from the server in the browser. </td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Ability to reuse code.</td>
                                <td>Faster initial page load</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Ability to work offline.</td>
                                <td>Cant work offline</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>SPAs work fast, as most resources are only loaded once throughout the lifespan of
                                    the app.</td>
                                <td>MPAs reload for every update</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>SPAs are not suitable for SEO management</td>
                                <td>MPAs are easy and good for SEO management</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
    `
}

let react=()=>{
    let data=document.getElementById("data");
    data.innerHTML="";
    data.innerHTML=`
    <div class="row myDivs">
                <div class="col-xl-6 col-md-06 col-sm-12 myDiv1">
                    <h1 class="heading">What is React?</h1>
                    <p class="para">React is Javascripting library which is create by Facebook,
                        it???s also known as user interface library because
                        it is use to create User interface components.<strong> For Example :</strong>
                        we have some building blocks by using blocks we make complete building same as react have
                        components tools and by using the components we create a complete application</p>
                </div>
                <div class="col-xl-6 col-md-06 col-sm-12">
                    <img class="img" src="image/building-blocks-768x381.png" alt="">
                </div>
            </div>`
}
let ang=()=>{
    let data=document.getElementById("data");
    data.innerHTML="";
    data.innerHTML=`
    <div class="row myDivs">
                <div class="col-12">
                    <h1>React Vs Angular</h1>
                </div>
            </div>
            <div class="row myDivs">
                <div class="col-xl-6 col-md-06 col-sm-12">
                    <h5>KEY DIFFERENCE</h5>
                    <ul class="myList">
                        <li>AngularJS is a structural framework for developing dynamic web apps, whereas React is a
                            javascript library that allows you to build UI components.</li>
                        <li>Angular JS is based on MVC (Model View Controller) whereas React is based on Virtual DOM.
                        </li>
                        <li>Angular is based on Typescript and React is based on Javascript.</li>
                        <li>AngularJS doesn???t provide adding javascript library to the source code while React allows
                            adding javascript library to the source code.</li>
                        <li>AngularJS provides testing and debugging for a complete project with a single tool whereas
                            React requires a set of tools to perform different types of testing.</li>
                    </ul>
                </div>
                <div class="col-xl-6 col-md-06 col-sm-12">
                    <img class="img" src="image/Optimized-React-vs-Angular-.jpg" alt="">
                </div>
            </div>    
    `
}

let lib=()=>{
    let data=document.getElementById("data");
    data.innerHTML="";
    data.innerHTML=`
    <div class="row myDivs">
                <div class="col-12">
                    <h1>Library vs Framework</h1>
                </div>
            </div>
            <div class="row myDivs">
                <div class="col-xl-8 col-md-8 col-sm-12">
                    <h5>KEY features of Library</h5>
                    <ul class="myList">
                        <li>Library is a set of reusable functions used by computer program</li>
                        <li>They are important in program linking and binding process</li>
                        <li>Code calls to library</li>
                        <li>Jquery is the javascript library</li>
                    </ul>
                </div>
                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img class="img1" src="image/library.png" alt="">
                </div>
            </div>
            <div class="row myDivs">
            <div class="col-xl-4 col-md-4 col-sm-12">
                <img class="img1" src="image/framework.png" alt="">
            </div>
            <div class="col-xl-8 col-md-8 col-sm-12">
                <h5>KEY features of Framework</h5>
                <ul class="myList">
                    <li>Its a piece of code the dictates the artictechture of our project</li>
                    <li>They provide a proper standard way to build and deploy programs</li>
                    <li>Framework calls the code</li>
                    <li>Angular is javascript base framework</li>
                </ul>
            </div>
        </div>
    `
}
let dom=()=>{
    let data=document.getElementById("data");
    data.innerHTML="";
    data.innerHTML=`
    <div class="row myDivs">
                <div class="col-12">
                    <h1>Real DOM Vs Virtual DOM</h1>
                </div>
            </div>
            <div class="row myDivs">
                <div class="col-xl-8 col-md-8 col-sm-12">
                    <h5>KEY DIFFERENCE</h5>
                    <ul class="myList">
                        <li>A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing???s
                            power to directly change what???s on the screen</li>
                        <li>Manipulating the DOM is slow. Manipulating the virtual DOM is much faster</li>
                    </ul>
                </div>
                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img class="img" src="image/lnrn_0201.png" alt="">
                </div>
            </div>
    `
}
