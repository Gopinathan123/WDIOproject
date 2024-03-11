class login{
    get mail_txt(){
        return $("input#email");
    }
    get pass_txt(){
        return $("input#password")
    }
    get forget_lnk(){
        return $("a.bodySmall.form-footer")
    }
    get login_btn(){
        return $("input[data-testid='login-button']");
    }
    get login_goog_btn(){
        return $("a[data-test-id='login-with-google']");
    }
    get login_tec_btn(){
        return $("button[data-test-id='login-with-teachable']");
    }
    get signup_lnk(){
        return $("div[data-testid='create-account-footer']>a");
    }
    async logaction(user,pass){
        await this.mail_txt.setValue(user);
        await this.pass_txt.setValue(pass);
        await this.login_btn.click();
    }
    async logforgetaction(){
        await this.forget_lnk.click();
    }
    async loggoogaction(){
        await this.login_goog_btn.click();
    }
}
export default new login();