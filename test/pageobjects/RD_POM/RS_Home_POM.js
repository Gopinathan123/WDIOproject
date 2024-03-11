class Rs_home_pom{
    get in_link(){
        return $('span.fa-linkedin');
    }
    get reg_link(){
        return $('div.login-btn>a.register-btn');
    }
    get login_link(){
        return $("a[href='http://qaclickacademy.usefedora.com/sign_in']");
    }
    get home_tab(){
        return $("ul.navigation.clearfix>li:nth-of-type(1)>a");
    }
    get course_tab(){
        return $("ul.navigation.clearfix>li:nth-of-type(2)>a")
    }
    get lifetime_access_tab(){
        return $("ul.navigation.clearfix>li:nth-of-type(3)>a")
    }
    get learning_path_tab(){
        return $("ul.navigation.clearfix>li:nth-of-type(4)>a");
    }
    get mentorship_tab(){
        return $("ul.navigation.clearfix>li:nth-of-type(5)>a")
    }
    get consulting_tab(){
        return $("ul.navigation.clearfix>li:nth-of-type(6)>a");
    }
    get practice_tab(){
        return $("ul.navigation.clearfix>li:nth-of-type(7)>a");
    }
    get blog_tab(){
        return $("ul.navigation.clearfix>li:nth-of-type(8)>a");
    }
    get about_tab(){
        return $("ul.navigation.clearfix>li:nth-of-type(9)>a");
    }
    async lin_link(){
        await this.in_link.click();
    }
    async reg_link_btn(){
        await this.reg_link.click();
    }
    async log_link_btn(){
        await this.login_link.click();
    }
    async home_link_btn(){    
        await this.home_tab.click();
    }
    async course_link_btn(){
        await this.course_tab.click();
    }
    async lta_link_btn(){
        await this.lifetime_access_tab.click();
    }
    async learn_link_btn(){
        await this.learning_path_tab.click();
    }
    async ment_link_btn(){
        await this.mentorship_tab.click();
    }
    async cons_link_btn(){
        await this.consulting_tab.click();
    }
    async prac_link_btn(){
        await this.practice_tab.click();
    }
    async blog_link_btn(){
        await this.blog_tab.click();
    }
    async about_tab_btn(){
        await this.about_tab.click();
    }
}
export default new Rs_home_pom();