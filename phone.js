class Mobile {

    constructor(_name) {
        this.name= _name;
        this.battery = 100;
        this.draft="";
        this.inbox=[];
        this.outbox=[];
        this.status=true;
    }
    checkStatus(){
        return this.status;
    }
    onOff(){
        // dang tat -> bat
        //dang bat -> tat
        this.status = !this.status;
    }
    writting(text){
        this.draft= text;
        this.battery--;
    }
    //phone là 1 đối tượng, biến đối tượng là tham chiếu
    //truyền đối tượng vào trong phương thức
    sendMessage(phone){
        //this: điện thoại hiện tại
        //phone: điện thoại gửi sang
        //1. chuyển tin nhắn nháp của this -> hộp thư đến của phone
        phone.inbox.push(this.draft);
        //2. chuyển tin nhắn nháp của this -> hộp thư đã gửi của this
        this.outbox.push(this.draft);
        //3. Xoá tin nhắn nháp.
        this.draft="";
        this.battery--;
    }
    getInbox(){
        this.battery--;
        return this.inbox;
    }
    getOutbox(){
        if (this.status){
            this.battery--;
            return this.outbox;
        }
    }
}

let dtCuaTruong=new Mobile("Truong");
let dtCuaDinh = new Mobile("Dinh");

function guitinchoTruong() {
    //buoc 1: lấy dữ liệu
    let mess = document.getElementById("mess1").value;
    //gán vào thư nháp
    dtCuaDinh.writting(mess);
    //gửi tin cho Trường
    dtCuaDinh.sendMessage(dtCuaTruong)
    //hien thi hop thu den cua truong
    let inboxTruong= dtCuaTruong.inbox.join("-");
    document.getElementById("inbox2").innerText=inboxTruong;

}