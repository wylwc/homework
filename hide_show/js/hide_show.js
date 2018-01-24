// 
class Dialog {
    //构造函数
    constructor(tit = "标题", content = "今天是第一天远程") {
        this.tit = tit;
        this.content = content;
        // 调用init()
        this.init();
    }

    // 实例方法
    init() {
        this.createWrap();
    }

    Event() {
        // let span = document.querySelectorAll(".span")[0];
        let span = document.getElementsByClassName("span")[0];
        let btnSuccess = document.getElementsByTagName("button")[0];
        let btnFail = document.getElementsByTagName("button")[1];

        // console.log(span);
        span.addEventListener("click", (event) => {
            this.hide();
        })
        btnSuccess.addEventListener("click", (event) => {
            this.hide();
        })
        btnFail.addEventListener("click", (event) => {
            this.show();
        })
    }

    show() {
        let bigDiv = document.querySelectorAll(".bigDiv")[0];
        bigDiv.style.display = "block";
    }

    hide() {
        let bigDiv = document.querySelectorAll(".bigDiv")[0];
        bigDiv.style.display = "none";
    }

    // 创建title
    createTitle() {
        let p = document.createElement("p");
        let span = document.createElement("span");

        p.className = "p";
        p.innerHTML = this.tit;
        span.className = "span";
        span.innerHTML = "x";
        p.append(span);
        return p;
    }

    // 创建button
    createButton(text, clas) {
        let btn = document.createElement("button");
        btn.innerHTML = text;
        btn.className = clas;
        return btn;
    }

    // 创建ontent
    createContent() {
        let div = document.createElement("div");
        // let btnSuccess = 
        div.className = "con_div";
        div.innerHTML = this.content;
        let btnSuccess = this.createButton("确认", "btn");
        btnSuccess.className = "success";

        let btnFail = this.createButton("取消", "btn");
        btnFail.className = "fail";

        div.append(btnSuccess);
        div.append(btnFail);

        return div;
    }

    // 创建div
    createWrap() {
        let bigDiv = document.createElement("div");
        let tit = this.createTitle();
        let con = this.createContent();

        // 内容
        bigDiv.append(tit);
        bigDiv.append(con);

        // bigDiv.innerHTML = "bigDiv hello";

        // class
        bigDiv.className = "bigDiv";
        document.body.append(bigDiv);
        this.Event();
    }
}
let dialog = new Dialog();