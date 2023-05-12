export async function osCheck() {
    let OSName = null;
    if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows";
    //if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
    //if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
    //if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
    //if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="macOS";
    //if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="Linux";
    //if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";

    return OSName
}
