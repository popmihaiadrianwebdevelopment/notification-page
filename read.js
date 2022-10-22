const markRead = document.querySelector("#btn")

markRead.addEventListener("click", markReadNoti);


function markReadNoti() {
    var unreadBg = document.querySelectorAll(".unread")
    unreadBg.forEach((unreadBg) => {
        unreadBg.classList.remove("unread")
    })
    var unreadBall = document.querySelectorAll(".circle-unread")
    unreadBall.forEach((unreadBall) => {
        unreadBall.classList.remove("circle-unread")
    })

    // unreadBg.classList.add("unread-read")
}