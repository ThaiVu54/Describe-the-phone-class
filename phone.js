class Mobile {
    constructor(_name){
        this.name = _name;
        this.battery = 100;
        this.draft = "";
        this.inbox = [];
        this.outbox = [];
        this.status = true;

    }
    checkStatus(){
        return this.status;
    }
    onOff(){
        //dang tat -> bat
        //dang bat -> tat
        this.status = !this.status;
    }
    writting(text){
        this.draft = text;
        this.battery-- ;
    }
    sendMessage(phone){
        // this: dien thoai hien tai 
        // phone: dien thoai gui sang 
        // 1. chuyen tin nhan nhap cua this vao hop thu den cua phone
        phone.inbox.push(this.draft);
        // 2.chuyen ti nhan nhap cua this -> hop thu gui cua this 
        this.outbox.push(this.draft)
        // 3. xoa tin nhan nhap 
        this.draft = "";
        this.battery--;
    }
    getInbox(){
        this.battery--;
        return this.inbox;
    }
    getOutbox(){
        if(this.status){
            this.battery--;
            return this.outbox;
        }
    }
}
let dtCuaThai = new Mobile("Thai");
let dtCuaLanh = new Mobile("Lanh");

function guiTinLanh(){
    // 1.lay du lieu 
    let mess = document.getElementById("mess1").value;
    // 2.gan vao thu nhap  
    dtCuaThai.writting(mess)
    // 3. gui tin nhan cho lanh 
    dtCuaThai.sendMessage(dtCuaLanh);
    // 4. hien thi hop thu den cu lanh 
    let inboxLanh = dtCuaLanh.inbox.join("-");
    document.getElementById("inbox2").innerText = inboxLanh;

}
function guiTinThai(){
    // 1.lay du lieu 
    let mess2 = document.getElementById("mess2").value;
    // 2.gan vao thu nhap  
    dtCuaLanh.writting(mess2)
    // 3. gui tin nhan cho Thái 
    dtCuaLanh.sendMessage(dtCuaThai);
    // 4. hien thi hop thu den cu Thai 
    let inboxThai = dtCuaThai.inbox.join("-");
    document.getElementById("inbox1").innerText = inboxThai;

}
