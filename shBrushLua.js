/*
 *
 * shBrushLua.js
 *
 * https://github.com/eljeko/shBrushLua
 *
 * by eljeko
 *
 * Lua brush for SyntaxHighlighter: http://alexgorbatchev.com/SyntaxHighlighter/
 *
 */

dp.sh.Brushes.Lua = function() {
    var functions = 'math\\.\\w+ string\\.\\w+ os\\.\\w+ debug\\.\\w+ io\\.\\w+ error fopen dofile coroutine\\.\\w+ arg ipairs getmetatable loadfile longjmp loadstring rawget print seek rawset assert setmetatable tostring tonumber loadlib';
	var keywords =	'do break end elseif else this function if local nil or not return repeat and until then while';

    this.regexList = [
        { regex: new RegExp(this.GetKeywords(functions), 'gm'),                 css: 'func'     },
        { regex: new RegExp('\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b', 'gi'),    css: 'luanumber'}, // numbers
        { regex: new RegExp(this.GetKeywords(keywords),  'gm'),                 css: 'keyword'  },
        { regex: new RegExp('--\\[\\[[\\s\\S]*\\]\\]--', 'gm'),                 css: 'comments' },
        { regex: new RegExp('--[^\\[]{2}.*$', 'gm'),                            css: 'comments' }, // one line comments
        { regex: dp.sh.RegexLib.DoubleQuotedString,                             css: 'string'   }, // strings
        { regex: dp.sh.RegexLib.SingleQuotedString,                             css: 'string'   }, // strings
        { regex: new RegExp('__sub', 'gm'),                                     css: 'specialfields' }, //special lua field
        { regex: new RegExp('__mul', 'gm'),                                     css: 'specialfields' }, //special lua field
        { regex: new RegExp('__div', 'gm'),                                     css: 'specialfields' }, //special lua field
        { regex: new RegExp('__mod', 'gm'),                                     css: 'specialfields' }, //special lua field
        { regex: new RegExp('__pow', 'gm'),                                     css: 'specialfields' }, //special lua field
        { regex: new RegExp('__unm', 'gm'),                                     css: 'specialfields' }, //special lua field
        { regex: new RegExp('__concat', 'gm'),                                  css: 'specialfields' }, //special lua field
        { regex: new RegExp('__len', 'gm'),                                     css: 'specialfields' }, //special lua field
        { regex: new RegExp('__eq', 'gm'),                                      css: 'specialfields' }, //special lua field
        { regex: new RegExp('__lt', 'gm'),                                      css: 'specialfields' }, //special lua field
        { regex: new RegExp('__le', 'gm'),                                      css: 'specialfields' }, //special lua field
        { regex: new RegExp('__call', 'gm'),                                    css: 'specialfields' }, //special lua field
        { regex: new RegExp('__gc', 'gm'),                                      css: 'specialfields' }, //special lua field
        { regex: new RegExp('__index', 'gm'),                                   css: 'specialfields' }, //special lua field
        { regex: new RegExp('__newindex', 'gm'),                                css: 'specialfields' }, //special lua field
    ];

    this.CssClass = 'dp-lua';
    this.Style =    '.dp-lua .luanumber { color: #440077; }' +
                    '.dp-lua .specialfields { color: #880000; }';
}

dp.sh.Brushes.Lua.prototype	= new dp.sh.Highlighter();
dp.sh.Brushes.Lua.Aliases = ['lua'];
                                                        
