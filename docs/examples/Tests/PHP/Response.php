<?php
/*
 * This file is part of the KUBEjs package
 *
 * (c) Red Scotch Software Inc <kube+js@redscotch.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

//This is actually Engine/System/Output jacked from KUBE Engine and trimmed down for testing
class Response{
    private $customHeaders = [];
    private $disposition = null;
    private $fileSize = null;
    private $responseStatus = null;
    private $body = '';
    private $mimeType;
    private $fileName = 'test';

    public function SetDisposition($disposition='inline'){
        $this->disposition = $disposition;
    }

    public function SetResponseCode($responseCode){
        $this->responseStatus = Data::HTTPResponseCode($responseCode);
    }

    public function AddCustomHeader($headerString){
        if(!$this->customHeaders[$headerString]){
            $this->customHeaders[$headerString] = $headerString;
        }
    }

    public function SetBody($body){
        $this->body = $body;
        $this->fileSize = strlen($body);
    }

    public function SetMimeType($ext){
        $this->mimeType = Data::MimeType($ext);
    }

    public function SetFilename($fileName){
        $this->fileName = $fileName;
    }

    public function Output(){
        ob_start();
        $this->outputHeaders();
        echo $this->body;
        ob_end_flush();
        exit;
    }

    private function outputHeaders(){
        header($this->responseStatus);
        header("Content-Type: ".$this->mimeType."; charset=UTF-8");

        if($this->disposition){
            header("Content-Disposition: $this->disposition; filename=\"".$this->fileName."\";");
            if($this->disposition == 'attachment' && $this->fileSize){
                header("Content-Length: ".$this->fileSize);
            }
        }

        header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');
        header('Pragma: no-cache');

        if(isset($this->customHeaders) && is_array($this->customHeaders)){
            foreach($this->customHeaders as $header){
                header($header);
            }
        }
    }
}

//More stuff jacked from KUBE Engine Engine/data
class Data{
    public static function HTTPResponseCode($code){
        $codeTable = [
            "100"=> "HTTP/1.1 100 Continue",
            "101"=> "HTTP/1.1 101 Switching Protocols",
            "102"=> "HTTP/1.1 102 Processing",
            "200"=> "HTTP/1.1 200 OK",
            "201"=> "HTTP/1.1 201 Created",
            "202"=> "HTTP/1.1 202 Accepted",
            "203"=> "HTTP/1.1 203 Non-Authoritative Information",
            "204"=> "HTTP/1.1 204 No Content",
            "205"=> "HTTP/1.1 205 Reset Content",
            "206"=> "HTTP/1.1 206 Partial Content",
            "207"=> "HTTP/1.1 207 Multi-Status",
            "208"=> "HTTP/1.1 208 Already Reported",
            "226"=> "HTTP/1.1 226 IM Used",
            "300"=> "HTTP/1.1 300 Multiple Choices",
            "301"=> "HTTP/1.1 301 Moved Permanently",
            "302"=> "HTTP/1.1 302 Found",
            "303"=> "HTTP/1.1 303 See Other",
            "304"=> "HTTP/1.1 304 Not Modified",
            "305"=> "HTTP/1.1 305 Use Proxy",
            "307"=> "HTTP/1.1 307 Temporary Redirect",
            "308"=> "HTTP/1.1 308 Permanent Redirect",
            "400"=> "HTTP/1.1 400 Bad Request",
            "401"=> "HTTP/1.1 401 Unauthorized",
            "402"=> "HTTP/1.1 402 Payment Required",
            "403"=> "HTTP/1.1 403 Forbidden",
            "404"=> "HTTP/1.1 404 Not Found",
            "405"=> "HTTP/1.1 405 Method Not Allowed",
            "406"=> "HTTP/1.1 406 Not Acceptable",
            "407"=> "HTTP/1.1 407 Proxy Authentication Required",
            "408"=> "HTTP/1.1 408 Request Timeout",
            "409"=> "HTTP/1.1 409 Conflict",
            "410"=> "HTTP/1.1 410 Gone",
            "411"=> "HTTP/1.1 411 Length Required",
            "412"=> "HTTP/1.1 412 Precondition Failed",
            "413"=> "HTTP/1.1 413 Request Entity Too Large",
            "414"=> "HTTP/1.1 414 Request-URI Too Long",
            "415"=> "HTTP/1.1 415 Unsupported Media Type",
            "416"=> "HTTP/1.1 416 Request Range Not Satisfiable",
            "417"=> "HTTP/1.1 417 Expectation Failed",
            "418"=> "HTTP/1.1 418 I'm a teapot",
            "420"=> "HTTP/1.1 420 Enhance Your Calm",
            "422"=> "HTTP/1.1 422 Unprocessable Entity",
            "423"=> "HTTP/1.1 423 Locked",
            "424"=> "HTTP/1.1 424 Failed Dependancy",
            "425"=> "HTTP/1.1 425 Unordered Collection",
            "426"=> "HTTP/1.1 426 Upgrade Required",
            "428"=> "HTTP/1.1 428 Precondition Required",
            "429"=> "HTTP/1.1 429 Too Many Requests",
            "449"=> "HTTP/1.1 449 Retry With",
            "500"=> "HTTP/1.1 500 Internal Server Error",
            "501"=> "HTTP/1.1 501 Not Implemented",
            "502"=> "HTTP/1.1 502 Bad Gateway",
            "503"=> "HTTP/1.1 503 Service Unavailable",
            "504"=> "HTTP/1.1 504 Gateway Timeout",
            "505"=> "HTTP/1.1 505 HTTP Version Not Supported",
            "506"=> "HTTP/1.1 506 Variant Also Negotiates",
            "507"=> "HTTP/1.1 507 Insufficient Storage",
            "508"=> "HTTP/1.1 508 Loop Detected",
            "509"=> "HTTP/1.1 509 Bandwidth Limit Exceeded",
            "510"=> "HTTP/1.1 510 Not Extended",
            "511"=> "HTTP/1.1 511 Network Authentication Required",
            "598"=> "HTTP/1.1 598 Network read timeout error",
            "599"=> "HTTP/1.1 599 Network connect timeout error"
        ];
        return $codeTable[$code];
    }

    public static function MimeType($ext){
        $ext = strtolower($ext);
        $mimeTable = json_decode('{"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/ccxml+xml":["ccxml"],"application/cu-seeme":["cu"],"application/davmount+xml":["davmount"],"application/ecmascript":["ecma"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/font-tdpfr":["pfr"],"application/hyperstudio":["stk"],"application/java-archive":["jar"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js"],"application/json":["json"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/marc":["mrc"],"application/mathematica":["ma","mb","nb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/mp4":["mp4s"],"application/msword":["doc","dot","wiz"],"application/mxf":["mxf"],"application/octet-stream":["a","bin","bpk","deploy","dist","distz","dmg","dms","dump","elc","iso","lha","lrf","lzh","o","obj","pkg","so"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/onenote":["onepkg","onetmp","onetoc","onetoc2"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7c","p7m"],"application/pkcs7-signature":["p7s"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/prs.cww":["cww"],"application/rdf+xml":["rdf"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/ssml+xml":["ssml"],"application/vnd.3gpp.pic-bw-large":["plb"],"application/vnd.3gpp.pic-bw-small":["psb"],"application/vnd.3gpp.pic-bw-var":["pvb"],"application/vnd.3gpp2.tcap":["tcap"],"application/vnd.3m.post-it-notes":["pwn"],"application/vnd.accpac.simply.aso":["aso"],"application/vnd.accpac.simply.imp":["imp"],"application/vnd.acucobol":["acu"],"application/vnd.acucorp":["acutc","atc"],"application/vnd.adobe.air-application-installer-package+zip":["air"],"application/vnd.adobe.xdp+xml":["xdp"],"application/vnd.adobe.xfdf":["xfdf"],"application/vnd.airzip.filesecure.azf":["azf"],"application/vnd.airzip.filesecure.azs":["azs"],"application/vnd.amazon.ebook":["azw"],"application/vnd.americandynamics.acc":["acc"],"application/vnd.amiga.ami":["ami"],"application/vnd.android.package-archive":["apk"],"application/vnd.anser-web-certificate-issue-initiation":["cii"],"application/vnd.anser-web-funds-transfer-initiation":["fti"],"application/vnd.antix.game-component":["atx"],"application/vnd.apple.installer+xml":["mpkg"],"application/vnd.arastra.swi":["swi"],"application/vnd.audiograph":["aep"],"application/vnd.blueice.multipass":["mpm"],"application/vnd.bmi":["bmi"],"application/vnd.businessobjects":["rep"],"application/vnd.chemdraw+xml":["cdxml"],"application/vnd.chipnuts.karaoke-mmd":["mmd"],"application/vnd.cinderella":["cdy"],"application/vnd.claymore":["cla"],"application/vnd.clonk.c4group":["c4d","c4f","c4g","c4p","c4u"],"application/vnd.commonspace":["csp"],"application/vnd.contact.cmsg":["cdbcmsg"],"application/vnd.cosmocaller":["cmc"],"application/vnd.crick.clicker":["clkx"],"application/vnd.crick.clicker.keyboard":["clkk"],"application/vnd.crick.clicker.palette":["clkp"],"application/vnd.crick.clicker.template":["clkt"],"application/vnd.crick.clicker.wordbank":["clkw"],"application/vnd.criticaltools.wbs+xml":["wbs"],"application/vnd.ctc-posml":["pml"],"application/vnd.cups-ppd":["ppd"],"application/vnd.curl.car":["car"],"application/vnd.curl.pcurl":["pcurl"],"application/vnd.data-vision.rdz":["rdz"],"application/vnd.denovo.fcselayout-link":["fe_launch"],"application/vnd.dna":["dna"],"application/vnd.dolby.mlp":["mlp"],"application/vnd.dpgraph":["dpg"],"application/vnd.dreamfactory":["dfac"],"application/vnd.dynageo":["geo"],"application/vnd.ecowin.chart":["mag"],"application/vnd.enliven":["nml"],"application/vnd.epson.esf":["esf"],"application/vnd.epson.msf":["msf"],"application/vnd.epson.quickanime":["qam"],"application/vnd.epson.salt":["slt"],"application/vnd.epson.ssf":["ssf"],"application/vnd.eszigno3+xml":["es3","et3"],"application/vnd.ezpix-album":["ez2"],"application/vnd.ezpix-package":["ez3"],"application/vnd.fdf":["fdf"],"application/vnd.fdsn.mseed":["mseed"],"application/vnd.fdsn.seed":["dataless","seed"],"application/vnd.flographit":["gph"],"application/vnd.fluxtime.clip":["ftc"],"application/vnd.framemaker":["book","fm","frame","maker"],"application/vnd.frogans.fnc":["fnc"],"application/vnd.frogans.ltf":["ltf"],"application/vnd.fsc.weblaunch":["fsc"],"application/vnd.fujitsu.oasys":["oas"],"application/vnd.fujitsu.oasys2":["oa2"],"application/vnd.fujitsu.oasys3":["oa3"],"application/vnd.fujitsu.oasysgp":["fg5"],"application/vnd.fujitsu.oasysprs":["bh2"],"application/vnd.fujixerox.ddd":["ddd"],"application/vnd.fujixerox.docuworks":["xdw"],"application/vnd.fujixerox.docuworks.binder":["xbd"],"application/vnd.fuzzysheet":["fzs"],"application/vnd.genomatix.tuxedo":["txd"],"application/vnd.geogebra.file":["ggb"],"application/vnd.geogebra.tool":["ggt"],"application/vnd.geometry-explorer":["gex","gre"],"application/vnd.gmx":["gmx"],"application/vnd.google-earth.kml+xml":["kml"],"application/vnd.google-earth.kmz":["kmz"],"application/vnd.grafeq":["gqf","gqs"],"application/vnd.groove-account":["gac"],"application/vnd.groove-help":["ghf"],"application/vnd.groove-identity-message":["gim"],"application/vnd.groove-injector":["grv"],"application/vnd.groove-tool-message":["gtm"],"application/vnd.groove-tool-template":["tpl"],"application/vnd.groove-vcard":["vcg"],"application/vnd.handheld-entertainment+xml":["zmm"],"application/vnd.hbci":["hbci"],"application/vnd.hhe.lesson-player":["les"],"application/vnd.hp-hpgl":["hpgl"],"application/vnd.hp-hpid":["hpid"],"application/vnd.hp-hps":["hps"],"application/vnd.hp-jlyt":["jlt"],"application/vnd.hp-pcl":["pcl"],"application/vnd.hp-pclxl":["pclxl"],"application/vnd.hydrostatix.sof-data":["sfd-hdstx"],"application/vnd.hzn-3d-crossword":["x3d"],"application/vnd.ibm.minipay":["mpy"],"application/vnd.ibm.modcap":["afp","list3820","listafp"],"application/vnd.ibm.rights-management":["irm"],"application/vnd.ibm.secure-container":["sc"],"application/vnd.iccprofile":["icc","icm"],"application/vnd.igloader":["igl"],"application/vnd.immervision-ivp":["ivp"],"application/vnd.immervision-ivu":["ivu"],"application/vnd.intercon.formnet":["xpw","xpx"],"application/vnd.intu.qbo":["qbo"],"application/vnd.intu.qfx":["qfx"],"application/vnd.ipunplugged.rcprofile":["rcprofile"],"application/vnd.irepository.package+xml":["irp"],"application/vnd.is-xpr":["xpr"],"application/vnd.jam":["jam"],"application/vnd.jcp.javame.midlet-rms":["rms"],"application/vnd.jisp":["jisp"],"application/vnd.joost.joda-archive":["joda"],"application/vnd.kahootz":["ktr","ktz"],"application/vnd.kde.karbon":["karbon"],"application/vnd.kde.kchart":["chrt"],"application/vnd.kde.kformula":["kfo"],"application/vnd.kde.kivio":["flw"],"application/vnd.kde.kontour":["kon"],"application/vnd.kde.kpresenter":["kpr","kpt"],"application/vnd.kde.kspread":["ksp"],"application/vnd.kde.kword":["kwd","kwt"],"application/vnd.kenameaapp":["htke"],"application/vnd.kidspiration":["kia"],"application/vnd.kinar":["kne","knp"],"application/vnd.koan":["skd","skm","skp","skt"],"application/vnd.kodak-descriptor":["sse"],"application/vnd.llamagraphics.life-balance.desktop":["lbd"],"application/vnd.llamagraphics.life-balance.exchange+xml":["lbe"],"application/vnd.lotus-1-2-3":["123"],"application/vnd.lotus-approach":["apr"],"application/vnd.lotus-freelance":["pre"],"application/vnd.lotus-notes":["nsf"],"application/vnd.lotus-organizer":["org"],"application/vnd.lotus-screencam":["scm"],"application/vnd.lotus-wordpro":["lwp"],"application/vnd.macports.portpkg":["portpkg"],"application/vnd.mcd":["mcd"],"application/vnd.medcalcdata":["mc1"],"application/vnd.mediastation.cdkey":["cdkey"],"application/vnd.mfer":["mwf"],"application/vnd.mfmp":["mfm"],"application/vnd.micrografx.flo":["flo"],"application/vnd.micrografx.igx":["igx"],"application/vnd.mif":["mif"],"application/vnd.mobius.daf":["daf"],"application/vnd.mobius.dis":["dis"],"application/vnd.mobius.mbk":["mbk"],"application/vnd.mobius.mqy":["mqy"],"application/vnd.mobius.msl":["msl"],"application/vnd.mobius.plc":["plc"],"application/vnd.mobius.txf":["txf"],"application/vnd.mophun.application":["mpn"],"application/vnd.mophun.certificate":["mpc"],"application/vnd.mozilla.xul+xml":["xul"],"application/vnd.ms-artgalry":["cil"],"application/vnd.ms-cab-compressed":["cab"],"application/vnd.ms-excel":["xla","xlb","xlc","xlm","xls","xlt","xlw"],"application/vnd.ms-excel.addin.macroenabled.12":["xlam"],"application/vnd.ms-excel.sheet.binary.macroenabled.12":["xlsb"],"application/vnd.ms-excel.sheet.macroenabled.12":["xlsm"],"application/vnd.ms-excel.template.macroenabled.12":["xltm"],"application/vnd.ms-fontobject":["eot"],"application/vnd.ms-htmlhelp":["chm"],"application/vnd.ms-ims":["ims"],"application/vnd.ms-lrm":["lrm"],"application/vnd.ms-pki.seccat":["cat"],"application/vnd.ms-pki.stl":["stl"],"application/vnd.ms-powerpoint":["pot","ppa","pps","ppt","pwz"],"application/vnd.ms-powerpoint.addin.macroenabled.12":["ppam"],"application/vnd.ms-powerpoint.presentation.macroenabled.12":["pptm"],"application/vnd.ms-powerpoint.slide.macroenabled.12":["sldm"],"application/vnd.ms-powerpoint.slideshow.macroenabled.12":["ppsm"],"application/vnd.ms-powerpoint.template.macroenabled.12":["potm"],"application/vnd.ms-project":["mpp","mpt"],"application/vnd.ms-word.document.macroenabled.12":["docm"],"application/vnd.ms-word.template.macroenabled.12":["dotm"],"application/vnd.ms-works":["wcm","wdb","wks","wps"],"application/vnd.ms-wpl":["wpl"],"application/vnd.ms-xpsdocument":["xps"],"application/vnd.mseq":["mseq"],"application/vnd.musician":["mus"],"application/vnd.muvee.style":["msty"],"application/vnd.neurolanguage.nlu":["nlu"],"application/vnd.noblenet-directory":["nnd"],"application/vnd.noblenet-sealer":["nns"],"application/vnd.noblenet-web":["nnw"],"application/vnd.nokia.n-gage.data":["ngdat"],"application/vnd.nokia.n-gage.symbian.install":["n-gage"],"application/vnd.nokia.radio-preset":["rpst"],"application/vnd.nokia.radio-presets":["rpss"],"application/vnd.novadigm.edm":["edm"],"application/vnd.novadigm.edx":["edx"],"application/vnd.novadigm.ext":["ext"],"application/vnd.oasis.opendocument.chart":["odc"],"application/vnd.oasis.opendocument.chart-template":["otc"],"application/vnd.oasis.opendocument.database":["odb"],"application/vnd.oasis.opendocument.formula":["odf"],"application/vnd.oasis.opendocument.formula-template":["odft"],"application/vnd.oasis.opendocument.graphics":["odg"],"application/vnd.oasis.opendocument.graphics-template":["otg"],"application/vnd.oasis.opendocument.image":["odi"],"application/vnd.oasis.opendocument.image-template":["oti"],"application/vnd.oasis.opendocument.presentation":["odp"],"application/vnd.oasis.opendocument.presentation-template":["otp"],"application/vnd.oasis.opendocument.spreadsheet":["ods"],"application/vnd.oasis.opendocument.spreadsheet-template":["ots"],"application/vnd.oasis.opendocument.text":["odt"],"application/vnd.oasis.opendocument.text-master":["otm"],"application/vnd.oasis.opendocument.text-template":["ott"],"application/vnd.oasis.opendocument.text-web":["oth"],"application/vnd.olpc-sugar":["xo"],"application/vnd.oma.dd2+xml":["dd2"],"application/vnd.openofficeorg.extension":["oxt"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":["pptx"],"application/vnd.openxmlformats-officedocument.presentationml.slide":["sldx"],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":["ppsx"],"application/vnd.openxmlformats-officedocument.presentationml.template":["potx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":["xlsx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":["xltx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":["docx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.template":["dotx"],"application/vnd.osgi.dp":["dp"],"application/vnd.palm":["oprc","pdb","pqa"],"application/vnd.pg.format":["str"],"application/vnd.pg.osasli":["ei6"],"application/vnd.picsel":["efif"],"application/vnd.pocketlearn":["plf"],"application/vnd.powerbuilder6":["pbd"],"application/vnd.previewsystems.box":["box"],"application/vnd.proteus.magazine":["mgz"],"application/vnd.publishare-delta-tree":["qps"],"application/vnd.pvi.ptid1":["ptid"],"application/vnd.quark.quarkxpress":["qwd","qwt","qxb","qxd","qxl","qxt"],"application/vnd.recordare.musicxml":["mxl"],"application/vnd.recordare.musicxml+xml":["musicxml"],"application/vnd.rim.cod":["cod"],"application/vnd.rn-realmedia":["rm"],"application/vnd.route66.link66+xml":["link66"],"application/vnd.seemail":["see"],"application/vnd.sema":["sema"],"application/vnd.semd":["semd"],"application/vnd.semf":["semf"],"application/vnd.shana.informed.formdata":["ifm"],"application/vnd.shana.informed.formtemplate":["itp"],"application/vnd.shana.informed.interchange":["iif"],"application/vnd.shana.informed.package":["ipk"],"application/vnd.simtech-mindmapper":["twd","twds"],"application/vnd.smaf":["mmf"],"application/vnd.smart.teacher":["teacher"],"application/vnd.solent.sdkm+xml":["sdkd","sdkm"],"application/vnd.spotfire.dxp":["dxp"],"application/vnd.spotfire.sfs":["sfs"],"application/vnd.stardivision.calc":["sdc"],"application/vnd.stardivision.draw":["sda"],"application/vnd.stardivision.impress":["sdd"],"application/vnd.stardivision.math":["smf"],"application/vnd.stardivision.writer":["sdw","vor"],"application/vnd.stardivision.writer-global":["sgl"],"application/vnd.sun.xml.calc":["sxc"],"application/vnd.sun.xml.calc.template":["stc"],"application/vnd.sun.xml.draw":["sxd"],"application/vnd.sun.xml.draw.template":["std"],"application/vnd.sun.xml.impress":["sxi"],"application/vnd.sun.xml.impress.template":["sti"],"application/vnd.sun.xml.math":["sxm"],"application/vnd.sun.xml.writer":["sxw"],"application/vnd.sun.xml.writer.global":["sxg"],"application/vnd.sun.xml.writer.template":["stw"],"application/vnd.sus-calendar":["sus","susp"],"application/vnd.svd":["svd"],"application/vnd.symbian.install":["sis","sisx"],"application/vnd.syncml+xml":["xsm"],"application/vnd.syncml.dm+wbxml":["bdm"],"application/vnd.syncml.dm+xml":["xdm"],"application/vnd.tao.intent-module-archive":["tao"],"application/vnd.tmobile-livetv":["tmo"],"application/vnd.trid.tpt":["tpt"],"application/vnd.triscape.mxs":["mxs"],"application/vnd.trueapp":["tra"],"application/vnd.ufdl":["ufd","ufdl"],"application/vnd.uiq.theme":["utz"],"application/vnd.umajin":["umj"],"application/vnd.unity":["unityweb"],"application/vnd.uoml+xml":["uoml"],"application/vnd.vcx":["vcx"],"application/vnd.visio":["vsd","vss","vst","vsw"],"application/vnd.visionary":["vis"],"application/vnd.vsf":["vsf"],"application/vnd.wap.sic":["sic"],"application/vnd.wap.slc":["slc"],"application/vnd.wap.wbxml":["wbxml"],"application/vnd.wap.wmlc":["wmlc"],"application/vnd.wap.wmlscriptc":["wmlsc"],"application/vnd.webturbo":["wtb"],"application/vnd.wordperfect":["wpd"],"application/vnd.wqd":["wqd"],"application/vnd.wt.stf":["stf"],"application/vnd.xara":["xar"],"application/vnd.xfdl":["xfdl"],"application/vnd.yamaha.hv-dic":["hvd"],"application/vnd.yamaha.hv-script":["hvs"],"application/vnd.yamaha.hv-voice":["hvp"],"application/vnd.yamaha.openscoreformat":["osf"],"application/vnd.yamaha.openscoreformat.osfpvg+xml":["osfpvg"],"application/vnd.yamaha.smaf-audio":["saf"],"application/vnd.yamaha.smaf-phrase":["spf"],"application/vnd.yellowriver-custom-menu":["cmp"],"application/vnd.zul":["zir","zirz"],"application/vnd.zzazz.deck+xml":["zaz"],"application/voicexml+xml":["vxml"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/x-abiword":["abw"],"application/x-ace-compressed":["ace"],"application/x-authorware-bin":["aab","u32","vox","x32"],"application/x-authorware-map":["aam"],"application/x-authorware-seg":["aas"],"application/x-bcpio":["bcpio"],"application/x-bittorrent":["torrent"],"application/x-bzip":["bz"],"application/x-bzip2":["boz","bz2"],"application/x-cdlink":["vcd"],"application/x-chat":["chat"],"application/x-chess-pgn":["pgn"],"application/x-cpio":["cpio"],"application/x-csh":["csh"],"application/x-debian-package":["deb","udeb"],"application/x-director":["cct","cst","cxt","dcr","dir","dxr","fgd","swa","w3d"],"application/x-doom":["wad"],"application/x-dtbncx+xml":["ncx"],"application/x-dtbook+xml":["dtb"],"application/x-dtbresource+xml":["res"],"application/x-dvi":["dvi"],"application/x-font-bdf":["bdf"],"application/x-font-ghostscript":["gsf"],"application/x-font-linux-psf":["psf"],"application/x-font-otf":["otf"],"application/x-font-pcf":["pcf"],"application/x-font-snf":["snf"],"application/x-font-ttf":["ttc","ttf"],"application/x-font-type1":["afm","pfa","pfb","pfm"],"application/x-futuresplash":["spl"],"application/x-gnumeric":["gnumeric"],"application/x-gtar":["gtar"],"application/x-gzip":["gz","tgz"],"application/x-hdf":["hdf"],"application/x-java-jnlp-file":["jnlp"],"application/x-killustrator":["kil"],"application/x-latex":["latex"],"application/x-mobipocket-ebook":["mobi","prc"],"application/x-ms-application":["application"],"application/x-ms-wmd":["wmd"],"application/x-ms-wmz":["wmz"],"application/x-ms-xbap":["xbap"],"application/x-msaccess":["mdb"],"application/x-msbinder":["obd"],"application/x-mscardfile":["crd"],"application/x-msclip":["clp"],"application/x-msdownload":["bat","com","dll","exe","msi"],"application/x-msmediaview":["m13","m14","mvb"],"application/x-msmetafile":["wmf"],"application/x-msmoney":["mny"],"application/x-mspublisher":["pub"],"application/x-msschedule":["scd"],"application/x-msterminal":["trm"],"application/x-mswrite":["wri"],"application/x-netcdf":["cdf","nc"],"application/x-pkcs12":["p12","pfx"],"application/x-pkcs7-certificates":["p7b","spc"],"application/x-pkcs7-certreqresp":["p7r"],"application/x-python-code":["pyc","pyo"],"application/x-rar-compressed":["rar"],"application/x-rpm":["rpm"],"application/x-sh":["sh"],"application/x-shar":["shar"],"application/x-shockwave-flash":["swf"],"application/x-silverlight-app":["xap"],"application/x-stuffit":["sit"],"application/x-stuffitx":["sitx"],"application/x-sv4cpio":["sv4cpio"],"application/x-sv4crc":["sv4crc"],"application/x-tar":["tar"],"application/x-tcl":["tcl"],"application/x-tex":["tex"],"application/x-tex-tfm":["tfm"],"application/x-texinfo":["texi","texinfo"],"application/x-ustar":["ustar"],"application/x-wais-source":["src"],"application/x-x509-ca-cert":["crt","der"],"application/x-xfig":["fig"],"application/x-xpinstall":["xpi"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xht","xhtml"],"application/xml":["xml","xpdl","xsl"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvm","xvml"],"application/zip":["zip"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["kar","mid","midi","rmi"],"audio/mp4":["mp4a"],"audio/mpeg":["m2a","m3a","mp2","mp2a","mp3","mpga"],"audio/ogg":["oga","ogg","spx"],"audio/vnd.digital-winds":["eol"],"audio/vnd.dts":["dts"],"audio/vnd.dts.hd":["dtshd"],"audio/vnd.lucent.voice":["lvp"],"audio/vnd.ms-playready.media.pya":["pya"],"audio/vnd.nuera.ecelp4800":["ecelp4800"],"audio/vnd.nuera.ecelp7470":["ecelp7470"],"audio/vnd.nuera.ecelp9600":["ecelp9600"],"audio/x-aac":["aac"],"audio/x-aiff":["aif","aifc","aiff"],"audio/x-mpegurl":["m3u"],"audio/x-ms-wax":["wax"],"audio/x-ms-wma":["wma"],"audio/x-pn-realaudio":["ra","ram"],"audio/x-pn-realaudio-plugin":["rmp"],"audio/x-wav":["wav"],"chemical/x-cdx":["cdx"],"chemical/x-cif":["cif"],"chemical/x-cmdf":["cmdf"],"chemical/x-cml":["cml"],"chemical/x-csml":["csml"],"chemical/x-xyz":["xyz"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/g3fax":["g3"],"image/gif":["gif"],"image/ief":["ief"],"image/jpeg":["jpe","jpeg","jpg"],"image/png":["png"],"image/prs.btif":["btif"],"image/svg+xml":["svg","svgz"],"image/tiff":["tif","tiff"],"image/vnd.adobe.photoshop":["psd"],"image/vnd.djvu":["djv","djvu"],"image/vnd.dwg":["dwg"],"image/vnd.dxf":["dxf"],"image/vnd.fastbidsheet":["fbs"],"image/vnd.fpx":["fpx"],"image/vnd.fst":["fst"],"image/vnd.fujixerox.edmics-mmr":["mmr"],"image/vnd.fujixerox.edmics-rlc":["rlc"],"image/vnd.ms-modi":["mdi"],"image/vnd.net-fpx":["npx"],"image/vnd.wap.wbmp":["wbmp"],"image/vnd.xiff":["xif"],"image/x-cmu-raster":["ras"],"image/x-cmx":["cmx"],"image/x-freehand":["fh","fh4","fh5","fh7","fhc"],"image/x-icon":["ico"],"image/x-pcx":["pcx"],"image/x-pict":["pct","pic"],"image/x-portable-anymap":["pnm"],"image/x-portable-bitmap":["pbm"],"image/x-portable-graymap":["pgm"],"image/x-portable-pixmap":["ppm"],"image/x-rgb":["rgb"],"image/x-xbitmap":["xbm"],"image/x-xpixmap":["xpm"],"image/x-xwindowdump":["xwd"],"message/rfc822":["eml","mht","mhtml","mime","nws"],"model/iges":["iges","igs"],"model/mesh":["mesh","msh","silo"],"model/vnd.dwf":["dwf"],"model/vnd.gdl":["gdl"],"model/vnd.gtw":["gtw"],"model/vnd.mts":["mts"],"model/vnd.vtu":["vtu"],"model/vrml":["vrml","wrl"],"text/calendar":["ics","ifb"],"text/css":["css"],"text/csv":["csv"],"text/html":["htm","html"],"text/plain":["conf","def","diff","in","ksh","list","log","pl","text","txt","wut"],"text/prs.lines.tag":["dsc"],"text/richtext":["rtx"],"text/sgml":["sgm","sgml"],"text/tab-separated-values":["tsv"],"text/troff":["man","me","ms","roff","t","tr"],"text/uri-list":["uri","uris","urls"],"text/vnd.curl":["curl"],"text/vnd.curl.dcurl":["dcurl"],"text/vnd.curl.mcurl":["mcurl"],"text/vnd.curl.scurl":["scurl"],"text/vnd.fly":["fly"],"text/vnd.fmi.flexstor":["flx"],"text/vnd.graphviz":["gv"],"text/vnd.in3d.3dml":["3dml"],"text/vnd.in3d.spot":["spot"],"text/vnd.sun.j2me.app-descriptor":["jad"],"text/vnd.wap.si":["si"],"text/vnd.wap.sl":["sl"],"text/vnd.wap.wml":["wml"],"text/vnd.wap.wmlscript":["wmls"],"text/x-asm":["asm","s"],"text/x-c":["c","cc","cpp","cxx","dic","h","hh"],"text/x-fortran":["f","f77","f90","for"],"text/x-java-source":["java"],"text/x-pascal":["p","pas"],"text/x-python":["py"],"text/x-setext":["etx"],"text/x-uuencode":["uu"],"text/x-vcalendar":["vcs"],"text/x-vcard":["vcf"],"video/3gpp":["3gp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["jpgm","jpm"],"video/mj2":["mj2","mjp2"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["m1v","m2v","mpa","mpe","mpeg","mpg"],"video/ogg":["ogv"],"video/quicktime":["mov","qt"],"video/vnd.fvt":["fvt"],"video/vnd.mpegurl":["m4u","mxu"],"video/vnd.ms-playready.media.pyv":["pyv"],"video/vnd.vivo":["viv"],"video/x-f4v":["f4v"],"video/x-fli":["fli"],"video/x-flv":["flv"],"video/x-m4v":["m4v"],"video/x-ms-asf":["asf","asx"],"video/x-ms-wm":["wm"],"video/x-ms-wmv":["wmv"],"video/x-ms-wmx":["wmx"],"video/x-ms-wvx":["wvx"],"video/x-msvideo":["avi"],"video/x-sgi-movie":["movie"],"x-conference/x-cooltalk":["ice"]}',true);
        $return = 'text/plain';
        foreach($mimeTable as $mimeType => $extList){
            if(in_array($ext,$extList)){
                $return = $mimeType;
                break;
            }
        }
        return $return;
    }

    public static function RequestHeaders(){
        foreach($_SERVER as $key => $val){
            if(substr($key, 0, 5) == "HTTP_"){
                $h = str_replace('_', '', substr($key, 5));
                $h = str_replace(' ', '-', strtolower($key));
                $return[$h] = $val;
            }
        }
        return $return;
    }
}