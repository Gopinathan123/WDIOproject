class delllaps{
    get alltit(){
        return $$("//div[@class='_4rR01T']");
    }
    get allpric(){
        return $$("//div[@class='_30jeq3 _1_WHN1']")
    }
    async writebusititle(){
        await this.alltit();
    }
    async writebusiprice(){
        await this.allpric();
    }
}

export default new delllaps(); 