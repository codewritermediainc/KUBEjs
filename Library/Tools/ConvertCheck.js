(function(KUBE){
    "use strict";

    KUBE.LoadFunction('/Library/ConvertCheck',ConvertCheck,['/Library/ExtendRegExp']);

    function ConvertCheck(_from,_val){
        var $return = false,
            str = ""+_val;
        switch(_from){
            case 'px':
                $return = (str.substr(''+str.length-2) === 'px' ? true : false);
                break;

            case 'deg':
                $return = (str.substr(str.length-3) === 'deg' ? true : false);
                break;

            case 'ms':
                $return = (str.substr(''+str.length-2) === 'ms' ? true : false);
                break;

            case 'number': case 'int': case 'num':
            $return = (KUBE.Is(_val) === 'number' ? true : false);
            break;

            case 'url':
                $return = /url\(([^\)]*)\)/.KUBE().matchAll(str.toLowerCase());
                $return = ($return[0] ? $return[0][1] : _val);
                break;

            case 'string':
                $return = (KUBE.Is(_val) === 'string' ? true : false);
                break;

            default:
                $return = true;
                break;
        }
        return $return;
    }

}(KUBE));