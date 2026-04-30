(function(){var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,ee=c.length,u;l<ee;l++)u=c[l],!a.call(e,u)&&u!==o&&t(e,u,{get:(e=>i[e]).bind(null,u),enumerable:!(s=n(i,u))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),l=o(((e,t)=>{t.exports={}})),ee=Object.defineProperty,u=(e,t)=>ee(e,`name`,{value:t,configurable:!0}),d=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),te=(()=>{for(var e=new Uint8Array(128),t=0;t<64;t++)e[t<26?t+65:t<52?t+71:t<62?t-4:t*4-205]=t;return t=>{for(var n=t.length,r=new Uint8Array((n-(t[n-1]==`=`)-(t[n-2]==`=`))*3/4|0),i=0,a=0;i<n;){var o=e[t.charCodeAt(i++)],s=e[t.charCodeAt(i++)],c=e[t.charCodeAt(i++)],l=e[t.charCodeAt(i++)];r[a++]=o<<2|s>>4,r[a++]=s<<4|c>>2,r[a++]=c<<6|l}return r}})();function ne(e){return!isNaN(parseFloat(e))&&isFinite(e)}u(ne,`_isNumber`);function f(e){return e.charAt(0).toUpperCase()+e.substring(1)}u(f,`_capitalize`);function p(e){return function(){return this[e]}}u(p,`_getter`);var m=[`isConstructor`,`isEval`,`isNative`,`isToplevel`],h=[`columnNumber`,`lineNumber`],g=[`fileName`,`functionName`,`source`],_=m.concat(h,g,[`args`],[`evalOrigin`]);function v(e){if(e)for(var t=0;t<_.length;t++)e[_[t]]!==void 0&&this[`set`+f(_[t])](e[_[t]])}for(u(v,`StackFrame`),v.prototype={getArgs:u(function(){return this.args},`getArgs`),setArgs:u(function(e){if(Object.prototype.toString.call(e)!==`[object Array]`)throw TypeError(`Args must be an Array`);this.args=e},`setArgs`),getEvalOrigin:u(function(){return this.evalOrigin},`getEvalOrigin`),setEvalOrigin:u(function(e){if(e instanceof v)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new v(e);else throw TypeError(`Eval Origin must be an Object or StackFrame`)},`setEvalOrigin`),toString:u(function(){var e=this.getFileName()||``,t=this.getLineNumber()||``,n=this.getColumnNumber()||``,r=this.getFunctionName()||``;return this.getIsEval()?e?`[eval] (`+e+`:`+t+`:`+n+`)`:`[eval]:`+t+`:`+n:r?r+` (`+e+`:`+t+`:`+n+`)`:e+`:`+t+`:`+n},`toString`)},v.fromString=u(function(e){var t=e.indexOf(`(`),n=e.lastIndexOf(`)`),r=e.substring(0,t),i=e.substring(t+1,n).split(`,`),a=e.substring(n+1);if(a.indexOf(`@`)===0)var o=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(a,``),s=o[1],c=o[2],l=o[3];return new v({functionName:r,args:i||void 0,fileName:s,lineNumber:c||void 0,columnNumber:l||void 0})},`StackFrame$$fromString`),y=0;y<m.length;y++)v.prototype[`get`+f(m[y])]=p(m[y]),v.prototype[`set`+f(m[y])]=function(e){return function(t){this[e]=!!t}}(m[y]);var y;for(b=0;b<h.length;b++)v.prototype[`get`+f(h[b])]=p(h[b]),v.prototype[`set`+f(h[b])]=function(e){return function(t){if(!ne(t))throw TypeError(e+` must be a Number`);this[e]=Number(t)}}(h[b]);var b;for(x=0;x<g.length;x++)v.prototype[`get`+f(g[x])]=p(g[x]),v.prototype[`set`+f(g[x])]=function(e){return function(t){this[e]=String(t)}}(g[x]);var x,S=v;function C(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:u(function(t){if(t.stack&&t.stack.match(e))return this.parseV8OrIE(t);if(t.stack)return this.parseFFOrSafari(t);throw Error(`Cannot parse given Error object`)},`ErrorStackParser$$parse`),extractLocation:u(function(e){if(e.indexOf(`:`)===-1)return[e];var t=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g,``));return[t[1],t[2]||void 0,t[3]||void 0]},`ErrorStackParser$$extractLocation`),parseV8OrIE:u(function(t){return t.stack.split(`
`).filter(function(t){return!!t.match(e)},this).map(function(e){e.indexOf(`(eval `)>-1&&(e=e.replace(/eval code/g,`eval`).replace(/(\(eval at [^()]*)|(,.*$)/g,``));var t=e.replace(/^\s+/,``).replace(/\(eval code/g,`(`).replace(/^.*?\s+/,``),n=t.match(/ (\(.+\)$)/);t=n?t.replace(n[0],``):t;var r=this.extractLocation(n?n[1]:t);return new S({functionName:n&&t||void 0,fileName:[`eval`,`<anonymous>`].indexOf(r[0])>-1?void 0:r[0],lineNumber:r[1],columnNumber:r[2],source:e})},this)},`ErrorStackParser$$parseV8OrIE`),parseFFOrSafari:u(function(e){return e.stack.split(`
`).filter(function(e){return!e.match(t)},this).map(function(e){if(e.indexOf(` > eval`)>-1&&(e=e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,`:$1`)),e.indexOf(`@`)===-1&&e.indexOf(`:`)===-1)return new S({functionName:e});var t=/((.*".+"[^@]*)?[^@]*)(?:@)/,n=e.match(t),r=n&&n[1]?n[1]:void 0,i=this.extractLocation(e.replace(t,``));return new S({functionName:r,fileName:i[0],lineNumber:i[1],columnNumber:i[2],source:e})},this)},`ErrorStackParser$$parseFFOrSafari`)}}u(C,`ErrorStackParser`);var re=new C;function w(){return typeof API<`u`&&API!==globalThis.API?API.runtimeEnv:ie({IN_BUN:typeof Bun<`u`,IN_DENO:typeof Deno<`u`,IN_NODE:typeof process==`object`&&typeof process.versions==`object`&&typeof process.versions.node==`string`&&!process.browser,IN_SAFARI:typeof navigator==`object`&&typeof navigator.userAgent==`string`&&navigator.userAgent.indexOf(`Chrome`)===-1&&navigator.userAgent.indexOf(`Safari`)>-1,IN_SHELL:typeof read==`function`&&typeof load==`function`})}u(w,`getGlobalRuntimeEnv`);var T=w();function ie(e){let t=e.IN_NODE&&typeof module<`u`&&module.exports&&typeof d==`function`&&typeof __dirname==`string`,n=e.IN_NODE&&!t,r=!e.IN_NODE&&!e.IN_DENO&&!e.IN_BUN,i=r&&typeof window<`u`&&typeof window.document<`u`&&typeof document.createElement==`function`&&`sessionStorage`in window&&typeof globalThis.importScripts!=`function`,a=r&&typeof globalThis.WorkerGlobalScope<`u`&&typeof globalThis.self<`u`&&globalThis.self instanceof globalThis.WorkerGlobalScope;return{...e,IN_BROWSER:r,IN_BROWSER_MAIN_THREAD:i,IN_BROWSER_WEB_WORKER:a,IN_NODE_COMMONJS:t,IN_NODE_ESM:n}}u(ie,`calculateDerivedFlags`);var ae,E,D,O,k;async function A(){if(!T.IN_NODE||(ae=(await Promise.resolve().then(()=>c(l(),1))).default,O=await Promise.resolve().then(()=>c(l(),1)),k=await Promise.resolve().then(()=>c(l(),1)),D=(await Promise.resolve().then(()=>c(l(),1))).default,E=await Promise.resolve().then(()=>c(l(),1)),P=E.sep,typeof d<`u`))return;let e={fs:O,crypto:await Promise.resolve().then(()=>c(l(),1)),ws:await Promise.resolve().then(()=>c(l(),1)),child_process:await Promise.resolve().then(()=>c(l(),1))};globalThis.require=function(t){return e[t]}}u(A,`initNodeModules`);function j(e,t){return E.resolve(t||`.`,e)}u(j,`node_resolvePath`);function M(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}u(M,`browser_resolvePath`);var N=T.IN_NODE?j:T.IN_SHELL?u(e=>e,`resolvePath`):M,P;T.IN_NODE||(P=`/`);function F(e,t){return e.startsWith(`file://`)&&(e=e.slice(7)),e.includes(`://`)?{response:fetch(e)}:{binary:k.readFile(e).then(e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}}u(F,`node_getBinaryResponse`);function I(e,t){if(e.startsWith(`file://`)&&(e=e.slice(7)),e.includes(`://`))throw Error(`Shell cannot fetch urls`);return{binary:Promise.resolve(new Uint8Array(readbuffer(e)))}}u(I,`shell_getBinaryResponse`);function L(e,t){let n=new URL(e,location);return{response:fetch(n,t?{integrity:t}:{})}}u(L,`browser_getBinaryResponse`);var R=T.IN_NODE?F:T.IN_SHELL?I:L;async function z(e,t){let{response:n,binary:r}=R(e,t);if(r)return r;let i=await n;if(!i.ok)throw Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await i.arrayBuffer())}u(z,`loadBinaryFile`);var B;if(T.IN_BROWSER_MAIN_THREAD)B=u(async e=>await import(e),`loadScript`);else if(T.IN_BROWSER_WEB_WORKER)B=u(async e=>{try{globalThis.importScripts(e)}catch(t){if(t instanceof TypeError)await import(e);else throw t}},`loadScript`);else if(T.IN_NODE)B=V;else if(T.IN_SHELL)B=load;else throw Error(`Cannot determine runtime environment`);async function V(e){e.startsWith(`file://`)&&(e=e.slice(7)),e.includes(`://`)?D.runInThisContext(await(await fetch(e)).text()):await import(ae.pathToFileURL(e).href)}u(V,`nodeLoadScript`);async function H(e){if(T.IN_NODE){await A();let t=await k.readFile(e,{encoding:`utf8`});return JSON.parse(t)}else if(T.IN_SHELL){let t=read(e);return JSON.parse(t)}else return await(await fetch(e)).json()}u(H,`loadLockFile`);async function U(){if(T.IN_NODE_COMMONJS)return __dirname;let e;try{throw Error()}catch(t){e=t}let t=re.parse(e)[0].fileName;if(T.IN_NODE&&!t.startsWith(`file://`)&&(t=`file://${t}`),T.IN_NODE_ESM){let e=await Promise.resolve().then(()=>c(l(),1));return(await Promise.resolve().then(()=>c(l(),1))).fileURLToPath(e.dirname(t))}let n=t.lastIndexOf(P);if(n===-1)throw Error(`Could not extract indexURL path from pyodide module location. Please pass the indexURL explicitly to loadPyodide.`);return t.slice(0,n)}u(U,`calculateDirname`);function W(e){return e.substring(0,e.lastIndexOf(`/`)+1)||globalThis.location?.toString()||`.`}u(W,`calculateInstallBaseUrl`);function G(e){let t=e.FS,n=e.FS.filesystems.MEMFS,r=e.PATH,i={DIR_MODE:16895,FILE_MODE:33279,mount:u(function(e){if(!e.opts.fileSystemHandle)throw Error(`opts.fileSystemHandle is required`);return n.mount.apply(null,arguments)},`mount`),syncfs:u(async(e,t,n)=>{try{let r=i.getLocalSet(e),a=await i.getRemoteSet(e),o=t?a:r,s=t?r:a;await i.reconcile(e,o,s),n(null)}catch(e){n(e)}},`syncfs`),getLocalSet:u(e=>{let n=Object.create(null);function i(e){return e!==`.`&&e!==`..`}u(i,`isRealDir`);function a(e){return t=>r.join2(e,t)}u(a,`toAbsolute`);let o=t.readdir(e.mountpoint).filter(i).map(a(e.mountpoint));for(;o.length;){let e=o.pop(),r=t.stat(e);t.isDir(r.mode)&&o.push.apply(o,t.readdir(e).filter(i).map(a(e))),n[e]={timestamp:r.mtime,mode:r.mode}}return{type:`local`,entries:n}},`getLocalSet`),getRemoteSet:u(async e=>{let t=Object.create(null),n=await oe(e.opts.fileSystemHandle);for(let[a,o]of n)a!==`.`&&(t[r.join2(e.mountpoint,a)]={timestamp:o.kind===`file`?new Date((await o.getFile()).lastModified):new Date,mode:o.kind===`file`?i.FILE_MODE:i.DIR_MODE});return{type:`remote`,entries:t,handles:n}},`getRemoteSet`),loadLocalEntry:u(e=>{let r=t.lookupPath(e,{}).node,i=t.stat(e);if(t.isDir(i.mode))return{timestamp:i.mtime,mode:i.mode};if(t.isFile(i.mode))return r.contents=n.getFileDataAsTypedArray(r),{timestamp:i.mtime,mode:i.mode,contents:r.contents};throw Error(`node type not supported`)},`loadLocalEntry`),storeLocalEntry:u((e,n)=>{if(t.isDir(n.mode))t.mkdirTree(e,n.mode);else if(t.isFile(n.mode))t.writeFile(e,n.contents,{canOwn:!0});else throw Error(`node type not supported`);t.chmod(e,n.mode),t.utime(e,n.timestamp,n.timestamp)},`storeLocalEntry`),removeLocalEntry:u(e=>{var n=t.stat(e);t.isDir(n.mode)?t.rmdir(e):t.isFile(n.mode)&&t.unlink(e)},`removeLocalEntry`),loadRemoteEntry:u(async e=>{if(e.kind===`file`){let t=await e.getFile();return{contents:new Uint8Array(await t.arrayBuffer()),mode:i.FILE_MODE,timestamp:new Date(t.lastModified)}}else{if(e.kind===`directory`)return{mode:i.DIR_MODE,timestamp:new Date};throw Error(`unknown kind: `+e.kind)}},`loadRemoteEntry`),storeRemoteEntry:u(async(e,n,i)=>{let a=e.get(r.dirname(n)),o=t.isFile(i.mode)?await a.getFileHandle(r.basename(n),{create:!0}):await a.getDirectoryHandle(r.basename(n),{create:!0});if(o.kind===`file`){let e=await o.createWritable();await e.write(i.contents),await e.close()}e.set(n,o)},`storeRemoteEntry`),removeRemoteEntry:u(async(e,t)=>{await e.get(r.dirname(t)).removeEntry(r.basename(t)),e.delete(t)},`removeRemoteEntry`),reconcile:u(async(e,n,a)=>{let o=0,s=[];Object.keys(n.entries).forEach(function(e){let r=n.entries[e],i=a.entries[e];(!i||t.isFile(r.mode)&&r.timestamp.getTime()>i.timestamp.getTime())&&(s.push(e),o++)}),s.sort();let c=[];if(Object.keys(a.entries).forEach(function(e){n.entries[e]||(c.push(e),o++)}),c.sort().reverse(),!o)return;let l=n.type===`remote`?n.handles:a.handles;for(let t of s){let n=r.normalize(t.replace(e.mountpoint,`/`)).substring(1);if(a.type===`local`){let e=l.get(n),r=await i.loadRemoteEntry(e);i.storeLocalEntry(t,r)}else{let e=i.loadLocalEntry(t);await i.storeRemoteEntry(l,n,e)}}for(let t of c)if(a.type===`local`)i.removeLocalEntry(t);else{let n=r.normalize(t.replace(e.mountpoint,`/`)).substring(1);await i.removeRemoteEntry(l,n)}},`reconcile`)};e.FS.filesystems.NATIVEFS_ASYNC=i}u(G,`initializeNativeFS`);var oe=u(async e=>{let t=[];async function n(e){for await(let r of e.values())t.push(r),r.kind===`directory`&&await n(r)}u(n,`collect`),await n(e);let r=new Map;r.set(`.`,e);for(let n of t){let t=(await e.resolve(n)).join(`/`);r.set(t,n)}return r},`getFsHandles`),se=te(`AGFzbQEAAAABDANfAGAAAW9gAW8BfwMDAgECByECD2NyZWF0ZV9zZW50aW5lbAAAC2lzX3NlbnRpbmVsAAEKEwIHAPsBAPsbCwkAIAD7GvsUAAs=`),ce=async function(){if(!(globalThis.navigator&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&typeof navigator.maxTouchPoints<`u`&&navigator.maxTouchPoints>1)))try{let e=await WebAssembly.compile(se);return await WebAssembly.instantiate(e)}catch(e){if(e instanceof WebAssembly.CompileError)return;throw e}}();async function K(){let e=await ce;if(e)return e.exports;let t=Symbol(`error marker`);return{create_sentinel:u(()=>t,`create_sentinel`),is_sentinel:u(e=>e===t,`is_sentinel`)}}u(K,`getSentinelImport`);function q(e){let t={config:e,runtimeEnv:T},n={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:de(e),print:e.stdout,printErr:e.stderr,onExit(e){n.exitCode=e},thisProgram:e._sysExecutable,arguments:e.args,API:t,locateFile:u(t=>e.indexURL+t,`locateFile`),instantiateWasm:fe(e.indexURL)};return n}u(q,`createSettings`);function J(e){return function(t){try{t.FS.mkdirTree(e)}catch(t){console.error(`Error occurred while making a home directory '${e}':`),console.error(t),console.error(`Using '/' for a home directory instead`),e=`/`}t.FS.chdir(e)}}u(J,`createHomeDirectory`);function Y(e){return function(t){Object.assign(t.ENV,e)}}u(Y,`setEnvironment`);function X(e){return e?[async t=>{t.addRunDependency(`fsInitHook`);try{await e(t.FS,{sitePackages:t.API.sitePackages})}finally{t.removeRunDependency(`fsInitHook`)}}]:[]}u(X,`callFsInitHook`);function le(e){let t=e.HEAPU32[e._Py_Version>>>2];return[t>>>24&255,t>>>16&255,t>>>8&255]}u(le,`computeVersionTuple`);function ue(e){let t=z(e);return async e=>{e.API.pyVersionTuple=le(e);let[n,r]=e.API.pyVersionTuple;e.FS.mkdirTree(`/lib`),e.API.sitePackages=`/lib/python${n}.${r}/site-packages`,e.FS.mkdirTree(e.API.sitePackages),e.addRunDependency(`install-stdlib`);try{let i=await t;e.FS.writeFile(`/lib/python${n}${r}.zip`,i)}catch(e){console.error(`Error occurred while installing the standard library:`),console.error(e)}finally{e.removeRunDependency(`install-stdlib`)}}}u(ue,`installStdlib`);function de(e){let t;return t=e.stdLibURL==null?e.indexURL+`python_stdlib.zip`:e.stdLibURL,[ue(t),J(e.env.HOME),Y(e.env),G,...X(e.fsInit)]}u(de,`getFileSystemInitializationFuncs`);function fe(e){if(typeof WasmOffsetConverter<`u`)return;let{binary:t,response:n}=R(e+`pyodide.asm.wasm`),r=K();return function(e,i){return async function(){e.sentinel=await r;try{let r;r=n?await WebAssembly.instantiateStreaming(n,e):await WebAssembly.instantiate(await t,e);let{instance:a,module:o}=r;i(a,o)}catch(e){console.warn(`wasm instantiation failed!`),console.warn(e)}}(),{}}}u(fe,`getInstantiateWasmFunc`);var pe=`0.29.3`;function Z(e){return e===void 0||e.endsWith(`/`)?e:e+`/`}u(Z,`withTrailingSlash`);var me=pe;async function he(e={}){if(await A(),e.lockFileContents&&e.lockFileURL)throw Error(`Can't pass both lockFileContents and lockFileURL`);let t=e.indexURL||await U();if(t=Z(N(t)),e.packageBaseUrl=Z(e.packageBaseUrl),e.cdnUrl=Z(e.packageBaseUrl??`https://cdn.jsdelivr.net/pyodide/v0.29.3/full/`),!e.lockFileContents){let n=e.lockFileURL??t+`pyodide-lock.json`;e.lockFileContents=H(n),e.packageBaseUrl??=W(n)}e.indexURL=t,e.packageCacheDir&&=Z(N(e.packageCacheDir));let n={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?()=>globalThis.prompt():void 0,args:[],env:{},packages:[],packageCacheDir:e.packageBaseUrl,enableRunUntilComplete:!0,checkAPIVersion:!0,BUILD_ID:`b7b7b0f46eb68e65c029c0dc739270e8a5d35251e9aab6014ee1c2f630e5d1d0`},r=Object.assign(n,e);return r.env.HOME??=`/home/pyodide`,r.env.PYTHONINSPECT??=`1`,r}u(he,`initializeConfiguration`);function ge(e){let t=q(e),n=t.API;return n.lockFilePromise=Promise.resolve(e.lockFileContents),t}u(ge,`createEmscriptenSettings`);async function _e(e){if(typeof _createPyodideModule!=`function`){let t=`${e.indexURL}pyodide.asm.js`;await B(t)}}u(_e,`loadWasmScript`);async function ve(e,t){if(!e._loadSnapshot)return;let n=await e._loadSnapshot,r=ArrayBuffer.isView(n)?n:new Uint8Array(n);return t.noInitialRun=!0,t.INITIAL_MEMORY=r.length,r}u(ve,`prepareSnapshot`);async function ye(e){let t=await _createPyodideModule(e);if(e.exitCode!==void 0)throw new t.ExitStatus(e.exitCode);return t}u(ye,`createPyodideModule`);function be(e,t){let n=e.API;if(t.pyproxyToStringRepr&&n.setPyProxyToStringMethod(!0),t.convertNullToNone&&n.setCompatNullToNone(!0),t.toJsLiteralMap&&n.setCompatToJsLiteralMap(!0),n.version!==`0.29.3`&&t.checkAPIVersion)throw Error(`Pyodide version does not match: '${me}' <==> '${n.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);e.locateFile=e=>{throw e.endsWith(`.so`)?Error(`Failed to find dynamic library "${e}"`):Error(`Unexpected call to locateFile("${e}")`)}}u(be,`configureAPI`);function xe(e,t,n){let r=e.API,i;return t&&(i=r.restoreSnapshot(t)),r.finalizeBootstrap(i,n._snapshotDeserializer)}u(xe,`bootstrapPyodide`);async function Se(e,t){let n=e._api;return n.sys.path.insert(0,``),n._pyodide.set_excepthook(),await n.packageIndexReady,n.initializeStreams(t.stdin,t.stdout,t.stderr),e}u(Se,`finalizeSetup`);async function Ce(e={}){let t=await he(e),n=ge(t);await _e(t);let r=await ve(t,n),i=await ye(n);return be(i,t),await Se(xe(i,r,t),t)}u(Ce,`loadPyodide`);var we=`from instructions.primitives import call_primitive_function
from utils import read_f32, read_f64, read_i32, read_u8, read_u32


def handle_noop(reader, stack, env, constants):
    '''Handles the 0x00 instruction.'''
    pass


def handle_ldc_i(reader, stack, env, constants):
    '''Handles the 0x01 instruction.'''
    stack.append(read_i32(reader))


def handle_lgc_i(*args):
    '''Handles the 0x02 instruction.'''
    handle_ldc_i(*args)


def handle_ldc_f32(reader, stack, env, constants):
    '''Handles the 0x03 instruction.'''
    stack.append(read_f32(reader))


def handle_lgc_f32(*args):
    '''Handles the 0x04 instruction.'''
    handle_ldc_f32(*args)


def handle_ldc_f64(reader, stack, env, constants):
    '''Handles the 0x05 instruction.'''
    stack.append(read_f64(reader))


def handle_lgc_f64(*args):
    '''Handles the 0x06 instruction.'''
    handle_ldc_f64(*args)


def handle_lgc_s(reader, stack, env, constants):
    '''Handles the 0x0D instruction.'''
    addr = read_u32(reader)
    # FIXME: Abstraction violation
    stack.append(constants[addr][2].decode('utf-8'))


def handle_add_g(*args):
    '''Handles the 0x11 instruction.'''
    handle_add_f(*args)


def handle_add_f(reader, stack, env, constants):
    '''Handles the 0x12 instruction.'''
    b = stack.pop()
    a = stack.pop()
    stack.append(a + b)


def handle_sub_g(*args):
    '''Handles the 0x13 instruction.'''
    handle_sub_f(*args)


def handle_sub_f(reader, stack, env, constants):
    '''Handles the 0x14 instruction.'''
    b = stack.pop()
    a = stack.pop()
    stack.append(a - b)


def handle_mul_g(*args):
    '''Handles the 0x15 instruction.'''
    handle_mul_f(*args)


def handle_mul_f(reader, stack, env, constants):
    '''Handles the 0x16 instruction.'''
    b = stack.pop()
    a = stack.pop()
    stack.append(a * b)


def handle_div_g(*args):
    '''Handles the 0x17 instruction.'''
    handle_div_f(*args)


def handle_div_f(reader, stack, env, constants):
    '''Handles the 0x18 instruction.'''
    b = stack.pop()
    a = stack.pop()
    stack.append(a / b)


def handle_mod_g(*args):
    '''Handles the 0x19 instruction.'''
    handle_mod_f(*args)


def handle_mod_f(reader, stack, env, constants):
    '''Handles the 0x1A instruction.'''
    b = stack.pop()
    a = stack.pop()
    stack.append(a % b)


def handle_call_p(reader, stack, env, constants):
    '''Handles the 0x42 instruction.'''
    f_id = read_u8(reader)
    n_args = read_u8(reader)

    args = stack[-n_args:]
    for _ in range(n_args):
        stack.pop()

    r = call_primitive_function(f_id, *args)
    stack.append(r)


def handle_ret_g(reader, stack, env, constants):
    '''Handles the 0x46 instruction.'''
    # TODO: Investigate correctness
    stack.pop()
`,Te=`from instructions.handlers import *

# Must match the order of the instructions in the wiki
# https://github.com/source-academy/js-slang/wiki/SVML-Instruction-Set#machine-parseable-instruction-set
INSTRUCTIONS = [
    'nop',
    'ldc.i',
    'lgc.i',
    'ldc.f32',
    'lgc.f32',
    'ldc.f64',
    'lgc.f64',
    'ldc.b.0',
    'ldc.b.1',
    'lgc.b.0',
    'lgc.b.1',
    'lgc.u',
    'lgc.n',
    'lgc.s',
    'pop.g',
    'pop.b',
    'pop.f',
    'add.g',
    'add.f',
    'sub.g',
    'sub.f',
    'mul.g',
    'mul.f',
    'div.g',
    'div.f',
    'mod.g',
    'mod.f',
    'not.g',
    'not.b',
    'lt.g',
    'lt.f',
    'gt.g',
    'gt.f',
    'le.g',
    'le.f',
    'ge.g',
    'ge.f',
    'eq.g',
    'eq.f',
    'eq.b',
    'new.c',
    'new.a',
    'ldl.g',
    'ldl.f',
    'ldl.b',
    'stl.g',
    'stl.b',
    'stl.f',
    'ldp.g',
    'ldp.f',
    'ldp.b',
    'stp.g',
    'stp.b',
    'stp.f',
    'lda.g',
    'lda.b',
    'lda.f',
    'sta.g',
    'sta.b',
    'sta.f',
    'br.t',
    'br.f',
    'br',
    'jmp',
    'call',
    'call.t',
    'call.p',
    'call.t.p',
    'call.v',
    'call.t.v',
    'ret.g',
    'ret.f',
    'ret.b',
    'ret.u',
    'ret.n',
    'dup',
    'newenv',
    'popenv',
    'new.c.p',
    'new.c.v',
    'neg.g',
    'neg.f',
    'neq.g',
    'neq.f',
    'neq.b',
]


def _handle_notimplemented(reader, stack, env, constants):
    raise NotImplementedError()


# TODO: Implement the rest of the instructions
INSTRUCTIONS_HANDLERS = {
    'nop': handle_noop,
    'ldc.i': handle_ldc_i,
    'lgc.i': handle_lgc_i,
    'ldc.f32': handle_ldc_f32,
    'lgc.f32': handle_lgc_f32,
    'ldc.f64': handle_ldc_f64,
    'lgc.f64': handle_lgc_f64,
    'lgc.s': handle_lgc_s,
    'add.g': handle_add_g,
    'add.f': handle_add_f,
    'sub.g': handle_sub_g,
    'sub.f': handle_sub_f,
    'mul.g': handle_mul_g,
    'mul.f': handle_mul_f,
    'div.g': handle_div_g,
    'div.f': handle_div_f,
    'mod.g': handle_mod_g,
    'mod.f': handle_mod_f,
    'call.p': handle_call_p,
    'ret.g': handle_ret_g,
}


def get_and_execute(opcode, reader, stack, env, constants):
    ins_name = INSTRUCTIONS[opcode]
    handler = INSTRUCTIONS_HANDLERS.get(ins_name, _handle_notimplemented)
    handler(reader, stack, env, constants)
`,Ee=`import math
from random import random

# Must match the order of the functions in the wiki
# https://github.com/source-academy/js-slang/wiki/SVML-Instruction-Set#primitive-functions
PRIMITIVE_FUNCTIONS = [
    'accumulate',  # Source 2
    'append',  # Source 2
    'array_length',  # Source 3
    'build_list',  # Source 2
    'build_stream',  # Source 3
    'display',  # Source 1
    'draw_data',  # Source 2
    'enum_list',  # Source 2
    'enum_stream',  # Source 3
    'equal',  # Source 2
    'error',  # Source 1
    'eval_stream',  # Source 3
    'filter',  # Source 2
    'for_each',  # Source 2
    'head',  # Source 2
    'integers_from',  # Source 3
    'is_array',  # Source 3
    'is_boolean',  # Source 1
    'is_function',  # Source 1
    'is_list',  # Source 2
    'is_null',  # Source 2
    'is_number',  # Source 1
    'is_pair',  # Source 2
    'is_stream',  # Source 3
    'is_string',  # Source 1
    'is_undefined',  # Source 1
    'length',  # Source 2
    'list',  # Source 2
    'list_ref',  # Source 2
    'list_to_stream',  # Source 3
    'list_to_string',  # Source 2
    'map',  # Source 2
    'math_abs',  # Source 1
    'math_acos',  # Source 1
    'math_acosh',  # Source 1
    'math_asin',  # Source 1
    'math_asinh',  # Source 1
    'math_atan',  # Source 1
    'math_atan2',  # Source 1
    'math_atanh',  # Source 1
    'math_cbrt',  # Source 1
    'math_ceil',  # Source 1
    'math_clz32',  # Source 1
    'math_cos',  # Source 1
    'math_cosh',  # Source 1
    'math_exp',  # Source 1
    'math_expm1',  # Source 1
    'math_floor',  # Source 1
    'math_fround',  # Source 1
    'math_hypot',  # Source 1
    'math_imul',  # Source 1
    'math_log',  # Source 1
    'math_log1p',  # Source 1
    'math_log2',  # Source 1
    'math_log10',  # Source 1
    'math_max',  # Source 1
    'math_min',  # Source 1
    'math_pow',  # Source 1
    'math_random',  # Source 1
    'math_round',  # Source 1
    'math_sign',  # Source 1
    'math_sin',  # Source 1
    'math_sinh',  # Source 1
    'math_sqrt',  # Source 1
    'math_tan',  # Source 1
    'math_tanh',  # Source 1
    'math_trunc',  # Source 1
    'member',  # Source 2
    'pair',  # Source 2
    'parse_int',  # Source 1
    'remove',  # Source 2
    'remove_all',  # Source 2
    'reverse',  # Source 2
    'runtime',
    'set_head',  # Source 3
    'set_tail',  # Source 3
    'stream',  # Source 3
    'stream_append',  # Source 3
    'stream_filter',  # Source 3
    'stream_for_each',  # Source 3
    'stream_length',  # Source 3
    'stream_map',  # Source 3
    'stream_member',  # Source 3
    'stream_ref',  # Source 3
    'stream_remove',  # Source 3
    'stream_remove_all',  # Source 3
    'stream_reverse',  # Source 3
    'stream_tail',  # Source 3
    'stream_to_list',  # Source 3
    'tail',  # Source 2
    'stringify',  # Source 1
    'prompt',  # Source 1
]


def _handle_notimplemented(*args):
    raise NotImplementedError()


IMPLEMENTED_FUNCTIONS = {
    # TODO: Wrap with a lambda to ensure only correct arity
    'display': print,
    'is_array': lambda x: type(x) is list,
    'is_boolean': lambda x: type(x) is bool,
    'is_function': _handle_notimplemented,
    'is_list': _handle_notimplemented,
    'is_null': lambda x: x is None,
    'is_number': lambda x: type(x) is int or type(x) is float,
    'is_pair': lambda x: type(x) is list and len(x) == 2,
    'is_stream': _handle_notimplemented,
    'is_string': lambda x: type(x) is str,
    'is_undefined': _handle_notimplemented,
    'math_abs': abs,
    'math_acos': math.acos,
    'math_acosh': math.acosh,
    'math_asin': math.asin,
    'math_asinh': math.asinh,
    'math_atan': math.atan,
    'math_atan2': math.atan2,
    'math_atanh': math.atanh,
    'math_cbrt': lambda x: x ** (1 / 3),
    'math_ceil': math.ceil,
    'math_clz32': lambda x: 32 - int(x).bit_length() if x >= 0 else 0,
    'math_cos': math.cos,
    'math_cosh': math.cosh,
    'math_exp': math.exp,
    'math_expm1': math.expm1,
    'math_floor': math.floor,
    'math_fround': _handle_notimplemented,
    'math_hypot': math.hypot,
    'math_imul': _handle_notimplemented,
    # We wrap with a lambda to ensure only correct arity
    'math_log': lambda x: math.log(x),
    'math_log1p': math.log1p,
    'math_log2': math.log2,
    'math_log10': math.log10,
    'math_max': max,
    'math_min': min,
    'math_pow': math.pow,
    'math_random': random,
    'math_round': _handle_notimplemented,
    'math_sign': lambda x: 1 if x > 0 else -1 if x < 0 else 0,
    'math_sin': math.sin,
    'math_sinh': math.sinh,
    'math_sqrt': math.sqrt,
    'math_tan': math.tan,
    'math_tanh': math.tanh,
    'math_trunc': math.trunc,
}


def call_primitive_function(id: int, *args):
    func_name = PRIMITIVE_FUNCTIONS[id]
    f = IMPLEMENTED_FUNCTIONS.get(func_name, _handle_notimplemented)
    return f(*args)
`,De=`from typing import Callable

from instructions.instructions import get_and_execute
from utils import State, read_u8, read_u16, read_u32

# SVML Specification Reference:
# https://github.com/source-academy/js-slang/wiki/SVML-Specification


# Header structure
# | Field               | Type          |
# | ------------------- | ------------- |
# | Magic               | u32           |
# | Major version       | u16           |
# | Minor version       | u16           |
# | Entry point         | address (u32) |
# | Constant pool count | u32           |


def read_header(reader: Callable[[int], bytes]) -> tuple[State, bool]:
    config: State = {}

    magic = read_u32(reader)
    major_version = read_u16(reader)
    minor_version = read_u16(reader)
    entry_point = read_u32(reader)
    constant_pool_count = read_u32(reader)

    if magic != 0x5005ACAD:
        return config, False

    config['entrypoint'] = entry_point
    config['constant_pool_count'] = constant_pool_count
    return config, True


# Constant structure
# | Field  | Type            |
# | ------ | --------------- |
# | Type   | u16             |
# | Length | u32             |
# | Data   | Depends on type |


def _read_constant(reader: Callable[[int], bytes]):
    t = read_u16(reader)
    l = read_u32(reader)
    d = reader(l)

    return (t, l, d), 6 + l


def read_constants(reader: Callable[[int], bytes], num_constants: int, start_addr: int = 0):
    constants = {}

    current_addr = start_addr
    for _ in range(num_constants):
        c, num_bytes = _read_constant(reader)
        constants[current_addr] = c

        # Each constant should be aligned to 4 bytes
        padding = (4 - (num_bytes % 4)) % 4
        reader(padding)

        current_addr += num_bytes + padding

    return constants


# Function structure
# | Field               | Type |
# | ------------------- | ---- |
# | Stack size          | u8   |
# | Environment size    | u8   |
# | Number of arguments | u8   |
# | Padding (alignment) | u8   |
# | Code Instruction    | []   |

def _read_function(reader: Callable[[int], bytes]):
    stack_size = read_u8(reader)
    env_size = read_u8(reader)
    num_args = read_u8(reader)
    padding = read_u8(reader)

    return (stack_size, env_size, num_args), 4


# Instruction structure
# | Field    | Type |
# | -------- | ---- |
# | Opcode   | u8   |
# | Operands | any  |

def main_loop(reader: Callable[[int], bytes], constants):
    stack = []
    env = {}

    while True:
        try:
            # Read instruction
            opcode = read_u8(reader)
        # FIXME: Abstraction violation
        except AssertionError:  # EOF
            return
        get_and_execute(opcode, reader, stack, env, constants)
`,Oe=`import sys
from typing import Callable

from interpreter import _read_function, main_loop, read_constants, read_header
from utils import State


def setup(filename: str | None) -> tuple[Callable[[int], bytes], Callable[[], None]]:
    if not filename:
        reader = sys.stdin.buffer.read1
        def cleanup(): return None
    else:
        f = open(filename, "rb")
        reader = f.read1
        cleanup = f.close

    return reader, cleanup


def main(args: list[str]) -> None:
    reader, cleanup = setup(args[0] if args else None)

    config, ok = read_header(reader)
    if not ok:
        cleanup()
        return

    # Header is 16 bytes
    constants = read_constants(reader, config['constant_pool_count'], 16)

    # FIXME: Implement
    _read_function(reader)

    main_loop(reader, constants)

    # while True:
    #     data = reader(1)
    #     if not data:
    #         break
    #     print(data)

    cleanup()


if __name__ == "__main__":
    main(sys.argv[1:])
`,ke=`import struct
from typing import Callable, TypedDict


class State(TypedDict):
    entrypoint: int
    constant_pool_count: int


def _to_int(b: bytes, size: int, signed: bool = False) -> int:
    assert len(b) == size
    return int.from_bytes(b, "little", signed=signed)


def read_u8(reader: Callable[[int], bytes]) -> int:
    return _to_int(reader(1), 1)


def read_u16(reader: Callable[[int], bytes]) -> int:
    return _to_int(reader(2), 2)


def read_u32(reader: Callable[[int], bytes]) -> int:
    return _to_int(reader(4), 4)


def read_i8(reader: Callable[[int], bytes]) -> int:
    return _to_int(reader(1), 1, signed=True)


def read_i16(reader: Callable[[int], bytes]) -> int:
    return _to_int(reader(2), 2, signed=True)


def read_i32(reader: Callable[[int], bytes]) -> int:
    return _to_int(reader(4), 4, signed=True)


def _to_float(b: bytes, size: int, format: str) -> float:
    assert len(b) == size
    return struct.unpack(format, b)[0]


def read_f32(reader: Callable[[int], bytes]) -> float:
    return _to_float(reader(4), 4, '<f')


def read_f64(reader: Callable[[int], bytes]) -> float:
    return _to_float(reader(8), 8, '<d')
`,Ae=`print('Hello from sinter-py!')
print(f'Received program: {len(prgrm)} bytes')

# Adapted from interpreter-src/main.py
# to be used in the docs

from io import BytesIO

from interpreter import _read_function, main_loop, read_constants, read_header
from utils import State


def setup():
    f = BytesIO(bytes(prgrm))
    reader = f.read1
    cleanup = f.close

    return reader, cleanup


def main() -> None:
    reader, cleanup = setup()

    config, ok = read_header(reader)
    if not ok:
        cleanup()
        return

    # Header is 16 bytes
    constants = read_constants(reader, config['constant_pool_count'], 16)

    # FIXME: Implement
    _read_function(reader)

    main_loop(reader, constants)

    # while True:
    #     data = reader(1)
    #     if not data:
    #         break
    #     print(data)

    cleanup()


if __name__ == "__main__":
    main()
`;let je=Object.assign({"./instructions/handlers.py":we,"./instructions/instructions.py":Te,"./instructions/primitives.py":Ee,"./interpreter.py":De,"./main.py":Oe,"./utils.py":ke});function Me(e){let t=Object.keys(e).map(e=>{let[t,...n]=e.split(`/`);return n.pop(),n.join(`/`)});return new Set(t.filter(e=>e.length>0))}let Ne=e=>{let t=e.FS,n=Me(je);for(let e of n)t.mkdirTree(e);for(let[e,n]of Object.entries(je))t.writeFile(e,n);t.writeFile(`main.py`,Ae)},Q=null,Pe=async()=>{let e=await Ce({indexURL:`https://cdn.jsdelivr.net/pyodide/v0.29.3/full`});return e.setStdout({batched:e=>$({type:`stdout`,text:e})}),e.setStderr({batched:e=>$({type:`stderr`,text:e})}),Ne(e),e},Fe=async()=>(Q===null&&(Q=Pe()),Q),$=e=>{self.postMessage(e)},Ie=async e=>{switch(e.type){case`init`:await Fe(),$({type:`ready`});return;case`run`:{let t=await Fe();t.globals.set(`prgrm`,e.payload),await t.runPythonAsync(`exec(open('main.py').read())`),$({type:`done`})}}};self.addEventListener(`message`,async e=>{let t=e.data;try{await Ie(t)}catch(e){$({type:`error`,error:e})}})})();