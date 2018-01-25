class Tab {
    //构造函数
    constructor() {
        this.init();
    }
    init() {
        this.createWrap();
    }

    Event() {
            let ulist = document.getElementsByTagName("ul")[0];
            let uli = ulist.querySelectorAll("li");

            let olist = document.getElementsByTagName("ol")[0];
            let oli = olist.querySelectorAll("li");
            for (let i = 0; i < uli.length; i++) {
                uli[i].addEventListener("click", () => {
                    // console.log(event)
                    for (let j = 0; j < oli.length; j++) {
                        oli[j].style.display = "none";
                        uli[j].className = "";
                    }
                    oli[i].style.display = "block";
                    uli[i].className = "bg";
                })
            }


            // let olist = document.getElementsByTagName("ol")[0];
            // let oli = ulist.querySelectorAll("li");
            // console.log(oli)
            // console.log(olist)
            // console.log(uli)
            // console.log(ulist)
        }
        // hide() {
        //     let olist = document.getElementsByTagName("ol")[0];
        //     let oli = olist.querySelectorAll("li");
        //     oli[i].style.display = "block";
        // }
    createli_one() {
        let li_one = document.createElement("li");
        li_one.innerHTML = "1";
        return li_one;
    }
    createli_two() {
        let li_two = document.createElement("li");
        li_two.innerHTML = "2";
        return li_two;
    }
    createli_three() {
        let li_three = document.createElement("li");
        li_three.innerHTML = "3";
        return li_three;
    }
    createOl() {
        let olist = document.createElement("ol");
        let li_one = this.createli_one();
        let li_two = this.createli_two();
        let li_three = this.createli_three();
        olist.append(li_one);
        olist.append(li_two);
        olist.append(li_three);
        return olist;
    }
    createUl() {
        let ulist = document.createElement("ul");
        let li_one = this.createli_one();
        let li_two = this.createli_two();
        let li_three = this.createli_three();
        ulist.append(li_one);
        ulist.append(li_two);
        ulist.append(li_three);
        return ulist;
    }
    createWrap() {
        let bigDiv = document.createElement("div");
        let ul = this.createUl();
        let ol = this.createOl();
        bigDiv.append(ul);
        bigDiv.append(ol);
        bigDiv.className = "bigDiv";
        document.body.append(bigDiv);
        this.Event();
    }
}
let tab = new Tab();