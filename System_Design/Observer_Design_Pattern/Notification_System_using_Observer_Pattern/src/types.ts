export interface Observer{
    name:string;
    update():void ;
}

export class NotificationCenter{
    observerList : Observer[] = []
    attach(observer:Observer):void{
        let isExist = this.observerList.includes(observer)
        if(isExist){
            console.log(`${observer} already subscribed`);
            return ;
        }
        this.observerList.push(observer)
        console.log(`Observer Added : ${observer.name}`);
    }
    detach(observer:Observer):void{
        let index = this.observerList.indexOf(observer)
        if(index==-1){
            console.log(`${observer} already unsubscribed`);
            return;
        }
        console.log(`${observer.name} is removed .`)
        this.observerList.splice(index,1)
    }
    notifyAll() :void{
        for(let device of this.observerList){
            device.update()
        }
    }
}

