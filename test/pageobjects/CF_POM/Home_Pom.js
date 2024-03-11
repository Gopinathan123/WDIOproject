class home_Pom{
    get trip_rout_DD(){
        return $("//div[@aria-haspopup='listbox']/descendant::span[.='Return']")
    }
    get pes_class(){
        return $("//span[@class='S9tW-title']");
    }
    get flt_class(){
        return $("//div[@aria-haspopup='listbox']/descendant::span[.='Economy']")
    }
    get cncl_frmtxt_loc(){
        return $("//div[@aria-label='Remove']//*[name()='svg']")
    }
    
}