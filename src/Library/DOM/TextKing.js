/*
 * This file is part of the KUBEjs package
 *
 * (c) Red Scotch Software Inc <kube+js@redscotch.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// This utility measures text.  Because Ruler == King.  So TextRuler == TextKing.  So laugh.
(function(KUBE){
    var measureChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890-=!@#$%^&*()_+{}[]:";\'<>,.?|\\/~`';
    var fallBackCharcode = 87; //capital W

    KUBE.LoadSingletonFactory('/Library/DOM/TextKing', TextKing,['/Library/Extend/Object','/Library/DOM/DomJack','/Library/Tools/Convert']);
    TextKing.prototype.toString = function(){ return '[object '+this.constructor.name+']' };
    //Argument passed in should be an Array.  Font first, then size
    function TextKing(fontArg){
        var font, fontSize;
        //I’m here to measure glyphs and chew bubblegum and I’m all out of bubblegum
        if(KUBE.Is(fontArg) === "array"){
            if(fontArg.length >= 2){
                font = fontArg[0];
                fontSize = fontArg[1];
            }
            else{
                throw new Error('TextKing requires 2 elements in the fontArg array. First is font, second is font size in px');
            }
        }
        else{
            throw new Error('TextKing requires an array to be passed in as its first argument, with 2 elements, first is font, 2nd is font size in px');
        }

        var cachedChars = {};
        var DJ = KUBE.Class('/Library/DOM/DomJack');
        doInitialCache();

        var $return = {
            "MeasureString": MeasureString
        }.KUBE().create(TextKing.prototype);
        return $return;

        function doInitialCache(){
            var newDiv;
            var destDiv = DJ('div');
                destDiv.Style().Font().Size(fontSize);
                destDiv.Style().Font().Family(font);

            for(var i=0; i<measureChars.length; i++){
                newDiv = DJ('span').SetInner(measureChars.slice(i, i+1)).SetAttribute('x-charcode',measureChars.charCodeAt(i));
                destDiv.Append(newDiv);
            }
            DJ(document.body).Append(destDiv);

            destDiv.GetChildren().KUBE().each(function(v,k,i){
                var dim = v.Rect();
                var cc = parseInt(v.GetAttribute('x-charcode'));
                cachedChars[cc] = {'width': dim.width, 'height': dim.height};
            });

            destDiv.Delete();
        }

        function MeasureString(string){
            var curChar, i, $retDim;
            $retDim = {'width':0,'height':0};
            string = String(string);
            for(i = 0; i < string.length; i++){
                curChar = string.charCodeAt(i);
                curChar = (curChar in cachedChars ? curChar : 87);
                if(curChar in cachedChars){
                    $retDim.width = $retDim.width + cachedChars[curChar].width;
                    $retDim.height = (cachedChars[curChar].height > $retDim.height ? cachedChars[curChar].height : $retDim.height);
                }
                else{
                    $retDim.width = $retDim.width + cachedChars[fallBackCharcode].width;
                    $retDim.width = (cachedChars[fallBackCharcode].height > $retDim.height ? cachedChars[fallBackCharcode].height : $retDim.height);
                }
            }
            return $retDim;
        }
    }
}(KUBE));