if(window.innerWidth < 1440){
    alert("This website isn't currently mobile friendly. So could you please turn on desktop mode of your browser or use a large screen device like a laptop or a desktop?")
};
const main = document.querySelector("main");
const nav = document.querySelector("nav");
const section = document.querySelector("section");
const name = document.querySelector("#left h2");
const left = document.getElementById("left");
const right = document.getElementById("right");
const content = document.getElementById("content");
const image = document.querySelector("#right img");
var selectedMethodology = "1";
nav.style.display = "none";
section.style.display = "none";
footer.style.display = "none";
function explore(){
    main.style.opacity = "0";
    main.style.transform = "translateY(500px)";
    setTimeout(() => {
        nav.style.display = "block";
        main.style.display = "none";   
    }, 1000);
}
function exit(){
    nav.style.display = "none";
    main.style.display = "flex";
    section.style.display = "none";
    setTimeout(() => {
        main.style.opacity = "1";
        main.style.transform = "translateY(0px)";
    }, 500);
}
function teamMembers(){
    document.getElementById("teamMembers").style.display = "block";
    document.querySelector("main").style.filter="blur(10px)";
}
function closeTeamMembers(){
    document.getElementById("teamMembers").style.animation = "fallOutFromTopToBottom 1s forwards";
    setTimeout(() => {
        document.getElementById("teamMembers").style.display = "none";
        document.getElementById("teamMembers").style.animation = "fallFromTopToBottom 1s forwards";
    }, 1000);
    document.querySelector("main").style.filter=null;
}
function showMethodology(e){
    section.style.display = "flex";
    selectedMethodology = e;
    showData();
    defaultTab();
    image.src = selectedMethodology + ".png";
    nav.style.scale = "0.5";
    left.style.transform = "translateX(-100%)";
    right.style.transform = "translateX(100%)";
    setTimeout(() => {
        left.style.transform = "translateX(0px)";
        right.style.transform = "translateX(0px)";
    }, 500);
    setTimeout(() => {
        nav.style.display = "none";
        nav.style.scale = "1";
    }, 1000);
}
function showData(){
    switch (selectedMethodology) {
        case 1: show1();
            break;
        case 2: show2();
            break;
        case 3: show3();
            break;
        case 4: show4();
            break;
        case 5: show5();
            break;
        case 6: show6();
            break;
        case 7: show7();
            break;
        case 8: show8();
            break;
        case 9: show9();
            break;
        case 10: show10();
            break;
        case 11: show11();
            break;
        case 12: show12();
            break;
        default:
            break;
    }
}
function showBack(){
    if(selectedMethodology == "1"){
        selectedMethodology = "13";
    }
    selectedMethodology -= 1;
    showData();
    defaultTab();
    image.style.opacity = "0";
    setTimeout(() => {
        image.style.opacity = "1";
        image.src = selectedMethodology + ".png";
    }, 250);
}
function showList(){
    defaultTab();
    left.style.transform = "translateX(-100%)";
    right.style.transform = "translateX(100%)";
    setTimeout(() => {
        nav.style.display = "block";
        section.style.display = "none";
    }, 1000);
}
function showNext(){
    if(selectedMethodology == "12"){
        selectedMethodology = "0";
    }
    selectedMethodology = parseInt(selectedMethodology + 1);
    showData();
    defaultTab();
    image.style.opacity = "0";
    setTimeout(() => {
        image.style.opacity = "1";
        image.src = selectedMethodology + ".png";
    }, 250);
}
function defaultTab(){
    content.style.display = "block";
}
function show1(){
     name.innerText = "What is Extreme Programming ?";
    content.innerHTML = `Extreme Programming (XP) is a software development methodology that emphasizes teamwork, communication, simplicity, and customer satisfaction. It involves practices such as pair programming, continuous testing, continuous integration, and frequent releases to deliver high-quality software in a responsive and flexible manner. `;
}
function show2(){
    name.innerText = "History";
    content.innerHTML = `Extreme Programming (XP) is an Agile software development methodology that was created by Kent Beck in the late 1990s. It was designed as a response to the process-heavy development methodologies of the time, emphasizing collaboration, simplicity, and responsiveness to customer needs. XP gained popularity among software developers for its focus on high-quality, customer-oriented development, and has influenced the development of other Agile methodologies. `;
}
function show3(){
    name.innerText = "Concept";
    content.innerHTML = `Extreme Programming (XP) is an Agile software development methodology that is based on the following core concepts;
        <li>Communication: XP emphasizes open and frequent communication between team members, customers, and stakeholders.</li>
         <li>Simplicity: XP favors simple and elegant solutions to complex problems, avoiding unnecessary complexity and features.</li>
         <li>Feedback: XP relies on continuous feedback and testing to ensure that the software meets customer requirements and is of high quality.</li>
         <li>Courage: XP encourages team members to take risks and try new things, while also providing a supportive and collaborative environment.</li>
          `

}
function show5(){
    name.innerText = "Advantages";
    content.innerHTML = `Extreme Programming (XP) has several advantages that make it a popular Agile software development methodology:<br>
    <li>Emphasis on customer satisfaction: XP puts a strong emphasis on meeting customer needs and delivering high-quality software that satisfies those needs. This helps to ensure that the software meets the customer's requirements and is of high value.</li>
    <li>Improved software quality: XP's practices of pair programming, test-driven development, and continuous integration help to improve the quality of the software by catching defects early and ensuring that the software is thoroughly tested.</li>
    <li>Faster time-to-market: XP's incremental and iterative development approach, combined with its emphasis on frequent releases and customer feedback, helps to speed up the development process and reduce time-to-market. </li>`;
}
function show6(){
    name.innerText = "Disadvantages";
    content.innerHTML = `While Extreme Programming (XP) has several advantages, it also has some potential disadvantages, including:
    <li>Focus on small teams: XP is designed to work best with small teams of 2-12 members. Larger teams may find it difficult to implement XP practices effectively.</li>
    <li>High level of involvement: XP requires a high level of involvement from team members, which can be difficult to sustain over the long term. </li>
    <li>Time-consuming practices: XP's practices of pair programming, test-driven development, and continuous integration can be time-consuming, especially for larger or more complex projects.</li>
    <li> Lack of documentation: XP prioritizes working software over comprehensive documentation, which can make it difficult for new team members to understand the code base.</li>`
}

function show8(){
    name.innerText = "References";
    content.innerHTML = `Here are some references:
    <li>"Extreme Programming Explained: Embrace Change" by Kent Beck - This book is considered the definitive guide to XP and provides a detailed explanation of its principles, practices, and benefits." </li>
    <li> "Agile Software Development, Principles, Patterns, and Practices" by Robert C. Martin - This book includes a section on XP and provides an overview of its key practices and principles."</li>
    <li>"Extreme Programming Pocket Guide" by Chromatic - This pocket guide provides a concise summary of XP's principles and practices."</li>
    <li>Internet</li>`;
}
function show9(){
    name.innerText = "Thanks";
    content.innerHTML = `Mrs. Ovinie Senevirathne for giving us this opportunity.<br><br>
    
    Thanks to the audience `;
}