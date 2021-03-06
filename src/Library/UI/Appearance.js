/*
 * This file is part of the KUBEjs package
 *
 * (c) Red Scotch Software Inc <kube+js@redscotch.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
(function(KUBE){
    "use strict";
    KUBE.LoadFactory('/Library/UI/Appearance', Appearance,['/Library/UI/Theme','/Library/Extend/Object']);
    Appearance.prototype.toString = function(){ return '[object '+this.constructor.name+']' };
    function Appearance(_Theme){
        var $AppearanceAPI,appearanceList,using;

        //Our API
        $AppearanceAPI = {
            'QuickSet':QuickSet,
            'Font':Font(),
            'Background':Background(),
            'Border':Border(),
            'Padding':Padding(),
            'GetUsing':GetUsing
        }.KUBE().create(Appearance.prototype);

        //Initialize our object
        initializeDefaultVars();
        validateInit();

        //Return our scoped API object
        return $AppearanceAPI;

        //Public API
        function QuickSet(_name){
            using = _Theme.GetQuickSet(_name);
        }

        function GetUsing(){
            return using;
        }

        //Font methods
        function Font(){
            return {
                'Use':Use,
                'List':List,
                'Check':Check
            };

            function Use(_name,_state){
                _state = validateState(_state) || 'visible';
                if(Check(_name)){
                    using.font[_state] = _name;
                }
                else if(_name === undefined){
                    using.font[_state] = undefined;
                }
            }

            function List(){
                return appearanceList.font;
            }

            function Check(_name){
                return (appearanceList.font[_name] ? true : false);
            }
        }

        //Background methods
        function Background(){
            return {
                'Use':Use,
                'List':List,
                'Check':Check
            };

            function Use(_name,_state){
                _state = validateState(_state) || 'visible';
                if(Check(_name)){
                    using.background[_state] = _name;
                }
                else if(_name === undefined){
                    using.background[_state] = undefined;
                }
            }

            function List(){
                return appearanceList.background;
            }

            function Check(_name){
                return (appearanceList.background[_name] ? true : false);
            }
        }

        //Border methods
        function Border(){
            return {
                'Use':Use,
                'List':List,
                'Check':Check
            };

            function Use(_name,_state){
                _state = validateState(_state) || 'visible';
                if(Check(_name)){
                    using.border[_state] = _name;
                }
                else if(_name === undefined){
                    using.border[_state] = undefined;
                }
            }

            function List(){
                return appearanceList.border;
            }

            function Check(_name){
                return (appearanceList.border[_name] ? true : false);
            }
        }

        function Padding(){
            return {
                'Use':Use,
                'List':List,
                'Check':Check
            };

            function Use(_name,_state){
                _state = validateState(_state) || 'visible';
                if(Check(_name)){
                    using.padding[_state] = _name;
                }
                else if(_name === undefined){
                    using.padding[_state] = undefined;
                }
            }

            function List(){
                return appearanceList.padding;
            }

            function Check(_name){
                return (appearanceList.padding[_name] ? true : false);
            }
        }

        //Private
        function initializeDefaultVars(){
            using = {
                'font':{
                    'selected':undefined,
                    'visible':undefined,
                    'hover':undefined,
                    'active':undefined
                },
                'background':{
                    'selected':undefined,
                    'visible':undefined,
                    'hover':undefined,
                    'active':undefined
                },
                'border':{
                    'selected':undefined,
                    'visible':undefined,
                    'hover':undefined,
                    'active':undefined
                },
                'padding':{
                    'selected':undefined,
                    'visible':undefined,
                    'hover':undefined,
                    'active':undefined
                }
            };

            appearanceList = {
                'font':{},
                'border':{},
                'background':{},
                'padding':{}
            };
        }

        function validateInit(){
            var tempList;
            if(KUBE.Is(_Theme,true) !== 'Theme'){
                KUBE.console.log(_Theme);
                throw new Error('Invalid initialization variable passed to Appearance. Must be a Theme object');
            }
            else{
                tempList = _Theme.GetAppearanceList();
                if(KUBE.Is(tempList) === 'object'){
                    if(KUBE.Is(tempList.font) === 'object'){
                        appearanceList.font = tempList.font;
                    }

                    if(KUBE.Is(tempList.background) === 'object'){
                        appearanceList.background = tempList.background;
                    }

                    if(KUBE.Is(tempList.border) === 'object'){
                        appearanceList.border = tempList.border;
                    }

                    if(KUBE.Is(tempList.padding) === 'object'){
                        appearanceList.padding = tempList.padding;
                    }
                }
            }
        }

        function validateState(_state){
            var $return = false;
            switch(_state){
                case 'visible': $return = _state; break;
                case 'hover': $return = _state; break;
                case 'selected': $return = _state; break;
                case 'active': $return = _state; break;
            }
            return $return;
        }
    }

})(KUBE);

