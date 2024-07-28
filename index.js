
    // window.addEventListener('scroll', function() {
    //     const sidebar = document.querySelector('.sidebar');
    //     const navbar = document.querySelector('.nav-bar');
    //     const sidebarContainer = document.querySelector('.sidebar-container');

    //     const navbarBottom = navbar.getBoundingClientRect().bottom;
    //     const sidebarBottom = sidebar.getBoundingClientRect().bottom;
    //     const sidebarContainerBottom = sidebarContainer.getBoundingClientRect().bottom;

    //     if (sidebarBottom > navbarBottom && sidebarBottom < sidebarContainerBottom) {
    //         sidebar.style.position = 'fixed';
    //         sidebar.style.top = `${navbarBottom}px`;
    //     } else if (sidebarBottom >= sidebarContainerBottom) {
    //         sidebar.style.position = 'absolute';
    //         sidebar.style.top = 'auto';
    //         sidebar.style.bottom = '0';
    //     } else {
    //         sidebar.style.position = 'sticky';
    //         sidebar.style.top = '0';
    //     }
    // });

    function changeElement()
{
   var x=document.getElementsByClassName("first");
   x[0].innerHTML="Grammar & Vocabulary Tips"
   x[1].innerHTML="Our course offers advanced grammar and vocabulary tips, designed to <br> refine your language skills. Learn complex grammar rules and enhance your <br> vocabulary to express yourself more precisely and effectively."
   x[2].innerHTML="Intense Debate Sessions"
   x[3].innerHTML="Engage in intense debate session that challenge critical thinking and <br>articulation, enhancing confidence and <br> eloquence in presenting and defending viewpoints."
   x[4].innerHTML="Basic Interview Tips"
   x[5].innerHTML="Gain essential interview tips regularly throughout the course. We provide<br>guidance on common interview questions and effective responses to help <br>you make a positive impression in job opportunities."
   x[6].innerHTML="Quick Speaking Activities"
   x[7].innerHTML="Practice spontaneous conversations to develop clear and expressive <br>language by participating in interactive sessions designed for effective <br> learning and rapid improvement."
   x[8].innerHTML="Group Discussion on Current Topics"
   x[9].innerHTML="Participate in group discussion activities to enhance your public speaking <br>and teamwork skills. Learn to lead discussions, manage group dynamics, <br> and present your ideas clearly and confidently."
}
function profileChange()
{
    var x=document.getElementById("image-1");
    x.src="nitasha-arora.png";
    var x=document.getElementById("image-2");
    x.src="umesh-naik.png";
    var x=document.getElementById("image-3");
    x.src="shubham.png";
    var x=document.getElementById("image-4");
    x.src="visheta-sharm.png";


}
function updateButtonText() {
    var button = document.getElementById('responsive-button');
    if (window.innerWidth <= 600) {
        button.textContent = "Contact Us";
    } else {
        button.textContent = "WhatsApp Us";
    }
}
function nameChange()
{
    var x=document.getElementsByClassName("people");
    x[0].innerHTML="Nitasha Arora"
    x[1].innerHTML="Dr. Umesh malik"
    x[2].innerHTML="Shubham Roy"
    x[3].innerHTML="Nirmala Pathak"

}
function styleChange()
{
    var x=document.getElementById("2");
    x.style.backgroundColor="#b79d74";
    x.style.color="white";
    x.style.borderStyle="none";
    document.getElementById("1").style.backgroundColor="white";
}
function handleClick2()
{
    profileChange();
    nameChange();
    styleChange();
}
function addStyle()
{
    var x=document.getElementById("classic");
    var y=document.getElementById("smart")
    y.style.textDecoration="none";
    y.style.color="grey";
    x.style.textDecoration='underline';
    x.style.color="#b79d74"
    
    
}


function handleClick()
{
    changeElement();
    addStyle();
}
var parentContainer = document.querySelector("about-teacher")
parentContainer.addEventListener('click',event=>{
    const current= event.target;
    const isreadMoreBtn= current.className.includes
})
