/*

 Copyright (c) 2006, Ivan Sagalaev
 All rights reserved.
 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 * Neither the name of highlight.js nor the names of its contributors
 may be used to endorse or promote products derived from this software
 without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND ANY
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL THE REGENTS AND CONTRIBUTORS BE LIABLE FOR ANY
 DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

Original highlight.js License from highlight.js (https://highlightjs.org/)
KUBE Port: Ian Reid

 */

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
    KUBE.LoadFactory('/Library/Hightlight/HighlightPHP', HighlightPHP,['/Library/DOM/StyleJack','/Library/Extend/Object','/Library/Extend/Array']);
    HighlightPHP.prototype.toString = function(){ return '[object '+this.constructor.name+']' };

    var HighlightObj = new CoreHighlight();
    HighlightObj.registerLanguage('php',PHP);

    var LangObj = PHP(HighlightObj);
    console.log(HighlightObj,LangObj);

    function HighlightPHP() {
        var $HighlightAPI;

        initStyle();
        $HighlightAPI = {
            "ApplyToString": ApplyToString,
            "ApplyToNode": ApplyToNode
        }.KUBE().create(HighlightPHP.prototype);
        return $HighlightAPI;

        function ApplyToString(_string, _preWrap) {
            _preWrap = _preWrap || false;

            if(!_preWrap){
                HighlightObj.configure({
                    'tabReplace':'    ',
                    'useBR':true
                });
            }
            else{
                HighlightObj.configure({
                    'tabReplace':null,
                    'useBR':false
                });
            }
            return HighlightObj.highlight('php', _string, true);
        }

        function ApplyToNode() {

        }

        //Private

        //This is a temporary measure. Will probably want to hook this into KUBE themeing? Something more flexible
        function initStyle() {
            var multiClassArray;
            var SJ = KUBE.Class('/Library/DOM/StyleJack');
            SJ('.hljs').Display('block').Padding('0.5em').Background().Color('#282b2e').api.Overflow().X('auto');

            multiClassArray = [
                '.hljs-keyword',
                '.hljs-literal',
                '.hljs-change',
                '.hljs-winutils',
                '.hljs-flow',
                '.nginx .hljs-title',
                '.css .hljs-id',
                '.tex .htljs-special'
            ];
            SJ(multiClassArray.join(',')).Color('#93c763');

            SJ('.hljs-number').Color('#ffcd22');
            SJ('.hljs').Color('#e0e2e4');

            multiClassArray = [
                '.css .hljs-tag',
                '.css .hljs-pseudo'
            ];
            SJ(multiClassArray.join(',')).Color('#d0d2b5');

            multiClassArray = [
                '.hljs-attribute',
                '.hljs .hljs-constant'
            ];
            SJ(multiClassArray.join(',')).Color('#668bb0');

            SJ('.xml .hljs-attribute').Color('#b3b689');
            SJ('.xml .hljs-tag .hljs-value').Color('#e8e2b7');

            multiClassArray = [
                '.hljs-code',
                '.hljs-class .hljs-title',
                '.hljs-header'
            ];
            SJ(multiClassArray.join(',')).Color('white');


            multiClassArray = [
                '.hljs-class',
                '.hljs-hexcolor'
            ];
            SJ(multiClassArray.join(',')).Color('#93c763');


            SJ('.hljs-regexp').Color('#d39745');

            multiClassArray = [
                '.hljs-at_rule',
                '.hljs-at_rule .hljs-keyword'
            ];
            SJ(multiClassArray.join(',')).Color('#a082bd');

            SJ('.hljs-doctype').Color('#557182');

            multiClassArray = [
                '.hljs-link_url',
                '.hljs-tag',
                '.hljs-tag .hljs-title',
                '.hljs-bullet',
                '.hljs-subst',
                '.hljs-emphasis',
                '.hljs-type',
                '.hljs-preprocessor',
                '.hljs-pragma',
                '.ruby .hljs-class .hljs-parent',
                '.hljs-built_in',
                '.django .hljs-template_tag',
                '.django .hljs-variable',
                '.smalltalk .hljs-class',
                '.hljs-javadoc',
                '.django .hljs-filter .hljs-argument',
                '.smalltalk .hljs-localvars',
                '.smalltalk .hljs-array',
                '.hljs-attr_selector',
                '.hljs-pseudo',
                '.hljs-addition',
                '.hljs-stream',
                '.hljs-envvar',
                '.apache .hljs-tag',
                '.apache .hljs-cbracket',
                '.tex .hljs-command',
                '.hljs-prompt'
            ];

            SJ(multiClassArray.join(',')).Color('#8cbbad');
            SJ('.hljs-string').Color('#ec7600');
            multiClassArray = [
                '.hljs-comment',
                '.hljs-annotation',
                '.hljs-blockquote',
                '.hljs-horizontal_rule',
                '.hljs-decorator',
                '.hljs-template_comment',
                '.hljs-pi',
                '.hljs-deletion',
                '.hljs-shebang',
                '.apache .hljs-sqbracket',
                '.tex .hljs-formula'
            ];

            SJ(multiClassArray.join(',')).Color('#818e96');

            multiClassArray = [
                '.hljs-keyword',
                '.hljs-literal',
                '.css .hljs-id',
                '.hljs-phpdoc',
                '.hljs-dartdoc',
                '.hljs-title',
                '.hljs-header',
                '.hljs-type',
                '.vbscript .hljs-built_in',
                '.rsl .hljs-built_in',
                '.smalltalk .hljs-class',
                '.diff .hljs-header',
                '.hljs-chunk',
                '.hljs-winutils',
                '.bash .hljs-variable',
                '.apache .hljs-tag',
                '.tex .hljs-special',
                '.hljs-request',
                '.hljs-at_rule .hljs-keyword',
                '.hljs-status'
            ];
            SJ(multiClassArray.join(',')).Font().Weight('bold');

            multiClassArray = [
                '.coffeescript .javascript',
                '.javascript .xml',
                '.tex .hljs-formula',
                '.xml .javascript',
                '.xml .vbscript',
                '.xml .css',
                '.xml .hljs-cdata'
            ];

            SJ(multiClassArray.join(',')).Opacity(0.5);

        }
    }

    /*
     Syntax highlighting with language autodetection.
     https://highlightjs.org/
     */

    function CoreHighlight() {
        //init();
        ////Let's return an API
        //return {
        //    'escape':escape,
        //    'tag':tag,
        //    'testRe':testRe,
        //    'blockLanguage':blockLanguage,
        //    'inherit':Inherit,
        //    'nodeStream':nodeStream,
        //    'mergeStreams':mergeStreams,
        //    'compileLanguage':compileLanguage,
        //    'highlight':highlight,
        //    'hightlightAuto':highlightAuto,
        //    'highlightBlock':highlightBlock
        //};

        /* Utility functions */

        function escape(value) {
            return value.replace(/&/gm, '&amp;').replace(/</gm, '&lt;').replace(/>/gm, '&gt;');
        }

        function tag(node) {
            return node.nodeName.toLowerCase();
        }

        function testRe(re, lexeme) {
            var match = re && re.exec(lexeme);
            return match && match.index == 0;
        }

        function blockLanguage(block) {
            var classes = (block.className + ' ' + (block.parentNode ? block.parentNode.className : '')).split(/\s+/);
            classes = classes.map(function(c) {return c.replace(/^lang(uage)?-/, '');});
            return classes.filter(function(c) {return getLanguage(c) || /no(-?)highlight/.test(c);})[0];
        }

        function inherit(parent, obj) {
            var result = {};
            for (var key in parent)
                result[key] = parent[key];
            if (obj)
                for (var key in obj)
                    result[key] = obj[key];
            return result;
        };

        /* Stream merging */

        function nodeStream(node) {
            var result = [];
            (function _nodeStream(node, offset) {
                for (var child = node.firstChild; child; child = child.nextSibling) {
                    if (child.nodeType == 3)
                        offset += child.nodeValue.length;
                    else if (child.nodeType == 1) {
                        result.push({
                            event: 'start',
                            offset: offset,
                            node: child
                        });
                        offset = _nodeStream(child, offset);
                        // Prevent void elements from having an end tag that would actually
                        // double them in the output. There are more void elements in HTML
                        // but we list only those realistically expected in code display.
                        if (!tag(child).match(/br|hr|img|input/)) {
                            result.push({
                                event: 'stop',
                                offset: offset,
                                node: child
                            });
                        }
                    }
                }
                return offset;
            })(node, 0);
            return result;
        }

        function mergeStreams(original, highlighted, value) {
            var processed = 0;
            var result = '';
            var nodeStack = [];

            function selectStream() {
                if (!original.length || !highlighted.length) {
                    return original.length ? original : highlighted;
                }
                if (original[0].offset != highlighted[0].offset) {
                    return (original[0].offset < highlighted[0].offset) ? original : highlighted;
                }

                /*
                 To avoid starting the stream just before it should stop the order is
                 ensured that original always starts first and closes last:

                 if (event1 == 'start' && event2 == 'start')
                 return original;
                 if (event1 == 'start' && event2 == 'stop')
                 return highlighted;
                 if (event1 == 'stop' && event2 == 'start')
                 return original;
                 if (event1 == 'stop' && event2 == 'stop')
                 return highlighted;

                 ... which is collapsed to:
                 */
                return highlighted[0].event == 'start' ? original : highlighted;
            }

            function open(node) {
                function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value) + '"';}
                result += '<' + tag(node) + Array.prototype.map.call(node.attributes, attr_str).join('') + '>';
            }

            function close(node) {
                result += '</' + tag(node) + '>';
            }

            function render(event) {
                (event.event == 'start' ? open : close)(event.node);
            }

            while (original.length || highlighted.length) {
                var stream = selectStream();
                result += escape(value.substr(processed, stream[0].offset - processed));
                processed = stream[0].offset;
                if (stream == original) {
                    /*
                     On any opening or closing tag of the original markup we first close
                     the entire highlighted node stack, then render the original tag along
                     with all the following original tags at the same offset and then
                     reopen all the tags on the highlighted stack.
                     */
                    nodeStack.reverse().forEach(close);
                    do {
                        render(stream.splice(0, 1)[0]);
                        stream = selectStream();
                    } while (stream == original && stream.length && stream[0].offset == processed);
                    nodeStack.reverse().forEach(open);
                } else {
                    if (stream[0].event == 'start') {
                        nodeStack.push(stream[0].node);
                    } else {
                        nodeStack.pop();
                    }
                    render(stream.splice(0, 1)[0]);
                }
            }
            return result + escape(value.substr(processed));
        }

        /* Initialization */

        function compileLanguage(language) {

            function reStr(re) {
                return (re && re.source) || re;
            }

            function langRe(value, global) {
                return RegExp(
                    reStr(value),
                    'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
                );
            }

            function compileMode(mode, parent) {
                if (mode.compiled)
                    return;
                mode.compiled = true;

                mode.keywords = mode.keywords || mode.beginKeywords;
                if (mode.keywords) {
                    var compiled_keywords = {};

                    var flatten = function(className, str) {
                        if (language.case_insensitive) {
                            str = str.toLowerCase();
                        }
                        str.split(' ').forEach(function(kw) {
                            var pair = kw.split('|');
                            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
                        });
                    };

                    if (typeof mode.keywords == 'string') { // string
                        flatten('keyword', mode.keywords);
                    } else {
                        Object.keys(mode.keywords).forEach(function (className) {
                            flatten(className, mode.keywords[className]);
                        });
                    }
                    mode.keywords = compiled_keywords;
                }
                mode.lexemesRe = langRe(mode.lexemes || /\b[A-Za-z0-9_]+\b/, true);

                if (parent) {
                    if (mode.beginKeywords) {
                        mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
                    }
                    if (!mode.begin)
                        mode.begin = /\B|\b/;
                    mode.beginRe = langRe(mode.begin);
                    if (!mode.end && !mode.endsWithParent)
                        mode.end = /\B|\b/;
                    if (mode.end)
                        mode.endRe = langRe(mode.end);
                    mode.terminator_end = reStr(mode.end) || '';
                    if (mode.endsWithParent && parent.terminator_end)
                        mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
                }
                if (mode.illegal)
                    mode.illegalRe = langRe(mode.illegal);
                if (mode.relevance === undefined)
                    mode.relevance = 1;
                if (!mode.contains) {
                    mode.contains = [];
                }
                var expanded_contains = [];
                mode.contains.forEach(function(c) {
                    if (c.variants) {
                        c.variants.forEach(function(v) {expanded_contains.push(inherit(c, v));});
                    } else {
                        expanded_contains.push(c == 'self' ? mode : c);
                    }
                });
                mode.contains = expanded_contains;
                mode.contains.forEach(function(c) {compileMode(c, mode);});

                if (mode.starts) {
                    compileMode(mode.starts, parent);
                }

                var terminators =
                    mode.contains.map(function(c) {
                        return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
                    })
                        .concat([mode.terminator_end, mode.illegal])
                        .map(reStr)
                        .filter(Boolean);
                mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(s) {return null;}};
            }

            compileMode(language);
        }

        /*
         Core highlighting function. Accepts a language name, or an alias, and a
         string with the code to highlight. Returns an object with the following
         properties:

         - relevance (int)
         - value (an HTML string with highlighting markup)

         */
        function highlight(name, value, ignore_illegals, continuation) {

            function subMode(lexeme, mode) {
                for (var i = 0; i < mode.contains.length; i++) {
                    if (testRe(mode.contains[i].beginRe, lexeme)) {
                        return mode.contains[i];
                    }
                }
            }

            function endOfMode(mode, lexeme) {
                if (testRe(mode.endRe, lexeme)) {
                    return mode;
                }
                if (mode.endsWithParent) {
                    return endOfMode(mode.parent, lexeme);
                }
            }

            function isIllegal(lexeme, mode) {
                return !ignore_illegals && testRe(mode.illegalRe, lexeme);
            }

            function keywordMatch(mode, match) {
                var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
                return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
            }

            function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
                var classPrefix = noPrefix ? '' : options.classPrefix,
                    openSpan    = '<span class="' + classPrefix,
                    closeSpan   = leaveOpen ? '' : '</span>';

                openSpan += classname + '">';

                return openSpan + insideSpan + closeSpan;
            }

            function processKeywords() {
                if (!top.keywords)
                    return escape(mode_buffer);
                var result = '';
                var last_index = 0;
                top.lexemesRe.lastIndex = 0;
                var match = top.lexemesRe.exec(mode_buffer);
                while (match) {
                    result += escape(mode_buffer.substr(last_index, match.index - last_index));
                    var keyword_match = keywordMatch(top, match);
                    if (keyword_match) {
                        relevance += keyword_match[1];
                        result += buildSpan(keyword_match[0], escape(match[0]));
                    } else {
                        result += escape(match[0]);
                    }
                    last_index = top.lexemesRe.lastIndex;
                    match = top.lexemesRe.exec(mode_buffer);
                }
                return result + escape(mode_buffer.substr(last_index));
            }

            function processSubLanguage() {
                if (top.subLanguage && !languages[top.subLanguage]) {
                    return escape(mode_buffer);
                }
                var result = top.subLanguage ? highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) : highlightAuto(mode_buffer);
                // Counting embedded language score towards the host language may be disabled
                // with zeroing the containing mode relevance. Usecase in point is Markdown that
                // allows XML everywhere and makes every XML snippet to have a much larger Markdown
                // score.
                if (top.relevance > 0) {
                    relevance += result.relevance;
                }
                if (top.subLanguageMode == 'continuous') {
                    continuations[top.subLanguage] = result.top;
                }
                return buildSpan(result.language, result.value, false, true);
            }

            function processBuffer() {
                return top.subLanguage !== undefined ? processSubLanguage() : processKeywords();
            }

            function startNewMode(mode, lexeme) {
                var markup = mode.className? buildSpan(mode.className, '', true): '';
                if (mode.returnBegin) {
                    result += markup;
                    mode_buffer = '';
                } else if (mode.excludeBegin) {
                    result += escape(lexeme) + markup;
                    mode_buffer = '';
                } else {
                    result += markup;
                    mode_buffer = lexeme;
                }
                top = Object.create(mode, {parent: {value: top}});
            }

            function processLexeme(buffer, lexeme) {

                mode_buffer += buffer;
                if (lexeme === undefined) {
                    result += processBuffer();
                    return 0;
                }

                var new_mode = subMode(lexeme, top);
                if (new_mode) {
                    result += processBuffer();
                    startNewMode(new_mode, lexeme);
                    return new_mode.returnBegin ? 0 : lexeme.length;
                }

                var end_mode = endOfMode(top, lexeme);
                if (end_mode) {
                    var origin = top;
                    if (!(origin.returnEnd || origin.excludeEnd)) {
                        mode_buffer += lexeme;
                    }
                    result += processBuffer();
                    do {
                        if (top.className) {
                            result += '</span>';
                        }
                        relevance += top.relevance;
                        top = top.parent;
                    } while (top != end_mode.parent);
                    if (origin.excludeEnd) {
                        result += escape(lexeme);
                    }
                    mode_buffer = '';
                    if (end_mode.starts) {
                        startNewMode(end_mode.starts, '');
                    }
                    return origin.returnEnd ? 0 : lexeme.length;
                }

                if (isIllegal(lexeme, top))
                    throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

                /*
                 Parser should not reach this point as all types of lexemes should be caught
                 earlier, but if it does due to some bug make sure it advances at least one
                 character forward to prevent infinite looping.
                 */
                mode_buffer += lexeme;
                return lexeme.length || 1;
            }

            var language = getLanguage(name);
            if (!language) {
                throw new Error('Unknown language: "' + name + '"');
            }

            compileLanguage(language);
            var top = continuation || language;
            var continuations = {}; // keep continuations for sub-languages
            var result = '';
            for(var current = top; current != language; current = current.parent) {
                if (current.className) {
                    result = buildSpan(current.className, '', true) + result;
                }
            }
            var mode_buffer = '';
            var relevance = 0;
            try {
                var match, count, index = 0;
                while (true) {
                    top.terminators.lastIndex = index;
                    match = top.terminators.exec(value);
                    if (!match)
                        break;
                    count = processLexeme(value.substr(index, match.index - index), match[0]);
                    index = match.index + count;
                }
                processLexeme(value.substr(index));
                for(var current = top; current.parent; current = current.parent) { // close dangling modes
                    if (current.className) {
                        result += '</span>';
                    }
                };
                return {
                    relevance: relevance,
                    value: result,
                    language: name,
                    top: top
                };
            } catch (e) {
                if (e.message.indexOf('Illegal') != -1) {
                    return {
                        relevance: 0,
                        value: escape(value)
                    };
                } else {
                    throw e;
                }
            }
        }

        /*
         Highlighting with language detection. Accepts a string with the code to
         highlight. Returns an object with the following properties:

         - language (detected language)
         - relevance (int)
         - value (an HTML string with highlighting markup)
         - second_best (object with the same structure for second-best heuristically
         detected language, may be absent)

         */
        function highlightAuto(text, languageSubset) {
            languageSubset = languageSubset || options.languages || Object.keys(languages);
            var result = {
                relevance: 0,
                value: escape(text)
            };
            var second_best = result;
            languageSubset.forEach(function(name) {
                if (!getLanguage(name)) {
                    return;
                }
                var current = highlight(name, text, false);
                current.language = name;
                if (current.relevance > second_best.relevance) {
                    second_best = current;
                }
                if (current.relevance > result.relevance) {
                    second_best = result;
                    result = current;
                }
            });
            if (second_best.language) {
                result.second_best = second_best;
            }
            return result;
        }

        /*
         Post-processing of the highlighted markup:

         - replace TABs with something more useful
         - replace real line-breaks with '<br>' for non-pre containers

         */
        function fixMarkup(value) {
            if (options.tabReplace) {
                value = value.replace(/^((<[^>]+>|\t)+)/gm, function(match, p1, offset, s) {
                    return p1.replace(/\t/g, options.tabReplace);
                });
            }
            if (options.useBR) {
                value = value.replace(/\n/g, '<br>');
            }
            return value;
        }

        function buildClassName(prevClassName, currentLang, resultLang) {
            var language = currentLang ? aliases[currentLang] : resultLang,
                result   = [prevClassName.trim()];

            if (!prevClassName.match(/(\s|^)hljs(\s|$)/)) {
                result.push('hljs');
            }

            if (language) {
                result.push(language);
            }

            return result.join(' ').trim();
        }

        /*
         Applies highlighting to a DOM node containing code. Accepts a DOM node and
         two optional parameters for fixMarkup.
         */
        function highlightBlock(block) {
            var language = blockLanguage(block);
            if (/no(-?)highlight/.test(language))
                return;

            var node;
            if (options.useBR) {
                node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
                node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
            } else {
                node = block;
            }
            var text = node.textContent;
            var result = language ? highlight(language, text, true) : highlightAuto(text);

            var originalStream = nodeStream(node);
            if (originalStream.length) {
                var resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
                resultNode.innerHTML = result.value;
                result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
            }
            result.value = fixMarkup(result.value);

            block.innerHTML = result.value;
            block.className = buildClassName(block.className, language, result.language);
            block.result = {
                language: result.language,
                re: result.relevance
            };
            if (result.second_best) {
                block.second_best = {
                    language: result.second_best.language,
                    re: result.second_best.relevance
                };
            }
        }

        var options = {
            classPrefix: 'hljs-',
            tabReplace: null,
            useBR: false,
            languages: undefined
        };

        /*
         Updates highlight.js global options with values passed in the form of an object
         */
        function configure(user_options) {
            options = inherit(options, user_options);
        }

        /*
         Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
         */
        function initHighlighting() {
            if (initHighlighting.called)
                return;
            initHighlighting.called = true;

            var blocks = document.querySelectorAll('pre code');
            Array.prototype.forEach.call(blocks, highlightBlock);
        }

        /*
         Attaches highlighting to the page load event.
         */
        function initHighlightingOnLoad() {
            addEventListener('DOMContentLoaded', initHighlighting, false);
            addEventListener('load', initHighlighting, false);
        }

        var languages = {};
        var aliases = {};

        function registerLanguage(name, language) {
            var lang = languages[name] = language(this);
            if (lang.aliases) {
                lang.aliases.forEach(function(alias) {aliases[alias] = name;});
            }
        }

        function listLanguages() {
            return Object.keys(languages);
        }

        function getLanguage(name) {
            return languages[name] || languages[aliases[name]];
        }

        /* Interface definition */

        this.highlight = highlight;
        this.highlightAuto = highlightAuto;
        this.fixMarkup = fixMarkup;
        this.highlightBlock = highlightBlock;
        this.configure = configure;
        this.initHighlighting = initHighlighting;
        this.initHighlightingOnLoad = initHighlightingOnLoad;
        this.registerLanguage = registerLanguage;
        this.listLanguages = listLanguages;
        this.getLanguage = getLanguage;
        this.inherit = inherit;

        // Common regexps
        this.IDENT_RE = '[a-zA-Z][a-zA-Z0-9_]*';
        this.UNDERSCORE_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_]*';
        this.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
        this.C_NUMBER_RE = '(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
        this.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
        this.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

        // Common modes
        this.BACKSLASH_ESCAPE = {
            begin: '\\\\[\\s\\S]', relevance: 0
        };
        this.APOS_STRING_MODE = {
            className: 'string',
            begin: '\'', end: '\'',
            illegal: '\\n',
            contains: [this.BACKSLASH_ESCAPE]
        };
        this.QUOTE_STRING_MODE = {
            className: 'string',
            begin: '"', end: '"',
            illegal: '\\n',
            contains: [this.BACKSLASH_ESCAPE]
        };
        this.PHRASAL_WORDS_MODE = {
            begin: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
        };
        this.C_LINE_COMMENT_MODE = {
            className: 'comment',
            begin: '//', end: '$',
            contains: [this.PHRASAL_WORDS_MODE]
        };
        this.C_BLOCK_COMMENT_MODE = {
            className: 'comment',
            begin: '/\\*', end: '\\*/',
            contains: [this.PHRASAL_WORDS_MODE]
        };
        this.HASH_COMMENT_MODE = {
            className: 'comment',
            begin: '#', end: '$',
            contains: [this.PHRASAL_WORDS_MODE]
        };
        this.NUMBER_MODE = {
            className: 'number',
            begin: this.NUMBER_RE,
            relevance: 0
        };
        this.C_NUMBER_MODE = {
            className: 'number',
            begin: this.C_NUMBER_RE,
            relevance: 0
        };
        this.BINARY_NUMBER_MODE = {
            className: 'number',
            begin: this.BINARY_NUMBER_RE,
            relevance: 0
        };
        this.CSS_NUMBER_MODE = {
            className: 'number',
            begin: this.NUMBER_RE + '(' +
            '%|em|ex|ch|rem'  +
            '|vw|vh|vmin|vmax' +
            '|cm|mm|in|pt|pc|px' +
            '|deg|grad|rad|turn' +
            '|s|ms' +
            '|Hz|kHz' +
            '|dpi|dpcm|dppx' +
            ')?',
            relevance: 0
        };
        this.REGEXP_MODE = {
            className: 'regexp',
            begin: /\//, end: /\/[gimuy]*/,
            illegal: /\n/,
            contains: [
                this.BACKSLASH_ESCAPE,
                {
                    begin: /\[/, end: /\]/,
                    relevance: 0,
                    contains: [this.BACKSLASH_ESCAPE]
                }
            ]
        };
        this.TITLE_MODE = {
            className: 'title',
            begin: this.IDENT_RE,
            relevance: 0
        };
        this.UNDERSCORE_TITLE_MODE = {
            className: 'title',
            begin: this.UNDERSCORE_IDENT_RE,
            relevance: 0
        };

        return this;
    }

    /*
     Language: PHP
     Author: Victor Karamzin <Victor.Karamzin@enterra-inc.com>
     Contributors: Evgeny Stepanischev <imbolk@gmail.com>, Ivan Sagalaev <maniac@softwaremaniacs.org>
     */

    function PHP(hljs) {
        var VARIABLE = {
            className: 'variable', begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*'
        };
        var PREPROCESSOR = {
            className: 'preprocessor', begin: /<\?(php)?|\?>/
        };
        var STRING = {
            className: 'string',
            contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],
            variants: [
                {
                    begin: 'b"', end: '"'
                },
                {
                    begin: 'b\'', end: '\''
                },
                hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
                hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})
            ]
        };
        var NUMBER = {variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]};
        return {
            aliases: ['php3', 'php4', 'php5', 'php6'],
            case_insensitive: true,
            keywords:
            'and include_once list abstract global private echo interface as static endswitch ' +
            'array null if endwhile or const for endforeach self var while isset public ' +
            'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' +
            'return parent clone use __CLASS__ __LINE__ else break print eval new ' +
            'catch __METHOD__ case exception default die require __FUNCTION__ ' +
            'enddeclare final try switch continue endfor endif declare unset true false ' +
            'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' +
            'yield finally',
            contains: [
                hljs.C_LINE_COMMENT_MODE,
                hljs.HASH_COMMENT_MODE,
                {
                    className: 'comment',
                    begin: '/\\*', end: '\\*/',
                    contains: [
                        {
                            className: 'phpdoc',
                            begin: '\\s@[A-Za-z]+'
                        },
                        PREPROCESSOR
                    ]
                },
                {
                    className: 'comment',
                    begin: '__halt_compiler.+?;', endsWithParent: true,
                    keywords: '__halt_compiler', lexemes: hljs.UNDERSCORE_IDENT_RE
                },
                {
                    className: 'string',
                    begin: '<<<[\'"]?\\w+[\'"]?$', end: '^\\w+;',
                    contains: [hljs.BACKSLASH_ESCAPE]
                },
                PREPROCESSOR,
                VARIABLE,
                {
                    // swallow class members to avoid parsing them as keywords
                    begin: /->+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
                },
                {
                    className: 'function',
                    beginKeywords: 'function', end: /[;{]/, excludeEnd: true,
                    illegal: '\\$|\\[|%',
                    contains: [
                        hljs.UNDERSCORE_TITLE_MODE,
                        {
                            className: 'params',
                            begin: '\\(', end: '\\)',
                            contains: [
                                'self',
                                VARIABLE,
                                hljs.C_BLOCK_COMMENT_MODE,
                                STRING,
                                NUMBER
                            ]
                        }
                    ]
                },
                {
                    className: 'class',
                    beginKeywords: 'class interface', end: '{', excludeEnd: true,
                    illegal: /[:\(\$"]/,
                    contains: [
                        {beginKeywords: 'extends implements'},
                        hljs.UNDERSCORE_TITLE_MODE
                    ]
                },
                {
                    beginKeywords: 'namespace', end: ';',
                    illegal: /[\.']/,
                    contains: [hljs.UNDERSCORE_TITLE_MODE]
                },
                {
                    beginKeywords: 'use', end: ';',
                    contains: [hljs.UNDERSCORE_TITLE_MODE]
                },
                {
                    begin: '=>' // No markup, just a relevance booster
                },
                STRING,
                NUMBER
            ]
        };
    }


})(KUBE);