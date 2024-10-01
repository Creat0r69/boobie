const rotateColor = (bgColor, subBgColor, color, subColor) => {
    const mainColorClasses = document.getElementsByClassName("main-color");
    for (var i = 0; i < mainColorClasses.length; i++) {
        mainColorClasses.item(i).style.backgroundColor=`#FF9922 !important`;
        mainColorClasses.item(i).style.color = `${color} !important`;
    }

    const subColorClasses = document.getElementsByClassName("sub-color");
    for (var i = 0; i < subColorClasses.length; i++) {
        subColorClasses.item(i).style.backgroundColor=`${subBgColor} !important`;
        subColorClasses.item(i).style.color=`${subColor} !important`;
    }

    const mainTextClasses = document.getElementsByClassName("text-main-color");
    for (var i = 0; i < mainTextClasses.length; i++) {
        mainTextClasses[i].style.color=`${color} !important`;
    }

    const subTextClasses = document.getElementsByClassName("text-sub-color");
    for (var i = 0; i < subTextClasses.length; i++) {
        subTextClasses[i].style.color=`${subColor} !important`;
    }
}

setInterval(() => {
    rotateColor("#FF9922", "#D14233", "#D14233", "#D14233")
    setTimeout(() => {
        rotateColor("F1C0DC", "white", "F1C0DC", "white")
    }, 2000);
}, 2000);